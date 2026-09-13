/**
 * Rakip karşılaştırma ("alternatif") sayfalarının içeriği.
 * Karşılaştırma tablolarındaki her iddia lastVerifiedDate ile tarihlenir —
 * rakip bilgisi kamuya açık kaynaklara dayanır ve zamanla değişebilir.
 */

export const toolsPageBackLinkAlternatifler = {
  label: "← Tüm Alternatif Karşılaştırmaları",
  href: "/alternatifler",
};

export interface ComparisonRow {
  feature: string;
  us: string | boolean;
  competitor: string | boolean;
  note?: string;
}

export interface AlternativePageContent {
  slug: string;
  competitorName: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  comparisonTable: {
    title: string;
    rows: ComparisonRow[];
    disclaimer: string;
  };
  differentiators: { title: string; description: string }[];
  whoShouldChoose: { us: string; competitor: string };
  faq: { q: string; a: string }[];
  cta: { title: string; text: string; label: string; href: string };
  lastVerifiedDate: string;
}

export const alternativesHubPage = {
  seo: {
    title: "Emlak CRM Alternatifleri — Karşılaştırmalar",
    description:
      "Emlak CRM Pro'yu diğer emlak CRM yazılımlarıyla karşılaştırın: özellik, fiyatlandırma modeli ve destek farkları.",
  },
  eyebrow: "Karşılaştırmalar",
  title: "Emlak CRM Pro'yu Diğer Sistemlerle Karşılaştırın",
  intro:
    "Bir emlak CRM'i seçmeden önce alternatifleri karşılaştırmak doğaldır. Aşağıda Emlak CRM Pro'nun öne çıktığı noktaları ve farkları, kamuya açık bilgilere dayanarak objektif şekilde bulabilirsiniz.",
};

export const alternatives: AlternativePageContent[] = [
  {
    slug: "emlakcrmx-alternatifi",
    competitorName: "EmlakCRMx",
    seo: {
      title: "EmlakCRMx Alternatifi — Emlak CRM Pro Karşılaştırması",
      description:
        "EmlakCRMx'e alternatif arıyorsanız Emlak CRM Pro'nun özellik, fiyatlandırma modeli ve destek farklarını inceleyin.",
    },
    eyebrow: "EmlakCRMx Alternatifi",
    h1: "Emlak CRM Pro vs EmlakCRMx: Emlak Ofisleri İçin Karşılaştırma",
    intro:
      "EmlakCRMx'e alternatif değerlendiriyorsanız, aşağıda iki sistemin öne çıkan özelliklerini ve fiyatlandırma yaklaşımını yan yana bulabilirsiniz. Karşılaştırma, EmlakCRMx'in kamuya açık web sitesindeki bilgilere dayanır; kendi ihtiyacınıza göre karar vermeniz için hazırlanmıştır.",
    comparisonTable: {
      title: "Özellik Karşılaştırması",
      rows: [
        {
          feature: "Fiyatlandırma modeli",
          us: "Aylık abonelik, taahhütsüz",
          competitor: "Yıllık taahhüt gerektirir",
          note: "Rakibin fiyatlandırma sayfasında belirtilen paket koşullarına dayanır.",
        },
        {
          feature: "Kurulum süresi",
          us: "Kendi kendine kurulum, aynı gün başlangıç",
          competitor: "Kurulum için ekip randevusu gerekiyor",
        },
        {
          feature: "Subdomain / özel domain",
          us: true,
          competitor: "Dokümantasyonunda özel domain seçeneği belirtilmemiş",
        },
        {
          feature: "Komisyon ve hakediş takibi",
          us: true,
          competitor: true,
        },
        {
          feature: "Danışman performans raporları",
          us: true,
          competitor: "Dokümantasyonunda detaylı belirtilmemiş",
        },
        {
          feature: "Çoklu ofis / franchise desteği",
          us: "Kurumsal pakette mevcut",
          competitor: "Üst pakette mevcut",
        },
      ],
      disclaimer:
        "Bu karşılaştırma, EmlakCRMx'in herkese açık web sitesinde yer alan bilgilere dayanmaktadır ve aşağıdaki tarih itibarıyla güncellenmiştir. Rakip ürün özellikleri zaman içinde değişebilir; güncel bilgi için doğrudan EmlakCRMx ile iletişime geçmenizi öneririz.",
    },
    differentiators: [
      {
        title: "Taahhütsüz aylık abonelik",
        description:
          "Yıllık sözleşmeye bağlı kalmadan, ihtiyacınız değiştiğinde paket değiştirebilir veya sonlandırabilirsiniz.",
      },
      {
        title: "Aynı gün kurulum",
        description:
          "Kendi kendine kurulum akışıyla, danışman randevusu beklemeden sisteme hemen başlayabilirsiniz.",
      },
      {
        title: "Saha odaklı özellik seti",
        description:
          "Portföy-talep eşleştirme, pipeline ve komisyon takibi bir emlak ofisinin günlük akışından çıktı.",
      },
    ],
    whoShouldChoose: {
      us: "Hızlı başlamak isteyen, taahhüt altına girmeden deneyerek karar vermek isteyen bireysel danışmanlar ve ofisler için uygundur.",
      competitor: "Uzun vadeli taahhüt karşılığında ek kurumsal hizmet almak isteyen büyük ekipler için de bir seçenek olabilir.",
    },
    faq: [
      {
        q: "EmlakCRMx'ten Emlak CRM Pro'ya geçiş yapabilir miyim?",
        a: "Evet, mevcut portföy ve müşteri verilerinizin aktarımı için veri aktarım desteği hizmetimizden yararlanabilirsiniz.",
      },
      {
        q: "İki sistem arasındaki temel fark nedir?",
        a: "En belirgin fark fiyatlandırma modelidir: Emlak CRM Pro aylık taahhütsüz çalışır, EmlakCRMx yıllık taahhüt gerektirir. Özellik seti büyük ölçüde örtüşür.",
      },
      {
        q: "Bu karşılaştırma güncel mi?",
        a: "Karşılaştırma, sayfanın altında belirtilen tarih itibarıyla EmlakCRMx'in kamuya açık bilgilerine dayanır. Güncel ve kesin bilgi için EmlakCRMx ile doğrudan iletişime geçmenizi öneririz.",
      },
    ],
    cta: {
      title: "Emlak CRM Pro'yu ücretsiz demo ile deneyin.",
      text: "Taahhüt yok. Formu doldurun, ofisinize özel bir demo planlayalım.",
      label: "Demo Talep Et",
      href: "/#demo",
    },
    lastVerifiedDate: "2026-09-13",
  },
  {
    slug: "re-os-alternatifi",
    competitorName: "RE-OS.com",
    seo: {
      title: "RE-OS.com Alternatifi — Emlak CRM Pro Karşılaştırması",
      description:
        "RE-OS.com'a alternatif arıyorsanız Emlak CRM Pro'nun özellik, fiyatlandırma modeli ve destek farklarını inceleyin.",
    },
    eyebrow: "RE-OS.com Alternatifi",
    h1: "Emlak CRM Pro vs RE-OS.com: Emlak Ofisleri İçin Karşılaştırma",
    intro:
      "RE-OS.com'a alternatif değerlendiriyorsanız, aşağıda iki sistemin öne çıkan özelliklerini ve fiyatlandırma yaklaşımını yan yana bulabilirsiniz. Karşılaştırma, RE-OS.com'un kamuya açık web sitesindeki bilgilere dayanır.",
    comparisonTable: {
      title: "Özellik Karşılaştırması",
      rows: [
        {
          feature: "Fiyatlandırma modeli",
          us: "Aylık abonelik, taahhütsüz",
          competitor: "Kullanıcı bazlı katmanlı fiyatlandırma",
        },
        {
          feature: "Türkçe arayüz ve destek",
          us: true,
          competitor: "Dokümantasyonunda belirtilmemiş",
        },
        {
          feature: "Portföy-talep otomatik eşleştirme",
          us: true,
          competitor: "Dokümantasyonunda detaylı belirtilmemiş",
        },
        {
          feature: "PDF portföy sunumu",
          us: true,
          competitor: "Dokümantasyonunda belirtilmemiş",
        },
        {
          feature: "Broker / yönetici paneli",
          us: true,
          competitor: true,
        },
        {
          feature: "Kurulum süreci",
          us: "Kendi kendine kurulum",
          competitor: "Talep üzerine kurulum görüşmesi",
        },
      ],
      disclaimer:
        "Bu karşılaştırma, RE-OS.com'un herkese açık web sitesinde yer alan bilgilere dayanmaktadır ve aşağıdaki tarih itibarıyla güncellenmiştir. Rakip ürün özellikleri zaman içinde değişebilir; güncel bilgi için doğrudan RE-OS.com ile iletişime geçmenizi öneririz.",
    },
    differentiators: [
      {
        title: "Türkiye pazarına özel tasarım",
        description:
          "Arayüz, terminoloji ve iş akışları Türkiye'deki emlak ofislerinin günlük çalışma şekline göre tasarlandı.",
      },
      {
        title: "Şeffaf, öngörülebilir fiyatlandırma",
        description:
          "Kullanıcı sayısına göre net paketler; sürpriz ek ücret veya karmaşık katman yapısı yok.",
      },
      {
        title: "Hızlı devreye alma",
        description: "Subdomain modeliyle kayıt olduğunuz gün sisteme portföy girmeye başlayabilirsiniz.",
      },
    ],
    whoShouldChoose: {
      us: "Türkçe destek ve Türkiye'deki emlak ofisi iş akışına uygun hazır bir sistem isteyen ofisler için uygundur.",
      competitor: "Uluslararası ekiplerle çalışan veya çok dilli arayüz önceliği olan yapılar için değerlendirilebilir.",
    },
    faq: [
      {
        q: "RE-OS.com'dan Emlak CRM Pro'ya geçiş yapabilir miyim?",
        a: "Evet, mevcut verilerinizin aktarımı için veri aktarım desteği hizmetimizden yararlanabilirsiniz.",
      },
      {
        q: "İki sistem arasındaki temel fark nedir?",
        a: "Emlak CRM Pro, Türkiye'deki emlak ofislerinin iş akışına göre tasarlanmış Türkçe bir sistemdir ve daha basit, öngörülebilir bir fiyatlandırma modeli sunar.",
      },
      {
        q: "Bu karşılaştırma güncel mi?",
        a: "Karşılaştırma, sayfanın altında belirtilen tarih itibarıyla RE-OS.com'un kamuya açık bilgilerine dayanır. Güncel bilgi için RE-OS.com ile doğrudan iletişime geçmenizi öneririz.",
      },
    ],
    cta: {
      title: "Emlak CRM Pro'yu ücretsiz demo ile deneyin.",
      text: "Taahhüt yok. Formu doldurun, ofisinize özel bir demo planlayalım.",
      label: "Demo Talep Et",
      href: "/#demo",
    },
    lastVerifiedDate: "2026-09-13",
  },
  {
    slug: "crmprogrami-alternatifi",
    competitorName: "crmprogrami.tr",
    seo: {
      title: "crmprogrami.tr Alternatifi — Emlak CRM Pro Karşılaştırması",
      description:
        "crmprogrami.tr'ye alternatif arıyorsanız Emlak CRM Pro'nun emlak sektörüne özel özellik ve fiyatlandırma farklarını inceleyin.",
    },
    eyebrow: "crmprogrami.tr Alternatifi",
    h1: "Emlak CRM Pro vs crmprogrami.tr: Emlak Ofisleri İçin Karşılaştırma",
    intro:
      "crmprogrami.tr'ye alternatif değerlendiriyorsanız, aşağıda iki sistemin öne çıkan özelliklerini yan yana bulabilirsiniz. crmprogrami.tr genel amaçlı bir CRM iken, Emlak CRM Pro özellikle emlak ofisleri için tasarlanmıştır.",
    comparisonTable: {
      title: "Özellik Karşılaştırması",
      rows: [
        {
          feature: "Sektöre özel tasarım",
          us: "Emlak ofisleri için özel olarak tasarlandı",
          competitor: "Genel amaçlı CRM, emlağa özel modül gerekebilir",
        },
        {
          feature: "Portföy-talep eşleştirme",
          us: true,
          competitor: "Dokümantasyonunda belirtilmemiş",
        },
        {
          feature: "Emlak komisyonu ve hakediş takibi",
          us: true,
          competitor: "Dokümantasyonunda belirtilmemiş",
        },
        {
          feature: "Fiyatlandırma modeli",
          us: "Aylık abonelik, taahhütsüz",
          competitor: "Kullanıcı bazlı katmanlı fiyatlandırma",
        },
        {
          feature: "PDF portföy sunumu",
          us: true,
          competitor: "Dokümantasyonunda belirtilmemiş",
        },
        {
          feature: "Genel iş süreçleri (satış/servis) yönetimi",
          us: "Emlak odaklı, genel modül yok",
          competitor: true,
        },
      ],
      disclaimer:
        "Bu karşılaştırma, crmprogrami.tr'nin herkese açık web sitesinde yer alan bilgilere dayanmaktadır ve aşağıdaki tarih itibarıyla güncellenmiştir. Rakip ürün özellikleri zaman içinde değişebilir; güncel bilgi için doğrudan crmprogrami.tr ile iletişime geçmenizi öneririz.",
    },
    differentiators: [
      {
        title: "Emlak sektörüne özel modüller",
        description:
          "Portföy, talep eşleştirme ve komisyon takibi gibi modüller genel bir CRM'de bulunmayan, sektöre özgü ihtiyaçlar için tasarlandı.",
      },
      {
        title: "Kurulumda ek yapılandırma gerektirmez",
        description:
          "Genel amaçlı bir CRM'i emlak ofisi akışına uydurmak için harcanacak yapılandırma süresi ortadan kalkar.",
      },
      {
        title: "Danışman bazlı performans raporları",
        description: "Portföy, görüşme ve satış metrikleri emlak ofisi terminolojisiyle hazır gelir.",
      },
    ],
    whoShouldChoose: {
      us: "Sadece emlak operasyonuna (portföy, talep, satış pipeline, komisyon) odaklanmak isteyen ofisler için uygundur.",
      competitor: "Emlak dışında başka iş kollarını da tek CRM'de yönetmek isteyen, çok amaçlı bir sistem arayan işletmeler için değerlendirilebilir.",
    },
    faq: [
      {
        q: "crmprogrami.tr'den Emlak CRM Pro'ya geçiş yapabilir miyim?",
        a: "Evet, mevcut verilerinizin aktarımı için veri aktarım desteği hizmetimizden yararlanabilirsiniz.",
      },
      {
        q: "İki sistem arasındaki temel fark nedir?",
        a: "crmprogrami.tr genel amaçlı bir CRM'dir; Emlak CRM Pro ise portföy-talep eşleştirme ve komisyon takibi gibi emlak ofislerine özel modüllerle baştan bu iş için tasarlandı.",
      },
      {
        q: "Bu karşılaştırma güncel mi?",
        a: "Karşılaştırma, sayfanın altında belirtilen tarih itibarıyla crmprogrami.tr'nin kamuya açık bilgilerine dayanır. Güncel bilgi için crmprogrami.tr ile doğrudan iletişime geçmenizi öneririz.",
      },
    ],
    cta: {
      title: "Emlak CRM Pro'yu ücretsiz demo ile deneyin.",
      text: "Taahhüt yok. Formu doldurun, ofisinize özel bir demo planlayalım.",
      label: "Demo Talep Et",
      href: "/#demo",
    },
    lastVerifiedDate: "2026-09-13",
  },
];
