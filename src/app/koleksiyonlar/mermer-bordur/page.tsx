import type { Metadata } from "next";
import MermerBordurClient from "./MermerBordurClient";

export const metadata: Metadata = {
    title: "Mermer Bordür Modelleri | Sivas Mermer",
    description:
        "Zemin ve duvar tasarımlarınızı zenginleştiren dekoratif mermer bordür modelleri. Özel desen ve uygulama seçenekleri.",
};

export default function MermerBordurPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <MermerBordurClient />
        </div>
    );
}
