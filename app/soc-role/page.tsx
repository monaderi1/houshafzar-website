import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './soc-role.module.css';
import SocAlertVisual from './SocAlertVisual';

export const metadata: Metadata = {
  title: 'نقش MonoSuite در SOC | هوش‌افزار',
  description: 'MonoSuite با افزودن زمینه دارایی به هشدارهای امنیتی، به تحلیلگران SOC کمک می‌کند Investigation، تعیین دامنه رخداد و اولویت‌بندی اقدام را با اطلاعات کامل‌تری انجام دهند.',
};

const contextItems = [
  ['۰۱', 'هویت و اهمیت دارایی', 'سیستم‌عامل، نرم‌افزارها، مالک دارایی، سرویس کسب‌وکاری و اهمیت آن در سازمان'],
  ['۰۲', 'وضعیت امنیتی', 'آسیب‌پذیری‌ها، وضعیت هاردنینگ و انطباق و شاخص‌های Protection و Risk'],
  ['۰۳', 'سطح مواجهه', 'پورت‌های باز، سرویس‌ها، دسترسی اینترنت و ارتباطات قابل مشاهده دارایی'],
  ['۰۴', 'تغییرات اخیر', 'تغییرات ثبت‌شده در نرم‌افزار، پیکربندی، مشخصات و روابط دارایی طی چرخه‌های اخیر'],
];

const outcomes = [
  ['تسریع در Investigation', 'کاهش نیاز تحلیلگر به جمع‌آوری دستی اطلاعات پایه دارایی از منابع متعدد.'],
  ['تعیین دقیق‌تر دامنه رخداد', 'استفاده از زمینه فنی، ارتباطات و اهمیت دارایی برای مشخص‌کردن محدوده بررسی.'],
  ['اولویت‌بندی مبتنی بر زمینه', 'بررسی شدت هشدار در کنار اهمیت دارایی، Exposure، آسیب‌پذیری و وضعیت حفاظتی.'],
  ['تصمیم‌گیری و Escalation مبتنی بر زمینه', 'اتخاذ تصمیم بر پایه یک تصویر مشترک و غنی‌شده از دارایی، نه صرفاً اطلاعات اولیه هشدار.'],
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
                <h1>هر هشدار امنیتی، بدون شناخت دقیق دارایی،<em> تنها بخشی از تصویر است.</em></h1>
                <p>سامانه‌های تشخیص مانند SIEM، EDR و NDR وقوع یک رخداد یا رفتار مشکوک را آشکار می‌کنند؛ اما تحلیلگر SOC برای ارزیابی دقیق، به زمینه بیشتری نیاز دارد: رخداد روی چه دارایی‌ای اتفاق افتاده، آن دارایی چه نقشی در سازمان دارد، وضعیت امنیتی آن چگونه است و چه تغییراتی اخیراً در آن ثبت شده است.</p>
                <p>مونوسوئیت با فراهم‌کردن <strong>زمینه دارایی (Asset Context)</strong> در کنار داده‌های تشخیص، به تحلیلگر کمک می‌کند هشدار را در بستر واقعی سازمان بررسی کرده و دامنه و اولویت رسیدگی را دقیق‌تر تعیین کند.</p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href="/contact/">درخواست جلسه معرفی</Link>
                  <Link className={styles.secondary} href="/monosuit/">مشاهده MonoSuite</Link>
                </div>
              </div>

              <SocAlertVisual />
            </div>
          </div>
        </section>

        <section className={styles.flowSection}>
          <div className="shell">
            <div className={styles.heading}>
              <span className={styles.eyebrow}>از هشدار تا تصمیم</span>
              <h2>جایگاه هوش دارایی در چرخه عملیات امنیت</h2>
              <p>مونوسوئیت جایگزین SIEM، EDR یا NDR نیست؛ بلکه در کنار این سامانه‌ها، لایه‌ای از زمینه فنی، امنیتی و کسب‌وکاری دارایی را در اختیار تحلیلگر قرار می‌دهد تا رخداد در بستر واقعی سازمان بررسی شود.</p>
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
                <h2>از یک نشانی IP به شناخت جامع دارایی</h2>
                <p>شناسه یا IP به‌تنهایی برای تصمیم امنیتی کافی نیست. مونوسوئیت اطلاعات پراکنده مربوط به دارایی را در یک زمینه مشترک کنار هم قرار می‌دهد تا تحلیلگر با شناخت دقیق‌تری از ماهیت، اهمیت و وضعیت امنیتی دارایی تصمیم‌گیری کند.</p>
                <div className={styles.scoreStrip}>
                  <div><small>Identification</small><b>۹۴٪</b></div>
                  <div><small>Protection</small><b>۶۱٪</b></div>
                  <div><small>Risk</small><b>۷۲٪</b></div>
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
              <h2>انتقال تمرکز SOC از جمع‌آوری داده به تحلیل و تصمیم‌گیری</h2>
              <p>ارزش اصلی مونوسوئیت در SOC، در دسترس قرار دادن زمینه موردنیاز برای فهم دارایی در زمان Investigation است؛ به‌گونه‌ای که تحلیلگر بتواند به‌جای جمع‌آوری پراکنده اطلاعات، تمرکز بیشتری بر تحلیل رخداد و تصمیم‌گیری داشته باشد.</p>
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
                <h2>سامانه‌های کشف (Detection) وقوع رخداد را گزارش می‌دهند؛ هوشمندی دارایی (Asset Intelligence) میزان اهمیت و حیاتی بودن آن را تبیین می‌کند.</h2>
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
