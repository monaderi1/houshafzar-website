import Link from 'next/link';
import { PageShell } from './components';

const challenges = [
  {
    number: '۰۱',
    title: 'دارایی‌های خارج از دید',
    text: 'دارایی‌های ناشناخته، ثبت‌نشده یا تغییرکرده می‌توانند بدون آنکه در کنترل‌های امنیتی دیده شوند، وارد سطح حمله سازمان شوند.',
  },
  {
    number: '۰۲',
    title: 'ریسک بدون زمینه کافی',
    text: 'امتیاز آسیب‌پذیری به‌تنهایی اولویت واقعی را مشخص نمی‌کند؛ اهمیت دارایی، سرویس مرتبط و شرایط محیط باید در تصمیم‌گیری لحاظ شود.',
  },
  {
    number: '۰۳',
    title: 'داده‌های پراکنده میان ابزارها',
    text: 'اطلاعات شبکه، نقاط پایانی، آسیب‌پذیری و سایر ابزارهای امنیتی بدون یک نمای مشترک، تصویر ناقصی از وضعیت واقعی سازمان ایجاد می‌کنند.',
  },
  {
    number: '۰۴',
    title: 'کندی تصمیم در زمان رخداد',
    text: 'نبود اطلاعات زمینه‌ای یکپارچه، زمان تحلیل و تصمیم‌گیری را در لحظاتی که سرعت برای مهار تهدید اهمیت دارد افزایش می‌دهد.',
  },
];

const flow = [
  ['جمع‌آوری داده', 'دریافت اطلاعات از شبکه، نقاط پایانی، ابزارهای امنیتی و منابع مدیریتی سازمان'],
  ['یکپارچه‌سازی و تطبیق', 'پالایش داده‌ها، حذف اطلاعات تکراری و ایجاد نمای واحد از هر دارایی'],
  ['غنی‌سازی زمینه', 'افزودن اطلاعات فنی، امنیتی و سازمانی برای شناخت بهتر هر دارایی'],
  ['تحلیل وضعیت و ریسک', 'ارزیابی ریسک، وضعیت حفاظتی، هاردنینگ و انطباق بر اساس داده واقعی محیط'],
  ['اقدام و پیگیری', 'تبدیل یافته‌ها به اولویت‌های عملیاتی، گزارش و اقدامات اصلاحی قابل پیگیری'],
];

const services = [
  {
    title: 'شناخت دارایی و سطح حمله',
    text: 'ایجاد دید دقیق‌تر از دارایی‌ها، نقاط ناشناخته و سطح مواجهه سازمان با تهدیدات.',
  },
  {
    title: 'کشف تهدید و Threat Hunting',
    text: 'جست‌وجوی هدفمند نشانه‌های تهدید با تکیه بر داده‌های موجود، فرضیه‌های فنی و تجربه عملیاتی.',
  },
  {
    title: 'پاسخ‌گویی به رخداد',
    text: 'تحلیل، هماهنگی و پشتیبانی از تصمیم‌گیری در رخدادهای پیچیده سایبری با تمرکز بر کاهش زمان پاسخ.',
  },
  {
    title: 'پایش و راهبری مرکز عملیات امنیت',
    text: 'تأمین نیروی متخصص، راهبری، ارزیابی و ارتقای اثربخشی عملیات مرکز امنیت.',
  },
  {
    title: 'امنیت هویت و دسترسی',
    text: 'تأمین مجوز، نصب، راه‌اندازی و پشتیبانی راهکارهای کنترل دسترسی مانند Cisco ISE.',
  },
  {
    title: 'پایش فعالیت پایگاه داده',
    text: 'تأمین مجوز و ارائه خدمات تخصصی Imperva DAM برای پایش فعالیت‌های حساس پایگاه داده.',
  },
];

const trustPoints = [
  ['استقرار درون‌سازمانی', 'داده‌های امنیتی و اطلاعات دارایی در محدوده زیرساخت سازمان باقی می‌مانند.'],
  ['پشتیبانی از شبکه‌های ایزوله', 'امکان استقرار و بهره‌برداری در محیط‌های محدود یا بدون دسترسی مستقیم به اینترنت.'],
  ['همزیستی با ابزارهای موجود', 'راهکارها برای تکمیل دید سازمان طراحی شده‌اند، نه جایگزینی اجباری ابزارهای فعلی.'],
  ['کنترل کامل داده و عملیات', 'معماری متناسب با الزامات امنیتی، حاکمیت داده و فرآیندهای سازمان‌های بزرگ.'],
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero hero-redesign">
        <div className="shell hero-grid hero-grid-redesign">
          <div className="hero-copy">
            <span className="eyebrow">امنیت سایبری سازمانی، مبتنی بر دید و اقدام</span>
            <h1>
              دید کامل‌تر. ریسک واقعی‌تر.
              <em> تصمیم امنیتی سریع‌تر.</em>
            </h1>
            <p>
              هوش‌افزار با محصول <span dir="ltr">MonoSuite Asset Intelligence</span> و خدمات تخصصی امنیت، داده‌های پراکنده زیرساخت و ابزارهای امنیتی را به شناخت قابل اقدام برای تیم‌های فناوری اطلاعات و امنیت تبدیل می‌کند.
            </p>
            <div className="actions">
              <Link className="button" href="/contcat/">درخواست جلسه معرفی</Link>
              <a className="text-link" href="#offerings">بررسی محصول و خدمات</a>
            </div>
            <div className="hero-notes" aria-label="ویژگی‌های کلیدی ارائه">
              <span>استقرار درون‌سازمانی</span>
              <span>مناسب محیط‌های ایزوله</span>
              <span>تمرکز بر سازمان‌های بزرگ</span>
            </div>
          </div>

          <div className="hero-system" aria-label="نمای مفهومی جریان داده تا تصمیم امنیتی">
            <div className="system-title">
              <span>نمای مفهومی</span>
              <strong>از داده‌های پراکنده تا تصمیم قابل اقدام</strong>
            </div>
            <div className="system-board">
              <div className="system-column system-sources">
                <small>منابع داده</small>
                <span>شبکه و زیرساخت</span>
                <span>نقاط پایانی</span>
                <span>ابزارهای امنیتی</span>
                <span>اطلاعات سازمانی</span>
              </div>
              <div className="system-engine">
                <span className="engine-kicker">MonoSuite</span>
                <strong>Asset Intelligence</strong>
                <i aria-hidden="true" />
                <small>تجمیع · غنی‌سازی · تحلیل</small>
              </div>
              <div className="system-column system-outputs">
                <small>خروجی تصمیم</small>
                <span>میزان رصدپذیری دارایی‌ها</span>
                <span>اولویت‌بندی ریسک‌ها</span>
                <span>وضعیت هاردنینگ دارایی‌ها</span>
                <span>تغییرات در دارایی‌ها</span>
              </div>
              <div className="connector connector-one" aria-hidden="true" />
              <div className="connector connector-two" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="position-strip" aria-label="مدل ارائه هوش‌افزار">
        <div className="shell position-grid">
          <div><b>محصول سازمانی</b><span dir="ltr">MonoSuite Asset Intelligence</span></div>
          <div><b>خدمات تخصصی مستقل</b><span>بدون الزام به خرید محصول</span></div>
          <div><b>اجرای متناسب با زیرساخت</b><span>برای محیط‌های واقعی و پیچیده سازمانی</span></div>
        </div>
      </section>

      <section className="section section-challenges">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">نقاط کور امنیتی</span>
            <h2>پیچیدگی زیرساخت، دیدپذیری امنیت را کاهش می‌دهد.</h2>
            <p>هرچه تعداد دارایی‌ها، ابزارها و منابع داده بیشتر شود، حفظ یک تصویر دقیق و قابل اتکا از وضعیت امنیت دشوارتر می‌شود.</p>
          </div>
          <div className="challenge-grid">
            {challenges.map((item) => (
              <article className="challenge-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-offerings" id="offerings">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <span className="eyebrow">محصول و خدمات</span>
            <h2>یک محصول سازمانی؛ مجموعه‌ای از خدمات تخصصی امنیت.</h2>
          </div>
          <div className="offering-grid">
            <article className="offering-card offering-product">
              <div className="offering-label">محصول</div>
              <span className="offering-name" dir="ltr">MonoSuite Asset Intelligence</span>
              <h3>پلتفرم شناخت و تحلیل دارایی‌های سایبری</h3>
              <p>پلتفرمی درون‌سازمانی برای ایجاد موجودی یکپارچه دارایی‌های سایبری، افزایش رصدپذیری، تحلیل ریسک و ارزیابی مستمر وضعیت امنیت.</p>
              <ul>
                <li>استقرار درون‌سازمانی و پشتیبانی از محیط‌های Air-Gapped</li>
                <li>تجمیع اطلاعات دارایی از منابع متعدد</li>
                <li>اولویت‌بندی ریسک با درنظرگرفتن زمینه دارایی</li>
                <li>ارزیابی وضعیت هاردنینگ و انطباق</li>
              </ul>
              <Link href="/monosuit/" className="text-link">معرفی MonoSuite</Link>
            </article>

            <article className="offering-card offering-services">
              <div className="offering-label">خدمات</div>
              <span className="offering-name">دانش، ابزار و تجربه عملیاتی</span>
              <h3>خدمات تخصصی امنیت بدون الزام به خرید محصول</h3>
              <p>اجرای پروژه‌های تخصصی با استفاده از دانش، ابزار و تجربه عملیاتی هوش‌افزار؛ بدون الزام سازمان به خرید MonoSuite.</p>
              <ul>
                <li>ارزیابی سطح حمله و کشف پیش‌دستانه تهدیدات</li>
                <li>پاسخ‌گویی فنی و مدیریت رخدادهای پیچیده سایبری</li>
                <li>راهبری و ارتقای اثربخشی مراکز عملیات امنیت</li>
                <li>تأمین مجوز، نصب و پشتیبانی راهکارهای تخصصی</li>
              </ul>
              <Link href="/services/" className="text-link">مشاهده خدمات</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section product-flow-section">
        <div className="shell product-flow-grid">
          <div className="product-flow-copy">
            <span className="eyebrow eyebrow-light">منطق MonoSuite</span>
            <h2>از داده خام تا تصمیم امنیتی قابل اقدام.</h2>
            <p>MonoSuite اطلاعات پراکنده دارایی‌ها و ابزارهای امنیتی را جمع‌آوری، تطبیق و غنی‌سازی می‌کند تا تیم‌های فنی بتوانند وضعیت واقعی زیرساخت را ببینند، ریسک‌ها را بهتر اولویت‌بندی کنند و اقدامات اصلاحی را هدفمند پیش ببرند.</p>
            <Link className="button button-light" href="/monosuit/">آشنایی بیشتر با محصول</Link>
          </div>
          <ol className="flow-list">
            {flow.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <div className="section-heading section-heading-wide">
            <span className="eyebrow">خدمات تخصصی امنیت</span>
            <h2>تمرکز بر مسئله عملیاتی سازمان؛ از کشف تهدید تا کنترل و پاسخ.</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href="/services/" aria-label={`اطلاعات بیشتر درباره ${service.title}`}>اطلاعات بیشتر</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="shell trust-grid">
          <div className="trust-copy">
            <span className="eyebrow">آماده برای محیط‌های سازمانی</span>
            <h2>طراحی‌شده برای الزامات واقعی زیرساخت‌های سازمانی.</h2>
            <p>معماری و شیوه اجرای هوش‌افزار با محدودیت‌های امنیتی، شبکه‌های ایزوله، حاکمیت داده و پیچیدگی عملیاتی سازمان‌های بزرگ سازگار است.</p>
          </div>
          <div className="trust-points">
            {trustPoints.map(([title, text]) => (
              <div key={title}><strong>{title}</strong><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta cta-redesign">
        <div className="shell cta-inner">
          <div>
            <span>برای تصمیم بهتر، ابتدا باید تصویر دقیق‌تری از مسئله داشت.</span>
            <h2>برای بررسی معماری MonoSuite یا طراحی یک خدمت تخصصی امنیت با ما گفت‌وگو کنید.</h2>
          </div>
          <Link className="button button-light" href="/contcat/">درخواست جلسه</Link>
        </div>
      </section>
    </PageShell>
  );
}
