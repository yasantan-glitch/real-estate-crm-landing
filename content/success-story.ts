/**
 * /basari-hikayesi sayfasının içeriği. Tek statik vaka çalışması —
 * Poyraz Gayrimenkul, Emlak CRM Pro'nun canlı production müşterisi.
 * Modül görselleri public/screenshots altındaki kaynak ekran
 * görüntülerini (hero-device-*.png, hero-bg-*.png) kullanır.
 */

export const successStoryBackLink = {
  label: "← Tüm Özellikler",
  href: "/ozellikler",
};

export interface SuccessStoryModule {
  index: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export interface SuccessStoryContent {
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  introColumns: [string, string];
  heroImage: { src: string; alt: string; caption: string };
  problem: { label: string; title: string; text: string };
  approach: { label: string; title: string; text: string };
  modules: SuccessStoryModule[];
  results: { label: string }[];
  client: { name: string; logo: string; note: string };
  cta: { title: string; text: string; label: string; href: string };
}

export const successStory: SuccessStoryContent = {
  seo: {
    title: "Başarı Hikayesi: Poyraz Gayrimenkul — Emlak CRM Pro",
    description:
      "Poyraz Gayrimenkul'ün portföy, müşteri, danışman performansı ve muhasebe süreçlerini Emlak CRM Pro ile nasıl tek panelde topladığını inceleyin.",
  },
  eyebrow: "Başarı Hikayesi",
  title: "SADECE ANLATMIYORUZ, YAPIYORUZ.",
  introColumns: [
    "Bir emlak ofisinin portföyünü, müşterilerini, danışman performansını ve muhasebesini tek sistemde topladık. Bugün gerçek bir ofis bu sistemle çalışıyor.",
    "Harita üzerinde portföy yönetimi, otomatik müşteri-ilan eşleştirme, danışman hakediş takibi, çok para birimli muhasebe — hepsi sıfırdan tasarlandı ve kodlandı.",
  ],
  heroImage: {
    src: "/screenshots/hero-device-laptop.png",
    alt: "CRM ana panel ekranı: Portföy, Toplam Müşteri, Bekleyen Onaylar, Aktif Talepler, Ofis Kasası ve Kira Artış Oranı kartları; son aktiviteler tablosu, hedef ilerlemesi ve portföy dağılımı grafiği",
    caption: "EMLAK CRM PRO — YÖNETİM PANELİ",
  },
  problem: {
    label: "01/02",
    title: "Problem",
    text: "Emlak ofisleri portföyü Excel'de, müşteriyi WhatsApp'ta, muhasebeyi defterde tutuyor. Hiçbiri konuşmuyor.",
  },
  approach: {
    label: "02/02",
    title: "Yaklaşım",
    text: "Önce bir emlak ofisinin gerçek gününü izledik, sonra kod yazdık.",
  },
  modules: [
    {
      index: "01/05",
      title: "Portföy & Harita",
      description:
        "Satılık/kiralık tüm portföyler durum, belge ve fotoğraflarıyla tek listede; harita üzerinde seçili bölgenin ortalama, en düşük ve en yüksek fiyat analizi; portföy ve statü dağılımı raporları tek bakışta.",
      images: [
        {
          src: "/screenshots/hero-device-tablet.png",
          alt: "CRM portföy listesi ekranı: filtre paneli ve galeri görünümünde portföy kartları — konum, fiyat, danışman ve durum etiketleriyle birlikte",
        },
        {
          src: "/screenshots/hero-bg-5.png",
          alt: "CRM coğrafi analiz ekranı: Antalya haritası üzerinde konumlandırılmış portföyler ve seçili alandaki toplam, ortalama, en düşük ve en yüksek fiyatları gösteren alan analizi paneli",
        },
        {
          src: "/screenshots/hero-bg-4.png",
          alt: "CRM raporlar — portföy ekranı: satılık/kiralık portföy sayıları, mülk türü dağılımı pasta grafiği ve statü dağılımı listesi",
        },
      ],
    },
    {
      index: "02/05",
      title: "Müşteri-Talep Eşleştirme",
      description:
        "Yeni bir portföy girildiğinde, kriterlerine uyan müşteri talepleri otomatik olarak listelenir — hiçbir eşleşme fırsatı manuel taramaya bağlı kalmaz.",
      images: [],
    },
    {
      index: "03/05",
      title: "Danışman Performansı",
      description:
        "Danışman başına telefon, yüz yüze görüşme, sunum ve yetki teması sayıları; komisyon geliri ve aktivite grafikleriyle adil, ölçülür performans takibi.",
      images: [
        {
          src: "/screenshots/hero-bg-3.png",
          alt: "CRM raporlar ekranı: danışman başına temas (telefon, yüz yüze, sunum, yetki) tablosu ile komisyon geliri ve aktivite sayısı grafikleri",
        },
      ],
    },
    {
      index: "04/05",
      title: "Muhasebe & Hakediş",
      description:
        "Toplam satış/kira cirosu, ofis ciro payı, danışmanlara ödenen tutarlar ve ofis kasası tek ekranda; hakediş ve tahsilat kayıtları şeffaf ve tartışmasız.",
      images: [
        {
          src: "/screenshots/hero-bg-2.png",
          alt: "CRM muhasebe ekranı: toplam satış/kira cirosu, ofis ciro payı, danışmanlara ödenen ve ofis kasası kartları ile son işlemler tablosu",
        },
      ],
    },
    {
      index: "05/05",
      title: "Takvim & Görevler",
      description:
        "Yer gösterme, arama ve görevler ofis takviminde toplanır; hangi danışmanın hangi randevuya gideceği kaçırma riski olmadan takip edilir.",
      images: [],
    },
  ],
  results: [
    { label: "CANLI KULLANIMDA" },
    { label: "GERÇEK OFİS" },
    { label: "BİNLERCE PORTFÖY" },
  ],
  client: {
    name: "Poyraz Gayrimenkul",
    logo: "/logos/poyraz-gayrimenkul-logo.svg",
    note: "Antalya merkezli, Emlak CRM Pro'yu canlı olarak kullanan gerçek bir ofis.",
  },
  cta: {
    title: "SİZ DE OFİSİNİZİ BU SİSTEMLE ÇALIŞTIRIN.",
    text: "Portföy, müşteri, danışman ve muhasebe — tek panelde. Poyraz Gayrimenkul gibi ofisinizi de dijitalleştirin.",
    label: "Demo Talep Et",
    href: "/demo-talep",
  },
};
