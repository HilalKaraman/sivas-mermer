import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";
import { Metadata } from "next";

// Only search from products (materials)
const allItems = [...products];

type Props = {
    params: { slug: string };
};

// SSG: Generate all static paths at build time
export async function generateStaticParams() {
    return allItems.map((item) => ({
        slug: item.id,
    }));
}

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const item = allItems.find((p) => p.id === slug);

    if (!item) {
        return {
            title: "Sayfa Bulunamadı - Sivas Mermer",
        };
    }

    return {
        title: `${item.title} - Sivas Mermer`,
        description: `${item.title} hakkında detaylı bilgi, modellerimiz ve fiyat teklifi için Sivas Mermer'i ziyaret edin. ${item.description}`,
        openGraph: {
            title: `${item.title} - Sivas Mermer`,
            description: item.description,
            images: [item.image],
        },
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const item = allItems.find((p) => p.id === slug);

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[var(--cream)] pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb-ish info or just Back link */}
                <div className="mb-8">
                    <Link
                        href="/urunler"
                        className="text-sm font-medium text-[var(--gold)] hover:text-[var(--gold-light)] flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 mr-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Ana Sayfaya Dön
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative aspect-video w-full bg-[var(--cream-dark)]">
                        {!item.image.startsWith("/images/") ? (
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[var(--grey-light)]/20 to-[var(--grey-medium)]/30" />
                        )}
                    </div>

                    <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-6">
                            {item.title}
                        </h1>
                        <p className="text-lg text-[var(--grey-medium)] leading-relaxed mb-8">
                            {item.description}
                        </p>

                        <div className="bg-[var(--cream)] p-6 rounded-lg border border-[var(--cream-dark)]">
                            <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-3">
                                Bilgi ve Sipariş
                            </h3>
                            <p className="text-[var(--grey-medium)] mb-4">
                                {item.title} modellerimiz, stok durumu ve özel siparişleriniz için bizimle iletişime geçebilirsiniz.
                            </p>
                            <Link
                                href="/iletisim"
                                className="inline-block px-8 py-3 bg-[var(--gold)] text-white font-medium hover:bg-[var(--gold-light)] transition-colors rounded-md"
                            >
                                WhatsApp İle Sor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
