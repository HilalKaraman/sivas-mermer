import type { Metadata } from "next";
import MermerBasTasiClient from "./MermerBasTasiClient";

export const metadata: Metadata = {
    title: 'Mermer Baş Taşı Modelleri | Sivas Mermer',
    description: 'Estetik ve dayanıklı, özel tasarım mermer baş taşları.',
};

export default function MermerBasTasiPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <MermerBasTasiClient />
        </div>
    );
}
