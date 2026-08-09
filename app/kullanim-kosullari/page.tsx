import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const canonicalUrl = `${siteConfig.siteUrl}/kullanim-kosullari`;

export const metadata: Metadata = {
  title: `Kullanım Koşulları | ${siteConfig.productName}`,
  description:
    "Emlak CRM Pro web sitesi ve hizmetinin kullanımına ilişkin Kullanım Koşulları.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `Kullanım Koşulları | ${siteConfig.productName}`,
    description:
      "Emlak CRM Pro web sitesi ve hizmetinin kullanımına ilişkin Kullanım Koşulları.",
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function KullanimKosullariPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <div className="section">
            <div className="mx-auto max-w-2xl">
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
                Kullanım Koşulları
              </h1>

              <div className="prose-post mt-8 text-[15.5px] leading-relaxed text-slate-700 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-brand [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
                <h2>2.1 Taraflar ve Kabul</h2>
                <p>
                  Bu Kullanım Koşulları, Emlak CRM Pro hizmetini sunan Tan Yasan
                  Reklam ve Tasarım Ajansı (&ldquo;Hizmet Sağlayıcı&rdquo;) ile
                  web sitesini ziyaret eden, demo talep eden veya hizmeti
                  kullanan gerçek/tüzel kişi (&ldquo;Kullanıcı&rdquo;) arasındaki
                  ilişkiyi düzenler. Siteyi kullanan veya demo talep eden
                  Kullanıcı, bu koşulları kabul etmiş sayılır.
                </p>

                <h2>2.2 Hizmetin Tanımı</h2>
                <p>
                  Emlak CRM Pro, gayrimenkul ofisleri için portföy, müşteri,
                  talep, danışman performansı ve satış süreçlerinin tek panelden
                  yönetilmesini sağlayan web tabanlı bir CRM (Müşteri İlişkileri
                  Yönetimi) yazılımıdır. Hizmet, aylık abonelik modeliyle sunulur.
                </p>

                <h2>2.3 Fikri Mülkiyet</h2>
                <p>
                  Site içeriği, tasarımı, logosu, yazılım kodu ve CRM
                  ürününün tüm bileşenleri Tan Yasan Reklam ve Tasarım
                  Ajansı&apos;na aittir veya tarafına lisanslanmıştır. Kullanıcı,
                  önceden yazılı izin olmaksızın bu içerikleri kopyalayamaz,
                  çoğaltamaz veya ticari amaçla kullanamaz.
                </p>

                <h2>2.4 Kullanıcı Yükümlülükleri</h2>
                <p>
                  Kullanıcı, demo talep formu ve diğer iletişim kanalları
                  üzerinden doğru ve güncel bilgi vermekle, siteyi ve hizmeti
                  kötüye kullanmamakla (spam, yetkisiz erişim denemesi, sistemin
                  işleyişini bozacak eylemler vb.) yükümlüdür.
                </p>

                <h2>2.5 Sorumluluk Sınırlaması</h2>
                <p>
                  [DOLDURUN — bu bölüm şirketi hukuki risklerden koruyacak
                  şekilde kaleme alınmalıdır; bir hukuk danışmanına
                  onaylatılması önerilir. Genel bir taslak: &ldquo;Hizmet
                  Sağlayıcı, sitenin veya CRM hizmetinin kesintisiz, hatasız
                  çalışacağını garanti etmez. Hizmetin kullanımından
                  doğabilecek dolaylı zararlardan Hizmet Sağlayıcı sorumlu
                  tutulamaz.&rdquo; — ancak bu ifadeler nihai kullanım öncesi
                  mutlaka gözden geçirilmelidir.]
                </p>

                <h2>2.6 Değişiklikler ve Yürürlük</h2>
                <p>
                  Hizmet Sağlayıcı, bu Kullanım Koşulları&apos;nı önceden
                  bildirimde bulunmaksızın güncelleme hakkını saklı tutar.
                  Güncel metin, sitede yayınlandığı andan itibaren yürürlüğe
                  girer. Bu metin 9 Ağustos 2026 tarihinden itibaren geçerlidir.
                </p>

                <h2>2.7 Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
                <p>
                  Bu Kullanım Koşulları&apos;ndan doğabilecek uyuşmazlıklarda
                  Türkiye Cumhuriyeti hukuku uygulanır; Antalya Mahkemeleri ve
                  İcra Daireleri yetkilidir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
