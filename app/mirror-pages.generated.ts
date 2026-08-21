import page4 from '../mirror-pages/cyber-risk-defense-index/index.html?raw';
import page5 from '../mirror-pages/cybersecurity-asset-management/index.html?raw';
import page6 from '../mirror-pages/datasheet/index.html?raw';
import page8 from '../mirror-pages/identification-certificate-of-assets/index.html?raw';
import page10 from '../mirror-pages/jobs/index.html?raw';
import page11 from '../mirror-pages/monoit/index.html?raw';
import page13 from '../mirror-pages/product/index.html?raw';
import page14 from '../mirror-pages/secure-index/index.html?raw';
import page18 from '../mirror-pages/visibility-score/index.html?raw';

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
  "jobs": localize(page10),
  "monoit": localize(page11),
  "product": localize(page13),
  "secure-index": localize(page14),
  "visibility-score": localize(page18),
};
