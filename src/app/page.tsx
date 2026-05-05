import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import ScrollReveal from "./components/ScrollReveal";
import { categories } from "../data/products";

export const metadata: Metadata = {
  title: "Sivas Mermer - Kaliteli Mermer ve Granit Çözümleri",
  description:
    "Sivas Mermer ile mezar taşı, mutfak tezgahı, anıt ve mermer dekorasyon işlerinizde kaliteli ve güvenilir hizmet alın. Sivas'ın en köklü mermer atölyesi.",
};

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">

      {/* Hero Section */}
      <HeroSlider />

      {/* Ürün Kategorileri */}
      <section id="calismalarimiz" className="py-12 sm:py-16 md:py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--grey-medium)] mb-2 sm:mb-4">
              Koleksiyonumuz
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--charcoal)] tracking-tight">
              Çalışmalarımız
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {categories.map((product, index) => (
              <ScrollReveal
                key={product.id}
                delay={(index % 4) * 120}
                duration={600}
              >
                <div className="group cursor-pointer">
                  {/* Ürün Kutusu */}
                  <Link href={`/${product.id}`} className="block">
                    <div className="aspect-square sm:aspect-[3/4] bg-[var(--cream-dark)] mb-2 sm:mb-4 overflow-hidden relative shadow-md group-hover:shadow-xl transition-all duration-500">
                      {!product.image.startsWith("/images/") ? (
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          style={{ objectPosition: product.objectPosition || "center 12%" }}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--grey-light)]/20 to-[var(--grey-medium)]/30 group-hover:scale-105 transition-transform duration-500" />
                      )}
                    </div>
                  </Link>
                  <Link href={`/${product.id}`}>
                    <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2 group-hover:text-[var(--gold)] transition-colors cursor-pointer">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-[var(--grey-medium)] leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link
                    href={`/${product.id}`}
                    className="inline-flex items-center text-sm font-medium text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors group/link"
                  >
                    Daha fazlası için
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Özellikler */}
      <section className="py-24 bg-[var(--cream-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Doğal Doku", desc: "Her parça eşsiz ve doğal. Doğanın sanatı elinizin altında.", icon: "🪨", highlight: false },
              { title: "Üstün Kalite", desc: "Yüksek dayanıklılık standartları. Yıllarca kullanım garantisi.", icon: "✨", highlight: true },
              { title: "Usta İşçilik", desc: "Yılların deneyimiyle şekillendi. Detaylara özen.", icon: "🔧", highlight: false },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 200} duration={700}>
                <div className="text-center group">
                  <div className={`text-4xl mb-4 ${item.highlight ? 'relative' : ''}`}>
                    {item.icon}
                    {item.highlight && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[var(--accent-red)]"></span>}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--charcoal)] mb-3 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-[var(--grey-medium)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--charcoal)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Projeniz İçin Bize Ulaşın
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-gray-400 mb-8 text-lg">
              Mekanlarınıza değer katacak doğal taş çözümleri için hemen iletişime geçin.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Link
              href="/iletisim"
              className="inline-block px-10 py-4 bg-[var(--gold)] text-white font-medium hover:bg-[var(--gold-light)] transition-colors duration-300 uppercase tracking-wider text-sm"
            >
              İletişim
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
