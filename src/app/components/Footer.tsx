import Link from "next/link";
import FloatingButtons from "./FloatingButtons";

export default function Footer() {
    return (
        <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Logo ve Açıklama */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">
                            SİVAS <span className="text-[var(--accent-red)]">MERMER</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Doğanın sanatını mekanlarınıza taşıyoruz. Kaliteli mermer ve doğal taş çözümleri.
                        </p>
                    </div>

                    {/* Hızlı Bağlantılar */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">Hızlı Bağlantılar</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Ana Sayfa", href: "/" },
                                { name: "Ürünlerimiz", href: "/urunler" },
                                { name: "Hakkımızda", href: "/hakkimizda" },
                                { name: "İletişim", href: "/iletisim" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* İletişim */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">İletişim</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="whitespace-normal">📍 Mehmet Akif Ersoy Mah. 36. Sokak No:37 Merkez / Sivas</li>
                            <li>📞 +90 (346) 211 48 27</li>
                            <li>✉️ info@sivasmermer.com</li>
                            <li>
                                <a href="https://www.instagram.com/sivasmermerr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    @sivasmermerr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* WhatsApp Butonu */}
                {/* Floating Buttons (WhatsApp & Scroll to Top) */}
                <FloatingButtons />


                {/* Alt Çizgi */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sivas Mermer. Tüm hakları saklıdır.</p>
                    <p className="mt-2 text-[15px] font-light text-gray-600">
                        Designed by <a href="https://www.hexstudio.com.tr/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Hex Studio</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
