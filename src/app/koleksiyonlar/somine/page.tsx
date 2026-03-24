import type { Metadata } from "next";
import SomineClient from "./SomineClient";

export const metadata: Metadata = {
    title: "Özel Tasarım Şömine Modelleri | Sivas Mermer",
    description:
        "Doğal taş, mermer ve granit şömine modelleri. Evinize sıcaklık katacak estetik ve modern şömine tasarımları.",
};

export default function SominePage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            <SomineClient />
        </div>
    );
}
