import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnon);

export const BUCKET = "urunler";
const BASE = `${supabaseUrl}/storage/v1/object/public/${BUCKET}`;

/**
 * Yerel path'i (/foo.png) Supabase CDN URL'ine çevirir.
 * PNG dosyaları otomatik .jpg'ye dönüştürülür.
 * Örn: img("/hamam-urun1.png") → "https://....supabase.co/.../hamam-urun1.jpg"
 */
export function img(localPath: string): string {
  // "/foo.png" → "foo.jpg", "/bar.jpeg" → "bar.jpeg"
  const filename = localPath.replace(/^\//, "").replace(/\.png$/i, ".jpg");
  return `${BASE}/${filename}`;
}

/** Dosya adı zaten bilgisayarınızdaki Supabase adıysa kullanın */
export function getImageUrl(fileName: string): string {
  return `${BASE}/${fileName}`;
}
