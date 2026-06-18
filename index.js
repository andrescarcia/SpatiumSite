/* ========================================
   SPATIUM — index.js
   Scroll reveal, nav, marquee, form, hero
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- LANGUAGE SWITCH ---- */
  const langBtns = document.querySelectorAll(".lang-btn, .mobile-lang-btn");
  const i18nElements = document.querySelectorAll(
    "[data-i18n], [data-i18n-placeholder]",
  );

  const translations = {
    pt: {
      "nav-rooms": "Quartos",
      "nav-about": "Sobre",
      "nav-gallery": "Galeria",
      "nav-contact": "Contactos",
      "nav-cta": "Reservar",
      "hero-tag":
        '<span class="tag-dot"></span>Residência Universitária · Covilhã',
      "hero-head": "O teu espaço.<br />A tua liberdade.",
      "hero-sub": "Quartos e estúdios equipados, a minutos da UBI.",
      "hero-btn1": "Ver Quartos",
      "hero-btn2": "Fala Connosco ↗",
      "stat-typ": "Tipologias",
      "stat-inaug": "Inauguração",
      "stat-dist": "5 min a pé",
      "stat-size": "Maior Estúdio",
      "intro-over": "— Sobre nós",
      "intro-head":
        'Qualidade.<br /><em class="accent">Conforto.</em><br />Comunidade.',
      "intro-body":
        "A Spatium Residence nasceu da vontade de oferecer aos estudantes universitários um lar moderno, funcional e acolhedor. Cada espaço foi pensado ao detalhe — desde a ergonomia do quarto de trabalho até ao pátio privativo onde podes desligar.",
      "meta-loc": "Localização",
      "meta-loc-val": "Covilhã, Portugal",
      "meta-type": "Tipo",
      "meta-type-val": "Residência Universitária",
      "meta-avail": "Disponibilidade",
      "meta-rooms": "Quartos",
      "meta-rooms-val": "Conforto · Deluxe · Estúdio",
      "intro-caption": "Jardim privativo da residência",
      "rooms-over": "— Os nossos espaços",
      "rooms-head": 'Encontra o teu<br /><em class="accent">quarto ideal</em>',
      "room1-badge": "Conforto",
      "room1-title": "Quarto Conforto",
      "room1-desc":
        "Quarto totalmente mobilado com WC privado, pátio privativo e acesso às áreas comuns. Funcionalidade e conforto em cada detalhe.",
      "room1-bed": '<span class="meta-icon">🛏</span>Cama 2x1m',
      "room1-wc": '<span class="meta-icon">🚿</span>WC Privado',
      "room1-patio": '<span class="meta-icon">🌿</span>Pátio',
      "room-price": "Consultar preço",
      "room-book": "Reservar ↗",
      "room-view": "Ver quarto",
      "room2-badge": "Deluxe",
      "room2-title": "Quarto Deluxe",
      "room2-desc":
        "Espaçoso e luminoso, com acabamentos premium, WC privado e uma zona de leitura. Mais espaço, mais luz, mais conforto.",
      "room2-bed": '<span class="meta-icon">🛏</span>Cama King',
      "room2-view": '<span class="meta-icon">☀️</span>Vista jardim',
      "room3-badge": "Estúdio",
      "room3-title": "Estúdio Premium",
      "room3-desc":
        "T0 totalmente autónomo com cozinha equipada, WC privado e pátio exterior. Independência total dentro da residência.",
      "room3-kitchen": '<span class="meta-icon">🍳</span>Cozinha',
      "room3-patio": '<span class="meta-icon">🌿</span>Pátio privado',
      "extras-title": "Incluído em todos os quartos",
      extra1: '<span class="extra-mark">↳</span>WIFI de alta velocidade',
      extra2:
        '<span class="extra-mark">↳</span>Limpeza semanal das zonas comuns',
      extra3:
        '<span class="extra-mark">↳</span>Segurança 24h com código pessoal',
      extra4:
        '<span class="extra-mark">↳</span>Despesas fixas (água, luz, gás)',
      extra5: '<span class="extra-mark">↳</span>Cozinha partilhada equipada',
      extra6: '<span class="extra-mark">↳</span>Sala de estudo e convívio',
      "split-over": "— A residência",
      "split-head": 'Viver perto<br />da <em class="accent">UBI</em>.',
      "split-body":
        "A Spatium Residence situa-se a menos de 5 minutos a pé da Universidade da Beira Interior, no coração de Covilhã. Um edifício moderno, requalificado para os mais altos padrões de conforto e sustentabilidade.",
      "split-l1": '<span class="accent-text">01 —</span> A 5 min a pé da UBI',
      "split-l2":
        '<span class="accent-text">02 —</span> Edifício totalmente requalificado',
      "split-l3":
        '<span class="accent-text">03 —</span> Comunidade de estudantes activos',
      "split-l4":
        '<span class="accent-text">04 —</span> Pátios e jardins privativos',
      "split-btn": "Saber mais ↗",
      "gallery-over": "— A nossa galeria",
      "gallery-head": 'Cada detalhe<br />foi <em class="accent">pensado</em>',
      "mq-res": "Residência Universitária",
      "mq-c1": "Quarto Conforto",
      "mq-c2": "Quarto Deluxe",
      "mq-c3": "Estúdio Premium",
      "mq-loc": "Covilhã, Portugal",
      "mq-ubi": "UBI · 5 minutos",
      "about-over": "— Porquê a Spatium",
      "about-head":
        'Inovação e<br />conforto,<br /><em class="accent">desenhado para ti</em>.',
      "f1-t": "Limpeza Diária",
      "f1-d": "As zonas comuns são limpas e higienizadas diariamente.",
      "f2-t": "Segurança 24h",
      "f2-d":
        "Código pessoal e câmaras nas áreas comuns para a tua tranquilidade.",
      "f3-t": "WIFI de Alta Velocidade",
      "f3-d": "Internet rápida e fiável em toda a residência.",
      "f4-t": "Despesas Fixas",
      "f4-d": "Água, luz e gás incluídos sem surpresas no final do mês.",
      "f5-t": "Cozinha Equipada",
      "f5-d": "Estúdios com frigorífico, fogão, forno e microondas.",
      "f6-t": "Camas de Casal",
      "f6-d":
        "Todos os quartos estão equipados com camas de casal confortáveis.",
      big1: "Vive perto.",
      big2: "Estuda melhor.",
      "contact-over": "— Contacto",
      "contact-head": 'Reserva o teu<br /><em class="accent">espaço</em>.',
      "contact-body":
        "Preenche o formulário ou contacta-nos directamente. Responderemos o mais brevemente possível com toda a informação sobre disponibilidade e preços.",
      "lbl-name": "Nome *",
      "lbl-email": "Email *",
      "lbl-room": "Tipologia de interesse",
      "opt-sel": "Selecciona uma opção",
      "opt-c": "Quarto Conforto",
      "opt-d": "Quarto Deluxe",
      "opt-s": "Estúdio Premium",
      "lbl-msg": "Mensagem",
      "form-submit-txt": "Enviar Mensagem ↗",
      "form-success": "✓ Mensagem enviada! Entraremos em contacto em breve.",
      "ph-name": "O teu nome",
      "ph-email": "email@exemplo.pt",
      "ph-msg": "Deixa a tua mensagem...",
      "footer-rights": "© 2025 Spatium Residence · Covilhã, Portugal",
      "footer-tag":
        "Residência Universitária · Qualidade · Conforto · Comunidade",
      // Room detail pages
      "rp-btn-back": "← Todos os quartos",
      "rp-btn-allrooms": "Ver todos os quartos",
      "rp-head-features": "Características",
      "rp-head-furniture": "Mobília",
      "rp-head-included": "Incluído",
      "rp-feat-wc": "WC privado",
      "rp-feat-furnished": "Mobilado",
      "rp-feat-light": "Muita luz natural",
      "rp-feat-patio": "Pátio privativo",
      "rp-feat-common": "Acesso às áreas comuns",
      "rp-furn-desk": "Secretária",
      "rp-furn-chair": "Cadeira",
      "rp-furn-wardrobe": "Roupeiro",
      "rp-furn-pillow": "Almofada",
      "rp-furn-bathcab": "Móvel de casa de banho",
      "rp-furn-mirror": "Espelho",
      "rp-furn-tv": "Mesa de televisão",
      "rp-inc-wifi": "WIFI de alta velocidade",
      "rp-inc-bills": "Despesas fixas (água, luz, gás)",
      "rp-inc-security": "Segurança 24h com código pessoal",
      "rp-inc-cleaning": "Limpeza das zonas comuns",
      "rp-inc-kitchen": "Cozinha partilhada equipada",
      "rp-inc-study": "Sala de estudo e convívio",
      "rp-cta-label-room": "Interessado neste quarto?",
      "rp-cta-label-studio": "Interessado neste estúdio?",
      // Conforto
      "rp-c-overline": "— Quarto Conforto",
      "rp-c-title": 'Quarto<br /><em class="accent">Conforto</em>',
      "rp-c-desc":
        "Quarto totalmente mobilado com WC privado, muita luz natural e acesso às áreas comuns. O espaço foi pensado para oferecer conforto funcional e um ambiente tranquilo para estudo.",
      "rp-c-feat1": "Área — 15m²",
      "rp-c-furn1": "Cama 2×1 metros",
      // Deluxe
      "rp-d-overline": "— Quarto Deluxe",
      "rp-d-title": 'Quarto<br /><em class="accent">Deluxe</em>',
      "rp-d-desc":
        "Espaçoso e luminoso, com acabamentos premium, WC privado, mesa de televisão e vista para o jardim. Mais espaço, mais luz, mais conforto.",
      "rp-d-feat1": "Área — 18m²",
      "rp-d-feat5": "Vista para o jardim",
      "rp-d-furn1": "Cama 2×1 metros",
      // Estúdio
      "rp-s-overline": "— Estúdio Premium",
      "rp-s-title": 'Estúdio<br /><em class="accent">Premium</em>',
      "rp-s-desc":
        "T0 totalmente autónomo com cozinha equipada, WC privado, sala, quarto e pátio exterior privado. Independência total dentro da residência.",
      "rp-s-feat1": "Área — 40m²",
      "rp-s-feat2": "Cozinha equipada",
      "rp-s-feat4": "Sala",
      "rp-s-feat5": "Quarto",
      "rp-s-feat6": "Pátio privativo exterior",
      "rp-s-furn1": "Cama King Size",
      "rp-s-furn5": "Sofá",
      "rp-s-furn6": "Bancada para refeições",
      "rp-s-head-kitchen": "Cozinha equipada com",
      "rp-s-kit1": "Frigorifico",
      "rp-s-kit2": "Fogão",
      "rp-s-kit3": "Forno",
      "rp-s-kit4": "Microondas",
    },
    en: {
      "nav-rooms": "Rooms",
      "nav-about": "About",
      "nav-gallery": "Gallery",
      "nav-contact": "Contact",
      "nav-cta": "Book Now",
      "hero-tag": '<span class="tag-dot"></span>University Residence · Covilhã',
      "hero-head": "Your space.<br />Your freedom.",
      "hero-sub": "Fully equipped rooms and studios, minutes from UBI.",
      "hero-btn1": "View Rooms",
      "hero-btn2": "Talk to Us ↗",
      "stat-typ": "Room Types",
      "stat-inaug": "Opening",
      "stat-dist": "5 min walk",
      "stat-size": "Largest Studio",
      "intro-over": "— About us",
      "intro-head":
        'Quality.<br /><em class="accent">Comfort.</em><br />Community.',
      "intro-body":
        "Spatium Residence was born from the desire to offer university students a modern, functional, and welcoming home. Every space was designed with detail in mind — from the ergonomics of the study room to the private courtyard where you can unplug.",
      "meta-loc": "Location",
      "meta-loc-val": "Covilhã, Portugal",
      "meta-type": "Type",
      "meta-type-val": "University Residence",
      "meta-avail": "Availability",
      "meta-rooms": "Rooms",
      "meta-rooms-val": "Comfort · Deluxe · Studio",
      "intro-caption": "Private residence garden",
      "rooms-over": "— Our spaces",
      "rooms-head": 'Find your<br /><em class="accent">ideal room</em>',
      "room1-badge": "Comfort",
      "room1-title": "Comfort Room",
      "room1-desc":
        "Fully furnished room with private bathroom, private patio, and access to common areas. Functionality and comfort in every detail.",
      "room1-bed": '<span class="meta-icon">🛏</span>2x1m Bed',
      "room1-wc": '<span class="meta-icon">🚿</span>Private Bath',
      "room1-patio": '<span class="meta-icon">🌿</span>Patio',
      "room-price": "Check price",
      "room-book": "Book ↗",
      "room-view": "View room",
      "room2-badge": "Deluxe",
      "room2-title": "Deluxe Room",
      "room2-desc":
        "Spacious and bright, with premium finishes, private bathroom, and a reading area. More space, more light, more comfort.",
      "room2-bed": '<span class="meta-icon">🛏</span>King Bed',
      "room2-view": '<span class="meta-icon">☀️</span>Garden view',
      "room3-badge": "Studio",
      "room3-title": "Premium Studio",
      "room3-desc":
        "Fully autonomous T0 with equipped kitchen, private bathroom, and outdoor patio. Total independence within the residence.",
      "room3-kitchen": '<span class="meta-icon">🍳</span>Kitchen',
      "room3-patio": '<span class="meta-icon">🌿</span>Private patio',
      "extras-title": "Included in all rooms",
      extra1: '<span class="extra-mark">↳</span>High-speed WIFI',
      extra2:
        '<span class="extra-mark">↳</span>Weekly cleaning of common areas',
      extra3:
        '<span class="extra-mark">↳</span>24h security with personal code',
      extra4:
        '<span class="extra-mark">↳</span>Fixed expenses (water, electricity, gas)',
      extra5: '<span class="extra-mark">↳</span>Fully equipped shared kitchen',
      extra6: '<span class="extra-mark">↳</span>Study and lounge room',
      "split-over": "— The residence",
      "split-head": 'Live close<br />to <em class="accent">UBI</em>.',
      "split-body":
        "Spatium Residence is located less than a 5-minute walk from the University of Beira Interior, in the heart of Covilhã. A modern building, renovated to the highest standards of comfort and sustainability.",
      "split-l1": '<span class="accent-text">01 —</span> 5 min walk to UBI',
      "split-l2":
        '<span class="accent-text">02 —</span> Fully renovated building',
      "split-l3":
        '<span class="accent-text">03 —</span> Active student community',
      "split-l4":
        '<span class="accent-text">04 —</span> Private patios and gardens',
      "split-btn": "Learn more ↗",
      "gallery-over": "— Our gallery",
      "gallery-head":
        'Every detail<br />was <em class="accent">thought out</em>',
      "mq-res": "University Residence",
      "mq-c1": "Comfort Room",
      "mq-c2": "Deluxe Room",
      "mq-c3": "Premium Studio",
      "mq-loc": "Covilhã, Portugal",
      "mq-ubi": "UBI · 5 minutes",
      "about-over": "— Why Spatium",
      "about-head":
        'Innovation and<br />comfort,<br /><em class="accent">designed for you</em>.',
      "f1-t": "Daily Cleaning",
      "f1-d": "Common areas are cleaned and sanitized daily.",
      "f2-t": "24h Security",
      "f2-d":
        "Personal code and cameras in common areas for your peace of mind.",
      "f3-t": "High-Speed WIFI",
      "f3-d": "Fast and reliable internet throughout the residence.",
      "f4-t": "Fixed Expenses",
      "f4-d":
        "Water, electricity, and gas included with no surprises at the end of the month.",
      "f5-t": "Equipped Kitchen",
      "f5-d": "Studios with fridge, stove, oven, and microwave.",
      "f6-t": "Double Beds",
      "f6-d": "All rooms are equipped with comfortable double beds.",
      big1: "Live close.",
      big2: "Study better.",
      "contact-over": "— Contact",
      "contact-head": 'Book your<br /><em class="accent">space</em>.',
      "contact-body":
        "Fill out the form or contact us directly. We will respond as soon as possible with all information regarding availability and pricing.",
      "lbl-name": "Name *",
      "lbl-email": "Email *",
      "lbl-room": "Room type of interest",
      "opt-sel": "Select an option",
      "opt-c": "Comfort Room",
      "opt-d": "Deluxe Room",
      "opt-s": "Premium Studio",
      "lbl-msg": "Message",
      "form-submit-txt": "Send Message ↗",
      "form-success": "✓ Message sent! We will contact you soon.",
      "ph-name": "Your name",
      "ph-email": "email@example.com",
      "ph-msg": "Leave your message...",
      "footer-rights": "© 2025 Spatium Residence · Covilhã, Portugal",
      "footer-tag": "University Residence · Quality · Comfort · Community",
      // Room detail pages
      "rp-btn-back": "← All rooms",
      "rp-btn-allrooms": "View all rooms",
      "rp-head-features": "Features",
      "rp-head-furniture": "Furniture",
      "rp-head-included": "Included",
      "rp-feat-wc": "Private bathroom",
      "rp-feat-furnished": "Furnished",
      "rp-feat-light": "Plenty of natural light",
      "rp-feat-patio": "Private patio",
      "rp-feat-common": "Access to common areas",
      "rp-furn-desk": "Desk",
      "rp-furn-chair": "Chair",
      "rp-furn-wardrobe": "Wardrobe",
      "rp-furn-pillow": "Pillow",
      "rp-furn-bathcab": "Bathroom cabinet",
      "rp-furn-mirror": "Mirror",
      "rp-furn-tv": "TV stand",
      "rp-inc-wifi": "High-speed WIFI",
      "rp-inc-bills": "Fixed expenses (water, electricity, gas)",
      "rp-inc-security": "24h security with personal code",
      "rp-inc-cleaning": "Cleaning of common areas",
      "rp-inc-kitchen": "Fully equipped shared kitchen",
      "rp-inc-study": "Study and lounge room",
      "rp-cta-label-room": "Interested in this room?",
      "rp-cta-label-studio": "Interested in this studio?",
      // Comfort
      "rp-c-overline": "— Comfort Room",
      "rp-c-title": 'Comfort<br /><em class="accent">Room</em>',
      "rp-c-desc":
        "Fully furnished room with private bathroom, plenty of natural light and access to common areas. The space was designed to provide functional comfort and a quiet study environment.",
      "rp-c-feat1": "Area — 15m²",
      "rp-c-furn1": "2×1m bed",
      // Deluxe
      "rp-d-overline": "— Deluxe Room",
      "rp-d-title": 'Deluxe<br /><em class="accent">Room</em>',
      "rp-d-desc":
        "Spacious and bright, with premium finishes, private bathroom, TV stand and garden view. More space, more light, more comfort.",
      "rp-d-feat1": "Area — 18m²",
      "rp-d-feat5": "Garden view",
      "rp-d-furn1": "2×1m bed",
      // Studio
      "rp-s-overline": "— Premium Studio",
      "rp-s-title": 'Premium<br /><em class="accent">Studio</em>',
      "rp-s-desc":
        "Fully autonomous T0 with equipped kitchen, private bathroom, living room, bedroom and private outdoor patio. Total independence within the residence.",
      "rp-s-feat1": "Area — 40m²",
      "rp-s-feat2": "Equipped kitchen",
      "rp-s-feat4": "Living room",
      "rp-s-feat5": "Bedroom",
      "rp-s-feat6": "Private outdoor patio",
      "rp-s-furn1": "King Size bed",
      "rp-s-furn5": "Sofa",
      "rp-s-furn6": "Dining counter",
      "rp-s-head-kitchen": "Equipped kitchen includes",
      "rp-s-kit1": "Fridge",
      "rp-s-kit2": "Stove",
      "rp-s-kit3": "Oven",
      "rp-s-kit4": "Microwave",
    },
  };

  langBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = btn.getAttribute("data-lang");

      // Update active state
      langBtns.forEach((b) => {
        if (b.getAttribute("data-lang") === lang) {
          b.classList.add("active");
        } else {
          b.classList.remove("active");
        }
      });

      // Update text and placeholders for i18n elements
      if (translations[lang]) {
        i18nElements.forEach((el) => {
          const key = el.getAttribute("data-i18n");
          if (key && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
          }

          const placeholderKey = el.getAttribute("data-i18n-placeholder");
          if (placeholderKey && translations[lang][placeholderKey]) {
            el.setAttribute("placeholder", translations[lang][placeholderKey]);
          }
        });
      }
    });
  });

  /* ---- NAV SCROLL ---- */
  const nav = document.getElementById("main-nav");
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- MOBILE MENU ---- */
  const burger = document.getElementById("nav-burger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  const toggleMenu = () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    document.body.style.overflow = mobileMenu.classList.contains("open")
      ? "hidden"
      : "";
  };

  burger?.addEventListener("click", toggleMenu);
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }),
  );

  /* ---- ROOM PAGE PHOTO GALLERY SLIDER ---- */
  document.querySelectorAll(".room-gallery").forEach((gallery) => {
    const track = gallery.querySelector(".room-gallery__track");
    const slides = Array.from(gallery.querySelectorAll(".room-gallery__slide"));
    const dotsWrap = gallery.querySelector(".room-gallery__dots");
    const prevBtn = gallery.querySelector(".room-gallery__arrow--prev");
    const nextBtn = gallery.querySelector(".room-gallery__arrow--next");

    if (!track || slides.length <= 1) return;

    let current = 0;
    let startX = 0;

    const dots = slides.map((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "room-gallery__dot" + (i === 0 ? " is-active" : "");
      d.setAttribute("aria-label", "Ir para foto " + (i + 1));
      d.addEventListener("click", () => goTo(i));
      dotsWrap && dotsWrap.appendChild(d);
      return d;
    });

    function goTo(n) {
      if (n < 0) n = slides.length - 1;
      else if (n >= slides.length) n = 0;
      current = n;
      track.style.transform = "translateX(-" + current * 100 + "%)";
      dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
    }

    prevBtn && prevBtn.addEventListener("click", () => goTo(current - 1));
    nextBtn && nextBtn.addEventListener("click", () => goTo(current + 1));

    track.addEventListener(
      "touchstart",
      (e) => {
        startX = e.changedTouches[0].clientX;
      },
      { passive: true },
    );
    track.addEventListener(
      "touchend",
      (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 35) goTo(diff > 0 ? current + 1 : current - 1);
      },
      { passive: true },
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    });
  });

  /* ---- PARALLAX HERO BRAND + BUILDING (subtle depth) ---- */
  const heroBrandContainer = document.querySelector(".hero-brand");
  const heroBrandSpan = document.getElementById("hero-brand");
  const heroBuildingWrap = document.getElementById("hero-building-wrap");

  if (heroBrandContainer || heroBuildingWrap) {
    window.addEventListener(
      "scroll",
      () => {
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
      },
      { passive: true },
    );
  }

  /* ---- GSAP HERO & SCROLL ANIMATIONS ---- */
  if (typeof gsap !== "undefined") {
    if (typeof ScrollTrigger !== "undefined")
      gsap.registerPlugin(ScrollTrigger);

    // 1. Hero text "spatium" character entrance
    if (heroBrandSpan) {
      const originalText = "spatium";
      heroBrandSpan.innerHTML = "";

      const chars = originalText.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        heroBrandSpan.appendChild(span);
        return span;
      });

      gsap.from(chars, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      });
    }

    // 2. Hero Building Image Entrance
    const heroBuildingImg = document.getElementById("hero-building-img");
    if (heroBuildingImg) {
      gsap.from(heroBuildingImg, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });
    }

    // 3. Hero Content Entrance
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      gsap.from(heroContent.children, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.8,
      });
    }

    // 4. Scroll Reveals using ScrollTrigger
    const sectionsToReveal = [
      "#intro .intro-grid",
      "#intro .intro-full-img",
      "#rooms .rooms-header",
      "#rooms .rooms-extras",
      "#editorial-split .split-grid",
      "#gallery .gallery-header",
      "#about .about-grid",
      "#contact .contact-grid",
    ];

    sectionsToReveal.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
    });

    // Stagger lists
    const staggerGroups = [
      { sel: ".room-card", trigger: ".rooms-grid" },
      { sel: ".feature-row", trigger: ".features-table" },
      { sel: ".gallery-item", trigger: ".gallery-masonry" },
    ];

    staggerGroups.forEach((group) => {
      const els = document.querySelectorAll(group.sel);
      if (els.length) {
        gsap.from(els, {
          scrollTrigger: {
            trigger: group.trigger,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    });
  }

  /* ---- MARQUEE (pause on hover) ---- */
  const marqueeTrack = document.getElementById("marquee-track");
  if (marqueeTrack) {
    marqueeTrack.parentElement.addEventListener("mouseenter", () => {
      marqueeTrack.style.animationPlayState = "paused";
    });
    marqueeTrack.parentElement.addEventListener("mouseleave", () => {
      marqueeTrack.style.animationPlayState = "running";
    });
  }

  /* ---- CONTACT FORM ---- */
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("form-submit");
  const successMsg = document.getElementById("form-success");
  const roomSelect = document.getElementById("form-room");
  const msgField = document.getElementById("form-message");

  const prefillMsgs = {
    pt: {
      conforto:
        "Olá! Tenho interesse em reservar o Quarto Conforto. Podem enviar disponibilidade e preços, por favor?",
      deluxe:
        "Olá! Tenho interesse em reservar o Quarto Deluxe. Podem enviar disponibilidade e preços, por favor?",
      studio:
        "Olá! Tenho interesse em reservar o Estúdio Premium. Podem enviar disponibilidade e preços, por favor?",
    },
    en: {
      conforto:
        "Hello! I am interested in booking the Comfort Room. Could you share availability and pricing?",
      deluxe:
        "Hello! I am interested in booking the Deluxe Room. Could you share availability and pricing?",
      studio:
        "Hello! I am interested in booking the Premium Studio. Could you share availability and pricing?",
    },
  };

  const getLang = () =>
    document.querySelector(".lang-btn.active")?.getAttribute("data-lang") ||
    "pt";

  const doPrefill = (key) => {
    if (!key || !roomSelect || !msgField) return;
    const opt = roomSelect.querySelector('option[value="' + key + '"]');
    if (opt) roomSelect.value = key;
    if (!msgField.value.trim() || msgField.dataset.auto === "true") {
      const msg = prefillMsgs[getLang()]?.[key];
      if (msg) {
        msgField.value = msg;
        msgField.dataset.auto = "true";
      }
    }
  };

  msgField?.addEventListener("input", () => {
    msgField.dataset.auto = "false";
  });
  roomSelect?.addEventListener("change", () => {
    if (roomSelect.value) doPrefill(roomSelect.value);
  });

  document
    .querySelectorAll(".room-card__cta--book[data-room]")
    .forEach((btn) => {
      btn.addEventListener("click", () =>
        doPrefill(btn.getAttribute("data-room")),
      );
    });

  const roomParam = new URLSearchParams(window.location.search).get("room");
  if (roomParam) setTimeout(() => doPrefill(roomParam), 100);

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.querySelector("#form-name").value.trim();
    const email = form.querySelector("#form-email").value.trim();
    if (!name || !email) {
      shakeBtn();
      return;
    }

    // Simulate send
    submitBtn.disabled = true;
    submitBtn.textContent = "A enviar…";

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = "Enviar Mensagem ↗";
      submitBtn.disabled = false;
      successMsg.classList.add("visible");
      setTimeout(() => successMsg.classList.remove("visible"), 5000);
    }, 1200);
  });

  function shakeBtn() {
    submitBtn.style.animation = "shake 0.4s ease";
    setTimeout(() => (submitBtn.style.animation = ""), 400);
  }

  /* ---- GALLERY LIGHTBOX (minimal) ---- */
  let lightbox = null;

  const createLightbox = () => {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.cssText = `
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(12,12,12,0.96);
      display: flex; align-items: center; justify-content: center;
      cursor: zoom-out; opacity: 0; transition: opacity 0.3s ease;
    `;

    const img = document.createElement("img");
    img.style.cssText = `
      max-width: 90vw; max-height: 90vh;
      object-fit: contain; border-radius: 8px;
      box-shadow: 0 32px 80px rgba(0,0,0,0.6);
    `;
    lightbox.appendChild(img);

    const close = document.createElement("button");
    close.innerHTML = "✕";
    close.style.cssText = `
      position: absolute; top: 2rem; right: 2rem;
      font-size: 1.5rem; color: rgba(255,255,255,0.5);
      background: none; border: none; cursor: pointer;
      font-family: sans-serif; line-height: 1;
    `;
    lightbox.appendChild(close);

    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", closeLightbox);
    close.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });

    return { lightbox, img };
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.style.opacity = "0";
    setTimeout(() => {
      lightbox?.remove();
      lightbox = null;
      document.body.style.overflow = "";
    }, 300);
  };

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.querySelector("img").src;
      const { lightbox: lb, img } = createLightbox();
      img.src = src;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          lb.style.opacity = "1";
        });
      });
      document.body.style.overflow = "hidden";
    });
  });

  /* ---- SMOOTH SECTION SCROLL FROM NAV ---- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });

  /* ---- CURSOR EFFECT (desktop only) ---- */
  if (window.innerWidth >= 1024) {
    const cursor = document.createElement("div");
    cursor.id = "cursor-dot";
    cursor.style.cssText = `
      position: fixed; z-index: 10000; pointer-events: none;
      width: 10px; height: 10px; border-radius: 50%;
      background: rgba(0,0,0,0.7); mix-blend-mode: multiply;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease, opacity 0.3s ease;
      opacity: 0;
    `;
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.style.opacity = "1";
    });

    document
      .querySelectorAll("a, button, .gallery-item, .room-card")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.style.width = "40px";
          cursor.style.height = "40px";
          cursor.style.opacity = "0.6";
        });
        el.addEventListener("mouseleave", () => {
          cursor.style.width = "10px";
          cursor.style.height = "10px";
          cursor.style.opacity = "1";
        });
      });
  }
});

/* ---- CSS INJECT: shake animation ---- */
const style = document.createElement("style");
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
