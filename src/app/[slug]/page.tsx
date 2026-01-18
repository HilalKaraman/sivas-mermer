import { products } from "../../data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

// SSG: Build time generation for all keys
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.id,
    }));
}

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.id === slug);

    if (!product) {
        return {
            title: "Ürün Bulunamadı - Sivas Mermer",
        };
    }

    return {
        title: `${product.title} - Sivas Mermer`,
        description: `${product.title} modelleri ve fiyatları. ${product.description}`,
        openGraph: {
            title: `${product.title} - Sivas Mermer`,
            description: product.description,
            images: [product.image],
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = products.find((p) => p.id === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[var(--cream)] pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <nav className="flex mb-8 text-sm text-[var(--grey-medium)]">
                    <Link href="/" className="hover:text-[var(--gold)] transition-colors">Anasayfa</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[var(--charcoal)] font-semibold">{product.title}</span>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Image Section */}
                    <div className="relative aspect-square md:aspect-[4/3] w-full bg-[var(--cream-dark)] rounded-lg overflow-hidden shadow-lg">
                        {!product.image.startsWith("/images/") ? (
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[var(--grey-light)]/20 to-[var(--grey-medium)]/30" />
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mb-6">
                            {product.title}
                        </h1>
                        <div className="w-20 h-1 bg-[var(--gold)] mb-8"></div>
                        <p className="text-lg text-[var(--grey-medium)] leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[var(--cream-dark)]">
                            <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-2">Bilgi Alın</h3>
                            <p className="text-[var(--grey-medium)] mb-4">Bu ürün hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin.</p>
                            <Link
                                href="/iletisim"
                                className="inline-block w-full text-center px-8 py-4 bg-[var(--charcoal)] text-white font-medium hover:bg-[var(--gold)] transition-colors duration-300 rounded"
                            >
                                İletişime Geç
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
