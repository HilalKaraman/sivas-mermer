"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./SearchModal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const menuItems = [
        { name: "Ana Sayfa", href: "/" },
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Çalışmalarımız", href: "/#calismalarimiz" },
        { name: "Ürünler", href: "/urunler" },
        { name: "İletişim", href: "/iletisim" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--border-light)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 shrink-0 z-50 relative">
                            <Image
                                src="/logo.jpeg"
                                alt="Sivas Mermer Logo"
                                width={50}
                                height={50}
                                className="rounded-full"
                                unoptimized
                            />
                            <span className="text-2xl font-bold tracking-tight text-[var(--charcoal)]">
                                SİVAS MERMER
                            </span>
                        </Link>

                        {/* Desktop Menu & Search */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-center gap-8 mr-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm font-medium text-[var(--grey-dark)] hover:text-[var(--charcoal)] transition-colors uppercase tracking-wider"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Search Button (Desktop) */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-[var(--grey-dark)] hover:text-[var(--gold)] transition-colors rounded-full hover:bg-[var(--cream-light)] relative group"
                                aria-label="Arama Yap"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                {/* Tooltip */}
                                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-[var(--charcoal)] font-medium text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Ürün veya Kod Ara
                                </span>
                            </button>
                        </div>

                        {/* Mobile Controls (Search + Menu) */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-[var(--charcoal)] z-50 relative hover:text-[var(--gold)] transition-colors"
                                aria-label="Arama Yap"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-[var(--charcoal)] z-50 relative"
                                aria-label="Menü"
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <span className={`block h-0.5 w-full bg-current transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                                    <span className={`block h-0.5 w-full bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
                                    <span className={`block h-0.5 w-full bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu - Full Screen Overlay */}
                {isOpen && (
                    <div className="md:hidden fixed top-0 left-0 w-screen h-screen z-40 bg-[var(--cream)] flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center space-y-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-3xl font-bold text-[var(--charcoal)] hover:text-[var(--accent-red)] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
