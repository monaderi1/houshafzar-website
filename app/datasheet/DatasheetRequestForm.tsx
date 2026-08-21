'use client';

import { FormEvent, useState } from 'react';
import styles from './datasheet.module.css';

const PUBLIC_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'outlook.com',
  'hotmail.com', 'live.com', 'msn.com', 'icloud.com', 'me.com', 'aol.com',
  'proton.me', 'protonmail.com', 'gmx.com', 'mail.com', 'yandex.com', 'zoho.com',
]);

function isOrganizationalEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  const parts = normalized.split('@');
  if (parts.length !== 2 || !parts[0] || !parts[1] || !parts[1].includes('.')) return false;
  return !PUBLIC_EMAIL_DOMAINS.has(parts[1]);
}

export default function DatasheetRequestForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const workEmail = String(data.get('workEmail') || '');

    if (!isOrganizationalEmail(workEmail)) {
      setStatus('error');
      setMessage('لطفاً از ایمیل سازمانی خود استفاده کنید. سرویس‌های ایمیل عمومی برای دریافت دیتاشیت پذیرفته نمی‌شوند.');
      return;
    }

    setStatus('sending');
    setMessage('در حال ثبت درخواست...');

    try {
      const response = await fetch('/api/datasheet-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.get('fullName'),
          workEmail,
          company: data.get('company'),
          jobTitle: data.get('jobTitle'),
          website: data.get('website'),
          source: 'houshafzar-datasheet-form',
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'ثبت درخواست با خطا مواجه شد.');

      form.reset();
      setStatus('success');
      setMessage('درخواست شما ثبت شد. تیم هوش‌افزار دیتاشیت را به ایمیل سازمانی ثبت‌شده ارسال خواهد کرد.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'ثبت درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.');
    }
  }

  return (
    <form className={styles.formCard} onSubmit={submit} noValidate>
      <input className={styles.honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className={styles.formHeading}>
        <span>REQUEST DATASHEET</span>
        <h2>دریافت دیتاشیت فنی</h2>
        <p>برای دریافت دیتاشیت MonoSuite Asset Intelligence، اطلاعات زیر را با ایمیل سازمانی تکمیل کنید.</p>
      </div>

      <div className={styles.formGrid}>
        <label>
          <span>نام و نام خانوادگی *</span>
          <input name="fullName" autoComplete="name" maxLength={120} required />
        </label>
        <label>
          <span>ایمیل سازمانی *</span>
          <input name="workEmail" type="email" dir="ltr" autoComplete="email" maxLength={180} placeholder="name@company.com" required />
        </label>
        <label>
          <span>نام سازمان *</span>
          <input name="company" autoComplete="organization" maxLength={160} required />
        </label>
        <label>
          <span>سمت سازمانی</span>
          <input name="jobTitle" autoComplete="organization-title" maxLength={120} />
        </label>
      </div>

      <div className={styles.formNote}>
        درخواست با Gmail، Yahoo، Outlook و سایر سرویس‌های ایمیل عمومی پذیرفته نمی‌شود. اطلاعات ثبت‌شده فقط برای رسیدگی به درخواست دیتاشیت استفاده می‌شود.
      </div>

      <button className={styles.submitButton} type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'در حال ارسال...' : 'ثبت درخواست دیتاشیت'}
      </button>

      {message && (
        <div className={`${styles.formStatus} ${status === 'success' ? styles.success : status === 'error' ? styles.error : ''}`} role="status" aria-live="polite">
          {message}
        </div>
      )}
    </form>
  );
}
