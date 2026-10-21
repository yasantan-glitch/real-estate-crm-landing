/**
 * Antalya ilçe sayfaları (/antalya/[ilce]).
 * CityPageContent şeklini paylaşır; ilçeye özgü içerik burada, şablon ortaktır.
 * NOT: Mahalle/bölge adları ve piyasa notları genel bilgi düzeyindedir;
 * yayından önce yerel bilgiyle gözden geçirilmelidir.
 */

import type { CityPageContent } from "@/content/cities";

const sharedFeatures = (district: string, extra: string): CityPageContent["relevantFeatures"] => [
  {
    title: "Portföy Yönetimi",
    description: `${district} portföylerinizi mahalle, durum, fiyat ve danışman bilgisiyle tek yerde tutun. ${extra}`,
    href: "/ozellikler",
  },
  {
    title: "Müşteri-Portföy Eşleştirme",
    description: `${district}'de yeni bir portföy girdiğinizde uygun taleplerle otomatik eşleştirilir.`,
    href: "/ozellikler",
  },
  {
    title: "Müşteri Yönetimi",
    description: "Her müşterinin süreci, notları ve görüşme geçmişi kayıt altında; takip eksikliği kalmaz.",
    href: "/ozellikler",
  },
  {
    title: "Broker Paneli",
    description: "Ofis genelindeki portföy, talep ve danışman performansı tek panelde.",
    href: "/ozellikler",
  },
];

export const antalyaDistricts: CityPageContent[] = [
  {
    slug: "muratpasa",
    cityName: "Muratpaşa",
    seo: {
      title: "Muratpaşa Emlak Ofisleri İçin CRM — Emlak CRM Pro",
      description:
        "Muratpaşa, Lara ve Kaleiçi çevresinde çalışan emlak ofisleri için portföy, talep ve kiralama takibini tek panelde toplayan CRM.",
    },
    eyebrow: "Antalya · Muratpaşa",
    h1: "Muratpaşa'daki Emlak Ofisleri İçin CRM",
    intro:
      "Muratpaşa, Antalya'nın merkez ilçesi: yerleşik konut talebi, Lara çevresindeki turizm ve yatırımcı ilgisi ve Kaleiçi gibi bölgelerdeki farklı portföy tipleri aynı ilçede bir arada. Bu çeşitlilik, portföy ve talepleri mahalle bazında düzenli tutmayı zorlaştırır. Emlak CRM Pro, Muratpaşa'da çalışan danışman ve ofislerin bu akışı tek panelden yönetmesini sağlar.",
    districts: ["Lara", "Kaleiçi", "Güzeloba", "Fener", "Meltem", "Şirinyalı"],
    marketContext: {
      title: "Muratpaşa'da Dikkat Edilmesi Gereken Dinamikler",
      items: [
        {
          title: "Mahalleye göre değişen portföy tipi",
          description:
            "Lara çevresi, Kaleiçi ve merkezdeki yerleşik mahalleler farklı müşteri profillerine hitap eder. Portföyleri mahalle ve tip bilgisiyle kaydetmek, doğru müşteriyle doğru portföyü eşleştirmeyi kolaylaştırır.",
        },
        {
          title: "Yatırımcı ve yabancı alıcı ilgisi",
          description:
            "Turizm bölgelerine yakın portföylerde yatırımcı ve yurt dışından gelen alıcılarla iletişim uzun sürebilir. Görüşme geçmişinin kayıt altında olması süreci kopmadan sürdürmeyi sağlar.",
        },
        {
          title: "Kiralık ve satılık taleplerin birlikte yürümesi",
          description:
            "Merkez ilçede hem kiralık hem satılık talepler yoğun akar. İkisinin ayrı ayrı ve güncel takip edilmesi, geri dönüş sürelerini kısaltır.",
        },
      ],
    },
    painPoints: [
      {
        title: "Mahalle bazında portföy görünürlüğü yok",
        description:
          "Portföyler not defterlerinde veya WhatsApp gruplarında tutulduğunda, hangi mahallede hangi portföyün elde olduğu ekip içinde net görünmez.",
      },
      {
        title: "Gelen talepler geç yanıtlanıyor",
        description:
          "İlan ve sosyal medya üzerinden gelen talepler farklı yerlerde dağınık kalır; geri dönüş gecikir ve müşteri başka ofise yönelir.",
      },
      {
        title: "Müşteri geçmişi danışmanın hafızasında kalıyor",
        description:
          "Danışman değiştiğinde ya da uzun süre geçtiğinde, müşteriyle yapılan görüşmeler ve verilen sözler kaybolur.",
      },
    ],
    relevantFeatures: sharedFeatures("Muratpaşa", "Kısa ve uzun dönem kiralıkları ayrı işaretleyebilirsiniz."),
    relatedLinks: [
      { label: "Antalya emlak ofisleri için CRM", href: "/antalya" },
      { label: "Kira Getirisi Hesaplama aracı", href: "/araclar/kira-getirisi-hesaplama" },
      { label: "Komisyon Hesaplama aracı", href: "/araclar/komisyon-hesaplama" },
    ],
    faq: [
      {
        q: "Muratpaşa'daki portföylerimi mahalle bazında ayırabilir miyim?",
        a: "Evet. Portföyler bölge/mahalle bilgisiyle kaydedilir ve bu bilgiye göre filtrelenebilir.",
      },
      {
        q: "Kiralık ve satılık talepleri aynı sistemde takip edebilir miyim?",
        a: "Evet. Her talep tipiyle kaydedilir ve uygun portföylerle eşleştirilir.",
      },
      {
        q: "Ofisimde birden fazla danışman var, herkes aynı veriyi görebilir mi?",
        a: "Evet. Rol yönetimiyle her kullanıcının neyi göreceği ayarlanır; broker tüm ofisi tek panelden izler.",
      },
    ],
    cta: {
      title: "Muratpaşa'daki ofisiniz için sistemi görün.",
      text: "Formu doldurun, ofisinizin akışına göre kısa bir demo planlayalım.",
      label: "Demo Talep Et",
      href: "/demo-talep",
    },
  },
  {
    slug: "konyaalti",
    cityName: "Konyaaltı",
    seo: {
      title: "Konyaaltı Emlak Ofisleri İçin CRM — Emlak CRM Pro",
      description:
        "Konyaaltı'nda çalışan emlak ofisleri için sezonluk ve yıllık kiralama, satılık portföy ve müşteri takibini tek panelde toplayan CRM.",
    },
    eyebrow: "Antalya · Konyaaltı",
    h1: "Konyaaltı'ndaki Emlak Ofisleri İçin CRM",
    intro:
      "Konyaaltı, sahil şeridi, yerleşik mahalleleri ve yazlık konut talebiyle Antalya'nın en hareketli emlak bölgelerinden biri. Sezona göre değişen kiralık talebi ve satılık portföylerin birlikte yürümesi, takip sistemi olmayan ofislerde kolayca karışır. Emlak CRM Pro, Konyaaltı'nda çalışan danışman ve ofislere portföy, talep ve müşteri geçmişini tek yerden yönetme imkânı verir.",
    districts: ["Liman", "Hurma", "Uncalı", "Arapsuyu", "Gürsu"],
    marketContext: {
      title: "Konyaaltı'nda Dikkat Edilmesi Gereken Dinamikler",
      items: [
        {
          title: "Sezonluk kiralama hareketliliği",
          description:
            "Yaz aylarında kısa dönem kiralık talebi artar, sezon dışında aynı portföy yıllık kiraya dönebilir. Kiralama tipinin güncel tutulması, boş ve dolu portföyü karıştırmamanın ilk şartıdır.",
        },
        {
          title: "Yazlık ve yıllık oturum taleplerinin ayrışması",
          description:
            "Bölgede hem yazlık hem yıl boyu oturum amacıyla gelen müşteriler vardır. Talebin amacını kayıt altına almak, doğru portföyü önermeyi kolaylaştırır.",
        },
        {
          title: "Uzaktan iletişim kuran müşteriler",
          description:
            "Şehir dışından veya yurt dışından gelen müşterilerle iletişim zamana yayılır. Görüşme geçmişi ve notlar kayıtlıysa süreç kopmadan devam eder.",
        },
      ],
    },
    painPoints: [
      {
        title: "Sezon geçişlerinde portföy durumu karışıyor",
        description:
          "Kısa dönem ve yıllık kiralık portföylerin durumu elle takip edildiğinde, hangi portföyün müsait olduğu net olmaz.",
      },
      {
        title: "Uzak müşteriyle görüşmeler dağınık kalıyor",
        description:
          "Mesajlaşma ve aramalar farklı uygulamalara dağıldığında, müşteriyle nerede kalındığı bulunamaz.",
      },
      {
        title: "Aynı portföy için tekrar tekrar arama yapılıyor",
        description:
          "Portföy güncel durumu merkezi bir yerde tutulmadığında, ekip aynı müşteriyi ve mal sahibini birden fazla kez arar.",
      },
    ],
    relevantFeatures: sharedFeatures("Konyaaltı", "Sezon başında ve sonunda kiralama tipini hızla güncelleyin."),
    relatedLinks: [
      { label: "Antalya emlak ofisleri için CRM", href: "/antalya" },
      { label: "Kira Getirisi Hesaplama aracı", href: "/araclar/kira-getirisi-hesaplama" },
      { label: "Tapu Harcı Hesaplama aracı", href: "/araclar/tapu-harci-hesaplama" },
    ],
    faq: [
      {
        q: "Kısa dönem ve yıllık kiralık portföylerimi ayrı işaretleyebilir miyim?",
        a: "Evet. Her portföyün kiralama tipi ve durumu kayıtlıdır; buna göre filtreleyebilirsiniz.",
      },
      {
        q: "Şehir dışındaki müşterilerimle yaptığım görüşmeleri kaydedebilir miyim?",
        a: "Evet. Müşteri kaydına notlar ve görüşme geçmişi eklenir; kayıtlar tüm ekip tarafından (yetkiye göre) görülebilir.",
      },
      {
        q: "Mobil cihazdan kullanabilir miyim?",
        a: "Sistem web tabanlıdır; internet bağlantısı olan her cihazın tarayıcısından erişebilirsiniz.",
      },
    ],
    cta: {
      title: "Konyaaltı'ndaki ofisiniz için sistemi görün.",
      text: "Formu doldurun, ofisinizin akışına göre kısa bir demo planlayalım.",
      label: "Demo Talep Et",
      href: "/demo-talep",
    },
  },
  {
    slug: "kepez",
    cityName: "Kepez",
    seo: {
      title: "Kepez Emlak Ofisleri İçin CRM — Emlak CRM Pro",
      description:
        "Kepez'de çalışan emlak ofisleri için konut portföyü, talep ve müşteri takibini tek panelde toplayan, ekip kullanımına uygun CRM.",
    },
    eyebrow: "Antalya · Kepez",
    h1: "Kepez'deki Emlak Ofisleri İçin CRM",
    intro:
      "Kepez, Antalya'nın nüfusu yoğun ilçelerinden biri ve konut hareketliliği yıl boyu sürüyor. Yüksek talep ve çok sayıda portföy, takip sistemi olmayan ofislerde hızla yönetilemez hale gelir. Emlak CRM Pro, Kepez'de çalışan danışman ve ofislere portföy, talep ve müşteri görüşmelerini tek panelde, ekip içinde paylaşılır şekilde yönetme imkânı verir.",
    districts: ["Varsak", "Fabrikalar", "Düden", "Güneş", "Altınova"],
    marketContext: {
      title: "Kepez'de Dikkat Edilmesi Gereken Dinamikler",
      items: [
        {
          title: "Yıl boyu süren konut talebi",
          description:
            "Yerleşik nüfusun yoğun olduğu bölgede satılık ve kiralık konut talebi mevsimden bağımsız akar. Gelen taleplerin düzenli kaydı ve hızlı geri dönüş, ofisler arası farkı belirler.",
        },
        {
          title: "Çok sayıda portföy, çok sayıda görüşme",
          description:
            "Yüksek hacimli çalışmada hangi portföyün ne durumda olduğunu ve hangi müşteriyle nerede kalındığını hafızadan takip etmek mümkün değildir.",
        },
        {
          title: "Mahalleye göre değişen müşteri beklentisi",
          description:
            "Mahallelere göre farklılaşan bütçe ve konut beklentileri, portföyleri mahalle bilgisiyle sınıflandırmayı değerli kılar.",
        },
      ],
    },
    painPoints: [
      {
        title: "Yoğun talep akışı takip edilemiyor",
        description:
          "Telefon, mesaj ve ilan üzerinden gelen çok sayıda talep farklı kanallarda dağınık kalır; kimin dönüş yapacağı belli olmaz.",
      },
      {
        title: "Portföy güncel durumu ekipte farklı biliniyor",
        description:
          "Satılan ya da kiralanan bir portföyün hâlâ ilanda görünmesi ve ekipte farklı bilinmesi zaman ve güven kaybettirir.",
      },
      {
        title: "Danışman performansı görünmüyor",
        description:
          "Kim kaç görüşme yaptı, kaç portföy aldı sorusunun cevabı elle toplandığında geç ve eksik gelir.",
      },
    ],
    relevantFeatures: sharedFeatures("Kepez", "Satılan portföyü anında işaretleyip ekibin aynı bilgiyi görmesini sağlayın."),
    relatedLinks: [
      { label: "Antalya emlak ofisleri için CRM", href: "/antalya" },
      { label: "Komisyon Hesaplama aracı", href: "/araclar/komisyon-hesaplama" },
      { label: "Emlak ofisleri için CRM", href: "/fiyatlandirma#emlak-ofisi" },
    ],
    faq: [
      {
        q: "Çok sayıda danışmanı olan bir ofiste kullanılabilir mi?",
        a: "Evet. Rol yönetimiyle her danışmanın görebileceği veri ayarlanır; broker tüm ofisi tek panelden izler.",
      },
      {
        q: "Portföy ve talepleri mahalle bazında filtreleyebilir miyim?",
        a: "Evet. Portföyler bölge/mahalle bilgisiyle kaydedilir ve bu bilgiye göre filtrelenebilir.",
      },
      {
        q: "Mevcut portföy ve müşteri listemi sisteme aktarabilir miyim?",
        a: "Kurulum sürecinde mevcut listenizi nasıl aktaracağımızı sizinle birlikte planlıyoruz; ayrıntı için bizimle iletişime geçebilirsiniz.",
      },
    ],
    cta: {
      title: "Kepez'deki ofisiniz için sistemi görün.",
      text: "Formu doldurun, ofisinizin akışına göre kısa bir demo planlayalım.",
      label: "Demo Talep Et",
      href: "/demo-talep",
    },
  },
];
