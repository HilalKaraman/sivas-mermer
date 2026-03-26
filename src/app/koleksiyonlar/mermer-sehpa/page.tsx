import type { Metadata } from "next";
import MermerSehpaClient from "./MermerSehpaClient";

export const metadata: Metadata = {
    title: "Mermer Sehpa Modelleri | Sivas Mermer",
    description:
        "Doğal mermer dokusuyla modern ve şık sehpa tasarımları. Özel üretim mermer sehpa modelleri.",
};

export default function MermerSehpaPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <MermerSehpaClient />
        </div>
    );
}
