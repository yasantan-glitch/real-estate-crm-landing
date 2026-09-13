/**
 * Segment bazlı ("kimler için") sayfaların içeriği.
 * relevantFeatures, content/landing.ts'teki features.items ile aynı doğruluk
 * kaynağını paylaşır — metin burada tekrar yazılmaz, sadece o segmente
 * en ilgili özellikler seçilip href ile /ozellikler sayfasına bağlanır.
 */

export const toolsPageBackLinkKimlerIcin = {
  label: "← Tüm Segmentler",
  href: "/kimler-icin",
};

export interface PainPoint {
  title: string;
  description: string;
}

export interface RelevantFeature {
  title: string;
  description: string;
  href?: string;
}

export interface UseCasePageContent {
  slug: string;
  segmentName: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  painPoints: PainPoint[];
  relevantFeatures: RelevantFeature[];
  faq: { q: string; a: string }[];
  cta: { title: string; text: string; label: string; href: string };
}

export const useCasesHubPage = {
  seo: {
    title: "Kimler İçin — Emlak CRM Pro Kimlere Uygun?",
    description:
      "Emlak CRM Pro bireysel danışmandan emlak ofisine, franchise yapılarına kadar farklı ölçekte gayrimenkul ekipleri için tasarlandı. Size uygun kullanım senaryosunu bulun.",
  },
  eyebrow: "Kimler için",
  title: "Ofisinizin Ölçeğine Göre Emlak CRM Pro",
  intro:
    "Tek başına çalışan bir danışmandan çok şubeli bir franchise yapısına kadar, her ölçekte gayrimenkul ekibinin farklı ihtiyaçları vardır. Aşağıda kendi durumunuza en yakın segmenti seçip detaylı bilgi alabilirsiniz.",
};

export const useCases: UseCasePageContent[] = [
  {
    slug: "bireysel-emlakci",
    segmentName: "Bireysel Emlakçılar",
    seo: {
      title: "Bireysel Emlakçılar İçin CRM — Emlak CRM Pro",
      description:
        "Tek başına çalışan emlak danışmanları için portföy, müşteri ve talep takibini tek panelde toplayan CRM. Kurulum kolay, ekip gerektirmez.",
    },
    eyebrow: "Bireysel Emlakçılar İçin",
    h1: "Tek Başına Çalışan Emlak Danışmanları İçin CRM",
    intro:
      "Bireysel çalışan bir emlak danışmanı olarak portföy, müşteri ve talep bilgilerini not defterinde, Excel'de veya WhatsApp'ta dağınık tutmak zaman kaybettirir ve fırsat kaçırma riski yaratır. Emlak CRM Pro, tek kişilik bir operasyonu bile profesyonel bir sisteme taşır.",
    painPoints: [
      {
        title: "Portföyler farklı yerlerde dağınık",
        description: "Bir kısmı not defterinde, bir kısmı WhatsApp'ta, bir kısmı hafızada — hangi portföyün güncel durumda olduğunu takip etmek zorlaşır.",
      },
      {
        title: "Müşteri talepleri unutuluyor",
        description: "Yeni bir portföy girdiğinizde, daha önce görüştüğünüz hangi müşterinin kriterlerine uyduğunu hatırlamak güçleşir.",
      },
      {
        title: "Randevu ve görüşme geçmişi kayıtsız",
        description: "Hangi müşteriyle ne zaman görüştüğünüzü, ne söylediğinizi tekrar hatırlamak için notlarınızı karıştırmak gerekir.",
      },
    ],
    relevantFeatures: [
      {
        title: "Portföy Yönetimi",
        description: "Satılık/kiralık tüm portföyleriniz durum, belge ve fotoğraflarıyla tek yerde.",
        href: "/ozellikler",
      },
      {
        title: "Müşteri-Portföy Eşleştirme",
        description: "Yeni bir portföy girdiğinizde, uygun taleplere sahip müşteriler otomatik listelenir.",
        href: "/ozellikler",
      },
      {
        title: "Randevu ve Görev Takibi",
        description: "Yer gösterme ve görüşmeleriniz takviminizde, kaçırma riski olmadan.",
        href: "/ozellikler",
      },
    ],
    faq: [
      {
        q: "Tek kişi olarak sistemi kullanmak mantıklı mı?",
        a: "Evet. Başlangıç paketi 1-5 kullanıcı için tasarlandı ve tek danışmanlık operasyonlar için yeterlidir.",
      },
      {
        q: "Kurulum için teknik bilgi gerekiyor mu?",
        a: "Hayır, Başlangıç paketi kendi kendine kurulum akışıyla gelir; birkaç dakika içinde portföy girmeye başlayabilirsiniz.",
      },
      {
        q: "İleride ekibim büyürse ne olur?",
        a: "Paketler arası geçiş mümkündür; ekibiniz büyüdüğünde Profesyonel veya Kurumsal pakete yükseltebilirsiniz.",
      },
    ],
    cta: {
      title: "Tek başınıza da profesyonel bir sistemle çalışın.",
      text: "Formu doldurun, size özel kısa bir demo planlayalım.",
      label: "Demo Talep Et",
      href: "/#demo",
    },
  },
  {
    slug: "emlak-ofisi",
    segmentName: "Emlak Ofisleri",
    seo: {
      title: "Emlak Ofisleri İçin CRM — Emlak CRM Pro",
      description:
        "Küçük ve büyüyen emlak ofisleri için portföy, müşteri, danışman performansı ve komisyon takibini tek panelde toplayan CRM.",
    },
    eyebrow: "Emlak Ofisleri İçin",
    h1: "Emlak Ofisleri İçin Ekip Halinde Çalışan CRM",
    intro:
      "Birden fazla danışmanla çalışan bir emlak ofisinde herkesin aynı veriye eriştiği, tekrar iş yapmadığı ve yöneticinin ofisin tamamını görebildiği bir sistem gerekir. Emlak CRM Pro, ekibin büyüklüğü ne olursa olsun süreçleri standartlaştırır.",
    painPoints: [
      {
        title: "Danışmanlar birbirinin portföyünden habersiz",
        description: "Excel dosyaları paylaşılmadığında veya güncellenmediğinde, aynı portföy iki danışman tarafından ayrı ayrı işlenebilir.",
      },
      {
        title: "Yönetici ofisin genel durumunu göremiyor",
        description: "Kaç aktif talep var, hangi satış hangi aşamada, kimin performansı nasıl — bu sorulara anlık cevap vermek zorlaşır.",
      },
      {
        title: "Komisyon paylaşımı ve hakediş hesapları karışıyor",
        description: "Ay sonunda kim hangi satıştan ne kadar hakediş alacak sorusu, dağınık kayıtlar yüzünden tartışmaya dönüşebilir.",
      },
    ],
    relevantFeatures: [
      {
        title: "Broker Paneli",
        description: "Ofisin tüm göstergeleri (portföy, talep, ciro, performans) yönetici ekranında.",
        href: "/ozellikler",
      },
      {
        title: "Danışman Performans Raporları",
        description: "Kişi bazlı portföy, görüşme ve satış metrikleri; adil ve ölçülür performans takibi.",
        href: "/ozellikler",
      },
      {
        title: "Muhasebe ve Komisyon Takibi",
        description: "Hakediş, paylaşım ve tahsilat kayıtları tek modülde, şeffaf ve tartışmasız.",
        href: "/ozellikler",
      },
      {
        title: "Rol ve Yetki Yönetimi",
        description: "Broker, asistan ve danışman için ayrı yetki seviyeleri.",
        href: "/ozellikler",
      },
    ],
    faq: [
      {
        q: "Ofisimizde kaç danışman varsa o kadar kullanıcı mı gerekiyor?",
        a: "Evet, her danışman kendi hesabıyla sisteme girer. Profesyonel paket 5-15 kullanıcıyı kapsar, ihtiyaç halinde kullanıcı eklenebilir.",
      },
      {
        q: "Mevcut Excel verilerimizi aktarabilir miyiz?",
        a: "Evet, veri aktarım desteği hizmetiyle mevcut portföy ve müşteri kayıtlarınız sisteme taşınabilir.",
      },
      {
        q: "Danışmanlar birbirinin verisini görebilir mi?",
        a: "Rol ve yetki yönetimi ile bu görünürlük ofisinizin tercihine göre ayarlanır; yönetici tüm veriyi görürken danışmanlar kendi kayıtlarına odaklanabilir.",
      },
    ],
    cta: {
      title: "Ekibinizin tamamını tek panelden yönetin.",
      text: "Formu doldurun, ofisinizin büyüklüğüne uygun paket önerisiyle demo planlayalım.",
      label: "Demo Talep Et",
      href: "/#demo",
    },
  },
  {
    slug: "franchise",
    segmentName: "Franchise Yapıları",
    seo: {
      title: "Franchise Emlak Ofisleri İçin CRM — Emlak CRM Pro",
      description:
        "Çoklu şube yapısına sahip emlak franchise'ları için özel domain, çoklu ofis desteği ve merkezi raporlama sunan CRM.",
    },
    eyebrow: "Franchise Yapıları İçin",
    h1: "Çoklu Şubeli Emlak Franchise'ları İçin CRM",
    intro:
      "Birden fazla şubesi olan bir franchise yapısında her şubenin kendi verisiyle çalışması ama merkezin tüm şubeleri tek yerden görebilmesi gerekir. Emlak CRM Pro'nun Kurumsal paketi bu ihtiyaca göre tasarlandı.",
    painPoints: [
      {
        title: "Şubeler farklı sistemler veya dosyalarla çalışıyor",
        description: "Standart bir sistem olmadığında, her şube kendi yöntemini geliştirir ve merkez için karşılaştırma zorlaşır.",
      },
      {
        title: "Merkez, şubeler arası performansı karşılaştıramıyor",
        description: "Hangi şubenin ne kadar portföyü, talebi ve satışı olduğunu görmek için her şubeden ayrı ayrı rapor istemek gerekir.",
      },
      {
        title: "Marka tutarlılığı zorlaşıyor",
        description: "Portföy sunumları ve müşteri iletişimi şubeler arasında farklılaştığında marka deneyimi tutarsızlaşır.",
      },
    ],
    relevantFeatures: [
      {
        title: "Firma Bazlı Kullanım",
        description: "Her şube kendi izole verisiyle çalışır; merkez ile veri karışmaz.",
        href: "/ozellikler",
      },
      {
        title: "Özel Domain Opsiyonu",
        description: "Kurumsal pakette kendi alan adınızla, marka tutarlılığıyla kullanım.",
        href: "/ozellikler",
      },
      {
        title: "Broker Paneli",
        description: "Merkez yönetimi, talep halinde çoklu ofis desteğiyle şubelerin genel durumunu izleyebilir.",
        href: "/ozellikler",
      },
      {
        title: "PDF Portföy Sunumu",
        description: "Tüm şubelerde aynı, şık ve standart portföy sunum formatı.",
        href: "/ozellikler",
      },
    ],
    faq: [
      {
        q: "Her şube için ayrı kurulum mu gerekiyor?",
        a: "Kurumsal pakette talep halinde çoklu ofis desteği mevcuttur; şubeler kendi izole verileriyle çalışırken merkez genel görünümü takip edebilir.",
      },
      {
        q: "Özel domain kullanabilir miyiz?",
        a: "Evet, Kurumsal pakette özel domain desteği mevcuttur.",
      },
      {
        q: "Talebe özel geliştirme yapılabiliyor mu?",
        a: "Kurumsal pakette talebe özel geliştirme opsiyonu bulunur; franchise yapınıza özgü ihtiyaçlar ayrıca değerlendirilir.",
      },
    ],
    cta: {
      title: "Franchise yapınız için özel bir teklif alalım.",
      text: "Formu doldurun, şube sayınıza uygun kurumsal teklifle demo planlayalım.",
      label: "Demo Talep Et",
      href: "/#demo",
    },
  },
];
