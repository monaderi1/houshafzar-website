import Link from 'next/link';
import { contact, nav } from './site-data';

export function Brand() {
  return <Link href="/" className="brand" aria-label="هوش‌افزار، صفحه نخست"><span className="brand-mark">H</span><span><b>هوش‌افزار</b><small>راهکارهای هوشمند امنیت سایبری</small></span></Link>;
}

export function Header() {
  return <header className="site-header"><div className="shell header-inner"><Brand/><nav aria-label="ناوبری اصلی">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><Link href="/contcat/" className="button button-small">درخواست مشاوره</Link></div></header>;
}

export function Footer() {
  return <footer><div className="shell footer-grid"><div><Brand/><p>توسعه محصول و ارائه خدمات تخصصی برای شناخت دارایی‌ها، کاهش ریسک و ارتقای عملیات امنیت.</p></div><div><h3>دسترسی سریع</h3>{nav.slice(1).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div><h3>ارتباط با ما</h3><a href={contact.phoneHref}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><p>{contact.address}</p></div></div><div className="shell copyright">تمام حقوق مادی و معنوی برای شرکت هوش‌افزار نسل پویا محفوظ است.</div></footer>;
}

export function PageShell({children}:{children:React.ReactNode}) { return <><Header/><main>{children}</main><Footer/></>; }

export function SplitText({text}:{text:string}) {
  return <div className="rich-text">{text.split(/\n+/).filter(Boolean).map((line, index) => line.startsWith('•') ? <p className="bullet" key={index}>{line}</p> : <p key={index}>{line}</p>)}</div>;
}
