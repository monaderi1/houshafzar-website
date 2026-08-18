'use client';

import { useState } from 'react';
import styles from './workflow.module.css';

const phases = [
  {
    n: '۱',
    en: 'Asset Discovery',
    title: 'کشف دارایی',
    text: 'دارایی فعال شناسایی می‌شود و نخستین تصویر از سطح شبکه و سرویس‌های در دسترس شکل می‌گیرد.',
    outputs: ['IP', 'پورت‌های باز', 'سرویس‌ها', 'SSL'],
  },
  {
    n: '۲',
    en: 'Asset Profiling',
    title: 'پروفایل‌سازی دارایی',
    text: 'پرونده دارایی با موجودی فنی و مدیریتی از طریق آداپتورها و Agent غنی‌تر می‌شود.',
    outputs: ['سیستم‌عامل', 'سخت‌افزار', 'کاربران', 'پیکربندی'],
  },
  {
    n: '۳',
    en: 'Change Detection',
    title: 'تشخیص تغییر',
    text: 'وضعیت فعلی با چرخه‌های قبلی مقایسه و تغییرات قابل پیگیری به تاریخچه دارایی افزوده می‌شود.',
    outputs: ['تاریخچه تغییر', 'انحراف‌ها', 'روند تغییر'],
  },
  {
    n: '۴',
    en: 'Asset Enrichment',
    title: 'غنی‌سازی و امتیازدهی',
    text: 'موجودی خام به زمینه قابل تحلیل تبدیل و شاخص‌های مدیریتی هر دارایی محاسبه می‌شود.',
    outputs: ['Identification', 'Protection', 'Risk'],
  },
  {
    n: '۵',
    en: 'Vulnerability Context',
    title: 'تحلیل آسیب‌پذیری',
    text: 'پروفایل دارایی به CPE تبدیل و با CVEهای مرتبط تطبیق داده می‌شود تا زمینه آسیب‌پذیری شکل بگیرد.',
    outputs: ['CPE', 'CVE', 'Vulnerability Context'],
    hot: true,
  },
  {
    n: '۶',
    en: 'Compliance Assessment',
    title: 'ارزیابی انطباق',
    text: 'شواهد فنی به کنترل‌های مرجع نگاشت و وضعیت انطباق در سطح دارایی و سازمان تولید می‌شود.',
    outputs: ['CIS Benchmark', 'PCI DSS', 'ISO/IEC 27001'],
    hot: true,
  },
];

const recordGroups = [
  {
    title: 'کشف شبکه',
    items: [
      ['IP Address', '10.20.4.42'],
      ['Open Ports', '22 · 443'],
      ['Services', 'SSH · HTTPS'],
      ['SSL', 'Certificate detected'],
    ],
  },
  {
    title: 'پروفایل فنی',
    items: [
      ['Operating System', 'AlmaLinux 9'],
      ['Hardware', 'Virtual Machine'],
      ['Users', '12 accounts'],
      ['Configuration', 'Inventory captured'],
    ],
  },
  {
    title: 'تغییرات',
    items: [
      ['Last Change', 'Package updated'],
      ['History', 'Change recorded'],
      ['Baseline', 'Previous cycle compared'],
    ],
  },
  {
    title: 'امتیازهای امنیتی',
    scores: [
      ['Identification', '94%'],
      ['Protection', '78%'],
      ['Risk', '30%'],
    ],
  },
  {
    title: 'زمینه آسیب‌پذیری',
    items: [
      ['CPE', 'Platform identified'],
      ['CVE', 'Related findings mapped'],
      ['Context', 'Asset exposure enriched'],
    ],
  },
  {
    title: 'وضعیت انطباق',
    items: [
      ['CIS Benchmark', 'Controls assessed'],
      ['PCI DSS', 'Evidence mapped'],
      ['ISO/IEC 27001', 'Evidence mapped'],
    ],
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
          <h2 id="workflow-title">از یک IP ناشناخته تا یک پرونده قابل اتکا برای تصمیم امنیتی</h2>
          <p>هر مرحله، لایه تازه‌ای از شناخت را به پرونده دارایی اضافه می‌کند. مراحل را انتخاب کنید و ببینید چگونه داده خام به زمینه امنیتی قابل استفاده تبدیل می‌شود.</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.timeline} aria-label="مراحل پردازش دارایی">
            {phases.map((item, index) => (
              <button
                type="button"
                key={item.n}
                onClick={() => setActive(index)}
                className={`${styles.step} ${index === active ? styles.active : ''} ${index < active ? styles.done : ''} ${item.hot ? styles.hot : ''}`}
                aria-pressed={index === active}
              >
                <span className={styles.stepNo}>{item.n}</span>
                <span className={styles.stepCopy}>
                  <small dir="ltr">{item.en}</small>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </span>
              </button>
            ))}
          </div>

          <div className={styles.recordShell}>
            <div className={styles.recordCard}>
              <div className={styles.recordHead}>
                <div>
                  <small>نمونه پرونده دارایی</small>
                  <strong dir="ltr">APP-SRV-042</strong>
                </div>
                <div className={styles.progress}>
                  <span>مرحله {phase.n} از ۶</span>
                  <i><b style={{ width: `${((active + 1) / phases.length) * 100}%` }} /></i>
                </div>
              </div>

              <div className={styles.assetIdentity}>
                <div className={styles.assetIcon} aria-hidden="true">◆</div>
                <div>
                  <small>دارایی در حال غنی‌سازی</small>
                  <strong>{active < 1 ? 'دارایی تازه کشف‌شده' : 'سرور کاربردی سازمان'}</strong>
                </div>
                <span className={styles.liveBadge}>Asset Record</span>
              </div>

              <div className={styles.currentStage}>
                <div>
                  <small>در این مرحله</small>
                  <strong>{phase.title}</strong>
                </div>
                <div className={styles.outputChips}>
                  {phase.outputs.map((output) => (
                    <span key={output} dir={/[A-Za-z]/.test(output) ? 'ltr' : undefined}>{output}</span>
                  ))}
                </div>
              </div>

              <div className={styles.recordBody}>
                {recordGroups.slice(0, active + 1).map((group, groupIndex) => (
                  <section className={`${styles.recordGroup} ${groupIndex === active ? styles.justAdded : ''}`} key={group.title}>
                    <div className={styles.groupTitle}>
                      <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                      <strong>{group.title}</strong>
                      {groupIndex === active && <small>افزوده شد</small>}
                    </div>

                    {'scores' in group && group.scores ? (
                      <div className={styles.scoreStrip}>
                        {group.scores.map(([name, value]) => (
                          <div key={name}>
                            <b dir="ltr">{value}</b>
                            <span dir="ltr">{name}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={styles.fields}>
                        {group.items?.map(([label, value]) => (
                          <div key={label}>
                            <span dir="ltr">{label}</span>
                            <b dir="ltr">{value}</b>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              <div className={styles.recordFoot}>
                <span>هرچه پرونده کامل‌تر می‌شود، تصمیم امنیتی بر زمینه دقیق‌تری استوار می‌شود.</span>
                <b>{active === phases.length - 1 ? 'پرونده آماده تحلیل' : 'در حال تکمیل پرونده'}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
