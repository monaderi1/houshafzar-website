'use client';

import { useState } from 'react';
import styles from './workflow.module.css';

const substepDigits = ['۱', '۲', '۳', '۴', '۵'];

const phases = [
  {
    n: '۱',
    en: 'Asset Discovery',
    title: 'کشف دارایی',
    summary: 'دارایی‌های موجود روی شبکه شناسایی می‌شوند و نخستین تصویر از زیرساخت شکل می‌گیرد.',
    steps: [
      ['پیش‌پردازش کشف', 'رکوردهای تکراری شناسایی و حذف یا ادغام می‌شوند و داده برای اجرای کشف آماده می‌شود.'],
      ['کشف IPهای فعال', 'اطلاعات شبکه از Discovery Adapter دریافت و هر IP فعال به‌عنوان یک دارایی ثبت می‌شود.'],
      ['تشخیص پورت', 'پورت‌های از پیش تعریف‌شده بررسی و پورت‌های باز به رکورد دارایی افزوده می‌شوند.'],
      ['تشخیص سرویس وب', 'پاسخ سرویس‌های وب با الگوهای محصول تطبیق داده می‌شود تا نوع سرویس قابل شناسایی باشد.'],
      ['استخراج اطلاعات SSL', 'جزئیات گواهی، صادرکننده و تاریخ‌های اعتبار برای سرویس‌های وب گردآوری می‌شود.'],
    ],
    outputs: ['آدرس IP', 'پورت‌های باز', 'سرویس‌های فعال', 'اطلاعات گواهی SSL'],
  },
  {
    n: '۲',
    en: 'Asset Profiling',
    title: 'پروفایل‌سازی دارایی',
    summary: 'داده پایه کشف‌شده با اطلاعات فنی و مدیریتی دقیق‌تر غنی می‌شود.',
    steps: [
      ['آداپتورهای Pull Based', 'بر اساس Inventory Rules، آداپتور مناسب مانند Cisco SSH، SNMP یا VMware به دارایی متصل می‌شود و موجودی آن را استخراج می‌کند.'],
      ['آداپتورهای Push Based', 'داده MonoSuite Agent اعتبارسنجی، تجمیع و نرمال‌سازی می‌شود و به‌صورت دسته‌ای در پایگاه داده ثبت می‌گردد.'],
    ],
    outputs: ['مشخصات سخت‌افزار', 'سیستم‌عامل', 'Firmware', 'رابط‌های شبکه', 'کاربران', 'سرویس‌ها و پیکربندی'],
  },
  {
    n: '۳',
    en: 'Change Detection',
    title: 'تشخیص تغییر',
    summary: 'وضعیت فعلی دارایی با آخرین اجرای موفق مقایسه و تغییرات قابل پیگیری ثبت می‌شوند.',
    steps: [
      ['مقایسه چرخه‌ها', 'موجودی فعلی با وضعیت ثبت‌شده در چرخه قبلی مقایسه می‌شود.'],
      ['ثبت Change', 'هر اختلاف به‌عنوان یک Change ذخیره می‌شود تا در گزارش تغییر، ممیزی و تحلیل روند قابل استفاده باشد.'],
    ],
    outputs: ['تاریخچه تغییر در طول زمان', 'مبنای تشخیص تغییر غیرمجاز'],
  },
  {
    n: '۴',
    en: 'Asset Enrichment',
    title: 'غنی‌سازی و امتیازدهی',
    summary: 'موجودی خام به داده قابل تحلیل تبدیل می‌شود و شاخص‌های مدیریتی دارایی محاسبه می‌شوند.',
    steps: [
      ['Identification Score', 'میزان کامل‌بودن شناخت سامانه از دارایی در برابر مجموعه‌ای از شاخص‌های از پیش تعریف‌شده محاسبه می‌شود.'],
      ['Protection Score', 'سطح حفاظت دارایی بر پایه اطلاعات امنیتی در دسترس، نرم‌افزارهای حفاظتی و تنظیمات امنیتی ارزیابی می‌شود.'],
      ['Risk Score', 'با اتکا به اطلاعات گردآوری‌شده در مراحل پیشین و نتیجه سایر شاخص‌ها محاسبه می‌شود.'],
    ],
    outputs: ['Predicted Vendor', 'جایگاه شبکه و VLAN', 'طبقه‌بندی نرم‌افزار و سرویس', 'Identification Score', 'Protection Score', 'Risk Score'],
  },
  {
    n: '۵',
    en: 'Threat Intelligence Enrichment',
    title: 'غنی‌سازی هوش تهدید',
    summary: 'پروفایل نرم‌افزاری و سخت‌افزاری دارایی به زمینه آسیب‌پذیری قابل استفاده تبدیل می‌شود.',
    steps: [
      ['طبقه‌بندی پلتفرم — CPE', 'موجودی دارایی تحلیل و CPE متناظر محصولات ساخته یا شناسایی می‌شود تا دارایی به پایگاه‌های آسیب‌پذیری پیوند بخورد.'],
      ['تشخیص مواجهه — CVE', 'CPEهای دارایی با پایگاه محلی آسیب‌پذیری تطبیق داده می‌شوند تا CVEهای شناخته‌شده مرتبط مشخص شوند.'],
    ],
    outputs: ['مجموعه CPE معتبر', 'فهرست CVE متناظر'],
  },
  {
    n: '۶',
    en: 'Compliance Assessment',
    title: 'ارزیابی انطباق',
    summary: 'داده فنی و عملیاتی گردآوری‌شده به کنترل‌های مرجع نگاشت و نتیجه قابل گزارش تولید می‌شود.',
    steps: [
      ['پوشش چارچوب‌ها', 'کنترل‌های قابل اعمال از CIS Benchmark، PCI DSS و ISO/IEC 27001 بر اساس نوع دارایی و داده موجود ارزیابی می‌شوند.'],
      ['نگاشت کنترل‌ها', 'یک داده گردآوری‌شده می‌تواند به بیش از یک کنترل یا چارچوب کمک کند و نگاشت‌ها توسط محصول نگهداری می‌شوند.'],
      ['خروجی گزارشی', 'نتیجه کنترل‌ها در سطح دارایی، کنترل و چارچوب برای گزارش فنی و مدیریتی ارائه می‌شود.'],
    ],
    outputs: ['Compliant', 'Not Compliant', 'Not Applicable', 'Insufficient Data'],
  },
];

export default function WorkflowSection() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <section className={styles.section} aria-labelledby="workflow-title">
      <div className="shell">
        <div className={styles.heading}>
          <span>چرخه هوش دارایی در مونوسوئیت</span>
          <h2 id="workflow-title">از کشف دارایی تا تصمیم امنیتی؛ هر مرحله چه کاری انجام می‌دهد؟</h2>
          <p>مراحل را انتخاب کنید تا ببینید مونوسوئیت در هر فاز چگونه داده را پردازش می‌کند و چه اطلاعاتی به زمینه دارایی افزوده می‌شود.</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.timeline} aria-label="مراحل پردازش دارایی">
            {phases.map((item, index) => (
              <button
                type="button"
                key={item.n}
                onClick={() => setActive(index)}
                className={`${styles.step} ${index === active ? styles.active : ''} ${index < active ? styles.done : ''}`}
                aria-pressed={index === active}
              >
                <span className={styles.stepNo}>{item.n}</span>
                <span className={styles.stepCopy}>
                  <small dir="ltr">{item.en}</small>
                  <strong>{item.title}</strong>
                </span>
              </button>
            ))}
          </div>

          <article className={styles.detailCard}>
            <div className={styles.detailHead}>
              <div className={styles.phaseMark}>{phase.n}</div>
              <div>
                <small dir="ltr">{phase.en}</small>
                <h3>{phase.title}</h3>
              </div>
              <span className={styles.phaseCount}>مرحله {phase.n} از ۶</span>
            </div>

            <p className={styles.summary}>{phase.summary}</p>

            <div className={styles.stepList}>
              {phase.steps.map(([title, text], index) => (
                <div className={styles.processStep} key={title}>
                  <span className={styles.processIndex}>{phase.n}.{substepDigits[index]}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.outputPanel}>
              <div className={styles.outputTitle}>
                <span aria-hidden="true">＋</span>
                <div>
                  <small>خروجی این مرحله</small>
                  <strong>افزوده به زمینه دارایی</strong>
                </div>
              </div>
              <div className={styles.outputs}>
                {phase.outputs.map((output) => (
                  <span key={output} dir={/[A-Za-z]/.test(output) ? 'ltr' : undefined}>{output}</span>
                ))}
              </div>
            </div>

            <div className={styles.navRow}>
              <button type="button" onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0}>مرحله قبل</button>
              <div className={styles.progressDots} aria-hidden="true">
                {phases.map((_, index) => <i className={index === active ? styles.dotActive : ''} key={index} />)}
              </div>
              <button type="button" onClick={() => setActive(Math.min(phases.length - 1, active + 1))} disabled={active === phases.length - 1}>مرحله بعد</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
