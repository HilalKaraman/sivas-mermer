import type { Metadata } from "next";
import HarpustaClient from "./HarpustaClient";

export const metadata: Metadata = {
    title: "Harpuşta Modelleri | Sivas Mermer",
    description:
        "Duvar üstlerinizi koruyan ve estetik katan mermer harpuşta modelleri. Özel kesim ve dayanıklı çözümler.",
};

export default function HarpustaPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <HarpustaClient />
        </div>
    );
}
