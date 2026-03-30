"use client";

import { useState, useRef } from 'react';
import { img } from "@/lib/supabase";
import Image from 'next/image';
import Link from 'next/link';

type CategoryType = "klasik" | "bebek" | "aile" | "farkli" | null;

export default function MezarTasiClient() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef<HTMLElement>(null);
    const itemsPerPage = 6;

    const klasikProducts = [
        { code: "M001", title: "Mermer Mezar", image: img("/mezar-urun1.png"), desc: "Sade ve şık tasarımıyla öne çıkan, beyaz mermer tek kişilik mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "M002", title: "Mermer Mezar", image: img("/mezar-urun2.png"), desc: "Sade ve şık tasarımıyla öne çıkan, beyaz mermer tek kişilik mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "M003", title: "Mermer Mezar", image: img("/mezar-urun3.png"), desc: "Siyahın asaletini yansıtan, uzun ömürlü ve gösterişli mezar.", price: "Fiyat Teklifi Al" },
        { code: "M005", title: "Mermer Blok Mezar", image: img("/mezar-urun12.png"), desc: "Kalın blok mermerden üretilmiş, sağlam ve heybetli mezar yapısı.", price: "Fiyat Teklifi Al" },
        { code: "M006", title: "Mermer Mezar", image: img("/mezar-urun6.png"), desc: "İsteklerinize göre şekillendirilen, taş sanatının inceliklerini taşıyan özel tasarım.", price: "Fiyat Teklifi Al" },
        { code: "M008", title: "Beyaz Mermer Mezar", image: img("/mezar-urun14.png"), desc: "Beyaz mermer kullanılarak yapılan, lekesiz ve pürüzsüz mezar.", price: "Fiyat Teklifi Al" },
        { code: "M009", title: "Mermer Mezar", image: img("/mezar-urun9.png"), desc: "Modern malzemelerle güçlendirilmiş, yeni nesil mezar çözümü.", price: "Fiyat Teklifi Al" },
        { code: "M010", title: "Klasik Traverten Mezar", image: img("/mezar-urun10.png"), desc: "Geleneksel baş taşı formuna sahip, klasik ve zamansız mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "M011", title: "Mermer Mezar", image: img("/mezar-urun15.png"), desc: "Estetik görünümü ile dikkat çeken özel mezar taşı modeli.", price: "Fiyat Teklifi Al" },
        { code: "M012", title: "Mermer Mezar", image: img("/mezar-urun16.png"), desc: "Dayanıklı yapısı ve şık tasarımıyla öne çıkan mermer mezar.", price: "Fiyat Teklifi Al" }
    ];

    const aileProducts = [
        { code: "M004", title: "Aile Mezarı", image: img("/mezar-urun11.png"), desc: "İsteklerinize göre şekillendirilen, taş sanatının inceliklerini taşıyan özel tasarım.", price: "Fiyat Teklifi Al" },
        { code: "M007", title: "Aile Mezarı", image: img("/mezar-urun13.png"), desc: "Yan yana definler için uygun, estetik bütünlüğe sahip çift kişilik mezar.", price: "Fiyat Teklifi Al" }
    ];

    const bebekProducts: typeof klasikProducts = [
        { code: "MB001", title: "Bebek Mezarı", image: img("/cocuk-mezar1.jpg"), desc: "Özenle tasarlanmış, sade ve narin görünümlü mermer bebek mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MB002", title: "Bebek Mezarı", image: img("/cocuk-mezar2.jpg"), desc: "İnce işçilikle hazırlanan, saf beyaz renkli mermer kabristan tasarımı.", price: "Fiyat Teklifi Al" },
        { code: "MB003", title: "Bebek Mezarı", image: img("/cocuk-mezar3.jpg"), desc: "Küçük ebatlarda özel ölçülendirilmiş, estetik ve sağlam yapıya sahip çocuk mezarı.", price: "Fiyat Teklifi Al" },
        { code: "MB004", title: "Bebek Mezarı", image: img("/cocuk-mezar4.jpg"), desc: "Yuvarlak hatları ve zarif detaylarıyla öne çıkan çocuk mezarı tasarımı.", price: "Fiyat Teklifi Al" },
        { code: "MB005", title: "Bebek Mezarı", image: img("/cocuk-mezar5.jpg"), desc: "Standartların ötesinde özel kesim teknikleriyle işlenmiş mermer anıt mezar.", price: "Fiyat Teklifi Al" },
        { code: "MB006", title: "Bebek Mezarı", image: img("/cocuk-mezar6.jpg"), desc: "Temiz ve pürüzsüz yüzeyiyle beyaz granit bebek mezarı yapısı.", price: "Fiyat Teklifi Al" },
        { code: "MB007", title: "Bebek Mezarı", image: img("/cocuk-mezar7.jpg"), desc: "Sevdiklerinizin hatırasını koruyan uzun ömürlü mermer işçiliği.", price: "Fiyat Teklifi Al" }
    ];
    const farkliProducts: typeof klasikProducts = [
        { code: "MF001", title: "Özel Tasarım Mezar", image: img("/farkli-mezar1.jpg"), desc: "Alışılmışın dışında modern çizgiler ve mimari dokunuşlarla hazırlanan eşsiz tasarım.", price: "Fiyat Teklifi Al" },
        { code: "MF002", title: "Özel Tasarım Mezar", image: img("/farkli-mezar2.jpg"), desc: "Standartların ötesinde estetik detaylarla zenginleştirilmiş mermer mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MF003", title: "Özel Tasarım Mezar", image: img("/farkli-mezar3.jpg"), desc: "Farklı form ve ebatlarda ustalıkla işlenmiş, göz alıcı anıt mezar mimarisi.", price: "Fiyat Teklifi Al" },
        { code: "MF004", title: "Özel Tasarım Mezar", image: img("/farkli-mezar4.jpg"), desc: "Alışılmışın dışında modern çizgiler ve mimari dokunuşlarla hazırlanan eşsiz tasarım.", price: "Fiyat Teklifi Al" },
        { code: "MF005", title: "Özel Tasarım Mezar", image: img("/farkli-mezar5.jpg"), desc: "Standartların ötesinde estetik detaylarla zenginleştirilmiş mermer mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MF006", title: "Özel Tasarım Mezar", image: img("/farkli-mezar6.jpg"), desc: "Farklı form ve ebatlarda ustalıkla işlenmiş, göz alıcı anıt mezar mimarisi.", price: "Fiyat Teklifi Al" },
        { code: "MF007", title: "Özel Tasarım Mezar", image: img("/farkli-mezar7.jpg"), desc: "Alışılmışın dışında modern çizgiler ve mimari dokunuşlarla hazırlanan eşsiz tasarım.", price: "Fiyat Teklifi Al" },
        { code: "MF008", title: "Özel Tasarım Mezar", image: img("/farkli-mezar8.jpg"), desc: "Standartların ötesinde estetik detaylarla zenginleştirilmiş mermer mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MF009", title: "Özel Tasarım Mezar", image: img("/farkli-mezar9.jpg"), desc: "Farklı form ve ebatlarda ustalıkla işlenmiş, göz alıcı anıt mezar mimarisi.", price: "Fiyat Teklifi Al" },
        { code: "MF010", title: "Özel Tasarım Mezar", image: img("/farkli-mezar10.jpg"), desc: "Alışılmışın dışında modern çizgiler ve mimari dokunuşlarla hazırlanan eşsiz tasarım.", price: "Fiyat Teklifi Al" },
        { code: "MF011", title: "Özel Tasarım Mezar", image: img("/farkli-mezar11.jpg"), desc: "Standartların ötesinde estetik detaylarla zenginleştirilmiş mermer mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MF012", title: "Özel Tasarım Mezar", image: img("/farkli-mezar12.jpg"), desc: "Farklı form ve ebatlarda ustalıkla işlenmiş, göz alıcı anıt mezar mimarisi.", price: "Fiyat Teklifi Al" },
        { code: "MF013", title: "Özel Tasarım Mezar", image: img("/farkli-mezar13.jpg"), desc: "Alışılmışın dışında modern çizgiler ve mimari dokunuşlarla hazırlanan eşsiz tasarım.", price: "Fiyat Teklifi Al" },
        { code: "MF014", title: "Özel Tasarım Mezar", image: img("/farkli-mezar14.jpg"), desc: "Standartların ötesinde estetik detaylarla zenginleştirilmiş mermer mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MF015", title: "Özel Tasarım Mezar", image: img("/farkli-mezar15.jpg"), desc: "Farklı form ve ebatlarda ustalıkla işlenmiş, göz alıcı anıt mezar mimarisi.", price: "Fiyat Teklifi Al" },
        { code: "MF016", title: "Özel Tasarım Mezar", image: img("/farkli-mezar16.jpg"), desc: "Alışılmışın dışında modern çizgiler ve mimari dokunuşlarla hazırlanan eşsiz tasarım.", price: "Fiyat Teklifi Al" },
        { code: "MF017", title: "Özel Tasarım Mezar", image: img("/farkli-mezar17.jpg"), desc: "Standartların ötesinde estetik detaylarla zenginleştirilmiş mermer mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MF018", title: "Özel Tasarım Mezar", image: img("/farkli-mezar18.jpg"), desc: "Farklı form ve ebatlarda ustalıkla işlenmiş, göz alıcı anıt mezar mimarisi.", price: "Fiyat Teklifi Al" },
        { code: "MF019", title: "Özel Tasarım Mezar", image: img("/farkli-mezar19.jpg"), desc: "Alışılmışın dışında modern çizgiler ve mimari dokunuşlarla hazırlanan eşsiz tasarım.", price: "Fiyat Teklifi Al" },
        { code: "MF020", title: "Özel Tasarım Mezar", image: img("/farkli-mezar20.jpg"), desc: "Standartların ötesinde estetik detaylarla zenginleştirilmiş mermer mezar modeli.", price: "Fiyat Teklifi Al" }
    ];

    const products = selectedCategory === "klasik" 
        ? klasikProducts 
        : (selectedCategory === "aile" 
            ? aileProducts 
            : (selectedCategory === "bebek" 
                ? bebekProducts 
                : (selectedCategory === "farkli" ? farkliProducts : [])));

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
        { id: "klasik" as CategoryType, title: "Klasik Mezar", image: img("/mezar-urun1.png"), desc: "Geleneksel çizgilere sahip, zarif ve dayanıklı standart tek kişilik mermer mezar modellerimiz." },
        { id: "bebek" as CategoryType, title: "Bebek Mezarı", image: img("/cocuk-mezar5.jpg"), desc: "Özenle ve hassasiyetle tasarlanmış, sade görünümlü mermer bebek mezar modellerimiz." },
        { id: "aile" as CategoryType, title: "Aile Mezarı", image: img("/mezar-urun11.png"), desc: "Sevdiklerinizle bir arada olmanızı sağlayan geniş ve ihtişamlı mermer aile kabristanları." },
        { id: "farkli" as CategoryType, title: "Farklı Mezar", image: img("/farkli-mezar10.jpg"), desc: "Alışılmışın dışında özel tasarım ve mimari dokunuşlarla hazırlanan eşsiz sanat eseri modeller." }
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
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-4">Mezar Taşı Uygulamaları</h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto rounded-full"></div>
                    <p className="mt-4 text-[var(--grey-medium)] max-w-2xl mx-auto">
                        {selectedCategory === null
                            ? "Sevdiklerinizin anısını yaşatmak için en kaliteli mermer ve granitten, özenle işlenmiş birbirinden farklı mezar modelleri."
                            : categories.find(c => c.id === selectedCategory)?.desc
                        }
                    </p>
                </div>

                {!selectedCategory ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                        {categories.map((cat, index) => (
                            <div
                                key={cat.id}
                                onClick={() => handleCategorySelect(cat.id)}
                                className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 opacity-0 flex flex-col h-full"
                                style={{ animation: `fadeIn 0.6s ease-out forwards ${index * 100}ms` }}
                            >
                                <div className="relative aspect-square overflow-hidden bg-[var(--cream-dark)] w-full flex-grow">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        style={
                                            cat.id === 'farkli' ? { objectPosition: "center 80%" } : {}
                                        }
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-700 group-hover:opacity-90" />

                                    <div className="absolute inset-3 border border-white/20 rounded-xl transition-all duration-700 group-hover:border-[var(--gold)]/50 group-hover:inset-2 z-10 pointer-events-none"></div>

                                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full z-20">
                                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-1 drop-shadow-lg">
                                            {cat.title}
                                        </h3>
                                        <p className="text-white/80 text-xs mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-2">
                                            {cat.desc}
                                        </p>
                                        <div className="flex items-center gap-1.5 text-[var(--gold)] font-bold text-[10px] tracking-wider uppercase opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                                            <span>İncele</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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
                                    <div key={`${item.code}-${index}-${currentPage}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--border-light)] transform hover:-translate-y-2 flex flex-col opacity-0" style={{ animation: `fadeIn 0.6s ease-out forwards ${index * 100}ms` }}>
                                        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--cream-dark)]">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                        )}

                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-3 mt-16 pb-8" style={{ animation: 'fadeIn 0.8s ease-out forwards 300ms' }}>
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                                        currentPage === 1 
                                        ? 'border-[var(--border-light)] text-[var(--grey-light)] cursor-not-allowed' 
                                        : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white shadow-sm hover:shadow-md transform hover:-translate-y-1'
                                    }`}
                                    aria-label="Previous page"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                </button>

                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => handlePageChange(i + 1)}
                                            className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ${
                                                currentPage === i + 1 
                                                ? 'bg-[var(--gold)] text-white shadow-lg transform -translate-y-1' 
                                                : 'bg-white text-[var(--charcoal)] border border-[var(--border-light)] hover:border-[var(--gold)] hover:text-[var(--gold)] shadow-sm hover:shadow-md transform hover:-translate-y-1'
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                                        currentPage === totalPages 
                                        ? 'border-[var(--border-light)] text-[var(--grey-light)] cursor-not-allowed' 
                                        : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white shadow-sm hover:shadow-md transform hover:-translate-y-1'
                                    }`}
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

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--cream)] to-transparent pointer-events-none"></div>
        </section>
    );
}
