import type { Metadata } from "next";
import TezgahClient from "./TezgahClient";

export const metadata: Metadata = {
    title: "Mutfak ve Banyo Tezgah Modelleri | Sivas Mermer",
    description:
        "Granit, mermer, çimstone ve kuvars mutfak ve banyo tezgahı modelleri. Özel üretim, dayanıklı ve şık tezgah çözümleri.",
};

export default function TezgahPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <TezgahClient />
        </div>
    );
}
