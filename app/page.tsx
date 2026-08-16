import Link from 'next/link';
import { PageShell } from './components';

const challenges = [
  {
    number: '۰۱',
    title: 'دارایی‌های خارج از دید',
    text: 'دارایی‌های ناشناخته، ثبت‌نشده یا تغییرکرده می‌توانند بدون آنکه در کنترل‌های امنیتی دیده شوند، وارد سطح حمله سازمان شوند.',
    solution: 'ایجاد فهرست یکپارچه و به‌روز دارایی‌ها با مونوسوئیت',
    href: '#monosuite',
  },
  {
    number: '۰۲',
    title: 'ریسک بدون زمینه کافی',
    text: 'امتیاز آسیب‌پذیری به‌تنهایی اولویت واقعی را مشخص نمی‌کند؛ اهمیت دارایی، سرویس مرتبط و شرایط محیط باید در تصمیم‌گیری لحاظ شود.',
    solution: 'اولویت‌بندی ریسک بر پایه زمینه فنی و سازمانی دارایی',
    href: '#monosuite',
  },
  {
    number: '۰۳',
    title: 'داده‌های پراکنده میان ابزارها',
    text: 'اطلاعات شبکه، نقاط پایانی، آسیب‌پذیری و سایر ابزارهای امنیتی بدون یک نمای مشترک، تصویر ناقصی از وضعیت واقعی سازمان ایجاد می‌کنند.',
    solution: 'تجمیع و تطبیق داده‌ها در یک نمای مشترک',
    href: '#capabilities',
  },
  {
    number: '۰۴',
    title: 'کندی تصمیم در زمان رخداد',
    text: 'نبود اطلاعات زمینه‌ای یکپارچه، زمان تحلیل و تصمیم‌گیری را در لحظاتی که سرعت برای مهار تهدید اهمیت دارد افزایش می‌دهد.',
    solution: 'غنی‌سازی اطلاعات و خدمات تخصصی پاسخ‌گویی',
    href: '#capabilities',
  },
];

const flow = [
  ['جمع‌آوری داده', 'دریافت اطلاعات از شبکه، نقاط پایانی، ابزارهای امنیتی و منابع مدیریتی سازمان'],
  ['یکپارچه‌سازی و تطبیق', 'پالایش داده‌ها، حذف اطلاعات تکراری و ایجاد نمای واحد از هر دارایی'],
  ['غنی‌سازی زمینه', 'افزودن اطلاعات فنی، امنیتی و سازمانی برای شناخت بهتر هر دارایی'],
  ['تحلیل وضعیت و ریسک', 'ارزیابی ریسک، وضعیت حفاظتی، هاردنینگ و انطباق بر اساس داده واقعی محیط'],
  ['اقدام و پیگیری', 'تبدیل یافته‌ها به اولویت‌های عملیاتی، گزارش و اقدامات اصلاحی قابل پیگیری'],
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
            <h1>ریسک واقعی را ببینید؛<em> دقیق‌تر و سریع‌تر تصمیم بگیرید.</em></h1>
            <p>هوش‌افزار با تلفیق سامانه بومی «هوش دارایی مونوسوئیت» و خدمات تخصصی امنیت، داده‌های پراکنده زیرساخت را به شناختی شفاف، اولویت‌بندی‌شده و قابل اقدام برای تیم‌های فناوری اطلاعات و امنیت تبدیل می‌کند.</p>
            <div className="actions">
              <Link className="button" href="/contcat/">درخواست جلسه معرفی</Link>
              <a className="text-link" href="#offerings">بررسی محصول و خدمات</a>
            </div>
            <div className="hero-notes" aria-label="ویژگی‌های کلیدی ارائه">
              <span>استقرار درون‌سازمانی</span><span>مناسب محیط‌های ایزوله</span>
            </div>
          </div>

          <div className="hero-system" aria-label="نمای مفهومی جریان داده تا تصمیم امنیتی">
            <div className="system-title"><span>نمای مفهومی</span><strong>از داده‌های پراکنده تا تصمیم قابل اقدام</strong></div>
            <div className="system-board">
              <div className="system-column system-sources"><small>منابع داده</small><span>شبکه و زیرساخت</span><span>نقاط پایانی</span><span>ابزارهای امنیتی</span><span>اطلاعات سازمانی</span></div>
              <div className="system-engine"><span className="engine-kicker">MonoSuite</span><strong>Asset Intelligence</strong><i aria-hidden="true" /><small>تجمیع · غنی‌سازی · تحلیل</small></div>
              <div className="system-column system-outputs"><small>خروجی تصمیم</small><span>میزان رصدپذیری دارایی‌ها</span><span>اولویت‌بندی ریسک‌ها</span><span>وضعیت هاردنینگ دارایی‌ها</span><span>تغییرات در دارایی‌ها</span></div>
              <div className="connector connector-one" aria-hidden="true" /><div className="connector connector-two" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="position-strip" aria-label="مدل ارائه هوش‌افزار"><div className="shell position-grid">
        <div><b>سامانه بومی هوش دارایی</b><span dir="ltr">MonoSuite Asset Intelligence</span></div>
        <div><b>خدمات تخصصی</b><span>دانش فنی، تجربه عملیاتی و اجرای حرفه‌ای پروژه‌های امنیت</span></div>
        <div><b>اجرای متناسب با زیرساخت</b><span>برای محیط‌های واقعی و پیچیده سازمانی</span></div>
      </div></section>

      <section className="section section-challenges"><div className="shell">
        <div className="section-heading"><span className="eyebrow">نقاط کور امنیتی</span><h2>پیچیدگی زیرساخت، دیدپذیری امنیت را کاهش می‌دهد.</h2><p>هر چالش باید به یک مسیر اقدام ختم شود؛ از شناخت دقیق دارایی تا اولویت‌بندی ریسک و پاسخ سریع‌تر.</p></div>
        <div className="challenge-grid challenge-grid-linked">{challenges.map((item) => (
          <article className="challenge-card" key={item.number}>
            <span className="challenge-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
            <a className="challenge-solution" href={item.href}><span>راهکار</span><strong>{item.solution}</strong><i>←</i></a>
          </article>
        ))}</div>
      </div></section>

      <section className="section section-offerings" id="offerings"><div className="shell">
        <div className="section-heading section-heading-wide"><span className="eyebrow">دو مدل همکاری</span><h2>مونوسوئیت را به‌عنوان سامانه مستقر کنید؛ یا خروجی‌های آن را به‌صورت پروژه دریافت کنید.</h2></div>
        <div className="offering-grid">
          <article className="offering-card offering-product" id="monosuite">
            <div className="offering-label">سامانه</div><span className="offering-name">سامانه بومی هوش دارایی مونوسوئیت</span><h3>دید مستمر و یکپارچه از دارایی‌ها و وضعیت امنیت</h3>
            <p>سامانه‌ای درون‌سازمانی برای ایجاد موجودی یکپارچه دارایی‌های سایبری، افزایش رصدپذیری، تحلیل ریسک و ارزیابی مستمر وضعیت امنیت.</p>
            <ul><li>استقرار درون‌سازمانی و پشتیبانی از محیط‌های Air-Gapped</li><li>تجمیع اطلاعات دارایی از منابع متعدد</li><li>اولویت‌بندی ریسک با درنظرگرفتن زمینه دارایی</li><li>ارزیابی وضعیت هاردنینگ و انطباق</li></ul>
            <Link href="/monosuit/" className="text-link">معرفی مونوسوئیت</Link>
          </article>
          <article className="offering-card offering-services project-service-card" id="services">
            <div className="offering-label">خدمت پروژه‌ای</div><span className="offering-name">خروجی مونوسوئیت به‌صورت پروژه</span><h3>همان خروجی‌های مونوسوئیت، بدون خرید لایسنس و نگهداشت سامانه</h3>
            <p>برای سازمان‌هایی که محدودیت خرید دارند یا ترجیح می‌دهند کار را پروژه‌ای پیش ببرند، هوش‌افزار مونوسوئیت را در محیط سازمان مستقر می‌کند، داده‌ها را جمع‌آوری و تحلیل می‌کند و خروجی‌های مورد انتظار را تحویل می‌دهد. پس از پایان پروژه، سامانه جمع‌آوری می‌شود.</p>
            <ul><li>استقرار موقت مونوسوئیت در زیرساخت سازمان</li><li>تولید موجودی دارایی، ریسک، هاردنینگ و گزارش تغییرات</li><li>تحویل گزارش‌ها، یافته‌ها و اقدامات پیشنهادی به سازمان</li><li>بدون هزینه دائمی لایسنس، نگهداشت و راهبری سامانه</li></ul>
            <Link href="/services/" className="text-link">بررسی مدل خدمت پروژه‌ای</Link>
          </article>
        </div>
      </div></section>

      <section className="section capabilities-section" id="capabilities"><div className="shell">
        <div className="section-heading section-heading-wide">
          <span className="eyebrow">حوزه‌های کاری هوش‌افزار</span>
          <h2>از شناخت دارایی تا پاسخ به رخداد؛ خدمات ما لایه‌های اصلی امنیت سازمان را پوشش می‌دهند.</h2>
          <p>هوش‌افزار خدمات و راهکارهای خود را در قالب یک معماری منسجم ارائه می‌کند. شناخت و دارایی لایه پایه است و حوزه‌های هویت، حفاظت، آسیب‌پذیری، پایش، پاسخ و حاکمیت بر این پایه شکل می‌گیرند.</p>
        </div>
        <div className="capability-architecture">
          <div className="arch-web">
            <div className="arch-web-stack">
              <Link href="/services/" className="arch-web-layer response">پاسخ، خودکارسازی و بازیابی</Link>
              <Link href="/services/" className="arch-web-layer detect">پایش، تشخیص و اطلاعات تهدید</Link>
              <Link href="/services/" className="arch-web-layer risk">مدیریت آسیب‌پذیری و سطح حمله</Link>
              <div className="arch-web-split"><Link href="/services/">هویت و دسترسی</Link><Link href="/services/">محافظت زیرساخت و داده</Link></div>
              <Link href="/monosuit/" className="arch-web-layer foundation"><strong>شناخت و دارایی — لایه پایه</strong><small>چه چیزی داریم، کجاست، متعلق به کیست و چه تغییری کرده</small></Link>
            </div>
            <Link href="/services/" className="arch-web-govern"><strong>حاکمیت، انطباق و سنجش</strong><small>اشراف بر همه لایه‌ها و سنجش وضعیت آن‌ها</small></Link>
          </div>
          <div className="capability-note"><strong>منطق ارائه خدمات:</strong><span>هر لایه از داده و شناخت لایه زیرین استفاده می‌کند؛ به همین دلیل خدمات امنیتی را جزیره‌ای طراحی نمی‌کنیم.</span></div>
        </div>
        <div className="actions capability-actions"><Link className="button" href="/services/">مشاهده خدمات هوش‌افزار</Link><Link className="text-link" href="/solutions/">بررسی راهکارها</Link></div>
      </div></section>

      <section className="section cis-section" id="cis"><div className="shell cis-grid">
        <div className="cis-copy">
          <span className="eyebrow">CIS Controls v8.1</span>
          <h2>اجرای CIS Controls از شناخت دارایی آغاز می‌شود؛ مونوسوئیت نقطه شروع این مسیر است.</h2>
          <p>در CIS Controls، کنترل ۱ بر فهرست و کنترل دارایی‌های سازمانی و کنترل ۲ بر فهرست و کنترل دارایی‌های نرم‌افزاری تمرکز دارد. مونوسوئیت با کشف، ثبت، تطبیق، تشخیص تغییر و نگهداشت مستمر اطلاعات دارایی، لایه پایه موردنیاز برای اجرای این دو کنترل را فراهم می‌کند.</p>
          <Link className="text-link" href="/monosuit/">بررسی قابلیت‌های مونوسوئیت برای CIS</Link>
        </div>
        <div className="cis-visual" aria-label="کنترل‌های یک و دو CIS و سامانه بومی هوش دارایی مونوسوئیت">
          <div className="cis-control"><b>01</b><span>CIS Control 1</span><strong>Inventory and Control of Enterprise Assets</strong></div>
          <div className="cis-bridge"><small>نقطه شروع</small><strong>مونوسوئیت</strong><i /></div>
          <div className="cis-control"><b>02</b><span>CIS Control 2</span><strong>Inventory and Control of Software Assets</strong></div>
        </div>
      </div></section>

      <section className="section product-flow-section"><div className="shell product-flow-grid">
        <div className="product-flow-copy"><span className="eyebrow eyebrow-light">منطق مونوسوئیت</span><h2>از داده خام تا تصمیم امنیتی قابل اقدام.</h2><p>مونوسوئیت اطلاعات پراکنده دارایی‌ها و ابزارهای امنیتی را جمع‌آوری، تطبیق و غنی‌سازی می‌کند تا تیم‌های فنی بتوانند وضعیت واقعی زیرساخت را ببینند، ریسک‌ها را بهتر اولویت‌بندی کنند و اقدامات اصلاحی را هدفمند پیش ببرند.</p><Link className="button button-light" href="/monosuit/">آشنایی بیشتر با محصول</Link></div>
        <ol className="flow-list">{flow.map(([title, text], index) => (<li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><p>{text}</p></div></li>))}</ol>
      </div></section>

      <section className="section trust-section"><div className="shell trust-grid"><div className="trust-copy"><span className="eyebrow">آماده برای محیط‌های سازمانی</span><h2>طراحی‌شده برای الزامات واقعی زیرساخت‌های سازمانی.</h2><p>معماری و شیوه اجرای هوش‌افزار با محدودیت‌های امنیتی، شبکه‌های ایزوله، حاکمیت داده و پیچیدگی عملیاتی سازمان‌های بزرگ سازگار است.</p></div><div className="trust-points">{trustPoints.map(([title, text]) => (<div key={title}><strong>{title}</strong><p>{text}</p></div>))}</div></div></section>

      <section className="cta cta-redesign"><div className="shell cta-inner"><div><span>برای تصمیم بهتر، ابتدا باید تصویر دقیق‌تری از مسئله داشت.</span><h2>برای بررسی قابلیت‌های مونوسوئیت یا طراحی یک خدمت تخصصی امنیت با ما گفت‌وگو کنید.</h2></div><Link className="button button-light" href="/contcat/">درخواست جلسه</Link></div></section>
    </PageShell>
  );
}
