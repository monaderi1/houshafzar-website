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
  ['۱۵۰۰+', 'توصیه CIS Benchmark', 'ارزیابی پیکربندی امنیتی برای محصولات و انواع دارایی پشتیبانی‌شده'],
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
  ['CIS Benchmark', '۱۵۰۰+ توصیه امنیتی', 'ارزیابی پیکربندی امنیتی برای محصولات و انواع دارایی پشتیبانی‌شده و نمایش نتیجه در سطح دارایی و توصیه.'],
  ['PCI DSS', 'گزارش کنترل‌های فنی', 'بررسی کنترل‌های قابل ارزیابی بر پایه داده‌های فنی و عملیاتی جمع‌آوری‌شده در مونوسوئیت.'],
  ['ISO/IEC 27001', 'نمای انطباق مبتنی بر شواهد', 'ارائه وضعیت کنترل‌های پشتیبانی‌شده بر پایه شواهد فنی موجود در سامانه.'],
];

const socContext = [
  ['مالک و سرویس', 'مالک دارایی، سرویس کسب‌وکاری و اهمیت آن برای سازمان'],
  ['وضعیت امنیتی', 'آسیب‌پذیری‌ها، هاردنینگ، انطباق و امتیازهای حفاظتی و ریسک'],
  ['سطح تماس', 'پورت‌های باز، سرویس‌ها، دسترسی اینترنت و ارتباطات قابل مشاهده'],
  ['تغییرات اخیر', 'تغییرات دارایی، نرم‌افزار، پیکربندی و روابط در چرخه‌های اخیر'],
];

const contextScores = [
  { label: 'Identification', value: 94, tone: 'identify' },
  { label: 'Protection', value: 61, tone: 'protect' },
  { label: 'Risk', value: 72, tone: 'riskMini' },
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
            <h2>از هشدار امنیتی تا تصمیم آگاهانه؛ مونوسوئیت زمینه کامل دارایی را در اختیار تحلیلگر قرار می‌دهد.</h2>
            <p>سامانه‌های تشخیص، وقوع رخداد و شواهد اولیه را در اختیار تیم SOC قرار می‌دهند؛ اما تصمیم‌گیری مؤثر نیازمند شناخت دقیق دارایی درگیر و جایگاه آن در سازمان است. مونوسوئیت با ارائه اطلاعات مالکیت، اهمیت کسب‌وکاری، وضعیت آسیب‌پذیری و هاردنینگ، روابط و ارتباطات، تغییرات اخیر و امتیازهای امنیتی، زمینه لازم را در کنار هشدار قرار می‌دهد تا تحلیلگر بتواند دامنه حادثه را سریع‌تر تعیین کند، ریسک واقعی را دقیق‌تر ارزیابی کند و اولویت پاسخ را بر مبنای شواهد مشخص سازد.</p>
          </div>

          <div className={styles.socScenario}>
            <div className={styles.alertCard}>
              <span>۰۱</span>
              <small>ورودی عملیات امنیت</small>
              <strong>هشدار از SIEM / EDR / NDR</strong>
              <p>شناسه یا نشانی دارایی درگیر، زمان رخداد و شواهد اولیه وارد فرآیند Investigation می‌شود.</p>
              <div className={styles.rawLog}>
                <small>نمونه داده ورودی</small>
                <code dir="ltr">2026-08-18T10:42:16Z host=APP-SRV-042 event=Suspicious_Process severity=high src=10.20.14.25 user=svc-pay</code>
              </div>
            </div>

            <div className={styles.socArrow}>←</div>

            <div className={styles.contextCard}>
              <div className={styles.contextTop}><span>MonoSuite Asset Context</span><b>دارایی درگیر</b></div>
              <div className={styles.contextAsset}>
                <strong>APP-SRV-042</strong>
                <span className={styles.serviceBadge}><i className={styles.serviceIcon} aria-hidden="true" />سرویس پرداخت سازمان</span>
              </div>
              <div className={styles.contextGrid}>{socContext.map(([title,text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div>
              <div className={styles.contextSignals}>
                {contextScores.map((item) => (
                  <div className={`${styles.miniScore} ${styles[item.tone]}`} key={item.label}>
                    <div className={styles.miniGauge}>
                      <svg viewBox="0 0 42 42" aria-hidden="true">
                        <circle className={styles.miniGaugeTrack} cx="21" cy="21" r="16" pathLength="100" />
                        <circle className={styles.miniGaugeProgress} cx="21" cy="21" r="16" pathLength="100" strokeDasharray={`${item.value} ${100 - item.value}`} />
                      </svg>
                      <b>{item.value}</b>
                    </div>
                    <span dir="ltr">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.socArrow}>←</div>

            <div className={styles.decisionCard}>
              <span>۰۳</span>
              <small>خروجی برای تحلیلگر</small>
              <strong>Scope و اولویت روشن‌تر</strong>
              <ul>
                <li>تشخیص سریع‌تر اهمیت واقعی رخداد</li>
                <li>شناسایی دارایی‌ها و سرویس‌های مرتبط</li>
                <li>اولویت‌بندی Investigation بر اساس ریسک</li>
                <li>کاهش زمان جمع‌آوری Context پیش از اقدام</li>
              </ul>
            </div>
          </div>

          <div className={styles.socOutcomes}>
            <div><b>Investigation سریع‌تر</b><span>Context آماده به‌جای جست‌وجوی دستی میان چند ابزار</span></div>
            <div><b>Incident Scoping دقیق‌تر</b><span>روابط دارایی، سرویس و شبکه برای تعیین دامنه رخداد</span></div>
            <div><b>اولویت پاسخ بهتر</b><span>اهمیت دارایی و وضعیت ریسک در کنار خود Alert</span></div>
            <div><b>MTTI و MTTR قابل‌کنترل‌تر</b><span>کاهش زمان صرف‌شده برای شناخت محیط پیش از تصمیم</span></div>
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