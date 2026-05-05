import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sayfa Bulunamadı | Sivas Mermer",
    description: "Aradığınız sayfa bulunamadı. Sivas Mermer ana sayfasına dönebilir veya ürünlerimizi inceleyebilirsiniz.",
};

export default function NotFound() {
    return (
        <main className="min-h-[calc(100vh-80px)] bg-[var(--cream)] flex items-center justify-center px-4 py-16">
            <div className="max-w-2xl w-full text-center">
                {/* Decorative 404 */}
                <div className="relative mb-8">
                    <span className="text-[10rem] sm:text-[14rem] font-bold leading-none tracking-tighter text-transparent select-none"
                        style={{
                            WebkitTextStroke: "2px var(--border-medium)",
                        }}
                    >
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--gold)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                                <path d="M11 8v2" />
                                <path d="M11 14h.01" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-4 tracking-tight">
                    Sayfa Bulunamadı
                </h1>
                <p className="text-[var(--grey-medium)] text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                    Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--gold)] text-white font-medium rounded-lg hover:bg-[var(--gold-light)] transition-colors duration-300 text-sm uppercase tracking-wider"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Ana Sayfa
                    </Link>
                    <Link
                        href="/urunler"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[var(--charcoal)] font-medium rounded-lg border border-[var(--border-light)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 text-sm uppercase tracking-wider shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m21 21-4.3-4.3" />
                            <circle cx="11" cy="11" r="8" />
                        </svg>
                        Ürünleri İncele
                    </Link>
                </div>

                {/* Helpful links */}
                <div className="mt-14 pt-8 border-t border-[var(--border-light)]">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--grey-light)] mb-4 font-medium">
                        Popüler Sayfalar
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {[
                            { name: "Mezar Taşı", href: "/koleksiyonlar/mezar-tasi" },
                            { name: "Tezgah", href: "/koleksiyonlar/tezgah" },
                            { name: "Çeşme", href: "/koleksiyonlar/cesme" },
                            { name: "İletişim", href: "/iletisim" },
                            { name: "Projeler", href: "/projeler" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm text-[var(--grey-dark)] bg-white border border-[var(--border-light)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
