/**
 * ALL public-facing Turkish copy lives here as data.
 * Components render this content; they contain no hardcoded marketing text.
 * Editing the site's message = editing this file.
 */

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

export const pricing = {
  eyebrow: "Paketler",
  title: "Ofisinizin ölçeğine göre paket seçin.",
  note: "Fiyatlar demo sonrası, kullanıcı sayısı ve ihtiyaca göre tekliflendirilir. Aylık abonelik modeliyle çalışır.",
  cta: "Demo ve Teklif Al",
  tiers: [
    {
      name: "Başlangıç",
      badge: null,
      target: "Bireysel danışmanlar ve küçük ofisler için",
      price: "Demo sonrası fiyatlandırılır",
      features: [
        "1-3 kullanıcı",
        "Portföy yönetimi",
        "Müşteri yönetimi",
        "Temel talep takibi",
        "Temel raporlar",
        "Subdomain kullanımı",
        "E-posta destek",
      ],
    },
    {
      name: "Profesyonel",
      badge: "En çok tercih edilen kurgu",
      target: "Büyüyen emlak ofisleri için",
      price: "Aylık paket modeli",
      features: [
        "5-15 kullanıcı",
        "Gelişmiş portföy yönetimi",
        "Talep eşleştirme",
        "Randevu ve görev yönetimi",
        "Satış pipeline",
        "Danışman performans raporları",
        "PDF portföy sunumları",
        "Komisyon takibi",
        "Öncelikli destek",
      ],
    },
    {
      name: "Kurumsal",
      badge: null,
      target: "Broker ekipleri ve franchise yapıları için",
      price: "İhtiyaca göre tekliflendirilir",
      features: [
        "Çoklu kullanıcı desteği",
        "Çoklu ofis desteği",
        "Rol ve yetki yönetimi",
        "Gelişmiş raporlama",
        "Özel domain desteği",
        "Eğitim ve onboarding",
        "Özel geliştirme opsiyonu",
        "Premium destek",
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
};
