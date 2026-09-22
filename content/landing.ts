/**
 * ALL public-facing Turkish copy lives here as data.
 * Components render this content; they contain no hardcoded marketing text.
 * Editing the site's message = editing this file.
 */

import type { LedgerLabels, LedgerRow } from "@/types/ledger";

/** Column headers shared by every LedgerStrip table on the page. */
export const ledgerLabels = {
  code: "Kod",
  portfolio: "Portföy",
  district: "Bölge",
  consultant: "Danışman",
  status: "Durum",
  detail: "Detay",
} satisfies LedgerLabels;

export const nav = {
  links: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/ozellikler", label: "Özellikler" },
    { href: "/fiyatlandirma", label: "Paketler" },
    { href: "/kimler-icin", label: "Kimler İçin" },
    { href: "/araclar", label: "Araçlar" },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ],
  cta: "Demo Talep Et",
};

/** Mobile-only sticky bar shown after the hero scrolls out of view. Reuses the header CTA copy/target. */
export const stickyCta = {
  href: "/demo-talep",
  label: nav.cta,
  /** Accessible name for the bar landmark itself. */
  regionLabel: "Hızlı demo talebi",
};

export const hero = {
  eyebrow: "Gayrimenkul ofisleri için web tabanlı CRM",
  // Alternative slogans — swap headline freely:
  // "Excel bitti. Ofisiniz artık tek panelde."
  // "Portföy, müşteri, danışman. Hepsi tek ekranda."
  // "Brokerın kontrol paneli: satışın her adımı görünür."
  // "WhatsApp'ta kaybolan müşteri, kaybolan satıştır."
  // "Danışman bazlı portföy, müşteri ve satış performansını tek panelden takip edin."
  headline: "Emlak CRM: Ofisinizin tamamı tek panelde.",
  subheadline:
    "Portföylerinizi, müşterilerinizi, talepleri, danışman performansını ve satış sürecini tek ekrandan yönetin. Excel tabloları ve WhatsApp mesajları arasında kaybolan işleri sisteme bağlayın.",
  ctaPrimary: "Demo Talep Et",
  ctaSecondary: "Paketleri İncele",
  trustNote:
    "Gayrimenkul ofislerinin saha ihtiyaçlarına göre tasarlandı. Kurulum ve eğitim desteğiyle birlikte sunulur.",
};

export const heroLedger = {
  tableCaption: "Örnek portföy kayıtları: kod, tür, bölge, danışman, durum ve fiyat",
  rows: [
    {
      code: "PF-2041",
      propertyType: "3+1 Daire",
      district: "Konyaaltı",
      consultant: "A. Yılmaz",
      status: { label: "Eşleşti", tone: "matched" },
      detail: "8.500.000 ₺",
      detailLabel: "Fiyat",
    },
    {
      code: "PF-2036",
      propertyType: "2+1 Daire",
      district: "Muratpaşa",
      consultant: "S. Demir",
      status: { label: "Aktif", tone: "inProgress" },
      detail: "6.250.000 ₺",
      detailLabel: "Fiyat",
    },
    {
      code: "PF-2029",
      propertyType: "Villa",
      district: "Döşemealtı",
      consultant: "E. Kaya",
      status: { label: "Yeni", tone: "pending" },
      detail: "24.900.000 ₺",
      detailLabel: "Fiyat",
    },
    {
      code: "PF-2018",
      propertyType: "2+1 Kiralık",
      district: "Lara",
      consultant: "S. Demir",
      status: { label: "Aktif", tone: "inProgress" },
      detail: "45.000 ₺/ay",
      detailLabel: "Fiyat",
    },
    {
      code: "PF-2007",
      propertyType: "Dükkan",
      district: "Kepez",
      consultant: "A. Yılmaz",
      status: { label: "Kapandı", tone: "closed" },
      detail: "12.400.000 ₺",
      detailLabel: "Fiyat",
    },
  ] satisfies LedgerRow[],
};

export const problems = {
  eyebrow: "Tanıdık geliyor mu?",
  title: "Ofis büyüyor, takip zorlaşıyor.",
  intro:
    "Çoğu emlak ofisi işini Excel, WhatsApp ve not defterleriyle yönetmeye çalışıyor. Sonuç: kaybolan müşteri, unutulan talep, ölçülemeyen performans.",
  items: [
    {
      title: "Excel'de kaybolan müşteri kayıtları",
      text: "Hangi müşteri hangi danışmanda, en son ne konuşuldu? Tabloya bakan bilmiyor.",
    },
    {
      title: "WhatsApp'ta unutulan portföyler",
      text: "Portföy bilgileri mesaj geçmişinde kayboluyor; aynı daire iki kez, iki fiyatla paylaşılıyor.",
    },
    {
      title: "Takip edilmeyen talepler",
      text: "\"3+1, en fazla 8 milyon\" diyen müşteri aradıktan iki hafta sonra başka ofisten alıyor.",
    },
    {
      title: "Ölçülemeyen danışman performansı",
      text: "Kim kaç portföy aldı, kaç sunum yaptı, kaç satış kapattı? Ay sonunda net cevap yok.",
    },
    {
      title: "Manuel müşteri-portföy eşleştirme",
      text: "Uygun daire ofiste var ama kimse hatırlamıyor; eşleştirme hafızaya emanet.",
    },
    {
      title: "Dağınık randevu ve görevler",
      text: "Yer gösterme randevuları telefon ajandalarında; ofis genelini kimse göremiyor.",
    },
    {
      title: "Karmaşık komisyon takibi",
      text: "Paylaşımlı satışlarda kim ne kadar alacak? Hesap her ay yeniden tartışılıyor.",
    },
  ],
};

export const solution = {
  eyebrow: "Çözüm",
  title: "Dağınık operasyonu tek panelde toplayın.",
  intro:
    "Sistem, bir emlak ofisinin günlük akışına göre kurgulandı: portföy girilir, talep eşleşir, randevu atanır, satış pipeline'da ilerler, komisyon otomatik hesaplanır.",
  items: [
    {
      title: "Merkezi portföy yönetimi",
      text: "Tüm portföyler; durum, fiyat, belge ve sorumlu danışman bilgisiyle tek yerde.",
    },
    {
      title: "Müşteri ve talep takibi",
      text: "Her müşterinin talebi, bütçesi ve görüşme geçmişi kayıt altında. Hiçbir talep unutulmaz.",
    },
    {
      title: "Danışman bazlı performans",
      text: "Portföy, görüşme, sunum ve satış rakamları danışman bazında raporlanır.",
    },
    {
      title: "Satış pipeline görünürlüğü",
      text: "Her fırsatın hangi aşamada olduğu — ilk temas, yer gösterme, pazarlık, kapanış — tek bakışta.",
    },
    {
      title: "Broker kontrol paneli",
      text: "Ofisin tüm operasyonu tek ekranda: portföy sayısı, aktif talepler, aylık ciro, bekleyen görevler.",
    },
    {
      title: "Talep-portföy eşleştirme",
      text: "Yeni portföy girildiğinde uygun talepler otomatik listelenir; eşleşme hafızaya kalmaz.",
    },
    {
      title: "Raporlama ve komisyon takibi",
      text: "Satış kapandığında komisyon, paylaşım ve danışman hakedişleri sistemde hesaplanır.",
    },
  ],
};

/**
 * "Ürünü görün" section — a static composition of real product screenshots
 * inside device frames (laptop/tablet/phone), with a soft background collage.
 * Alt text must only describe what is actually visible in each image/crop
 * (honesty constraint). Dimensions are the source files' true pixel sizes,
 * consumed by next/image.
 */
export const productPreview = {
  eyebrow: "Ürünü görün",
  title: "Tüm ofisiniz, tek ekranda.",
  text: "Dashboard, portföy listesi ve mobil erişim — RealtyWorld-CRM her cihazda aynı güncel veriyi gösterir.",
  devices: [
    {
      device: "laptop" as const,
      src: "/screenshots/hero-device-laptop.png",
      width: 3360,
      height: 1850,
      alt: "CRM ana panel ekranı: Portföy, Toplam Müşteri, Bekleyen Onaylar, Aktif Talepler, Ofis Kasası ve Kira Artış Oranı kartları; son aktiviteler tablosu, hedef ilerlemesi ve portföy dağılımı grafiği",
    },
    {
      device: "tablet" as const,
      src: "/screenshots/hero-device-tablet.png",
      width: 3360,
      height: 1854,
      alt: "CRM portföy listesi ekranı: filtre paneli ve galeri görünümünde portföy kartları — konum, fiyat, danışman ve durum etiketleriyle birlikte",
    },
    {
      device: "phone" as const,
      src: "/screenshots/hero-device-tablet.png",
      width: 3360,
      height: 1854,
      alt: "CRM portföy listesinden bir portföy kartı: fotoğraf, başlık, konum, fiyat ve durum etiketi",
    },
  ],
  backgroundImages: [
    "/screenshots/hero-bg-1.png",
    "/screenshots/hero-bg-2.png",
    "/screenshots/hero-bg-3.png",
    "/screenshots/hero-bg-4.png",
    "/screenshots/hero-bg-5.png",
  ],
};

/**
 * Gallery section directly under the static device composition — walks
 * through all 8 source screenshots one at a time. Alt text describes only
 * what is actually visible in each image (honesty constraint).
 */
export const productGallery = {
  eyebrow: "Tüm ekranlar",
  title: "Ürünü daha yakından inceleyin.",
  carouselLabel: "Ürün ekran görüntüleri galerisi",
  slideLabel: "Görsel",
  lightboxLabel: "Ürün ekran görüntüsü büyütülmüş görünüm",
  closeLabel: "Kapat",
  slides: [
    {
      src: "/screenshots/hero-device-laptop.png",
      width: 3360,
      height: 1850,
      alt: "CRM ana panel ekranı: Portföy, Toplam Müşteri, Bekleyen Onaylar, Aktif Talepler, Ofis Kasası ve Kira Artış Oranı kartları; son aktiviteler tablosu, hedef ilerlemesi ve portföy dağılımı grafiği",
    },
    {
      src: "/screenshots/hero-device-tablet.png",
      width: 3360,
      height: 1854,
      alt: "CRM portföy listesi ekranı (açık tema): filtre paneli ve galeri görünümünde portföy kartları — konum, fiyat, danışman ve durum etiketleriyle birlikte",
    },
    {
      src: "/screenshots/hero-device-phone.png",
      width: 3360,
      height: 1850,
      alt: "CRM ana panel ekranının sağ alt kısmı: hedef ilerlemesi ve portföy dağılımı grafiği",
      objectPosition: "right bottom",
    },
    {
      src: "/screenshots/hero-bg-1.png",
      width: 3358,
      height: 1852,
      alt: "CRM portföy listesi ekranı (koyu tema): filtre paneli, portföy durumu özet kartları ve galeri görünümünde portföy kartları",
    },
    {
      src: "/screenshots/hero-bg-2.png",
      width: 3360,
      height: 1850,
      alt: "CRM muhasebe ekranı: toplam satış/kira cirosu, ofis ciro payı, danışmanlara ödenen ve ofis kasası kartları ile son işlemler tablosu",
    },
    {
      src: "/screenshots/hero-bg-3.png",
      width: 3360,
      height: 1850,
      alt: "CRM raporlar ekranı: danışman başına temas (telefon, yüz yüze, sunum, yetki) tablosu ile komisyon geliri ve aktivite sayısı grafikleri",
    },
    {
      src: "/screenshots/hero-bg-4.png",
      width: 3360,
      height: 1856,
      alt: "CRM raporlar — portföy ekranı: satılık/kiralık portföy sayıları, mülk türü dağılımı pasta grafiği ve statü dağılımı listesi",
    },
    {
      src: "/screenshots/hero-bg-5.png",
      width: 3360,
      height: 1854,
      alt: "CRM coğrafi analiz ekranı: Antalya haritası üzerinde konumlandırılmış portföyler ve seçili alandaki toplam, ortalama, en düşük ve en yüksek fiyatları gösteren alan analizi paneli",
    },
  ],
};

export const pipelineStages = {
  eyebrow: "Satış süreci",
  title: "Her fırsatın nerede olduğunu görün.",
  intro:
    "İlk temastan kapanışa kadar her fırsat pipeline'da ilerler. Hangi aşamada olduğu, kimde olduğu ve ne zaman hareket ettiği tek bakışta görünür.",
  tableCaption: "Aktif fırsatların satış pipeline aşamasına göre listesi",
  rows: [
    {
      code: "PF-2087",
      propertyType: "3+1 Daire",
      district: "Konyaaltı",
      consultant: "A. Yılmaz",
      status: { label: "Yeni", tone: "pending" },
      detail: "İlk Temas",
      detailLabel: "Aşama",
    },
    {
      code: "PF-1994",
      propertyType: "Villa",
      district: "Döşemealtı",
      consultant: "E. Kaya",
      status: { label: "Aktif", tone: "inProgress" },
      detail: "Yer Gösterme",
      detailLabel: "Aşama",
    },
    {
      code: "PF-2050",
      propertyType: "Dükkan",
      district: "Muratpaşa",
      consultant: "S. Demir",
      status: { label: "Aktif", tone: "inProgress" },
      detail: "Pazarlık",
      detailLabel: "Aşama",
    },
    {
      code: "PF-1932",
      propertyType: "2+1 Kiralık",
      district: "Lara",
      consultant: "A. Yılmaz",
      status: { label: "Aktif", tone: "inProgress" },
      detail: "Pazarlık",
      detailLabel: "Aşama",
    },
    {
      code: "PF-1861",
      propertyType: "4+1 Villa",
      district: "Konyaaltı",
      consultant: "E. Kaya",
      status: { label: "Kapandı", tone: "closed" },
      detail: "Kapanış",
      detailLabel: "Aşama",
    },
  ] satisfies LedgerRow[],
};

export const features = {
  eyebrow: "Özellikler",
  title: "Sahadan gelen ihtiyaçlar için tasarlandı.",
  items: [
    { title: "Portföy Yönetimi", text: "Satılık/kiralık tüm portföyler; durum, belge ve fotoğraflarla." },
    { title: "Müşteri Yönetimi", text: "Alıcı, satıcı ve kiracı kayıtları; segment ve görüşme geçmişi." },
    { title: "Talep Yönetimi", text: "Müşteri talepleri kriter bazlı kaydedilir ve takip edilir." },
    { title: "Müşteri-Portföy Eşleştirme", text: "Talep kriterlerine uyan portföyler otomatik listelenir." },
    { title: "Randevu ve Görev Takibi", text: "Yer gösterme, arama ve görevler ofis takviminde." },
    { title: "Satış Pipeline", text: "Fırsatlar aşama aşama ilerler; hiçbir satış askıda kalmaz." },
    { title: "Broker Paneli", text: "Ofisin tüm göstergeleri yönetici ekranında." },
    { title: "Danışman Performans Raporları", text: "Kişi bazlı portföy, görüşme ve satış metrikleri." },
    { title: "Muhasebe ve Komisyon Takibi", text: "Hakediş, paylaşım ve tahsilat kayıtları tek modülde." },
    { title: "Rol ve Yetki Yönetimi", text: "Broker, asistan ve danışman için ayrı yetki seviyeleri." },
    { title: "Bildirimler", text: "Yeni talep, eşleşme ve görevlerde anlık uyarı." },
    { title: "Raporlama", text: "Excel ve PDF çıktılarıyla dönemsel ofis raporları." },
    { title: "PDF Portföy Sunumu", text: "Müşteriye gönderilecek şık portföy sunumları tek tıkla." },
    { title: "Firma Bazlı Kullanım", text: "Her ofis kendi izole verisiyle çalışır." },
    { title: "Subdomain Modeli", text: "ofisiniz.[alan-adı] formatında hızlı açılış." },
    { title: "Özel Domain Opsiyonu", text: "Kurumsal pakette kendi alan adınızla kullanım." },
  ],
};

export const featuresPage = {
  seo: {
    title: "Emlak CRM Pro Özellikleri — Saha Testli Çözümler",
    description:
      "Emlak CRM sistemi ile portföy yönetimi, müşteri takibi, satış pipeline, danışman performansı raporları ve komisyon takibi. Gayrimenkul ofisinin tüm operasyonu tek panelde.",
  },
  eyebrow: "Özellikler",
  title: "Emlak CRM'in Özellikleri: Ofisinizin Her Operasyonu Tek Panelde",
  intro:
    "Sistemin her modülü, bir emlak ofisinin günlük akışından çıktı. Aşağıda her özelliğin ne işe yaradığını ve ofisinizde hangi sorunu çözdüğünü bulabilirsiniz.",
  sections: [
    {
      title: "Merkezi Portföy Yönetimi",
      text: "Tüm mülk kayıtlarını (satılık, kiralık, arsa) durum, fiyat, belge ve alanlarıyla organize edin. Portföy girildiğinde sistem uygun talepleri tarar ve size öneri olarak sunar — eşleşmeyi siz onaylarsınız, hiçbir potansiyel fırsat gözden kaçmaz.",
    },
    {
      title: "Müşteri Kayıtları ve Talep Takibi",
      text: "Alıcı, satıcı ve kiracı profilleri; her müşterinin bütçesi, tercihleri ve görüşme geçmişi kayıt altında kalır. Yeni bir portföy girildiğinde uygun taleplerle eşleşme önerileri otomatik olarak listelenir, hiçbir talep unutulmaz.",
    },
    {
      title: "Satış Pipeline ve Fırsatların Yönetimi",
      text: "İlk temastan kapanışa; her fırsat pipeline'da aşama aşama (İlk Temas → Yer Gösterme → Pazarlık → Kapanış) ilerler. Hangi dairenin kimde, ne kadar süredir beklemede olduğu, ne zaman hareket ettiği tek bakışta.",
    },
    {
      title: "Danışman Bazlı Performans Raporları",
      text: "Her danışmanın portföy sayısı, yapılan görüşme, yer gösterme, kapanan satış ve ortalama satış değeri rapor biçiminde. Performans adil, ölçülür ve veriye dayalı.",
    },
    {
      title: "Broker ve Yönetici Kontrol Paneli",
      text: "Ofisin tamamının (portföy sayısı, aktif talepler, aylık ciro, beklenen gelir, danışman görüşmeleri) güncel görünümü tek ekranda. Görev takibi ve riskli satışları yönetici ekranından izleyin.",
    },
    {
      title: "Muhasebe, Komisyon ve Hakediş Takibi",
      text: "Satış kapandığında paylaşımlı satışlar, danışman hakedişleri ve tahsilat sisteme işlenir; yetki seviyesine göre onay akışıyla kayıt altına alınır. Ay sonu hesaplar şeffaf, tartışmasız.",
    },
  ],
  cta: {
    title: "Bu özellikleri ofisinizde görün.",
    text: "Formu doldurun, ihtiyacınıza göre canlı bir demo planlayalım.",
    label: "Demo Talep Et",
    href: "/#demo",
  },
};

export const demoPage = {
  seo: {
    title: "Emlak CRM Pro Demo Talep — Ofisiniz için Özel Sunum",
    description:
      "Emlak CRM Pro'nun canlı demosunu talep edin. Ofisinizin ihtiyacına göre kişiselleştirilmiş sunum, kurulum ve fiyat teklifi. Hızlı ve ücretsiz.",
  },
  eyebrow: "Demo talebi",
  title: "Sistemi Çalışırken Görmek İstiyoruz",
  intro:
    "Formu doldurun; sürecin nasıl ilerlediğini aşağıda bulabilirsiniz.",
  sections: [
    {
      title: "Demo Süreci Nasıl İşliyor",
      text: "Formu doldurduktan sonra ekibimiz sizinle iletişime geçer, ofisinizin işletme akışını dinler ve ihtiyacınıza göre kişiselleştirilmiş bir canlı demo planlar. Demo sırasında sistemin tüm modüllerini görebilir, sorularınızı sorabilirsiniz.",
    },
    {
      title: "Kurulum Süreci",
      text: "Standart kurulum birkaç iş günü içinde tamamlanır. Veri aktarımı ve ekip eğitimi, ofisinizin büyüklüğü ve ihtiyaçlarına göre birlikte planlanır.",
    },
    {
      title: "Fiyat Teklifi ve Paket Seçimi",
      text: "Demo sonrasında, ofisinizin danışman sayısı ve ihtiyacını göz önüne alarak en uygun paketi öneriyoruz ve yazılı tekliflendirme yapıyoruz. Sorularınız cevaplandıktan sonra imzalama ve kurulum adımlarına geçilir.",
    },
  ],
};

export const audience = {
  eyebrow: "Kimler için",
  title: "Tek danışmandan franchise yapısına.",
  items: [
    {
      title: "Bireysel danışmanlar",
      text: "Portföy ve müşteri takibini tek başına, profesyonel bir sistemle yönetin.",
    },
    {
      title: "Küçük emlak ofisleri",
      text: "Excel ve deftere veda edin; 2-3 kişilik ekip aynı veriyi paylaşsın.",
    },
    {
      title: "Büyüyen gayrimenkul ekipleri",
      text: "Yeni danışman eklemek dakikalar sürsün; süreçler standarda otursun.",
    },
    {
      title: "Brokerlar",
      text: "Ofisin tamamını — portföy, talep, ciro, performans — tek panelden izleyin.",
    },
    {
      title: "Franchise yapıları",
      text: "Çoklu ofis desteği ve rol yönetimiyle şubeler tek çatı altında.",
    },
    {
      title: "İnşaat firması satış ekipleri",
      text: "Proje bazlı stok, talep ve satış sürecini aynı pipeline üzerinde yönetin.",
    },
  ],
};

export type PricingTierPrice = {
  discountedPrice: string;
  discountNote: string;
  customQuoteNote?: string;
};

export const pricing = {
  eyebrow: "Paketler",
  title: "Ofisinizin ölçeğine göre paket seçin.",
  note: "Fiyatlar demo sonrası, kullanıcı sayısı ve ihtiyaca göre tekliflendirilir. Aylık abonelik modeliyle çalışır. CRM özellikleri her pakette aynıdır; farklılık kullanıcı sayısı ve destek seviyesindedir.",
  cta: "Demo ve Teklif Al",
  tiers: [
    {
      name: "Başlangıç",
      badge: null,
      target: "Bireysel danışmanlar ve küçük ofisler için",
      price: {
        discountedPrice: "2.400 TL/ay",
        discountNote: "Lansman fiyatı",
      } satisfies PricingTierPrice,
      features: [
        "1-5 kullanıcı",
        "Subdomain kullanımı",
        "E-posta destek",
        "Kendi kendine kurulum",
      ],
    },
    {
      name: "Profesyonel",
      badge: "En çok tercih edilen kurgu",
      target: "Büyüyen emlak ofisleri için",
      price: {
        discountedPrice: "4.900 TL/ay",
        discountNote: "Lansman fiyatı",
      } satisfies PricingTierPrice,
      features: [
        "5-15 kullanıcı",
        "Subdomain kullanımı",
        "Öncelikli destek",
        "Rehberli kurulum desteği",
      ],
    },
    {
      name: "Kurumsal",
      badge: null,
      target: "Broker ekipleri ve franchise yapıları için",
      price: {
        discountedPrice: "9.900 TL/ay",
        discountNote: "Lansman fiyatı",
        customQuoteNote: "Özel ihtiyaçlar için: İhtiyaca göre tekliflendirilir",
      } satisfies PricingTierPrice,
      features: [
        "15+ kullanıcı (özel anlaşma)",
        "Özel domain desteği",
        "Premium destek",
        "Kapsamlı eğitim ve onboarding",
        "Talep halinde çoklu ofis desteği",
        "Talebe özel geliştirme opsiyonu",
      ],
    },
  ],
};

export const pricingPage = {
  seo: {
    title: "Fiyatlandırma — Emlak CRM Pro Paketleri",
    description:
      "Emlak CRM programı paket fiyatlarını karşılaştırın: Başlangıç, Profesyonel ve Kurumsal. Ofis büyüklüğünüze uygun paketi seçin, ücretsiz demo talep edin.",
  },
  eyebrow: "Fiyatlandırma",
  title: "Şeffaf fiyatlandırma — ofisinizin ölçeğine göre",
  intro:
    "Üç paket, aynı CRM özellikleri. Farklılık kullanıcı sayısı ve destek seviyesindedir. Aşağıda ofis büyüklüğünüze göre önerilen paketi ve tüm paketlerin karşılaştırmasını bulabilirsiniz.",
  guide: {
    eyebrow: "Hangi paket size uygun?",
    title: "Ofis büyüklüğünüze göre öneri",
    items: [
      {
        officeType: "Bireysel danışman",
        text: "Portföy ve müşteri takibinizi tek başınıza, profesyonel bir sistemle yönetin.",
        recommendedTier: "Başlangıç",
      },
      {
        officeType: "Küçük ofis (2-5 kişi)",
        text: "Excel ve deftere veda edin; ekibiniz aynı veriyi tek panelden paylaşsın.",
        recommendedTier: "Başlangıç",
      },
      {
        officeType: "Büyüyen ofis (5-15 kişi)",
        text: "Yeni danışman eklemek dakikalar sürsün; öncelikli destekle süreçler standarda otursun.",
        recommendedTier: "Profesyonel",
      },
      {
        officeType: "Broker / Franchise yapısı",
        text: "Ofisin tamamını — portföy, talep, ciro, performans — tek panelden izleyin; kendi domaininizle kullanın.",
        recommendedTier: "Kurumsal",
      },
    ],
  },
  comparison: {
    eyebrow: "Ayrıntılı karşılaştırma",
    title: "Paketleri özellik özellik karşılaştırın",
    launchPriceLabel: "Lansman fiyatı",
    rowLabels: ["Kullanıcı sayısı", "Domain", "Destek", "Kurulum"],
  },
  faq: {
    eyebrow: "Sık sorulan sorular",
    title: "Fiyatlandırma hakkında merak edilenler",
    items: [
      {
        q: "Lansman fiyatı ne kadar sürer, değişir mi?",
        a: "Gösterilen fiyatlar sistemin güncel lansman fiyatlarıdır ve kalıcıdır; belirli bir kampanya süresine bağlı değildir.",
      },
      {
        q: "Paket değişimi veya kullanıcı sayısı artırma mümkün mü?",
        a: "Evet. Ekibiniz büyüdükçe pakete yeni kullanıcı eklenebilir; paketler arası geçiş yapılabilir.",
      },
      {
        q: "Ödeme nasıl yapılıyor?",
        a: "Sistem aylık abonelik modeliyle çalışır.",
      },
      {
        q: "Veri güvenliği ve yedekleme nasıl sağlanıyor?",
        a: "Her ofis kendi izole veri alanında çalışır; erişim rol ve yetki sistemiyle sınırlandırılır. Veriler düzenli olarak yedeklenir.",
      },
    ],
  },
  servicesCta: {
    title: "Ek profesyonel hizmetlerimize göz atın.",
    text: "CRM kurulumu, reklam yönetimi, SEO ve kurumsal kimlik tasarımı gibi opsiyonel hizmetlerin tamamını Özellikler sayfasında bulabilirsiniz.",
    label: "Ek Hizmetleri İncele",
    href: "/ozellikler#hizmetler",
  },
  cta: {
    title: "Ofisiniz için doğru paketi birlikte belirleyelim.",
    text: "Formu doldurun, ihtiyacınıza göre paket önerisiyle birlikte canlı bir demo planlayalım.",
    label: "Paket Seç & Demo Planla",
    href: "/#demo",
  },
};

export const services = {
  eyebrow: "Ek profesyonel hizmetler",
  title: "CRM yazılımının dışında ihtiyaç duyabilecekleriniz",
  intro:
    "Bu hizmetler abonelikten bağımsız, ihtiyaç halinde alınan opsiyonel hizmetlerdir. CRM'e geçen ofislerin en sık ihtiyaç duyduğu başlıklar:",
  quoteNote: "Talep üzerine teklif",
  items: [
    { title: "CRM kurulum danışmanlığı", text: "Ofis akışınıza göre kurulum ve yapılandırma." },
    { title: "Veri aktarım desteği", text: "Excel ve eski sistemlerdeki kayıtların CRM'e taşınması." },
    { title: "Google Ads kurulumu", text: "Bölgesel arama reklamlarıyla yeni talep üretimi." },
    { title: "Meta Ads kurulumu", text: "Instagram ve Facebook'ta portföy ve marka reklamları." },
    { title: "SEO başlangıç paketi", text: "Ofis web sitenizin aramalarda görünürlüğü." },
    { title: "Kurumsal kimlik tasarımı", text: "Ofisiniz için tutarlı görsel kimlik." },
    { title: "Logo revizyonu", text: "Mevcut logonuzun profesyonel yenilenmesi." },
    { title: "Web sitesi kurulumu", text: "Portföylerinizi sergileyen modern ofis sitesi." },
    { title: "Hosting/domain danışmanlığı", text: "Alan adı ve barındırma tarafında doğru kurulum." },
    { title: "CRM eğitim paketi", text: "Danışman ekibiniz için uygulamalı kullanım eğitimi." },
    { title: "Dijital pazarlama danışmanlığı", text: "İlan sitesi bağımlılığını azaltan bütünleşik strateji." },
  ],
};

export const trust = {
  eyebrow: "Neden bu sistem",
  title: "Satış vaadi değil, saha gerçeği.",
  items: [
    {
      title: "Saha ihtiyacına göre tasarlandı",
      text: "Özellik listesi bir emlak ofisinin günlük operasyonundan çıktı: portföy, talep, yer gösterme, komisyon.",
    },
    {
      title: "Tek panel yaklaşımı",
      text: "Portföy, müşteri ve danışman yönetimini tek panelde toplamak için geliştirildi; ek programa ihtiyaç kalmaz.",
    },
    {
      title: "Demo ve pilot kullanıma hazır",
      text: "Altyapı, pilot kullanım ve canlı demo sunumları için hazırdır. Görmeden karar vermeyin: ücretsiz ve taahhütsüz demo talep edin.",
    },
  ],
};

export const references = {
  eyebrow: "Referanslarımız",
  title: "Sahada kullanılıyor.",
  intro:
    "Sistemi kendi ofisimizde günlük operasyonda kullanıyoruz. Referans listesi büyüdükçe burada paylaşacağız.",
  logos: [
    {
      src: "/logos/poyraz-gayrimenkul-logo.svg",
      alt: "Realty World Poyraz Gayrimenkul",
      width: 729,
      height: 171,
    },
  ],
};

export const faq = {
  eyebrow: "Sık sorulan sorular",
  title: "Aklınızdaki sorular",
  items: [
    {
      q: "Bu CRM kimler için uygundur?",
      a: "Bireysel danışmanlardan franchise yapılara kadar; portföy, müşteri ve satış süreci yöneten tüm gayrimenkul ekipleri için uygundur. İnşaat firmalarının satış ofisleri de aynı akışla kullanabilir.",
    },
    {
      q: "Kurulum ne kadar sürer?",
      a: "Standart kurulum genellikle birkaç iş günü içinde tamamlanır. Veri aktarımı ve ekip eğitimi dahil edildiğinde ofisin büyüklüğüne göre süre planlanır.",
    },
    {
      q: "Kendi domainimle kullanabilir miyim?",
      a: "Evet. Kurumsal pakette sistemi kendi alan adınız üzerinde kullanabilirsiniz.",
    },
    {
      q: "Subdomain modeli var mı?",
      a: "Evet. Ofisiniz için ayrılmış bir subdomain üzerinden hızlıca yayına alınırsınız; ek teknik kurulum gerekmez.",
    },
    {
      q: "Kullanıcı sayısı artırılabilir mi?",
      a: "Evet. Ekibiniz büyüdükçe pakete yeni kullanıcı eklenebilir; paketler arası geçiş yapılabilir.",
    },
    {
      q: "Eğitim veriliyor mu?",
      a: "Evet. Kurulum sonrasında ekip için kullanım eğitimi verilir; Kurumsal pakette onboarding süreci standarttır.",
    },
    {
      q: "Verilerim güvende mi?",
      a: "Her ofis kendi izole veri alanında çalışır; erişim rol ve yetki sistemiyle sınırlandırılır. Veriler düzenli olarak yedeklenir.",
    },
    {
      q: "Mobil uyumlu mu?",
      a: "Evet. Sistem web tabanlıdır ve telefon, tablet ve bilgisayarda tarayıcı üzerinden çalışır; sahada da kullanılabilir.",
    },
    {
      q: "Danışman performansı takip edilebilir mi?",
      a: "Evet. Portföy sayısı, görüşme, yer gösterme ve kapanan satışlar danışman bazında raporlanır.",
    },
    {
      q: "Portföy PDF çıktısı alınabilir mi?",
      a: "Evet. Portföyler için müşteriye gönderilebilecek PDF sunumlar tek tıkla oluşturulur.",
    },
    {
      q: "Demo talep ettikten sonra süreç nasıl ilerler?",
      a: "Demo tamamen ücretsizdir ve taahhüt gerektirmez. Formu doldurduktan sonra sizinle iletişime geçilir, ofisinizin ihtiyacı dinlenir ve canlı bir demo planlanır. Ardından pilot kullanım ve paket teklifi ile devam edilir.",
    },
  ],
};

export const demoForm = {
  eyebrow: "Demo talebi",
  title: "Sistemi ofisiniz üzerinde görün.",
  intro:
    "Formu doldurun; sizinle iletişime geçelim ve ofisinizin akışına göre canlı bir demo planlayalım.",
  labels: {
    fullName: "Ad Soyad",
    company: "Firma Adı",
    phone: "Telefon",
    email: "E-posta",
    city: "Şehir",
    agentCount: "Danışman Sayısı",
    message: "Mesaj",
  },
  placeholders: {
    fullName: "Adınız ve soyadınız",
    company: "Ofisinizin adı",
    phone: "05xx xxx xx xx",
    email: "ornek@ofisiniz.com",
    city: "Örn. Antalya",
    agentCount: "Seçin",
    message: "Kısaca ihtiyacınızı yazabilirsiniz (opsiyonel)",
  },
  agentCountOptions: ["1", "2-4", "5-10", "11-20", "20+"],
  submit: "Demo Talep Et",
  submitting: "Gönderiliyor...",
  success:
    "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz. Teşekkürler!",
  error:
    "Gönderim sırasında bir sorun oluştu. Lütfen tekrar deneyin veya bize e-posta ile ulaşın.",
  validation: {
    required: "Bu alan zorunludur.",
    email: "Geçerli bir e-posta adresi girin.",
    phone: "Geçerli bir telefon numarası girin.",
  },
  kvkkNote:
    "Gönderdiğiniz bilgiler yalnızca demo süreci için kullanılır; üçüncü taraflarla paylaşılmaz.",
};

export const footer = {
  tagline:
    "Gayrimenkul ofisleri için portföy, müşteri, danışman ve satış yönetimini tek panelde toplayan web tabanlı CRM.",
  columns: [
    {
      title: "Ürün",
      links: [
        { href: "/#ozellikler", label: "Özellikler" },
        { href: "/#paketler", label: "Paketler" },
        { href: "/kimler-icin", label: "Kimler İçin" },
        { href: "/#sss", label: "SSS" },
        { href: "/blog", label: "Blog" },
      ],
    },
    {
      title: "Hizmetler",
      links: [
        { href: "/#hizmetler", label: "Ek Profesyonel Hizmetler" },
        { href: "/demo-talep", label: "Demo Talep Et" },
      ],
    },
  ],
  legal: [
    { href: "/kvkk", label: "Gizlilik Politikası" },
    { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
  ],
  individualCta: {
    text: "Antalya'da Ev Arıyorsanız →",
    href: "https://talep.emlakcrmpro.com",
  },
  rights: "Tüm hakları saklıdır.",
  designCredit: "Web sitesi tasarımı: Tan Yasan",
};

export const blogPage = {
  title: "Emlak CRM Pro Blog",
};

export const contact = {
  seo: {
    title: "İletişim — Emlak CRM Pro Danışmanlarına Ulaşın",
    description:
      "Emlak CRM Pro'ya demo, fiyat teklifi, teknik destek veya sorularınız için ulaşın. Telefon, e-posta, WhatsApp — tercih ettiğiniz kanaldan iletişime geçin.",
  },
  eyebrow: "İletişim",
  title: "Bizimle konuşun — doğru çözüm için",
  intro:
    "Sorunuz hangi konuda olursa olsun, size en hızlı dönecek kanalı aşağıda bulabilirsiniz.",
  directChannels: {
    phoneLabel: "Telefon",
    emailLabel: "E-posta",
    whatsappLabel: "WhatsApp",
    whatsappNote: "Yazılı destek için en hızlı kanal.",
  },
  categories: [
    {
      title: "Satış & Demo",
      text: "Paket seçimi, fiyat teklifi ve kurulum süreci hakkında konuşmak veya canlı bir demo planlamak için.",
      ctaLabel: "Demo Talep Et",
      href: "/#demo",
    },
    {
      title: "Destek",
      text: "Kullanım sorunları, hata bildirimi veya teknik sorularınız için — mevcut kullanıcılara öncelikli destek.",
      ctaLabel: "WhatsApp'tan Yazın",
      href: "whatsapp" as const,
    },
  ],
  serviceArea: {
    title: "Hizmet bölgesi",
    text: "Türkiye genelinde çevrimiçi destek veriyoruz; sistem web tabanlı olduğu için ofisinizin bulunduğu şehir fark etmez.",
  },
  faq: {
    title: "İletişimle ilgili merak edilenler",
    items: [
      {
        q: "Demo talebimden sonra ne kadar sürede dönüş alırım?",
        a: "Formu doldurduktan sonra ekibimiz en kısa sürede sizinle iletişime geçer ve ofisinizin ihtiyacına göre bir demo zamanı planlanır.",
      },
      {
        q: "Teknik bir sorunum var, hangi kanaldan yazmalıyım?",
        a: "WhatsApp veya e-posta üzerinden Destek kanalından ulaşabilirsiniz; talebiniz ilgili ekibe yönlendirilir.",
      },
      {
        q: "Fiyat teklifi almak için önce demo görmem gerekiyor mu?",
        a: "Hayır, doğrudan Satış & Demo kanalından fiyat sorabilirsiniz; ancak sistemi görmeden karar vermemenizi öneririz.",
      },
      {
        q: "Hangi bölgelere hizmet veriyorsunuz?",
        a: "Türkiye genelinde hizmet veriyoruz. Sistem tarayıcı üzerinden çalıştığı için kurulum ve destek tamamen çevrimiçi ilerler; ofisinize gelmemiz gerekmez.",
      },
    ],
  },
};

export const commissionCalculatorPage = {
  seo: {
    title: "Emlak Komisyonu Hesaplama — Satış ve Kiralama İçin Ücretsiz Araç",
    description:
      "Satış veya kiralama işlemlerinde emlak komisyonu tutarını KDV dahil ve KDV hariç olarak saniyeler içinde hesaplayın.",
  },
  eyebrow: "Ücretsiz araç",
  title: "Emlak Komisyonu Hesaplama",
  intro:
    "İşlem tutarını ve komisyon oranını girin; komisyon tutarını KDV dahil ve KDV hariç olarak anında görün.",
  calculator: {
    transactionTypeLabel: "İşlem tipi",
    saleLabel: "Satış",
    rentalLabel: "Kiralama",
    amountLabel: "Tutar",
    amountPlaceholder: "Örn. 2.500.000",
    rateLabel: "Komisyon oranı (%)",
    rateNote:
      "Aşağıdaki oran bilgi amaçlıdır; ofisinizin uyguladığı güncel oranı girerek hesaplayabilirsiniz.",
    rentalNote:
      "Kiralama işlemlerinde komisyon, oran uygulanmadan, girilen tutarın (1 aylık kira bedelinin) tamamı olarak hesaplanır.",
    defaultRates: {
      sale: 2,
      rental: "",
    },
    vatRate: 20,
    resultTitle: "Hesaplama sonucu",
    resultLabels: {
      exVat: "Komisyon tutarı (KDV hariç)",
      vatAmount: "KDV (%20)",
      inVat: "Komisyon tutarı (KDV dahil)",
    },
  },
  explanation: {
    title: "Emlak komisyonu nasıl hesaplanır?",
    text: "Emlak komisyonu, işlem tutarı (satış bedeli veya kira bedeli) üzerinden belirlenen bir oranın uygulanmasıyla hesaplanır. Bulunan komisyon tutarına, mevzuata göre ayrıca KDV eklenir. Ofisler arasında uygulanan oran farklılık gösterebileceğinden, kesin tutar için ilgili emlak ofisiyle veya danışmanla teyitleşmeniz önerilir.",
  },
  faq: {
    eyebrow: "Sık sorulanlar",
    title: "Komisyon hesaplama hakkında sık sorulan sorular",
    items: [
      {
        q: "Emlak komisyon oranının yasal bir sınırı var mı?",
        a: "Satış işlemlerinde emlak komisyonu genellikle %2 civarında uygulanır ve hem alıcı hem satıcıdan ayrı ayrı tahsil edilir. Oranlar ofisler arasında farklılık gösterebileceğinden, kesin bilgi için ilgili emlak ofisiyle teyitleşmeniz önerilir.",
      },
      {
        q: "Komisyonu alıcı mı satıcı mı öder, kiracı mı ev sahibi mi öder?",
        a: "Satışta hem alıcı hem satıcı kendi payına düşen komisyonu öder. Kiralamada ise komisyon kiracıdan bir aylık kira tutarı üzerinden alınır.",
      },
      {
        q: "Hesaplama sonucuna KDV dahil mi?",
        a: "Bu araç, girdiğiniz tutar üzerinden hesaplanan komisyonu hem KDV hariç hem de %20 KDV dahil olarak ayrı ayrı gösterir; hangi tutarın geçerli olduğunu ofisinizle teyit edin.",
      },
      {
        q: "Hesaplama sonucu bağlayıcı bir teklif midir?",
        a: "Hayır. Bu araç yalnızca bilgilendirme amaçlıdır; kesin komisyon tutarı ve koşulları için emlak ofisi veya danışmanla yazılı olarak anlaşmanız gerekir.",
      },
    ],
  },
  cta: {
    title: "Ofisiniz için komisyon ve tahsilat takibini tek sistemde toplayın",
    text: "Emlak CRM Pro ile komisyon hesaplamalarını, tahsilat takibini ve ofis performansınızı tek panelden yönetin.",
    label: "Demo Talep Et",
    href: "/demo-talep",
  },
  relatedTools: [
    {
      text: "Komisyon tutarını hesaplamak için",
      linkLabel: "Kira Getirisi Hesaplama aracına",
      href: "/araclar/kira-getirisi-hesaplama",
      suffix: "da göz atabilirsiniz.",
    },
    {
      text: "Satış işleminizin tapu harcını hesaplamak için",
      linkLabel: "Tapu Harcı Hesaplama aracına",
      href: "/araclar/tapu-harci-hesaplama",
      suffix: "da göz atabilirsiniz.",
    },
  ],
};

export const rentalYieldCalculatorPage = {
  seo: {
    title: "Kira Getirisi Hesaplama — Brüt Kira Getirisi ve Amortisman Süresi",
    description:
      "Gayrimenkul alış fiyatı ve aylık kira geliri üzerinden brüt kira getirisi oranını ve amortisman süresini saniyeler içinde hesaplayın.",
  },
  eyebrow: "Ücretsiz araç",
  title: "Kira Getirisi Hesaplama",
  intro:
    "Gayrimenkulün alış fiyatını ve aylık kira gelirini girin; brüt kira getirisi oranını ve amortisman süresini anında görün.",
  calculator: {
    priceLabel: "Gayrimenkul alış fiyatı",
    pricePlaceholder: "Örn. 3.500.000",
    rentLabel: "Aylık kira geliri",
    rentPlaceholder: "Örn. 15.000",
    resultTitle: "Hesaplama sonucu",
    resultLabels: {
      grossYield: "Yıllık brüt kira getirisi",
      paybackYears: "Amortisman süresi (yıl)",
    },
  },
  explanation: {
    title: "Kira getirisi nasıl hesaplanır?",
    text: "Yıllık brüt kira getirisi, aylık kira gelirinin 12 ile çarpılıp alış fiyatına bölünmesiyle; amortisman süresi ise alış fiyatının yıllık kira gelirine bölünmesiyle hesaplanır. Bu araç yalnızca brüt getiriyi gösterir. Net getiri; aidat, vergi, bakım-onarım, boş kalma süresi gibi giderler düşüldükten sonraki gerçek kazancı ifade eder ve brüt getiriden her zaman daha düşüktür. Kesin bir yatırım kararı vermeden önce bu gider kalemlerini de hesaba katmanız önerilir.",
  },
  faq: {
    eyebrow: "Sık sorulanlar",
    title: "Kira getirisi hakkında sık sorulan sorular",
    items: [
      {
        q: "İyi bir kira getirisi oranı nedir?",
        a: "Bunun için sabit bir eşik değer yoktur; kabul edilebilir kira getirisi oranı bölgeye, gayrimenkul türüne ve piyasa koşullarına göre değişir. Karar vermeden önce bulunduğunuz bölgedeki benzer gayrimenkullerin getiri oranlarıyla karşılaştırma yapmanız önerilir.",
      },
      {
        q: "Brüt ve net kira getirisi arasındaki fark nedir?",
        a: "Brüt kira getirisi, yalnızca kira gelirinin alış fiyatına oranıdır ve hiçbir gider içermez. Net kira getirisi ise aidat, emlak vergisi, bakım-onarım masrafları ve boş kalma süresi gibi kalemler düşüldükten sonra kalan getiriyi gösterir; bu nedenle net getiri brüt getiriden daha düşük çıkar.",
      },
      {
        q: "Amortisman süresi ne anlama gelir?",
        a: "Amortisman süresi, gayrimenkulün alış fiyatının, elde edilen yıllık kira geliriyle kaç yılda karşılanacağını gösterir. Bu araçtaki hesaplama gider ve boş kalma süresi içermediğinden, gerçek geri ödeme süresi hesaplanandan daha uzun olabilir.",
      },
      {
        q: "Bu hesaplama gider, vergi ve boş kalma süresini dikkate alıyor mu?",
        a: "Hayır. Bu araç yalnızca brüt getiriyi ve amortisman süresini gösterir; aidat, vergi, bakım-onarım ve boş kalma süresi gibi kalemleri içermez. Kesin bir yatırım kararı için bu giderleri de hesaba katmanız gerekir.",
      },
    ],
  },
  cta: {
    title: "Ofisiniz için portföy ve yatırım danışmanlığı süreçlerini tek sistemde toplayın",
    text: "Emlak CRM Pro ile portföy verimliliğini, müşteri taleplerini ve ofis performansınızı tek panelden yönetin.",
    label: "Demo Talep Et",
    href: "/demo-talep",
  },
  relatedTools: [
    {
      text: "İşlem tutarı üzerinden komisyon hesaplamak için",
      linkLabel: "Komisyon Hesaplama aracına",
      href: "/araclar/komisyon-hesaplama",
      suffix: "da göz atabilirsiniz.",
    },
    {
      text: "Bu gayrimenkulü satın alırsanız ödeyeceğiniz tapu harcını hesaplamak için",
      linkLabel: "Tapu Harcı Hesaplama aracına",
      href: "/araclar/tapu-harci-hesaplama",
      suffix: "da göz atabilirsiniz.",
    },
  ],
};

export const tapuHarciCalculatorPage = {
  seo: {
    title: "Tapu Harcı Hesaplama 2026 — Alıcı/Satıcı Payı ve Döner Sermaye",
    description:
      "2026 tarifesine göre tapu harcı tutarını, alıcı-satıcı paylaşımını ve döner sermaye ücretini saniyeler içinde hesaplayın.",
  },
  eyebrow: "Ücretsiz araç",
  title: "Tapu Harcı Hesaplama (2026)",
  intro:
    "Satış bedelini, işlem türünü ve harç paylaşım şeklini girin; toplam tapu harcını, alıcı/satıcı payını ve döner sermaye tutarını dahil toplam maliyeti anında görün.",
  tariffInfo: {
    year: 2026,
    label: "2026 tarifesi",
    lastUpdated: "Ocak 2026",
  },
  calculator: {
    priceLabel: "Satış bedeli",
    pricePlaceholder: "Örn. 3.500.000",
    harcRateLabel: "Tapu harcı oranı",
    harcRatePercent: 4,
    transactionTypeLabel: "İşlem türü",
    transactionTypes: [
      { id: "standard", label: "Standart satış", doner: 6681 },
      { id: "mortgage", label: "Kredili / ipotekli satış", doner: 13362 },
      { id: "outOfJurisdiction", label: "Tapu müdürlüğü yetki alanı dışı işlem", doner: 13362 },
      { id: "foreignBuyer", label: "Yabancı uyruklu alıcı", doner: 20870 },
    ],
    defaultTransactionType: "standard",
    donerSermayeLabel: "Döner sermaye ücreti",
    donerSermayeNote:
      "Bu tutar ilçeye göre değişebilir; alan otomatik dolduruldu, gerekirse düzenleyebilirsiniz.",
    payerSplitLabel: "Harcı kim ödeyecek?",
    payerSplitOptions: [
      { id: "half", label: "Yarı yarıya (alıcı %2 / satıcı %2)" },
      { id: "buyer", label: "Tamamı alıcı" },
      { id: "seller", label: "Tamamı satıcı" },
    ],
    defaultPayerSplit: "half",
    resultTitle: "Hesaplama sonucu",
    resultLabels: {
      totalHarc: "Toplam tapu harcı (%4)",
      buyerShare: "Alıcının payı",
      sellerShare: "Satıcının payı",
      donerSermaye: "Döner sermaye ücreti",
      grandTotal: "Toplam maliyet (harç + döner sermaye)",
    },
    disclaimer:
      "2026 tarifesine göre hesaplanmıştır. Döner sermaye ilçeye göre değişir; kesin tutar tapu müdürlüğünde hesaplanır. Bu araç bilgilendirme amaçlıdır.",
  },
  explanation: {
    title: "Tapu harcı nasıl hesaplanır?",
    text: "Tapu harcı, satış bedelinin %4'ü olarak hesaplanır ve mevzuata göre %2 alıcı, %2 satıcı tarafından ödenir; taraflar bu paylaşımı kendi aralarında farklı da belirleyebilir. Harcın hesaplanacağı taban, beyan edilen satış bedeli ile emlak vergisi değerinden hangisi yüksekse odur. Bunun yanında, işlem türüne göre değişen sabit bir döner sermaye ücreti de ödenir. Kesin tutar için tapu müdürlüğü ile teyitleşmeniz önerilir.",
  },
  faq: {
    eyebrow: "Sık sorulanlar",
    title: "Tapu harcı hesaplama hakkında sık sorulan sorular",
    items: [
      {
        q: "Tapu harcı nedir?",
        a: "Tapu harcı, bir gayrimenkulün alım-satım işlemi sırasında tapu devri için ödenen, satış bedeli üzerinden hesaplanan yasal bir bedeldir. Tapu müdürlüğünde işlem tamamlanmadan önce ödenmesi gerekir.",
      },
      {
        q: "Tapu harcı oranı ve alıcı-satıcı paylaşımı nasıldır?",
        a: "Güncel tarifeye göre tapu harcı, satış bedelinin %4'ü olarak hesaplanır ve mevzuata göre %2 alıcı, %2 satıcı tarafından ödenir. Uygulamada taraflar bu paylaşımı kendi aralarında farklı şekilde belirleyebilir; bu nedenle araçta paylaşım seçeneği sunulmuştur.",
      },
      {
        q: "Tapu harcı, satış bedeli düşük gösterilerek azaltılabilir mi?",
        a: "Hayır. Tapu harcının hesaplanacağı taban, beyan edilen satış bedeli ile gayrimenkulün belediyede kayıtlı emlak vergisi değerinden hangisi yüksekse odur; yani harç, emlak vergi değerinin altında bir tutar üzerinden hesaplanamaz. Bu bilgi genel bilgilendirme amaçlıdır, güncel uygulama için tapu müdürlüğü teyidi önerilir.",
      },
      {
        q: "Döner sermaye ücreti neden ilçeye göre değişiyor?",
        a: "Döner sermaye ücreti, merkezi bir gösterge tutarının bulunduğunuz ilçenin yöresel katsayısıyla çarpılmasıyla belirlenir; büyükşehirlerde bu katsayı farklı olabileceğinden tutar ilçeden ilçeye değişebilir. Bu araçtaki alan işlem türüne göre bir varsayılan değerle doldurulur ancak gerekirse elle düzeltebilirsiniz.",
      },
      {
        q: "Bu araçtaki sonuç kesin ve bağlayıcı mıdır?",
        a: "Hayır. Bu araç yalnızca bilgilendirme amaçlıdır; kesin tapu harcı ve döner sermaye tutarı, işlemin yapılacağı tapu müdürlüğünde belirlenir. Güncel tarife ve muafiyet durumları için tapu müdürlüğü veya bir uzmanla teyitleşmeniz önerilir.",
      },
    ],
  },
  cta: {
    title: "Ofisiniz için satış sürecini ve komisyon takibini tek sistemde toplayın",
    text: "Emlak CRM Pro ile satış pipeline'ınızı, komisyon ve tahsilat kayıtlarınızı ve ofis performansınızı tek panelden yönetin.",
    label: "Demo Talep Et",
    href: "/demo-talep",
  },
  relatedTools: [
    {
      text: "İşlem tutarınız üzerinden komisyon hesaplamak için",
      linkLabel: "Emlak Komisyonu Hesaplama aracına",
      href: "/araclar/komisyon-hesaplama",
      suffix: "da göz atabilirsiniz.",
    },
    {
      text: "Yatırım amaçlı aldığınız gayrimenkulün getirisini hesaplamak için",
      linkLabel: "Kira Getirisi Hesaplama aracına",
      href: "/araclar/kira-getirisi-hesaplama",
      suffix: "da göz atabilirsiniz.",
    },
  ],
};

export const toolsPageBackLink = {
  label: "← Tüm Araçlar",
  href: "/araclar",
};

export const toolsIndexPage = {
  seo: {
    title: "Ücretsiz Emlak Araçları — Komisyon, Kira Getirisi ve Tapu Harcı Hesaplama",
    description:
      "Emlak ofisleri için hazırlanan ücretsiz hesaplama araçlarına buradan ulaşın: komisyon hesaplama, kira getirisi hesaplama ve tapu harcı hesaplama.",
  },
  eyebrow: "Ücretsiz araçlar",
  title: "Emlak Ofisleri İçin Ücretsiz Araçlar",
  intro:
    "Günlük işlerinizi kolaylaştıracak hesaplama araçlarımızı ücretsiz kullanın; kayıt gerekmez.",
  tools: [
    {
      title: "Emlak Komisyonu Hesaplama",
      description:
        "Satış veya kiralama işlemlerinde komisyon tutarını KDV dahil ve KDV hariç olarak hesaplayın.",
      detailHref: "/araclar/komisyon-hesaplama",
      detailLabel: "Detaylı bilgi ve sık sorulan sorular →",
    },
    {
      title: "Kira Getirisi Hesaplama",
      description:
        "Alış fiyatı ve aylık kira geliri üzerinden brüt kira getirisi oranını ve amortisman süresini hesaplayın.",
      detailHref: "/araclar/kira-getirisi-hesaplama",
      detailLabel: "Detaylı bilgi ve sık sorulan sorular →",
    },
    {
      title: "Tapu Harcı Hesaplama",
      description:
        "Satış bedeli üzerinden tapu harcını, alıcı-satıcı payını ve döner sermaye ücretini hesaplayın.",
      detailHref: "/araclar/tapu-harci-hesaplama",
      detailLabel: "Detaylı bilgi ve sık sorulan sorular →",
    },
  ],
};
