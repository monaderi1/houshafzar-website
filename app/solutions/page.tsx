import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './solutions.module.css';

export const metadata: Metadata = {
  title: 'راهکارهای امنیت سایبری سازمانی | هوش‌افزار',
  description: 'راهکارهای هوش‌افزار برای شناخت و حکمرانی دارایی‌ها، کنترل دسترسی شبکه، حفاظت از داده، غنی‌سازی عملیات SOC و آمادگی و پاسخ به رخداد؛ متناسب با معماری و نیاز واقعی سازمان.',
};

const challenges = [
  ['۰۱', 'دارایی‌های خارج از دید', 'هوش دارایی و مدیریت سطح مواجهه'],
  ['۰۲', 'دسترسی‌های کنترل‌نشده', 'کنترل دسترسی و هویت'],
  ['۰۳', 'فعالیت حساس روی داده', 'حفاظت و پایش پایگاه داده'],
  ['۰۴', 'هشدارهای پراکنده و پرحجم', 'غنی‌سازی عملیات SOC'],
  ['۰۵', 'تهدید یا رخداد پیچیده', 'آمادگی و پاسخ تخصصی'],
];

const solutions = [
  {
    number: '۰۱',
    label: 'ASSET INTELLIGENCE & EXPOSURE',
    title: 'شناخت و حکمرانی دارایی‌ها و مدیریت سطح مواجهه',
    problem: 'دارایی‌های ناشناخته، اطلاعات پراکنده و نبود زمینه کافی، دید قابل اتکا نسبت به سطح مواجهه، وضعیت امنیتی و اولویت واقعی ریسک را دشوار می‌کند.',
    approach: 'ایجاد نمای یکپارچه از دارایی‌ها و زمینه فنی و سازمانی آن‌ها؛ از کشف و شناسنامه‌سازی تا تحلیل تغییرات، آسیب‌پذیری، هاردنینگ، انطباق، روابط و اهمیت کسب‌وکاری.',
    components: ['MonoSuite Asset Intelligence', 'Asset Discovery & Profiling', 'Exposure & Risk Analysis', 'Hardening & Compliance'],
    outcome: 'شناخت نقاط کور، ارزیابی وضعیت امنیتی دارایی‌ها و اولویت‌بندی اقدام بر اساس زمینه واقعی هر دارایی',
    href: '/monosuit/',
    link: 'مشاهده MonoSuite',
  },
  {
    number: '۰۲',
    label: 'NETWORK ACCESS & IDENTITY',
    title: 'کنترل یکپارچه دسترسی کاربران و تجهیزات به شبکه',
    problem: 'نبود سیاست متمرکز برای دسترسی کاربران، تجهیزات و حساب‌های مدیریتی می‌تواند کنترل‌پذیری شبکه را کاهش داده و ریسک دسترسی‌های نامتناسب را افزایش دهد.',
    approach: 'طراحی معماری کنترل دسترسی شبکه و اعمال Policy بر مبنای هویت کاربر یا تجهیز، شرایط اتصال و سطح دسترسی مجاز؛ همراه با مدیریت ساختاریافته دسترسی مدیریتی تجهیزات.',
    components: ['Cisco ISE', 'NAC & Policy Enforcement', 'TACACS+', 'Architecture & Operations'],
    outcome: 'کنترل متمرکزتر دسترسی شبکه، سیاست‌گذاری شفاف‌تر و مدیریت ساختاریافته دسترسی‌های مدیریتی',
    href: '/services/#engineering',
    link: 'مشاهده خدمات مهندسی',
  },
  {
    number: '۰۳',
    label: 'DATA SECURITY & MONITORING',
    title: 'پایش و کنترل فعالیت‌های حساس روی پایگاه‌های داده',
    problem: 'دسترسی کاربران، حساب‌های ممتاز و برنامه‌ها به داده‌های حساس، بدون پایش و شواهد ساختاریافته، می‌تواند بررسی امنیتی و پاسخ‌گویی به الزامات ممیزی را دشوار کند.',
    approach: 'کشف و طبقه‌بندی پایگاه‌های داده، طراحی Policy و پایش فعالیت‌های حساس برای ایجاد دید عملیاتی نسبت به نحوه دسترسی و استفاده از داده.',
    components: ['Imperva DAM', 'Database Discovery', 'Activity Monitoring', 'Policy & Audit Evidence'],
    outcome: 'دید دقیق‌تر نسبت به فعالیت‌های پایگاه داده و شواهد ساختاریافته برای تحلیل امنیتی و فرآیندهای ممیزی',
    href: '/services/#engineering',
    link: 'مشاهده خدمات Imperva DAM',
  },
  {
    number: '۰۴',
    label: 'SOC ENRICHMENT & SECURITY OPERATIONS',
    title: 'غنی‌سازی عملیات SOC با زمینه دارایی و مهندسی تشخیص',
    problem: 'حجم بالای Log و Alert بدون مهندسی مناسب داده، قواعد تشخیص مؤثر و زمینه کافی از دارایی، زمان تحلیلگر را صرف جمع‌آوری اطلاعات و تعیین اولویت می‌کند.',
    approach: 'مهندسی و نرمال‌سازی داده در Splunk، توسعه و بهینه‌سازی Detection و افزودن Asset Context به جریان تحلیل؛ همراه با ظرفیت عملیاتی برای پایش و تریاژ در صورت نیاز.',
    components: ['Splunk Engineering', 'Detection Engineering', 'MonoSuite Asset Context', 'Managed SOC'],
    outcome: 'داده قابل استفاده‌تر، کیفیت بالاتر تشخیص و زمینه بیشتر برای تریاژ، تعیین دامنه و اولویت‌بندی رخداد',
    href: '/soc-role/',
    link: 'نقش MonoSuite در SOC',
  },
  {
    number: '۰۵',
    label: 'THREAT & INCIDENT READINESS',
    title: 'ارتقای آمادگی و پاسخ تخصصی به تهدیدها و رخدادهای پیچیده',
    problem: 'برخی تهدیدها از قواعد تشخیص موجود عبور می‌کنند و هنگام رخداد نیز سازمان به تحلیل عمیق، تعیین دامنه و تصمیم‌گیری فنی ساختاریافته نیاز دارد.',
    approach: 'ترکیب ارزیابی بلوغ، Threat Hunting فرضیه‌محور و Incident Response برای شناسایی شکاف‌ها، کشف نشانه‌های پنهان، تحلیل شواهد و همراهی تیم سازمان در کنترل و بازیابی.',
    components: ['SOC Maturity Assessment', 'Threat Hunting', 'Incident Response', 'Retainer Capacity'],
    outcome: 'شناخت شکاف‌های عملیاتی، افزایش آمادگی تیم و دسترسی به ظرفیت تخصصی در زمان بررسی تهدید یا رخداد',
    href: '/services/#operations',
    link: 'مشاهده خدمات عملیات و پاسخ',
  },
];

const principles = [
  ['معماری متناسب با زیرساخت سازمان', 'راهکار بر اساس الزامات عملیاتی، محرمانگی داده و شرایط واقعی زیرساخت طراحی می‌شود؛ در راهکارهایی مانند MonoSuite امکان استقرار کامل درون‌سازمانی نیز فراهم است.'],
  ['هم‌پیوستگی با سامانه‌های موجود', 'هدف، تکمیل قابلیت‌های فعلی و ایجاد پیوند میان داده، فناوری و عملیات است تا از جایگزینی غیرضروری سامانه‌های موجود پرهیز شود.'],
  ['تحلیل مبتنی بر زمینه', 'تصمیم امنیتی با اتکا به زمینه فنی، امنیتی و کسب‌وکاری دقیق‌تر می‌شود؛ از شناخت دارایی تا تریاژ، اولویت‌بندی و پاسخ.'],
];

export default function SolutionsPage() {
  return (
    <PageShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>راهکارهای امنیت سایبری سازمانی</span>
                <h1>راهکارهای امنیت سایبری برای<em> چالش‌های واقعی زیرساخت سازمان</em></h1>
                <p>هوش‌افزار با ترکیب هوش دارایی، مهندسی فناوری و عملیات تخصصی امنیت، برای چالش‌هایی مانند شناخت و اولویت‌بندی ریسک دارایی‌ها، کنترل دسترسی، حفاظت از داده، عملیات SOC و پاسخ به رخداد، راهکارهایی متناسب با معماری و نیاز سازمان ارائه می‌کند.</p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href="/contact/">درخواست جلسه مشاوره تخصصی</Link>
                  <a className={styles.secondary} href="#solutions">مشاهده راهکارها</a>
                </div>
              </div>

              <div className={styles.solutionMap} aria-label="نقشه راهکارهای امنیتی هوش‌افزار">
                <div className={styles.mapHead}><span>Security Solution Map</span><b>مسئله → قابلیت → اقدام</b></div>
                <div className={styles.mapBody}>
                  {challenges.map(([n, problem, solution]) => (
                    <div className={styles.mapRow} key={n}>
                      <span className={styles.mapNumber}>{n}</span>
                      <div><small>چالش</small><b>{problem}</b></div>
                      <span className={styles.mapArrow}>←</span>
                      <div><small>جهت راهکار</small><strong>{solution}</strong></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <div className="shell">
            <div className={styles.introGrid}>
              <div>
                <span className={styles.eyebrow}>Solution Architecture</span>
                <h2>هر چالش امنیتی، معماری متناسب با خود را می‌طلبد</h2>
              </div>
              <p>راهکارها بر مبنای مسئله، ریسک و شرایط عملیاتی سازمان شکل می‌گیرند. بسته به نیاز، یک معماری می‌تواند از MonoSuite، فناوری‌های تخصصی، خدمات مهندسی و ظرفیت عملیاتی تشکیل شود؛ اجزایی مستقل که در کنار یکدیگر مسیر منسجم‌تری برای کنترل ریسک ایجاد می‌کنند.</p>
            </div>
          </div>
        </section>

        <section className={styles.solutionsSection} id="solutions">
          <div className="shell">
            <div className={styles.solutionList}>
              {solutions.map((solution) => (
                <article className={styles.solutionCard} key={solution.number}>
                  <div className={styles.solutionIndex}>
                    <span>{solution.number}</span>
                    <small>{solution.label}</small>
                  </div>
                  <div className={styles.solutionMain}>
                    <h2>{solution.title}</h2>
                    <div className={styles.problemBlock}>
                      <span>چالش سازمان</span>
                      <p>{solution.problem}</p>
                    </div>
                    <div className={styles.approachBlock}>
                      <span>معماری راهکار</span>
                      <p>{solution.approach}</p>
                    </div>
                    <div className={styles.components}>
                      {solution.components.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                  <div className={styles.solutionOutcome}>
                    <span>خروجی مورد انتظار</span>
                    <p>{solution.outcome}</p>
                    <Link href={solution.href}>{solution.link} ←</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className="shell">
            <div className={styles.principlesHead}>
              <span className={styles.darkEyebrow}>Why Hoosh Afzar Solutions</span>
              <h2>راهکارهایی هماهنگ با معماری، داده و عملیات سازمان</h2>
            </div>
            <div className={styles.principlesGrid}>
              {principles.map(([title, text], index) => (
                <article key={title}><span>۰{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="shell">
            <div className={styles.ctaBox}>
              <div>
                <span className={styles.eyebrow}>Solution Discovery</span>
                <h2>راهکار متناسب با معماری و نیاز سازمان خود را تعریف کنید</h2>
                <p>در یک جلسه تخصصی، چالش‌های امنیتی، زیرساخت موجود و محدودیت‌های عملیاتی بررسی می‌شوند تا ترکیب مناسب محصول، فناوری و خدمات برای سازمان مشخص شود.</p>
              </div>
              <Link className={styles.primary} href="/contact/">درخواست جلسه هم‌اندیشی و ارزیابی</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
