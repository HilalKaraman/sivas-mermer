import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Mermer Mezar ve Mezar Taşı Modelleri | Sivas Mermer",
    description:
        "Kaliteli mermer ve granitten üretilen mezar taşı ve özel tasarım mezar modelleri. Uzun ömürlü, estetik ve dayanıklı mezar çözümleri.",
};

export default function MezarPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            {/* Modern Header & Product Collection */}

            {/* Product Grid */}
            <section className="py-24 bg-[var(--cream-dark)] relative overflow-hidden">
                {/* Background Pattern (Optional) */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--cream)] to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-4">Mezar Taşı Uygulamaları</h2>
                        <div className="w-24 h-1 bg-[var(--gold)] mx-auto rounded-full"></div>
                        <p className="mt-4 text-[var(--grey-medium)] max-w-2xl mx-auto">
                            Sevdiklerinizin anısını yaşatmak için en kaliteli mermer ve granitten, özenle işlenmiş mezar modelleri.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Mermer Mezar",
                                image: "/mezar-urun1.png",
                                desc: "Sade ve şık tasarımıyla öne çıkan, beyaz mermer tek kişilik mezar modeli.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Mezar",
                                image: "/mezar-urun2.png",
                                desc: "Sade ve şık tasarımıyla öne çıkan, beyaz mermer tek kişilik mezar modeli.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Mezar",
                                image: "/mezar-urun3.png",
                                desc: "Siyahın asaletini yansıtan, uzun ömürlü ve gösterişli mezar.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Aile Mezarı",
                                image: "/mezar-urun11.png",
                                desc: "İsteklerinize göre şekillendirilen, taş sanatının inceliklerini taşıyan özel tasarım.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Blok Mezar",
                                image: "/mezar-urun12.png",
                                desc: "Kalın blok mermerden üretilmiş, sağlam ve heybetli mezar yapısı.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Mezar",
                                image: "/mezar-urun6.png",
                                desc: "İsteklerinize göre şekillendirilen, taş sanatının inceliklerini taşıyan özel tasarım.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Aile Mezarı",
                                image: "/mezar-urun13.png",
                                desc: "Yan yana definler için uygun, estetik bütünlüğe sahip çift kişilik mezar.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Beyaz Mermer Mezar",
                                image: "/mezar-urun14.png",
                                desc: "Beyaz mermer kullanılarak yapılan, lekesiz ve pürüzsüz mezar.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Mezar",
                                image: "/mezar-urun9.png",
                                desc: "Modern malzemelerle güçlendirilmiş, yeni nesil mezar çözümü.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Klasik Traverten Mezar",
                                image: "/mezar-urun10.png",
                                desc: "Geleneksel baş taşı formuna sahip, klasik ve zamansız mezar modeli.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Mezar",
                                image: "/mezar-urun15.png",
                                desc: "Estetik görünümü ile dikkat çeken özel mezar taşı modeli.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                title: "Mermer Mezar",
                                image: "/mezar-urun16.png",
                                desc: "Dayanıklı yapısı ve şık tasarımıyla öne çıkan mermer mezar.",
                                price: "Fiyat Teklifi Al"
                            },

                        ].map((item, index) => (
                            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--border-light)] transform hover:-translate-y-2 flex flex-col">
                                <div className="relative aspect-[3/4] overflow-hidden bg-[var(--cream-dark)]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={
                                            item.image.includes('mezar-urun1.png') ? { objectPosition: "center 30%" } :
                                                item.image.includes('mezar-urun4.png') ? { objectFit: "contain" } :
                                                    {}
                                        }
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
