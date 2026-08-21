import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import { contact } from '../site-data';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'تماس با هوش‌افزار | مشاوره امنیت سایبری سازمانی',
  description: 'برای گفت‌وگو درباره MonoSuite Asset Intelligence، خدمات مهندسی امنیت، عملیات SOC، Threat Hunting و Incident Response با شرکت هوش‌افزار نسل پویا در ارتباط باشید.',
};

const inquiries = [
  {
    number: '۰۱',
    label: 'PRODUCT & POC',
    title: 'MonoSuite و ارزیابی محصول',
    text: 'برای آشنایی فنی با MonoSuite Asset Intelligence، بررسی سناریوی استقرار، اجرای پایلوت یا ارزیابی تناسب محصول با زیرساخت سازمان.',
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
                  آغاز یک گفت‌وگوی تخصصی درباره
                  <em> نیازهای امنیت سایبری سازمان شما</em>
                </h1>
                <p>
                  تیم هوش‌افزار آماده است تا با شناخت مسئله، معماری موجود و الزامات عملیاتی سازمان، درباره راهکار فنی و مدل همکاری متناسب با نیاز شما گفت‌وگو کند.
                </p>
                <div className={styles.actions}>
                  <a className={styles.primary} href={`mailto:${contact.email}`}>ارسال ایمیل</a>
                  <a className={styles.secondary} href={contact.phoneHref}>تماس تلفنی</a>
                </div>
              </div>

              <aside className={styles.startPanel} aria-label="مسیر شروع گفت‌وگو با هوش‌افزار">
                <div className={styles.panelHead}>
                  <span>START A CONVERSATION</span>
                  <strong>از مسئله شروع می‌کنیم</strong>
                </div>
                <div className={styles.startSteps}>
                  <div><span>۰۱</span><div><small>موضوع</small><b>نیاز یا چالش اصلی را مشخص کنید</b></div></div>
                  <div><span>۰۲</span><div><small>زمینه</small><b>معماری و شرایط فعلی را توضیح دهید</b></div></div>
                  <div><span>۰۳</span><div><small>گفت‌وگو</small><b>مسیر فنی و مدل همکاری را بررسی می‌کنیم</b></div></div>
                </div>
                <div className={styles.panelFoot}><i /><span>Enterprise Cybersecurity</span></div>
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
              <p>انتخاب مسیر ارتباط فقط به ما کمک می‌کند گفت‌وگو را از موضوع درست آغاز کنیم؛ در صورت نیاز، تخصص‌های دیگر نیز در ادامه بررسی وارد خواهند شد.</p>
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

        <section className={styles.channelsSection}>
          <div className="shell">
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.eyebrow}>Direct Contact</span>
                <h2>کانال‌های ارتباط مستقیم</h2>
              </div>
              <p>برای هماهنگی جلسه، دریافت اطلاعات بیشتر یا شروع بررسی یک نیاز فنی، از هر یک از مسیرهای زیر می‌توانید با هوش‌افزار در ارتباط باشید.</p>
            </div>
            <div className={styles.channelsGrid}>
              <a className={styles.channelCard} href={contact.phoneHref}>
                <small>PHONE</small>
                <span>تماس تلفنی</span>
                <strong dir="ltr">{contact.phone}</strong>
                <i>تماس مستقیم با شرکت</i>
              </a>
              <a className={styles.channelCard} href={`mailto:${contact.email}`}>
                <small>EMAIL</small>
                <span>مکاتبات و درخواست جلسه</span>
                <strong dir="ltr">{contact.email}</strong>
                <i>برای درخواست‌های فنی و عمومی</i>
              </a>
              <div className={styles.channelCard}>
                <small>OFFICE</small>
                <span>دفتر هوش‌افزار نسل پویا</span>
                <strong>{contact.address}</strong>
                <i>تهران</i>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.incidentSection}>
          <div className="shell">
            <div className={styles.incidentBox}>
              <div className={styles.incidentTag}><span>IR</span><small>INCIDENT RESPONSE</small></div>
              <div className={styles.incidentCopy}>
                <span className={styles.darkEyebrow}>رخداد امنیتی فعال</span>
                <h2>با یک رخداد سایبری در حال وقوع مواجه هستید؟</h2>
                <p>اگر برای تحلیل، تعیین دامنه یا پاسخ تخصصی به رخداد نیاز به همراهی دارید، هنگام تماس یا ارسال ایمیل موضوع را با عبارت <strong>«رخداد امنیتی»</strong> مشخص کنید تا درخواست از سایر موارد مشاوره‌ای تفکیک شود.</p>
                <div className={styles.incidentMeta}>
                  <span>Threat Analysis</span><i>•</i><span>Scope</span><i>•</i><span>Containment</span><i>•</i><span>Response</span>
                </div>
              </div>
              <a className={styles.incidentAction} href={mailto('رخداد امنیتی — درخواست بررسی و پاسخ تخصصی')}>ارسال ایمیل با موضوع رخداد امنیتی</a>
            </div>
          </div>
        </section>

        <section className={styles.privacySection}>
          <div className="shell">
            <div className={styles.privacyBox}>
              <div className={styles.privacyIcon}>◎</div>
              <div>
                <span className={styles.eyebrow}>Confidentiality</span>
                <h2>محرمانگی در ارتباطات</h2>
                <p>در گفت‌وگوهای فنی و بررسی نیازهای سازمان، الزامات محرمانگی و حساسیت اطلاعات از ابتدا مورد توجه تیم هوش‌افزار قرار می‌گیرد. برای شروع گفت‌وگو نیز نیازی به ارسال جزئیات حساس یا اطلاعاتی فراتر از حد لازم نیست.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contextSection}>
          <div className="shell">
            <div className={styles.contextBox}>
              <div className={styles.contextTitle}>
                <span className={styles.darkEyebrow}>A Better First Conversation</span>
                <h2>برای جلسه نخست، چه اطلاعاتی مفید است؟</h2>
                <p>لازم نیست از ابتدا مستندات کامل یا پاسخ همه پرسش‌ها را آماده داشته باشید. چند نکته پایه برای شکل‌گیری یک گفت‌وگوی فنی مؤثر کافی است.</p>
              </div>
              <div className={styles.contextList}>
                <div><span>۰۱</span><p><strong>مسئله</strong> — چالش، نیاز یا ریسک اصلی سازمان چیست؟</p></div>
                <div><span>۰۲</span><p><strong>زیرساخت</strong> — موضوع مربوط به چه فناوری یا بخش از معماری سازمان است؟</p></div>
                <div><span>۰۳</span><p><strong>دامنه</strong> — پروژه یا نیاز موردنظر تقریباً چه محدوده‌ای را در بر می‌گیرد؟</p></div>
                <div><span>۰۴</span><p><strong>نوع نیاز</strong> — محصول، مهندسی، عملیات امنیت یا رخداد فعال؟</p></div>
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
                <p>برای هماهنگی جلسه یا بررسی اولیه یک نیاز امنیتی، از طریق ایمیل یا تلفن با تیم هوش‌افزار در ارتباط باشید.</p>
              </div>
              <div className={styles.ctaActions}>
                <a className={styles.primary} href={`mailto:${contact.email}`}>ارسال ایمیل</a>
                <a className={styles.secondary} href={contact.phoneHref}>تماس با هوش‌افزار</a>
              </div>
            </div>
            <div className={styles.quickLinks}>
              <Link href="/about/">درباره هوش‌افزار</Link>
              <Link href="/services/">خدمات تخصصی</Link>
              <Link href="/solutions/">راهکارهای سازمانی</Link>
              <Link href="/monosuit/">MonoSuite Asset Intelligence</Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
