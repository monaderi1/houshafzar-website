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
  ['۰۱', 'مسئله پیش از ابزار', 'انتخاب فناوری یا طراحی خدمت از مسئله واقعی، معماری موجود و محدودیت‌های عملیاتی سازمان آغاز می‌شود؛ نه از فهرست محصولات.'],
  ['۰۲', 'طراحی برای محیط واقعی', 'راهکار باید در شرایط واقعی زیرساخت، محدودیت‌های شبکه، الزامات محرمانگی و فرآیندهای موجود سازمان قابل استفاده باشد.'],
  ['۰۳', 'داده و زمینه برای تصمیم بهتر', 'از شناخت دارایی تا تحلیل رخداد، تلاش می‌کنیم داده خام به زمینه‌ای قابل استفاده برای اولویت‌بندی و تصمیم امنیتی تبدیل شود.'],
  ['۰۴', 'توانمندسازی تیم سازمان', 'هدف تنها تحویل فناوری یا گزارش نیست؛ مستندسازی، انتقال دانش و قابل بهره‌برداری بودن خروجی برای تیم داخلی بخشی از کار است.'],
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
                  امنیت سایبری را از مجموعه‌ای از ابزارها،
                  <em> به یک قابلیت عملیاتی تبدیل می‌کنیم</em>
                </h1>
                <p>
                  هوش‌افزار نسل پویا یک شرکت تخصصی امنیت سایبری است که محصول بومی توسعه می‌دهد، پلتفرم‌های امنیتی را مهندسی و راهبری می‌کند و در عملیات و پاسخ امنیتی کنار سازمان‌ها قرار می‌گیرد. تمرکز ما بر نیازهایی است که برای حل آن‌ها باید فناوری، داده و تجربه اجرایی در کنار هم قرار گیرند.
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
                <h2>اصولی که در طراحی محصول و اجرای پروژه‌ها دنبال می‌کنیم</h2>
              </div>
              <p>راهکار امنیتی زمانی ارزشمند است که با شرایط واقعی سازمان منطبق باشد، قابل بهره‌برداری بماند و خروجی آن به تصمیم و اقدام عملی تبدیل شود.</p>
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
                <h2>درباره چالش امنیتی سازمانتان با ما گفت‌وگو کنید</h2>
                <p>اگر مسئله شما به محصول، مهندسی یک پلتفرم امنیتی، عملیات SOC یا پاسخ تخصصی نیاز دارد، می‌توانیم از بررسی مسئله و معماری موجود شروع کنیم.</p>
              </div>
              <Link className={styles.primary} href="/contact/">درخواست جلسه مشاوره</Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
