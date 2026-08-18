import styles from './workflow.module.css';

const phases = [
  {
    n: '۱',
    en: 'Asset Discovery',
    title: 'کشف دارایی',
    text: 'شناسایی دارایی‌های فعال و ساخت نخستین تصویر از سطح شبکه و سرویس‌های در دسترس.',
    outputs: ['IP', 'پورت‌های باز', 'سرویس‌ها', 'SSL'],
  },
  {
    n: '۲',
    en: 'Asset Profiling',
    title: 'پروفایل‌سازی دارایی',
    text: 'غنی‌سازی هر دارایی با موجودی فنی و مدیریتی از طریق آداپتورها و Agent.',
    outputs: ['سیستم‌عامل', 'سخت‌افزار', 'کاربران', 'پیکربندی'],
  },
  {
    n: '۳',
    en: 'Change Detection',
    title: 'تشخیص تغییر',
    text: 'مقایسه وضعیت فعلی با چرخه‌های قبلی و ثبت تاریخچه تغییرات قابل پیگیری.',
    outputs: ['تاریخچه تغییر', 'انحراف‌ها', 'روند تغییر'],
  },
  {
    n: '۴',
    en: 'Asset Enrichment',
    title: 'غنی‌سازی و امتیازدهی',
    text: 'تبدیل موجودی خام به زمینه قابل تحلیل و محاسبه شاخص‌های مدیریتی هر دارایی.',
    outputs: ['Identification', 'Protection', 'Risk'],
  },
  {
    n: '۵',
    en: 'Vulnerability Context',
    title: 'تحلیل آسیب‌پذیری',
    text: 'ساخت CPE و تطبیق آن با CVEهای مرتبط برای مشخص‌شدن مواجهه واقعی هر دارایی.',
    outputs: ['CPE', 'CVE', 'Vulnerability Context'],
    hot: true,
  },
  {
    n: '۶',
    en: 'Compliance Assessment',
    title: 'ارزیابی انطباق',
    text: 'نگاشت شواهد فنی دارایی به کنترل‌ها و تولید وضعیت انطباق در سطح دارایی و سازمان.',
    outputs: ['CIS Benchmark', 'PCI DSS', 'ISO/IEC 27001'],
    hot: true,
  },
];

export default function WorkflowSection() {
  return (
    <section className={styles.section} aria-labelledby="workflow-title">
      <div className="shell">
        <div className={styles.heading}>
          <span>چرخه هوش دارایی در مونوسوئیت</span>
          <h2 id="workflow-title">از کشف دارایی تا تصمیم امنیتی؛ داده چگونه به هوش دارایی تبدیل می‌شود؟</h2>
          <p>هر دارایی در مونوسوئیت مرحله‌به‌مرحله غنی‌تر می‌شود؛ خروجی هر مرحله، زمینه لازم برای تحلیل دقیق‌تر در مرحله بعد را فراهم می‌کند.</p>
        </div>

        <div className={styles.flow}>
          {phases.map((phase, index) => (
            <article className={`${styles.card} ${phase.hot ? styles.hot : ''}`} key={phase.n}>
              <div className={styles.topline}>
                <span className={styles.number}>{phase.n}</span>
                <small dir="ltr">{phase.en}</small>
              </div>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
              <div className={styles.outputs}>
                {phase.outputs.map((output) => <span key={output} dir={/[A-Za-z]/.test(output) ? 'ltr' : undefined}>{output}</span>)}
              </div>
              {index < phases.length - 1 && <span className={styles.connector} aria-hidden="true">←</span>}
            </article>
          ))}
        </div>

        <div className={styles.footerLine}>
          <strong>نتیجه:</strong>
          <span>یک پرونده دارایی غنی‌شده با هویت، تغییرات، امتیازهای امنیتی، آسیب‌پذیری و شواهد انطباق</span>
        </div>
      </div>
    </section>
  );
}
