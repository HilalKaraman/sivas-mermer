"use client";

import { useState, useRef } from 'react';
import { img } from "@/lib/supabase";
import Image from 'next/image';
import Link from 'next/link';

type CategoryType = "mermer" | "cam" | "beton" | "belanko" | "banyo" | "agac" | null;

export default function TezgahClient() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef<HTMLElement>(null);
    const itemsPerPage = 6;

    // Sadece Mermer Tezgahlar (Mevcut tüm resimler buraya eklendi)
    const mermerProducts = [
        { code: "T001", title: "Özel Tasarım Mutfak Tezgahı", image: img("/tezgah-urun1.png"), desc: "Kişiye özel ölçü ve tasarım seçenekleriyle modern mutfak tezgahları." },
        { code: "T002", title: "Granit Tezgah", image: img("/tezgah.png"), desc: "Doğal taşın dayanıklılığı ve şıklığını mutfağınıza taşıyan granit tezgahlar." },
        { code: "T003", title: "Tezgah Uygulaması", image: img("/tezgah-urun2.png"), desc: "Dayanıklı ve şık mutfak tezgahı uygulaması." },
        { code: "T004", title: "Mutfak Tezgahı Modeli", image: img("/tezgah-urun3.png"), desc: "Modern çizgiler ve kaliteli işçilikle üretilen mutfak tezgahı." },
        { code: "T005", title: "Mutfak Tezgahı", image: img("/tezgah-urun4.png"), desc: "Doğal granitin eşsiz renkleriyle mutfağınıza değer katın." },
        { code: "T006", title: "Mutfak Tezgahı", image: img("/tezgah-urun5.png"), desc: "Mutfaklar için suya dayanıklı ve estetik tezgah çözümleri." },
        { code: "T007", title: "Özel Kesim Tezgah", image: img("/tezgah-urun6.png"), desc: "Projenize uygun özel ölçülerde kesilmiş mermer ve granit tezgahlar." },
        { code: "T008", title: "Banyo Tezgahı", image: img("/tezgah-urun7.png"), desc: "Estetik görünümü ile banyolarınızın havasını değiştirecek tezgah modeli." }
    ];

    const agacImageIndices = [14, 15, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const agacProducts = agacImageIndices.map((imgIndex, i) => ({
        code: `TA0${(i + 1).toString().padStart(2, '0')}`,
        title: "Sivas Doğal Ağaç Mutfak Tezgahı",
        image: img(`/agac-tezgah${imgIndex}.jpg`),
        desc: "Doğal ahşabın sıcaklığını ve eşsiz dokusunu mutfağınıza taşıyan özel üretim tezgâh tasarımları.",
    }));

    const banyoProducts = Array.from({ length: 20 }).map((_, i) => ({
        code: `TB0${(i + 1).toString().padStart(2, '0')}`,
        title: "Banyo Tezgahı",
        image: img(`/banyo-tezgah${i + 1}.jpg`),
        desc: "Banyolarınızın atmosferini değiştirecek, neme dayanıklı ve estetik tezgah uygulamaları.",
    }));

    const belankoProducts = Array.from({ length: 5 }).map((_, i) => ({
        code: `TE0${(i + 1).toString().padStart(2, '0')}`,
        title: "Belanko Tezgah",
        image: img(`/belanko-tezgah${i + 1}.jpg`),
        desc: "Şıklığı ve leke tutmayan kuvars yapısıyla uzun ömürlü kullanım sunan belanko tezgah modelleri.",
    }));

    const betonProducts = Array.from({ length: 9 }).map((_, i) => ({
        code: `TC0${(i + 1).toString().padStart(2, '0')}`,
        title: "Beton Tezgah",
        image: img(`/beton-tezgah${i + 1}.jpg`),
        desc: "Endüstriyel görünümü ve ultra dayanıklılığı ile öne çıkan, modern beton tezgâh tasarımları.",
    }));

    const camProducts = Array.from({ length: 11 }).map((_, i) => ({
        code: `TCM${(i + 1).toString().padStart(2, '0')}`,
        title: "Cam Mutfak ve Tezgah",
        image: img(`/cam-tezgah${i + 1}.jpg`),
        desc: "Modern, hijyenik ve kolay temizlenebilir yapısıyla mutfaklara ferahlık katan şık cam tezgahlar.",
    }));

    const products = selectedCategory === "mermer"
        ? mermerProducts
        : (selectedCategory === "agac" ? agacProducts : (selectedCategory === "banyo" ? banyoProducts : (selectedCategory === "belanko" ? belankoProducts : (selectedCategory === "beton" ? betonProducts : (selectedCategory === "cam" ? camProducts : [])))));

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        if (sectionRef.current) {
            const yOffset = -80;
            const element = sectionRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleCategorySelect = (category: CategoryType) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        if (sectionRef.current) {
            const yOffset = -80;
            const element = sectionRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const categories = [
        { id: "mermer" as CategoryType, title: "Mermer Tezgah", image: img("/tezgah.png"), desc: "Doğal mermer ve granitin eşsiz dokusuyla mutfağınıza değer katan dayanıklı tezgah çözümleri." },
        { id: "cam" as CategoryType, title: "Cam Mutfak ve Tezgah", image: img("/cam-tezgah1.jpg"), desc: "Modern, hijyenik ve kolay temizlenebilir yapısıyla mutfaklara ferahlık katan şık cam tezgahlar." },
        { id: "beton" as CategoryType, title: "Beton Tezgah", image: img("/beton-tezgah1.jpg"), desc: "Endüstriyel görünümü ve ultra dayanıklılığı ile öne çıkan, modern beton tezgâh tasarımları." },
        { id: "belanko" as CategoryType, title: "Belanko Tezgah", image: img("/belanko-tezgah1.jpg"), desc: "Şıklığı ve leke tutmayan kuvars yapısıyla uzun ömürlü kullanım sunan belanko tezgah modelleri." },
        { id: "banyo" as CategoryType, title: "Banyo Tezgahı", image: img("/banyo-tezgah1.jpg"), desc: "Banyolarınızın atmosferini değiştirecek, neme dayanıklı ve estetik tezgah uygulamaları." },
        { id: "agac" as CategoryType, title: "Ağaç Mutfak Tezgahı", image: img("/agac-tezgah14.jpg"), desc: "Doğal ahşabın sıcaklığını ve eşsiz dokusunu mutfağınıza taşıyan özel üretim ahşap tezgahlar." }
    ];

    const getCategoryMessage = () => {
        const cat = categories.find(c => c.id === selectedCategory);
        return `${cat?.title?.toLowerCase()} modellerimiz`;
    };

    return (
        <section ref={sectionRef} className="py-24 bg-[var(--cream-dark)] relative overflow-hidden min-h-screen">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--cream)] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-4">Tezgah Uygulamaları</h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto rounded-full"></div>
                    <p className="mt-4 text-[var(--grey-medium)] max-w-2xl mx-auto">
                        {selectedCategory === null
                            ? "Mutfak ve banyolarınız için uzun ömürlü, estetik ve fonksiyonel farklı malzemelerden tezgah çözümleri."
                            : categories.find(c => c.id === selectedCategory)?.desc
                        }
                    </p>
                </div>

                {!selectedCategory ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                        {categories.map((cat, index) => (
                            <div
                                key={cat.id}
                                onClick={() => handleCategorySelect(cat.id)}
                                className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 opacity-0"
                                style={{ animation: `fadeIn 0.6s ease-out forwards ${index * 100}ms` }}
                            >
                                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--cream-dark)] w-full">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-700 group-hover:opacity-90" />

                                    <div className="absolute inset-4 border border-white/20 rounded-xl transition-all duration-700 group-hover:border-[var(--gold)]/50 group-hover:inset-3 z-10 pointer-events-none"></div>

                                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full z-20">
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 transform transition-transform duration-500 group-hover:-translate-y-2 drop-shadow-lg">
                                            {cat.title}
                                        </h3>
                                        <p className="text-white/80 text-sm mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-2">
                                            {cat.desc}
                                        </p>
                                        <div className="flex items-center gap-2 text-[var(--gold)] font-bold text-xs tracking-wider uppercase opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                                            <span>Koleksiyonu İncele</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="mb-10 text-center" style={{ animation: 'fadeIn 0.5s ease-out forwards' }}>
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[var(--charcoal)] border border-[var(--border-light)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] shadow-sm hover:shadow-md transition-all duration-300 font-medium font-serif"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                Kategorilere Dön
                            </button>
                        </div>

                        {products.length === 0 ? (
                            <div className="text-center py-24 bg-white rounded-2xl border border-[var(--border-light)] shadow-sm" style={{ animation: 'fadeIn 0.5s ease-out forwards' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-[var(--gold)] mb-4 opacity-50"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
                                <h3 className="text-2xl font-serif font-bold text-[var(--charcoal)] mb-3">Çok Yakında</h3>
                                <p className="text-[var(--grey-medium)]">{getCategoryMessage()} çok yakında kataloğumuza eklenecektir.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
                                {currentItems.map((item, index) => (
                                    <div key={`${item.code}-${currentPage}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--border-light)] transform hover:-translate-y-2 flex flex-col opacity-0" style={{ animation: `fadeIn 0.6s ease-out forwards ${index * 100}ms` }}>
                                        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--cream-dark)]">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

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
                        )}

                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-3 mt-16 pb-8" style={{ animation: 'fadeIn 0.8s ease-out forwards 300ms' }}>
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${currentPage === 1 ? 'border-[var(--border-light)] text-[var(--grey-light)] cursor-not-allowed' : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white shadow-sm hover:shadow-md transform hover:-translate-y-1'}`}
                                    aria-label="Previous page"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                </button>

                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => handlePageChange(i + 1)}
                                            className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ${currentPage === i + 1 ? 'bg-[var(--gold)] text-white shadow-lg transform -translate-y-1' : 'bg-white text-[var(--charcoal)] border border-[var(--border-light)] hover:border-[var(--gold)] hover:text-[var(--gold)] shadow-sm hover:shadow-md transform hover:-translate-y-1'}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${currentPage === totalPages ? 'border-[var(--border-light)] text-[var(--grey-light)] cursor-not-allowed' : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white shadow-sm hover:shadow-md transform hover:-translate-y-1'}`}
                                    aria-label="Next page"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
