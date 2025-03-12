// Book details data
const bookData = {
    1: {
        title: "Esir Şehrin İnsanları",
        author: "Kemal Tahir",
        pages: 420,
        duration: "14 saat 32 dakika",
        date: "01.09.1956",
        publisher: "İthaki Yayınları",
        language: "Türkçe",
        description: "İşgal altındaki İstanbul'da bir grup aydının hikayesini anlatan roman, Kemâl Tahir'in önemli eserlerinden biridir. Roman, Türk Kurtuluş Savaşı sırasında İstanbul'un işgali ve Anadolu'daki direniş hareketi etrafında şekillenmektedir.",
        audioPrice: 49.90,
        ebookPrice: 39.90,
        categories: ["Roman", "Tarihi", "Kurtuluş Savaşı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.7,
        audioSample: "audio/esir-sehrin-insanlari.mp3"
    },
    2: {
        title: "Cerrah",
        author: "Tess Gerritsen",
        pages: 352,
        duration: "11 saat 45 dakika",
        date: "15.06.2001",
        publisher: "Doğan Kitap",
        language: "Türkçe",
        description: "Cerrah, Tess Gerritsen'in uluslararası çok satan tıbbi gerilim romanıdır. Bir dizi kadın cinayetini soruşturan Boston Cinayet Masası dedektifi Jane Rizzoli ve adli tıp uzmanı Dr. Maura Isles'ın hikayesini anlatır.",
        audioPrice: 44.90,
        ebookPrice: 38.90,
        categories: ["Polisiye", "Gerilim", "Tıbbi Gerilim"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.4,
        audioSample: "audio/cerrah.mp3"
    },
    3: {
        title: "Suyun Şekli - Komiser Montalbano 1",
        author: "Andrea Camilleri",
        pages: 224,
        duration: "6 saat 28 dakika",
        date: "12.07.1994",
        publisher: "Sel Yayıncılık",
        language: "Türkçe",
        description: "Sicilya'da yaşayan Komiser Montalbano'nun ilk vakası. Montalbano, yerel bir politikacının şüpheli ölümünü araştırırken kendini karmaşık bir entrika ağının içinde bulur.",
        audioPrice: 39.90,
        ebookPrice: 32.90,
        categories: ["Polisiye", "Dedektif", "İtalyan Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 3.8
    },
    4: {
        title: "İnce Memed 1",
        author: "Yaşar Kemal",
        pages: 398,
        duration: "13 saat 22 dakika",
        date: "05.03.1955",
        publisher: "Yapı Kredi Yayınları",
        language: "Türkçe",
        description: "Çukurova'da ağaların zulmüne başkaldıran ve efsanevi bir halk kahramanına dönüşen Memed'in hikayesi. Yaşar Kemal'in dünya çapında üne kavuşmasını sağlayan dört ciltlik serinin ilk kitabı.",
        audioPrice: 54.90,
        ebookPrice: 44.90,
        categories: ["Roman", "Türk Edebiyatı", "Köy Romanı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.9
    },
    5: {
        title: "Zülfikar'ın Hükmü - Yedi Kartal Efsanesi 1. Kitap",
        author: "Saygın Ersin",
        pages: 480,
        duration: "16 saat 10 dakika",
        date: "18.11.2018",
        publisher: "Anatolia Kitap",
        language: "Türkçe",
        description: "Ortaçağ Anadolu'sunda geçen fantastik bir kurgu. Selçuklu Beyliği'nin kuruluş döneminde, efsanevi Yedi Kartal'ın hikayesini ve Zülfikar'ın sırrını anlatıyor.",
        audioPrice: 59.90,
        ebookPrice: 48.90,
        categories: ["Fantastik", "Tarihi", "Türk Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.7
    },
    6: {
        title: "Yüzüklerin Efendisi: Yüzük Kardeşliği",
        author: "J.R.R. Tolkien",
        pages: 576,
        duration: "19 saat 45 dakika",
        date: "29.07.1954",
        publisher: "Metis Yayınları",
        language: "Türkçe",
        description: "Orta Dünya'da geçen epik fantastik serinin ilk kitabı. Hobbit Frodo Baggins'in, karanlık lord Sauron'un güç yüzüğünü yok etmek için çıktığı tehlikeli yolculuğu anlatır.",
        audioPrice: 64.90,
        ebookPrice: 54.90,
        categories: ["Fantastik", "Epik", "Macera"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.8
    },
    7: {
        title: "İnferis",
        author: "Mahfi Eğilmez",
        pages: 304,
        duration: "9 saat 15 dakika",
        date: "10.05.2022",
        publisher: "Remzi Kitabevi",
        language: "Türkçe",
        description: "Ekonomist Mahfi Eğilmez'in ilk romanı olan İnferis, günümüz dünyasında yaşanan ekonomik ve toplumsal sorunları distopik bir kurgu içinde ele alıyor.",
        audioPrice: 49.90,
        ebookPrice: 42.90,
        categories: ["Distopya", "Roman", "Ekonomi"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.4
    },
    8: {
        title: "Simyacı",
        author: "Paulo Coelho",
        pages: 188,
        duration: "4 saat 12 dakika",
        date: "01.01.1988",
        publisher: "Can Yayınları",
        language: "Türkçe",
        description: "Simyacı, İspanya'dan Mısır Piramitleri'ne uzanan bir hazine arayışına çıkan Santiago adlı çobanın yolculuğunu anlatır. Paulo Coelho'nun en ünlü eseri olan roman, kişisel efsanemizi gerçekleştirme ve kalbimizin sesini dinleme üzerine alegorik bir hikâyedir.",
        audioPrice: 44.90,
        ebookPrice: 39.90,
        categories: ["Roman", "Kişisel Gelişim", "Alegori"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.5
    },
    9: {
        title: "Hayvan Çiftliği",
        author: "George Orwell",
        pages: 152,
        duration: "3 saat 12 dakika",
        date: "17.08.1945",
        publisher: "Can Yayınları",
        language: "Türkçe",
        description: "Hayvan Çiftliği, bir çiftlikteki hayvanların insanlara karşı başlattıkları devrim ve sonrasında yaşananları anlatan, Sovyetler Birliği'ndeki Stalinist dönemi eleştiren alegorik bir politik hicivdir.",
        audioPrice: 39.90,
        ebookPrice: 34.90,
        categories: ["Roman", "Politik", "Alegori"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.8
    },
    10: {
        title: "Küçük Prens",
        author: "Antoine de Saint-Exupéry",
        pages: 112,
        duration: "1 saat 58 dakika",
        date: "06.04.1943",
        publisher: "Can Yayınları",
        language: "Türkçe",
        description: "Küçük Prens, kendi gezegeninden ayrılıp diğer gezegenleri ve Dünya'yı gezen bir çocuğun hikâyesini anlatan, yetişkinlere yönelik bir çocuk kitabıdır.",
        audioPrice: 34.90,
        ebookPrice: 29.90,
        categories: ["Çocuk", "Felsefe", "Masal"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.9
    },
    // Spot Işıkları Altında bölümündeki kitaplar için özel veriler
    "intermezzo": {
        title: "Intermezzo",
        author: "Sally Rooney",
        pages: 320,
        duration: "10 saat 20 dakika",
        date: "05.09.2021",
        publisher: "Epsilon Yayınevi",
        language: "Türkçe",
        description: "Intermezzo, Sally Rooney'nin çağdaş ilişkileri ve modern hayatın karmaşıklığını ele aldığı romanıdır. Karakterlerin iç dünyalarını ve ilişkilerini derinlemesine inceleyen bu eser, günümüz edebiyatının önemli örneklerindendir.",
        audioPrice: 49.90,
        ebookPrice: 39.90,
        categories: ["Roman", "Çağdaş Edebiyat", "İrlanda Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.3,
        audioSample: "audio/intermezzo.mp3"
    },
    "beni-gozunuzde": {
        title: "Beni Gözünüzde Büyütmeyin!",
        author: "Gülse Birsel",
        pages: 224,
        duration: "7 saat 30 dakika",
        date: "25.08.2018",
        publisher: "Doğan Kitap",
        language: "Türkçe",
        description: "Beni Gözünüzde Büyütmeyin!, Gülse Birsel'in mizahi anlatımıyla gündelik hayatın absürtlüklerini ele aldığı kitabıdır. Birsel'in kendine has üslubuyla kaleme aldığı bu eser, okuyucuya kahkaha dolu anlar yaşatıyor.",
        audioPrice: 42.90,
        ebookPrice: 32.90,
        categories: ["Mizah", "Anı", "Deneme"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.2,
        audioSample: "audio/beni-gozunuzde-buyutmeyin.mp3"
    },
    "neksus": {
        title: "Neksus",
        author: "Yuval Noah Harari",
        pages: 432,
        duration: "14 saat 20 dakika",
        date: "10.03.2023",
        publisher: "Kolektif Kitap",
        language: "Türkçe",
        description: "Neksus, Yuval Noah Harari'nin teknoloji, toplum ve insanlığın geleceği üzerine düşüncelerini paylaştığı kitabıdır. İnsanlığın karşı karşıya olduğu en büyük zorluklara ve fırsatlara odaklanan bu eser, geleceğimize dair çarpıcı öngörüler sunuyor.",
        audioPrice: 59.90,
        ebookPrice: 49.90,
        categories: ["Bilim", "Felsefe", "Teknoloji"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.7,
        audioSample: "audio/neksus.mp3"
    },
    "sayin-bay-rock": {
        title: "Sayın Bay Rock Yıldızı",
        author: "Teoman",
        pages: 256,
        duration: "8 saat 15 dakika",
        date: "20.11.2021",
        publisher: "Can Yayınları",
        language: "Türkçe",
        description: "Sayın Bay Rock Yıldızı, müzisyen Teoman'ın otobiyografik öğeler içeren romanıdır. Bir rock yıldızının hayatını, müzik dünyasını ve kişisel mücadelelerini anlatır. Türk rock müziğinin efsanevi ismi Teoman'ın kaleminden çıkan bu kitap, müzik ve edebiyat tutkunları için benzersiz bir deneyim sunuyor.",
        audioPrice: 44.90,
        ebookPrice: 34.90,
        categories: ["Biyografi", "Müzik", "Roman"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.5,
        audioSample: "audio/sayin-bay-rock-yildizi.mp3"
    },
    "4-gun-3-gece": {
        title: "4 Gün 3 Gece",
        author: "Ayşe Kulin",
        pages: 288,
        duration: "9 saat 40 dakika",
        date: "15.05.2022",
        publisher: "Everest Yayınları",
        language: "Türkçe",
        description: "4 Gün 3 Gece, Ayşe Kulin'in aşk, tutku ve entrika dolu romanıdır. Dört gün üç gece süren bir tatil sırasında yaşanan olayları anlatan kitap, karakterlerin geçmişleriyle yüzleşmelerini ve ilişkilerindeki dönüm noktalarını ele alıyor.",
        audioPrice: 47.90,
        ebookPrice: 37.90,
        categories: ["Roman", "Aşk", "Türk Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.4,
        audioSample: "audio/4-gun-3-gece.mp3"
    },
    "dune": {
        title: "Dune",
        author: "Frank Herbert",
        pages: 712,
        duration: "21 saat 30 dakika",
        date: "01.08.1965",
        publisher: "İthaki Yayınları",
        language: "Türkçe",
        description: "Dune, Frank Herbert'in bilim kurgu klasiğidir. Arrakis adlı çöl gezegeninde geçen roman, politik entrikalar, din, ekoloji ve insan potansiyeli temalarını işler. Tüm zamanların en çok satan bilim kurgu romanlarından biri olan Dune, türünün başyapıtlarından kabul edilir.",
        audioPrice: 69.90,
        ebookPrice: 59.90,
        categories: ["Bilim Kurgu", "Fantastik", "Klasik"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.8,
        audioSample: "audio/dune.mp3"
    },
    "tutunamayanlar": {
        title: "Tutunamayanlar",
        author: "Oğuz Atay",
        pages: 724,
        duration: "23 saat 15 dakika",
        date: "01.01.1972",
        publisher: "İletişim Yayınları",
        language: "Türkçe",
        description: "Tutunamayanlar, Oğuz Atay'ın başyapıtı ve Türk edebiyatının en önemli modernist romanlarından biridir. Selim Işık'ın intiharı sonrası arkadaşı Turgut Özben'in onun hayatını araştırmasını konu alan roman, Türk toplumunun entelektüel bunalımlarını, yabancılaşmayı ve varoluşsal sorunları derinlemesine ele alır.",
        audioPrice: 64.90,
        ebookPrice: 54.90,
        categories: ["Roman", "Modern", "Türk Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.9,
        audioSample: "audio/tutunamayanlar.mp3"
    },
    "seker-portakali": {
        title: "Şeker Portakalı",
        author: "José Mauro de Vasconcelos",
        pages: 182,
        duration: "5 saat 40 dakika",
        date: "01.01.1968",
        publisher: "Can Yayınları",
        language: "Türkçe",
        description: "Şeker Portakalı, Brezilyalı yazar José Mauro de Vasconcelos'un yarı otobiyografik romanıdır. Beş yaşındaki Zezé'nin yoksulluk içinde geçen çocukluğunu, hayal gücünü ve büyüme sürecini anlatan dokunaklı bir hikaye. Dünya çapında milyonlarca okura ulaşan bu eser, çocukluğun masumiyetini ve acılarını etkileyici bir dille anlatır.",
        audioPrice: 39.90,
        ebookPrice: 34.90,
        categories: ["Roman", "Çocuk Edebiyatı", "Dünya Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.8,
        audioSample: "audio/seker-portakali.mp3"
    },
    "empati": {
        title: "Empati",
        author: "Adam Fawer",
        pages: 432,
        duration: "14 saat 20 dakika",
        date: "15.03.2008",
        publisher: "April Yayıncılık",
        language: "Türkçe",
        description: "Empati, Adam Fawer'in gerilim dolu bilim kurgu romanıdır. Başkalarının zihinlerini okuyabilen bir kadının hikayesini anlatan kitap, psikolojik gerilim ve bilimsel unsurları ustaca harmanlıyor. İnsan zihninin sınırlarını zorlayan ve empati kavramını sorgulatan sürükleyici bir eser.",
        audioPrice: 54.90,
        ebookPrice: 44.90,
        categories: ["Bilim Kurgu", "Gerilim", "Psikolojik"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.6,
        audioSample: "audio/empati.mp3"
    },
    // Çok Satan Kitaplar bölümündeki kitaplar için özel veriler
    "karamazov": {
        title: "Karamazov Kardeşler",
        author: "Fyodor Dostoyevski",
        pages: 840,
        duration: "32 saat 15 dakika",
        date: "01.01.1880",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Karamazov Kardeşler, Dostoyevski'nin son ve en büyük romanıdır. Ahlaki, dini ve felsefi temalarla dolu olan bu eser, bir baba ve üç oğlu arasındaki karmaşık ilişkileri konu alır. Roman, insanın doğası, inanç, şüphe, özgür irade ve ahlak gibi derin konuları ele alır.",
        audioPrice: 59.90,
        ebookPrice: 49.90,
        categories: ["Roman", "Klasik", "Dünya Edebiyatı", "Rus Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.9,
        audioSample: "audio/karamazov-kardesler.mp3"
    },
    "Ustalık Gerektiren Kafaya Takmama Sanatı": {
        author: "Mark Manson",
        pages: 224,
        duration: "8 saat 15 dakika",
        publishDate: "21.03.2019",
        publisher: "Pegasus Yayınları",
        language: "Türkçe",
        description: "Modern hayatın getirdiği sorunlarla başa çıkmanın yollarını anlatan, pozitif düşünmenin tuzaklarını ortaya koyan ve gerçekçi bir yaklaşımla mutluluğa ulaşmanın ipuçlarını veren bir kişisel gelişim kitabı."
    },
    "Simyacı": {
        author: "Paulo Coelho",
        pages: 188,
        duration: "4 saat 45 dakika",
        publishDate: "15.04.1996",
        publisher: "Can Yayınları",
        language: "Türkçe",
        description: "Santiago adlı genç bir çobanın İspanya'dan Mısır Piramitleri'ne uzanan yolculuğunu anlatan, kişinin kendi yazgısını gerçekleştirmesi üzerine yazılmış bir kişisel keşif romanı."
    },
    "Hayvan Çiftliği": {
        author: "George Orwell",
        pages: 152,
        duration: "3 saat 30 dakika",
        publishDate: "17.08.1945",
        publisher: "Can Yayınları",
        language: "Türkçe",
        description: "Bir çiftlikte yaşayan hayvanların insanlara karşı başlattığı özgürlük mücadelesini ve sonrasında yaşanan yozlaşmayı anlatan, totaliter rejimleri eleştiren alegorik bir roman."
    },
    "Tutunamayanlar": {
        author: "Oğuz Atay",
        pages: 724,
        duration: "32 saat 15 dakika",
        publishDate: "01.01.1972",
        publisher: "İletişim Yayınları",
        language: "Türkçe",
        description: "Türk edebiyatının en önemli modernist romanlarından biri olan eser, Selim Işık'ın intiharı etrafında şekillenen, aydın bunalımını ve toplumsal eleştiriyi içeren bir başyapıt."
    },
    "Karamazov Kardeşler": {
        author: "Fyodor Dostoyevski",
        pages: 840,
        duration: "38 saat 20 dakika",
        publishDate: "01.01.1880",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Bir baba ve üç oğlunun hikayesi üzerinden insan doğasını, ahlakı, inancı ve özgür iradeyi sorgulayan, Dostoyevski'nin başyapıtı sayılan felsefi bir roman."
    },
    "Suç ve Ceza": {
        author: "Fyodor Dostoyevski",
        pages: 687,
        duration: "24 saat 45 dakika",
        publishDate: "01.01.1866",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Yoksul bir öğrenci olan Raskolnikov'un işlediği cinayet sonrasında yaşadığı psikolojik çöküşü ve vicdani hesaplaşmayı anlatan, suç ve ceza kavramlarını derinlemesine inceleyen psikolojik bir roman."
    }
};

// Daha fazla kitap ekleyelim
const additionalBooks = {
    "suc-ve-ceza": {
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        pages: 687,
        duration: "24 saat 30 dakika",
        date: "01.01.1866",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Suç ve Ceza, Dostoyevski'nin en tanınmış eserlerinden biridir. Yoksul bir öğrenci olan Raskolnikov'un işlediği cinayet ve sonrasında yaşadığı psikolojik çöküşü anlatan roman, suç, ceza, vicdan ve kurtuluş temalarını derinlemesine işler.",
        audioPrice: 64.90,
        ebookPrice: 54.90,
        categories: ["Klasik", "Roman", "Rus Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.8,
        audioSample: "audio/suc-ve-ceza.mp3"
    },
    "sefiller": {
        title: "Sefiller",
        author: "Victor Hugo",
        pages: 1232,
        duration: "48 saat 20 dakika",
        date: "03.04.1862",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Sefiller, Victor Hugo'nun başyapıtı olarak kabul edilen, 19. yüzyıl Fransa'sında geçen epik bir romandır. Jean Valjean, Fantine, Cosette ve Javert gibi unutulmaz karakterlerin hayatlarını anlatan bu eser, adalet, merhamet ve sevgi temalarını işler.",
        audioPrice: 89.90,
        ebookPrice: 79.90,
        categories: ["Klasik", "Roman", "Fransız Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.9,
        audioSample: "audio/sefiller.mp3"
    },
    "anna-karenina": {
        title: "Anna Karenina",
        author: "Lev Tolstoy",
        pages: 864,
        duration: "35 saat 40 dakika",
        date: "15.03.1877",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Anna Karenina, Tolstoy'un en ünlü eserlerinden biridir. 19. yüzyıl Rus aristokrasisinde geçen romanda, evli bir kadın olan Anna Karenina'nın yasak aşkı ve trajik sonu anlatılır. Aşk, evlilik, sadakat ve toplumsal normlar üzerine derin bir inceleme sunan bu eser, dünya edebiyatının başyapıtları arasında yer alır.",
        audioPrice: 74.90,
        ebookPrice: 64.90,
        categories: ["Klasik", "Roman", "Rus Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.7,
        audioSample: "audio/anna-karenina.mp3"
    },
    "don-kisot": {
        title: "Don Kişot",
        author: "Miguel de Cervantes",
        pages: 1050,
        duration: "42 saat 15 dakika",
        date: "16.01.1605",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Don Kişot, modern romanın ilk örneği olarak kabul edilen bir başyapıttır. Şövalye romanlarından etkilenerek kendini şövalye sanan Don Kişot'un ve yardımcısı Sancho Panza'nın maceralarını anlatan eser, idealizm ve realizm arasındaki çatışmayı mizahi bir dille ele alır.",
        audioPrice: 84.90,
        ebookPrice: 74.90,
        categories: ["Klasik", "Roman", "İspanyol Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.8,
        audioSample: "audio/don-kisot.mp3"
    },
    "gurur-ve-onyargi": {
        title: "Gurur ve Önyargı",
        author: "Jane Austen",
        pages: 432,
        duration: "18 saat 30 dakika",
        date: "28.01.1813",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Gurur ve Önyargı, Jane Austen'ın en sevilen romanıdır. 19. yüzyıl İngiltere'sinde geçen romanda, Elizabeth Bennet ve Bay Darcy arasındaki çalkantılı ilişki anlatılır. Sınıf farkları, evlilik, aşk ve toplumsal beklentiler üzerine keskin gözlemler sunan bu eser, romantik edebiyatın klasiklerinden biridir.",
        audioPrice: 59.90,
        ebookPrice: 49.90,
        categories: ["Klasik", "Roman", "İngiliz Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.6,
        audioSample: "audio/gurur-ve-onyargi.mp3"
    },
    "monte-kristo": {
        title: "Monte Kristo Kontu",
        author: "Alexandre Dumas",
        pages: 1276,
        duration: "52 saat 45 dakika",
        date: "28.08.1844",
        publisher: "İş Bankası Kültür Yayınları",
        language: "Türkçe",
        description: "Monte Kristo Kontu, Alexandre Dumas'nın en ünlü eserlerinden biridir. Haksız yere hapse atılan Edmond Dantès'in kaçışını ve intikam planını anlatan bu macera dolu roman, adalet, intikam, affetme ve kader temaları üzerine düşündürücü bir hikaye sunar.",
        audioPrice: 94.90,
        ebookPrice: 84.90,
        categories: ["Klasik", "Roman", "Fransız Edebiyatı"],
        hasAudio: true,
        hasEbook: true,
        rating: 4.8,
        audioSample: "audio/monte-kristo.mp3"
    }
};

// Yeni kitapları ana kitap veritabanına ekleyelim
Object.assign(bookData, additionalBooks);

// Author details data
const authorData = {
    1: {
        name: "Kemal Tahir",
        birth: "15.04.1910",
        death: "21.04.1973",
        country: "Türkiye",
        bookCount: 32,
        biography: "Gerçek adı İsmail Kemalettin Demir olan Kemal Tahir, Türk edebiyatının önemli romancılarından biridir. Eserlerinde Türk toplumunun sosyal ve tarihi gerçeklerini yansıtmıştır. 1938-1950 yılları arasında hapis yatan yazar, bu dönemde Anadolu insanını yakından tanıma fırsatı bulmuştur. 'Esir Şehrin İnsanları', 'Devlet Ana', 'Yorgun Savaşçı' gibi eserleriyle Türk romanında derin izler bırakmıştır.",
        books: [1]
    },
    2: {
        name: "Tess Gerritsen",
        birth: "12.06.1953",
        death: "",
        country: "ABD",
        bookCount: 28,
        biography: "Jane Tess Gerritsen, Çin asıllı Amerikalı bir yazar ve eski bir doktordur. Tıbbi gerilim ve suç/polisiye türünde yazdığı romanlarla tanınır. 'Rizzoli & Isles' serisi, televizyona da uyarlanmıştır. Tıp eğitimi almış olması, kitaplarındaki tıbbi detayların gerçekçi olmasını sağlar.",
        books: [2]
    },
    3: {
        name: "Andrea Camilleri",
        birth: "06.09.1925",
        death: "17.07.2019",
        country: "İtalya",
        bookCount: 27,
        biography: "Sicilya doğumlu İtalyan yazar ve yönetmen Andrea Camilleri, özellikle Komiser Montalbano dizisiyle dünya çapında tanınmıştır. 50'li yaşlarında roman yazmaya başlayan Camilleri, 90'lı yaşlarına kadar üretken bir yazar olarak kalmıştır. Eserlerinde Sicilya'nın yerel kültürünü, dilini ve mutfağını ustalıkla yansıtır.",
        books: [3]
    },
    4: {
        name: "Yaşar Kemal",
        birth: "06.10.1923",
        death: "28.02.2015",
        country: "Türkiye",
        bookCount: 43,
        biography: "Asıl adı Kemal Sadık Gökçeli olan Yaşar Kemal, Türk edebiyatının dünyaca tanınan en önemli yazarlarından biridir. Adana'nın Osmaniye ilçesinde doğdu. İlk romanı 'İnce Memed' ile uluslararası üne kavuşan yazar, eserlerinde Çukurova insanının yaşamını, doğayla mücadelesini ve toprak ağalarına karşı verdiği savaşı destansı bir dille anlatmıştır. Nobel Edebiyat Ödülü'ne birçok kez aday gösterilmiştir.",
        books: [4]
    },
    5: {
        name: "Saygın Ersin",
        birth: "09.12.1975",
        death: "",
        country: "Türkiye",
        bookCount: 7,
        biography: "Türk yazar Saygın Ersin, 1975 yılında doğdu. Bilgisayar mühendisliği eğitimi aldı. Fantastik ve tarihi kurgu türünde romanlar yazmaktadır. 'Yedi Kartal Efsanesi' serisi, Anadolu tarihini fantastik öğelerle harmanlayan popüler bir seri olmuştur. 'Zülfikar'ın Hükmü', 'Piraye' ve 'Çöl Efendisi' adlı eserleri bulunmaktadır.",
        books: [5]
    },
    6: {
        name: "J.R.R. Tolkien",
        birth: "03.01.1892",
        death: "02.09.1973",
        country: "İngiltere",
        bookCount: 36,
        biography: "John Ronald Reuel Tolkien, İngiliz yazar, şair, filolog ve Oxford Üniversitesi profesörüdür. Modern fantastik edebiyatın babası olarak kabul edilir. 'Hobbit' ve 'Yüzüklerin Efendisi' gibi eserleriyle kendi yarattığı Orta Dünya evreninde geçen epik fantastik hikayeler yazmıştır. Dil bilimci olarak birçok yapay dil geliştirmiş, eserlerinde bu dilleri kullanmıştır.",
        books: [6]
    },
    7: {
        name: "Mahfi Eğilmez",
        birth: "25.11.1950",
        death: "",
        country: "Türkiye",
        bookCount: 12,
        biography: "Türk ekonomist, akademisyen ve yazar Mahfi Eğilmez, 1950 yılında İstanbul'da doğdu. Ankara Üniversitesi Siyasal Bilgiler Fakültesi'nden mezun oldu. Hazine Müsteşarlığı, Merkez Bankası gibi kurumlarda üst düzey görevlerde bulundu. Ekonomi alanında birçok kitap yazan Eğilmez, son yıllarda roman türünde de eserler vermeye başlamıştır.",
        books: [7]
    },
    8: {
        name: "Paulo Coelho",
        birth: "24.08.1947",
        death: "",
        country: "Brezilya",
        bookCount: 37,
        biography: "Paulo Coelho, çağdaş dünya edebiyatının en çok okunan yazarlarından biridir. Rio de Janeiro'da doğdu. Gençliğinde hippi hareketine katıldı, müzik yazarlığı yaptı. 1986'da İspanya'daki Santiago de Compostela'ya yaptığı hac yolculuğu, yazarlık hayatının dönüm noktası oldu. Bu deneyimden esinlenerek yazdığı 'Simyacı' romanı ile dünya çapında üne kavuştu.",
        books: [8]
    },
    9: {
        name: "George Orwell",
        birth: "25.06.1903",
        death: "21.01.1950",
        country: "İngiltere",
        bookCount: 9,
        biography: "George Orwell (asıl adı Eric Arthur Blair), 20. yüzyılın en etkili İngiliz yazarlarından biridir. Hindistan'da doğdu, İngiltere'de eğitim gördü. Sömürge polisi olarak Burma'da görev yaptı. İspanya İç Savaşı'na katıldı. Politik hiciv alanında uzmanlaşan Orwell, özellikle 'Hayvan Çiftliği' ve '1984' adlı distopik romanlarıyla tanınır.",
        books: [9]
    },
    10: {
        name: "Antoine de Saint-Exupéry",
        birth: "29.06.1900",
        death: "31.07.1944",
        country: "Fransa",
        bookCount: 8,
        biography: "Antoine de Saint-Exupéry, Fransız yazar, şair ve havacıdır. Lyon'da doğdu. Havacılık ve yazarlık kariyeri arasında gidip gelen Saint-Exupéry, uçuş deneyimlerini eserlerinde sıkça kullandı. En ünlü eseri olan 'Küçük Prens', hem çocuklara hem de yetişkinlere hitap eden felsefi bir masal olup, dünya çapında milyonlarca kopya satmıştır. 1944 yılında, II. Dünya Savaşı sırasında bir keşif uçuşu sırasında kaybolmuştur.",
        books: [10]
    }
};

// Category definitions
const categories = {
    "sesli-kitaplar": {
        title: "Sesli Kitaplar",
        description: "Profesyonel seslendirmenler tarafından okunan sesli kitaplar",
        filterFunction: (book) => book.hasAudio
    },
    "e-kitaplar": {
        title: "E-Kitaplar",
        description: "Dijital formatta okuyabileceğiniz kitaplar",
        filterFunction: (book) => book.hasEbook
    },
    "kitap-serileri": {
        title: "Kitap Serileri",
        description: "Çok bölümlü seriler halinde yazılmış kitaplar",
        filterFunction: (book) => book.title.includes("Kitap") || book.title.includes("Seri") || book.title.includes("Cilt")
    },
    "kategoriler": {
        title: "Kategoriler",
        subCategories: [
            {
                name: "Roman",
                filterFunction: (book) => book.categories && book.categories.includes("Roman")
            },
            {
                name: "Polisiye",
                filterFunction: (book) => book.categories && book.categories.includes("Polisiye")
            },
            {
                name: "Fantastik",
                filterFunction: (book) => book.categories && book.categories.includes("Fantastik")
            },
            {
                name: "Klasik",
                filterFunction: (book) => book.categories && book.categories.includes("Klasik")
            },
            {
                name: "Kişisel Gelişim",
                filterFunction: (book) => book.categories && book.categories.includes("Kişisel Gelişim")
            },
            {
                name: "Çocuk",
                filterFunction: (book) => book.categories && book.categories.includes("Çocuk")
            },
            {
                name: "Tarih",
                filterFunction: (book) => book.categories && book.categories.includes("Tarihi")
            }
        ]
    }
};

// Make data available globally
window.bookData = bookData;
window.authorData = authorData;
window.categories = categories;

document.addEventListener('DOMContentLoaded', function() {
    // AOS başlatma (eğer AOS kütüphanesi yüklüyse)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true
        });
    }

    // Navbar functionality
    initNavbar();
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Book Slider interactions
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get a random book to display when clicking on slider items
            const randomBookId = getRandomBookId();
            openBookModal(randomBookId);
        });
    });

    // Feature Card Expand Buttons
    const expandButtons = document.querySelectorAll('.feature-expand-button');
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featureCard = this.closest('.feature-card');
            const featureTitle = featureCard.querySelector('h2').textContent;
            
            // Show different content based on which feature card was clicked
            let expandContent = '';
            
            if (featureTitle.includes('Binlerce kitap')) {
                expandContent = 'Storytel kütüphanesinde 500.000\'den fazla sesli kitap ve e-kitap bulunmaktadır. Her zevke ve ilgi alanına uygun binlerce kitaba erişebilirsiniz.';
            } else if (featureTitle.includes('Kids Mode')) {
                expandContent = 'Kids Mode özelliği, 0-16 yaş arası çocuklar için özel olarak hazırlanmış içeriklere erişim sağlar. Ebeveyn kontrolü ile çocuğunuz için uygun kitapları seçebilirsiniz.';
            } else if (featureTitle.includes('Storytel Original')) {
                expandContent = 'Storytel Original, sadece Storytel kullanıcılarına özel olarak hazırlanan özgün içeriklerdir. Sevilen yazarların Storytel için özel olarak yazdığı hikayelerle tanışın.';
            }
            
            alert(expandContent);
        });
    });

    // Book Cards Click Handler
    const bookCards = document.querySelectorAll('.book-card');
    const bookModal = document.getElementById('bookModal');
    const closeBookModal = document.getElementById('closeBookModal');
    
    if (bookCards && bookModal && closeBookModal) {
        bookCards.forEach(card => {
            card.addEventListener('click', function() {
                // Kitap başlığını al
                const bookTitle = this.querySelector('h3').textContent;
                
                // Kitap ID'sini bul
                let bookId = null;
                
                // Önce data-book-id özelliğini kontrol et
                if (this.getAttribute('data-book-id')) {
                    bookId = this.getAttribute('data-book-id');
                } else {
                    // Başlığa göre kitap ID'sini bul
                    for (const id in bookData) {
                        if (bookData[id].title === bookTitle) {
                            bookId = id;
                            break;
                        }
                    }
                    
                    // Eğer başlığa göre bulunamadıysa, yazara göre dene
                    if (!bookId) {
                        const authorName = this.querySelector('p').textContent;
                        for (const id in bookData) {
                            if (bookData[id].author === authorName) {
                                bookId = id;
                                break;
                            }
                        }
                    }
                    
                    // Hala bulunamadıysa, rastgele bir kitap ID'si kullan
                    if (!bookId) {
                    bookId = getRandomBookId();
                    }
                    
                    // Bulunan ID'yi karta ekle (gelecekteki tıklamalar için)
                    this.setAttribute('data-book-id', bookId);
                }
                
                openBookModal(bookId);
            });
        });
        
        // Close Book Modal
        closeBookModal.addEventListener('click', function() {
            bookModal.style.display = 'none';
        });
    }

    // Author Card Click Functionality
    const authorCards = document.querySelectorAll('.author-card');
    const authorModal = document.getElementById('authorModal');
    const closeAuthorModal = document.getElementById('closeAuthorModal');
    
    if (authorCards && authorModal && closeAuthorModal) {
        authorCards.forEach((card, index) => {
            card.addEventListener('click', function() {
                // Author ID based on index + offset
                // In a real app, each author card would have its specific author ID
                const authorId = index % Object.keys(authorData).length + 1;
                openAuthorModal(authorId);
            });
        });
        
        // Close Author Modal
        closeAuthorModal.addEventListener('click', function() {
            authorModal.style.display = 'none';
        });
    }

    // Login/Signup Modal Functionality
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    if (loginModal && signupModal) {
        const closeLoginModal = document.getElementById('closeLoginModal');
        const closeSignupModal = document.getElementById('closeSignupModal');
        const loginLinks = document.querySelectorAll('.login-link');
        const ctaButtons = document.querySelectorAll('.cta-button:not(.login-submit)');
        const signupLink = document.getElementById('signupLink');
        const loginLink = document.getElementById('loginLink');
        
        // Open login modal
        loginLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.style.display = 'block';
            });
        });
        
        // Open signup modal from CTA buttons
        ctaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (!button.classList.contains('pricing-button') && 
                    !button.classList.contains('listen-button')) {
                    e.preventDefault();
                    signupModal.style.display = 'block';
                }
            });
        });
        
        // Switch to signup from login
        if (signupLink) {
            signupLink.addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.style.display = 'none';
                signupModal.style.display = 'block';
            });
        }
        
        // Switch to login from signup
        if (loginLink) {
            loginLink.addEventListener('click', function(e) {
                e.preventDefault();
                signupModal.style.display = 'none';
                loginModal.style.display = 'block';
            });
        }
        
        // Close login modal
        if (closeLoginModal) {
            closeLoginModal.addEventListener('click', function() {
                loginModal.style.display = 'none';
            });
        }
        
        // Close signup modal
        if (closeSignupModal) {
            closeSignupModal.addEventListener('click', function() {
                signupModal.style.display = 'none';
            });
        }
    }

    // Form Submit Events
    const forms = document.querySelectorAll('.login-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Bu bir demo uygulamasıdır. Gerçek bir kayıt/giriş işlemi gerçekleştirilmez.');
        });
    });

    // Close Modals when clicking outside
    window.addEventListener('click', function(event) {
        if (bookModal && event.target === bookModal) {
            bookModal.style.display = 'none';
        }
        if (authorModal && event.target === authorModal) {
            authorModal.style.display = 'none';
        }
        if (loginModal && event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (signupModal && event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });

    // Modern scroll davranışı
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy loading
    const lazyImages = document.querySelectorAll("img[data-src]");
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach((img) => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach((img) => {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
        });
    }
});

// Helper Functions

// Initialize Navbar functionality
function initNavbar() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const bookGrid = document.querySelector('.book-grid');
    let originalBookGrid = null;
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#kitap-serileri') {
            e.preventDefault();
            
                // İlk tıklamada orijinal içeriği kaydet
                if (!originalBookGrid) {
                    originalBookGrid = bookGrid.innerHTML;
                }

                // Kitap serileri içeriğini göster
                const seriesContent = getBookSeriesContent();
                bookGrid.innerHTML = seriesContent;
            } else if (originalBookGrid && !link.getAttribute('href').startsWith('#kitap-serileri')) {
                // Başka bir linke tıklandığında orijinal içeriği geri yükle
                bookGrid.innerHTML = originalBookGrid;
            }
        });
    });
}

function getBookSeriesContent() {
    // Kitap serileri için içerik
    return `
        <div class="book-card">
            <img src="img/yüzüklerinefendisi.jpeg" alt="Yüzüklerin Efendisi Serisi" class="book-cover">
            <div class="book-info">
                <h3>Yüzüklerin Efendisi Serisi</h3>
                <p>J.R.R. Tolkien</p>
                <div class="book-rating">
                    <span class="star">★</span>
                    <span>4.8</span>
                </div>
            </div>
        </div>
        <div class="book-card">
            <img src="img/harrypotter.jpg" alt="Harry Potter Serisi" class="book-cover">
            <div class="book-info">
                <h3>Harry Potter Serisi</h3>
                <p>J.K. Rowling</p>
                <div class="book-rating">
                    <span class="star">★</span>
                    <span>4.9</span>
                </div>
            </div>
        </div>
        <div class="book-card">
            <img src="img/zülfükarınhükmü.jpeg" alt="Yedi Kartal Efsanesi Serisi" class="book-cover">
            <div class="book-info">
                <h3>Yedi Kartal Efsanesi Serisi</h3>
                <p>Saygın Ersin</p>
                <div class="book-rating">
                    <span class="star">★</span>
                    <span>4.7</span>
                </div>
            </div>
        </div>
    `;
}

// Show category dropdown
function showCategoryDropdown(linkElement, category) {
    // Remove any existing dropdowns
    const existingDropdown = document.querySelector('.category-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
    }
    
    // Create dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'category-dropdown';
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = category.title;
    dropdown.appendChild(title);
    
    // Add subcategories
    const list = document.createElement('ul');
    category.subCategories.forEach(subCategory => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = subCategory.name;
        link.href = '#';
        link.addEventListener('click', function(e) {
            e.preventDefault();
            filterBooksBySubCategory(subCategory);
            dropdown.remove();
        });
        item.appendChild(link);
        list.appendChild(item);
    });
    dropdown.appendChild(list);
    
    // Position and show dropdown
    const rect = linkElement.getBoundingClientRect();
    dropdown.style.position = 'absolute';
    dropdown.style.top = `${rect.bottom}px`;
    dropdown.style.left = `${rect.left}px`;
    dropdown.style.zIndex = '1000';
    dropdown.style.backgroundColor = 'white';
    dropdown.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    dropdown.style.borderRadius = '4px';
    dropdown.style.padding = '15px';
    dropdown.style.minWidth = '200px';
    
    document.body.appendChild(dropdown);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!dropdown.contains(e.target) && e.target !== linkElement) {
            dropdown.remove();
            document.removeEventListener('click', closeDropdown);
        }
    });
}

// Filter books by category
    function filterBooksByCategory(category) {
        const bookGrids = document.querySelectorAll('.book-grid');
        if (!bookGrids.length) return;
        
        // Create a filtered book display section
        const filteredSection = document.createElement('section');
        filteredSection.className = 'filtered-books book-showcase';
        
        // Add header with category title
        const header = document.createElement('div');
        header.className = 'section-header';
        
        const title = document.createElement('h2');
        title.textContent = category.title;
        header.appendChild(title);
        
        const clearFilter = document.createElement('a');
        clearFilter.className = 'clear-filter';
        clearFilter.textContent = 'Filtreyi Temizle';
        clearFilter.href = '#';
        clearFilter.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.filtered-books').remove();
            document.querySelectorAll('.book-showcase').forEach(section => {
                section.style.display = 'block';
            });
        });
        header.appendChild(clearFilter);
        
        filteredSection.appendChild(header);
        
        // Create book grid
        const grid = document.createElement('div');
        grid.className = 'book-grid';
        
        // Filter and add books to grid
        let foundBooks = false;
        
        Object.keys(bookData).forEach(bookId => {
            const book = bookData[bookId];
            
            if (category.filterFunction(book)) {
                foundBooks = true;
                
                // Create book card
                const card = createBookCard(book, bookId);
                grid.appendChild(card);
            }
        });
        
        if (!foundBooks) {
            const noResults = document.createElement('p');
            noResults.textContent = 'Bu kategoride kitap bulunamadı.';
            noResults.style.textAlign = 'center';
            noResults.style.padding = '30px';
            grid.appendChild(noResults);
        }
        
        filteredSection.appendChild(grid);
        
        // Hide existing book showcase sections
        document.querySelectorAll('.book-showcase').forEach(section => {
            section.style.display = 'none';
        });
        
        // Add filtered section to page
        const featuresCards = document.querySelector('.features-cards');
        if (featuresCards) {
            featuresCards.insertAdjacentElement('afterend', filteredSection);
        } else {
            document.querySelector('body').appendChild(filteredSection);
        }
        
        // Scroll to filtered section
        filteredSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Filter books by subcategory
    function filterBooksBySubCategory(subCategory) {
        const category = {
            title: subCategory.name,
            filterFunction: subCategory.filterFunction
        };
        
        filterBooksByCategory(category);
    }
    
    // Create book card element
    function createBookCard(book, bookId) {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.setAttribute('data-book-id', bookId);
        
        // Book cover
        const cover = document.createElement('img');
        cover.className = 'book-cover';
        cover.src = '/api/placeholder/180/280';
        cover.alt = book.title;
        card.appendChild(cover);
        
        // Book info container
        const info = document.createElement('div');
        info.className = 'book-info';
        
        // Book title
        const title = document.createElement('h3');
        title.textContent = book.title;
        info.appendChild(title);
        
        // Author
        const author = document.createElement('p');
        author.textContent = book.author;
        info.appendChild(author);
        
        // Rating
        if (book.rating) {
            const rating = document.createElement('div');
            rating.className = 'book-rating';
            
            const star = document.createElement('span');
            star.className = 'star';
            star.textContent = '★';
            rating.appendChild(star);
            
            const ratingValue = document.createElement('span');
            ratingValue.textContent = book.rating;
            rating.appendChild(ratingValue);
            
            info.appendChild(rating);
        }
        
        // Listen button
        const listenBtn = document.createElement('button');
        listenBtn.className = 'book-listen-button';
        
        const headphones = document.createElement('span');
        headphones.className = 'headphones-icon';
        headphones.textContent = '🎧';
        listenBtn.appendChild(headphones);
        
        info.appendChild(listenBtn);
        card.appendChild(info);
        
        // Add click event
        card.addEventListener('click', function() {
            openBookModal(bookId);
        });
        
        return card;
    }
    
    // Open book modal with specified book ID
    function openBookModal(bookId) {
        const bookModal = document.getElementById('bookModal');
        if (!bookModal) return;
        
    // Kitap verilerini bul
    let book = null;
    
    // Sayısal ID veya string ID olabilir
    if (bookData[bookId]) {
        book = bookData[bookId];
    } else {
        // Kitap bulunamadıysa, kitap kartından başlık ve yazar bilgilerini al
        const clickedCard = document.querySelector(`.book-card[data-book-id="${bookId}"]`);
        if (clickedCard) {
            const title = clickedCard.querySelector('h3').textContent;
            const author = clickedCard.querySelector('p').textContent;
            
            console.log("Aranan kitap:", title, "Yazar:", author);
            
            // Başlık ve yazara göre kitabı bul
            for (const id in bookData) {
                if (bookData[id].title === title && bookData[id].author === author) {
                    book = bookData[id];
                    bookId = id;
                    break;
                }
            }
        }
    }
    
    // Kitap bulunamadıysa çık
    if (!book) {
        console.error("Kitap bulunamadı:", bookId);
        return;
    }
    
    // Kitap detaylarını güncelle
    updateBookModalContent(book, bookId);
    
    // Modalı göster
    bookModal.style.display = 'block';
}

// Kitap modalının içeriğini güncelle
function updateBookModalContent(book, bookId) {
        document.querySelector('.book-detail-title').textContent = book.title;
        document.querySelector('.book-detail-author').textContent = book.author;
        document.getElementById('bookPages').textContent = book.pages;
        document.getElementById('bookDuration').textContent = book.duration;
        document.getElementById('bookDate').textContent = book.date;
        document.getElementById('bookPublisher').textContent = book.publisher;
        document.getElementById('bookLanguage').textContent = book.language;
        document.querySelector('.book-detail-description').textContent = book.description;
        
    // Kitap kapağını güncelle
    const bookCoverImage = document.getElementById('bookCoverImage');
    if (bookCoverImage) {
        // Önce tıklanan kitap kartındaki görüntüyü bul
        const bookCards = document.querySelectorAll('.book-card');
        let coverSrc = null;
        
        for (const card of bookCards) {
            if (card.getAttribute('data-book-id') == bookId) {
                const cardImage = card.querySelector('img');
                if (cardImage) {
                    coverSrc = cardImage.src;
                    break;
                }
            }
        }
        
        // Eğer görüntü bulunamazsa, varsayılan bir görüntü kullan
        if (!coverSrc) {
            coverSrc = '/api/placeholder/250/375';
        }
        
        bookCoverImage.src = coverSrc;
        bookCoverImage.alt = book.title;
    }
    
    // Fiyatları güncelle
        const purchaseOptions = document.querySelectorAll('.purchase-option');
        
    // Sesli kitap seçeneği
        if (book.hasAudio) {
            purchaseOptions[0].style.display = 'block';
        purchaseOptions[0].querySelector('.purchase-price').textContent = `${book.audioPrice.toFixed(2)}₺`;
        
        // Dinle butonunu aktifleştir
        const listenButton = purchaseOptions[0].querySelector('.listen-button');
        listenButton.onclick = function() {
            playAudioSample(book.audioSample, book.title);
        };
        } else {
            purchaseOptions[0].style.display = 'none';
        }
        
    // E-kitap seçeneği
        if (book.hasEbook) {
            purchaseOptions[1].style.display = 'block';
        purchaseOptions[1].querySelector('.purchase-price').textContent = `${book.ebookPrice.toFixed(2)}₺`;
        } else {
            purchaseOptions[1].style.display = 'none';
    }
}

// Ses örneğini çalmak için yeni fonksiyon
function playAudioSample(audioSrc, bookTitle) {
    // Eğer ses dosyası yoksa, sesli anlatım oluştur
    if (!audioSrc) {
        // Text-to-speech API'si kullanarak sesli anlatım oluştur
        const message = `${bookTitle} kitabının sesli anlatımını dinliyorsunuz. Bu kitap hakkında daha fazla bilgi için lütfen abone olun.`;
        
        // Web Speech API kullanarak sesli anlatım oluştur
        const speech = new SpeechSynthesisUtterance();
        speech.lang = 'tr-TR';
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        
        window.speechSynthesis.speak(speech);
        
        // Kullanıcıya bilgi ver
        alert(`${bookTitle} kitabının sesli anlatımı başladı. Lütfen ses açık olduğundan emin olun.`);
    } else {
        // Gerçek ses dosyası varsa onu çal
        const audio = new Audio(audioSrc);
        audio.play()
            .then(() => {
                console.log(`${bookTitle} sesli anlatımı başladı.`);
            })
            .catch(error => {
                console.error("Ses çalma hatası:", error);
                
                // Hata durumunda text-to-speech kullan
                const message = `${bookTitle} kitabının sesli anlatımını dinliyorsunuz. Bu kitap hakkında daha fazla bilgi için lütfen abone olun.`;
                
                const speech = new SpeechSynthesisUtterance();
                speech.lang = 'tr-TR';
                speech.text = message;
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;
                
                window.speechSynthesis.speak(speech);
                
                // Kullanıcıya bilgi ver
                alert(`${bookTitle} kitabının sesli anlatımı başladı. Lütfen ses açık olduğundan emin olun.`);
            });
    }
}

// Get random book ID (for demo purposes)
function getRandomBookId() {
    const bookIds = Object.keys(bookData);
    return bookIds[Math.floor(Math.random() * bookIds.length)];
    }
    
    // Open author modal with specified author ID
    function openAuthorModal(authorId) {
        const authorModal = document.getElementById('authorModal');
        if (!authorModal) return;
        
        const author = authorData[authorId];
        if (!author) return;
        
        // Update modal with author details
        document.querySelector('.author-detail-name').textContent = author.name;
        document.getElementById('authorBirth').textContent = author.birth + (author.death ? ` - ${author.death}` : '');
        document.getElementById('authorCountry').textContent = author.country;
        document.getElementById('authorBookCount').textContent = author.bookCount;
        document.querySelector('.author-detail-biography').textContent = author.biography;
        
        // Clear previous books
        const authorBooksGrid = document.querySelector('.author-books-grid');
        authorBooksGrid.innerHTML = '';
        
        // Add author's books
        if (author.books && author.books.length > 0) {
            author.books.forEach(bookId => {
                const book = bookData[bookId];
                if (book) {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'author-book-card';
                    bookElement.innerHTML = `
                        <div class="author-book-cover">
                            <img src="/api/placeholder/120/160" alt="${book.title}">
                        </div>
                        <div class="author-book-title">${book.title}</div>
                    `;
                    
                    // Add click event to open book modal
                    bookElement.addEventListener('click', function() {
                        authorModal.style.display = 'none';
                        openBookModal(bookId);
                    });
                    
                    authorBooksGrid.appendChild(bookElement);
                }
            });
        } else {
            authorBooksGrid.innerHTML = '<p>Bu yazarın kitapları şu anda mevcut değil.</p>';
        }
        
        // Display modal
        authorModal.style.display = 'block';
    }
    
 // Add category dropdown CSS styles
function addCategoryDropdownStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .category-dropdown {
            background-color: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            border-radius: 4px;
            padding: 15px;
            min-width: 200px;
            z-index: 1000;
        }
        
        .category-dropdown h3 {
            margin-bottom: 15px;
            font-size: 1.2rem;
            color: var(--brand-color);
        }
        
        .category-dropdown ul {
            list-style: none;
        }
        
        .category-dropdown li {
            margin-bottom: 10px;
        }
        
        .category-dropdown a {
            color: var(--text-color);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .category-dropdown a:hover {
            color: var(--brand-color);
        }
        
        .clear-filter {
            color: var(--brand-color);
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);
}

// Add styles on page load
addCategoryDropdownStyles();

// Kullanıcı durumu
let userState = {
    isLoggedIn: false,
    username: '',
    email: '',
    subscription: null
};

// Modal işlemleri
document.addEventListener('DOMContentLoaded', function() {
    // Modal elementlerini seç
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const subscriptionModal = document.getElementById('subscriptionModal');
    const bookModal = document.getElementById('bookModal');
    
    // Kapatma butonlarını seç
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    const closeSubscriptionModal = document.getElementById('closeSubscriptionModal');
    const closeBookModal = document.getElementById('closeBookModal');
    
    // Giriş ve kayıt butonlarını seç
    const loginButton = document.querySelector('.login-link');
    const registerButton = document.querySelector('.cta-button');
    
    // Modal geçiş bağlantılarını seç
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    
    // Form elementlerini seç
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Abonelik butonlarını seç
    const subscriptionButtons = document.querySelectorAll('.subscription-button');
    
    // Giriş butonuna tıklandığında
    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'block';
        });
    }
    
    // Kayıt butonuna tıklandığında
    if (registerButton) {
        registerButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (!userState.isLoggedIn) {
                registerModal.style.display = 'block';
            } else {
                subscriptionModal.style.display = 'block';
            }
        });
    }
    
    // Kayıt formuna geçiş
    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'block';
        });
    }
    
    // Giriş formuna geçiş
    if (showLoginLink) {
        showLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
    }
    
    // Şifremi unuttum
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
        });
    }
    
    // Modalları kapatma
    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
    }
    
    if (closeRegisterModal) {
        closeRegisterModal.addEventListener('click', function() {
            registerModal.style.display = 'none';
        });
    }
    
    if (closeSubscriptionModal) {
        closeSubscriptionModal.addEventListener('click', function() {
            subscriptionModal.style.display = 'none';
        });
    }
    
    if (closeBookModal) {
        closeBookModal.addEventListener('click', function() {
            bookModal.style.display = 'none';
        });
    }
    
    // Giriş formu gönderildiğinde
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Basit doğrulama
            if (!email || !password) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            // Giriş işlemi (demo)
            userState.isLoggedIn = true;
            userState.email = email;
            userState.username = email.split('@')[0];
            
            // Kullanıcı arayüzünü güncelle
            updateUserInterface();
            
            // Modalı kapat
            loginModal.style.display = 'none';
            
            // Başarılı giriş mesajı
            alert(`Hoş geldiniz, ${userState.username}!`);
        });
    }
    
    // Kayıt formu gönderildiğinde
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Basit doğrulama
            if (!name || !email || !password || !passwordConfirm) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            if (password !== passwordConfirm) {
                alert('Şifreler eşleşmiyor.');
                return;
            }
            
            if (!agreeTerms) {
                alert('Devam etmek için üyelik koşullarını kabul etmelisiniz.');
                return;
            }
            
            // Kayıt işlemi (demo)
            userState.isLoggedIn = true;
            userState.email = email;
            userState.username = name;
            
            // Kullanıcı arayüzünü güncelle
            updateUserInterface();
            
            // Kayıt modalını kapat
            registerModal.style.display = 'none';
            
            // Abonelik modalını göster
            subscriptionModal.style.display = 'block';
            
            // Başarılı kayıt mesajı
            alert(`Hoş geldiniz, ${userState.username}! Şimdi bir abonelik planı seçebilirsiniz.`);
        });
    }
    
    // Abonelik butonlarına tıklandığında
    subscriptionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            
            // Abonelik işlemi (demo)
            userState.subscription = plan;
            
            // Kullanıcı arayüzünü güncelle
            updateUserInterface();
            
            // Modalı kapat
            subscriptionModal.style.display = 'none';
            
            // Başarılı abonelik mesajı
            let planText = '';
            switch(plan) {
                case 'unlimited-monthly':
                    planText = 'Aylık Sınırsız';
                    break;
                case 'unlimited-yearly':
                    planText = 'Yıllık Sınırsız';
                    break;
                case 'family-2':
                    planText = 'Aile (2 hesap)';
                    break;
                default:
                    planText = plan;
            }
            
            alert(`${planText} aboneliğiniz başarıyla başlatıldı. İyi okumalar!`);
            
            // Kullanıcı arayüzünü güncelle
            const ctaButton = document.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.textContent = 'Kütüphanem';
                ctaButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Kütüphane sayfası henüz hazır değil.');
                });
            }
        });
    });
    
    // Sosyal medya butonları
    const socialButtons = document.querySelectorAll('.social-button');
    if (socialButtons) {
        socialButtons.forEach(button => {
            button.addEventListener('click', function() {
                const provider = this.classList[1]; // google, facebook, apple
                alert(`${provider} ile giriş/kayıt işlemi başlatılıyor...`);
                
                // Demo amaçlı hızlı giriş
                setTimeout(() => {
                    userState.isLoggedIn = true;
                    userState.username = `${provider}User`;
                    userState.email = `${provider}@example.com`;
                    
                    // Kullanıcı arayüzünü güncelle
                    updateUserInterface();
                    
                    // Modalları kapat
                    loginModal.style.display = 'none';
                    registerModal.style.display = 'none';
                    
                    // Başarılı giriş mesajı
                    alert(`${provider} ile giriş başarılı! Hoş geldiniz, ${userState.username}!`);
                }, 1000);
            });
        });
    }
    
    // Kullanıcı arayüzünü güncelleme fonksiyonu
    function updateUserInterface() {
        const loginLink = document.querySelector('.login-link');
        const ctaButton = document.querySelector('.cta-button');
        
        if (userState.isLoggedIn) {
            // Giriş yapıldıysa
            if (loginLink) {
                loginLink.textContent = userState.username;
                loginLink.href = '#profile';
                loginLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Profil sayfası henüz hazır değil.');
                });
            }
            
            if (ctaButton) {
                if (userState.subscription) {
                    ctaButton.textContent = 'Kütüphanem';
                    ctaButton.addEventListener('click', function(e) {
                        e.preventDefault();
                        alert('Kütüphane sayfası henüz hazır değil.');
                    });
                } else {
                    ctaButton.textContent = 'Abone Ol';
                }
            }
        }
    }
    
    // Kitap dinleme butonlarını aktifleştir
    const listenButtons = document.querySelectorAll('.book-listen-button');
    if (listenButtons) {
        listenButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // Kitap kartı tıklamasını engelle
                
                // Kitap ID'sini al
                const bookCard = this.closest('.book-card');
                const bookId = bookCard.getAttribute('data-book-id');
                
                if (userState.isLoggedIn) {
                    if (userState.subscription) {
                        // Aboneliği varsa kitabı çal
                        const book = bookData[bookId] || findBookByTitleAndAuthor(bookCard);
                        if (book) {
                            playAudioSample(book.audioSample, book.title);
                        }
                    } else {
                        // Aboneliği yoksa abonelik modalını göster
                        subscriptionModal.style.display = 'block';
                    }
                } else {
                    // Giriş yapılmamışsa giriş modalını göster
                    loginModal.style.display = 'block';
                }
            });
        });
    }
    
    // Başlık ve yazara göre kitap bulma yardımcı fonksiyonu
    function findBookByTitleAndAuthor(bookCard) {
        if (!bookCard) return null;
        
        const title = bookCard.querySelector('h3').textContent;
        const author = bookCard.querySelector('p').textContent;
        
        for (const id in bookData) {
            if (bookData[id].title === title && bookData[id].author === author) {
                return bookData[id];
            }
        }
        
        return null;
    }
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-nav') && !e.target.closest('.menu-toggle') && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        body.style.overflow = '';
        menuToggle.classList.remove('active');
    }
});

// Close mobile menu when window is resized to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        body.style.overflow = '';
        menuToggle.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                body.style.overflow = '';
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Add scroll event listener for header
const header = document.querySelector('.main-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }
});

// Abonelik başlatma butonlarına tıklama olayı ekle
document.querySelectorAll('.pricing-button, .cta-button[data-action="subscribe"]').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!userState.isLoggedIn) {
            // Kullanıcı giriş yapmamışsa, kayıt modalını göster
            const registerModal = document.getElementById('registerModal');
            if (registerModal) registerModal.style.display = 'block';
        } else if (!userState.subscription) {
            // Kullanıcı giriş yapmış ama aboneliği yoksa, abonelik modalını göster
            const subscriptionModal = document.getElementById('subscriptionModal');
            if (subscriptionModal) subscriptionModal.style.display = 'block';
        } else {
            // Kullanıcı zaten abone ise bilgilendirme mesajı göster
            alert('Zaten aktif bir aboneliğiniz bulunmaktadır.');
        }
    });
});

// CTA butonlarını kontrol et ve abonelik butonlarını işaretle
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cta-button').forEach(button => {
        if (button.textContent.trim().toLowerCase() === 'hemen abone ol') {
            button.setAttribute('data-action', 'subscribe');
        }
    });
});

// Arama işlevselliği
const searchIcon = document.querySelector('.search-icon');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.querySelector('.close-search');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Arama ikonuna tıklandığında overlay'ı göster
if (searchIcon && searchOverlay) {
    searchIcon.addEventListener('click', () => {
        searchOverlay.style.display = 'flex';
        searchInput.focus();
        body.style.overflow = 'hidden'; // Sayfanın kaydırılmasını engelle
    });
}

// Kapat butonuna tıklandığında overlay'ı gizle
if (closeSearch && searchOverlay) {
    closeSearch.addEventListener('click', () => {
        searchOverlay.style.display = 'none';
        body.style.overflow = ''; // Sayfanın kaydırılmasını tekrar etkinleştir
        searchInput.value = ''; // Arama alanını temizle
        searchResults.innerHTML = ''; // Sonuçları temizle
    });
}

// Arama butonuna tıklandığında arama yap
if (searchButton && searchInput && searchResults) {
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    // Enter tuşuna basıldığında da arama yap
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
}

// Arama fonksiyonu
function performSearch(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '<p class="no-results">Lütfen bir arama terimi girin.</p>';
        return;
    }
    
    query = query.trim().toLowerCase();
    const results = [];
    
    // Kitap verilerinde arama yap
    for (const id in bookData) {
        const book = bookData[id];
        
        // Başlık, yazar veya kategorilerde arama yap
        if (book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query) ||
            (book.categories && book.categories.some(cat => cat.toLowerCase().includes(query)))) {
            results.push({id, book});
        }
    }
    
    // Sonuçları göster
    if (results.length > 0) {
        searchResults.innerHTML = '';
        
        results.forEach(({id, book}) => {
            const resultCard = document.createElement('div');
            resultCard.className = 'search-result-card';
            resultCard.setAttribute('data-book-id', id);
            
            resultCard.innerHTML = `
                <div class="result-cover">
                    <img src="img/${id}.jpeg" alt="${book.title}" onerror="this.src='img/default-cover.jpeg'">
                </div>
                <div class="result-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <div class="result-meta">
                        <span>${book.duration}</span>
                        ${book.rating ? `<span class="result-rating">★ ${book.rating}</span>` : ''}
                    </div>
                </div>
            `;
            
            // Sonuca tıklandığında kitap detaylarını göster
            resultCard.addEventListener('click', () => {
                openBookModal(id);
            });
            
            searchResults.appendChild(resultCard);
        });
    } else {
        searchResults.innerHTML = '<p class="no-results">Aramanızla eşleşen kitap bulunamadı.</p>';
    }
}

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    menuToggle.classList.toggle('active');
});

// Kitap slider'ı için etkileşimli özellikler
document.addEventListener('DOMContentLoaded', function() {
    // Kitap slider'ındaki kitaplara tıklama olayı ekle
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            if (title) {
                // Kitap başlığına göre kitap ID'sini bul
                let bookId = null;
                for (const id in bookData) {
                    if (bookData[id].title === title || bookData[id].title.includes(title) || title.includes(bookData[id].title)) {
                        bookId = id;
                        break;
                    }
                }
                
                if (bookId) {
                    openBookModal(bookId);
                } else {
                    console.log("Kitap bulunamadı:", title);
                }
            }
        });
    });
    
    // Kitap slider'ı için hover efektleri
    const bookRows = document.querySelectorAll('.book-row');
    bookRows.forEach(row => {
        // Mouse üzerine geldiğinde animasyonu durdur
        row.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        // Mouse ayrıldığında animasyonu devam ettir
        row.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
    
    // Spot Işıkları Altında bölümü için özel efektler
    const spotlightSection = document.querySelector('.book-showcase:has(.section-header h2:contains("Spot Işıkları Altında"))');
    if (spotlightSection) {
        // Bölüme gelince animasyon ekle
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(spotlightSection);
        
        // Kitap kartlarına hover efekti ekle
        const spotlightCards = spotlightSection.querySelectorAll('.book-card');
        spotlightCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                spotlightCards.forEach(c => {
                    if (c !== this) {
                        c.style.opacity = '0.7';
                        c.style.transform = 'scale(0.95)';
                    }
                });
            });
            
            card.addEventListener('mouseleave', function() {
                spotlightCards.forEach(c => {
                    c.style.opacity = '';
                    c.style.transform = '';
                });
            });
        });
    }
    
    // Promo bölümündeki kitap konumunu ayarla
    const promoImage = document.querySelector('.promo-image');
    if (promoImage) {
        // Sarı çizgili alanın konumuna göre ayarla
        promoImage.style.right = '25%';
        promoImage.style.top = '-20px';
    }
});

// Promo kitap konumunu ayarla
document.addEventListener('DOMContentLoaded', function() {
    const promoImage = document.querySelector('.promo-image');
    if (promoImage) {
        // Ekran genişliğine göre konumu ayarla
        function adjustPosition() {
            const windowWidth = window.innerWidth;
            
            if (windowWidth > 1200) {
                promoImage.style.right = '22%';
                promoImage.style.top = '-30px';
                promoImage.style.width = '18%';
            } else if (windowWidth > 992) {
                promoImage.style.right = '20%';
                promoImage.style.top = '-25px';
                promoImage.style.width = '15%';
            } else if (windowWidth > 768) {
                promoImage.style.right = '15%';
                promoImage.style.top = '-20px';
                promoImage.style.width = '15%';
            } else {
                promoImage.style.right = '10%';
                promoImage.style.top = '-15px';
                promoImage.style.width = '20%';
            }
        }
        
        // Sayfa yüklendiğinde ve yeniden boyutlandırıldığında konumu ayarla
        adjustPosition();
        window.addEventListener('resize', adjustPosition);
        
        // Kitaba tıklandığında animasyon ekle
        promoImage.addEventListener('click', function() {
            this.classList.add('animate-pulse');
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 1000);
        });
    }
});

// Abonelik başlatma butonlarına tıklama olayı ekle