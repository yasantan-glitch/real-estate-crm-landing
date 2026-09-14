/**
 * Şehir bazlı landing page içerikleri.
 * PainPoint ve RelevantFeature şekilleri content/use-cases.ts'ten yeniden
 * kullanılır — aynı kart görünümünü paylaşırlar, kopyalanmazlar.
 * `cities` bilinçli olarak bir dizi + slug alanı olarak tasarlandı: ileride
 * çok şehir eklenip app/sehir/[slug]/page.tsx'e geçilirse (bkz. plan),
 * generateStaticParams() doğrudan cities.map(c => ({ slug: c.slug })) olur.
 */

import type { PainPoint, RelevantFeature } from "@/content/use-cases";
import type { FaqItem } from "@/lib/jsonld";

export interface MarketContextPoint {
  title: string;
  description: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface CityPageContent {
  slug: string;
  cityName: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  intro: string;
  districts: string[];
  marketContext: {
    title: string;
    items: MarketContextPoint[];
  };
  painPoints: PainPoint[];
  relevantFeatures: RelevantFeature[];
  relatedLinks: RelatedLink[];
  faq: FaqItem[];
  cta: { title: string; text: string; label: string; href: string };
}

export const cities: CityPageContent[] = [
  {
    slug: "antalya",
    cityName: "Antalya",
    seo: {
      title: "Antalya Emlak Ofisleri İçin CRM — Emlak CRM Pro",
      description:
        "Antalya'da faaliyet gösteren emlak ofisleri ve danışmanları için portföy, müşteri ve sezonsal kiralama takibini tek panelde toplayan CRM.",
    },
    eyebrow: "Antalya",
    h1: "Antalya'daki Emlak Ofisleri İçin CRM",
    intro:
      "Antalya, hem yerleşik nüfusun hem de turizm ve yabancı yatırımın iç içe geçtiği bir emlak pazarı. Konyaaltı'ndan Kepez'e, Lara'dan Döşemealtı'na uzanan geniş bir bölgede portföy ve talep yönetmek, tek bir merkezi sistem olmadan zamanla dağınıklaşır. Emlak CRM Pro, Antalya'da çalışan bireysel danışmanlardan çok şubeli ofislere kadar bu operasyonu tek panelde toplar.",
    districts: ["Konyaaltı", "Muratpaşa", "Lara", "Kepez", "Döşemealtı"],
    marketContext: {
      title: "Antalya Emlak Piyasasında Dikkat Edilmesi Gereken Dinamikler",
      items: [
        {
          title: "Sezonsal kiralama talebi",
          description:
            "Yaz aylarında kısa dönem kiralık talebi belirgin şekilde artar; bu dönemde kısa dönem ve uzun dönem kiralık portföylerin ayrı ayrı, net biçimde takip edilmesi gerekir. Sezon dışında aynı portföyün uzun dönem kiraya çevrilmesi de sık karşılaşılan bir senaryodur.",
        },
        {
          title: "Yabancı alıcı süreci",
          description:
            "Antalya'da yabancı uyruklu alıcılara satış, yerli işlemlere kıyasla ek belge takibi, dil desteği ve zaman zaman uzaktan (yurt dışından) iletişim gerektirir. Bu sürecin CRM üzerinde ayrı ayrı izlenmesi, danışmanın hangi dosyada hangi adımda olunduğunu unutmasını engeller.",
        },
        {
          title: "Çok ilçeli portföy yönetimi",
          description:
            "Konyaaltı'ndan Kepez'e geniş bir coğrafyaya yayılan portföyler ilçe bazında dağınık takip edildiğinde bütünsel bir görünüm kaybolur. Portföylerin bölge/ilçe bilgisiyle merkezi bir sistemde kayıtlı olması, hem danışman hem broker için işi kolaylaştırır.",
        },
      ],
    },
    painPoints: [
      {
        title: "Sezonluk talep artışında sistem yetişmiyor",
        description:
          "Yaz aylarında kısa dönem kiralık talebi hızla artınca, Excel veya WhatsApp üzerinden takip edilen portföyler karışır; hangi dairenin hangi tarihte dolu, hangi tarihte boş olduğu net değildir.",
      },
      {
        title: "Yabancı müşteri süreçleri dosya dosya takip ediliyor",
        description:
          "Yabancı alıcı dosyaları genellikle ayrı notlarda, farklı danışmanların hafızasında tutulur; hangi belgenin tamamlandığı, hangi adımın beklediği net görünmez.",
      },
      {
        title: "İlçeler arası portföy görünürlüğü yok",
        description:
          "Bir ilçede alınan portföy, başka bir ilçede çalışan danışmanın haberi olmadan aylarca elde kalabilir; ofis genelinde tek bir portföy görünümü olmadığında fırsatlar kaçar.",
      },
    ],
    relevantFeatures: [
      {
        title: "Portföy Yönetimi",
        description:
          "Satılık/kiralık tüm portföyler; ilçe, durum, fiyat ve danışman bilgisiyle tek yerde — sezon başında/sonunda kiralama tipini güncellemek dahil.",
        href: "/ozellikler",
      },
      {
        title: "Müşteri-Portföy Eşleştirme",
        description:
          "Yeni bir portföy girildiğinde, hangi ilçede olursa olsun uygun taleplerle otomatik eşleştirilir.",
        href: "/ozellikler",
      },
      {
        title: "Müşteri Yönetimi",
        description:
          "Yabancı alıcı dosyaları dahil her müşterinin süreci, notları ve görüşme geçmişi kayıt altında.",
        href: "/ozellikler",
      },
      {
        title: "Broker Paneli",
        description:
          "Birden fazla ilçede çalışan ekibin tüm portföy ve talep görünümü tek panelde.",
        href: "/ozellikler",
      },
    ],
    relatedLinks: [
      {
        label: "Kira Getirisi Hesaplama aracı",
        href: "/araclar/kira-getirisi-hesaplama",
      },
      {
        label: "Emlak ofisleri için CRM",
        href: "/kimler-icin/emlak-ofisi",
      },
      {
        label: "Ağustos 2026 kira artış oranı yazısı",
        href: "/blog/agustos-2026-kira-artis-orani",
      },
    ],
    faq: [
      {
        q: "Antalya'da birden fazla ilçede portföyüm var, tek sistemde yönetebilir miyim?",
        a: "Evet. Portföyler ilçe bilgisiyle kaydedilir ve tüm ilçelerdeki kayıtlar tek panelden görüntülenir.",
      },
      {
        q: "Kısa dönem ve uzun dönem kiralık portföyleri ayrı takip edebilir miyim?",
        a: "Evet. Her portföyün kiralama tipini (kısa/uzun dönem) durum bilgisiyle işaretleyip buna göre filtreleyebilirsiniz.",
      },
      {
        q: "Yabancı müşterilerle ilgili süreçleri sistemde takip edebilir miyim?",
        a: "Evet. Müşteri kayıtlarına notlar ve görüşme geçmişi eklenebilir; bu, yabancı alıcı dosyalarının aşamasını takip etmek için de kullanılabilir.",
      },
      {
        q: "Antalya dışında şubem varsa yine kullanabilir miyim?",
        a: "Evet, sistem web tabanlıdır ve Türkiye genelinde herhangi bir şehirden erişilebilir; Antalya'ya özgü bir kısıtlama yoktur.",
      },
    ],
    cta: {
      title: "Antalya'daki ofisiniz için sistemi görün.",
      text: "Formu doldurun, bölgenizdeki portföy ve talep yönetimine özel kısa bir demo planlayalım.",
      label: "Demo Talep Et",
      href: "/demo-talep",
    },
  },
];
