/**
 * Home page product gallery (below "Ürünü görün"): module tabs, one stage
 * image per selection, and a lightbox that walks all images in order.
 * Captions and alt text describe only what is visible on each screenshot
 * (honesty constraint). width/height are the source files' true pixel sizes.
 * To swap a screenshot, replace the file under public/gallery/ with the same
 * name and update width/height here if they changed.
 *
 * Some screens have a "koyu" (dark theme) counterpart: same title/caption,
 * same content, different src/theme/dimensions. The homepage section only
 * ever shows "acik" (light) images; the full /basari-hikayesi gallery pairs
 * each acik image with its koyu twin when one exists.
 */

export type GalleryModuleId =
  | "dashboard"
  | "portfoy"
  | "musteriler"
  | "eslestirme"
  | "harita"
  | "muhasebe"
  | "raporlar";

export type GalleryTheme = "acik" | "koyu";

export type GalleryImage = {
  module: GalleryModuleId;
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  alt: string;
  theme: GalleryTheme;
};

const modules: { id: GalleryModuleId; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "portfoy", label: "Portföy" },
  { id: "musteriler", label: "Müşteriler" },
  { id: "eslestirme", label: "Eşleştirme" },
  { id: "harita", label: "Harita / Coğrafi Analiz" },
  { id: "muhasebe", label: "Muhasebe" },
  { id: "raporlar", label: "Raporlar" },
];

const images: GalleryImage[] = [
  {
    module: "dashboard",
    src: "/gallery/crm-dashboard-1.png",
    width: 1909,
    height: 991,
    title: "Broker dashboard'u",
    caption:
      "Portföy, müşteri, bekleyen onay ve aktif talep sayıları, ofis kasası ve TÜFE'ye göre kira artış oranı ilk ekranda, altında son aktiviteler.",
    alt: "Emlak CRM Pro dashboard ekranı: portföy, toplam müşteri, bekleyen onaylar, aktif talepler, ofis kasası ve kira artış oranı kartları, son aktiviteler tablosu ve portföy dağılımı grafiği",
    theme: "acik",
  },
  {
    module: "dashboard",
    src: "/gallery/crm-dashboard-1-koyu.png",
    width: 1904,
    height: 991,
    title: "Broker dashboard'u",
    caption:
      "Portföy, müşteri, bekleyen onay ve aktif talep sayıları, ofis kasası ve TÜFE'ye göre kira artış oranı ilk ekranda, altında son aktiviteler.",
    alt: "Karanlık temada Emlak CRM Pro dashboard ekranı: portföy, toplam müşteri, bekleyen onaylar, aktif talepler, ofis kasası ve kira artış oranı kartları, son aktiviteler tablosu ve portföy dağılımı grafiği",
    theme: "koyu",
  },
  {
    module: "dashboard",
    src: "/gallery/crm-dashboard-2.png",
    width: 1909,
    height: 990,
    title: "Danışman sıralaması ve talep ısısı",
    caption:
      "Danışmanlar aylık komisyon ve işlem sayısına göre sıralanır, aktif talepler sıcak, ılık ve soğuk olarak ayrılır.",
    alt: "Dashboard'un alt bölümü: danışman sıralaması listesi, portföy dağılımı halka grafiği ve sıcak, ılık, soğuk talep ısı seviyeleri kartları",
    theme: "acik",
  },
  {
    module: "dashboard",
    src: "/gallery/crm-dashboard-2-koyu.png",
    width: 1907,
    height: 991,
    title: "Danışman sıralaması ve talep ısısı",
    caption:
      "Danışmanlar aylık komisyon ve işlem sayısına göre sıralanır, aktif talepler sıcak, ılık ve soğuk olarak ayrılır.",
    alt: "Karanlık temada dashboard'un alt bölümü: danışman sıralaması listesi, portföy dağılımı halka grafiği ve sıcak, ılık, soğuk talep ısı seviyeleri kartları",
    theme: "koyu",
  },
  {
    module: "portfoy",
    src: "/gallery/crm-portfoy-1.png",
    width: 1908,
    height: 987,
    title: "Portföy listesi ve filtreler",
    caption:
      "İlan no, yetki durumu, işlem türü, ilçe, fiyat ve m² ile filtreleyin; aktif, pasif, satıldı ve kiralandı sayaçları listenin üstünde.",
    alt: "Açık temada portföy ekranı: solda filtre paneli, üstte portföy durum sayaçları, sağda fotoğraflı portföy kartları ve Müşteriye Sun butonları",
    theme: "acik",
  },
  {
    module: "portfoy",
    src: "/gallery/crm-portfoy-1-koyu.png",
    width: 1903,
    height: 990,
    title: "Portföy listesi ve filtreler",
    caption:
      "İlan no, yetki durumu, işlem türü, ilçe, fiyat ve m² ile filtreleyin; aktif, pasif, satıldı ve kiralandı sayaçları listenin üstünde.",
    alt: "Karanlık temada portföy ekranı: solda filtre paneli, üstte portföy durum sayaçları, sağda fotoğraflı portföy kartları ve Müşteriye Sun butonları",
    theme: "koyu",
  },
  {
    module: "portfoy",
    src: "/gallery/crm-portfoy-2.png",
    width: 1908,
    height: 991,
    title: "Kapanan portföyler",
    caption:
      "Kiralanan ve satılan portföyler ayrı bir listede, damgalı kartlarla aktif portföylerden ayrılır.",
    alt: "Portföy ekranında aktif portföy kartlarının altında Kiralandı damgalı kapanan portföyler listesi",
    theme: "acik",
  },
  {
    module: "portfoy",
    src: "/gallery/crm-portfoy-2-koyu.png",
    width: 1903,
    height: 990,
    title: "Kapanan portföyler",
    caption:
      "Kiralanan ve satılan portföyler ayrı bir listede, damgalı kartlarla aktif portföylerden ayrılır.",
    alt: "Karanlık temada portföy ekranında aktif portföy kartlarının altında Kiralandı damgalı kapanan portföyler listesi",
    theme: "koyu",
  },
  {
    module: "musteriler",
    src: "/gallery/crm-musteriler-1.png",
    width: 1912,
    height: 983,
    title: "Müşteri kartları",
    caption:
      "Rol, ısı seviyesi, uyruk ve danışmana göre filtreleyin; her karttan talep, aktivite, portföy ve eşleşmelere geçin, listeyi Excel ile içe ya da dışa aktarın.",
    alt: "Müşteriler ekranı: arama ve filtre alanları, Excel indir ve içe aktar butonları, rol, ısı seviyesi ve danışman bilgisi içeren müşteri kartları",
    theme: "acik",
  },
  {
    module: "musteriler",
    src: "/gallery/crm-musteriler-1-koyu.png",
    width: 1907,
    height: 991,
    title: "Müşteri kartları",
    caption:
      "Rol, ısı seviyesi, uyruk ve danışmana göre filtreleyin; her karttan talep, aktivite, portföy ve eşleşmelere geçin, listeyi Excel ile içe ya da dışa aktarın.",
    alt: "Karanlık temada müşteriler ekranı: arama ve filtre alanları, Excel indir ve içe aktar butonları, rol, ısı seviyesi ve danışman bilgisi içeren müşteri kartları",
    theme: "koyu",
  },
  {
    module: "musteriler",
    src: "/gallery/crm-musteriler-2.png",
    width: 1906,
    height: 991,
    title: "Müşteri detayı",
    caption:
      "İletişim bilgileri, kimlik ve sözleşme evrakları, notlar ve atanan danışman tek sayfada; aktivite, portföy ve talep buradan eklenir.",
    alt: "Müşteri detay sayfası: iletişim bilgileri, fotoğraf ve evrak alanları, danışman ve sistem bilgisi, notlar ile Aktivite Ekle, Portföy Ekle ve Talep Oluştur butonları",
    theme: "acik",
  },
  {
    module: "musteriler",
    src: "/gallery/crm-musteriler-2-koyu.png",
    width: 1904,
    height: 990,
    title: "Müşteri detayı",
    caption:
      "İletişim bilgileri, kimlik ve sözleşme evrakları, notlar ve atanan danışman tek sayfada; aktivite, portföy ve talep buradan eklenir.",
    alt: "Karanlık temada müşteri detay sayfası: iletişim bilgileri, fotoğraf ve evrak alanları, danışman ve sistem bilgisi, notlar ile Aktivite Ekle, Portföy Ekle ve Talep Oluştur butonları",
    theme: "koyu",
  },
  {
    module: "eslestirme",
    src: "/gallery/crm-talep-eslestirme.png",
    width: 1910,
    height: 990,
    title: "Talep-portföy eşleştirme",
    caption:
      "Her portföy için uyumlu müşteri talepleri uyum puanıyla listelenir; müşteri, danışman, talep ve durum sütunlarından filtreleyip durumu tek tıkla güncelleyin.",
    alt: "Eşleştirme ekranı: portföy, müşteri, talep ve danışman sütunlu bir tabloda uyum puanı (ör. 92 Mükemmel, 69 İyi, 62 Orta) ve durum güncelleme menüleriyle listelenen talep-portföy eşleşmeleri",
    theme: "acik",
  },
  {
    module: "eslestirme",
    src: "/gallery/crm-talep-eslestirme-koyu.png",
    width: 1903,
    height: 990,
    title: "Talep-portföy eşleştirme",
    caption:
      "Her portföy için uyumlu müşteri talepleri uyum puanıyla listelenir; müşteri, danışman, talep ve durum sütunlarından filtreleyip durumu tek tıkla güncelleyin.",
    alt: "Karanlık temada eşleştirme ekranı: portföy, müşteri, talep ve danışman sütunlu bir tabloda uyum puanı ve durum güncelleme menüleriyle listelenen talep-portföy eşleşmeleri",
    theme: "koyu",
  },
  {
    module: "harita",
    src: "/gallery/crm-harita.png",
    width: 1901,
    height: 990,
    title: "Coğrafi analiz",
    caption:
      "Portföyler haritada kümelenir; yarıçap ya da çokgenle alan seçip o bölgedeki portföy sayısını, ortalama, en düşük ve en yüksek fiyatı görün.",
    alt: "Coğrafi Analiz ekranı: Antalya haritası üzerinde portföy işaretleri, harita ve uydu görünümü seçimi, sağda toplam portföy, ortalama, minimum ve maksimum fiyat içeren alan analizi paneli",
    theme: "acik",
  },
  {
    module: "harita",
    src: "/gallery/crm-harita-koyu.png",
    width: 1906,
    height: 992,
    title: "Coğrafi analiz",
    caption:
      "Portföyler haritada kümelenir; yarıçap ya da çokgenle alan seçip o bölgedeki portföy sayısını, ortalama, en düşük ve en yüksek fiyatı görün.",
    alt: "Karanlık temada Coğrafi Analiz ekranı: Antalya haritası üzerinde portföy işaretleri, harita ve uydu görünümü seçimi, sağda toplam portföy, ortalama, minimum ve maksimum fiyat içeren alan analizi paneli",
    theme: "koyu",
  },
  {
    module: "muhasebe",
    src: "/gallery/crm-muhasebe-1.png",
    width: 1906,
    height: 991,
    title: "Muhasebe özeti",
    caption:
      "Satış ve kira cirosu, ofis payı, KDV, danışmanlara ödenen tutar ve ofis kasası aylık özetlenir.",
    alt: "Muhasebe ekranı: satış cirosu, kira cirosu, toplam ciro, ofis ciro payı, KDV, danışmanlara ödenen ve ofis kasası kartları",
    theme: "acik",
  },
  {
    module: "muhasebe",
    src: "/gallery/crm-muhasebe-1-koyu.png",
    width: 1907,
    height: 991,
    title: "Muhasebe özeti",
    caption:
      "Satış ve kira cirosu, ofis payı, KDV, danışmanlara ödenen tutar ve ofis kasası aylık özetlenir.",
    alt: "Karanlık temada muhasebe ekranı: satış cirosu, kira cirosu, toplam ciro, ofis ciro payı, KDV, danışmanlara ödenen ve ofis kasası kartları",
    theme: "koyu",
  },
  {
    module: "muhasebe",
    src: "/gallery/crm-muhasebe-2.png",
    width: 1918,
    height: 991,
    title: "Son işlemler",
    caption: "Son işlemlerde satıcı ve alıcı danışman payları ile ciro ayrı ayrı görünür.",
    alt: "Muhasebe ekranında ciro ve danışman paylarını gösteren son işlemler tablosu",
    theme: "acik",
  },
  {
    module: "muhasebe",
    src: "/gallery/crm-muhasebe-2-koyu.png",
    width: 1919,
    height: 986,
    title: "Son işlemler",
    caption: "Son işlemlerde satıcı ve alıcı danışman payları ile ciro ayrı ayrı görünür.",
    alt: "Karanlık temada muhasebe ekranında ciro ve danışman paylarını gösteren son işlemler tablosu",
    theme: "koyu",
  },
  {
    module: "raporlar",
    src: "/gallery/crm-raporlar-1.png",
    width: 1909,
    height: 990,
    title: "Eşleştirme raporu",
    caption:
      "Müşteri-portföy eşleşmelerinin yeni, sunuldu, kabul ve ret dağılımı ile kabul oranı tek raporda; rapor PDF olarak indirilir.",
    alt: "Raporlar ekranının Eşleştirme sekmesi: eşleşme durumu pasta grafiği ve yeni, sunuldu, kabul, ret sayılarıyla kabul oranını gösteren özet paneli",
    theme: "acik",
  },
  {
    module: "raporlar",
    src: "/gallery/crm-raporlar-1-koyu.png",
    width: 1902,
    height: 990,
    title: "Eşleştirme raporu",
    caption:
      "Müşteri-portföy eşleşmelerinin yeni, sunuldu, kabul ve ret dağılımı ile kabul oranı tek raporda; rapor PDF olarak indirilir.",
    alt: "Karanlık temada raporlar ekranının Eşleştirme sekmesi: eşleşme durumu pasta grafiği ve yeni, sunuldu, kabul, ret sayılarıyla kabul oranını gösteren özet paneli",
    theme: "koyu",
  },
  {
    module: "raporlar",
    src: "/gallery/crm-raporlar-2.png",
    width: 1920,
    height: 990,
    title: "Danışman raporu",
    caption:
      "Danışman başına telefon, yüz yüze, sunum ve yetki temasları ile komisyon geliri ve aktivite sayısı grafikleri.",
    alt: "Raporlar ekranının Danışmanlar sekmesi: danışman temas tablosu, danışman başına komisyon geliri ve aktivite sayısı çubuk grafikleri",
    theme: "acik",
  },
  {
    module: "raporlar",
    src: "/gallery/crm-raporlar-2-koyu.png",
    width: 1920,
    height: 991,
    title: "Danışman raporu",
    caption:
      "Danışman başına telefon, yüz yüze, sunum ve yetki temasları ile komisyon geliri ve aktivite sayısı grafikleri.",
    alt: "Karanlık temada raporlar ekranının Danışmanlar sekmesi: danışman temas tablosu, danışman başına komisyon geliri ve aktivite sayısı çubuk grafikleri",
    theme: "koyu",
  },
];

export const productGallery = {
  eyebrow: "Modüller",
  title: "Her modülü gerçek ekranıyla inceleyin.",
  intro:
    "Dashboard'dan muhasebeye, ofisinizin her gün kullanacağı ekranlar. Büyütmek için görsele dokunun.",
  tabsLabel: "Ürün modülleri",
  modules,
  images,
  labels: {
    openImage: "Görseli büyüt",
    thumbnails: "Bu modülün ekranları",
    theme: {
      acik: "Açık",
      koyu: "Koyu",
      switchTo: "temaya geç",
    },
    lightbox: {
      dialog: "Ürün ekranları",
      close: "Kapat",
      prev: "Önceki görsel",
      next: "Sonraki görsel",
    },
  },
};
