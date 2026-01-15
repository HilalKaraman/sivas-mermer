export default function ContactPage() {
    return (
        <main className="pt-24 min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-16 mb-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mb-6 tracking-tight">
                        İletişim
                    </h1>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                    <p className="max-w-2xl mx-auto text-lg text-[var(--grey-dark)] leading-relaxed">
                        Projeleriniz için en uygun çözümleri konuşmak üzere ofisimize bekleriz veya bize ulaşabilirsiniz.
                    </p>
                </div>
            </section>

            {/* İletişim İçeriği */}
            <section className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Sol Kolon: İletişim Bilgileri */}
                        <div className="space-y-10">
                            {/* Kartlar */}
                            <div className="grid grid-cols-1 gap-6">
                                {/* Telefon */}
                                {/* Telefon */}
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-light)] hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-[var(--cream)] rounded-full flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-[var(--charcoal)]">İletişim Numaraları</h3>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Ofis */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-[var(--cream-light)] transition-colors group">
                                            <div>
                                                <p className="text-sm font-semibold text-[var(--charcoal)]">Ofis</p>
                                                <p className="text-[var(--grey-dark)] text-sm">+90 (346) 211 48 27</p>
                                            </div>
                                            <a href="tel:+903462114827" className="px-4 py-2 bg-white text-[var(--gold)] border border-[var(--gold)] rounded-lg text-sm font-medium hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm">
                                                Ara
                                            </a>
                                        </div>

                                        {/* Mehmet Karaman */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-[var(--cream-light)] transition-colors group">
                                            <div>
                                                <p className="text-sm font-semibold text-[var(--charcoal)]">Mehmet Karaman</p>
                                                <p className="text-[var(--grey-dark)] text-sm">0542 632 81 81</p>
                                            </div>
                                            <a href="tel:+905426328181" className="px-4 py-2 bg-white text-[var(--gold)] border border-[var(--gold)] rounded-lg text-sm font-medium hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm">
                                                Ara
                                            </a>
                                        </div>

                                        {/* Ahmet Karaman */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-[var(--cream-light)] transition-colors group">
                                            <div>
                                                <p className="text-sm font-semibold text-[var(--charcoal)]">Ahmet Karaman</p>
                                                <p className="text-[var(--grey-dark)] text-sm">0533 682 07 39</p>
                                            </div>
                                            <a href="tel:+905336820739" className="px-4 py-2 bg-white text-[var(--gold)] border border-[var(--gold)] rounded-lg text-sm font-medium hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm">
                                                Ara
                                            </a>
                                        </div>

                                        {/* Ali Karaman */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-[var(--cream-light)] transition-colors group">
                                            <div>
                                                <p className="text-sm font-semibold text-[var(--charcoal)]">Ali Karaman</p>
                                                <p className="text-[var(--grey-dark)] text-sm">0541 576 02 01</p>
                                            </div>
                                            <a href="tel:+905415760201" className="px-4 py-2 bg-white text-[var(--gold)] border border-[var(--gold)] rounded-lg text-sm font-medium hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm">
                                                Ara
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* E-posta */}
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-light)] flex items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-[var(--cream)] rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--charcoal)] mb-1">E-posta</h3>
                                        <p className="text-[var(--grey-dark)] mb-2">info@sivasmermer.com</p>
                                        <a href="mailto:info@sivasmermer.com" className="text-[var(--gold)] font-medium text-sm hover:underline">
                                            Mail Gönder &rarr;
                                        </a>
                                    </div>
                                </div>

                                {/* Adres */}
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-light)] flex items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-[var(--cream)] rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--charcoal)] mb-1">Adres</h3>
                                        <p className="text-[var(--grey-dark)]">
                                            Mehmet Akif Ersoy Mah. 36. Sokak No:37<br />
                                            Merkez / Sivas
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Sağ Kolon: Harita */}
                        <div className="h-[400px] lg:h-auto min-h-[400px] w-full bg-[var(--cream-dark)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border-light)]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.8579847698516!2d37.030901!3d39.7509084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407eaad6a7074795%3A0x1dc073fde7af033!2sSivas%20Mermer%20ve%20Granit!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
