import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'خدمات امنیت سایبری سازمانی | هوش‌افزار',
  description: 'خدمات تخصصی هوش‌افزار شامل مهندسی و راهبری Splunk، Imperva DAM، Cisco ISE و TACACS+، Managed SOC، Threat Hunting، Incident Response و پروژه‌های هوش دارایی مبتنی بر MonoSuite است.',
};

const engineeringServices = [
  {
    tag: 'SPLUNK',
    title: 'مهندسی و راهبری Splunk',
    text: 'از طراحی معماری و ورود داده تا Detection Engineering، بهینه‌سازی و راهبری عملیاتی؛ برای سازمان‌هایی که می‌خواهند Splunk از یک مخزن Log به یک پلتفرم عملیاتی قابل اتکا تبدیل شود.',
    bullets: ['طراحی معماری و استقرار', 'Data Onboarding و نرمال‌سازی', 'Detection Engineering و Tuning', 'بهینه‌سازی مصرف و Performance', 'پشتیبانی و انتقال دانش'],
    model: 'لایسنس + پیاده‌سازی + پشتیبانی',
  },
  {
    tag: 'IMPERVA DAM',
    title: 'پایش و حفاظت فعالیت پایگاه داده',
    text: 'طراحی، استقرار و راهبری Imperva Database Activity Monitoring برای مشاهده و کنترل فعالیت‌های حساس پایگاه داده و ایجاد شواهد قابل استناد امنیتی.',
    bullets: ['تأمین لایسنس', 'نصب و راه‌اندازی', 'کشف و طبقه‌بندی پایگاه‌های داده', 'طراحی و تنظیم Policy', 'پایش و پشتیبانی عملیاتی'],
    model: 'لایسنس + پیاده‌سازی + پشتیبانی',
  },
  {
    tag: 'CISCO ISE · TACACS+',
    title: 'کنترل دسترسی شبکه و هویت',
    text: 'طراحی و پیاده‌سازی کنترل دسترسی شبکه برای تعیین اینکه چه کاربر یا تجهیزی، با چه سطح دسترسی و تحت چه Policy وارد شبکه سازمان شود.',
    bullets: ['تأمین لایسنس', 'طراحی معماری ISE', 'نصب و راه‌اندازی', 'NAC و Policy Enforcement', 'TACACS+ برای دسترسی مدیریتی', 'راهبری و پشتیبانی'],
    model: 'لایسنس + پیاده‌سازی + پشتیبانی',
  },
];

const operationsServices = [
  {
    number: '۰۱',
    tag: 'MANAGED SOC',
    title: 'عملیات مرکز امنیت',
    text: 'پایش مستمر رخدادها، تریاژ و Escalation، توسعه Use Case و بهبود مستمر کیفیت تشخیص و عملیات SOC.',
    points: ['پایش متمرکز یا استقرار نیروی تخصصی', 'تریاژ و تحلیل هشدار', 'بهینه‌سازی Use Caseها', 'گزارش‌دهی و بهبود عملیات'],
    model: 'خدمت مستمر',
  },
  {
    number: '۰۲',
    tag: 'THREAT HUNTING',
    title: 'شکار تهدید هدفمند',
    text: 'جست‌وجوی فرضیه‌محور برای یافتن نشانه‌های تهدیدی که ممکن است از کنترل‌ها و قواعد تشخیص موجود عبور کرده باشند.',
    points: ['تعریف فرضیه شکار', 'تحلیل Telemetry و شواهد', 'کشف الگوهای مشکوک', 'گزارش یافته و پیشنهاد Detection'],
    model: 'پروژه‌ای یا دوره‌ای',
  },
  {
    number: '۰۳',
    tag: 'INCIDENT RESPONSE',
    title: 'پاسخ‌گویی تخصصی به رخداد',
    text: 'تحلیل رخداد، تعیین دامنه، بازسازی خط زمانی و همراهی تیم سازمان در تصمیم‌های فنی لازم برای کنترل و بازیابی.',
    points: ['Triage و Scope Analysis', 'تحلیل شواهد و Timeline', 'پیشنهاد اقدامات Containment', 'گزارش فنی و درس‌آموخته‌ها'],
    model: 'پروژه‌ای یا رزرو ظرفیت',
  },
  {
    number: '۰۴',
    tag: 'SOC MATURITY',
    title: 'ارزیابی و ارتقای بلوغ SOC',
    text: 'ارزیابی ساختار، فرآیندها، فناوری و مدل عملیاتی مرکز امنیت و تدوین نقشه راه واقع‌گرایانه برای ارتقای قابلیت‌های آن.',
    points: ['ارزیابی وضع موجود', 'تحلیل شکاف‌های عملیاتی', 'اولویت‌بندی اقدامات اصلاحی', 'نقشه راه ارتقای بلوغ'],
    model: 'پروژه ارزیابی و مشاوره',
  },
];

const assetProjectSteps = [
  ['۰۱', 'استقرار موقت', 'مونوسوئیت در زیرساخت مشتری مستقر می‌شود و برای اجرای پروژه آماده می‌گردد.'],
  ['۰۲', 'کشف و شناخت', 'دارایی‌ها، مشخصات فنی، سرویس‌ها، تغییرات و زمینه سازمانی جمع‌آوری و یکپارچه می‌شوند.'],
  ['۰۳', 'تحلیل امنیت', 'سطح مواجهه، آسیب‌پذیری، هاردنینگ، انطباق و ریسک دارایی‌ها تحلیل می‌شود.'],
  ['۰۴', 'تحویل خروجی', 'گزارش‌ها، یافته‌ها و اولویت‌های عملیاتی به تیم سازمان تحویل و استقرار موقت جمع‌آوری می‌شود.'],
];

const engagementModels = [
  ['لایسنس + اجرا + پشتیبانی', 'برای فناوری‌هایی مانند Imperva DAM و Cisco ISE که سازمان علاوه بر تأمین مجوز، به طراحی، استقرار و پشتیبانی تخصصی نیاز دارد.'],
  ['پروژه تخصصی', 'برای ارزیابی، Threat Hunting، Incident Response و پروژه‌های هوش دارایی با محدوده و خروجی مشخص.'],
  ['خدمت مستمر', 'برای عملیات SOC، راهبری و پشتیبانی سامانه‌هایی که نیازمند حضور و بهبود مداوم هستند.'],
  ['رزرو ظرفیت', 'برای سازمان‌هایی که می‌خواهند در رخدادهای حساس یا نیازهای تخصصی، ظرفیت کارشناسی از پیش در دسترس داشته باشند.'],
];

export default function ServicesPage() {
  return (
    <PageShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>خدمات تخصصی امنیت سایبری</span>
                <h1>از طراحی و استقرار تا عملیات و پاسخ؛<em> هر نیاز امنیتی، مدل ارائه مناسب خود را دارد.</em></h1>
                <p>خدمات هوش‌افزار یک فهرست یک‌شکل از سرویس‌ها نیست. بخشی از نیازهای سازمان با تأمین لایسنس و پیاده‌سازی فناوری پاسخ داده می‌شود، بخشی نیازمند عملیات مستمر است و بخشی به‌صورت پروژه تخصصی با خروجی مشخص اجرا می‌شود.</p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href="/contact/">درخواست جلسه مشاوره</Link>
                  <a className={styles.secondary} href="#service-families">مشاهده حوزه‌های خدمات</a>
                </div>
              </div>

              <div className={styles.serviceMap} aria-label="مدل خدمات هوش‌افزار">
                <div className={styles.mapHead}><span>Service Portfolio</span><b>سه خانواده خدمت، یک مسیر امنیتی منسجم</b></div>
                <div className={styles.mapRows}>
                  <div><span>01</span><div><b>مهندسی و پلتفرم‌های امنیتی</b><small>Splunk · Imperva DAM · Cisco ISE · TACACS+</small></div></div>
                  <div><span>02</span><div><b>عملیات و پاسخ امنیتی</b><small>Managed SOC · Threat Hunting · Incident Response</small></div></div>
                  <div><span>03</span><div><b>پروژه‌های هوش دارایی</b><small>MonoSuite-powered assessment & risk analysis</small></div></div>
                </div>
                <div className={styles.mapFoot}><span>Project</span><span>Managed</span><span>License + Delivery</span><span>Retainer</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.familyStrip} id="service-families">
          <div className="shell">
            <div className={styles.familyGrid}>
              <a href="#engineering"><span>01</span><div><b>مهندسی و پلتفرم‌ها</b><small>طراحی، استقرار، یکپارچه‌سازی و راهبری</small></div></a>
              <a href="#operations"><span>02</span><div><b>عملیات و پاسخ</b><small>پایش، شکار تهدید، ارزیابی و Incident Response</small></div></a>
              <a href="#asset-project"><span>03</span><div><b>پروژه هوش دارایی</b><small>خروجی عملیاتی بدون الزام خرید MonoSuite</small></div></a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="engineering">
          <div className="shell">
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Security Engineering & Platforms</span>
              <h2>فناوری زمانی ارزش ایجاد می‌کند که درست طراحی، پیاده‌سازی و راهبری شود.</h2>
              <p>در این دسته، هوش‌افزار علاوه بر تأمین فناوری موردنیاز، مسئولیت مهندسی معماری، استقرار، تنظیم، یکپارچه‌سازی و پشتیبانی تخصصی را بر عهده می‌گیرد.</p>
            </div>
            <div className={styles.engineeringGrid}>
              {engineeringServices.map((service) => (
                <article className={styles.engineeringCard} key={service.tag}>
                  <div className={styles.cardTop}><span>{service.tag}</span><small>{service.model}</small></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>{service.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.operationsSection} id="operations">
          <div className="shell">
            <div className={styles.operationsHeading}>
              <div><span className={styles.darkEyebrow}>Security Operations & Response</span><h2>وقتی ابزار کافی نیست، عملیات و تصمیم انسانی تعیین‌کننده می‌شود.</h2></div>
              <p>این خدمات برای سازمان‌هایی است که به ظرفیت عملیاتی، تحلیل تخصصی یا پاسخ سریع نیاز دارند؛ از پایش روزمره تا بررسی عمیق یک تهدید یا رخداد واقعی.</p>
            </div>
            <div className={styles.operationsGrid}>
              {operationsServices.map((service) => (
                <article key={service.tag}>
                  <div className={styles.operationNumber}>{service.number}</div>
                  <small>{service.tag}</small>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className={styles.operationPoints}>{service.points.map((p) => <span key={p}>{p}</span>)}</div>
                  <b className={styles.modelBadge}>{service.model}</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.assetSection} id="asset-project">
          <div className="shell">
            <div className={styles.assetGrid}>
              <div className={styles.assetCopy}>
                <span className={styles.eyebrow}>MonoSuite as a Service Enabler</span>
                <h2>پروژه هوش دارایی؛ دریافت خروجی عملیاتی بدون نیاز به خرید سامانه</h2>
                <p>در مدل پروژه‌ای، مونوسوئیت ابزار اجرای خدمت است، نه الزام خرید برای مشتری. سامانه به‌صورت موقت در زیرساخت سازمان مستقر می‌شود تا شناسنامه دارایی‌ها، سطح مواجهه، وضعیت هاردنینگ و ریسک استخراج و تحلیل شود.</p>
                <p>در پایان پروژه، یافته‌ها و گزارش‌های عملیاتی در اختیار تیم سازمان قرار می‌گیرد و استقرار موقت سامانه پایان می‌یابد.</p>
                <div className={styles.assetActions}>
                  <Link className={styles.primary} href="/contact/">درخواست پروژه ارزیابی</Link>
                  <Link className={styles.textLink} href="/monosuit/">اگر قصد خرید MonoSuite را دارید ←</Link>
                </div>
              </div>
              <div className={styles.assetSteps}>
                {assetProjectSteps.map(([n,title,text]) => <div key={n}><span>{n}</span><div><b>{title}</b><p>{text}</p></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.engagementSection}>
          <div className="shell">
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Engagement Models</span>
              <h2>مدل همکاری بر اساس ماهیت نیاز انتخاب می‌شود، نه یک قرارداد ثابت برای همه خدمات.</h2>
            </div>
            <div className={styles.engagementGrid}>
              {engagementModels.map(([title,text], index) => (
                <article key={title}><span>۰{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="shell">
            <div className={styles.ctaBox}>
              <div><span className={styles.eyebrow}>از مسئله شروع کنیم، نه از محصول</span><h2>نیاز امنیتی سازمان را مطرح کنید؛ مدل مناسب اجرا را با هم مشخص می‌کنیم.</h2><p>از انتخاب و استقرار فناوری تا عملیات مستمر، ارزیابی تخصصی یا پاسخ به رخداد، دامنه خدمت بر اساس وضعیت واقعی زیرساخت و هدف سازمان تعریف می‌شود.</p></div>
              <Link className={styles.primary} href="/contact/">درخواست جلسه مشاوره</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
