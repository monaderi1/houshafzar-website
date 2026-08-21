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

const collaborationSteps = [
  ['۰۱', 'شناخت نیاز', 'مسئله، هدف و شرایط فعلی سازمان را مرور می‌کنیم.'],
  ['۰۲', 'گفت‌وگوی فنی', 'معماری، محدودیت‌ها و گزینه‌های قابل بررسی را روشن می‌کنیم.'],
  ['۰۳', 'تعریف دامنه', 'مرز فنی کار، مسئولیت‌ها و مدل مناسب همکاری مشخص می‌شود.'],
  ['۰۴', 'پیشنهاد اجرایی', 'گام بعدی به‌صورت یک مسیر فنی و اجرایی مشخص جمع‌بندی می‌شود.'],
];

const firstMeetingOutcomes = [
  ['01', 'تصویر روشن‌تر از مسئله', 'مسئله از زاویه فنی و عملیاتی صورت‌بندی می‌شود تا بدانیم دقیقاً چه چیزی باید بررسی یا حل شود.'],
  ['02', 'مسیر پیشنهادی برای بررسی', 'مشخص می‌شود ادامه مسیر به ارزیابی محصول، طراحی فنی، پروژه مهندسی یا ظرفیت عملیاتی نیاز دارد.'],
  ['03', 'گام بعدی مشخص', 'اگر زمینه همکاری وجود داشته باشد، مرحله بعد، دامنه اولیه و افراد موردنیاز برای ادامه بررسی روشن می‌شوند.'],
];

const engagementModels = [
  {
    label: 'POC & EVALUATION',
    title: 'ارزیابی و پایلوت',
    text: 'برای زمانی که سازمان می‌خواهد پیش از تصمیم اصلی، یک محصول یا قابلیت را در شرایط واقعی زیرساخت خود ارزیابی کند.',
  },
  {
    label: 'PROJECT DELIVERY',
    title: 'پروژه تخصصی',
    text: 'برای استقرار، مهندسی، ارزیابی یا اجرای یک دامنه مشخص با خروجی و مرز فنی روشن.',
  },
  {
    label: 'MANAGED & RETAINER',
    title: 'خدمت مستمر یا ظرفیت تخصصی',
    text: 'برای نیازهایی که به همراهی عملیاتی، پشتیبانی مستمر یا دسترسی به ظرفیت کارشناسی در طول زمان نیاز دارند.',
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

        <section className={styles.collaborationSection}>
          <div className="shell">
            <div className={styles.collaborationBox}>
              <div className={styles.collaborationIntro}>
                <span className={styles.darkEyebrow}>HOW WE START</span>
                <h2>از اولین تماس تا یک مسیر اجرایی روشن</h2>
                <p>هدف جلسه نخست فروش یک راهکار از پیش‌تعیین‌شده نیست. ابتدا مسئله و شرایط واقعی سازمان را روشن می‌کنیم و سپس مشخص می‌شود چه نوع بررسی یا همکاری ارزش ادامه‌دادن دارد.</p>
              </div>
              <div className={styles.collaborationSteps}>
                {collaborationSteps.map(([number, title, text]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.outcomeSection}>
          <div className="shell">
            <div className={styles.outcomeHead}>
              <span className={styles.eyebrow}>First Meeting Outcome</span>
              <h2>از گفت‌وگوی نخست چه چیزی باید به دست بیاید؟</h2>
              <p>یک جلسه مفید باید ابهام را کمتر کند و مسیر تصمیم را روشن‌تر سازد؛ حتی اگر نتیجه این باشد که هنوز برای انتخاب راهکار زود است.</p>
            </div>
            <div className={styles.outcomeGrid}>
              {firstMeetingOutcomes.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.engagementSection}>
          <div className="shell">
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.eyebrow}>Engagement Models</span>
                <h2>مدل همکاری را متناسب با ماهیت نیاز تعریف می‌کنیم</h2>
              </div>
              <p>از ابتدا لازم نیست بدانید به کدام مدل قراردادی یا اجرایی نیاز دارید. نوع همکاری پس از روشن‌شدن مسئله، دامنه و سطح درگیری موردنیاز سازمان انتخاب می‌شود.</p>
            </div>
            <div className={styles.engagementGrid}>
              {engagementModels.map((item) => (
                <article key={item.label}>
                  <small>{item.label}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
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
