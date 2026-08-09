import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const canonicalUrl = `${siteConfig.siteUrl}/kvkk`;

export const metadata: Metadata = {
  title: `KVKK Aydınlatma Metni | ${siteConfig.productName}`,
  description:
    "Emlak CRM Pro demo talep formu üzerinden toplanan kişisel verilerin işlenmesine ilişkin KVKK Aydınlatma Metni.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `KVKK Aydınlatma Metni | ${siteConfig.productName}`,
    description:
      "Emlak CRM Pro demo talep formu üzerinden toplanan kişisel verilerin işlenmesine ilişkin KVKK Aydınlatma Metni.",
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function KvkkPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <div className="section">
            <div className="mx-auto max-w-2xl">
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
                KVKK Aydınlatma Metni
              </h1>

              <div className="prose-post mt-8 text-[15.5px] leading-relaxed text-slate-700 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-brand [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
                <h2>1.1 Veri Sorumlusu Kimliği</h2>
                <p>Unvan: Tan Yasan Reklam ve Tasarım Ajansı</p>
                <p>Adres: Hurma Mh. 255 Sk. No:37 B Blok D:7 Konyaaltı/Antalya</p>
                <p>
                  E-posta:{" "}
                  <a href="mailto:kvkk@emlakcrmpro.com">kvkk@emlakcrmpro.com</a>
                </p>
                <p>Vergi/T.C. No: 32440333462</p>

                <h2>1.2 İşlenen Kişisel Veri Kategorileri</h2>
                <p>Demo talep formu (/#demo) üzerinden toplanan veriler:</p>
                <ul>
                  <li>Ad Soyad</li>
                  <li>Firma Adı (ofis adı)</li>
                  <li>Telefon numarası</li>
                  <li>E-posta adresi</li>
                  <li>Şehir</li>
                  <li>Danışman sayısı (seçim listesi)</li>
                  <li>Mesaj (opsiyonel, serbest metin)</li>
                </ul>
                <p>
                  Çerez/analitik veriler: Sitede şu an aktif bir analitik/izleme
                  altyapısı (Google Analytics, GTM, Meta Pixel) bulunmamaktadır.
                  İleride aktive edilirse bu bölüm ve çerez rıza mekanizması
                  güncellenmelidir.
                </p>
                <p>
                  Sunucu logları / IP adresi: Vercel altyapısı üzerinden otomatik
                  olarak toplanır (barındırma sağlayıcısının standart erişim
                  logları).
                </p>

                <h2>1.3 Kişisel Verilerin İşlenme Amacı</h2>
                <p>
                  Toplanan veriler yalnızca; demo talebine yanıt vermek, ofis
                  ihtiyacına uygun CRM demosu planlamak ve talep eden kişiyle
                  iletişime geçmek amacıyla işlenir. İşleme, KVKK madde 5/2-(c)
                  kapsamında &ldquo;bir sözleşmenin kurulması veya ifasıyla
                  doğrudan doğruya ilgili olması&rdquo; ve/veya 5/2-(f)
                  &ldquo;ilgili kişinin temel hak ve özgürlüklerine zarar
                  vermemek kaydıyla veri sorumlusunun meşru menfaati&rdquo;
                  şartına dayanmaktadır.
                </p>

                <h2>1.4 Kişisel Verilerin Aktarıldığı Taraflar</h2>
                <p>
                  Bu proje kapsamında demo talep formu verileri şu alt işleyiciye
                  (data processor) aktarılır:
                </p>
                <ul>
                  <li>
                    E-posta gönderimi: Resend (resend.com) — form verileri,
                    bildirim amacıyla tek bir e-posta olarak Resend altyapısı
                    üzerinden crm@emlakcrmpro.com adresine iletilir.
                  </li>
                  <li>
                    Barındırma: Vercel — form verisi, işlenme sürecinde
                    Vercel&apos;in sunucu altyapısı üzerinden geçer (sunucu
                    logları dahil).
                  </li>
                  <li>
                    Form verisi hiçbir veritabanına kaydedilmez ve
                    RealtyWorld-CRM/Supabase sistemine aktarılmaz — bu iki proje
                    tamamen bağımsızdır.
                  </li>
                  <li>
                    Form verisi başka hiçbir üçüncü taraf servise (webhook,
                    analytics, reklam platformu vb.) gönderilmez.
                  </li>
                </ul>

                <h2>1.5 Kişisel Verilerin Saklama Süresi</h2>
                <p>
                  Demo talep formu üzerinden gönderilen veriler herhangi bir
                  veritabanında saklanmaz; yalnızca crm@emlakcrmpro.com adresine
                  bir e-posta bildirimi olarak iletilir. Saklama süresi, bu
                  mailbox&apos;taki (Hostinger) silme pratiğinize bağlıdır.
                  Resend tarafında da gönderim logları belirli bir süre (plana
                  göre değişir, Resend Dashboard → Logs bölümünden teyit
                  edilebilir) tutulabilir.
                </p>

                <h2>1.6 Veri Sahibinin Hakları (KVKK md.11)</h2>
                <p>
                  Kişisel verileri işlenen kişi, veri sorumlusuna başvurarak
                  kendisiyle ilgili;
                </p>
                <ul>
                  <li>Kişisel verisinin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>
                    İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını
                    öğrenme
                  </li>
                  <li>Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                  <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
                  <li>Silinmesini/yok edilmesini isteme</li>
                  <li>
                    Düzeltme/silme işlemlerinin aktarıldığı üçüncü kişilere
                    bildirilmesini isteme
                  </li>
                  <li>
                    İşlenen verinin münhasıran otomatik sistemlerle analiz
                    edilmesi suretiyle aleyhine bir sonucun ortaya çıkmasına
                    itiraz etme
                  </li>
                  <li>
                    Kanuna aykırı işleme nedeniyle zarara uğraması halinde
                    zararın giderilmesini talep etme
                  </li>
                </ul>
                <p>
                  haklarına sahiptir. Başvurular{" "}
                  <a href="mailto:kvkk@emlakcrmpro.com">kvkk@emlakcrmpro.com</a>{" "}
                  adresine iletilebilir.
                </p>

                <h2>1.7 Çerez Politikası</h2>
                <p>
                  Bu web sitesi şu anda çerez tabanlı bir analitik veya reklam
                  takip sistemi (Google Analytics, GTM, Meta Pixel vb.)
                  kullanmamaktadır. Yalnızca sitenin temel çalışması için gerekli
                  olabilecek teknik çerezler (varsa) kullanılabilir.
                  Analitik/reklam takip altyapısı ileride aktive edildiğinde, bu
                  politika güncellenecek ve kullanıcılardan gerekli çerez rızası
                  alınacaktır.
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
