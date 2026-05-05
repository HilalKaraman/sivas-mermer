"use client";

import { useState, useRef } from 'react';
import { img } from "@/lib/supabase";
import Image from 'next/image';
import Link from 'next/link';

type CategoryType = "klasik" | "bebek" | "aile" | "farkli" | "agac" | "islemeli" | null;

export default function MezarTasiClient() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef<HTMLElement>(null);
    const itemsPerPage = 6;

    const klasikProducts = [
        { code: "M001", title: "Mermer Mezar", image: img("/mezar-urun1.jpg"), desc: "Sade ve şık tasarımıyla öne çıkan, mermer tek kişilik mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "M006", title: "Mermer Mezar", image: img("/mezar-urun6.jpg"), desc: "İsteklerinize göre şekillendirilen, taş sanatının inceliklerini taşıyan özel tasarım.", price: "Fiyat Teklifi Al" },
        { code: "M017", title: "Mermer Mezar", image: img("/mezar-urun17.jpg"), desc: "Dayanıklı ve gösterişli yapısıyla öne çıkan şık mermer mezar kabristanı.", price: "Fiyat Teklifi Al" },
        { code: "M018", title: "Mermer Mezar", image: img("/mezar-urun18.jpg"), desc: "Zarif detaylara sahip, uzun ömürlü mermer işçiliği ile hazırlanan mezar.", price: "Fiyat Teklifi Al" },
        { code: "M019", title: "Mermer Mezar", image: img("/mezar-urun19.jpg"), desc: "Geleneksel baş taşı formuna sahip, klasik ve zamansız mermer modellerimiz.", price: "Fiyat Teklifi Al" },
        { code: "M020", title: "Mermer Mezar", image: img("/mezar-urun20.jpg"), desc: "İnce işçilikle hazırlanan özel üretim sağlam mermer yapı tarzı.", price: "Fiyat Teklifi Al" },
        { code: "M021", title: "Mermer Mezar", image: img("/mezar-urun21.jpg"), desc: "Yüksek dayanımlı ve uzun ömürlü birinci sınıf mermer mezar taşı tasarımı.", price: "Fiyat Teklifi Al" }
    ];

    const aileProducts = [
        { code: "MA001", title: "Aile Mezarı", image: img("/aile-mezar1.jpg"), desc: "Sevdiklerinizle bir arada olmanızı sağlayan geniş ve ihtişamlı mermer aile kabristanları.", price: "Fiyat Teklifi Al" },
        { code: "MA002", title: "Aile Mezarı", image: img("/aile-mezar2.jpg"), desc: "Zamanın yıpratıcı etkilerine karşı dayanıklı mermer veya granit tasarımlar.", price: "Fiyat Teklifi Al" },
        { code: "MA003", title: "Aile Mezarı", image: img("/aile-mezar3.jpg"), desc: "Birden fazla kabri estetik bağlarla bütünleştiren özel aile mezarı dizaynı.", price: "Fiyat Teklifi Al" },
        { code: "MA004", title: "Aile Mezarı", image: img("/aile-mezar4.jpg"), desc: "Sevdiklerinizle bir arada olmanızı sağlayan geniş ve ihtişamlı mermer aile kabristanları.", price: "Fiyat Teklifi Al" },
        { code: "MA005", title: "Aile Mezarı", image: img("/aile-mezar5.jpg"), desc: "Zamanın yıpratıcı etkilerine karşı dayanıklı mermer veya granit tasarımlar.", price: "Fiyat Teklifi Al" },
        { code: "MA006", title: "Aile Mezarı", image: img("/aile-mezar6.jpg"), desc: "Birden fazla kabri estetik bağlarla bütünleştiren özel aile mezarı dizaynı.", price: "Fiyat Teklifi Al" },
        { code: "MA007", title: "Aile Mezarı", image: img("/aile-mezar7.jpg"), desc: "Sevdiklerinizle bir arada olmanızı sağlayan geniş ve ihtişamlı mermer aile kabristanları.", price: "Fiyat Teklifi Al" },
        { code: "MA008", title: "Aile Mezarı", image: img("/aile-mezar8.jpg"), desc: "Zamanın yıpratıcı etkilerine karşı dayanıklı mermer veya granit tasarımlar.", price: "Fiyat Teklifi Al" },
        { code: "MA009", title: "Aile Mezarı", image: img("/aile-mezar9.jpg"), desc: "Birden fazla kabri estetik bağlarla bütünleştiren özel aile mezarı dizaynı.", price: "Fiyat Teklifi Al" },
        { code: "MA010", title: "Aile Mezarı", image: img("/aile-mezar10.jpg"), desc: "Sevdiklerinizle bir arada olmanızı sağlayan geniş ve ihtişamlı mermer aile kabristanları.", price: "Fiyat Teklifi Al" },
        { code: "MA011", title: "Aile Mezarı", image: img("/aile-mezar11.jpg"), desc: "Zamanın yıpratıcı etkilerine karşı dayanıklı mermer veya granit tasarımlar.", price: "Fiyat Teklifi Al" },
        { code: "MA012", title: "Aile Mezarı", image: img("/aile-mezar12.jpg"), desc: "Birden fazla kabri estetik bağlarla bütünleştiren özel aile mezarı dizaynı.", price: "Fiyat Teklifi Al" },
        { code: "MA013", title: "Aile Mezarı", image: img("/aile-mezar13.jpg"), desc: "Sevdiklerinizle bir arada olmanızı sağlayan geniş ve ihtişamlı mermer aile kabristanları.", price: "Fiyat Teklifi Al" },
        { code: "MA014", title: "Aile Mezarı", image: img("/aile-mezar14.jpg"), desc: "Zamanın yıpratıcı etkilerine karşı dayanıklı mermer veya granit tasarımlar.", price: "Fiyat Teklifi Al" }
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

    const agacProducts: typeof klasikProducts = [
        { code: "MG001", title: "Ağaç Mezar", image: img("/agac-mezar1.jpg"), desc: "Doğal ağaç formlarından ilham alınarak tasarlanmış, eşsiz mermer mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MG002", title: "Ağaç Mezar", image: img("/agac-mezar2.jpg"), desc: "Ağaç gövdesi temalı, doğayla bütünleşen özgün mermer mezar tasarımı.", price: "Fiyat Teklifi Al" },
        { code: "MG003", title: "Ağaç Mezar", image: img("/agac-mezar3.jpg"), desc: "Zarif ağaç motiflerle süslenmiş, doğal ve huzurlu bir anıt mezar.", price: "Fiyat Teklifi Al" },
    ];

    const islemeliProducts: typeof klasikProducts = [
        { code: "MI001", title: "İşlemeli Mezar", image: img("/islemeli-mezar1.png"), desc: "Ustaca işlenmiş motiflerle süslenmiş, sanatsal değeri yüksek mermer mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MI002", title: "İşlemeli Mezar", image: img("/islemeli-mezar2.png"), desc: "İnce el işçiliğiyle hazırlanan zarif desenli mermer mezar tasarımı.", price: "Fiyat Teklifi Al" },
        { code: "MI003", title: "İşlemeli Mezar", image: img("/islemeli-mezar3.png"), desc: "Geleneksel Türk-İslam motiflerinden ilham alınarak işlenmiş özel mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MI004", title: "İşlemeli Mezar", image: img("/islemeli-mezar4.png"), desc: "Detaylı kabartma işçiliğiyle öne çıkan, gösterişli mermer mezar tasarımı.", price: "Fiyat Teklifi Al" },
        { code: "MI005", title: "İşlemeli Mezar", image: img("/islemeli-mezar5.png"), desc: "Çiçek ve yaprak motifleriyle süslenmiş, doğadan ilham alan işlemeli mezar.", price: "Fiyat Teklifi Al" },
        { code: "MI006", title: "İşlemeli Mezar", image: img("/islemeli-mezar6.png"), desc: "Zarif hatlarla şekillendirilmiş, estetik değeri yüksek özel üretim mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MI007", title: "İşlemeli Mezar", image: img("/islemeli-mezar7.png"), desc: "Profesyonel taş ustalarının el emeğiyle işlenmiş sanatsal mezar tasarımı.", price: "Fiyat Teklifi Al" },
        { code: "MI008", title: "İşlemeli Mezar", image: img("/islemeli-mezar8.png"), desc: "Geometrik ve bitkisel desenlerin uyumlu birleşimiyle oluşturulan işlemeli mezar.", price: "Fiyat Teklifi Al" },
        { code: "MI009", title: "İşlemeli Mezar", image: img("/islemeli-mezar9.png"), desc: "Özenle seçilmiş mermer üzerine ince işçilikle nakşedilmiş benzersiz motifler.", price: "Fiyat Teklifi Al" },
        { code: "MI010", title: "İşlemeli Mezar", image: img("/islemeli-mezar10.png"), desc: "Klasik ve modern çizgileri harmanlayan, göz alıcı işlemeli mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MI011", title: "İşlemeli Mezar", image: img("/islemeli-mezar11.png"), desc: "Derin kabartma tekniğiyle hayat bulan, dayanıklı ve zarif mermer mezar.", price: "Fiyat Teklifi Al" },
        { code: "MI012", title: "İşlemeli Mezar", image: img("/islemeli-mezar12.png"), desc: "Hatıraları onurlandıran, sanatsal dokunuşlarla zenginleştirilmiş işlemeli tasarım.", price: "Fiyat Teklifi Al" },
        { code: "MI013", title: "İşlemeli Mezar", image: img("/islemeli-mezar13.png"), desc: "Eşsiz el oyması detaylarla süslenmiş, kalıcı ve anlamlı mermer mezar.", price: "Fiyat Teklifi Al" },
        { code: "MI014", title: "İşlemeli Mezar", image: img("/islemeli-mezar14.png"), desc: "İnce rölyef işçiliğiyle hazırlanan, zarif ve etkileyici mezar modeli.", price: "Fiyat Teklifi Al" },
        { code: "MI015", title: "İşlemeli Mezar", image: img("/islemeli-mezar15.png"), desc: "Özel sipariş üzerine tasarlanan, kişiye özel işlemeli mermer mezar.", price: "Fiyat Teklifi Al" },
        { code: "MI016", title: "İşlemeli Mezar", image: img("/islemeli-mezar16.png"), desc: "Geleneksel taş oymacılığının en güzel örneklerinden biri olan işlemeli model.", price: "Fiyat Teklifi Al" },
        { code: "MI017", title: "İşlemeli Mezar", image: img("/islemeli-mezar17.png"), desc: "Usta eller tarafından titizlikle işlenmiş, premium kalitede mermer mezar.", price: "Fiyat Teklifi Al" }
    ];

    const products = selectedCategory === "klasik"
        ? klasikProducts
        : (selectedCategory === "aile"
            ? aileProducts
            : (selectedCategory === "bebek"
                ? bebekProducts
                : (selectedCategory === "farkli"
                    ? farkliProducts
                    : (selectedCategory === "agac"
                        ? agacProducts
                        : (selectedCategory === "islemeli" ? islemeliProducts : [])))));

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
        { id: "klasik" as CategoryType, title: "Klasik Mezar", image: img("/mezar-urun1.jpg"), desc: "Geleneksel çizgilere sahip, zarif ve dayanıklı standart tek kişilik mermer mezar modellerimiz." },
        { id: "bebek" as CategoryType, title: "Bebek Mezarı", image: img("/cocuk-mezar5.jpg"), desc: "Özenle ve hassasiyetle tasarlanmış, sade görünümlü mermer bebek mezar modellerimiz." },
        { id: "aile" as CategoryType, title: "Aile Mezarı", image: img("/aile-mezar1.jpg"), desc: "Sevdiklerinizle bir arada olmanızı sağlayan geniş ve ihtişamlı mermer aile kabristanları." },
        { id: "farkli" as CategoryType, title: "Farklı Mezar", image: img("/farkli-mezar10.jpg"), desc: "Alışılmışın dışında özel tasarım ve mimari dokunuşlarla hazırlanan eşsiz sanat eseri modeller." },
        { id: "agac" as CategoryType, title: "Ağaç Mezar", image: img("/agac-mezar1.jpg"), desc: "Doğal ağaç formlarından ilham alınarak tasarlanmış, eşsiz mermer mezar modelleri." },
        { id: "islemeli" as CategoryType, title: "İşlemeli Mezar", image: img("/islemeli-mezar1.png"), desc: "Usta ellerde şekillenen, ince işçilikle nakşedilmiş sanatsal mermer mezar modelleri." }
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
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        style={
                                            cat.id === 'farkli' ? { objectPosition: "center 80%" } : {}
                                        }
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
                                    <div key={`${item.code}-${index}-${currentPage}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--border-light)] transform hover:-translate-y-2 flex flex-col opacity-0" style={{ animation: `fadeIn 0.6s ease-out forwards ${index * 100}ms` }}>
                                        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--cream-dark)]">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                style={item.code === 'MG002' ? { objectPosition: '20% center' } : {}}
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
                                    className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${currentPage === 1
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
                                            className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ${currentPage === i + 1
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
                                    className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${currentPage === totalPages
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
