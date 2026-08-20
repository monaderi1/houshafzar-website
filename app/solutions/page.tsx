import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './solutions.module.css';

export const metadata: Metadata = {
  title: 'راهکارهای امنیت سایبری سازمانی | هوش‌افزار',
  description: 'راهکارهای هوش‌افزار برای شناخت دارایی و ریسک، کنترل دسترسی شبکه، حفاظت داده، عملیات SOC، شکار تهدید و پاسخ به رخداد؛ متناسب با مسئله واقعی سازمان.',
};

const challenges = [
  ['۰۱', 'دارایی‌های خارج از دید', 'شناخت دارایی و ریسک'],
  ['۰۲', 'دسترسی‌های کنترل‌نشده', 'کنترل دسترسی و هویت'],
  ['۰۳', 'فعالیت حساس روی داده', 'حفاظت و پایش پایگاه داده'],
  ['۰۴', 'هشدارهای پراکنده و پرحجم', 'پایش و عملیات امنیت'],
  ['۰۵', 'تهدید یا رخداد پیچیده', 'آمادگی و پاسخ تخصصی'],
];

const solutions = [
  {
    number: '۰۱',
    label: 'ASSET VISIBILITY & RISK',
    title: 'شناخت دارایی، سطح مواجهه و ریسک واقعی سازمان',
    problem: 'دارایی‌های ناشناخته، اطلاعات پراکنده و نبود زمینه کافی باعث می‌شود تیم امنیت تصویر قابل اتکایی از سطح حمله و اولویت واقعی ریسک نداشته باشد.',
    approach: 'ایجاد یک نمای یکپارچه از دارایی‌ها، مشخصات فنی، تغییرات، آسیب‌پذیری، هاردنینگ، روابط و اهمیت کسب‌وکاری برای تبدیل موجودی خام به تصمیم امنیتی.',
    components: ['MonoSuite Asset Intelligence', 'Asset Discovery & Profiling', 'Exposure & Risk Analysis', 'Hardening & Compliance'],
    outcome: 'فهرست قابل اتکای دارایی‌ها، شناخت نقاط کور و اولویت‌بندی اقدام بر اساس زمینه واقعی هر دارایی',
    href: '/monosuit/',
    link: 'مشاهده MonoSuite',
  },
  {
    number: '۰۲',
    label: 'NETWORK ACCESS & IDENTITY',
    title: 'کنترل اینکه چه کسی و چه تجهیزی به شبکه دسترسی دارد',
    problem: 'دسترسی شبکه بدون سیاست یکپارچه، کنترل ضعیف تجهیزات و حساب‌های مدیریتی و نبود تفکیک مناسب دسترسی، سطح ریسک عملیاتی را افزایش می‌دهد.',
    approach: 'طراحی معماری کنترل دسترسی شبکه و اعمال Policy بر اساس هویت کاربر یا تجهیز، وضعیت اتصال و سطح مجاز دسترسی؛ همراه با مدیریت دسترسی مدیریتی تجهیزات.',
    components: ['Cisco ISE', 'NAC & Policy Enforcement', 'TACACS+', 'Architecture & Operations'],
    outcome: 'کنترل متمرکزتر دسترسی شبکه، سیاست‌گذاری شفاف‌تر و مدیریت ساختاریافته دسترسی‌های مدیریتی',
    href: '/services/#engineering',
    link: 'مشاهده خدمات مهندسی',
  },
  {
    number: '۰۳',
    label: 'DATA SECURITY & MONITORING',
    title: 'پایش فعالیت‌های حساس روی پایگاه‌های داده',
    problem: 'داده‌های حساس ممکن است توسط کاربران، حساب‌های ممتاز یا برنامه‌ها مورد دسترسی قرار گیرند، در حالی که تیم امنیت دید کافی و شواهد یکپارچه‌ای از این فعالیت‌ها ندارد.',
    approach: 'کشف و طبقه‌بندی پایگاه‌های داده، طراحی Policy و پایش فعالیت‌های حساس برای ایجاد دید عملیاتی و شواهد قابل استفاده در امنیت و ممیزی.',
    components: ['Imperva DAM', 'Database Discovery', 'Activity Monitoring', 'Policy & Audit Evidence'],
    outcome: 'دید دقیق‌تر نسبت به فعالیت پایگاه داده و شواهد ساختاریافته برای بررسی امنیتی و الزامات ممیزی',
    href: '/services/#engineering',
    link: 'مشاهده خدمات Imperva DAM',
  },
  {
    number: '۰۴',
    label: 'DETECTION & SECURITY OPERATIONS',
    title: 'از داده‌های امنیتی پراکنده تا تحلیل و عملیات قابل اقدام',
    problem: 'حجم بالای Log و Alert بدون مهندسی مناسب داده، قواعد تشخیص و زمینه دارایی می‌تواند تحلیلگر را در جمع‌آوری اطلاعات و اولویت‌بندی هشدارها درگیر کند.',
    approach: 'مهندسی و نرمال‌سازی داده در Splunk، توسعه و بهینه‌سازی Detection، افزودن Asset Context و در صورت نیاز ارائه ظرفیت عملیاتی برای پایش و تریاژ.',
    components: ['Splunk Engineering', 'Detection Engineering', 'MonoSuite Asset Context', 'Managed SOC'],
    outcome: 'داده قابل استفاده‌تر، تشخیص باکیفیت‌تر و زمینه بیشتر برای تریاژ، Scope و اولویت‌بندی رخداد',
    href: '/soc-role/',
    link: 'نقش MonoSuite در SOC',
  },
  {
    number: '۰۵',
    label: 'THREAT & INCIDENT READINESS',
    title: 'آمادگی برای تهدیدات پیچیده و پاسخ تخصصی به رخداد',
    problem: 'بخشی از تهدیدها از قواعد تشخیص موجود عبور می‌کنند و در زمان رخداد نیز سازمان به تحلیل عمیق، تعیین دامنه و تصمیم‌گیری فنی ساختاریافته نیاز دارد.',
    approach: 'ترکیب ارزیابی بلوغ، Threat Hunting فرضیه‌محور و Incident Response برای کشف نشانه‌های پنهان، تحلیل شواهد و همراهی تیم سازمان در کنترل و بازیابی.',
    components: ['SOC Maturity Assessment', 'Threat Hunting', 'Incident Response', 'Retainer Capacity'],
    outcome: 'شناخت شکاف‌های عملیاتی، آمادگی بیشتر تیم و دسترسی به ظرفیت تخصصی در زمان بررسی تهدید یا رخداد',
    href: '/services/#operations',
    link: 'مشاهده خدمات عملیات و پاسخ',
  },
];

const principles = [
  ['مسئله قبل از فناوری', 'معماری راهکار از چالش، ریسک و ساختار واقعی سازمان آغاز می‌شود؛ نه از الزام به استفاده از یک محصول مشخص.'],
  ['همزیستی با زیرساخت موجود', 'هدف، تکمیل قابلیت‌های موجود و ایجاد پیوند میان داده، فناوری و عملیات است؛ نه جایگزینی غیرضروری سامانه‌ها.'],
  ['استقرار متناسب با سازمان', 'محصول و خدمات بر اساس الزامات عملیاتی، محرمانگی داده و شرایط زیرساختی سازمان طراحی و اجرا می‌شوند.'],
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
                <h1>از چالش امنیتی تا معماری راهکار؛<em> فناوری و عملیات را حول مسئله واقعی سازمان کنار هم قرار می‌دهیم</em></h1>
                <p>راهکار امنیتی مؤثر معمولاً از یک ابزار منفرد ساخته نمی‌شود. شناخت دارایی، کنترل دسترسی، حفاظت داده، تشخیص و پاسخ زمانی ارزش بیشتری ایجاد می‌کنند که متناسب با معماری و اولویت‌های سازمان در یک مسیر منسجم قرار گیرند.</p>
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
                <h2>هر مسئله امنیتی، ترکیب متفاوتی از قابلیت‌ها را می‌طلبد</h2>
              </div>
              <p>در این صفحه راهکارها بر اساس مسئله سازمان دسته‌بندی شده‌اند. ممکن است یک راهکار از محصول MonoSuite، یک فناوری تخصصی، خدمات مهندسی و یا ظرفیت عملیاتی تشکیل شود. مرز میان محصول و خدمت حفظ می‌شود، اما در معماری نهایی می‌توانند مکمل یکدیگر باشند.</p>
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
              <span className={styles.darkEyebrow}>Approach</span>
              <h2>راهکار باید با معماری و عملیات سازمان سازگار باشد</h2>
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
                <h2>چالش امنیتی سازمان را به یک مسیر اجرایی مشخص تبدیل کنیم</h2>
                <p>در یک جلسه تخصصی، مسئله، زیرساخت موجود و محدودیت‌های عملیاتی را بررسی می‌کنیم تا مشخص شود کدام ترکیب از محصول، فناوری و خدمات برای سازمان شما مناسب‌تر است.</p>
              </div>
              <Link className={styles.primary} href="/contact/">درخواست جلسه مشاوره تخصصی</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
