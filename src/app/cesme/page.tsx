import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
    title: "Mermer Çeşme Modelleri | Sivas Mermer - Hayrat ve Bahçe Çeşmeleri",
    description:
        "Geleneksel ve modern tasarımlarla özel üretim mermer çeşme modelleri. Hayrat çeşmesi, bahçe çeşmesi ve anıt çeşme fiyatları için tıklayın.",
};

export default function CesmePage() {
    return (
        <div className="min-h-screen bg-[var(--cream)]">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src="/cesme.png"
                    alt="Sivas Mermer Çeşme Modelleri"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
                            Mermer Çeşme
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto">
                            Geleneksel mimarinin modern yorumu, zamansız estetik.
                        </p>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block relative">
                                <span className="text-sm font-bold tracking-[0.2em] text-[var(--gold)] uppercase relative z-10">Özel Tasarım</span>
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-[var(--gold)]/20 -z-0"></div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--charcoal)] leading-tight">
                                Suyun Ve Taşın <br />
                                <span className="text-[var(--gold)]">Uyumlu Dansı</span>
                            </h2>
                            <p className="text-lg text-[var(--grey-medium)] leading-relaxed">
                                Sivas Mermer olarak, Anadolu'nun köklü çeşme kültürünü modern taş işçiliğiyle buluşturuyoruz.
                                Dayanıklı yapısı ve estetik duruşuyla mermer çeşmelerimiz, bahçelerinizde, parklarda veya
                                kamusal alanlarda kalıcı bir güzellik sunar.
                            </p>
                            <p className="text-lg text-[var(--grey-medium)] leading-relaxed">
                                Her bir çeşme, ustalarımızın elinde şekillenen doğal taşın zarafetini yansıtır. İster klasik
                                Osmanlı motifleri, ister minimal modern çizgiler; her zevke uygun tasarımlar üretiyoruz.
                            </p>

                            <Link
                                href="/iletisim"
                                className="inline-flex items-center px-8 py-4 bg-[var(--charcoal)] text-white hover:bg-[var(--gold)] transition-colors duration-300 rounded-sm font-medium tracking-wide group"
                            >
                                Bilgi Alın
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/anit.jpeg"
                                alt="Çeşme detay"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section - Desired Images */}
            <section className="py-24 bg-[var(--cream-dark)] relative overflow-hidden">
                {/* Background Pattern (Optional) */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--cream)] to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--charcoal)] mb-4">Uygulama Detayları</h2>
                        <div className="w-24 h-1 bg-[var(--gold)] mx-auto rounded-full"></div>
                        <p className="mt-4 text-[var(--grey-medium)] max-w-2xl mx-auto">
                            İnce işçilik ve detaylara gösterdiğimiz özen, projelerimizi farklı kılan en önemli unsurdur.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Detail Image 1 */}
                        <div className="group relative aspect-[4/5] md:aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer">
                            <Image
                                src="/cesme-detay1.png"
                                alt="Çeşme detay görünüm 1"
                                fill
                                className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <h3 className="text-xl font-bold text-[var(--charcoal)] mb-2">Detaylı İşçilik</h3>
                                    <p className="text-sm text-[var(--grey-dark)]">Her bir kıvrımda ustalığın izleri.</p>
                                </div>
                            </div>
                        </div>

                        {/* Detail Image 2 */}
                        <div className="group relative aspect-[4/5] md:aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer">
                            <Image
                                src="/cesme-detay2.png"
                                alt="Çeşme detay görünüm 2"
                                fill
                                className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <h3 className="text-xl font-bold text-[var(--charcoal)] mb-2">Doğal Doku</h3>
                                    <p className="text-sm text-[var(--grey-dark)]">Taşın doğallığını koruyan hassas kesim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--cream)] to-transparent pointer-events-none"></div>
            </section>

        </div>
    );
}
