import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './monosuit.module.css';

export const metadata: Metadata = {
  title: 'مونوسوئیت | سامانه بومی هوش دارایی',
  description: 'مونوسوئیت یک پلتفرم سازمانی درون‌سازمانی برای کشف، موجودی، تحلیل سطح حمله داخلی، ارزیابی آسیب‌پذیری، هاردنینگ، انطباق و اولویت‌بندی ریسک دارایی‌های فناوری است.',
};

const metrics = [
  ['۱۰۰٬۰۰۰', 'نشانی IP در دقیقه', 'توان کشف اندازه‌گیری‌شده در شرایط عملیاتی'],
  ['۷۰+', 'آداپتور', 'اتصال به تجهیزات، سرویس‌ها و منابع داده سازمانی'],
  ['۱۵۹۸', 'توصیه CIS Benchmark', 'ارزیابی پیکربندی امنیتی برای محصولات و انواع دارایی پشتیبانی‌شده'],
];

const pillars = [
  ['شناخت', 'کشف و شناسنامه دارایی', 'کشف دارایی از شبکه و منابع سازمانی، تجمیع داده و ایجاد یک هویت قابل اتکا برای هر دارایی.'],
  ['موجودی', 'Inventory عمیق و چندلایه', 'سخت‌افزار، سیستم‌عامل، نرم‌افزار، Firmware، کاربر، سرویس، Process، Patch، رابط شبکه و تاریخچه موجودی در یک نمای واحد.'],
  ['تغییرات', 'پایش تغییرات دارایی', 'مقایسه چرخه‌های Inventory و ثبت موارد افزوده، تغییرکرده و حذف‌شده برای مشاهده روند تغییرات و بررسی انحراف‌ها.'],
  ['سطح حمله', 'دید به سطح حمله داخلی', 'مشاهده پورت‌ها، سرویس‌ها، ارتباطات خارجی، USB، Shareها و وب‌سرویس‌های قابل مشاهده روی دارایی‌های تحت مدیریت.'],
  ['آسیب‌پذیری', 'ارزیابی و تجمیع یافته‌ها', 'تطبیق CPE با پایگاه محلی CVE و دریافت زمان‌بندی‌شده یافته‌های Nessus برای ایجاد زمینه آسیب‌پذیری در سطح دارایی.'],
  ['انطباق', 'هاردنینگ و Compliance', 'ارزیابی CIS Benchmark و گزارش‌دهی فنی بر پایه داده جمع‌آوری‌شده برای چارچوب‌های پشتیبانی‌شده از جمله PCI DSS و ISO/IEC 27001.'],
  ['ریسک', 'اولویت‌بندی مبتنی بر زمینه', 'ترکیب Impact و Likelihood و ایجاد Risk Score در سطح دارایی و سازمان برای تمرکز روی موارد مهم‌تر.'],
  ['کسب‌وکار', 'Business Service و Business Impact', 'ثبت و نمایش روابط مشاهده‌شده، تعریف سرویس‌های کسب‌وکاری و استفاده از Business Impact تأییدشده سازمان در محاسبه ریسک.'],
  ['عملیات', 'Policy، اعلان و Ticket', 'ساخت Policy بر پایه داده دارایی، تغییر، آسیب‌پذیری، Exposure، Score و Compliance و ارسال اعلان یا ایجاد تیکت از مسیرهای پشتیبانی‌شده.'],
];

const scores = [
  ['gauge85', '۸۵٪', 'رصدپذیری', 'Visibility Score', 'نشان می‌دهد سازمان تا چه اندازه دارایی را شناخته، پروفایل آن را کامل کرده و تغییرات و روابط آن را زیر نظر دارد.'],
  ['gauge78', '۷۸٪', 'حفاظت', 'نشان می‌دهد هر دارایی بر پایه وضعیت آسیب‌پذیری، سطح حمله، هاردنینگ و انطباق تا چه اندازه در وضعیت حفاظتی مناسبی قرار دارد.'],
  ['gauge30', '۳۰٪', 'ریسک', 'ریسک باقی‌مانده هر دارایی را نمایش می‌دهد و همان ریسک را در سطح سرویس، سایت و کل سازمان تجمیع می‌کند.'],
];

const integrations = [
  ['ITSM', 'ایجاد تیکت از طریق آداپتورهای پشتیبانی‌شده و اتصال یافته‌های امنیتی به فرآیند پیگیری'],
  ['Splunk', 'دسترسی کاربران مجاز Splunk به داده‌های ارائه‌شده MonoSuite'],
  ['Nessus', 'اتصال به چند Nessus و دریافت زمان‌بندی‌شده یافته‌ها'],
  ['REST API', 'دسترسی API همراه با مستندات Swagger / OpenAPI'],
  ['SMTP و SMS', 'ارسال اعلان از طریق ایمیل سازمانی و درگاه‌های پیامک سازگار'],
  ['SSH و SNMP', 'استفاده در آداپتورهای پشتیبانی‌شده کشف و Inventory'],
];

const compliance = [
  ['CIS Benchmark', '۱٬۵۹۸ توصیه امنیتی', 'ارزیابی پیکربندی امنیتی برای محصولات و انواع دارایی پشتیبانی‌شده و نمایش نتیجه در سطح دارایی و توصیه.'],
  ['PCI DSS', 'گزارش کنترل‌های فنی', 'بررسی کنترل‌های قابل ارزیابی بر پایه داده‌های فنی و عملیاتی جمع‌آوری‌شده در مونوسوئیت.'],
  ['ISO/IEC 27001', 'نمای انطباق مبتنی بر شواهد', 'ارائه وضعیت کنترل‌های پشتیبانی‌شده بر پایه شواهد فنی موجود در سامانه.'],
];

export default function MonoSuitePage() {
  return (
    <PageShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>MonoSuite Asset Intelligence</span>
                <h1>از دارایی‌های پراکنده،<em> یک تصویر قابل اتکا برای تصمیم امنیتی بسازید.</em></h1>
                <p>مونوسوئیت یک پلتفرم سازمانی و درون‌سازمانی برای کشف، فهرست‌برداری، حاکمیت و تحلیل دارایی‌های فناوری است. داده‌های شبکه، نقاط پایانی، ابزارهای امنیتی و منابع سازمانی در یک لایه هوش دارایی تجمیع می‌شوند تا تیم‌های امنیت و فناوری اطلاعات بتوانند رصدپذیری، وضعیت حفاظتی و ریسک را بر پایه شواهد واقعی تحلیل کنند.</p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href="/contact/">درخواست جلسه معرفی</Link>
                  <a className={styles.secondary} href="#capabilities">بررسی قابلیت‌ها</a>
                </div>
              </div>
              <div className={styles.visual}>
                <div className={styles.visualTitle}><b>لایه هوش دارایی</b><span>از داده خام تا زمینه قابل اقدام</span></div>
                <div className={styles.stack}>
                  <div className={styles.stackItem}><strong>کشف و ورود داده</strong><small>شبکه، Inventory مبتنی بر Agent و Agentless، فایل و آداپتورها</small></div>
                  <div className={styles.stackItem}><strong>هویت و زمینه دارایی</strong><small>Inventory، شبکه، ارتباطات، سرویس کسب‌وکاری و تاریخچه تغییر</small></div>
                  <div className={styles.stackItem}><strong>تحلیل امنیت</strong><small>آسیب‌پذیری، سطح حمله داخلی، CIS Benchmark، Compliance و Scoreها</small></div>
                  <div className={styles.stackItem}><strong>تصمیم و عملیات</strong><small>اولویت‌بندی ریسک، Dashboard، گزارش، Policy، اعلان و Ticket</small></div>
                </div>
              </div>
            </div>
            <div className={styles.metrics}>{metrics.map(([value,title,text]) => <div className={styles.metric} key={title}><b>{value}</b><strong>{title}</strong><span>{text}</span></div>)}</div>
          </div>
        </section>

        <section className={styles.section} id="capabilities"><div className="shell">
          <div className={styles.heading}><span className={styles.eyebrow}>قابلیت‌های منتخب</span><h2>دامنه‌ای فراتر از یک فهرست دارایی</h2><p>مونوسوئیت شناخت دارایی، وضعیت امنیت و زمینه عملیاتی را در یک مدل واحد کنار هم قرار می‌دهد تا تیم‌ها به‌جای جابه‌جایی میان ابزارهای متعدد، از یک نمای مشترک برای تحلیل و تصمیم استفاده کنند.</p></div>
          <div className={styles.capGrid}>{pillars.map(([tag,title,text]) => <article className={styles.cap} key={title}><span>{tag}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section className={styles.sectionDark}><div className="shell">
          <div className={styles.scoreHero}>
            <div className={styles.scoreIntro}>
              <span className={styles.eyebrowLight}>هوش مدیریتی از دل داده‌های فنی</span>
              <h2>سه عدد برای پاسخ به سه سؤال مدیریتی</h2>
              <p>مونوسوئیت اطلاعات فنی و امنیتی هر دارایی را به سه شاخص قابل سنجش تبدیل می‌کند: سازمان تا چه اندازه دارایی‌های خود را می‌شناسد، وضعیت حفاظتی آن‌ها چگونه است و ریسک واقعی در کجا متمرکز شده است. این سه شاخص هم برای هر دارایی و هم برای کل سازمان محاسبه می‌شوند و هر عدد تا عوامل سازنده و شواهد فنی قابل بررسی است.</p>
              <div className={styles.scoreFlow}><span>چقدر محیط را می‌شناسیم؟</span><i>•</i><span>چقدر از دارایی‌ها محافظت شده؟</span><i>•</i><strong>ریسک واقعی کجاست؟</strong></div>
              <small className={styles.sampleNote}>اعداد زیر نمای نمونه از داشبورد مدیریتی هستند.</small>
            </div>
            <div className={styles.scoreCards}>{scores.map(([gauge,value,fa,en,text]) => <article className={styles.scoreCard} key={en}>
              <div className={`${styles.gauge} ${styles[gauge]}`}><div><b>{value}</b><small dir="ltr">{en}</small></div></div>
              <strong>{fa}</strong><p>{text}</p><span className={styles.drilldown}>از شاخص کل تا دارایی و شواهد ←</span>
            </article>)}</div>
          </div>
        </div></section>

        <section className={styles.sectionSoft}><div className="shell">
          <div className={styles.heading}><span className={styles.eyebrow}>یکپارچه‌سازی</span><h2>هوش دارایی در کنار ابزارهای موجود سازمان</h2><p>مونوسوئیت با آداپتورها و رابط‌های پشتیبانی‌شده، داده را از زیرساخت و ابزارهای امنیتی دریافت می‌کند و خروجی را در جریان‌های عملیاتی سازمان قابل استفاده می‌سازد.</p></div>
          <div className={styles.integrationGrid}>{integrations.map(([name,text]) => <article className={styles.integrationCard} key={name}><b dir="ltr">{name}</b><p>{text}</p></article>)}</div>
        </div></section>

        <section className={styles.section}><div className="shell"><div className={styles.enterpriseGrid}>
          <div className={styles.heading}><span className={styles.eyebrow}>استقرار سازمانی</span><h2>کنترل داده و عملیات در زیرساخت سازمان</h2><p>مونوسوئیت به‌صورت On-Premises در زیرساخت مشتری مستقر می‌شود و امکان بهره‌برداری در محیط‌های Air-Gapped، به‌روزرسانی آفلاین و مدیریت روزمره از طریق رابط تحت وب را فراهم می‌کند.</p></div>
          <div className={styles.enterpriseCards}>
            <article><span>۰۱</span><strong>استقرار درون‌سازمانی</strong><p>ارائه Applianceهای مجازی و نگهداشت داده و خروجی‌های امنیتی در زیرساخت کنترل‌شده سازمان.</p></article>
            <article><span>۰۲</span><strong>کار در محیط‌های ایزوله</strong><p>پشتیبانی از بهره‌برداری Air-Gapped و بسته‌های به‌روزرسانی آفلاین برای محیط‌های بدون اتصال دائمی به اینترنت.</p></article>
            <article><span>۰۳</span><strong>کنترل دسترسی و Audit</strong><p>نقش‌های سفارشی، RBAC، محدودسازی داده مبتنی بر ویژگی و ثبت فعالیت‌های مدیریتی و عملیاتی.</p></article>
          </div>
        </div></div></section>

        <section className={styles.sectionSoft}><div className="shell">
          <div className={styles.heading}><span className={styles.eyebrow}>انطباق و هاردنینگ</span><h2>وضعیت پیکربندی امنیتی را در سطح هر دارایی ببینید</h2><p>مونوسوئیت داده‌های فنی جمع‌آوری‌شده را با توصیه‌های امنیتی و نگاشت‌های از پیش تعریف‌شده مقایسه می‌کند تا وضعیت انطباق و هاردنینگ به‌صورت قابل بررسی و قابل گزارش در اختیار تیم امنیت و ممیزی قرار گیرد.</p></div>
          <div className={styles.integrationGrid}>{compliance.map(([name,title,text]) => <article className={styles.integrationCard} key={name}><b dir="ltr">{name}</b><strong>{title}</strong><p>{text}</p></article>)}</div>
        </div></section>

        <section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><div><span>دید بهتر، تصمیم دقیق‌تر</span><h2>برای بررسی تناسب مونوسوئیت با معماری و نیازهای امنیتی سازمان، با هوش‌افزار گفت‌وگو کنید.</h2></div><Link href="/contact/">درخواست جلسه</Link></div></section>
      </main>
    </PageShell>
  );
}
