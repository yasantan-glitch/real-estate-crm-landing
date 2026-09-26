/**
 * Home page product gallery (below "Ürünü görün"): module tabs, one stage
 * image per selection, and a lightbox that walks all images in order.
 * Captions and alt text describe only what is visible on each screenshot
 * (honesty constraint). width/height are the source files' true pixel sizes.
 * To swap a screenshot, replace the file under public/gallery/ with the same
 * name and update width/height here if they changed.
 */

export type GalleryModuleId =
  | "dashboard"
  | "portfoy"
  | "musteriler"
  | "harita"
  | "muhasebe"
  | "raporlar";

export type GalleryImage = {
  module: GalleryModuleId;
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  alt: string;
};

const modules: { id: GalleryModuleId; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "portfoy", label: "Portföy" },
  { id: "musteriler", label: "Müşteriler" },
  { id: "harita", label: "Harita / Coğrafi Analiz" },
  { id: "muhasebe", label: "Muhasebe" },
  { id: "raporlar", label: "Raporlar" },
];

const images: GalleryImage[] = [
  {
    module: "dashboard",
    src: "/gallery/crm-dashboard-1.png",
    width: 1904,
    height: 991,
    title: "Broker dashboard'u",
    caption:
      "Portföy, müşteri, bekleyen onay ve aktif talep sayıları, ofis kasası ve TÜFE'ye göre kira artış oranı ilk ekranda, altında son aktiviteler.",
    alt: "Emlak CRM Pro dashboard ekranı: portföy, toplam müşteri, bekleyen onaylar, aktif talepler, ofis kasası ve kira artış oranı kartları, son aktiviteler tablosu ve portföy dağılımı grafiği",
  },
  {
    module: "dashboard",
    src: "/gallery/crm-dashboard-2.png",
    width: 1907,
    height: 991,
    title: "Danışman sıralaması ve talep ısısı",
    caption:
      "Danışmanlar aylık komisyon ve işlem sayısına göre sıralanır, aktif talepler sıcak, ılık ve soğuk olarak ayrılır.",
    alt: "Dashboard'un alt bölümü: danışman sıralaması listesi, portföy dağılımı halka grafiği ve sıcak, ılık, soğuk talep ısı seviyeleri kartları",
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
  },
  {
    module: "portfoy",
    src: "/gallery/crm-portfoy-2.png",
    width: 1909,
    height: 989,
    title: "Kapanan portföyler",
    caption:
      "Kiralanan ve satılan portföyler ayrı bir listede, damgalı kartlarla aktif portföylerden ayrılır.",
    alt: "Portföy ekranında aktif portföy kartlarının altında Kiralandı damgalı kapanan portföyler listesi",
  },
  {
    module: "portfoy",
    src: "/gallery/crm-portfoy-2-koyu.png",
    width: 1903,
    height: 990,
    title: "Karanlık tema",
    caption: "Aynı portföy ekranı karanlık temada; tema tercihi üst çubuktan tek tıkla değişir.",
    alt: "Karanlık temada portföy ekranı: filtre paneli ve fotoğraflı portföy kartları",
  },
  {
    module: "musteriler",
    src: "/gallery/crm-musteriler-1.png",
    width: 1905,
    height: 991,
    title: "Müşteri kartları",
    caption:
      "Rol, ısı seviyesi, uyruk ve danışmana göre filtreleyin; her karttan talep, aktivite, portföy ve eşleşmelere geçin, listeyi Excel ile içe ya da dışa aktarın.",
    alt: "Müşteriler ekranı: arama ve filtre alanları, Excel indir ve içe aktar butonları, rol, ısı seviyesi ve danışman bilgisi içeren müşteri kartları",
  },
  {
    module: "musteriler",
    src: "/gallery/crm-musteriler-2.png",
    width: 1902,
    height: 991,
    title: "Müşteri detayı",
    caption:
      "İletişim bilgileri, kimlik ve sözleşme evrakları, notlar ve atanan danışman tek sayfada; aktivite, portföy ve talep buradan eklenir.",
    alt: "Müşteri detay sayfası: iletişim bilgileri, fotoğraf ve evrak alanları, danışman ve sistem bilgisi, notlar ile Aktivite Ekle, Portföy Ekle ve Talep Oluştur butonları",
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
  },
  {
    module: "muhasebe",
    src: "/gallery/crm-muhasebe.png",
    width: 1907,
    height: 991,
    title: "Muhasebe özeti",
    caption:
      "Satış ve kira cirosu, ofis payı, KDV, danışmanlara ödenen tutar ve ofis kasası aylık özetlenir; son işlemlerde satıcı ve alıcı danışman payları ayrı görünür.",
    alt: "Muhasebe ekranı: satış cirosu, kira cirosu, toplam ciro, ofis ciro payı, KDV, danışmanlara ödenen ve ofis kasası kartları, altında ciro ve danışman paylarını gösteren son işlemler tablosu",
  },
  {
    module: "raporlar",
    src: "/gallery/crm-raporlar-1.png",
    width: 1920,
    height: 991,
    title: "Eşleştirme raporu",
    caption:
      "Müşteri-portföy eşleşmelerinin yeni, sunuldu, kabul ve ret dağılımı ile kabul oranı tek raporda; rapor PDF olarak indirilir.",
    alt: "Raporlar ekranının Eşleştirme sekmesi: eşleşme durumu pasta grafiği ve yeni, sunuldu, kabul, ret sayılarıyla kabul oranını gösteren özet paneli",
  },
  {
    module: "raporlar",
    src: "/gallery/crm-raporlar-2.png",
    width: 1902,
    height: 990,
    title: "Danışman raporu",
    caption:
      "Danışman başına telefon, yüz yüze, sunum ve yetki temasları ile komisyon geliri ve aktivite sayısı grafikleri.",
    alt: "Raporlar ekranının Danışmanlar sekmesi: danışman temas tablosu, danışman başına komisyon geliri ve aktivite sayısı çubuk grafikleri",
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
    lightbox: {
      dialog: "Ürün ekranları",
      close: "Kapat",
      prev: "Önceki görsel",
      next: "Sonraki görsel",
    },
  },
};
