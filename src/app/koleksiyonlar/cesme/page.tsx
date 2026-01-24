import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
    title: "Mermer Çeşme Modelleri | Sivas Mermer - Hayrat ve Bahçe Çeşmeleri",
    description:
        "Geleneksel ve modern tasarımlarla özel üretim mermer çeşme modelleri. Hayrat çeşmesi, bahçe çeşmesi ve anıt çeşme fiyatları için tıklayın.",
};

export default function CesmePage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            {/* Modern Header & Product Collection */}


            {/* Product Grid */}
            <section className="py-24 bg-[var(--cream-dark)] relative overflow-hidden">
                {/* Background Pattern (Optional) */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--cream)] to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-4">Uygulama Detayları</h2>
                        <div className="w-24 h-1 bg-[var(--gold)] mx-auto rounded-full"></div>
                        <p className="mt-4 text-[var(--grey-medium)] max-w-2xl mx-auto">
                            İnce işçilik ve detaylara gösterdiğimiz özen, projelerimizi farklı kılan en önemli unsurdur.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Klasik Hayrat Çeşmesi",
                                image: "/cesme.png",
                                desc: "Osmanlı motifleriyle bezenmiş, geleneksel tek kurnalı tasarım.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Modern Bahçe Çeşmesi",
                                image: "/cesme_modern_1.png",
                                desc: "Minimalist hatlara sahip, doğal taş dokulu ve şelale akışlı modern tasarım.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Anıt Meydan Çeşmesi",
                                image: "/cesme_osmanli_1.png",
                                desc: "Altın işlemeli detaylar ve geniş mermer aynasıyla heybetli meydan çeşmesi.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Duvar Çeşmesi",
                                image: "/cesme-detay9.png",
                                desc: "Duvara monte edilebilen, yer kaplamayan zarif tasarım.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Kurnalar",
                                image: "/cesme-detay8.png",
                                desc: "Hamam ve banyolar için el işçiliği detaylı mermer kurnalar.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Çeşme Modeli",
                                image: "/cesme-detay3.png",
                                desc: "Zarif detaylarıyla bahçenize estetik katacak mermer çeşme.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Özel Tasarım Çeşme",
                                image: "/cesme-detay4.png",
                                desc: "İsteklerinize özel olarak tasarlanan ve üretilen benzersiz çeşme modeli.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Klasik Çeşme",
                                image: "/cesme-detay5.png",
                                desc: "Geleneksel çizgileri modern işçilikle buluşturan klasik çeşme.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Bahçe Çeşmesi",
                                image: "/cesme-detay6.png",
                                desc: "Doğal taşın zarafetini bahçenize taşıyan şık çeşme tasarımı.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Meydan Çeşmesi",
                                image: "/cesme-detay7.png",
                                desc: "Meydan ve parklar için heybetli ve estetik mermer çeşme.",
                                price: "Fiyat Teklifi Al"
                            },

                        ].map((item, index) => (
                            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--border-light)] transform hover:-translate-y-2 flex flex-col">
                                <div className="relative aspect-[3/4] overflow-hidden bg-[var(--cream-dark)]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--charcoal)] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        İncele
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-serif font-bold text-[var(--charcoal)] mb-3 group-hover:text-[var(--gold)] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--grey-medium)] text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center justify-between border-t border-[var(--border-light)] pt-4 mt-auto">
                                        <span className="text-sm font-medium text-[var(--grey-dark)]">
                                            Özel Üretim
                                        </span>
                                        <Link
                                            href="/iletisim"
                                            className="text-[var(--gold)] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            Teklif Al
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--cream)] to-transparent pointer-events-none"></div>
            </section>

        </div>
    );
}
