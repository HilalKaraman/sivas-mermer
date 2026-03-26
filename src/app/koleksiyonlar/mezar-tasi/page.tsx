import type { Metadata } from "next";
import MezarTasiClient from "./MezarTasiClient";

export const metadata: Metadata = {
    title: "Mermer Mezar ve Mezar Taşı Modelleri | Sivas Mermer",
    description:
        "Kaliteli mermer ve granitten üretilen mezar taşı ve özel tasarım mezar modelleri. Uzun ömürlü, estetik ve dayanıklı mezar çözümleri.",
};

export default function MezarTasiPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <MezarTasiClient />
        </div>
    );
}
