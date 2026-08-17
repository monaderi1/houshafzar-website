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
  ['موجودی', 'موجودی عمیق و چندلایه', 'سخت‌افزار، سیستم‌عامل، نرم‌افزار، Firmware، کاربر، سرویس، Process، Patch، رابط شبکه و تاریخچه موجودی در یک نمای واحد.'],
  ['تغییرات', 'پایش تغییرات دارایی', 'مقایسه چرخه‌های موجودی و ثبت موارد افزوده، تغییرکرده و حذف‌شده برای مشاهده روند تغییرات و بررسی انحراف‌ها.'],
  ['سطح حمله', 'دید به سطح حمله داخلی', 'مشاهده پورت‌ها، سرویس‌ها، ارتباطات خارجی، USB، Shareها و وب‌سرویس‌های قابل مشاهده روی دارایی‌های تحت مدیریت.'],
  ['آسیب‌پذیری', 'ارزیابی و تجمیع یافته‌ها', 'تطبیق CPE با پایگاه محلی CVE و دریافت زمان‌بندی‌شده یافته‌های Nessus برای ایجاد زمینه آسیب‌پذیری در سطح دارایی.'],
  ['انطباق', 'هاردنینگ و انطباق', 'ارزیابی CIS Benchmark و گزارش‌دهی فنی بر پایه داده جمع‌آوری‌شده برای چارچوب‌های پشتیبانی‌شده از جمله PCI DSS و ISO/IEC 27001.'],
  ['ریسک', 'اولویت‌بندی مبتنی بر زمینه', 'ترکیب Impact و Likelihood و ایجاد Risk Score در سطح دارایی و سازمان برای تمرکز روی موارد مهم‌تر.'],
  ['کسب‌وکار', 'سرویس کسب‌وکاری و اهمیت دارایی', 'ثبت و نمایش روابط مشاهده‌شده، تعریف سرویس‌های کسب‌وکاری و استفاده از Business Impact تأییدشده سازمان در محاسبه ریسک.'],
  ['عملیات', 'Policy، اعلان و Ticket', 'ساخت Policy بر پایه داده دارایی، تغییر، آسیب‌پذیری، Exposure، Score و Compliance و ارسال اعلان یا ایجاد تیکت از مسیرهای پشتیبانی‌شده.'],
];

const scores = [
  {
    value: 85,
    display: '۸۵٪',
    fa: 'شناسایی',
    en: 'Identification Score',
    text: 'نشان می‌دهد سازمان تا چه اندازه دارایی‌های خود را کشف، شناسایی و با زمینه کافی برای استفاده عملیاتی آماده کرده است.',
    factors: ['کشف دارایی', 'داده‌های سیستمی', 'یکپارچه‌سازی داده', 'زمینه سازمانی', 'چرخه حیات', 'روابط و ارتباطات'],
    tone: 'visibility',
  },
  {
    value: 78,
    display: '۷۸٪',
    fa: 'حفاظت',
    en: 'Protection Score',
    text: 'یک نمای قابل سنجش از وضعیت حفاظتی هر دارایی بر پایه شواهد امنیتی و میزان آمادگی آن در برابر تهدید ارائه می‌کند.',
    factors: ['سطح حمله', 'آسیب‌پذیری', 'پیکربندی و انطباق', 'اهمیت دارایی', 'ریسک'],
    tone: 'protection',
  },
  {
    value: 30,
    display: '۳۰٪',
    fa: 'ریسک',
    en: 'Risk Score',
    text: 'ریسک هر دارایی را با درنظرگرفتن اهمیت و شرایط واقعی آن مشخص می‌کند و امکان تجمیع تصویر ریسک در سطح سازمان را می‌دهد.',
    factors: ['اهمیت دارایی', 'احتمال تهدید', 'آسیب‌پذیری', 'سطح حمله', 'وضعیت حفاظتی'],
    tone: 'risk',
  },
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
                <p>مونوسوئیت یک پلتفرم سازمانی و درون‌سازمانی برای کشف، فهرست‌برداری، حاکمیت و تحلیل دارایی‌های فناوری است. داده‌های شبکه، نقاط پایانی، ابزارهای امنیتی و منابع سازمانی در یک لایه هوش دارایی تجمیع می‌شوند تا تیم‌های امنیت و فناوری اطلاعات بتوانند شناخت دارایی، وضعیت حفاظتی و ریسک را بر پایه شواهد واقعی تحلیل کنند.</p>
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
              <span className={styles.eyebrowLight}>خروجی مدیریتی از داده‌های فنی</span>
              <h2>سه عدد برای دیدن وضعیت امنیت؛ از هر دارایی تا کل سازمان</h2>
              <p>مونوسوئیت داده‌های فنی و امنیتی را به سه شاخص قابل سنجش تبدیل می‌کند تا مدیر به‌جای مواجهه با انبوهی از جزئیات، در یک نگاه بداند چه میزان از محیط شناسایی شده، وضعیت حفاظتی چگونه است و ریسک در کجا متمرکز شده است. هر شاخص هم در سطح دارایی و هم در سطح سازمان قابل مشاهده است و جزئیات سازنده آن برای تحلیل بیشتر در دسترس قرار دارد.</p>
              <small className={styles.sampleNote}>اعداد نمایش‌داده‌شده نمونه هستند.</small>
            </div>
            <div className={styles.scoreCards}>
              {scores.map((score) => (
                <article className={`${styles.scoreCard} ${styles[score.tone]}`} key={score.en}>
                  <div className={styles.gaugeWrap} aria-label={`${score.fa} ${score.display}`}>
                    <svg className={styles.gaugeSvg} viewBox="0 0 180 112" aria-hidden="true">
                      <path className={styles.gaugeTrack} d="M20 92 A70 70 0 0 1 160 92" pathLength="100" />
                      <path className={styles.gaugeProgress} d="M20 92 A70 70 0 0 1 160 92" pathLength="100" style={{ strokeDasharray: `${score.value} ${100 - score.value}` }} />
                    </svg>
                    <div className={styles.gaugeValue}><b>{score.display}</b><small dir="ltr">{score.en}</small></div>
                  </div>
                  <h3>{score.fa}</h3>
                  <p>{score.text}</p>
                  <div className={styles.factorList}>{score.factors.map((factor) => <span key={factor}>{factor}</span>)}</div>
                </article>
              ))}
            </div>
            <div className={styles.scoreSummary}>
              <span>شناسایی می‌گوید چقدر از محیط را می‌شناسیم.</span>
              <span>حفاظت می‌گوید چقدر آماده‌ایم.</span>
              <strong>ریسک می‌گوید کجا باید اقدام کنیم.</strong>
            </div>
          </div>
        </div></section>

        <section className={styles.socSection}><div className="shell">
          <div className={styles.socHeading}>
            <span className={styles.eyebrow}>کاربرد در مرکز عملیات امنیت</span>
            <h2>از هشدار امنیتی تا تصمیم؛ Context دارایی از قبل آماده است</h2>
            <p>ابزارهای تشخیص رخداد را پیدا می‌کنند؛ مونوسوئیت زمینه لازم برای تصمیم را آماده می‌کند. تحلیلگر بدون جست‌وجوی دستی میان چند سامانه می‌تواند اهمیت دارایی، وضعیت امنیتی، روابط و تغییرات آن را کنار هشدار ببیند و سریع‌تر دامنه حادثه و اولویت پاسخ را مشخص کند.</p>
          </div>

          <div className={styles.integrationGrid}>
            <article className={styles.integrationCard}>
              <b>۰۱ — هشدار امنیتی</b>
              <strong>ورودی از سامانه‌های تشخیص</strong>
              <p>هشدار از منابعی مانند SIEM، EDR یا NDR همراه با شناسه دارایی، زمان رخداد و شواهد اولیه وارد فرآیند بررسی می‌شود.</p>
            </article>
            <article className={styles.integrationCard}>
              <b>۰۲ — Context مونوسوئیت</b>
              <strong>تصویر کامل دارایی درگیر</strong>
              <p>مالک و سرویس کسب‌وکاری، اهمیت دارایی، آسیب‌پذیری، هاردنینگ و انطباق، پورت‌ها و سرویس‌ها، ارتباطات، تغییرات اخیر و سه امتیاز Identification، Protection و Risk در یک نما در دسترس قرار می‌گیرد.</p>
            </article>
            <article className={styles.integrationCard}>
              <b>۰۳ — تصمیم تحلیلگر</b>
              <strong>Scope روشن‌تر و اولویت دقیق‌تر</strong>
              <p>تیم SOC سریع‌تر اهمیت واقعی رخداد، دارایی‌ها و سرویس‌های مرتبط و دامنه احتمالی حادثه را مشخص می‌کند و Investigation را بر اساس ریسک اولویت می‌دهد.</p>
            </article>
          </div>

          <div className={styles.metrics}>
            <div className={styles.metric}><b>Context</b><strong>Investigation سریع‌تر</strong><span>کاهش زمان جمع‌آوری اطلاعات پیش از شروع تحلیل</span></div>
            <div className={styles.metric}><b>Scope</b><strong>دامنه رخداد دقیق‌تر</strong><span>استفاده از روابط دارایی، سرویس و شبکه برای تشخیص محدوده اثر</span></div>
            <div className={styles.metric}><b>Risk</b><strong>اولویت پاسخ بهتر</strong><span>قرار دادن اهمیت و وضعیت ریسک دارایی در کنار خود هشدار</span></div>
          </div>

          <div className={styles.socLinkRow}><Link href="/soc-role/">کاربردهای مونوسوئیت در مرکز عملیات امنیت ←</Link></div>
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
          <div className={styles.heading}><span className={styles.eyebrow}>هاردنینگ و انطباق</span><h2>از شناسایی انحراف تا شواهد قابل گزارش</h2><p>مونوسوئیت داده‌های فنی دارایی را به ارزیابی‌های قابل استفاده برای تیم امنیت و انطباق تبدیل می‌کند و وضعیت هر کنترل را به شواهد همان دارایی متصل نگه می‌دارد.</p></div>
          <div className={styles.integrationGrid}>{compliance.map(([name,title,text]) => <article className={styles.integrationCard} key={name}><b dir="ltr">{name}</b><strong>{title}</strong><p>{text}</p></article>)}</div>
        </div></section>

        <section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><div><span>دید بهتر، تصمیم دقیق‌تر</span><h2>برای بررسی تناسب مونوسوئیت با معماری و نیازهای امنیتی سازمان، با هوش‌افزار گفت‌وگو کنید.</h2></div><Link href="/contact/">درخواست جلسه</Link></div></section>
      </main>
    </PageShell>
  );
}
