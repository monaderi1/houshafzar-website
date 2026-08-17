import page0 from '../mirror-pages/about/index.html?raw';
import page1 from '../mirror-pages/blog/index.html?raw';
import page2 from '../mirror-pages/comments/feed/index.html?raw';
import page3 from '../mirror-pages/contcat/index.html?raw';
import page4 from '../mirror-pages/cyber-risk-defense-index/index.html?raw';
import page5 from '../mirror-pages/cybersecurity-asset-management/index.html?raw';
import page6 from '../mirror-pages/datasheet/index.html?raw';
import page7 from '../mirror-pages/feed/index.html?raw';
import page8 from '../mirror-pages/identification-certificate-of-assets/index.html?raw';
import page9 from '../mirror-pages/index.html?raw';
import page10 from '../mirror-pages/jobs/index.html?raw';
import page11 from '../mirror-pages/monoit/index.html?raw';
import page12 from '../mirror-pages/monosuit/index.html?raw';
import page13 from '../mirror-pages/product/index.html?raw';
import page14 from '../mirror-pages/secure-index/index.html?raw';
import page15 from '../mirror-pages/services/index.html?raw';
import page16 from '../mirror-pages/soc-role/index.html?raw';
import page17 from '../mirror-pages/solutions/index.html?raw';
import page18 from '../mirror-pages/visibility-score/index.html?raw';
import page19 from '../mirror-pages/wp-json/index.html?raw';
import page20 from '../mirror-pages/اهمیت-تجمیع-دادههای-امنیت-سایبری-ساز/index.html?raw';
import page21 from '../mirror-pages/سلام-دنیا/index.html?raw';

function localize(html: string) {
  return html
    .replaceAll('https://houshafzar.com/', '/')
    .replaceAll('http://houshafzar.com/', '/')
    .replaceAll('https:\/\/houshafzar.com\/', '\/');
}

export const mirroredPages: Record<string, string> = {
  "about": localize(page0),
  "blog": localize(page1),
  "comments/feed": localize(page2),
  "contcat": localize(page3),
  "contact": localize(page3),
  "cyber-risk-defense-index": localize(page4),
  "cybersecurity-asset-management": localize(page5),
  "datasheet": localize(page6),
  "feed": localize(page7),
  "identification-certificate-of-assets": localize(page8),
  "/": localize(page9),
  "jobs": localize(page10),
  "monoit": localize(page11),
  "monosuit": localize(page12),
  "product": localize(page13),
  "secure-index": localize(page14),
  "services": localize(page15),
  "soc-role": localize(page16),
  "solutions": localize(page17),
  "visibility-score": localize(page18),
  "wp-json": localize(page19),
  "اهمیت-تجمیع-دادههای-امنیت-سایبری-ساز": localize(page20),
  "سلام-دنیا": localize(page21),
};
