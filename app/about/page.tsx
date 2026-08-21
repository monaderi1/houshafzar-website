import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'درباره هوش‌افزار | شرکت تخصصی امنیت سایبری',
  description: 'هوش‌افزار نسل پویا؛ توسعه‌دهنده MonoSuite Asset Intelligence و ارائه‌دهنده خدمات مهندسی، عملیات و پاسخ امنیتی برای سازمان‌ها.',
};

const portfolio = [
  {
    number: '۰۱',
    label: 'PRODUCT',
    title: 'توسعه محصول امنیت سایبری',
    text: 'محصول «MonoSuite Asset Intelligence» راهکار بومی هوش‌افزار برای کشف و شناخت دارایی‌ها، تحلیل وضعیت امنیتی، پایش تغییرات و اولویت‌بندی ریسک در محیط‌های سازمانی است.',
    href: '/monosuit/',
    link: 'آشنایی با MonoSuite',
  },
  {
    number: '۰۲',
    label: 'SECURITY ENGINEERING',
    title: 'مهندسی و راهبری پلتفرم‌های امنیتی',
    text: 'از معماری و استقرار تا یکپارچه‌سازی، تنظیم و پشتیبانی تخصصی فناوری‌هایی مانند Splunk، Imperva DAM و Cisco ISE؛ با تمرکز بر بهره‌برداری واقعی در زیرساخت سازمان.',
    href: '/services/#engineering',
    link: 'مشاهده خدمات مهندسی',
  },
  {
    number: '۰۳',
    label: 'SECURITY OPERATIONS',
    title: 'عملیات و پاسخ امنیتی',
    text: 'خدمات Managed SOC، Threat Hunting، Incident Response و ارزیابی بلوغ SOC برای سازمان‌هایی که به ظرفیت عملیاتی و تحلیل تخصصی امنیت نیاز دارند.',
    href: '/services/#operations',
    link: 'مشاهده خدمات عملیات و پاسخ',
  },
];

const principles = [
  ['۰۱', 'ژرفای فنی پیش از ادعای بازاریابی', 'راهکار و پیشنهاد فنی باید بر شناخت واقعی مسئله، معماری و محدودیت‌های سازمان استوار باشد؛ نه بر بزرگ‌نمایی قابلیت‌ها.'],
  ['۰۲', 'محرمانگی و مالکیت داده', 'در طراحی و اجرای راهکارها، محل نگهداری داده، الزامات محرمانگی و کنترل سازمان بر اطلاعات از ابتدا در نظر گرفته می‌شود.'],
  ['۰۳', 'شفافیت در ارزیابی امنیت', 'یافته‌ها، محدودیت‌ها و ریسک‌ها بدون بزرگ‌نمایی و با تفکیک روشن واقعیت فنی از فرضیات ارائه می‌شوند.'],
  ['۰۴', 'تعهد به قابلیت بهره‌برداری', 'هدف صرفاً نصب فناوری یا تحویل گزارش نیست؛ خروجی باید برای تیم سازمان قابل استفاده، قابل نگهداری و قابل ادامه باشد.'],
];

const differentiators = [
  {
    label: '01',
    title: 'ترکیب محصول، مهندسی و عملیات',
    text: 'هوش‌افزار صرفاً فروشنده فناوری یا ارائه‌دهنده خدمات نیست؛ توسعه محصول، مهندسی پلتفرم و عملیات امنیت را در یک مجموعه تخصصی کنار هم قرار داده است.',
  },
  {
    label: '02',
    title: 'تصمیم‌گیری مبتنی بر زمینه',
    text: 'از Asset Intelligence تا SOC، داده فنی با زمینه امنیتی و کسب‌وکاری ترکیب می‌شود تا اولویت واقعی اقدام برای تیم امنیت روشن‌تر شود.',
  },
  {
    label: '03',
    title: 'طراحی برای زیرساخت واقعی سازمان',
    text: 'محدودیت شبکه، محرمانگی، محیط‌های ایزوله، فرآیندهای موجود و قابلیت بهره‌برداری تیم داخلی بخشی از طراحی راهکار محسوب می‌شوند.',
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>درباره هوش‌افزار نسل پویا</span>
                <h1>
                  توسعه فناوری و ارائه راهکارهای تخصصی برای امنیت سایبری سازمانی
                  <em>از شناخت و مدیریت ریسک تا مهندسی پلتفرم و عملیات امنیت</em>
                </h1>
                <p>
                  هوش‌افزار نسل پویا یک شرکت تخصصی امنیت سایبری است که با توسعه محصولات بومی، مهندسی فناوری‌های امنیتی و ارائه خدمات عملیاتی، سازمان‌ها را در شناخت بهتر زیرساخت، مدیریت ریسک و ارتقای قابلیت‌های دفاع سایبری همراهی می‌کند.
                </p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href="/services/">مشاهده حوزه‌های فعالیت</Link>
                  <Link className={styles.secondary} href="/contact/">گفت‌وگو با تیم هوش‌افزار</Link>
                </div>
              </div>

              <div className={styles.model} aria-label="مدل فعالیت هوش‌افزار">
                <div className={styles.modelHead}>
                  <span>HOUSH AFZAR</span>
                  <strong>Enterprise Cybersecurity</strong>
                </div>
                <div className={styles.modelCore}>
                  <span>محصول</span>
                  <span>مهندسی</span>
                  <span>عملیات</span>
                </div>
                <div className={styles.modelFlow}>
                  <div><small>Product</small><b>Asset Intelligence</b></div>
                  <i>←</i>
                  <div><small>Engineering</small><b>Security Platforms</b></div>
                  <i>←</i>
                  <div><small>Operations</small><b>Detection & Response</b></div>
                </div>
                <div className={styles.modelFoot}>
                  <span>فناوری</span>
                  <span>زمینه</span>
                  <span>اقدام</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.identity}>
          <div className="shell">
            <div className={styles.identityGrid}>
              <div>
                <span className={styles.eyebrow}>Who We Are</span>
                <h2>شرکتی محصول‌محور با تجربه مهندسی و عملیات امنیت</h2>
              </div>
              <div className={styles.identityCopy}>
                <p>
                  فلسفه کاری هوش‌افزار بر این مبناست که امنیت مؤثر صرفاً با افزودن ابزارهای بیشتر به زیرساخت ایجاد نمی‌شود. سازمان باید بداند چه دارایی‌هایی دارد، چه چیزی واقعاً در معرض ریسک است، فناوری‌های امنیتی چگونه باید با یکدیگر کار کنند و در زمان رخداد چه تصمیمی باید گرفته شود.
                </p>
                <p>
                  به همین دلیل، فعالیت هوش‌افزار تنها به یک محصول یا یک خدمت محدود نیست. ما توسعه محصول، مهندسی فناوری و عملیات امنیت را به‌عنوان سه لایه مکمل می‌بینیم که در کنار هم می‌توانند دید بهتر، کنترل بیشتر و اقدام دقیق‌تری برای تیم امنیت ایجاد کنند.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.missionVision}>
          <div className="shell">
            <div className={styles.mvGrid}>
              <article>
                <span className={styles.mvLabel}>MISSION</span>
                <h2>تبدیل پیچیدگی امنیت سایبری به قابلیت‌های قابل استفاده در عملیات سازمان</h2>
                <p>مأموریت هوش‌افزار، توسعه فناوری و ارائه خدماتی است که به سازمان کمک کند زیرساخت خود را بهتر بشناسد، ریسک را در زمینه واقعی تحلیل کند، فناوری‌های امنیتی را مؤثرتر به‌کار گیرد و در زمان رخداد تصمیم دقیق‌تری بگیرد.</p>
              </article>
              <article>
                <span className={styles.mvLabel}>VISION</span>
                <h2>ساختن یک شرکت مرجع در فناوری و مهندسی امنیت سایبری سازمانی</h2>
                <p>چشم‌انداز ما توسعه مستمر محصولات و توانمندی‌های تخصصی است که بتوانند در محیط‌های واقعی، پیچیده و حساس سازمانی به‌صورت پایدار مورد استفاده قرار گیرند و در کنار استانداردهای معتبر امنیتی، پاسخ‌گوی نیازهای بومی نیز باشند.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.portfolio}>
          <div className="shell">
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>What We Do</span>
              <h2>از توسعه محصول تا مهندسی و عملیات امنیت</h2>
              <p>سبد فعالیت هوش‌افزار به سه حوزه اصلی تقسیم می‌شود؛ حوزه‌هایی مستقل که در پروژه‌های سازمانی می‌توانند در کنار یکدیگر نیز قرار گیرند.</p>
            </div>
            <div className={styles.portfolioGrid}>
              {portfolio.map((item) => (
                <article className={styles.portfolioCard} key={item.number}>
                  <div className={styles.cardTop}>
                    <span>{item.number}</span>
                    <small>{item.label}</small>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href}>{item.link} ←</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.thesis}>
          <div className="shell">
            <div className={styles.thesisGrid}>
              <div className={styles.thesisStatement}>
                <span className={styles.darkEyebrow}>Our Security Thesis</span>
                <h2>امنیت از شناخت دقیق محیط آغاز می‌شود و با تصمیم درست در عملیات معنا پیدا می‌کند</h2>
              </div>
              <div className={styles.thesisSteps}>
                <div><span>01</span><strong>See</strong><p>دارایی، داده و رویداد را ببینید.</p></div>
                <div><span>02</span><strong>Understand</strong><p>زمینه، اهمیت و ریسک را درک کنید.</p></div>
                <div><span>03</span><strong>Act</strong><p>اقدام را بر اساس اولویت واقعی انجام دهید.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.principles}>
          <div className="shell">
            <div className={styles.principlesHead}>
              <div>
                <span className={styles.eyebrow}>How We Work</span>
                <h2>اصولی که بر طراحی محصول و اجرای پروژه‌ها حاکم است</h2>
              </div>
              <p>راهکار امنیتی زمانی ارزشمند است که با شرایط واقعی سازمان منطبق باشد، محدودیت‌های خود را شفاف بیان کند و خروجی آن به تصمیم و اقدام عملی تبدیل شود.</p>
            </div>
            <div className={styles.principlesGrid}>
              {principles.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.differentiators}>
          <div className="shell">
            <div className={styles.diffHead}>
              <span className={styles.darkEyebrow}>Our Differentiators</span>
              <h2>آنچه رویکرد هوش‌افزار را متمایز می‌کند</h2>
              <p>هویت فنی هوش‌افزار در پیوند میان محصول بومی، فناوری‌های Enterprise و تجربه مهندسی و عملیاتی شکل گرفته است.</p>
            </div>
            <div className={styles.diffGrid}>
              {differentiators.map((item) => (
                <article key={item.label}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.monosuite}>
          <div className="shell">
            <div className={styles.monosuiteBox}>
              <div>
                <span className={styles.eyebrow}>ساخته‌شده در هوش‌افزار</span>
                <h2>MonoSuite Asset Intelligence</h2>
                <p>
                  مونوسوئیت نتیجه تمرکز هوش‌افزار بر یکی از مسائل بنیادی امنیت سازمانی است: شناخت دقیق دارایی‌ها و تبدیل داده‌های پراکنده آن‌ها به زمینه‌ای قابل استفاده برای ارزیابی امنیت و اولویت‌بندی ریسک. این سامانه به‌صورت درون‌سازمانی قابل استقرار است و برای محیط‌های سازمانی، از جمله زیرساخت‌های ایزوله، طراحی شده است.
                </p>
              </div>
              <div className={styles.productMeta}>
                <div><small>Product</small><strong>Asset Intelligence</strong></div>
                <div><small>Deployment</small><strong>On-Premises</strong></div>
                <div><small>Environment</small><strong>Enterprise / Air-Gapped</strong></div>
                <Link className={styles.primary} href="/monosuit/">مشاهده MonoSuite</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="shell">
            <div className={styles.ctaBox}>
              <div>
                <span className={styles.eyebrow}>ارتباط با هوش‌افزار</span>
                <h2>همراه شما در مسیر ارتقای امنیت سایبری سازمان</h2>
                <p>برای بررسی نیازهای امنیتی، معماری راهکار یا آشنایی با محصولات و خدمات هوش‌افزار با تیم ما گفت‌وگو کنید.</p>
              </div>
              <Link className={styles.primary} href="/contact/">ارتباط با تیم هوش‌افزار</Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
