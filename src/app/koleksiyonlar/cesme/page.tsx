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
                                code: "C001",
                                title: "Klasik Hayrat Çeşmesi",
                                image: "/cesme.png",
                                desc: "Osmanlı motifleriyle bezenmiş, geleneksel tek kurnalı tasarım.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C002",
                                title: "Modern Bahçe Çeşmesi",
                                image: "/cesme_modern_1.png",
                                desc: "Minimalist hatlara sahip, doğal taş dokulu ve şelale akışlı modern tasarım.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C003",
                                title: "Anıt Meydan Çeşmesi",
                                image: "/cesme_osmanli_1.png",
                                desc: "Altın işlemeli detaylar ve geniş mermer aynasıyla heybetli meydan çeşmesi.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C004",
                                title: "Duvar Çeşmesi",
                                image: "/cesme-detay9.png",
                                desc: "Duvara monte edilebilen, yer kaplamayan zarif tasarım.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C005",
                                title: "Mermer Kurnalar",
                                image: "/cesme-detay8.png",
                                desc: "Hamam ve banyolar için el işçiliği detaylı mermer kurnalar.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C006",
                                title: "Mermer Çeşme Modeli",
                                image: "/cesme-detay3.png",
                                desc: "Zarif detaylarıyla bahçenize estetik katacak mermer çeşme.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C007",
                                title: "Özel Tasarım Çeşme",
                                image: "/cesme-detay4.png",
                                desc: "İsteklerinize özel olarak tasarlanan ve üretilen benzersiz çeşme modeli.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C008",
                                title: "Klasik Çeşme",
                                image: "/cesme-detay5.png",
                                desc: "Geleneksel çizgileri modern işçilikle buluşturan klasik çeşme.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C009",
                                title: "Bahçe Çeşmesi",
                                image: "/cesme-detay6.png",
                                desc: "Doğal taşın zarafetini bahçenize taşıyan şık çeşme tasarımı.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C010",
                                title: "Meydan Çeşmesi",
                                image: "/cesme-detay7.png",
                                desc: "Meydan ve parklar için heybetli ve estetik mermer çeşme.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "C011",
                                title: "Mermer Çeşme",
                                image: "/cesme-detay10.png",
                                desc: "El işçiliği detaylarıyla öne çıkan zarif mermer çeşme modeli.",
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

                                    {/* Product Code Badge */}
                                    <div className="absolute top-4 left-4 bg-[var(--charcoal)]/90 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-bold text-[var(--gold)] shadow-lg border border-[var(--gold)]/30 z-10 flex items-center gap-1.5 transform -translate-y-1 opacity-90 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
                                        <span>{item.code}</span>
                                    </div>

                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--charcoal)] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        İncele
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-2xl font-serif font-bold text-[var(--charcoal)] group-hover:text-[var(--gold)] transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
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
