import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './soc-role.module.css';

export const metadata: Metadata = {
  title: 'نقش MonoSuite در SOC | هوش‌افزار',
  description: 'MonoSuite با افزودن زمینه دارایی به هشدارهای امنیتی، به تحلیلگران SOC کمک می‌کند Investigation، تعیین دامنه رخداد و اولویت‌بندی اقدام را با اطلاعات کامل‌تری انجام دهند.',
};

const contextItems = [
  ['۰۱', 'هویت و مالکیت', 'سیستم‌عامل، نرم‌افزار، مالک دارایی، سرویس کسب‌وکاری و اهمیت آن برای سازمان'],
  ['۰۲', 'وضعیت امنیتی', 'آسیب‌پذیری‌ها، وضعیت هاردنینگ و انطباق، Protection Score و Risk Score'],
  ['۰۳', 'سطح تماس', 'پورت‌های باز، سرویس‌ها، دسترسی اینترنت و ارتباطات قابل مشاهده'],
  ['۰۴', 'تغییرات اخیر', 'تغییرات دارایی، نرم‌افزار، پیکربندی و روابط در چرخه‌های اخیر'],
];

const outcomes = [
  ['Investigation سریع‌تر', 'تحلیلگر برای شناخت دارایی درگیر مجبور نیست اطلاعات پایه را از چند سامانه جداگانه جمع‌آوری کند.'],
  ['Scope دقیق‌تر', 'زمینه فنی و سازمانی دارایی کمک می‌کند دامنه رخداد و دارایی‌های مهم‌تر برای بررسی مشخص شوند.'],
  ['اولویت‌بندی بهتر', 'شدت هشدار در کنار اهمیت دارایی، Exposure، آسیب‌پذیری و وضعیت حفاظتی دیده می‌شود.'],
  ['تصمیم مبتنی بر زمینه', 'تحلیل و Escalation بر پایه یک تصویر مشترک از دارایی انجام می‌شود، نه فقط متن خام هشدار.'],
];

const flow = [
  ['۰۱', 'Detection', 'SIEM / EDR / NDR', 'هشدار یا رخداد با شناسه دارایی و شواهد اولیه وارد فرآیند تحلیل می‌شود.'],
  ['۰۲', 'Asset Context', 'MonoSuite', 'مونوسوئیت زمینه فنی، امنیتی و کسب‌وکاری دارایی را در اختیار تحلیلگر قرار می‌دهد.'],
  ['۰۳', 'Investigation', 'Analyst', 'تحلیلگر هشدار را با شناخت دقیق‌تری از دارایی، تغییرات و وضعیت امنیتی بررسی می‌کند.'],
  ['۰۴', 'Decision', 'Scope & Priority', 'دامنه بررسی، اولویت اقدام و مسیر Escalation با زمینه کامل‌تری تعیین می‌شود.'],
];

export default function SocRolePage() {
  return (
    <PageShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>MonoSuite for Security Operations</span>
                <h1>هشدار را می‌بینید؛<em> اما درباره دارایی درگیر چه می‌دانید؟</em></h1>
                <p>ابزارهای تشخیص معمولاً می‌گویند چه اتفاقی افتاده است. تحلیلگر SOC برای تصمیم‌گیری به سؤال دیگری هم نیاز دارد: این اتفاق روی چه دارایی‌ای رخ داده، آن دارایی چقدر مهم است، چه وضعیتی دارد و چه چیزی اخیراً در آن تغییر کرده است؟</p>
                <p>مونوسوئیت این <strong>زمینه دارایی</strong> را به فرآیند Investigation اضافه می‌کند تا هشدار از یک Event خام به یک مسئله قابل تحلیل تبدیل شود.</p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href="/contact/">درخواست جلسه معرفی</Link>
                  <Link className={styles.secondary} href="/monosuit/">مشاهده MonoSuite</Link>
                </div>
              </div>

              <div className={styles.alertVisual} aria-label="نمونه جریان تحلیل هشدار">
                <div className={styles.alertTop}>
                  <div><span className={styles.alertDot}></span><b>Security Alert</b></div>
                  <span className={styles.high}>HIGH</span>
                </div>
                <div className={styles.alertBody}>
                  <code dir="ltr">host=APP-SRV-042<br/>event=Suspicious_Process<br/>severity=high</code>
                </div>
                <div className={styles.contextLine}><span>+</span><b>Asset Context</b></div>
                <div className={styles.miniGrid}>
                  <div><small>مالک / سرویس</small><strong>Payment Service</strong></div>
                  <div><small>Risk Score</small><strong>۷۲</strong></div>
                  <div><small>Protection</small><strong>۶۱٪</strong></div>
                  <div><small>Recent Change</small><strong>Detected</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.flowSection}>
          <div className="shell">
            <div className={styles.heading}>
              <span className={styles.eyebrow}>از هشدار تا تصمیم</span>
              <h2>زمینه دارایی در کجای فرآیند SOC قرار می‌گیرد؟</h2>
              <p>مونوسوئیت جایگزین SIEM، EDR یا ابزارهای تشخیص نیست؛ یک لایه زمینه‌ای در کنار آن‌هاست که به تحلیلگر کمک می‌کند رخداد را در بستر واقعی دارایی تحلیل کند.</p>
            </div>
            <div className={styles.flow}>
              {flow.map(([n,en,title,text], index) => (
                <article className={styles.flowCard} key={n}>
                  <div className={styles.flowNumber}>{n}</div>
                  <small>{en}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {index < flow.length - 1 && <span className={styles.arrow} aria-hidden="true">←</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contextSection}>
          <div className="shell">
            <div className={styles.contextGrid}>
              <div className={styles.contextIntro}>
                <span className={styles.eyebrow}>Asset Context</span>
                <h2>تحلیلگر به‌جای یک IP، یک دارایی با زمینه کامل می‌بیند</h2>
                <p>شناسه یا IP به‌تنهایی برای تصمیم امنیتی کافی نیست. مونوسوئیت اطلاعات پراکنده مربوط به دارایی را در یک زمینه مشترک کنار هم قرار می‌دهد تا تحلیلگر بداند با چه چیزی مواجه است.</p>
                <div className={styles.scoreStrip}>
                  <div><small>Identification</small><b>۹۴٪</b></div>
                  <div><small>Protection</small><b>۶۱٪</b></div>
                  <div><small>Risk</small><b>۷۲</b></div>
                </div>
              </div>
              <div className={styles.contextCards}>
                {contextItems.map(([n,title,text]) => (
                  <article key={title}>
                    <span>{n}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.outcomesSection}>
          <div className="shell">
            <div className={styles.heading}>
              <span className={styles.eyebrow}>Operational Value</span>
              <h2>تمرکز بیشتر تحلیلگر روی تحلیل، نه جمع‌آوری زمینه</h2>
              <p>ارزش اصلی مونوسوئیت در SOC این است که اطلاعات موردنیاز برای فهم دارایی را در لحظه Investigation در دسترس قرار می‌دهد و تصمیم‌گیری را بر پایه زمینه واقعی سازمان ممکن می‌کند.</p>
            </div>
            <div className={styles.outcomes}>
              {outcomes.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className={styles.darkSection}>
          <div className="shell">
            <div className={styles.darkGrid}>
              <div>
                <span className={styles.darkEyebrow}>یک لایه مشترک برای تیم امنیت</span>
                <h2>Detection می‌گوید چه اتفاقی افتاده؛ Asset Intelligence می‌گوید این اتفاق چقدر اهمیت دارد.</h2>
              </div>
              <div className={styles.questions}>
                <div><span>۰۱</span><p>این دارایی چیست و چه کسی مالک آن است؟</p></div>
                <div><span>۰۲</span><p>چه سرویس کسب‌وکاری به آن وابسته است؟</p></div>
                <div><span>۰۳</span><p>آیا آسیب‌پذیر، در معرض تماس یا ضعیف پیکربندی شده است؟</p></div>
                <div><span>۰۴</span><p>آیا قبل از هشدار، تغییر مهمی روی آن رخ داده است؟</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="shell">
            <div className={styles.ctaBox}>
              <div><span className={styles.eyebrow}>MonoSuite Asset Intelligence</span><h2>زمینه دارایی را وارد جریان تحلیل SOC کنید</h2><p>برای مشاهده نحوه استفاده از اطلاعات دارایی، Scoreها، تغییرات و وضعیت امنیتی در فرآیند Investigation، یک جلسه معرفی هماهنگ کنید.</p></div>
              <Link className={styles.primary} href="/contact/">درخواست جلسه معرفی</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
