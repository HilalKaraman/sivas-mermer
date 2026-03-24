/**
 * Supabase Storage Upload Script
 * ──────────────────────────────
 * public/minify/ klasöründeki tüm görsel dosyalarını
 * Supabase Storage → "urunler" bucket'ına yükler.
 *
 * Kullanım:
 *   npm run upload
 *   veya: node src/scripts/upload-to-supabase.js
 *
 * Ön koşul:
 *   - .env.local içinde SUPABASE_SERVICE_ROLE_KEY ve NEXT_PUBLIC_SUPABASE_URL tanımlı olmalı
 *   - Supabase Dashboard → Storage → "urunler" adlı PUBLIC bucket oluşturulmuş olmalı
 */

require("dotenv").config({ path: ".env.local" });

const { createClient } = require("@supabase/supabase-js");
const fs   = require("fs");
const path = require("path");

// ─── Ayarlar ────────────────────────────────────────────────────────────────
const SUPABASE_URL          = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET                = "urunler";
const MINIFY_DIR            = path.join(__dirname, "../../public/minify");

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("❌ .env.local içinde NEXT_PUBLIC_SUPABASE_URL veya SUPABASE_SERVICE_ROLE_KEY eksik!");
  process.exit(1);
}

// Service role key kullanıyoruz → bucket'a yazma izni var
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ─── Yardımcı ───────────────────────────────────────────────────────────────
function formatBytes(bytes) {
  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function getContentType(ext) {
  return ext === ".png" ? "image/png" : "image/jpeg";
}

// ─── Ana işlem ──────────────────────────────────────────────────────────────
async function uploadImages() {
  if (!fs.existsSync(MINIFY_DIR)) {
    console.error(`❌ Klasör bulunamadı: public/minify/`);
    console.error("   Önce 'npm run minify' çalıştırın.");
    process.exit(1);
  }

  const files = fs
    .readdirSync(MINIFY_DIR)
    .filter((f) => /\.(jpe?g|png)$/i.test(f));

  if (files.length === 0) {
    console.log("public/minify/ klasöründe yüklenecek görsel bulunamadı.");
    return;
  }

  console.log(`\n🚀 ${files.length} görsel Supabase'e yükleniyor...\n`);

  let success = 0;
  let skipped = 0;
  let errors  = 0;

  for (const file of files) {
    const filePath    = path.join(MINIFY_DIR, file);
    const fileBuffer  = fs.readFileSync(filePath);
    const fileSize    = fs.statSync(filePath).size;
    const ext         = path.extname(file).toLowerCase();
    const contentType = getContentType(ext);

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(file, fileBuffer, {
        contentType,
        upsert: true,   // zaten varsa üzerine yazar
      });

    if (error) {
      console.error(`❌ HATA  ${file.padEnd(42)} ${error.message}`);
      errors++;
    } else {
      console.log(`✅ ${file.padEnd(44)} ${formatBytes(fileSize).padStart(8)}`);
      success++;
    }
  }

  // ─── Özet ─────────────────────────────────────────────────────────────
  console.log("\n" + "─".repeat(60));
  console.log(`📊 Özet`);
  console.log("─".repeat(60));
  console.log(`   Toplam   : ${files.length}`);
  console.log(`   Başarılı : ${success}`);
  console.log(`   Hatalı   : ${errors}`);
  console.log(`   Bucket   : ${BUCKET}`);
  console.log(`   URL öneki: ${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/`);
  console.log("─".repeat(60) + "\n");
}

uploadImages().catch((err) => {
  console.error("Beklenmeyen hata:", err);
  process.exit(1);
});
