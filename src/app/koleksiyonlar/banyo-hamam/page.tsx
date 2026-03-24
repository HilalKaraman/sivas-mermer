import type { Metadata } from "next";
import BanyoHamamClient from "./BanyoHamamClient";

export const metadata: Metadata = {
    title: "Banyo & Hamam Tasarımları | Sivas Mermer",
    description:
        "Mermeri sanata dönüştüren geleneksel Türk hamamı ve modern banyo mermer uygulamaları. Şık, dayanıklı ve uzun ömürlü doğal taş çözümleri.",
};

export default function BanyoHamamPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <BanyoHamamClient />
        </div>
    );
}
