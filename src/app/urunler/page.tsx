import type { Metadata } from "next";
import ProductImage from "../components/ProductImage";

// Ürün Verileri
const products = [
    {
        id: "granit",
        title: "Granit",
        description: "Sert yapısı ve yüksek dayanıklılığı ile özellikle mutfak tezgahları ve dış zeminler için mükemmel bir tercih.",
        image: "/granit1.png",
    },
    {
        id: "porselen",
        title: "Porselen",
        description: "Leke tutmayan, ısıya dayanıklı ve hijyenik yüzeyi ile modern mekanların vazgeçilmezi.",
        image: "/porselen1.png",
    },
    {
        id: "kuars",
        title: "Kuars",
        description: "Geniş renk seçenekleri ve çizilmelere karşı üstün direnci ile estetik ve fonksiyonel.",
        image: "/kuars.png",
    },
    {
        id: "marmara-mermeri",
        title: "Marmara Mermeri",
        description: "Kendine has çizgili dokusuyla hamamlar, banyolar ve ıslak zeminlerde klasik bir şıklık sunar.",
        image: "/marmara.png",
    },
    {
        id: "bursa-siyahi",
        title: "Bursa Siyahı",
        description: "Derin siyah rengi ve beyaz damarlarıyla asil ve güçlü bir duruş sergileyen özel bir mermer.",
        image: "/bursa-siyah.png",
    },
    {
        id: "amasya-beji",
        title: "Amasya Beji",
        description: "Sıcak krem tonları ve homojen yapısıyla mekanlara ferahlık ve aydınlık katar.",
        image: "/amasya-beji.png",
    },
    {
        id: "tundra",
        title: "Tundra / Tundura",
        description: "Gri tonlarının sakinleştirici etkisi ve modern mimariyle uyumlu sofistike bir doku.",
        image: "/tundura.png",
    },
    {
        id: "traverten",
        title: "Traverten",
        description: "Doğal gözenekli yapısı ve eskitme görünümüyle rustik ve antik bir hava yaratır.",
        image: "/traverten.png",
    },
    {
        id: "andazit",
        title: "Andazit",
        description: "Kaymaz yapısı ve aşınmaya karşı direnciyle dış mekan zemin kaplamaları için idealdir.",
        image: "/andazit.png",
    },
    {
        id: "bazalt",
        title: "Bazalt",
        description: "Volkanik kökenli, sert ve koyu renkli dokusuyla güçlü ve modern zemin çözümleri sunar.",
        image: "/bazalt.png",
    },
];


export const metadata: Metadata = {
    title: "Ürünler | Sivas Mermer - Granit, Kuvars ve Doğal Taş Çeşitleri",
    description:
        "Geniş ürün yelpazemiz: Granit, Porselen, Kuars (Çimstone, Belenco), Mermer, Traverten ve daha fazlası. Her zevke ve bütçeye uygun taş çözümleri.",
};

export default function ProductsPage() {
    return (
        <main className="pt-24 min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-16 mb-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mb-6 tracking-tight">
                        Ürün Koleksiyonumuz
                    </h1>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--grey-dark)] leading-relaxed">
                        Doğanın derinliklerinden gelen eşsiz taşlar, ustalarımızın elinde sanata dönüşüyor.
                        Her mekana uygun, dayanıklı ve estetik çözümlerimizi keşfedin.
                    </p>
                </div>
            </section>

            {/* Ürün Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border-light)] transform hover:-translate-y-1"
                            >
                                {/* Görsel Alanı */}
                                <div className="relative h-64 overflow-hidden">
                                    <ProductImage
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* İçerik Alanı */}
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-3 group-hover:text-[var(--gold)] transition-colors">
                                        {product.title}
                                    </h2>
                                    <p className="text-[var(--grey-dark)] text-sm leading-relaxed">
                                        {product.description}
                                    </p>
                                    <div className="mt-6 flex items-center text-[var(--gold)] text-sm font-medium uppercase tracking-wider group/link">
                                        Detaylı Bilgi
                                        <svg
                                            className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
