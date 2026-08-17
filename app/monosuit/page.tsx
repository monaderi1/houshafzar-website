import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './monosuit.module.css';

export const metadata: Metadata = {
  title: 'مونوسوئیت | سامانه بومی هوش دارایی',
  description: 'مونوسوئیت یک پلتفرم سازمانی درون‌سازمانی برای کشف، موجودی، تحلیل سطح حمله داخلی، ارزیابی آسیب‌پذیری، هاردنینگ، انطباق و اولویت‌بندی ریسک دارایی‌های فناوری است.',
};

const metrics = [
  ['۱۰۰٬۰۰۰', 'نشانی IP در دقیقه', 'توان کشف اندازه‌گیری‌شده در شرایط آزمون'],
  ['۷۰+', 'آداپتور', 'اتصال به تجهیزات، سرویس‌ها و منابع داده سازمانی'],
  ['۱۵۹۸', 'توصیه CIS Benchmark', 'پوشش نگهداشت‌شده برای ارزیابی پیکربندی امنیتی'],
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
  ['Visibility', 'رصدپذیری', 'میزان کامل‌بودن و قابل‌استفاده‌بودن شناخت سازمان از هر دارایی و وضعیت کلی دارایی‌ها.'],
  ['Protection', 'حفاظت', 'نمایی از وضعیت امنیت، آسیب‌پذیری، انطباق، Exposure، احراز هویت، Certificate و سایر عوامل حفاظتی.'],
  ['Risk', 'ریسک', 'نمای ریسک با ساختار Impact × Likelihood در سطح دارایی و تجمیع آن در سطح سازمان.'],
];

const integrations = [
  ['Jira', 'ایجاد تیکت و همگام‌سازی وضعیت‌های پشتیبانی‌شده'],
  ['Splunk', 'دسترسی کاربران مجاز Splunk به داده‌های ارائه‌شده MonoSuite'],
  ['Nessus', 'اتصال به چند Nessus و دریافت زمان‌بندی‌شده یافته‌ها'],
  ['REST API', 'دسترسی API همراه با مستندات Swagger / OpenAPI'],
  ['SMTP و SMS', 'ارسال اعلان از طریق ایمیل سازمانی و درگاه‌های پیامک سازگار'],
  ['SSH و SNMP', 'استفاده در آداپتورهای پشتیبانی‌شده کشف و Inventory'],
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

        <section className={styles.sectionDark}><div className="shell"><div className={styles.scoreGrid}>
          <div className={styles.scoreIntro}><span className={styles.eyebrowLight}>سه نمای مدیریتی و عملیاتی</span><h2>رصدپذیری، حفاظت و ریسک؛ در سطح دارایی و سازمان</h2><p>سه Score مکمل، داده فنی را به شاخص‌هایی قابل فهم برای مدیریت و قابل Drill-down برای تیم‌های عملیاتی تبدیل می‌کنند.</p></div>
          <div className={styles.scoreCards}>{scores.map(([en,fa,text]) => <article className={styles.scoreCard} key={en}><small dir="ltr">{en} Score</small><strong>{fa}</strong><p>{text}</p></article>)}</div>
        </div></div></section>

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
          <div className={styles.heading}><span className={styles.eyebrow}>مدل استفاده</span><h2>خرید سامانه یا دریافت خروجی به‌صورت پروژه</h2><p>بسته به مدل بهره‌برداری سازمان، مونوسوئیت می‌تواند به‌عنوان یک سامانه دائمی یا ابزار اجرای یک پروژه تخصصی مورد استفاده قرار گیرد.</p></div>
          <div className={styles.deployGrid}>
            <article className={`${styles.deployCard} ${styles.dark}`}><span className={styles.label}>خرید سامانه</span><h3>دید مستمر برای مدیریت دارایی و وضعیت امنیت</h3><p>مناسب سازمان‌هایی که به یک لایه دائمی هوش دارایی برای کشف، Inventory، تحلیل ریسک، هاردنینگ و پایش تغییرات نیاز دارند.</p><ul><li>شناخت و Inventory مستمر دارایی‌ها</li><li>Visibility، Protection و Risk Score</li><li>تحلیل آسیب‌پذیری، Exposure و Compliance</li><li>استقرار و حاکمیت داده در زیرساخت سازمان</li></ul></article>
            <article className={styles.deployCard}><span className={styles.label}>مدل اجرایی پروژه‌ای</span><h3>دریافت خروجی‌های عملیاتی، بدون نیاز به خرید سامانه</h3><p>مونوسوئیت به‌صورت موقت در زیرساخت سازمان مستقر می‌شود تا شناسنامه دارایی‌ها، وضعیت امنیت، ریسک و یافته‌های قابل اقدام استخراج و در قالب خروجی پروژه تحویل شود.</p><ul><li>استقرار موقت در زیرساخت سازمان</li><li>تولید موجودی و تحلیل وضعیت امنیت</li><li>گزارش ریسک، هاردنینگ و تغییرات</li><li>تحویل یافته‌ها و خروجی‌های عملیاتی</li></ul></article>
          </div>
        </div></section>

        <section className={styles.section}><div className="shell"><div className={styles.cis}>
          <div className={styles.heading}><span className={styles.eyebrow}>CIS Controls v8.1</span><h2>اجرای CIS Controls از شناخت دارایی آغاز می‌شود</h2><p>کنترل ۱ بر فهرست و کنترل دارایی‌های سازمانی و کنترل ۲ بر فهرست و کنترل دارایی‌های نرم‌افزاری تمرکز دارد. مونوسوئیت با کشف، ثبت، Inventory و نگهداشت مستمر اطلاعات دارایی، زیرساخت اطلاعاتی لازم برای اجرای این دو کنترل را فراهم می‌کند.</p></div>
          <div className={styles.cisVisual}><div className={styles.cisControls}><div className={styles.cisCard}><b>۰۱</b><strong>فهرست و کنترل دارایی‌های سازمانی</strong><small dir="ltr">Inventory and Control of Enterprise Assets</small></div><div className={styles.cisCard}><b>۰۲</b><strong>فهرست و کنترل دارایی‌های نرم‌افزاری</strong><small dir="ltr">Inventory and Control of Software Assets</small></div></div><div className={styles.cisFoundation}><small>پایه اطلاعاتی کنترل‌ها</small><strong>MonoSuite Asset Intelligence</strong></div></div>
        </div></div></section>

        <section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><div><span>دید بهتر، تصمیم دقیق‌تر</span><h2>برای بررسی تناسب مونوسوئیت با معماری و نیازهای امنیتی سازمان، با هوش‌افزار گفت‌وگو کنید.</h2></div><Link href="/contact/">درخواست جلسه</Link></div></section>
      </main>
    </PageShell>
  );
}
