import Link from 'next/link';
import { PageShell } from './components';

const challenges = [
  { number: '۰۱', title: 'دارایی‌های خارج از دید', text: 'دارایی‌های ناشناخته، ثبت‌نشده یا تغییرکرده می‌توانند بدون آنکه در کنترل‌های امنیتی دیده شوند، وارد سطح حمله سازمان شوند.', solution: 'ایجاد فهرست یکپارچه و به‌روز دارایی‌ها با مونوسوئیت', href: '#monosuite' },
  { number: '۰۲', title: 'ریسک بدون زمینه کافی', text: 'امتیاز آسیب‌پذیری به‌تنهایی اولویت واقعی را مشخص نمی‌کند؛ اهمیت دارایی، سرویس مرتبط و شرایط محیط باید در تصمیم‌گیری لحاظ شود.', solution: 'اولویت‌بندی ریسک بر پایه زمینه فنی و سازمانی دارایی', href: '#monosuite' },
  { number: '۰۳', title: 'داده‌های پراکنده میان ابزارها', text: 'اطلاعات شبکه، نقاط پایانی، آسیب‌پذیری و سایر ابزارهای امنیتی بدون یک نمای مشترک، تصویر ناقصی از وضعیت واقعی سازمان ایجاد می‌کنند.', solution: 'مهندسی داده و یکپارچه‌سازی ابزارهای امنیتی', href: '#services' },
  { number: '۰۴', title: 'کندی تصمیم در زمان رخداد', text: 'نبود اطلاعات زمینه‌ای یکپارچه، زمان تحلیل و تصمیم‌گیری را در لحظاتی که سرعت برای مهار تهدید اهمیت دارد افزایش می‌دهد.', solution: 'پایش، شکار تهدید و پاسخ‌گویی تخصصی', href: '#services' },
];

const chain = [
  ['شناخت دارایی', 'مونوسوئیت', true],
  ['کنترل دسترسی شبکه', 'Cisco ISE · TACACS+', false],
  ['حفاظت از داده', 'Imperva DAM', false],
  ['تشخیص و همبستگی رویداد', 'Splunk', false],
  ['پایش عملیاتی', 'Managed SOC', false],
  ['واکنش به رخداد', 'Incident Response', false],
] as const;

const services = [
  {
    tag: 'SPLUNK',
    title: 'مهندسی و راهبری اسپلانک',
    text: 'طراحی و پیاده‌سازی معماری، ورود و نرمال‌سازی داده، توسعه قواعد تشخیص و بهینه‌سازی بهره‌برداری از اسپلانک.',
    bullets: ['طراحی معماری و استقرار', 'ورود و نرمال‌سازی داده', 'مهندسی تشخیص و کاهش خطای مثبت', 'بهینه‌سازی مصرف لایسنس و انتقال دانش'],
    note: 'تأمین لایسنس و پشتیبانی تخصصی',
  },
  {
    tag: 'IMPERVA DAM',
    title: 'پایش و حفاظت فعالیت پایگاه داده',
    text: 'استقرار و راهبری ایمپروا برای کشف پایگاه‌های داده، پایش فعالیت حساس و ایجاد شواهد قابل استناد امنیتی.',
    bullets: ['نصب و راه‌اندازی', 'کشف پایگاه داده و طبقه‌بندی', 'طراحی و تنظیم سیاست‌ها', 'پایش فعالیت و پشتیبانی عملیاتی'],
    note: 'تأمین لایسنس معتبر',
  },
  {
    tag: 'CISCO ISE · TACACS+',
    title: 'کنترل دسترسی شبکه و هویت',
    text: 'طراحی و پیاده‌سازی کنترل دسترسی شبکه برای تعیین اینکه چه کاربر یا تجهیزی، با چه سطحی از دسترسی، به کدام بخش شبکه متصل شود.',
    bullets: ['طراحی معماری کنترل دسترسی', 'نصب و راه‌اندازی سیسکو ISE', 'مدیریت دسترسی تجهیزات با TACACS+', 'سیاست‌گذاری، راهبری و پشتیبانی'],
    note: 'تأمین لایسنس معتبر',
  },
  {
    tag: 'SECURITY OPERATIONS & RESPONSE',
    title: 'عملیات امنیت، شکار تهدید و پاسخ به رخداد',
    text: 'خدمات عملیاتی برای تبدیل جریان هشدار به تصمیم و اقدام؛ از پایش و شکار تهدید تا ارزیابی مرکز عملیات و پاسخ به رخداد.',
    bullets: ['پایش متمرکز یا استقرار نیرو', 'شکار تهدید هدفمند', 'ارزیابی و ارتقای بلوغ مرکز عملیات', 'تحلیل رخداد و بازسازی خط زمانی'],
    note: 'پروژه‌ای، مستمر یا رزرو ظرفیت',
  },
];

const roles = [
  ['مدیر امنیت اطلاعات', 'تصویر قابل اتکا از ریسک و وضعیت امنیت'],
  ['مدیر ممیزی و انطباق', 'شواهد کنترلی مبتنی بر داده واقعی'],
  ['مدیر زیرساخت و شبکه', 'نمای به‌روز از دارایی‌ها، تغییرات و دسترسی'],
  ['مدیر پشتیبانی کلاینت‌ها', 'موجودی نرم‌افزار، وصله و وضعیت نقاط پایانی'],
  ['تحلیلگر مرکز عملیات', 'زمینه دارایی در لحظه تریاژ و پاسخ'],
];

const trustPoints = [
  ['استقرار درون‌سازمانی', 'سامانه‌ها و اجزای راهکار در زیرساخت سازمان مستقر می‌شوند و وابستگی عملیاتی به سرویس‌های بیرونی ندارند.'],
  ['همزیستی با معماری موجود', 'راهکارها برای تکمیل و یکپارچه‌سازی با تجهیزات و ابزارهای فعلی سازمان طراحی می‌شوند، نه جایگزینی اجباری آن‌ها.'],
  ['حاکمیت کامل داده و عملیات', 'مالکیت داده، کنترل دسترسی، نگهداشت اطلاعات و فرآیندهای عملیاتی در اختیار سازمان باقی می‌ماند.'],
];

const monoMetrics = [
  ['۱۰۰٬۰۰۰', 'دارایی در ۶۰ ثانیه', 'سرعت کشف و شناسنامه‌سازی دارایی‌های سازمان'],
  ['۷۰+', 'آداپتور', 'اتصال به تجهیزات، سرویس‌ها و منابع داده سازمانی'],
  ['۱۵۰۰+', 'بررسی امن‌سازی', 'ارزیابی تنظیمات امنیتی و وضعیت هاردنینگ دارایی‌ها'],
];

const monoScores = [
  ['رصدپذیری', 'سنجش میزان کامل‌بودن شناخت سازمان از دارایی‌ها و نقاط کور اطلاعاتی'],
  ['حفاظت', 'ارزیابی وضعیت امنیتی، هاردنینگ، انطباق و سطح حفاظتی هر دارایی'],
  ['ریسک', 'اولویت‌بندی ریسک بر پایه آسیب‌پذیری، اهمیت دارایی و زمینه واقعی محیط'],
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero hero-redesign">
        <div className="shell hero-grid hero-grid-redesign">
          <div className="hero-copy">
            <span className="eyebrow">راهکارهای هوشمند امنیت سایبری</span>
            <h1>از شناخت دارایی تا واکنش به رخداد؛<em> ریسک واقعی را ببینید و دقیق‌تر تصمیم بگیرید.</em></h1>
            <p>هوش‌افزار با تلفیق سامانه بومی «هوش دارایی مونوسوئیت» و خدمات تخصصی امنیت، داده‌های پراکنده زیرساخت را به شناختی شفاف، اولویت‌بندی‌شده و قابل اقدام برای تیم‌های فناوری اطلاعات و امنیت تبدیل می‌کند.</p>
            <div className="actions">
              <Link className="button" href="/contact/">درخواست جلسه معرفی</Link>
              <a className="text-link" href="#services">مشاهده محصول و خدمات</a>
            </div>
            <div className="hero-notes" aria-label="ویژگی‌های کلیدی ارائه"><span>محصول بومی</span><span>خدمات تخصصی سازمانی</span><span>استقرار درون‌سازمانی</span></div>
          </div>

          <div className="security-chain" aria-label="زنجیره امنیت سازمانی">
            <div className="security-chain-head"><span>زنجیره امنیت سازمانی</span><strong>از شناخت دارایی تا واکنش به رخداد</strong></div>
            <div className="security-chain-body">
              {chain.map(([title, value, own]) => (
                <a key={title} href={own ? '#monosuite' : '#services'} className={`security-chain-row${own ? ' own' : ''}`}>
                  <span className="security-chain-copy"><strong>{title}</strong><small dir={value.includes('Cisco') || value.includes('Imperva') || value.includes('Splunk') || value.includes('Managed') || value.includes('Incident') ? 'ltr' : undefined}>{value}</small></span>
                  {own && <span className="security-chain-badge">سامانه بومی مونوسوئیت</span>}
                </a>
              ))}
            </div>
            <div className="security-chain-foot">هر لایه، زمینه تصمیم و اقدام لایه بعد را کامل‌تر می‌کند.</div>
          </div>
        </div>
      </section>

      <section className="credential-strip" aria-label="اعتبار محصول"><div className="shell"><span>محصول دانش‌بنیان</span><strong>سامانه بومی مونوسوئیت در حوزه مدیریت دارایی‌های سایبری</strong></div></section>

      <section className="position-strip" aria-label="مدل ارائه هوش‌افزار"><div className="shell position-grid">
        <div><b>سامانه بومی هوش دارایی</b><span dir="ltr">MonoSuite Asset Intelligence</span></div>
        <div><b>خدمات مهندسی امنیت</b><span>طراحی، استقرار، یکپارچه‌سازی و بهینه‌سازی</span></div>
        <div><b>عملیات و پاسخ</b><span>پایش، شکار تهدید، ارزیابی و پاسخ‌گویی تخصصی</span></div>
      </div></section>

      <section className="section section-challenges"><div className="shell">
        <div className="section-heading"><span className="eyebrow">مسئله‌های واقعی سازمان</span><h2>پیچیدگی زیرساخت، دیدپذیری و سرعت تصمیم را کاهش می‌دهد.</h2><p>هوش‌افزار با ایجاد پیوند میان شناخت دارایی، کنترل دسترسی، پایش، حفاظت داده و پاسخ به رخداد، شکاف‌های امنیتی را در امتداد چرخه عملیات سازمان پوشش می‌دهد و زمینه تصمیم‌گیری منسجم‌تر و اقدام مؤثرتر را فراهم می‌سازد.</p></div>
        <div className="challenge-grid challenge-grid-linked">{challenges.map((item) => (
          <article className="challenge-card" key={item.number}>
            <span className="challenge-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
            <a className="challenge-solution" href={item.href}><span>راهکار</span><strong>{item.solution}</strong><i>←</i></a>
          </article>
        ))}</div>
      </div></section>

      <section className="section services-portfolio-section" id="services"><div className="shell">
        <div className="section-heading section-heading-wide"><span className="eyebrow">خدمات تخصصی امنیت</span><h2>در کنار توسعه محصولات بومی، دانش استقرار، پیاده‌سازی و راهبری سامانه‌های تخصصی امنیت را نیز در اختیار سازمان‌ها قرار می‌دهیم.</h2><p>خدمات ما به‌صورت پروژه‌ای با دامنه مشخص یا به‌صورت راهبری و پشتیبانی مستمر ارائه می‌شوند و متناسب با معماری، حجم داده و محدودیت‌های هر سازمان طراحی می‌شوند.</p></div>
        <div className="service-portfolio-grid">{services.map((service) => (
          <article className="service-portfolio-card" key={service.title}>
            <span className="service-tech" dir="ltr">{service.tag}</span>
            <h3>{service.title}</h3><p>{service.text}</p>
            <ul>{service.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
            <small>{service.note}</small>
            <Link href="/services/">اطلاعات بیشتر ←</Link>
          </article>
        ))}</div>
      </div></section>

      <section className="section section-offerings" id="monosuite"><div className="shell">
        <div className="section-heading section-heading-wide monosuite-heading">
          <span className="eyebrow">محصول شاخص هوش‌افزار</span>
          <h2>سامانه بومی هوش دارایی مونوسوئیت</h2>
          <p>مونوسوئیت با ایجاد تصویری یکپارچه و به‌روز از دارایی‌ها و زمینه امنیتی آن‌ها، بستر اطلاعاتی لازم برای اولویت‌بندی ریسک، ارزیابی هاردنینگ و انطباق، و تسریع تصمیم‌گیری در پاسخ به رخداد را فراهم می‌سازد.</p>
        </div>

        <div className="mono-metrics">{monoMetrics.map(([value, title, text]) => (<div key={title}><b>{value}</b><strong>{title}</strong><span>{text}</span></div>))}</div>
        <div className="mono-scores">{monoScores.map(([title, text]) => (<div key={title}><span>شاخص</span><strong>{title}</strong><p>{text}</p></div>))}</div>

        <div className="offering-grid">
          <article className="offering-card offering-product">
            <div className="offering-label">خرید سامانه</div><span className="offering-name">خرید مونوسوئیت؛ سرمایه‌گذاری بلندمدت</span><h3>دید مستمر و یکپارچه از دارایی‌ها و وضعیت امنیت</h3>
            <p>سامانه‌ای درون‌سازمانی برای ایجاد موجودی یکپارچه دارایی‌های سایبری، افزایش رصدپذیری، تحلیل ریسک و ارزیابی مستمر وضعیت امنیت.</p>
            <ul><li>کشف و شناسنامه‌سازی دارایی‌های شبکه و نقاط پایانی</li><li>تجمیع و تطبیق اطلاعات دارایی از منابع متعدد</li><li>تشخیص تغییرات و نگهداشت تاریخچه دارایی</li><li>تحلیل آسیب‌پذیری و اولویت‌بندی ریسک با درنظرگرفتن زمینه دارایی</li><li>ارزیابی هاردنینگ، انطباق و وضعیت حفاظتی</li><li>استقرار درون‌سازمانی و حفظ کامل داده در زیرساخت سازمان</li></ul>
            <Link href="/monosuit/" className="text-link">معرفی کامل مونوسوئیت</Link>
          </article>
          <article className="offering-card offering-services project-service-card">
            <div className="offering-label">مدل اجرایی پروژه‌ای</div><span className="offering-name">خروجی مونوسوئیت به‌صورت پروژه</span><h3>دریافت خروجی‌های عملیاتی، بدون نیاز به خرید سامانه</h3>
            <p>در مدل اجرایی پروژه‌ای، مونوسوئیت برای استخراج شناسنامه دارایی‌ها و تحلیل سطح حمله در زیرساخت مشتری مستقر می‌شود. پس از تکمیل تحلیل‌ها و ارائه گزارش جامع ریسک، استقرار موقت سامانه پایان می‌یابد و تمامی یافته‌ها، گزارش‌ها و خروجی‌های عملیاتی در اختیار تیم امنیت سازمان قرار می‌گیرد.</p>
            <ul><li>استقرار موقت در زیرساخت سازمان</li><li>تولید موجودی، تحلیل ریسک، هاردنینگ و گزارش تغییرات</li><li>تحویل یافته‌ها، گزارش‌ها و اقدامات پیشنهادی</li><li>بدون هزینه دائمی لایسنس، نگهداشت و راهبری سامانه</li></ul>
            <Link href="/services/" className="text-link">بررسی مدل خدمت پروژه‌ای</Link>
          </article>
        </div>
      </div></section>

      <section className="section cis-section" id="cis"><div className="shell cis-grid">
        <div className="cis-copy">
          <span className="eyebrow">CIS Controls v8.1</span>
          <h2>اجرای CIS Controls از شناخت دارایی آغاز می‌شود؛ مونوسوئیت نقطه شروع این مسیر است.</h2>
          <p>در CIS Controls، کنترل ۱ بر فهرست و کنترل دارایی‌های سازمانی و کنترل ۲ بر فهرست و کنترل دارایی‌های نرم‌افزاری تمرکز دارد. مونوسوئیت با کشف، ثبت، تطبیق، تشخیص تغییر و نگهداشت مستمر اطلاعات دارایی، لایه پایه موردنیاز برای اجرای این دو کنترل را فراهم می‌کند.</p>
          <Link className="text-link" href="/monosuit/">بررسی قابلیت‌های مونوسوئیت برای CIS</Link>
        </div>
        <div className="cis-foundation-visual" aria-label="مونوسوئیت به عنوان نقطه شروع کنترل‌های یک و دو CIS">
          <div className="cis-controls-row">
            <div className="cis-control-fa"><b>۰۱</b><span>کنترل ۱</span><strong>فهرست و کنترل دارایی‌های سازمانی</strong><small dir="ltr">Inventory and Control of Enterprise Assets</small></div>
            <div className="cis-control-fa"><b>۰۲</b><span>کنترل ۲</span><strong>فهرست و کنترل دارایی‌های نرم‌افزاری</strong><small dir="ltr">Inventory and Control of Software Assets</small></div>
          </div>
          <div className="cis-up-arrows" aria-hidden="true"><span>↑</span><span>↑</span></div>
          <div className="cis-foundation"><small>نقطه شروع اجرای کنترل‌ها</small><strong>سامانه بومی هوش دارایی مونوسوئیت</strong><span>کشف، ثبت، تطبیق و نگهداشت مستمر موجودی دارایی‌های سازمانی و نرم‌افزاری</span></div>
        </div>
      </div></section>

      <section className="section role-solutions-section"><div className="shell">
        <div className="section-heading section-heading-wide"><span className="eyebrow">راهکارها بر اساس نقش</span><h2>هر تیم سازمانی، مسئله متفاوتی دارد.</h2><p>ارزش داده و خدمات امنیتی زمانی روشن می‌شود که آن را از زاویه تصمیمی ببینیم که هر نقش باید بگیرد.</p></div>
        <div className="role-solution-grid">{roles.map(([title, text], index) => (
          <Link href="/solutions/" className="role-solution-card" key={title}><span>{['۰۱','۰۲','۰۳','۰۴','۰۵'][index]}</span><strong>{title}</strong><p>{text}</p><i>←</i></Link>
        ))}</div>
      </div></section>

      <section className="section trust-section"><div className="shell trust-grid"><div className="trust-copy"><span className="eyebrow">آماده برای محیط‌های سازمانی</span><h2>برای استقرار در زیرساخت‌های حساس و پیچیده سازمانی آماده‌ایم.</h2><p>شیوه طراحی و اجرای راهکارهای هوش‌افزار با الزامات امنیتی، معماری‌های موجود، حاکمیت داده و محدودیت‌های عملیاتی سازمان‌ها هم‌راستا می‌شود.</p></div><div className="trust-points trust-points-three">{trustPoints.map(([title, text]) => (<div key={title}><strong>{title}</strong><p>{text}</p></div>))}</div></div></section>

      <section className="cta cta-redesign"><div className="shell cta-inner"><div><span>برای تصمیم بهتر، ابتدا باید تصویر دقیق‌تری از مسئله داشت.</span><h2>برای بررسی قابلیت‌های مونوسوئیت یا طراحی یک خدمت تخصصی امنیت با ما گفت‌وگو کنید.</h2></div><Link className="button button-light" href="/contact/">درخواست جلسه</Link></div></section>
    </PageShell>
  );
}
