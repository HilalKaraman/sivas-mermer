import type { Metadata } from "next";
import MermerDosemeClient from "./MermerDosemeClient";

export const metadata: Metadata = {
    title: "Mermer Zemin Döşeme Modelleri | Sivas Mermer",
    description:
        "Mekanlarınıza asalet katan mermer ve doğal taş zemin döşeme modelleri. Dayanıklı, şık ve uzun ömürlü zemin çözümleri.",
};

export default function MermerDosemePage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <MermerDosemeClient />
        </div>
    );
}
