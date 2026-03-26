import type { Metadata } from "next";
import MerdivenClient from "./MerdivenClient";

export const metadata: Metadata = {
    title: "Mermer ve Granit Merdiven Modelleri | Sivas Mermer",
    description:
        "Mermer ve granit merdiven basamakları ile mekanlarınıza şıklık katın. Özel tasarım ve dayanıklı merdiven çözümleri.",
};

export default function MerdivenPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <MerdivenClient />
        </div>
    );
}
