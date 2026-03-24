import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Client sadece supabaseUrl varsa oluşturulur (build sırasında crash etmez)
export const supabase = supabaseUrl
  ? createClient(supabaseUrl, supabaseAnon)
  : null;

export const BUCKET = "urunler";

// Proje URL'i hardcode — env var olmasa bile img() fonksiyonu çalışır
const BASE = "https://mabxkodvuedapdowrryf.supabase.co/storage/v1/object/public/urunler";

/**
 * Yerel path'i (/foo.png) Supabase CDN URL'ine çevirir.
 * PNG dosyaları otomatik .jpg'ye dönüştürülür.
 */
export function img(localPath: string): string {
  const filename = localPath.replace(/^\//, "").replace(/\.png$/i, ".jpg");
  return `${BASE}/${filename}`;
}

/** Dosya adını Supabase URL'ine çevirir */
export function getImageUrl(fileName: string): string {
  return `${BASE}/${fileName}`;
}
