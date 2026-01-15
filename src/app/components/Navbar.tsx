"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Ana Sayfa", href: "/" },
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Ürünler", href: "/urunler" },
        { name: "İletişim", href: "/iletisim" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--border-light)]">
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

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[var(--charcoal)] z-50 relative"
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
    );
}
