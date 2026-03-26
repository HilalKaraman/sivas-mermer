import type { Metadata } from "next";
import AnitClient from "./AnitClient";

export const metadata: Metadata = {
    title: "Anıt ve Şehitlik Projeleri | Sivas Mermer",
    description:
        "Özel tasarım anıt mezar, şehitlik ve anma projeleri. Mermer ve granitten kaliteli ve dayanıklı anıt çözümleri.",
};

export default function AnitPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <AnitClient />
        </div>
    );
}
