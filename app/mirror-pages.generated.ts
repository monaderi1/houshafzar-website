import page4 from '../mirror-pages/cyber-risk-defense-index/index.html?raw';
import page5 from '../mirror-pages/cybersecurity-asset-management/index.html?raw';
import page6 from '../mirror-pages/datasheet/index.html?raw';
import page8 from '../mirror-pages/identification-certificate-of-assets/index.html?raw';
import page9 from '../mirror-pages/index.html?raw';
import page10 from '../mirror-pages/jobs/index.html?raw';
import page11 from '../mirror-pages/monoit/index.html?raw';
import page12 from '../mirror-pages/monosuit/index.html?raw';
import page13 from '../mirror-pages/product/index.html?raw';
import page14 from '../mirror-pages/secure-index/index.html?raw';
import page18 from '../mirror-pages/visibility-score/index.html?raw';
import page19 from '../mirror-pages/wp-json/index.html?raw';

function localize(html: string) {
  return html
    .replaceAll('https://houshafzar.com/', '/')
    .replaceAll('http://houshafzar.com/', '/')
    .replaceAll('https:\/\/houshafzar.com\/', '\/');
}

export const mirroredPages: Record<string, string> = {
  "cyber-risk-defense-index": localize(page4),
  "cybersecurity-asset-management": localize(page5),
  "datasheet": localize(page6),
  "identification-certificate-of-assets": localize(page8),
  "/": localize(page9),
  "jobs": localize(page10),
  "monoit": localize(page11),
  "monosuit": localize(page12),
  "product": localize(page13),
  "secure-index": localize(page14),
  "visibility-score": localize(page18),
  "wp-json": localize(page19),
};
