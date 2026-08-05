import Link from 'next/link';
import { contact, nav } from './site-data';

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="هوش‌افزار، صفحه نخست">
      <span className="brand-symbol" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
      <span className="brand-copy">
        <b>هوش‌افزار</b>
        <small>امنیت سایبری سازمانی</small>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="ناوبری اصلی">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/contcat/" className="button button-small">درخواست مشاوره</Link>
          <details className="mobile-nav">
            <summary aria-label="باز کردن منوی سایت"><span /><span /><span /></summary>
            <div className="mobile-nav-panel">
              {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
              <Link href="/contcat/" className="button">درخواست مشاوره</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Brand />
          <p>توسعه محصول و ارائه خدمات تخصصی برای شناخت دارایی‌ها، کاهش ریسک و ارتقای عملیات امنیت سازمانی.</p>
        </div>
        <div className="footer-links">
          <h3>دسترسی سریع</h3>
          {nav.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-contact">
          <h3>ارتباط با ما</h3>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p>{contact.address}</p>
        </div>
      </div>
      <div className="shell copyright">تمام حقوق مادی و معنوی برای شرکت هوش‌افزار نسل پویا محفوظ است.</div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

export function SplitText({ text }: { text: string }) {
  return (
    <div className="rich-text">
      {text.split(/\n+/).filter(Boolean).map((line, index) => (
        line.startsWith('•')
          ? <p className="bullet" key={index}>{line}</p>
          : <p key={index}>{line}</p>
      ))}
    </div>
  );
}
