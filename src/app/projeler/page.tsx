import type { Metadata } from "next";
import ProjelerClient from "./ProjelerClient";

export const metadata: Metadata = {
  title: "Projelerimiz | Sivas Mermer",
  description:
    "Sivas Mermer'in tamamladığı mermer projeleri. Çizimden yapım aşamasına kadar tüm süreçleri keşfedin. Hayrat çeşmeleri, anıtlar ve özel tasarım mermer işleri.",
};

export default function ProjelerPage() {
  return <ProjelerClient />;
}
