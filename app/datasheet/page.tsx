import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import DatasheetRequestForm from './DatasheetRequestForm';
import styles from './datasheet.module.css';

export const metadata: Metadata = {
  title: 'درخواست دیتاشیت MonoSuite Asset Intelligence | هوش‌افزار',
  description: 'دیتاشیت فنی MonoSuite Asset Intelligence را با ایمیل سازمانی درخواست کنید و با قابلیت‌ها، مدل استقرار و رویکرد هوش دارایی مونوسوئیت آشنا شوید.',
};

const topics = [
  ['Asset Intelligence', 'مروری بر کشف، شناسنامه‌سازی، غنی‌سازی و تحلیل دارایی‌های سایبری.'],
  ['Security & Risk', 'قابلیت‌های ارزیابی امنیتی، اولویت‌بندی ریسک و هاردنینگ دارایی‌ها.'],
  ['Scores', 'آشنایی با Identification Score، Protection Score و Risk Score در مونوسوئیت.'],
  ['Deployment', 'مدل استقرار On-Prem و سناریوهای مناسب برای محیط‌های سازمانی و ایزوله.'],
];

export default function DatasheetPage() {
  return (
    <PageShell>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>MonoSuite Asset Intelligence</span>
                <h1>دیتاشیت فنی مونوسوئیت</h1>
                <p>
                  برای بررسی دقیق‌تر قابلیت‌ها، مدل استقرار و حوزه‌های کاربرد MonoSuite Asset Intelligence، دیتاشیت فنی محصول را با ایمیل سازمانی خود درخواست کنید.
                </p>
                <div className={styles.heroMeta}>
                  <span>Enterprise</span><i />
                  <span>On-Prem</span><i />
                  <span>Asset Intelligence</span>
                </div>
              </div>

              <div className={styles.sheetVisual} aria-hidden="true">
                <div className={styles.sheetTop}><span>MONOSUITE</span><small>TECHNICAL DATASHEET</small></div>
                <div className={styles.sheetLines}><i /><i /><i /><i /></div>
                <div className={styles.sheetTags}><span>DISCOVERY</span><span>RISK</span><span>HARDENING</span></div>
                <strong>Asset Intelligence<br />for Enterprise Security</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="shell">
            <div className={styles.contentGrid}>
              <div className={styles.infoColumn}>
                <span className={styles.eyebrow}>در دیتاشیت چه می‌بینید؟</span>
                <h2>یک نمای فنی و فشرده از محصول</h2>
                <p className={styles.intro}>
                  این سند برای تیم‌های امنیت، زیرساخت و تصمیم‌گیران فنی تهیه شده تا پیش از جلسه تخصصی، تصویر روشنی از دامنه محصول و مدل بهره‌برداری آن داشته باشند.
                </p>

                <div className={styles.topicList}>
                  {topics.map(([title, text], index) => (
                    <article key={title}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div><h3>{title}</h3><p>{text}</p></div>
                    </article>
                  ))}
                </div>

                <div className={styles.helpBox}>
                  <strong>به بررسی فنی بیشتری نیاز دارید؟</strong>
                  <p>اگر بعد از مطالعه دیتاشیت درباره معماری، استقرار یا تناسب محصول با زیرساخت سازمان سؤال دارید، می‌توانید مستقیماً با تیم هوش‌افزار گفت‌وگو کنید.</p>
                  <Link href="/contact/">درخواست گفت‌وگوی فنی ←</Link>
                </div>
              </div>

              <DatasheetRequestForm />
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
