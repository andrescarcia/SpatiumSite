/* ========================================
   SPATIUM — index.js
   Scroll reveal, nav, marquee, form, hero
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- NAV SCROLL ---- */
  const nav = document.getElementById('main-nav');
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- MOBILE MENU ---- */
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMenu = () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  };

  burger?.addEventListener('click', toggleMenu);
  mobileLinks.forEach(link => link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }));

  /* ---- PARALLAX HERO BRAND + BUILDING (subtle depth) ---- */
  const heroBrandContainer = document.querySelector('.hero-brand');
  const heroBrandSpan = document.getElementById('hero-brand');
  const heroBuildingWrap = document.getElementById('hero-building-wrap');

  if (heroBrandContainer || heroBuildingWrap) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled <= window.innerHeight) {
        // Usamos el contenedor para el parallax, así no sobrescribimos tu transform en CSS
        if (heroBrandContainer) {
          heroBrandContainer.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
        if (heroBuildingWrap) {
          heroBuildingWrap.style.transform = `translateY(${scrolled * 0.06}px)`;
        }
      }
    }, { passive: true });
  }

  /* ---- GSAP HERO & SCROLL ANIMATIONS ---- */
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    // 1. Hero text "spatium" character entrance
    if (heroBrandSpan) {
      const originalText = "spatium";
      heroBrandSpan.innerHTML = "";
      
      const chars = originalText.split('').map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        heroBrandSpan.appendChild(span);
        return span;
      });

      gsap.from(chars, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2
      });
    }

    // 2. Hero Building Image Entrance
    const heroBuildingImg = document.getElementById('hero-building-img');
    if (heroBuildingImg) {
      gsap.from(heroBuildingImg, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      });
    }

    // 3. Hero Content Entrance
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      gsap.from(heroContent.children, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.8
      });
    }

    // 4. Scroll Reveals using ScrollTrigger
    const sectionsToReveal = [
      '#intro .intro-grid',
      '#intro .intro-full-img',
      '#rooms .rooms-header',
      '#rooms .rooms-extras',
      '#editorial-split .split-grid',
      '#gallery .gallery-header',
      '#about .about-grid',
      '#contact .contact-grid'
    ];

    sectionsToReveal.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      }
    });

    // Stagger lists
    const staggerGroups = [
      { sel: '.room-card', trigger: '.rooms-grid' },
      { sel: '.feature-row', trigger: '.features-table' },
      { sel: '.gallery-item', trigger: '.gallery-masonry' }
    ];

    staggerGroups.forEach(group => {
      const els = document.querySelectorAll(group.sel);
      if (els.length) {
        gsap.from(els, {
          scrollTrigger: {
            trigger: group.trigger,
            start: "top 80%"
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });
  }

  /* ---- MARQUEE (pause on hover) ---- */
  const marqueeTrack = document.getElementById('marquee-track');
  if (marqueeTrack) {
    marqueeTrack.parentElement.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeTrack.parentElement.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }

  /* ---- CONTACT FORM ---- */
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit');
  const successMsg = document.getElementById('form-success');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.querySelector('#form-name').value.trim();
    const email = form.querySelector('#form-email').value.trim();
    if (!name || !email) {
      shakeBtn();
      return;
    }

    // Simulate send
    submitBtn.disabled = true;
    submitBtn.textContent = 'A enviar…';

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = 'Enviar Mensagem ↗';
      submitBtn.disabled = false;
      successMsg.classList.add('visible');
      setTimeout(() => successMsg.classList.remove('visible'), 5000);
    }, 1200);
  });

  function shakeBtn() {
    submitBtn.style.animation = 'shake 0.4s ease';
    setTimeout(() => submitBtn.style.animation = '', 400);
  }

  /* ---- GALLERY LIGHTBOX (minimal) ---- */
  let lightbox = null;

  const createLightbox = () => {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(12,12,12,0.96);
      display: flex; align-items: center; justify-content: center;
      cursor: zoom-out; opacity: 0; transition: opacity 0.3s ease;
    `;

    const img = document.createElement('img');
    img.style.cssText = `
      max-width: 90vw; max-height: 90vh;
      object-fit: contain; border-radius: 8px;
      box-shadow: 0 32px 80px rgba(0,0,0,0.6);
    `;
    lightbox.appendChild(img);

    const close = document.createElement('button');
    close.innerHTML = '✕';
    close.style.cssText = `
      position: absolute; top: 2rem; right: 2rem;
      font-size: 1.5rem; color: rgba(255,255,255,0.5);
      background: none; border: none; cursor: pointer;
      font-family: sans-serif; line-height: 1;
    `;
    lightbox.appendChild(close);

    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', closeLightbox);
    close.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    return { lightbox, img };
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.style.opacity = '0';
    setTimeout(() => {
      lightbox?.remove();
      lightbox = null;
      document.body.style.overflow = '';
    }, 300);
  };

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').src;
      const { lightbox: lb, img } = createLightbox();
      img.src = src;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { lb.style.opacity = '1'; });
      });
      document.body.style.overflow = 'hidden';
    });
  });

  /* ---- SMOOTH SECTION SCROLL FROM NAV ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  /* ---- CURSOR EFFECT (desktop only) ---- */
  if (window.innerWidth >= 1024) {
    const cursor = document.createElement('div');
    cursor.id = 'cursor-dot';
    cursor.style.cssText = `
      position: fixed; z-index: 10000; pointer-events: none;
      width: 10px; height: 10px; border-radius: 50%;
      background: rgba(0,0,0,0.7); mix-blend-mode: multiply;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease, opacity 0.3s ease;
      opacity: 0;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.opacity = '1';
    });

    document.querySelectorAll('a, button, .gallery-item, .room-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.opacity = '0.6';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursor.style.opacity = '1';
      });
    });
  }

});

/* ---- CSS INJECT: shake animation ---- */
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);
