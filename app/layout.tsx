import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import './redesign-v1-overrides.css';
import './brand-logo.css';
import './home-portfolio.css';
import './home-polish.css';

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['arabic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'هوش‌افزار | محصول و خدمات امنیت سایبری سازمانی',
  description: 'محصول MonoSuite Asset Intelligence و خدمات تخصصی هوش‌افزار برای شناخت دارایی، کاهش ریسک، کشف تهدید و پاسخ‌گویی به رخداد.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazirmatn.variable}>{children}</body>
    </html>
  );
}
