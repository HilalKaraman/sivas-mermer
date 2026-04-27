import { img } from "@/lib/supabase";

export type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    objectPosition?: string;
};

export const categories: Product[] = [
    {
        id: "koleksiyonlar/mezar-tasi",
        title: "Mermer Mezar",
        description: "Kaliteli mermer ve granitten, uzun ömürlü ve estetik mezar taşı modelleri.",
        image: img("/mezar-urun1.png"),
    },
    {
        id: "koleksiyonlar/mermer-bas-tasi",
        title: "Mermer Baş Taşı",
        description: "Estetik ve dayanaklı, özel tasarım mermer baş taşları.",
        image: img("/bas-tasi20.jpg"),
    },
    {
        id: "koleksiyonlar/anit",
        title: "Anıt",
        description: "Özel tasarım anıt mezar ve şehitlik projeleri.",
        image: img("/anit1.png"),
    },
    {
        id: "koleksiyonlar/tezgah",
        title: "Tezgah",
        description: "Mutfak ve banyo için granit, çimstone ve kuvars tezgah çözümleri.",
        image: img("/tezgah.png"),
    },
    {
        id: "koleksiyonlar/cesme",
        title: "Çeşme",
        description: "Geleneksel ve modern tasarımlarla mermer ve taş hayrat çeşmeleri.",
        image: img("/cesme1.jpg"),
        objectPosition: "center center",
    },
    {
        id: "koleksiyonlar/somine",
        title: "Şömine",
        description: "Doğal taş ve mermerden özel tasarım şömine modelleri.",
        image: img("/somine.png"),
        objectPosition: "center center",
    },
    {
        id: "koleksiyonlar/mermer-sehpa",
        title: "Mermer Sehpa",
        description: "Doğal mermer dokusuyla modern ve şık sehpa tasarımları.",
        image: img("/sehpa-urun5.png"),
    },
    {
        id: "koleksiyonlar/merdiven",
        title: "Merdiven",
        description: "Mermer ve granit merdiven basamaklarıyla mekanlarınıza şıklık katın.",
        image: img("/merdiven.png"),
    },
    {
        id: "koleksiyonlar/mermer-kaplama",
        title: "Mermer Kaplama",
        description: "Dış ve iç cepheleriniz için estetik ve dayanıklı mermer kaplama çözümleri.",
        image: img("/mermer_kaplama.png"),
    },
    {
        id: "koleksiyonlar/mermer-doseme",
        title: "Mermer Döşeme",
        description: "Mekanlarınıza ferahlık katan yüksek kaliteli mermer zemin döşemeleri.",
        image: img("/mermer_doseme.png"),
    },
    {
        id: "koleksiyonlar/harpusta",
        title: "Harpuşta",
        description: "Duvarlarınızı koruyan ve estetik tamamlayan özel kesim harpuşta modelleri.",
        image: img("/harpusta_modern.png"),
    },
    {
        id: "koleksiyonlar/denizlik",
        title: "Denizlik",
        description: "Pencere önleri için su yalıtımı sağlayan şık mermer denizlikler.",
        image: img("/denizlik.png"),
    },
    {
        id: "koleksiyonlar/mermer-supurgelik",
        title: "Mermer Süpürgelik",
        description: "Zemin ve duvar birleşimlerinde kusursuz detaylar için mermer süpürgelikler.",
        image: img("/mermer_supurgelik.png"),
    },
    {
        id: "koleksiyonlar/mermer-bordur",
        title: "Mermer Bordür",
        description: "Zemin ve duvar tasarımlarınızı zenginleştiren dekoratif mermer bordürler.",
        image: img("/mermer_bordur.png"),
    },
    {
        id: "koleksiyonlar/kaldirim-tasi-bordur",
        title: "Kaldırım Taşı Bordür",
        description: "Estetik ve dayanıklı kaldırım taşı ve bordür uygulamaları.",
        image: img("/kaldirim_tasi_bordur.png"),
    },
    {
        id: "koleksiyonlar/banyo-hamam",
        title: "Banyo & Hamam",
        description: "Geleneksel ve modern hamam ve banyo mermer uygulamaları.",
        image: img("/hamam-urun3.png"),
    },
    {
        id: "koleksiyonlar/abdesthane",
        title: "Abdesthane",
        description: "Doğal mermerden üretilmiş, geleneksel mimariye uyumlu abdesthane tasarımları.",
        image: img("/abdesthane3.jpg"),
        objectPosition: "center center",
    },
];


export const products: Product[] = [
    {
        id: "amasya-beji",
        title: "Amasya Beji",
        description: "Zarif ve doğal görünümlü Amasya Beji mermeri ile mekanlarınıza değer katın.",
        image: img("/amasya-bej-urun.png"),
    },
    {
        id: "marmara-mermeri",
        title: "Marmara Mermeri",
        description: "Klasik ve zamansız Marmara mermeri, dayanıklılığı ile ön planda.",
        image: img("/marmara-urun.png"),
    },
    {
        id: "traverten",
        title: "Traverten",
        description: "Doğal dokusuyla sıcak bir atmosfer yaratan Traverten taşları.",
        image: img("/traverten-urun.png"),
    },
    {
        id: "tundra-grey",
        title: "Tundra Grey",
        description: "Modern ve sofistike gri tonlarıyla Tundra Grey mermeri.",
        image: img("/tundura-urun.png"),
    },
    {
        id: "andezit",
        title: "Andezit",
        description: "Dış mekan zemin kaplamalarında kullanılan kaymaz ve dayanıklı Andezit taşı.",
        image: img("/andazit.png"),
    },
    {
        id: "bazalt",
        title: "Bazalt",
        description: "Sert yapısı ve koyu rengiyle bilinen uzun ömürlü Bazalt taşı.",
        image: img("/bazalt.png"),
    },
    {
        id: "bursa-siyahi",
        title: "Bursa Siyahı",
        description: "Asil ve şık görünümüyle dikkat çeken Bursa Siyahı mermeri.",
        image: img("/bursa-siyahi.png"),
    },
    {
        id: "kuvars",
        title: "Kuvars",
        description: "Leke tutmaz ve çizilmez yapısıyla mutfak tezgahları için ideal Kuvars yüzeyler.",
        image: img("/kuars.png"),
    },
    {
        id: "porselen",
        title: "Porselen",
        description: "Yüksek teknoloji ile üretilen dayanıklı ve estetik Porselen yüzeyler.",
        image: img("/porselen1.png"),
    },
    {
        id: "granit",
        title: "Granit",
        description: "Doğanın en sert taşlarından biri olan Granit ile ömürlük çözümler.",
        image: img("/granit1.png"),
    },
];

export const productsData = [
    // --- MEZAR TAŞI ---
    { code: "M001", title: "Mermer Mezar", image: img("/mezar-urun1.png"), desc: "Sade ve şık tasarımıyla öne çıkan, beyaz mermer tek kişilik mezar modeli.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M002", title: "Kalın Küpeşteli Mezar", image: img("/mezar-urun2.png"), desc: "Dayanıklı ve gösterişli kalın mermer yapısıyla uzun ömürlü çift kişilik model.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M003", title: "Granit Mezar", image: img("/mezar-urun3.png"), desc: "Gri granitin asaletini yansıtan, hava şartlarına ekstra dayanıklı mezar tasarımı.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M004", title: "Traverten Mezar", image: img("/mezar-urun4.png"), desc: "Doğal traverten taşının sıcak tonlarıyla tasarlanmış estetik model.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M005", title: "Mermer Blok Mezar", image: img("/mezar-urun5.png"), desc: "Doğal mermerden üretilmiş şık ve modern mezar modeli.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M006", title: "Özel Tasarım Mezar", image: img("/mezar-urun6.png"), desc: "İsteğe özel ölçü ve motiflerle hazırlanan mermer mezar çalışması.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M007", title: "Siyah Granit Mezar", image: img("/mezar-urun7.png"), desc: "Siyah granitin şıklığını yansıtan, ağır ve asil tasarımlı model.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M008", title: "Çift Kişilik Mezar", image: img("/mezar-urun8.png"), desc: "Geniş aileler için tasarlanmış çift kişilik mermer mezar uygulaması.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M009", title: "Klasik Mermer Mezar", image: img("/mezar-urun9.png"), desc: "Geleneksel çizgileri barındıran sade tek kişilik mermer mezar.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M010", title: "Granit Baştaşlı Mezar", image: img("/mezar-urun10.png"), desc: "Mermer gövde üzerine özel granit baştaşlı özgün tasarım.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M011", title: "Mermer Mezar", image: img("/mezar-urun11.png"), desc: "Sade ve şık tasarımıyla öne çıkan, mermer mezar modeli.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M012", title: "Granit Detaylı Mezar", image: img("/mezar-urun12.png"), desc: "Beyaz mermer ile gri granitin uyumunu yansıtan modern tasarım.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M013", title: "Aile Kabristanı", image: img("/mezar-urun13.png"), desc: "Özel çevre düzenlemesi ile tasarlanmış mermer aile kabristanı.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M014", title: "Sade Mermer Mezar", image: img("/mezar-urun14.png"), desc: "İnce işçilikle hazırlanmış klasik tek kişilik mermer model.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M015", title: "Çift Kişilik Granit", image: img("/mezar-urun15.png"), desc: "Tamamen granitten üretilmiş dayanıklı çift kişilik mezar uygulaması.", href: "/koleksiyonlar/mezar-tasi" },
    { code: "M016", title: "Özel Kenarlı Mezar", image: img("/mezar-urun16.png"), desc: "Farklı kesim detaylarına sahip özgün tasarımlı mermer mezar.", href: "/koleksiyonlar/mezar-tasi" },

    // --- ANIT ---
    { code: "AN001", title: "Anıt", image: img("/anit-urun1.png"), desc: "Özel tasarım anıt mezar projesi. Mermer ve granitten kaliteli işçilik.", href: "/koleksiyonlar/anit" },
    { code: "AN002", title: "Tek Kişilik Anıt", image: img("/anit.jpeg"), desc: "Sade ve asil görünümüyle tek kişilik mermer anıt mezar modeli.", href: "/koleksiyonlar/anit" },

    // --- ÇEŞME ---
    { code: "C001", title: "Klasik Hayrat Çeşmesi", image: img("/cesme1.jpg"), desc: "Osmanlı motifleriyle bezenmiş, geleneksel tek kurnalı tasarım.", href: "/koleksiyonlar/cesme" },
    { code: "C002", title: "Mermer Sokak Çeşmesi", image: img("/cesme2.jpg"), desc: "Park ve bahçeler için uygun, dayanıklı doğal taş yapı.", href: "/koleksiyonlar/cesme" },
    { code: "C003", title: "Modern Duvar Çeşmesi", image: img("/cesme3.jpg"), desc: "Modern mimariye uyumlu sade ve şık mermer tasarım.", href: "/koleksiyonlar/cesme" },
    { code: "C004", title: "Sade Hayrat Çeşmesi", image: img("/cesme4.jpg"), desc: "Sade ve şık hatlara sahip tek kurnalı mermer çeşme.", href: "/koleksiyonlar/cesme" },
    { code: "C005", title: "Klasik Çeşme", image: img("/cesme5.jpg"), desc: "Geleneksel motiflerle bezenmiş Osmanlı tarzı hayrat çeşmesi.", href: "/koleksiyonlar/cesme" },
    { code: "C006", title: "Duvar Çeşmesi", image: img("/cesme6.jpg"), desc: "Modern peyzaj tasarımlarına uygun duvara monte çeşme.", href: "/koleksiyonlar/cesme" },
    { code: "C007", title: "Bahçe Çeşmesi", image: img("/cesme7.jpg"), desc: "Doğal taş görünümüyle bahçenize estetik katacak çeşme.", href: "/koleksiyonlar/cesme" },
    { code: "C008", title: "Özel Tasarım Çeşme", image: img("/cesme8.jpg"), desc: "İhtiyacınıza özel ölçü ve motiflerde üretilen mermer çeşme.", href: "/koleksiyonlar/cesme" },

    // --- DENİZLİK ---
    { code: "Z001", title: "Özel Kesim Denizlik", image: img("/denizlik-urun1.png"), desc: "Pencere ölçülerinize tam uyumlu, özel kesim mermer denizlikler.", href: "/koleksiyonlar/denizlik" },
    { code: "Z002", title: "Klasik Mermer Denizlik", image: img("/denizlik-urun2.png"), desc: "Dayanıklı yapısı ve klasik görünümüyle her pencereye uygun denizlik.", href: "/koleksiyonlar/denizlik" },

    // --- HARPUŞTA ---
    { code: "H001", title: "Modern Harpuşta", image: img("/harpusta-urun1.png"), desc: "Modern mimariye uygun, sade ve şık harpuşta tasarımı.", href: "/koleksiyonlar/harpusta" },
    { code: "H002", title: "Damgalı Harpuşta", image: img("/harpusta-urun2.png"), desc: "Özel damgalı ve kesimli klasik harpuşta uygulaması.", href: "/koleksiyonlar/harpusta" },

    // --- MERDİVEN ---
    { code: "R001", title: "Mermer Merdiven", image: img("/merdiven-urun1.png"), desc: "Beyaz mermerden üretilmiş şık ve dayanıklı merdiven basamakları.", href: "/koleksiyonlar/merdiven" },
    { code: "R002", title: "Dış Cephe Merdiven", image: img("/merdiven-urun2.png"), desc: "Dış mekan hava şartlarına dayanıklı doğal taş merdiven zemin kaplaması.", href: "/koleksiyonlar/merdiven" },
    { code: "R003", title: "Klasik Merdiven", image: img("/merdiven-urun3.png"), desc: "Mekanlara ferahlık katan açık renk mermer merdiven döşemesi.", href: "/koleksiyonlar/merdiven" },
    { code: "R004", title: "Lüks Merdiven", image: img("/merdiven-urun4.png"), desc: "Özel işçilik ve kaliteli mermer ile üretilmiş lüks merdiven tasarımı.", href: "/koleksiyonlar/merdiven" },
    { code: "R005", title: "Siyah Mermer Merdiven", image: img("/merdiven-urun5.png"), desc: "Siyah mermerin asaletini merdivenlerinize taşıyan tasarım.", href: "/koleksiyonlar/merdiven" },
    { code: "R006", title: "Siyah Mermer Merdiven Kaplaması", image: img("/merdiven-urun6.png"), desc: "Darbelere karşı dayanıklı, parlak siyah mermer kaplama uygulaması.", href: "/koleksiyonlar/merdiven" },
    { code: "R007", title: "Granit Merdiven", image: img("/merdiven-urun7.png"), desc: "Özellikle dış mekanlar için uzun ömürlü granit merdiven çözümü.", href: "/koleksiyonlar/merdiven" },
    { code: "R008", title: "Renkli Mermer Merdiven", image: img("/merdiven-urun8.png"), desc: "Koyu renk mermer kullanılarak mekanlara derinlik katan merdiven döşemesi.", href: "/koleksiyonlar/merdiven" },
    { code: "R009", title: "Özel Tasarım Merdiven", image: img("/merdiven-urun9.png"), desc: "Geniş alanlar için özel olarak tasarlanmış geniş açılı mermer merdivenler.", href: "/koleksiyonlar/merdiven" },

    // --- KALDIRIM TAŞI BORDÜR ---
    { code: "KT001", title: "Klasik Kaldırım Taşı", image: img("/kaldirim-bordur-urun1.png"), desc: "Dayanıklı yapısı ve klasik görünümüyle her türlü dış mekana uygun kaldırım taşı.", href: "/koleksiyonlar/kaldirim-tasi-bordur" },
    { code: "KT002", title: "Modern Kaldırım Bordür", image: img("/kaldirim-bordur-urun2.png"), desc: "Modern peyzaj tasarımlarını tamamlayan, net çizgilere sahip bordür.", href: "/koleksiyonlar/kaldirim-tasi-bordur" },

    // --- BAŞ TAŞI ---
    { code: "B001", title: "Traverten Baş Taşı", image: img("/bas-tasi-urun1.png"), desc: "Özel tasarım mermer baş taşı.", href: "/koleksiyonlar/mermer-bas-tasi" },
    { code: "B002", title: "Mermer Baş Taşı", image: img("/bas-tasi-urun2.png"), desc: "Estetik ve dayanıklı traverten baş taşı modeli.", href: "/koleksiyonlar/mermer-bas-tasi" },

    // --- MERMER BORDÜR ---
    { code: "U001", title: "Desenli Bordür", image: img("/bordur-urun1.png"), desc: "Klasik ve modern desenlerle işlenmiş dekoratif bordür.", href: "/koleksiyonlar/mermer-bordur" },
    { code: "U002", title: "Zemin Bordür", image: img("/bordur-urun3.png"), desc: "Zemin kaplamalarınıza çerçeve oluşturan şık bordür uygulaması.", href: "/koleksiyonlar/mermer-bordur" },
    { code: "U003", title: "Zemin Bordür", image: img("/bordur-urun4.png"), desc: "Zemin kaplamalarınıza çerçeve oluşturan şık bordür uygulaması.", href: "/koleksiyonlar/mermer-bordur" },

    // --- MERMER DÖŞEME ---
    { code: "D001", title: "Salon Zemin Kaplama", image: img("/kaplama-urun2.png"), desc: "Geniş salonlar için ferahlık ve şıklık katan mermer zemin uygulaması.", href: "/koleksiyonlar/mermer-doseme" },
    { code: "D002", title: "Banyo Döşemesi", image: img("/kaplama-urun3.png"), desc: "Banyolarınız için estetik ve dayanıklı doğal taş döşeme.", href: "/koleksiyonlar/mermer-doseme" },
    { code: "D003", title: "Klasik Mermer Döşeme", image: img("/mermer_doseme.png"), desc: "Zamanın ötesinde klasik mermer dokusuyla mekanlarınızı zenginleştirin.", href: "/koleksiyonlar/mermer-doseme" },

    // --- MERMER KAPLAMA ---
    { code: "K001", title: "Duvar Kaplama", image: img("/kaplama-urun1.png"), desc: "İç ve dış mekanlar için şık ve dayanıklı mermer duvar kaplama uygulamaları.", href: "/koleksiyonlar/mermer-kaplama" },
    { code: "K002", title: "Dış Cephe Kaplama", image: img("/kaplama-urun4.png"), desc: "Yüksek trafikli alanlar için uzun ömürlü mermer zemin kaplama çözümleri.", href: "/koleksiyonlar/mermer-kaplama" },
    { code: "K003", title: "Özel Kaplama", image: img("/kaplama-urun5.png"), desc: "Projenize özel ölçü ve tasarımlarla mermer kaplama uygulamaları.", href: "/koleksiyonlar/mermer-kaplama" },

    // --- MERMER SEHPA ---
    { code: "E001", title: "Mermer Sehpa", image: img("/sehpa-urun1.png"), desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },
    { code: "E002", title: "Mermer Sehpa", image: img("/sehpa-urun2.png"), desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },
    { code: "E003", title: "Mermer Sehpa", image: img("/sehpa-urun3.png"), desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },
    { code: "E004", title: "Mermer Sehpa", image: img("/sehpa-urun4.png"), desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },
    { code: "E005", title: "Mermer Sehpa", image: img("/sehpa-urun5.png"), desc: "Doğal mermer dokusuyla tasarlanmış şık ve modern sehpa modeli.", href: "/koleksiyonlar/mermer-sehpa" },

    // --- MERMER SÜPÜRGELİK ---
    { code: "G001", title: "Klasik Süpürgelik", image: img("/supurgelik-urun1.png"), desc: "Her mekana uyum sağlayan, sade ve şık mermer süpürgelik modeli.", href: "/koleksiyonlar/mermer-supurgelik" },
    { code: "G002", title: "Modern Süpürgelik", image: img("/supurgelik-urun2.png"), desc: "Modern çizgilerle tasarlanmış, dekoratif ve işlevsel süpürgelik uygulaması.", href: "/koleksiyonlar/mermer-supurgelik" },
    { code: "G003", title: "Dekoratif Süpürgelik", image: img("/supurgelik-urun3.png"), desc: "Özel desen ve kesimlerle zenginleştirilmiş dekoratif mermer süpürgelik.", href: "/koleksiyonlar/mermer-supurgelik" },

    // --- ŞÖMİNE ---
    { code: "S001", title: "Klasik Şömine", image: img("/somine-urun1.png"), desc: "Geleneksel motiflerle bezenmiş, salonunuza asillik katan klasik şömine modeli.", href: "/koleksiyonlar/somine" },
    { code: "S002", title: "Modern Şömine Tasarımı", image: img("/somine-urun2.png"), desc: "Minimalist hatlar ve doğal taşın uyumuyla tasarlanan modern şömine.", href: "/koleksiyonlar/somine" },
    { code: "S003", title: "Granit Şömine", image: img("/somine-urun3.png"), desc: "Granitin dayanıklılığı ve şıklığını bir arada sunan özel tasarım.", href: "/koleksiyonlar/somine" },
    { code: "S004", title: "Dekoratif Şömine", image: img("/somine-urun4.png"), desc: "Mekanınıza sanatsal bir dokunuş katan dekoratif taş şömine.", href: "/koleksiyonlar/somine" },
    { code: "S005", title: "Köşe Şömine Modeli", image: img("/somine-urun5.png"), desc: "Mekan kullanımını optimize eden şık köşe şömine uygulaması.", href: "/koleksiyonlar/somine" },
    { code: "S006", title: "Mermer Şömine", image: img("/somine-urun6.png"), desc: "Mermerin eşsiz damar yapısıyla her biri sanat eseri niteliğinde şömineler.", href: "/koleksiyonlar/somine" },
    { code: "S007", title: "Özel Tasarım Şömine", image: img("/somine-urun7.png"), desc: "İsteklerinize ve mekanınıza özel olarak projelendirilen şömine çözümleri.", href: "/koleksiyonlar/somine" },

    // --- TEZGAH ---
    { code: "T001", title: "Özel Tasarım Mutfak Tezgahı", image: img("/tezgah-urun1.png"), desc: "Kişiye özel ölçü ve tasarım seçenekleriyle modern mutfak tezgahları.", href: "/koleksiyonlar/tezgah" },
    { code: "T002", title: "Granit Tezgah", image: img("/tezgah.png"), desc: "Doğal taşın dayanıklılığı ve şıklığını mutfağınıza taşıyan granit tezgahlar.", href: "/koleksiyonlar/tezgah" },
    { code: "T003", title: "Tezgah Uygulaması", image: img("/tezgah-urun2.png"), desc: "Dayanıklı ve şık mutfak tezgahı uygulaması.", href: "/koleksiyonlar/tezgah" },
    { code: "T004", title: "Mutfak Tezgahı Modeli", image: img("/tezgah-urun3.png"), desc: "Modern çizgiler ve kaliteli işçilikle üretilen mutfak tezgahı.", href: "/koleksiyonlar/tezgah" },
    { code: "T005", title: "Mutfak Tezgahı", image: img("/tezgah-urun4.png"), desc: "Doğal granitin eşsiz renkleriyle mutfağınıza değer katın.", href: "/koleksiyonlar/tezgah" },
    { code: "T006", title: "Mutfak Tezgahı", image: img("/tezgah-urun5.png"), desc: "Mutfaklar için suya dayanıklı ve estetik  tezgah çözümleri.", href: "/koleksiyonlar/tezgah" },
    { code: "T007", title: "Özel Kesim Tezgah", image: img("/tezgah-urun6.png"), desc: "Projenize uygun özel ölçülerde kesilmiş mermer ve granit tezgahlar.", href: "/koleksiyonlar/tezgah" },
    { code: "T008", title: "Banyo Tezgahı", image: img("/tezgah-urun7.png"), desc: "Estetik görünümü ile banyolarınızın havasını değiştirecek tezgah modeli.", href: "/koleksiyonlar/tezgah" }
];

