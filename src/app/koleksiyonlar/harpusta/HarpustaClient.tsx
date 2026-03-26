"use client";

import { useState, useRef } from 'react';
import { img } from "@/lib/supabase";
import Image from 'next/image';
import Link from 'next/link';

export default function HarpustaClient() {
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef<HTMLElement>(null);
    const itemsPerPage = 6;

    const products = [
                            {
                                code: "H001",
                                title: "Modern Harpuşta",
                                image: img("/harpusta-urun1.png"),
                                desc: "Modern mimariye uygun, sade ve şık harpuşta tasarımı.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "H002",
                                title: "Özel Kesim Harpuşta",
                                image: img("/harpusta-urun2.png"),
                                desc: "Duvar ölçülerinize tam uyum sağlayan özel kesim harpuşta.",
                                price: "Fiyat Teklifi Al"
                            },
                            {
                                code: "H003",
                                title: "Duvar Üstü Harpuşta",
                                image: img("/harpusta_modern.png"),
                                desc: "Yağmur ve kar sularını uzaklaştıran eğimli ve estetik harpuşta.",
                                price: "Fiyat Teklifi Al"
                            },

                        ];

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

    return (
        <section ref={sectionRef} className="py-24 bg-[var(--cream-dark)] relative overflow-hidden min-h-screen">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--cream)] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-4">Harpuşta Uygulamaları</h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto rounded-full"></div>
                    <p className="mt-4 text-[var(--grey-medium)] max-w-2xl mx-auto">
                        Yapılarınızı koruyan ve estetik bütünlük sağlayan özel harpuşta çözümleri.
                    </p>
                </div>

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

                {/* Pagination Controls */}
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
