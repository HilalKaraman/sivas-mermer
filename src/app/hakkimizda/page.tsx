export default function AboutPage() {
    return (
        <main className="pt-24 min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-16 mb-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mb-6 tracking-tight">
                        Hakkımızda
                    </h1>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--grey-dark)] leading-relaxed">
                        Sivas Mermer olarak, doğanın en saf halini sanatla buluşturuyor, mekanlarınıza değer katıyoruz.
                    </p>
                </div>
            </section>

            {/* Misyon & Hedefler */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Misyon Kartı */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border-light)] hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[var(--cream-dark)] rounded-full flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">Misyonumuz & Hedeflerimiz</h2>
                            <ul className="space-y-3 text-[var(--grey-dark)]">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0"></span>
                                    <span>Mevcut üretim potansiyelini verimli ve etkin bir şekilde kullanmak.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0"></span>
                                    <span>Her geçen gün üretim kapasitesini arttırmak ve kaliteli ürünü zamanında teslim etmek.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0"></span>
                                    <span>Uygun zamanda ve zeminde sürekli büyüme ve gelişmeyi sağlamak.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Strateji Kartı */}
                        <div className="bg-[var(--charcoal)] p-8 rounded-2xl shadow-sm text-white">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Stratejik Yaklaşımımız</h2>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0"></span>
                                    <span>Stratejimizi belirlerken müşteri istek ve beklentilerini dikkate almak.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0"></span>
                                    <span>Firma faaliyetlerimizi toplam kalite yönetimi felsefesi ile yürütmek.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0"></span>
                                    <span>Tedarikçilerimize ve müşterilerimize güvenilir bir çözüm ortağı olmak.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Değerlerimiz */}
                    <div className="mb-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4">Değerlerimiz</h2>
                            <p className="text-[var(--grey-medium)]">Bizi biz yapan temel prensiplerimiz</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "İnsan ve Toplum",
                                    desc: "Topluma katkıda bulunan ve adil olarak tüm faaliyetlerimizde İNSAN’A DEĞER VERMEK önceliğimizdir.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    )
                                },
                                {
                                    title: "Sürdürülebilirlik",
                                    desc: "Ülkemizin ihtiyaçları ve gelişimine katkı sağlarken, kaynaklarımızı en etkin şekilde kullanarak çevreye duyarlı üretim yapıyoruz.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    )
                                },
                                {
                                    title: "Ekip Ruhu",
                                    desc: "Coşkulu, özveri ve tam katılımlı ekip çalışmasını sürekli kılarak başarıya birlikte yürüyoruz.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    )
                                },
                                {
                                    title: "Müşteri Memnuniyeti",
                                    desc: "Müşteri memnuniyeti odaklı çalışarak, beklentileri aşan çözümler sunuyoruz.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    )
                                },
                                {
                                    title: "İnovasyon",
                                    desc: "Sürekli iyileştirmeyi, yenilikçiliği ve müspet yönde gelişmeyi esas alıyoruz.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    )
                                },
                                {
                                    title: "Rekabetçi Kalite",
                                    desc: "Düşük maliyetli ancak rekabet edebilir kalitede, en fazla satılabilir üretimi hedefliyoruz.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    )
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-light)] hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 bg-[var(--cream)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--gold)] transition-colors">
                                        <svg className="w-5 h-5 text-[var(--gold)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-[var(--charcoal)] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[var(--grey-dark)] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
