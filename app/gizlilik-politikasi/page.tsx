import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const canonicalUrl = `${siteConfig.siteUrl}/gizlilik-politikasi`;

export const metadata: Metadata = {
  title: `Gizlilik Politikası | ${siteConfig.productName}`,
  description:
    "Emlak CRM Pro web sitesi ve CRM uygulamasının kişisel verileri nasıl topladığı, kullandığı, sakladığı ve Google hesap entegrasyonlarında (Google Calendar) hangi verilere eriştiği hakkında Gizlilik Politikası.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `Gizlilik Politikası | ${siteConfig.productName}`,
    description:
      "Emlak CRM Pro'nun kişisel verileri nasıl işlediği ve Google entegrasyonlarında hangi verilere eriştiği hakkında Gizlilik Politikası.",
    url: canonicalUrl,
    siteName: siteConfig.productName,
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <div className="section">
            <div className="mx-auto max-w-2xl">
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
                Gizlilik Politikası
              </h1>
              <p className="mt-3 text-sm text-slate-500">
                Son güncelleme: 27 Eylül 2026
              </p>

              <div className="prose-post mt-8 text-[15.5px] leading-relaxed text-slate-700 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-brand [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
                <p>
                  Bu Gizlilik Politikası, Tan Yasan Reklam ve Tasarım Ajansı
                  (&ldquo;biz&rdquo;, &ldquo;Hizmet Sağlayıcı&rdquo;) tarafından
                  işletilen <strong>Emlak CRM Pro</strong> markası altındaki iki
                  ayrı ürünü kapsar:
                </p>
                <ul>
                  <li>
                    <strong>www.emlakcrmpro.com</strong> tanıtım (pazarlama)
                    web sitesi ve demo talep formu, ve
                  </li>
                  <li>
                    <strong>Emlak CRM Pro</strong> gayrimenkul ofisleri için web
                    tabanlı CRM uygulaması (abonelik müşterilerinin oturum açarak
                    kullandığı yazılım).
                  </li>
                </ul>

                <h2>1. Veri Sorumlusu Kimliği</h2>
                <p>Unvan: Tan Yasan Reklam ve Tasarım Ajansı</p>
                <p>Adres: Hurma Mh. 255 Sk. No:37 B Blok D:7 Konyaaltı/Antalya</p>
                <p>
                  E-posta:{" "}
                  <a href="mailto:kvkk@emlakcrmpro.com">kvkk@emlakcrmpro.com</a>
                </p>
                <p>Vergi/T.C. No: 32440333462</p>

                <h2>2. Tanıtım Sitesi ve Demo Talep Formu</h2>
                <p>
                  www.emlakcrmpro.com üzerindeki demo talep formu (/#demo)
                  aracılığıyla ad soyad, firma adı, telefon numarası, e-posta
                  adresi, şehir, danışman sayısı ve isteğe bağlı bir mesaj
                  toplanır. Bu veriler yalnızca demo talebine yanıt vermek ve
                  ofis ihtiyacına uygun bir CRM demosu planlamak amacıyla
                  işlenir; herhangi bir veritabanında saklanmaz, yalnızca{" "}
                  <a href="mailto:crm@emlakcrmpro.com">crm@emlakcrmpro.com</a>{" "}
                  adresine bildirim e-postası olarak iletilir (Resend altyapısı
                  üzerinden). Site şu anda Google Analytics, GTM veya Meta Pixel
                  gibi bir analitik/izleme çerezi kullanmamaktadır. Sunucu
                  logları/IP adresleri, barındırma sağlayıcımız Vercel
                  tarafından standart erişim logu olarak otomatik toplanır.
                </p>
                <p>
                  Bu bölümün daha ayrıntılı KVKK Aydınlatma Metni için ayrıca{" "}
                  <a href="/kvkk">KVKK Aydınlatma Metni</a> sayfamıza
                  bakabilirsiniz.
                </p>

                <h2>3. Emlak CRM Pro Uygulaması (Abonelik Müşterileri)</h2>
                <p>
                  Emlak CRM Pro, gayrimenkul ofislerinin (&ldquo;organizasyon&rdquo;)
                  portföy, müşteri, talep, randevu ve muhasebe süreçlerini
                  yönetmesi için sunulan çok kiracılı (multi-tenant) bir SaaS
                  uygulamasıdır. Uygulamayı kullanan ofis çalışanları
                  (danışman, asistan, yönetici, broker) hesap oluşturur ve
                  kendi organizasyonlarına ait verileri (müşteri kayıtları,
                  portföyler, talepler, görüşme notları, randevular, muhasebe
                  kayıtları) sisteme girer.
                </p>
                <ul>
                  <li>
                    Veriler, veritabanı sağlayıcımız Supabase (PostgreSQL)
                    üzerinde, satır düzeyinde güvenlik (Row Level Security)
                    politikalarıyla organizasyon bazında izole şekilde
                    saklanır. Bir organizasyonun kullanıcıları başka bir
                    organizasyonun verilerine erişemez.
                  </li>
                  <li>
                    Uygulama, Vercel altyapısında barındırılır.
                  </li>
                  <li>
                    Müşteri/portföy/talep verileri, aboneliği yöneten ofisin
                    mülkiyetindedir; Hizmet Sağlayıcı bu verileri pazarlama
                    amacıyla kullanmaz veya üçüncü taraflara satmaz.
                  </li>
                  <li>
                    Bir aboneliğin sona ermesi durumunda veriler, ofisin
                    talebi doğrultusunda makul bir süre içinde silinir.
                  </li>
                </ul>

                <h2>4. Google Hesabı Entegrasyonu (Google Calendar Senkronizasyonu)</h2>
                <p>
                  Emlak CRM Pro, kullanıcıların isteğe bağlı olarak kendi Google
                  hesaplarını bağlayarak CRM içindeki randevu ve görevlerini
                  kendi Google Takvim&apos;lerine otomatik olarak
                  senkronize edebilmesini sağlayan bir özellik sunar. Bu
                  entegrasyon tamamen isteğe bağlıdır (opt-in) ve yalnızca
                  kullanıcı Ayarlar sayfasından &ldquo;Google Takvim&apos;i
                  Bağla&rdquo; seçeneğini kullanarak Google hesabıyla açıkça
                  yetki verdiğinde etkinleşir.
                </p>
                <h3>4.1 Erişilen Veriler ve İstenen İzinler (Scopes)</h3>
                <p>
                  Google OAuth ile yetkilendirme sırasında yalnızca aşağıdaki
                  izinler istenir:
                </p>
                <ul>
                  <li>
                    <code>https://www.googleapis.com/auth/calendar.events</code>{" "}
                    — kullanıcının Google Takvim&apos;inde etkinlik
                    oluşturma, güncelleme ve silme izni (yalnızca CRM
                    tarafından oluşturulan etkinlikler için kullanılır).
                  </li>
                  <li>
                    <code>openid</code> ve <code>email</code> — kullanıcının
                    kimliğini doğrulamak ve bağlı Google hesabını arayüzde
                    göstermek için.
                  </li>
                </ul>
                <h3>4.2 Verilerin Kullanım Amacı</h3>
                <p>
                  Bağlantı kurulduktan sonra, kullanıcının CRM içinde
                  oluşturduğu veya güncellediği randevu/görev kayıtları
                  (başlık, tarih/saat, açıklama, tamamlanma durumu),{" "}
                  <strong>tek yönlü olarak (yalnızca CRM → Google Takvim)</strong>{" "}
                  kullanıcının kendi Google Takvim&apos;ine yazılır. Sistem,
                  kullanıcının Google Takvim&apos;indeki mevcut etkinlikleri
                  okumaz veya CRM&apos;e geri aktarmaz; senkronizasyon yalnızca
                  CRM&apos;den Google Takvim&apos;e doğru işler. Bir CRM
                  randevusu silindiğinde veya iptal edildiğinde, karşılık
                  gelen Google Takvim etkinliği de otomatik olarak silinir.
                </p>
                <h3>4.3 Verilerin Saklanması</h3>
                <p>
                  Google tarafından verilen erişim ve yenileme (refresh)
                  jetonları (token), Supabase veritabanında{" "}
                  <code>google_calendar_tokens</code> tablosunda, yalnızca
                  ilgili kullanıcının erişebileceği şekilde (Row Level
                  Security ile korunan) saklanır. Bu jetonlar üçüncü
                  taraflarla paylaşılmaz ve yalnızca Google Calendar API&apos;sine
                  istek göndermek için sunucu tarafında kullanılır.
                </p>
                <h3>4.4 Verilerin Paylaşımı</h3>
                <p>
                  Google hesabı entegrasyonu kapsamında elde edilen hiçbir
                  veri, Google dışında herhangi bir üçüncü taraf servise,
                  reklam platformuna veya analitik sağlayıcısına aktarılmaz
                  ya da satılmaz.
                </p>
                <h3>4.5 Bağlantıyı Kesme ve Erişimi İptal Etme</h3>
                <p>
                  Kullanıcı, CRM uygulaması içinde Ayarlar &gt; Google Takvim
                  bölümünden istediği zaman bağlantıyı kesebilir; bu işlem
                  Supabase&apos;te saklanan erişim jetonlarını siler. Ayrıca
                  kullanıcı,{" "}
                  <a
                    href="https://myaccount.google.com/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Hesabı &gt; Güvenlik &gt; Üçüncü taraf erişimi
                  </a>{" "}
                  sayfasından da Emlak CRM Pro&apos;nun erişimini doğrudan iptal
                  edebilir. Bağlantı kesildiğinde, daha önce oluşturulmuş
                  Google Takvim etkinlikleri kullanıcının takviminde kalmaya
                  devam eder; sadece yeni senkronizasyon durur.
                </p>
                <h3>4.6 Google API Hizmetleri Kullanıcı Verileri Politikası</h3>
                <p>
                  Emlak CRM Pro&apos;nun Google Calendar API kullanımı,{" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google API Hizmetleri Kullanıcı Verileri Politikası
                  </a>
                  &apos;na (Sınırlı Kullanım şartları dahil) uygundur.

                </p>

                <h2>5. Çerezler</h2>
                <p>
                  Tanıtım sitesi şu anda çerez tabanlı bir analitik veya reklam
                  takip sistemi kullanmamaktadır; yalnızca sitenin temel
                  çalışması için gerekli olabilecek teknik çerezler
                  kullanılabilir. CRM uygulaması, oturum yönetimi (giriş
                  durumunu korumak) için gerekli teknik çerezler/token&apos;lar
                  kullanır.
                </p>

                <h2>6. Veri Güvenliği</h2>
                <p>
                  Tüm veri trafiği HTTPS ile şifrelenir. CRM uygulamasında
                  organizasyon bazlı veri izolasyonu, veritabanı düzeyinde
                  (Supabase Row Level Security) uygulanır ve yalnızca istemci
                  tarafı kontrollerine güvenilmez. Erişim yetkileri; danışman,
                  asistan, yönetici ve broker rollerine göre sınırlandırılır.
                </p>

                <h2>7. Veri Sahibinin Hakları (KVKK md.11)</h2>
                <p>
                  Kişisel verileri işlenen kişi, veri sorumlusuna başvurarak
                  kendisiyle ilgili; verisinin işlenip işlenmediğini öğrenme,
                  işlenmişse buna ilişkin bilgi talep etme, işlenme amacını
                  öğrenme, aktarıldığı üçüncü kişileri bilme, eksik/yanlış
                  işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini
                  isteme ve kanuna aykırı işleme nedeniyle zarara uğraması
                  halinde zararın giderilmesini talep etme haklarına sahiptir.
                  Başvurular{" "}
                  <a href="mailto:kvkk@emlakcrmpro.com">kvkk@emlakcrmpro.com</a>{" "}
                  adresine iletilebilir.
                </p>

                <h2>8. Politika Değişiklikleri</h2>
                <p>
                  Bu Gizlilik Politikası, hizmetlerimizdeki değişikliklere
                  veya yasal gerekliliklere göre güncellenebilir. Önemli
                  değişiklikler bu sayfada yayınlanır.
                </p>

                <h2>9. İletişim</h2>
                <p>
                  Gizlilik ile ilgili sorularınız için{" "}
                  <a href="mailto:kvkk@emlakcrmpro.com">kvkk@emlakcrmpro.com</a>{" "}
                  adresinden bize ulaşabilirsiniz.
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
