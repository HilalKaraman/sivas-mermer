import type { Metadata } from "next";
import AbdesthaneClient from "./AbdesthaneClient";

export const metadata: Metadata = {
    title: "Abdesthane Tasarımları | Sivas Mermer",
    description:
        "Doğal mermerden üretilmiş, geleneksel mimariye uyumlu abdesthane tasarımları. Estetik ve fonksiyonel mermer çözümleri.",
};

export default function AbdesthanePage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <AbdesthaneClient />
        </div>
    );
}
