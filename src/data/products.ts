export type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
};

export const categories: Product[] = [
    {
        id: "koleksiyonlar/mezar-tasi",
        title: "Mermer Mezar",
        description: "Kaliteli mermer ve granitten, uzun ömürlü ve estetik mezar taşı modelleri.",
        image: "/mezar-urun1.png",
    },
    {
        id: "koleksiyonlar/mermer-bas-tasi",
        title: "Mermer Baş Taşı",
        description: "Estetik ve dayanaklı, özel tasarım mermer baş taşları.",
        image: "/bas-tasi-urun1.png",
    },
    {
        id: "koleksiyonlar/anit",
        title: "Anıt",
        description: "Özel tasarım anıt mezar ve şehitlik projeleri.",
        image: "/anit1.png",
    },
    {
        id: "koleksiyonlar/tezgah",
        title: "Tezgah",
        description: "Mutfak ve banyo için granit, çimstone ve kuvars tezgah çözümleri.",
        image: "/tezgah.png",
    },
    {
        id: "koleksiyonlar/cesme",
        title: "Çeşme",
        description: "Geleneksel ve modern tasarımlarla mermer ve taş hayrat çeşmeleri.",
        image: "/cesme.png",
    },
    {
        id: "koleksiyonlar/somine",
        title: "Şömine",
        description: "Doğal taş ve mermerden özel tasarım şömine modelleri.",
        image: "/somine.png",
    },
    {
        id: "koleksiyonlar/mermer-sehpa",
        title: "Mermer Sehpa",
        description: "Doğal mermer dokusuyla modern ve şık sehpa tasarımları.",
        image: "/sehpa-urun5.png",
    },
    {
        id: "koleksiyonlar/merdiven",
        title: "Merdiven",
        description: "Mermer ve granit merdiven basamaklarıyla mekanlarınıza şıklık katın.",
        image: "/merdiven.png",
    },
    {
        id: "koleksiyonlar/mermer-kaplama",
        title: "Mermer Kaplama",
        description: "Dış ve iç cepheleriniz için estetik ve dayanıklı mermer kaplama çözümleri.",
        image: "/mermer_kaplama.png",
    },
    {
        id: "koleksiyonlar/mermer-doseme",
        title: "Mermer Döşeme",
        description: "Mekanlarınıza ferahlık katan yüksek kaliteli mermer zemin döşemeleri.",
        image: "/mermer_doseme.png",
    },
    {
        id: "koleksiyonlar/harpusta",
        title: "Harpuşta",
        description: "Duvarlarınızı koruyan ve estetik tamamlayan özel kesim harpuşta modelleri.",
        image: "/harpusta_modern.png",
    },
    {
        id: "koleksiyonlar/denizlik",
        title: "Denizlik",
        description: "Pencere önleri için su yalıtımı sağlayan şık mermer denizlikler.",
        image: "/denizlik.png",
    },
    {
        id: "koleksiyonlar/mermer-supurgelik",
        title: "Mermer Süpürgelik",
        description: "Zemin ve duvar birleşimlerinde kusursuz detaylar için mermer süpürgelikler.",
        image: "/mermer_supurgelik.png",
    },
    {
        id: "koleksiyonlar/mermer-bordur",
        title: "Mermer Bordür",
        description: "Zemin ve duvar tasarımlarınızı zenginleştiren dekoratif mermer bordürler.",
        image: "/mermer_bordur.png",
    },
    {
        id: "koleksiyonlar/kaldirim-tasi-bordur",
        title: "Kaldırım Taşı Bordür",
        description: "Estetik ve dayanıklı kaldırım taşı ve bordür uygulamaları.",
        image: "/kaldirim_tasi_bordur.png",
    },
];

export const products: Product[] = [
    {
        id: "amasya-beji",
        title: "Amasya Beji",
        description: "Zarif ve doğal görünümlü Amasya Beji mermeri ile mekanlarınıza değer katın.",
        image: "/amasya-bej-urun.png",
    },
    {
        id: "marmara-mermeri",
        title: "Marmara Mermeri",
        description: "Klasik ve zamansız Marmara mermeri, dayanıklılığı ile ön planda.",
        image: "/marmara-urun.png",
    },
    {
        id: "traverten",
        title: "Traverten",
        description: "Doğal dokusuyla sıcak bir atmosfer yaratan Traverten taşları.",
        image: "/traverten-urun.png",
    },
    {
        id: "tundra-grey",
        title: "Tundra Grey",
        description: "Modern ve sofistike gri tonlarıyla Tundra Grey mermeri.",
        image: "/tundura-urun.png",
    },
    {
        id: "andezit",
        title: "Andezit",
        description: "Dış mekan zemin kaplamalarında kullanılan kaymaz ve dayanıklı Andezit taşı.",
        image: "/andazit.png",
    },
    {
        id: "bazalt",
        title: "Bazalt",
        description: "Sert yapısı ve koyu rengiyle bilinen uzun ömürlü Bazalt taşı.",
        image: "/bazalt.png",
    },
    {
        id: "bursa-siyahi",
        title: "Bursa Siyahı",
        description: "Asil ve şık görünümüyle dikkat çeken Bursa Siyahı mermeri.",
        image: "/bursa-siyahi.png",
    },
    {
        id: "kuvars",
        title: "Kuvars",
        description: "Leke tutmaz ve çizilmez yapısıyla mutfak tezgahları için ideal Kuvars yüzeyler.",
        image: "/kuars.png",
    },
    {
        id: "porselen",
        title: "Porselen",
        description: "Yüksek teknoloji ile üretilen dayanıklı ve estetik Porselen yüzeyler.",
        image: "/porselen1.png",
    },
    {
        id: "granit",
        title: "Granit",
        description: "Doğanın en sert taşlarından biri olan Granit ile ömürlük çözümler.",
        image: "/granit1.png",
    },
];

export const productsData = [
    // --- MEZAR TAŞI ---
    { code: "M001", title: "Mermer Mezar", image: "/mezar-urun1.png", desc: "Sade ve şık tasarımıyla öne çıkan, beyaz mermer tek kişilik mezar modeli.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M002", title: "Kalın Küpeşteli Mezar", image: "/mezar-urun2.png", desc: "Dayanıklı ve gösterişli kalın mermer yapısıyla uzun ömürlü çift kişilik model.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M003", title: "Granit Mezar", image: "/mezar-urun3.png", desc: "Gri granitin asaletini yansıtan, hava şartlarına ekstra dayanıklı mezar tasarımı.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M004", title: "Traverten Mezar", image: "/mezar-urun4.png", desc: "Doğal traverten taşının sıcak tonlarıyla tasarlanmış estetik model.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M005", title: "Mermer Blok Mezar", image: "/mezar-urun5.png", desc: "Doğal mermerden üretilmiş şık ve modern mezar modeli.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M006", title: "Özel Tasarım Mezar", image: "/mezar-urun6.png", desc: "İsteğe özel ölçü ve motiflerle hazırlanan mermer mezar çalışması.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M007", title: "Siyah Granit Mezar", image: "/mezar-urun7.png", desc: "Siyah granitin şıklığını yansıtan, ağır ve asil tasarımlı model.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M008", title: "Çift Kişilik Mezar", image: "/mezar-urun8.png", desc: "Geniş aileler için tasarlanmış çift kişilik mermer mezar uygulaması.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M009", title: "Klasik Mermer Mezar", image: "/mezar-urun9.png", desc: "Geleneksel çizgileri barındıran sade tek kişilik mermer mezar.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M010", title: "Granit Baştaşlı Mezar", image: "/mezar-urun10.png", desc: "Mermer gövde üzerine özel granit baştaşlı özgün tasarım.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M011", title: "Mermer Mezar", image: "/mezar-urun11.png", desc: "Sade ve şık tasarımıyla öne çıkan, mermer mezar modeli.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M012", title: "Granit Detaylı Mezar", image: "/mezar-urun12.png", desc: "Beyaz mermer ile gri granitin uyumunu yansıtan modern tasarım.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M013", title: "Aile Kabristanı", image: "/mezar-urun13.png", desc: "Özel çevre düzenlemesi ile tasarlanmış mermer aile kabristanı.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M014", title: "Sade Mermer Mezar", image: "/mezar-urun14.png", desc: "İnce işçilikle hazırlanmış klasik tek kişilik mermer model.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M015", title: "Çift Kişilik Granit", image: "/mezar-urun15.png", desc: "Tamamen granitten üretilmiş dayanıklı çift kişilik mezar uygulaması.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M016", title: "Özel Kenarlı Mezar", image: "/mezar-urun16.png", desc: "Farklı kesim detaylarına sahip özgün tasarımlı mermer mezar.", href: "/koleksiyonlar/mezar-tasi" },

    // --- ANIT ---
    { code: "A001", title: "Anıt", image: "/anit-urun1.png", desc: "Özel tasarım anıt mezar projesi. Mermer ve granitten kaliteli işçilik.", href: "/koleksiyonlar/anit" },
    { code: "A002", title: "Tek Kişilik Anıt", image: "/anit.jpeg", desc: "Sade ve asil görünümüyle tek kişilik mermer anıt mezar modeli.", href: "/koleksiyonlar/anit" },

    // --- ÇEŞME ---
    { code: "C001", title: "Klasik Hayrat Çeşmesi", image: "/cesme.png", desc: "Osmanlı motifleriyle bezenmiş, geleneksel tek kurnalı tasarım.", href: "/koleksiyonlar/cesme" },
    { code: "C002", title: "Mermer Sokak Çeşmesi", image: "/cesme-urun1.png", desc: "Park ve bahçeler için uygun, dayanıklı doğal taş yapı.", href: "/koleksiyonlar/cesme" },
    { code: "C003", title: "Modern Duvar Çeşmesi", image: "/cesme-urun2.png", desc: "Modern mimariye uyumlu sade ve şık mermer tasarım.", href: "/koleksiyonlar/cesme" },
    { code: "C004", title: "Sade Hayrat Çeşmesi", image: "/cesme-urun3.png", desc: "Sade ve şık hatlara sahip tek kurnalı mermer çeşme.", href: "/koleksiyonlar/cesme" },
    { code: "C005", title: "Klasik Çeşme", image: "/cesme-urun4.png", desc: "Geleneksel motiflerle bezenmiş Osmanlı tarzı hayrat çeşmesi.", href: "/koleksiyonlar/cesme" },
    { code: "C006", title: "Duvar Çeşmesi", image: "/cesme-urun5.png", desc: "Modern peyzaj tasarımlarına uygun duvara monte çeşme.", href: "/koleksiyonlar/cesme" },
    { code: "C007", title: "Bahçe Çeşmesi", image: "/cesme-urun6.png", desc: "Doğal taş görünümüyle bahçenize estetik katacak çeşme.", href: "/koleksiyonlar/cesme" },
    { code: "C008", title: "Özel Tasarım Çeşme", image: "/cesme-urun7.png", desc: "İhtiyacınıza özel ölçü ve motiflerde üretilen mermer çeşme.", href: "/koleksiyonlar/cesme" },

    // --- DENİZLİK ---
    { code: "Z001", title: "Özel Kesim Denizlik", image: "/denizlik-urun1.png", desc: "Pencere ölçülerinize tam uyumlu, özel kesim mermer denizlikler.", href: "/koleksiyonlar/denizlik" },
    { code: "Z002", title: "Klasik Mermer Denizlik", image: "/denizlik-urun2.png", desc: "Dayanıklı yapısı ve klasik görünümüyle her pencereye uygun denizlik.", href: "/koleksiyonlar/denizlik" },

    // --- HARPUŞTA ---
    { code: "H001", title: "Modern Harpuşta", image: "/harpusta-urun1.png", desc: "Modern mimariye uygun, sade ve şık harpuşta tasarımı.", href: "/koleksiyonlar/harpusta" },
    { code: "H002", title: "Damgalı Harpuşta", image: "/harpusta-urun2.png", desc: "Özel damgalı ve kesimli klasik harpuşta uygulaması.", href: "/koleksiyonlar/harpusta" },

    // --- MERDİVEN ---
    { code: "R001", title: "Mermer Merdiven", image: "/merdiven-urun1.png", desc: "Beyaz mermerden üretilmiş şık ve dayanıklı merdiven basamakları.", href: "/koleksiyonlar/merdiven" },
    { code: "R002", title: "Dış Cephe Merdiven", image: "/merdiven-urun2.png", desc: "Dış mekan hava şartlarına dayanıklı doğal taş merdiven zemin kaplaması.", href: "/koleksiyonlar/merdiven" },
    { code: "R003", title: "Klasik Merdiven", image: "/merdiven-urun3.png", desc: "Mekanlara ferahlık katan açık renk mermer merdiven döşemesi.", href: "/koleksiyonlar/merdiven" },
    { code: "R004", title: "Lüks Merdiven", image: "/merdiven-urun4.png", desc: "Özel işçilik ve kaliteli mermer ile üretilmiş lüks merdiven tasarımı.", href: "/koleksiyonlar/merdiven" },
    { code: "R005", title: "Siyah Mermer Merdiven", image: "/merdiven-urun5.png", desc: "Siyah mermerin asaletini merdivenlerinize taşıyan tasarım.", href: "/koleksiyonlar/merdiven" },
    { code: "R006", title: "Siyah Mermer Merdiven Kaplaması", image: "/merdiven-urun6.png", desc: "Darbelere karşı dayanıklı, parlak siyah mermer kaplama uygulaması.", href: "/koleksiyonlar/merdiven" },
    { code: "R007", title: "Granit Merdiven", image: "/merdiven-urun7.png", desc: "Özellikle dış mekanlar için uzun ömürlü granit merdiven çözümü.", href: "/koleksiyonlar/merdiven" },
    { code: "R008", title: "Renkli Mermer Merdiven", image: "/merdiven-urun8.png", desc: "Koyu renk mermer kullanılarak mekanlara derinlik katan merdiven döşemesi.", href: "/koleksiyonlar/merdiven" },
    { code: "R009", title: "Özel Tasarım Merdiven", image: "/merdiven-urun9.png", desc: "Geniş alanlar için özel olarak tasarlanmış geniş açılı mermer merdivenler.", href: "/koleksiyonlar/merdiven" },

    // --- KALDIRIM TAŞI BORDÜR ---
    { code: "T001", title: "Klasik Kaldırım Taşı", image: "/kaldirim-bordur-urun1.png", desc: "Dayanıklı yapısı ve klasik görünümüyle her türlü dış mekana uygun kaldırım taşı.", href: "/koleksiyonlar/kaldirim-tasi-bordur" },
    { code: "T002", title: "Modern Kaldırım Bordür", image: "/kaldirim-bordur-urun2.png", desc: "Modern peyzaj tasarımlarını tamamlayan, net çizgilere sahip bordür.", href: "/koleksiyonlar/kaldirim-tasi-bordur" },

    // --- BAŞ TAŞI ---
    { code: "B001", title: "Traverten Baş Taşı", image: "/bas-tasi-urun1.png", desc: "Özel tasarım mermer baş taşı.", href: "/koleksiyonlar/mermer-bas-tasi" },
    { code: "B002", title: "Mermer Baş Taşı", image: "/bas-tasi-urun2.png", desc: "Estetik ve dayanıklı traverten baş taşı modeli.", href: "/koleksiyonlar/mermer-bas-tasi" },

    // --- MERMER BORDÜR ---
    { code: "U001", title: "Desenli Bordür", image: "/bordur-urun1.png", desc: "Klasik ve modern desenlerle işlenmiş dekoratif bordür.", href: "/koleksiyonlar/mermer-bordur" },
    { code: "U002", title: "Zemin Bordür", image: "/bordur-urun3.png", desc: "Zemin kaplamalarınıza çerçeve oluşturan şık bordür uygulaması.", href: "/koleksiyonlar/mermer-bordur" },
    { code: "U003", title: "Zemin Bordür", image: "/bordur-urun4.png", desc: "Zemin kaplamalarınıza çerçeve oluşturan şık bordür uygulaması.", href: "/koleksiyonlar/mermer-bordur" },

    // --- MERMER DÖŞEME ---
    { code: "D001", title: "Salon Zemin Kaplama", image: "/kaplama-urun2.png", desc: "Geniş salonlar için ferahlık ve şıklık katan mermer zemin uygulaması.", href: "/koleksiyonlar/mermer-doseme" },
    { code: "D002", title: "Banyo Döşemesi", image: "/kaplama-urun3.png", desc: "Banyolarınız için estetik ve dayanıklı doğal taş döşeme.", href: "/koleksiyonlar/mermer-doseme" },
    { code: "D003", title: "Klasik Mermer Döşeme", image: "/mermer_doseme.png", desc: "Zamanın ötesinde klasik mermer dokusuyla mekanlarınızı zenginleştirin.", href: "/koleksiyonlar/mermer-doseme" },

    // --- MERMER KAPLAMA ---
    { code: "K001", title: "Duvar Kaplama", image: "/kaplama-urun1.png", desc: "İç ve dış mekanlar için şık ve dayanıklı mermer duvar kaplama uygulamaları.", href: "/koleksiyonlar/mermer-kaplama" },
    { code: "K002", title: "Dış Cephe Kaplama", image: "/kaplama-urun4.png", desc: "Yüksek trafikli alanlar için uzun ömürlü mermer zemin kaplama çözümleri.", href: "/koleksiyonlar/mermer-kaplama" },
    { code: "K003", title: "Özel Kaplama", image: "/kaplama-urun5.png", desc: "Projenize özel ölçü ve tasarımlarla mermer kaplama uygulamaları.", href: "/koleksiyonlar/mermer-kaplama" },

    // --- MERMER SEHPA ---
    { code: "E001", title: "Mermer Sehpa", image: "/sehpa-urun1.png", desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },
    { code: "E002", title: "Mermer Sehpa", image: "/sehpa-urun2.png", desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },
    { code: "E003", title: "Mermer Sehpa", image: "/sehpa-urun3.png", desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },
    { code: "E004", title: "Mermer Sehpa", image: "/sehpa-urun4.png", desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },
    { code: "E005", title: "Mermer Sehpa", image: "/sehpa-urun5.png", desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },

    // --- MERMER SÜPÜRGELİK ---
    { code: "G001", title: "Klasik Süpürgelik", image: "/supurgelik-urun1.png", desc: "Her mekana uyum sağlayan, sade ve şık mermer süpürgelik modeli.", href: "/koleksiyonlar/mermer-supurgelik" },
    { code: "G002", title: "Modern Süpürgelik", image: "/supurgelik-urun2.png", desc: "Modern çizgilerle tasarlanmış, dekoratif ve işlevsel süpürgelik uygulaması.", href: "/koleksiyonlar/mermer-supurgelik" },
    { code: "G003", title: "Dekoratif Süpürgelik", image: "/supurgelik-urun3.png", desc: "Özel desen ve kesimlerle zenginleştirilmiş dekoratif mermer süpürgelik.", href: "/koleksiyonlar/mermer-supurgelik" },

    // --- ŞÖMİNE ---
    { code: "S001", title: "Klasik Şömine", image: "/somine-urun1.png", desc: "Geleneksel motiflerle bezenmiş, salonunuza asillik katan klasik şömine modeli.", href: "/koleksiyonlar/somine" },
    { code: "S002", title: "Modern Şömine Tasarımı", image: "/somine-urun2.png", desc: "Minimalist hatlar ve doğal taşın uyumuyla tasarlanan modern şömine.", href: "/koleksiyonlar/somine" },
    { code: "S003", title: "Granit Şömine", image: "/somine-urun3.png", desc: "Granitin dayanıklılığı ve şıklığını bir arada sunan özel tasarım.", href: "/koleksiyonlar/somine" },
    { code: "S004", title: "Dekoratif Şömine", image: "/somine-urun4.png", desc: "Mekanınıza sanatsal bir dokunuş katan dekoratif taş şömine.", href: "/koleksiyonlar/somine" },
    { code: "S005", title: "Köşe Şömine Modeli", image: "/somine-urun5.png", desc: "Mekan kullanımını optimize eden şık köşe şömine uygulaması.", href: "/koleksiyonlar/somine" },
    { code: "S006", title: "Mermer Şömine", image: "/somine-urun6.png", desc: "Mermerin eşsiz damar yapısıyla her biri sanat eseri niteliğinde şömineler.", href: "/koleksiyonlar/somine" },
    { code: "S007", title: "Özel Tasarım Şömine", image: "/somine-urun7.png", desc: "İsteklerinize ve mekanınıza özel olarak projelendirilen şömine çözümleri.", href: "/koleksiyonlar/somine" },

    // --- TEZGAH ---
    { code: "T001", title: "Özel Tasarım Mutfak Tezgahı", image: "/tezgah-urun1.png", desc: "Kişiye özel ölçü ve tasarım seçenekleriyle modern mutfak tezgahları.", href: "/koleksiyonlar/tezgah" },
    { code: "T002", title: "Granit Tezgah", image: "/tezgah.png", desc: "Doğal taşın dayanıklılığı ve şıklığını mutfağınıza taşıyan granit tezgahlar.", href: "/koleksiyonlar/tezgah" },
    { code: "T003", title: "Tezgah Uygulaması", image: "/tezgah-urun2.png", desc: "Dayanıklı ve şık mutfak tezgahı uygulaması.", href: "/koleksiyonlar/tezgah" },
    { code: "T004", title: "Mutfak Tezgahı Modeli", image: "/tezgah-urun3.png", desc: "Modern çizgiler ve kaliteli işçilikle üretilen mutfak tezgahı.", href: "/koleksiyonlar/tezgah" },
    { code: "T005", title: "Mutfak Tezgahı", image: "/tezgah-urun4.png", desc: "Doğal granitin eşsiz renkleriyle mutfağınıza değer katın.", href: "/koleksiyonlar/tezgah" },
    { code: "T006", title: "Mutfak Tezgahı", image: "/tezgah-urun5.png", desc: "Mutfaklar için suya dayanıklı ve estetik  tezgah çözümleri.", href: "/koleksiyonlar/tezgah" },
    { code: "T007", title: "Özel Kesim Tezgah", image: "/tezgah-urun6.png", desc: "Projenize uygun özel ölçülerde kesilmiş mermer ve granit tezgahlar.", href: "/koleksiyonlar/tezgah" },
    { code: "T008", title: "Banyo Tezgahı", image: "/tezgah-urun7.png", desc: "Estetik görünümü ile banyolarınızın havasını değiştirecek tezgah modeli.", href: "/koleksiyonlar/tezgah" }
];

