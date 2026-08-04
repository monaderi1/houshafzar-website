const runtimeStyles = `
<style id="houshafzar-static-runtime-styles">
  .hf-static-carousel .swiper-wrapper { display: block !important; transform: none !important; }
  .hf-static-carousel .swiper-slide { display: none !important; width: 100% !important; }
  .hf-static-carousel .swiper-slide.hf-slide-active { display: block !important; }
  .hf-static-carousel .elementor-invisible { visibility: visible !important; opacity: 1 !important; }
  .elementor-menu-toggle.hf-menu-open .elementor-menu-toggle__icon--open { display: none !important; }
  .elementor-menu-toggle:not(.hf-menu-open) .elementor-menu-toggle__icon--close { display: none !important; }
  .elementor-widget-nav-menu:has(> .elementor-widget-container > .elementor-menu-toggle.hf-menu-open),
  .elementor-widget-nav-menu:has(.elementor-menu-toggle.hf-menu-open) { overflow: visible !important; z-index: 99999 !important; }
  nav.elementor-nav-menu--dropdown.hf-menu-open {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    max-height: 80vh !important;
    overflow: auto !important;
    pointer-events: auto !important;
    position: relative !important;
    z-index: 99999 !important;
  }
  .e-off-canvas.hf-off-canvas-open {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
    position: fixed !important;
    inset: 0 !important;
    z-index: 100000 !important;
  }
  .e-off-canvas.hf-off-canvas-open .e-off-canvas__overlay {
    display: block !important;
    position: fixed !important;
    inset: 0 !important;
    background: rgba(4, 30, 66, .55) !important;
    pointer-events: auto !important;
  }
  .e-off-canvas.hf-off-canvas-open .e-off-canvas__main {
    display: block !important;
    visibility: visible !important;
    transform: translateX(0) !important;
    position: fixed !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: min(74vw, 300px) !important;
    max-height: 100vh !important;
    overflow-y: auto !important;
    background: #fff !important;
    pointer-events: auto !important;
    z-index: 1 !important;
  }
  .e-off-canvas.hf-off-canvas-open .e-off-canvas__content,
  .e-off-canvas.hf-off-canvas-open .elementor-element-a28b0a4 {
    min-height: 100% !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-element-a28b0a4 {
    gap: 14px !important;
    padding: 22px 18px !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-element-dd69ac3 img {
    display: block !important;
    width: 112px !important;
    height: 112px !important;
    margin: 0 auto !important;
    object-fit: contain !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-divider {
    padding-block: 4px !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-element-d1131f5 .elementor-item {
    min-height: 44px !important;
    padding: 10px 14px !important;
    font-size: 17px !important;
    line-height: 24px !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-icon-box-wrapper {
    gap: 10px !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-icon-box-icon .elementor-icon {
    font-size: 30px !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-icon-box-title {
    margin: 0 0 2px !important;
    font-size: 16px !important;
    line-height: 22px !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-icon-box-description {
    margin: 0 !important;
    font-size: 13px !important;
    line-height: 19px !important;
  }
  .e-off-canvas.hf-off-canvas-open .elementor-element-9b41660 .elementor-button {
    width: 100% !important;
    padding: 12px 14px !important;
    font-size: 15px !important;
  }
  @media (max-width: 390px) {
    .e-off-canvas.hf-off-canvas-open .e-off-canvas__main {
      width: min(78vw, 280px) !important;
    }
  }
  body.hf-off-canvas-active { overflow: hidden !important; }
</style>`;

const runtimeScript = `
<script id="houshafzar-static-runtime">
(function () {
  function initialiseMenus() {
    document.querySelectorAll('.elementor-widget-nav-menu').forEach(function (widget) {
      var toggle = widget.querySelector('.elementor-menu-toggle');
      var menu = widget.querySelector('nav.elementor-nav-menu--dropdown');
      if (!toggle || !menu) return;
      setMenuOpen(toggle, false);
    });
  }

  function setMenuOpen(toggle, open) {
    var widget = toggle.closest('.elementor-widget-nav-menu');
    var menu = widget && widget.querySelector('nav.elementor-nav-menu--dropdown');
    if (!menu) return;
    toggle.classList.toggle('hf-menu-open', open);
    menu.classList.toggle('hf-menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    menu.style.setProperty('display', open ? 'block' : 'none', 'important');
    menu.style.setProperty('visibility', open ? 'visible' : 'hidden', 'important');
    menu.style.setProperty('opacity', open ? '1' : '0', 'important');
    menu.style.setProperty('max-height', open ? '80vh' : '0', 'important');
    menu.style.setProperty('pointer-events', open ? 'auto' : 'none', 'important');
    menu.querySelectorAll('a').forEach(function (link) {
      link.setAttribute('tabindex', open ? '0' : '-1');
    });
  }

  function handleMenuActivation(event) {
    var toggle = event.target.closest && event.target.closest('.elementor-menu-toggle');
    if (!toggle) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    setMenuOpen(toggle, toggle.getAttribute('aria-expanded') !== 'true');
  }

  document.addEventListener('click', handleMenuActivation, true);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') handleMenuActivation(event);
  }, true);
  document.addEventListener('click', function (event) {
    var menu = event.target.closest && event.target.closest('nav.elementor-nav-menu--dropdown');
    if (!menu || !event.target.closest('a')) return;
    var toggle = menu.parentElement && menu.parentElement.querySelector('.elementor-menu-toggle');
    if (toggle) setMenuOpen(toggle, false);
  });

  function setOffCanvasOpen(panel, open) {
    if (!panel) return;
    panel.classList.toggle('hf-off-canvas-open', open);
    panel.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) panel.removeAttribute('inert');
    else panel.setAttribute('inert', '');
    document.body.classList.toggle('hf-off-canvas-active', open);
  }

  document.addEventListener('click', function (event) {
    var trigger = event.target.closest && event.target.closest('a[href*="off_canvas%3Aopen"], a[href*="off_canvas:open"]');
    if (trigger) {
      var panel = document.querySelector('.e-off-canvas');
      if (!panel) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      setOffCanvasOpen(panel, true);
      return;
    }
    var overlay = event.target.closest && event.target.closest('.e-off-canvas__overlay');
    if (overlay) setOffCanvasOpen(overlay.closest('.e-off-canvas'), false);
  }, true);

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    var panel = document.querySelector('.e-off-canvas.hf-off-canvas-open');
    if (panel) setOffCanvasOpen(panel, false);
  }, true);

  function initialiseHeroCarousel() {
    var carousel = document.querySelector('.elementor-element-3e90cfa .e-n-carousel');
    if (!carousel || carousel.dataset.hfReady === 'true') return;
    var slides = Array.prototype.slice.call(carousel.querySelectorAll(':scope > .swiper-wrapper > .swiper-slide'));
    if (slides.length < 2) return;
    carousel.dataset.hfReady = 'true';
    carousel.classList.add('hf-static-carousel');
    var current = 0;
    var timer;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        var active = slideIndex === current;
        slide.classList.toggle('hf-slide-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(function () { show(current + 1); }, 5000);
    }

    var previous = carousel.parentElement.querySelector('.elementor-swiper-button-prev');
    var next = carousel.parentElement.querySelector('.elementor-swiper-button-next');
    if (previous) previous.addEventListener('click', function () { show(current - 1); restart(); });
    if (next) next.addEventListener('click', function () { show(current + 1); restart(); });
    carousel.addEventListener('mouseenter', function () { window.clearInterval(timer); });
    carousel.addEventListener('mouseleave', restart);
    carousel.addEventListener('focusin', function () { window.clearInterval(timer); });
    carousel.addEventListener('focusout', restart);
    show(0);
    restart();
  }

  function initialise() {
    initialiseMenus();
    initialiseHeroCarousel();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise);
  else initialise();
})();
</script>`;

export function addStaticRuntime(html: string) {
  const additions = `${runtimeStyles}${runtimeScript}`;
  return html.includes('</body>') ? html.replace('</body>', `${additions}</body>`) : `${html}${additions}`;
}
