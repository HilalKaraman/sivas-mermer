"use client";

import { useState, useEffect, useRef } from "react";
import { productsData } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState(productsData.slice(0, 0)); // Başlangıçta boş
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            // Açıldığında input'a odaklan
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            // Scroll'u kilitle
            document.body.style.overflow = "hidden";
            setSearchTerm("");
            setResults([]);
        } else {
            // Scroll kilidini kaldır
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        // ESC tuşu ile kapatma
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    useEffect(() => {
        if (searchTerm.trim().length > 1) {
            const term = searchTerm.toLowerCase();
            const filtered = productsData.filter(
                (product) =>
                    product.title.toLowerCase().includes(term) ||
                    (product.desc && product.desc.toLowerCase().includes(term)) ||
                    (product.code && product.code.toLowerCase().includes(term))
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [searchTerm]);

    // Dışarı tıklayınca kapatma
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-32 bg-black/40 backdrop-blur-md transition-opacity duration-300"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-down mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Arama Barı */}
                <div className="relative border-b border-[var(--border-light)] p-4 sm:p-6 flex items-center">
                    <svg
                        className="w-6 h-6 text-[var(--grey-medium)] mr-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Ürün adı veya kod (Örn: Mermer Sehpa, M001)"
                        className="w-full bg-transparent text-xl sm:text-2xl text-[var(--charcoal)] placeholder:text-[var(--grey-medium)]/60 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        onClick={onClose}
                        className="ml-4 p-2 text-[var(--grey-medium)] hover:text-[var(--charcoal)] transition-colors rounded-full hover:bg-[var(--cream-light)] flex-shrink-0"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Sonuçlar */}
                <div className="max-h-[60vh] overflow-y-auto no-scrollbar bg-[var(--cream-light)]/30">
                    {searchTerm.trim().length > 1 ? (
                        results.length > 0 ? (
                            <div className="p-4 sm:p-6 pb-20 sm:pb-6">
                                <h3 className="text-sm font-semibold text-[var(--charcoal)] mb-4 uppercase tracking-wider">
                                    Sonuçlar ({results.length})
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {results.map((product, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                onClose();
                                                setTimeout(() => {
                                                    // Hem URL'ye git hem de sayfada ürün kısmına odaklan.
                                                    router.push(product.href);
                                                }, 100);
                                            }}
                                            className="flex items-center p-3 rounded-xl hover:bg-white border border-transparent hover:border-[var(--border-light)] hover:shadow-sm transition-all text-left group"
                                        >
                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white border border-[var(--border-light)]">
                                                {product.image ? (
                                                    <Image
                                                        src={product.image}
                                                        alt={product.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : null}
                                            </div>
                                            <div className="ml-4 flex-grow">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {product.code && (
                                                        <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 bg-[var(--gold)]/10 text-[var(--gold-dark)] rounded border border-[var(--gold)]/20">
                                                            {product.code}
                                                        </span>
                                                    )}
                                                    <h4 className="text-[var(--charcoal)] font-medium group-hover:text-[var(--gold)] transition-colors line-clamp-1 text-sm sm:text-base">
                                                        {product.title}
                                                    </h4>
                                                </div>
                                                <p className="text-[var(--grey-medium)] text-[10px] sm:text-xs line-clamp-1">
                                                    {product.desc || ""}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="p-12 text-center text-[var(--grey-medium)]">
                                <svg className="w-12 h-12 mx-auto mb-4 opacity-50 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-lg">"{searchTerm}" için sonuç bulunamadı.</p>
                                <p className="text-sm mt-2 opacity-70">Lütfen farklı bir kelime veya kod ile tekrar deneyin.</p>
                            </div>
                        )
                    ) : (
                        <div className="p-8 sm:p-12 text-center text-[var(--grey-medium)]">
                            <p className="text-sm sm:text-base">Aramaya başlamak için en az 2 karakter girin.</p>
                            <div className="flex flex-wrap justify-center gap-2 mt-6">
                                <span className="text-xs px-3 py-1 bg-white border border-[var(--border-light)] rounded-full text-[var(--charcoal)] opacity-70">Örn: Traverten</span>
                                <span className="text-xs px-3 py-1 bg-white border border-[var(--border-light)] rounded-full text-[var(--charcoal)] opacity-70">Örn: Şömine</span>
                                <span className="text-xs px-3 py-1 bg-white border border-[var(--border-light)] rounded-full text-[var(--charcoal)] opacity-70">Örn: M001</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Bilgi */}
                <div className="bg-white border-t border-[var(--border-light)] p-3 text-center text-xs text-[var(--grey-medium)] hidden sm:block">
                    Kapatmak için <span className="font-semibold bg-[var(--cream-light)] px-1.5 py-0.5 rounded border border-[var(--border-light)] mx-1">ESC</span> tuşuna basın
                </div>
            </div>

            {/* Animations (Normally in globals.css, but injected here for ease) */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translate3d(0, -20px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.3s ease-out forwards;
                }
                
                /* Hide scrollbar for Chrome, Safari and Opera */
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                .no-scrollbar {
                  -ms-overflow-style: none;  /* IE and Edge */
                  scrollbar-width: none;  /* Firefox */
                }
             `}} />
        </div>
    );
}
