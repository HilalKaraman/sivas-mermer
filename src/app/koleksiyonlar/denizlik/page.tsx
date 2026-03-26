import type { Metadata } from "next";
import DenizlikClient from "./DenizlikClient";

export const metadata: Metadata = {
    title: "Mermer Denizlik Modelleri | Sivas Mermer",
    description:
        "Pencereleriniz için estetik ve su yalıtımı sağlayan mermer denizlik modelleri. Özel kesim ve profesyonel uygulama.",
};

export default function DenizlikPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <DenizlikClient />
        </div>
    );
}
