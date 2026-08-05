import Link from 'next/link';
import { PageShell } from './components';

const challenges = [
  {
    number: '۰۱',
    title: 'دارایی‌هایی که در دید نیستند',
    text: 'اطلاعات دارایی‌ها میان ابزارها، واحدها و فایل‌های مختلف پراکنده است و تصویر قابل اتکایی از وضعیت واقعی سازمان وجود ندارد.',
  },
  {
    number: '۰۲',
    title: 'ریسک‌هایی که درست اولویت‌بندی نمی‌شوند',
    text: 'شدت یک آسیب‌پذیری به‌تنهایی برای تصمیم‌گیری کافی نیست؛ اهمیت دارایی، سرویس مرتبط و شرایط محیط نیز باید در نظر گرفته شود.',
  },
  {
    number: '۰۳',
    title: 'ابزارهایی که با هم صحبت نمی‌کنند',
    text: 'داده‌های شبکه، امنیت، آسیب‌پذیری و عملیات در سامانه‌های مختلف باقی می‌مانند و به یک نمای مشترک برای تصمیم‌گیری تبدیل نمی‌شوند.',
  },
  {
    number: '۰۴',
    title: 'رخدادهایی که هماهنگی را دشوار می‌کنند',
    text: 'در زمان رخداد، دسترسی سریع به اطلاعات معتبر، تقسیم مسئولیت و ثبت تصمیم‌ها به اندازه خود ابزارهای فنی اهمیت دارد.',
  },
];

const flow = [
  ['جمع‌آوری', 'دریافت داده از منابع موجود سازمان'],
  ['یکپارچه‌سازی', 'تطبیق و حذف داده‌های تکراری'],
  ['غنی‌سازی', 'افزودن زمینه فنی و سازمانی'],
  ['تحلیل', 'سنجش وضعیت و اولویت‌بندی ریسک'],
  ['اقدام', 'گزارش، پیگیری و بهبود مستمر'],
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
    text: 'کمک به تحلیل، هماهنگی، مستندسازی و تصمیم‌گیری در رخدادهای سایبری پیچیده.',
  },
  {
    title: 'پایش و راهبری مرکز عملیات امنیت',
    text: 'تأمین نیروی متخصص، راهبری، ارزیابی و نظارت بر عملکرد مرکز عملیات امنیت.',
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
  ['استقرار در محیط سازمان', 'راهکارها و خدمات متناسب با زیرساخت‌های درون‌سازمانی طراحی می‌شوند.'],
  ['پشتیبانی از محیط‌های ایزوله', 'اجرای پروژه در محیط‌هایی که دسترسی مستقیم به اینترنت ندارند.'],
  ['محصول و خدمت در کنار هم', 'امکان خرید محصول یا دریافت خدمت بدون الزام به خرید نرم‌افزار.'],
  ['تجربه عملیاتی', 'تمرکز بر مسائل واقعی امنیت، عملیات و محدودیت‌های محیط‌های سازمانی.'],
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero hero-redesign">
        <div className="shell hero-grid hero-grid-redesign">
          <div className="hero-copy">
            <span className="eyebrow">امنیت سایبری سازمانی، مبتنی بر شناخت و اقدام</span>
            <h1>
              از شناخت دارایی تا پاسخ به رخداد،
              <em> تصمیم‌های امنیتی دقیق‌تر بگیرید.</em>
            </h1>
            <p>
              هوش‌افزار با محصول <span dir="ltr">MonoSuite Asset Intelligence</span> و مجموعه‌ای از خدمات تخصصی امنیت، به سازمان‌ها کمک می‌کند داده‌های پراکنده را به شناخت قابل استفاده، اولویت روشن و اقدام مؤثر تبدیل کنند.
            </p>
            <div className="actions">
              <Link className="button" href="/contcat/">درخواست جلسه معرفی</Link>
              <a className="text-link" href="#offerings">مشاهده محصول و خدمات</a>
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
                <span>دیدپذیری دارایی</span>
                <span>اولویت ریسک</span>
                <span>وضعیت حفاظتی</span>
                <span>گزارش و اقدام</span>
              </div>
              <div className="connector connector-one" aria-hidden="true" />
              <div className="connector connector-two" aria-hidden="true" />
            </div>
            <p>این تصویر رابط کاربری محصول نیست و فقط منطق جریان اطلاعات را نشان می‌دهد.</p>
          </div>
        </div>
      </section>

      <section className="position-strip" aria-label="مدل ارائه هوش‌افزار">
        <div className="shell position-grid">
          <div><b>یک محصول اصلی</b><span dir="ltr">MonoSuite Asset Intelligence</span></div>
          <div><b>خدمات مستقل</b><span>بدون الزام به خرید محصول</span></div>
          <div><b>اجرای سازمانی</b><span>متناسب با محدودیت‌های واقعی زیرساخت</span></div>
        </div>
      </section>

      <section className="section section-challenges">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">مسئله از ابزار شروع نمی‌شود</span>
            <h2>چالش اصلی، تبدیل داده امنیتی به شناخت و تصمیم است.</h2>
            <p>پیش از معرفی قابلیت‌ها، باید روشن باشد کدام مسئله سازمان را حل می‌کنیم و نتیجه قابل انتظار چیست.</p>
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
            <span className="eyebrow">تفکیک روشن محصول و خدمت</span>
            <h2>سازمان می‌تواند محصول بخرد یا اجرای کامل خدمت را به هوش‌افزار بسپارد.</h2>
          </div>
          <div className="offering-grid">
            <article className="offering-card offering-product">
              <div className="offering-label">محصول</div>
              <span className="offering-name" dir="ltr">MonoSuite Asset Intelligence</span>
              <h3>پلتفرم شناخت و تحلیل دارایی‌های سایبری</h3>
              <p>سامانه‌ای درون‌سازمانی برای جمع‌آوری، تجمیع و تحلیل اطلاعات دارایی‌ها، سنجش وضعیت امنیت و پشتیبانی از تصمیم‌گیری مبتنی بر داده.</p>
              <ul>
                <li>موجودی یکپارچه دارایی‌ها</li>
                <li>تحلیل دیدپذیری، حفاظت و ریسک</li>
                <li>پشتیبانی از ارزیابی انطباق</li>
                <li>استقرار در محیط مشتری</li>
              </ul>
              <Link href="/monosuit/" className="text-link">معرفی MonoSuite</Link>
            </article>

            <article className="offering-card offering-services">
              <div className="offering-label">خدمات</div>
              <span className="offering-name">تخصص و ابزار، در قالب پروژه</span>
              <h3>خدمات تخصصی امنیت بدون الزام به خرید محصول</h3>
              <p>تیم هوش‌افزار ابزارها و دانش موردنیاز را برای اجرای پروژه فراهم می‌کند؛ پس از پایان پروژه نیز سازمان الزاماً مالک یا خریدار نرم‌افزار نخواهد بود.</p>
              <ul>
                <li>اجرای پروژه‌های ارزیابی و بهبود</li>
                <li>Threat Hunting و پاسخ‌گویی به رخداد</li>
                <li>راهبری و ارزیابی عملیات امنیت</li>
                <li>تأمین مجوز و خدمات فنی تخصصی</li>
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
            <h2>محصول را با یک داشبورد ساختگی معرفی نمی‌کنیم.</h2>
            <p>به‌جای نمایش تصویری غیرواقعی از رابط کاربری، منطق ارزش‌آفرینی محصول را شفاف نشان می‌دهیم: داده‌های موجود سازمان جمع‌آوری و یکپارچه می‌شوند، زمینه لازم به آن‌ها افزوده می‌شود و در نهایت به تحلیل و اقدام تبدیل می‌شوند.</p>
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
            <span className="eyebrow">خدمات بر اساس نتیجه</span>
            <h2>نام فناوری مهم است، اما نتیجه‌ای که برای سازمان ایجاد می‌شود مهم‌تر است.</h2>
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
            <span className="eyebrow">اعتماد بدون افشای مشتری</span>
            <h2>اعتبار را با قابلیت‌های قابل اثبات می‌سازیم، نه با ادعاهای مبهم.</h2>
            <p>تا زمانی که امکان انتشار نام مشتریان وجود ندارد، سایت بر تجربه سازمانی، شیوه استقرار، توان اجرایی و مطالعات موردی ناشناس تکیه می‌کند.</p>
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
            <span>برای شروع، مسئله سازمان را دقیق تعریف می‌کنیم.</span>
            <h2>برای بررسی نیاز، معرفی محصول یا طراحی یک خدمت تخصصی با ما گفت‌وگو کنید.</h2>
          </div>
          <Link className="button button-light" href="/contcat/">درخواست جلسه</Link>
        </div>
      </section>
    </PageShell>
  );
}
