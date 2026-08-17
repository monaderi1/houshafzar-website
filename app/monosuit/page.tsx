import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '../components';
import styles from './monosuit.module.css';

export const metadata: Metadata = {
  title: 'مونوسوئیت | سامانه بومی هوش دارایی',
  description: 'معرفی سامانه بومی هوش دارایی مونوسوئیت برای کشف، شناسنامه‌سازی، یکپارچه‌سازی اطلاعات دارایی، تحلیل ریسک و ارزیابی پیکربندی امنیتی.',
};

const metrics = [
  ['۱۰۰٬۰۰۰', 'دارایی در ۶۰ ثانیه', 'سرعت کشف و شناسنامه‌سازی دارایی‌های سازمان'],
  ['۷۰+', 'آداپتور', 'اتصال به تجهیزات، سرویس‌ها و منابع داده سازمانی'],
  ['۱۵۰۰+', 'بررسی پیکربندی امنیتی', 'ارزیابی تنظیمات امنیتی و وضعیت هاردنینگ دارایی‌ها'],
];

const capabilities = [
  ['شناخت دارایی', 'کشف و شناسنامه‌سازی', 'ایجاد موجودی یکپارچه و به‌روز از دارایی‌های شبکه، نقاط پایانی و منابع شناسایی‌شده در سازمان.'],
  ['یکپارچه‌سازی داده', 'تجمیع و تطبیق اطلاعات', 'همگراکردن داده‌های پراکنده و حذف تکرار برای ایجاد نمایی واحد و قابل اتکا از هر دارایی.'],
  ['تغییرات', 'نگهداشت تاریخچه دارایی', 'تشخیص تغییرات و حفظ سابقه برای مشاهده وضعیت جاری و روند تغییر در طول زمان.'],
  ['ریسک', 'اولویت‌بندی بر پایه زمینه', 'تحلیل آسیب‌پذیری با درنظرگرفتن اهمیت دارایی، شرایط محیط و زمینه فنی برای تصمیم‌گیری دقیق‌تر.'],
  ['هاردنینگ', 'ارزیابی پیکربندی امنیتی', 'بررسی تنظیمات و وضعیت امن‌سازی دارایی‌ها برای شناسایی انحراف‌ها و نقاط نیازمند اصلاح.'],
  ['عملیات', 'خروجی قابل اقدام', 'تبدیل شناخت دارایی و یافته‌های امنیتی به گزارش و داده قابل استفاده برای تیم‌های فناوری اطلاعات و امنیت.'],
];

export default function MonoSuitePage() {
  return (
    <PageShell>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="shell">
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>سامانه بومی هوش دارایی</span>
                <h1>مونوسوئیت؛<em> شناخت یکپارچه دارایی برای تصمیم امنیتی دقیق‌تر</em></h1>
                <p>دیگر داشتن یک فهرست ساده از دارایی‌ها کافی نیست. مونوسوئیت اطلاعات پراکنده زیرساخت را به یک نمای یکپارچه، به‌روز و قابل اقدام تبدیل می‌کند تا تیم‌های فناوری اطلاعات و امنیت بتوانند وضعیت دارایی، تغییرات، ریسک و پیکربندی امنیتی را بر پایه داده واقعی تحلیل کنند.</p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href="/contact/">درخواست جلسه معرفی</Link>
                  <a className={styles.secondary} href="#capabilities">بررسی قابلیت‌ها</a>
                </div>
              </div>
              <div className={styles.visual}>
                <div className={styles.visualTitle}><b>MonoSuite Asset Intelligence</b><span>لایه پایه شناخت و زمینه امنیتی</span></div>
                <div className={styles.stack}>
                  <div className={styles.stackItem}><strong>داده‌های دارایی از منابع متعدد</strong><small>شبکه، نقاط پایانی، ابزارهای امنیتی و منابع سازمانی</small></div>
                  <div className={styles.stackItem}><strong>هویت واحد و شناسنامه دارایی</strong><small>تطبیق، تجمیع، تشخیص تغییر و نگهداشت تاریخچه</small></div>
                  <div className={styles.stackItem}><strong>تحلیل وضعیت امنیت و ریسک</strong><small>آسیب‌پذیری، پیکربندی امنیتی، زمینه دارایی و اولویت اقدام</small></div>
                  <div className={styles.stackItem}><strong>خروجی عملیاتی برای تیم امنیت</strong><small>گزارش، اولویت‌بندی و داده قابل استفاده برای تصمیم و اقدام</small></div>
                </div>
              </div>
            </div>
            <div className={styles.metrics}>{metrics.map(([value,title,text]) => <div className={styles.metric} key={title}><b>{value}</b><strong>{title}</strong><span>{text}</span></div>)}</div>
          </div>
        </section>

        <section className={styles.section} id="capabilities"><div className="shell">
          <div className={styles.heading}><span className={styles.eyebrow}>قابلیت‌های اصلی</span><h2>از کشف دارایی تا تحلیل و اقدام</h2><p>مونوسوئیت زنجیره شناخت دارایی را از جمع‌آوری داده تا ایجاد زمینه امنیتی و خروجی قابل اقدام پوشش می‌دهد.</p></div>
          <div className={styles.capGrid}>{capabilities.map(([tag,title,text]) => <article className={styles.cap} key={title}><span>{tag}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section className={styles.sectionSoft}><div className="shell">
          <div className={styles.heading}><span className={styles.eyebrow}>مدل استفاده</span><h2>خرید سامانه یا دریافت خروجی به‌صورت پروژه</h2><p>بسته به مدل تأمین و بهره‌برداری سازمان، مونوسوئیت می‌تواند به‌صورت سامانه دائمی یا به‌صورت استقرار پروژه‌ای مورد استفاده قرار گیرد.</p></div>
          <div className={styles.deployGrid}>
            <article className={`${styles.deployCard} ${styles.dark}`}><span className={styles.label}>خرید سامانه</span><h3>خرید مونوسوئیت؛ سرمایه‌گذاری بلندمدت</h3><p>برای سازمان‌هایی که به دید مستمر و یکپارچه از دارایی‌ها و وضعیت امنیت نیاز دارند، مونوسوئیت به‌صورت درون‌سازمانی مستقر می‌شود و در اختیار تیم سازمان قرار می‌گیرد.</p><ul><li>موجودی و شناسنامه دارایی به‌صورت مستمر</li><li>تشخیص تغییرات و نگهداشت تاریخچه</li><li>تحلیل ریسک و ارزیابی پیکربندی امنیتی</li><li>حفظ کامل داده در زیرساخت سازمان</li></ul></article>
            <article className={styles.deployCard}><span className={styles.label}>مدل اجرایی پروژه‌ای</span><h3>دریافت خروجی‌های عملیاتی، بدون نیاز به خرید سامانه</h3><p>در مدل اجرایی پروژه‌ای، مونوسوئیت برای استخراج شناسنامه دارایی‌ها و تحلیل سطح حمله در زیرساخت مشتری مستقر می‌شود. پس از تکمیل تحلیل‌ها و ارائه گزارش جامع ریسک، استقرار موقت سامانه پایان می‌یابد و تمامی یافته‌ها، گزارش‌ها و خروجی‌های عملیاتی در اختیار تیم امنیت سازمان قرار می‌گیرد.</p><ul><li>استقرار موقت در زیرساخت سازمان</li><li>تولید موجودی، تحلیل ریسک و گزارش تغییرات</li><li>تحویل یافته‌ها و اقدامات پیشنهادی</li><li>بدون نیاز به نگهداشت و راهبری دائمی سامانه</li></ul></article>
          </div>
        </div></section>

        <section className={styles.section}><div className="shell"><div className={styles.cis}>
          <div className={styles.heading}><span className={styles.eyebrow}>CIS Controls v8.1</span><h2>اجرای CIS Controls از شناخت دارایی آغاز می‌شود</h2><p>کنترل ۱ بر فهرست و کنترل دارایی‌های سازمانی و کنترل ۲ بر فهرست و کنترل دارایی‌های نرم‌افزاری تمرکز دارد. مونوسوئیت با کشف، ثبت، تطبیق، تشخیص تغییر و نگهداشت مستمر اطلاعات دارایی، لایه پایه موردنیاز برای اجرای این دو کنترل را فراهم می‌کند.</p></div>
          <div className={styles.cisVisual}><div className={styles.cisControls}><div className={styles.cisCard}><b>۰۱</b><strong>فهرست و کنترل دارایی‌های سازمانی</strong><small dir="ltr">Inventory and Control of Enterprise Assets</small></div><div className={styles.cisCard}><b>۰۲</b><strong>فهرست و کنترل دارایی‌های نرم‌افزاری</strong><small dir="ltr">Inventory and Control of Software Assets</small></div></div><div className={styles.cisFoundation}><small>نقطه شروع اجرای کنترل‌ها</small><strong>سامانه بومی هوش دارایی مونوسوئیت</strong></div></div>
        </div></div></section>

        <section className={styles.sectionSoft}><div className="shell"><div className={styles.heading}><span className={styles.eyebrow}>استقرار سازمانی</span><h2>طراحی‌شده برای محیط‌های حساس و محدود</h2><p>مونوسوئیت به‌صورت درون‌سازمانی مستقر می‌شود و برای محیط‌هایی که حاکمیت داده و محدودیت ارتباط بیرونی اهمیت دارد مناسب است. داده‌ها و خروجی‌های امنیتی در زیرساخت سازمان باقی می‌مانند.</p></div></div></section>

        <section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><h2>برای بررسی قابلیت‌های مونوسوئیت و مدل مناسب استقرار در سازمان، با هوش‌افزار گفت‌وگو کنید.</h2><Link href="/contact/">درخواست جلسه</Link></div></section>
      </main>
    </PageShell>
  );
}
