import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";
import { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
    title: "Ürünlerimiz - Sivas Mermer",
    description: "Mezar taşı, mermer, granit, çeşme ve diğer doğal taş ürün çeşitlerimiz.",
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)] pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <ScrollReveal className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--grey-medium)] mb-4">
                        Kataloğumuz
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] tracking-tight">
                        Tüm Ürünler
                    </h1>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mt-6 rounded-full"></div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="product-card-reveal"
                            style={{ animationDelay: `${(index % 3) * 180 + 200}ms` }}
                        >
                            <Link
                                href={`/${product.id}`}
                                className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="relative aspect-[4/3] bg-[var(--cream-dark)] overflow-hidden">
                                    {!product.image.startsWith("/images/") ? (
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[var(--grey-light)]/20 to-[var(--grey-medium)]/30 group-hover:scale-110 transition-transform duration-700" />
                                    )}
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <span className="text-white text-sm font-medium tracking-wider uppercase">Detaylı İncele</span>
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-[var(--charcoal)] mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                                        {product.title}
                                    </h2>
                                    <p className="text-[var(--grey-medium)] text-sm line-clamp-2 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <div className="mt-4 flex items-center text-[var(--gold)] text-sm font-medium">
                                        İncele
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform duration-300"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes cardReveal {
                    0% {
                        opacity: 0;
                        transform: translateY(60px) scale(0.92);
                        filter: blur(8px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                        filter: blur(0);
                    }
                }
                .product-card-reveal {
                    opacity: 0;
                    animation: cardReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
        </div>
    );
}
