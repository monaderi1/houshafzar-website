import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import { contact } from '../site-data';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'تماس با هوش‌افزار | مشاوره امنیت سایبری سازمانی',
  description: 'برای گفت‌وگو درباره MonoSuite Asset Intelligence، خدمات مهندسی امنیت، SOC، Threat Hunting و Incident Response با شرکت هوش‌افزار نسل پویا در ارتباط باشید.',
};

const inquiries = [
  {
    number: '۰۱',
    label: 'PRODUCT & POC',
    title: 'محصول و ارزیابی MonoSuite',
    text: 'برای آشنایی فنی با MonoSuite Asset Intelligence، بررسی سناریوی استقرار، پایلوت یا ارزیابی تناسب محصول با زیرساخت سازمان.',
    subject: 'درخواست جلسه درباره MonoSuite Asset Intelligence',
  },
  {
    number: '۰۲',
    label: 'ENGINEERING & SERVICES',
    title: 'مهندسی و خدمات امنیتی',
    text: 'برای پروژه‌های Splunk، Imperva DAM، Cisco ISE و TACACS+ یا خدمات تخصصی مهندسی، استقرار، راهبری و پشتیبانی.',
    subject: 'درخواست مشاوره خدمات مهندسی امنیت',
  },
  {
    number: '۰۳',
    label: 'OPERATIONS & RESPONSE',
    title: 'عملیات و پاسخ امنیتی',
    text: 'برای Managed SOC، Threat Hunting، ارزیابی بلوغ SOC یا بررسی نیاز سازمان به ظرفیت تخصصی Incident Response.',
    subject: 'درخواست مشاوره عملیات و پاسخ امنیتی',
  },
];

function mailto(subject: string) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}

export default function ContactPage() {
  return (
    <PageShell>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>ارتباط با هوش‌افزار</span>
                <h1>
                  گفت‌وگو درباره مسئله امنیتی سازمان،
                  <em> از یک ارتباط مستقیم آغاز می‌شود</em>
                </h1>
                <p>
                  اگر در حال ارزیابی یک محصول، طراحی یا بازمهندسی یک پلتفرم امنیتی، توسعه عملیات SOC یا برنامه‌ریزی برای پاسخ به رخداد هستید، می‌توانید مسئله و شرایط زیرساخت خود را با تیم هوش‌افزار مطرح کنید.
                </p>
                <div className={styles.actions}>
                  <a className={styles.primary} href={`mailto:${contact.email}`}>ارسال ایمیل</a>
                  <a className={styles.secondary} href={contact.phoneHref}>تماس تلفنی</a>
                </div>
              </div>

              <aside className={styles.contactPanel} aria-label="اطلاعات تماس شرکت هوش‌افزار">
                <div className={styles.panelHead}>
                  <span>HOUSH AFZAR</span>
                  <strong>Direct Contact</strong>
                </div>
                <div className={styles.contactRows}>
                  <a href={contact.phoneHref}>
                    <small>تلفن</small>
                    <strong dir="ltr">{contact.phone}</strong>
                    <span>تماس مستقیم با شرکت</span>
                  </a>
                  <a href={`mailto:${contact.email}`}>
                    <small>ایمیل</small>
                    <strong dir="ltr">{contact.email}</strong>
                    <span>برای درخواست جلسه و مکاتبات</span>
                  </a>
                  <div>
                    <small>نشانی</small>
                    <strong>{contact.address}</strong>
                    <span>دفتر شرکت هوش‌افزار نسل پویا</span>
                  </div>
                </div>
                <div className={styles.panelFoot}>
                  <i />
                  <span>Enterprise Cybersecurity</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.inquirySection}>
          <div className="shell">
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.eyebrow}>موضوع گفت‌وگو</span>
                <h2>برای شروع، حوزه موردنظر خود را انتخاب کنید</h2>
              </div>
              <p>انتخاب مسیر ارتباط فقط به ما کمک می‌کند گفت‌وگو را از موضوع درست آغاز کنیم؛ در صورت نیاز، تیم مناسب در ادامه مکالمه درگیر خواهد شد.</p>
            </div>

            <div className={styles.inquiryGrid}>
              {inquiries.map((item) => (
                <article className={styles.inquiryCard} key={item.number}>
                  <div className={styles.cardTop}>
                    <span>{item.number}</span>
                    <small>{item.label}</small>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href={mailto(item.subject)}>ارسال درخواست درباره این حوزه ←</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contextSection}>
          <div className="shell">
            <div className={styles.contextBox}>
              <div className={styles.contextTitle}>
                <span className={styles.darkEyebrow}>A Better First Conversation</span>
                <h2>برای یک گفت‌وگوی فنی مؤثر، لازم نیست از ابتدا همه پاسخ‌ها را داشته باشید</h2>
              </div>
              <div className={styles.contextList}>
                <div><span>۰۱</span><p><strong>مسئله</strong> — چه چالش، نیاز یا ریسکی باعث شده به دنبال راهکار باشید؟</p></div>
                <div><span>۰۲</span><p><strong>محیط</strong> — موضوع مربوط به چه بخش یا معماری از زیرساخت سازمان است؟</p></div>
                <div><span>۰۳</span><p><strong>هدف</strong> — از جلسه نخست چه خروجی یا تصمیمی انتظار دارید؟</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.companySection}>
          <div className="shell">
            <div className={styles.companyGrid}>
              <div>
                <span className={styles.eyebrow}>شرکت هوش‌افزار نسل پویا</span>
                <h2>توسعه محصول، مهندسی پلتفرم و عملیات امنیت در یک مجموعه تخصصی</h2>
                <p>برای شناخت بهتر حوزه‌های فعالیت هوش‌افزار، می‌توانید قبل از تماس صفحات خدمات و راهکارها را مرور کنید یا مستقیماً مسئله خود را با ما در میان بگذارید.</p>
              </div>
              <div className={styles.companyLinks}>
                <Link href="/about/"><small>ABOUT</small><strong>درباره هوش‌افزار</strong><span>←</span></Link>
                <Link href="/services/"><small>SERVICES</small><strong>خدمات تخصصی</strong><span>←</span></Link>
                <Link href="/solutions/"><small>SOLUTIONS</small><strong>راهکارهای سازمانی</strong><span>←</span></Link>
                <Link href="/monosuit/"><small>PRODUCT</small><strong>MonoSuite Asset Intelligence</strong><span>←</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className="shell">
            <div className={styles.ctaBox}>
              <div>
                <span className={styles.eyebrow}>شروع گفت‌وگو</span>
                <h2>مسئله را مطرح کنید؛ از همان‌جا شروع می‌کنیم</h2>
                <p>برای هماهنگی جلسه، دریافت اطلاعات بیشتر یا بررسی اولیه یک نیاز امنیتی، از طریق ایمیل یا تلفن با هوش‌افزار در ارتباط باشید.</p>
              </div>
              <div className={styles.ctaActions}>
                <a className={styles.primary} href={`mailto:${contact.email}`}>ارسال ایمیل</a>
                <a className={styles.secondary} href={contact.phoneHref}>تماس با هوش‌افزار</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
