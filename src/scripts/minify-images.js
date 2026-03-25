/**
 * Image Minification Script
 * -------------------------
 * public/ klasöründeki tüm PNG ve JPEG görsellerini yüksek oranda sıkıştırarak
 * public/minify/ klasörüne kaydeder. Orijinal dosyalara dokunulmaz.
 *
 * Kullanım:
 *   npm run minify
 *   veya: node src/scripts/minify-images.js
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// ─── Ayarlar ────────────────────────────────────────────────────────────────
const PUBLIC_DIR = path.join(__dirname, "../../public/not_converted");
const OUTPUT_DIR = path.join(__dirname, "../../public/minify");

// Maksimum genişlik/yükseklik (oranı koruyarak küçültür)
// Ürün fotoğrafları için 1920px yeterli; web'de daha büyük açılmaz
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;

// JPEG kalitesi (70 → ciddi boyut düşüşü, gözle neredeyse fark edilmez)
const JPEG_QUALITY = 80;

// PNG → JPEG dönüşümü (PNG'ler çok büyük, JPEG ile ~%80 küçülür)
// false yaparsanız PNG olarak kalır ama boyut çok az düşer
const PNG_TO_JPEG = true;

// ─── Yardımcı ───────────────────────────────────────────────────────────────
function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function getSupportedImages(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g)$/i.test(f) && f !== "minify") // alt klasörü atla
    .map((f) => ({ name: f, full: path.join(dir, f) }));
}

// ─── Ana işlem ──────────────────────────────────────────────────────────────
async function minifyImages() {
  // Çıktı klasörünü oluştur
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Klasör oluşturuldu: public/minify/\n`);
  }

  const images = getSupportedImages(PUBLIC_DIR);

  if (images.length === 0) {
    console.log("public/ klasöründe işlenecek resim bulunamadı.");
    return;
  }

  console.log(`🖼️  ${images.length} görsel bulundu. Sıkıştırma başlıyor...\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  let successCount = 0;

  for (const { name, full } of images) {
    const ext = path.extname(name).toLowerCase();
    const originalSize = fs.statSync(full).size;
    totalOriginal += originalSize;

    // Çıktı dosya adı: PNG ise .jpg uzantısına çevir
    const outName = PNG_TO_JPEG && ext === ".png"
      ? name.replace(/\.png$/i, ".jpg")
      : name;
    const outPath = path.join(OUTPUT_DIR, outName);

    try {
      let pipeline = sharp(full).resize({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        fit: "inside",          // oranı bozmadan sığdır
        withoutEnlargement: true,  // küçük görselleri büyütme
      });

      if (PNG_TO_JPEG && ext === ".png") {
        pipeline = pipeline.jpeg({
          quality: JPEG_QUALITY,
          mozjpeg: true,
          progressive: true,
        });
      } else {
        // Zaten JPEG
        pipeline = pipeline.jpeg({
          quality: JPEG_QUALITY,
          mozjpeg: true,
          progressive: true,
        });
      }

      await pipeline.toFile(outPath);

      const compressedSize = fs.statSync(outPath).size;
      totalCompressed += compressedSize;
      successCount++;

      const saved = originalSize - compressedSize;
      const pct = ((saved / originalSize) * 100).toFixed(1);

      console.log(
        `✅ ${name.padEnd(42)} ${formatBytes(originalSize).padStart(8)} → ${formatBytes(compressedSize).padStart(8)}  (-%${pct})`
      );
    } catch (err) {
      totalCompressed += originalSize;
      console.error(`❌ HATA  ${name}: ${err.message}`);
    }
  }

  // ─── Özet ───────────────────────────────────────────────────────────────
  const totalSaved = totalOriginal - totalCompressed;
  const totalPct = ((totalSaved / totalOriginal) * 100).toFixed(1);

  console.log("\n" + "─".repeat(70));
  console.log(`📊 Özet`);
  console.log("─".repeat(70));
  console.log(`   Toplam görsel      : ${images.length}`);
  console.log(`   Sıkıştırılan       : ${successCount}`);
  console.log(`   Çıktı klasörü      : public/minify/`);
  console.log(`   Önceki toplam boyut: ${formatBytes(totalOriginal)}`);
  console.log(`   Sonraki toplam boyut: ${formatBytes(totalCompressed)}`);
  console.log(`   Kazanılan alan     : ${formatBytes(totalSaved)} (-%${totalPct})`);
  console.log("─".repeat(70) + "\n");
}

minifyImages().catch((err) => {
  console.error("Beklenmeyen hata:", err);
  process.exit(1);
});
