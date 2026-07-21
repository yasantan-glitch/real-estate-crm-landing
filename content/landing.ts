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
    { href: "#ozellikler", label: "Özellikler" },
    { href: "#kimler-icin", label: "Kimler İçin" },
    { href: "#paketler", label: "Paketler" },
    { href: "#hizmetler", label: "Ek Hizmetler" },
    { href: "#sss", label: "SSS" },
  ],
  cta: "Demo Talep Et",
};

export const hero = {
  eyebrow: "Gayrimenkul ofisleri için web tabanlı CRM",
  // Alternative slogans — swap headline freely:
  // "Excel bitti. Ofisiniz artık tek panelde."
  // "Portföy, müşteri, danışman. Hepsi tek ekranda."
  // "Brokerın kontrol paneli: satışın her adımı görünür."
  // "WhatsApp'ta kaybolan müşteri, kaybolan satıştır."
  // "Danışman bazlı portföy, müşteri ve satış performansını tek panelden takip edin."
  headline: "Emlak ofisinizin tamamı, tek CRM panelinde.",
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
 * "Ürünü görün" section — real screenshots of the product, shown in a
 * visitor-controlled carousel. Each slide's alt text must only describe what
 * is actually visible in its image (honesty constraint). Slide dimensions are
 * the source files' true pixel sizes, consumed by next/image.
 */
export const productPreview = {
  eyebrow: "Ürünü görün",
  title: "Portföyünüz, şehir haritasının üzerinde.",
  text: "Coğrafi analiz ekranı portföylerinizi harita üzerinde kümeleyerek gösterir; yarıçap veya çokgen çizerek bölge seçer, seçtiğiniz alandaki portföy sayısını ve fiyat aralığını anında görürsünüz. Yanında ana panel ve raporlar: göstergeler, son aktiviteler ve müşteri kaynak dağılımı. Bunlar tasarım taslağı değil — sistemden alınmış gerçek görüntüler.",
  carouselLabel: "Ürün ekran görüntüleri",
  previousLabel: "Önceki görsel",
  nextLabel: "Sonraki görsel",
  slideLabel: "Görsel",
  slides: [
    {
      src: "/screenshots/product-preview-1.webp",
      width: 3340,
      height: 1532,
      alt: "CRM'in coğrafi analiz ekranı: Antalya haritası üzerinde kümelenmiş portföy noktaları; yarıçap ve çokgen seçim araçları; seçili alandaki toplam portföy sayısı ile ortalama, en düşük ve en yüksek fiyatları gösteren alan analizi paneli",
    },
    {
      src: "/screenshots/product-preview-2.webp",
      width: 3344,
      height: 1528,
      alt: "CRM ana paneli: Portföy, Toplam Müşteri, Takip Bekleyen, Aktif Talepler, Aylık Gelir ve Beklenen Ciro kartları; son aktiviteler tablosu ve hedef ilerleme göstergesi",
    },
    {
      src: "/screenshots/product-preview-3.webp",
      width: 3344,
      height: 1528,
      alt: "CRM raporlar ekranı: müşteri kazanım kaynaklarını — Eski Müşteri, Sosyal Medya, Referans, Portal, Ofis Ziyareti ve Diğer — oranlarıyla gösteren pasta grafik",
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
  originalPrice: string;
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
        originalPrice: "3.500 TL/ay",
        discountedPrice: "2.400 TL/ay",
        discountNote: "İlk 3 ay kampanya fiyatı",
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
        originalPrice: "7.500 TL/ay",
        discountedPrice: "4.900 TL/ay",
        discountNote: "İlk 3 ay kampanya fiyatı",
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
        originalPrice: "12.000 TL/ay",
        discountedPrice: "9.900 TL/ay",
        discountNote: "İlk 3 ay kampanya fiyatı",
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

export const services = {
  eyebrow: "Ek profesyonel hizmetler",
  title: "CRM'in yanında, pazarlama tarafını da kuralım.",
  intro:
    "Bu hizmetler abonelikten bağımsız, ihtiyaç halinde alınan opsiyonel hizmetlerdir. CRM'e geçen ofislerin en sık ihtiyaç duyduğu başlıklar:",
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
      text: "Altyapı, pilot kullanım ve canlı demo sunumları için hazırdır. Görmeden karar vermeyin: demo talep edin.",
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
      a: "Formu doldurduktan sonra sizinle iletişime geçilir, ofisinizin ihtiyacı dinlenir ve canlı bir demo planlanır. Ardından pilot kullanım ve paket teklifi ile devam edilir.",
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
        { href: "#ozellikler", label: "Özellikler" },
        { href: "#paketler", label: "Paketler" },
        { href: "#kimler-icin", label: "Kimler İçin" },
        { href: "#sss", label: "SSS" },
      ],
    },
    {
      title: "Hizmetler",
      links: [
        { href: "#hizmetler", label: "Ek Profesyonel Hizmetler" },
        { href: "#demo", label: "Demo Talep Et" },
      ],
    },
  ],
  legal: [
    { href: "#", label: "Gizlilik Politikası" },
    { href: "#", label: "Kullanım Koşulları" },
  ],
  rights: "Tüm hakları saklıdır.",
  designCredit: "Web sitesi tasarımı: Tan Yasan",
};
