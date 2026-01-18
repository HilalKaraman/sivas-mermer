import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ürünlerimiz - Sivas Mermer",
    description: "Mezar taşı, mermer, granit, çeşme ve diğer doğal taş ürün çeşitlerimiz.",
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-[var(--cream)] pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--grey-medium)] mb-4">
                        Kataloğumuz
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] tracking-tight">
                        Tüm Ürünler
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/${product.id}`}
                            className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative aspect-[4/3] bg-[var(--cream-dark)] overflow-hidden">
                                {!product.image.startsWith("/images/") ? (
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[var(--grey-light)]/20 to-[var(--grey-medium)]/30 group-hover:scale-105 transition-transform duration-500" />
                                )}
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-bold text-[var(--charcoal)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                                    {product.title}
                                </h2>
                                <p className="text-[var(--grey-medium)] text-sm line-clamp-2">
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
                                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
