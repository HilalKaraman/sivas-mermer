import type { Metadata } from "next";
import CesmeClient from "./CesmeClient";

export const metadata: Metadata = {
    title: "Mermer Çeşme Modelleri | Sivas Mermer - Hayrat ve Bahçe Çeşmeleri",
    description:
        "Geleneksel ve modern tasarımlarla özel üretim mermer çeşme modelleri. Hayrat çeşmesi, bahçe çeşmesi ve anıt çeşme fiyatları için tıklayın.",
};

export default function CesmePage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <CesmeClient />
        </div>
    );
}
