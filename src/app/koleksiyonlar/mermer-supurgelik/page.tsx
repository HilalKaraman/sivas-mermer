import type { Metadata } from "next";
import MermerSupurgelikClient from "./MermerSupurgelikClient";

export const metadata: Metadata = {
    title: "Mermer Süpürgelik Modelleri | Sivas Mermer",
    description:
        "Zemin ve duvar birleşimlerinde estetik bütünlük sağlayan mermer süpürgelik modelleri. Dayanıklı ve şık detaylar.",
};

export default function MermerSupurgelikPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <MermerSupurgelikClient />
        </div>
    );
}
