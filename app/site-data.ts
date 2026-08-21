import content from './content.json';

export type Entry = {
  slug: string;
  path: string;
  kind: 'page' | 'post';
  date: string;
  title: string;
  excerpt: string;
  body: string;
};

export const entries = content as Entry[];
export const posts = entries.filter((entry) => entry.kind === 'post');
export const pages = entries.filter((entry) => entry.kind === 'page');

export const contact = {
  phone: '۰۲۱-۹۱۰۹۵۲۰۰',
  phoneHref: 'tel:+982191095200',
  email: 'info@houshafzar.ir',
  address: 'تهران، سعادت‌آباد، خیابان سپیدار، بین خیابان صدف و شکوفه، پلاک ۲۷، طبقه اول، واحد ۱',
};

export const nav = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/monosuit/', label: 'محصول' },
  { href: '/services/', label: 'خدمات' },
  { href: '/solutions/', label: 'راهکارها' },
  { href: '/about/', label: 'درباره ما' },
];
