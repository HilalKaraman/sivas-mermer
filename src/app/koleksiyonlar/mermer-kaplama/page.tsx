import type { Metadata } from "next";
import MermerKaplamaClient from "./MermerKaplamaClient";

export const metadata: Metadata = {
    title: "Mermer Kaplama Modelleri | Sivas Mermer",
    description:
        "Duvar ve zemin için profesyonel mermer kaplama çözümleri. Özel tasarım, kaliteli işçilik ve dayanıklı mermer kaplama uygulamaları.",
};

export default function MermerKaplamaPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <MermerKaplamaClient />
        </div>
    );
}
