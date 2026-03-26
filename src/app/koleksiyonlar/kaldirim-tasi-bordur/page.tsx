import type { Metadata } from "next";
import KaldirimTasiBordurClient from "./KaldirimTasiBordurClient";

export const metadata: Metadata = {
    title: "Kaldırım Taşı ve Bordür Modelleri | Sivas Mermer",
    description:
        "Peyzaj düzenlemeleriniz için estetik ve dayanıklı kaldırım taşı ve bordür modelleri. Profesyonel uygulama ve kaliteli malzeme.",
};

export default function KaldirimTasiBordurPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <KaldirimTasiBordurClient />
        </div>
    );
}
