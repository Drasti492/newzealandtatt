/* ================================================================
   InkXas Auckland — main.js
   Fixes:
   - Hamburger nav (show/hide with body scroll lock + backdrop)
   - Video autoplay: hover on desktop, IntersectionObserver on mobile
   - Covers both .pro-card (index) and .tattoo-card (gallery)
   - Artist modal with correct IDs matching current HTML
   - WhatsApp booking buttons (wa-session, wa-deposit, wa-full)
   - Contact form via Formspree
   - Chatbot
   ================================================================ */

const STUDIO = {
  whatsapp: '64212345678',
  name:     'InkXas Auckland',
  suburb:   'Parnell, Auckland',
};

function buildWaUrl(message) {
  return 'https://wa.me/' + STUDIO.whatsapp + '?text=' + encodeURIComponent(message);
}

/* ── Artist data ───────────────────────────────────────────────── */
const ARTISTS = {
  1: {
    name:         'James "Hori" Tūhoe',
    specialty:    'Tā Moko & Polynesian',
    bio:          'James is a master of traditional Māori tā moko and contemporary Polynesian tattooing. His deep understanding of whakapapa and cultural narrative ensures every piece carries authentic meaning. With over 14 years of experience, he is one of Auckland\'s most respected cultural tattoo artists.',
    skills:       ['Tā Moko', 'Polynesian', 'Kirituhi', 'Custom cultural design'],
    availability: 'Monday to Saturday, 8:00 am to 7:00 pm',
    rate:         'From NZD 220 per hour',
    photo:        './pages/gallery/johnny rebel.jpg',
  },
  2: {
    name:         'Aroha Ngāti',
    specialty:    'Portraiture & Realism',
    bio:          'Aroha specialises in hyper-realistic portraiture, capturing emotion and depth with extraordinary precision. She has 11 years of experience and a fully booked schedule year-round.',
    skills:       ['Portrait', 'Black and grey realism', 'Colour realism'],
    availability: 'Tuesday to Saturday, 9:00 am to 6:00 pm',
    rate:         'From NZD 250 per hour',
    photo:        './pages/gallery/mia valdez.jpg',
  },
  3: {
    name:         'Kenji Murakami',
    specialty:    'Japanese Traditional',
    bio:          'Kenji channels the ancient art of irezumi into bold, flowing compositions. Trained in Osaka before moving to Auckland, his large-scale Japanese works are considered some of the finest in Aotearoa.',
    skills:       ['Irezumi', 'Japanese traditional', 'Large scale', 'Full sleeve'],
    availability: 'Wednesday to Sunday, 10:00 am to 7:00 pm',
    rate:         'From NZD 230 per hour',
    photo:        './pages/gallery/jun leo.jpg',
  },
  4: {
    name:         'Lily Ashford',
    specialty:    'Fine Line & Minimalist',
    bio:          'Lily crafts delicate, precise fine-line tattoos with an architectural eye for composition. Her minimalist pieces carry quiet power — every line is intentional.',
    skills:       ['Fine line', 'Minimalist', 'Geometric', 'Botanical'],
    availability: 'Monday to Friday, 9:00 am to 5:00 pm',
    rate:         'From NZD 200 per hour',
    photo:        './pages/gallery/leone carter.jpg',
  },
  5: {
    name:         'Diego Reyes',
    specialty:    'Black and Grey & Script',
    bio:          'Diego is renowned for his mastery of black and grey work, blending lettering, ornament, and portraiture into cohesive compositions with cinematic depth.',
    skills:       ['Black and grey', 'Script', 'Chicano', 'Ornamental'],
    availability: 'Monday to Saturday, 10:00 am to 8:00 pm',
    rate:         'From NZD 210 per hour',
    photo:        './pages/gallery/diogo.jpg',
  },
  6: {
    name:         'Sophie Jamieson',
    specialty:    'Colour Realism & Floral',
    bio:          'Sophie transforms skin into a canvas of vivid botanical colour. Her waiting list is typically three to four months.',
    skills:       ['Colour realism', 'Floral', 'Illustrative', 'Watercolour'],
    availability: 'Wednesday to Sunday, 9:00 am to 6:00 pm',
    rate:         'From NZD 240 per hour',
    photo:        './pages/gallery/sarah.jpg',
  },
};

/* Resolve photo path depending on which page we're on */
function resolvePhoto(path) {
  if (window.location.pathname.indexOf('/pages/') !== -1) {
    return path.replace('./', '../');
  }
  return path;
}

/* ── Tattoo data for WhatsApp booking ─────────────────────────── */
const TATTOOS = {
  'angry-bird':       { name: 'Angry Birds Sleeve',         style: 'Colour cartoon realism',  placement: 'Forearm',             hours: 'approx 5 hours',  priceMin: 850,  priceMax: 1100, deposit: 150 },
  'back-flower':      { name: 'Large Back Floral',           style: 'Colour realism',           placement: 'Full upper back',     hours: 'approx 8 hours',  priceMin: 1350, priceMax: 1700, deposit: 200 },
  'butterfly-arm':    { name: 'Realistic Butterfly',         style: 'Colour realism',           placement: 'Inner forearm',       hours: 'approx 4 hours',  priceMin: 650,  priceMax: 850,  deposit: 150 },
  'crying-lady':      { name: 'Crying Woman Portrait',       style: 'Black and grey realism',   placement: 'Upper arm',           hours: 'approx 6 hours',  priceMin: 1000, priceMax: 1300, deposit: 200 },
  'greek-god':        { name: 'Greek God — Zeus',            style: 'Black and grey',           placement: 'Outer arm',           hours: 'approx 7 hours',  priceMin: 1150, priceMax: 1500, deposit: 200 },
  'rose-typography':  { name: 'Rose and Typography Sleeve',  style: 'Fine line',                placement: 'Full forearm',        hours: 'approx 5 hours',  priceMin: 850,  priceMax: 1100, deposit: 150 },
  'zombie-sleeve':    { name: 'Zombie Apocalypse Sleeve',    style: 'Colour horror realism',    placement: 'Half sleeve',         hours: 'approx 7 hours',  priceMin: 1150, priceMax: 1500, deposit: 200 },
  'giant-peony':      { name: 'Giant Peony Statement',       style: 'Colour realism',           placement: 'Shoulder cap',        hours: 'approx 6 hours',  priceMin: 1000, priceMax: 1300, deposit: 200 },
  'leopard-hand':     { name: 'Leopard Hand Tattoo',         style: 'Realistic animal',         placement: 'Full hand',           hours: 'approx 6 hours',  priceMin: 1000, priceMax: 1350, deposit: 200 },
  'geometric-lines':  { name: 'Minimal Geometric Lines',     style: 'Fine line abstract',       placement: 'Forearm',             hours: 'approx 3 hours',  priceMin: 480,  priceMax: 650,  deposit: 100 },
  'lion-arm':         { name: 'Lion Portrait',               style: 'Black and grey realism',   placement: 'Upper arm',           hours: 'approx 7 hours',  priceMin: 1150, priceMax: 1500, deposit: 200 },
  'blue-butterfly':   { name: 'Blue Morpho Butterfly',       style: 'Vibrant colour realism',   placement: 'Inner arm',           hours: 'approx 3 hours',  priceMin: 480,  priceMax: 650,  deposit: 100 },
  'owl-leg':          { name: 'Wise Owl Calf Piece',         style: 'Black and grey realism',   placement: 'Lower leg',           hours: 'approx 6 hours',  priceMin: 1000, priceMax: 1300, deposit: 200 },
  'red-lips':         { name: 'Red Lips Sketch',             style: 'Colour pop art',           placement: 'Shoulder',            hours: 'approx 4 hours',  priceMin: 650,  priceMax: 850,  deposit: 150 },
  'framed-floral':    { name: 'Framed Floral Square',        style: 'Neo-traditional',          placement: 'Forearm panel',       hours: 'approx 5 hours',  priceMin: 850,  priceMax: 1100, deposit: 150 },
  'wolf-thigh':       { name: 'Howling Wolf Thigh',          style: 'Black and grey realism',   placement: 'Upper thigh',         hours: 'approx 8 hours',  priceMin: 1350, priceMax: 1700, deposit: 200 },
  'spine-floral':     { name: 'Spine Floral Cascade',        style: 'Colour realism',           placement: 'Spine to lower back', hours: 'approx 8 hours',  priceMin: 1350, priceMax: 1700, deposit: 200 },
  'lion-hd':          { name: 'Hyper-Realistic Lion HD',     style: 'Full colour realism',      placement: 'Full sleeve',         hours: 'approx 12 hours', priceMin: 2000, priceMax: 2800, deposit: 300 },
  'smoking-cat':      { name: 'Smoking Cat Ankle',           style: 'Neo-traditional',          placement: 'Ankle wrap',          hours: 'approx 3 hours',  priceMin: 480,  priceMax: 650,  deposit: 100 },
  'monster-hand':     { name: 'Monster Claw Hand',           style: 'Colour horror',            placement: 'Hand and fingers',    hours: 'approx 6 hours',  priceMin: 1000, priceMax: 1350, deposit: 200 },
  'butterfly-disc':   { name: 'Butterfly Discovery Sleeve',  style: 'Colour realism',           placement: 'Half sleeve',         hours: 'approx 5 hours',  priceMin: 850,  priceMax: 1100, deposit: 150 },
  'rib-rose':         { name: 'Red Rose Rib Piece',          style: 'Colour realism',           placement: 'Side ribs',           hours: 'approx 5 hours',  priceMin: 850,  priceMax: 1100, deposit: 150 },
  'ankle-flower':     { name: 'Delicate Ankle Flower',       style: 'Fine line floral',         placement: 'Ankle',               hours: 'approx 3 hours',  priceMin: 480,  priceMax: 650,  deposit: 100 },
  'patchwork-sleeve': { name: 'Collage Patchwork Sleeve',    style: 'Mixed styles',             placement: 'Full arm',            hours: 'approx 12 hours', priceMin: 2000, priceMax: 2800, deposit: 300 },
};

/* ================================================================
   DOM READY
   ================================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ── WhatsApp contact link ──────────────────────────────────── */
  var contactWaLink = document.getElementById('contactWaLink');
  if (contactWaLink) {
    contactWaLink.href = buildWaUrl(
      'Kia ora ' + STUDIO.name + ' team,\n\nI would like to get in touch regarding a tattoo enquiry.\n\nNgā mihi'
    );
  }

  /* ── Sticky header ──────────────────────────────────────────── */
  var header = document.getElementById('siteHeader');
  if (header) {
    function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Hamburger navigation ───────────────────────────────────── */
  var navToggle = document.getElementById('navToggle');
  var navList   = document.getElementById('navList');
  var navClose  = document.getElementById('navClose');

  function openNav() {
    if (!navList) return;
    navList.classList.add('show');
    navList.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  }

  function closeNav() {
    if (!navList) return;
    navList.classList.remove('show');
    navList.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
  }

  if (navToggle) navToggle.addEventListener('click', openNav);
  if (navClose)  navClose.addEventListener('click', closeNav);

  /* Close nav when any nav link is clicked */
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* Close nav when clicking the backdrop (outside the drawer) */
  document.addEventListener('click', function (e) {
    if (
      navList &&
      navList.classList.contains('show') &&
      !navList.contains(e.target) &&
      navToggle && e.target !== navToggle &&
      !navToggle.contains(e.target)
    ) {
      closeNav();
    }
  });

  /* ── Artist modal ───────────────────────────────────────────── */
  var modalOverlay   = document.getElementById('artistModal');
  var modalPhoto     = document.getElementById('modalPhoto');
  var modalName      = document.getElementById('modalArtistName');
  var modalSpecialty = document.getElementById('modalArtistSpecialty');
  var modalBio       = document.getElementById('modalArtistBio');
  var modalDetails   = document.getElementById('modalArtistDetails');
  var modalBookBtn   = document.getElementById('modalBookBtn');

  function openArtistModal(id) {
    var a = ARTISTS[id];
    if (!a || !modalOverlay) return;
    if (modalPhoto)     { modalPhoto.src = resolvePhoto(a.photo); modalPhoto.alt = a.name; }
    if (modalName)      modalName.textContent      = a.name;
    if (modalSpecialty) modalSpecialty.textContent = a.specialty;
    if (modalBio)       modalBio.textContent       = a.bio;
    if (modalDetails) {
      modalDetails.innerHTML =
        '<div class="modal-detail-row"><span class="modal-detail-label">Specialities</span><span class="modal-detail-value">' + a.skills.join(', ') + '</span></div>' +
        '<div class="modal-detail-row"><span class="modal-detail-label">Availability</span><span class="modal-detail-value">' + a.availability + '</span></div>' +
        '<div class="modal-detail-row"><span class="modal-detail-label">Rate</span><span class="modal-detail-value">' + a.rate + '</span></div>';
    }
    if (modalBookBtn) {
      modalBookBtn.href = buildWaUrl(
        'Kia ora ' + STUDIO.name + ' team,\n\nI would like to enquire about booking a session with ' +
        a.name + ' (' + a.specialty + ').\n\nPlease let me know availability and next steps.\n\nNgā mihi'
      );
    }
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeArtistModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('[data-artist]').forEach(function (el) {
    el.addEventListener('click', function () { openArtistModal(Number(el.dataset.artist)); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') openArtistModal(Number(el.dataset.artist));
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(function (btn) {
    btn.addEventListener('click', closeArtistModal);
  });

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeArtistModal();
    });
  }

  /* ── Gallery filter ─────────────────────────────────────────── */
  var filterBtns  = document.querySelectorAll('.filter-btn');
  var tattooCards = document.querySelectorAll('.tattoo-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      tattooCards.forEach(function (card) {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });

  /* ── WhatsApp booking buttons ───────────────────────────────── */
  document.querySelectorAll('[data-wa-deposit]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var t = TATTOOS[btn.dataset.waDeposit];
      if (!t) return;
      window.open(buildWaUrl(
        'Kia ora ' + STUDIO.name + ' team,\n\n' +
        'I would like to pay a deposit to book the following tattoo:\n\n' +
        'Tattoo: ' + t.name + '\n' +
        'Style: ' + t.style + '\n' +
        'Placement: ' + t.placement + '\n' +
        'Estimated time: ' + t.hours + '\n' +
        'Estimated full price: NZD ' + t.priceMin + ' to NZD ' + t.priceMax + '\n' +
        'Deposit amount: NZD ' + t.deposit + '\n\n' +
        'Please send me your payment details to secure my appointment.\n\nNgā mihi'
      ), '_blank');
    });
  });

  document.querySelectorAll('[data-wa-full]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var t = TATTOOS[btn.dataset.waFull];
      if (!t) return;
      window.open(buildWaUrl(
        'Kia ora ' + STUDIO.name + ' team,\n\n' +
        'I would like to pay in full for the following tattoo:\n\n' +
        'Tattoo: ' + t.name + '\n' +
        'Style: ' + t.style + '\n' +
        'Placement: ' + t.placement + '\n' +
        'Estimated time: ' + t.hours + '\n' +
        'Estimated full price: NZD ' + t.priceMin + ' to NZD ' + t.priceMax + '\n\n' +
        'Please confirm the exact quote and send payment details.\n\nNgā mihi'
      ), '_blank');
    });
  });

  document.querySelectorAll('[data-wa-session]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var type      = btn.dataset.waSession;
      var amount    = btn.dataset.amount || '';
      var isDeposit = btn.dataset.payType === 'deposit';
      var payText   = isDeposit
        ? 'I would like to pay the NZD ' + amount + ' deposit to secure my session.'
        : 'I would like to enquire about paying in full. Estimated cost: ' + amount + '.';
      window.open(buildWaUrl(
        'Kia ora ' + STUDIO.name + ' team,\n\n' +
        'I would like to book a ' + type + '.\n' + payText + '\n\n' +
        'Please let me know available dates and next steps.\n\nNgā mihi'
      ), '_blank');
    });
  });

  document.querySelectorAll('[data-wa-general]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var context = btn.dataset.waGeneral || 'a tattoo session';
      window.open(buildWaUrl(
        'Kia ora ' + STUDIO.name + ' team,\n\n' +
        'I would like to enquire about booking ' + context + '.\n\n' +
        'Please let me know your availability.\n\nNgā mihi'
      ), '_blank');
    });
  });

  /* ── Toast ──────────────────────────────────────────────────── */
  var toast = document.getElementById('toastNotification');

  function showToast(msg, duration) {
    if (!toast) return;
    duration = duration || 4000;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, duration);
  }

  /* ── Contact form ───────────────────────────────────────────── */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = contactForm.querySelector('[type="submit"]');
      var original  = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled    = true;
      fetch(contactForm.action, {
        method:  'POST',
        body:    new FormData(contactForm),
        headers: { Accept: 'application/json' },
      }).then(function (res) {
        if (res.ok) {
          showToast('Your message has been sent. We will be in touch shortly.');
          contactForm.reset();
        } else {
          showToast('There was an error sending your message. Please try again.');
        }
      }).catch(function () {
        showToast('Network error. Please check your connection and try again.');
      }).finally(function () {
        submitBtn.textContent = original;
        submitBtn.disabled    = false;
      });
    });
  }

  /* ── Footer year ────────────────────────────────────────────── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Chatbot ────────────────────────────────────────────────── */
  var chatTrigger  = document.getElementById('chatbotTrigger');
  var chatWindow   = document.getElementById('chatbotWindow');
  var chatCloseBtn = document.getElementById('chatClose');
  var chatMsgs     = document.getElementById('chatMessages');
  var chatInputEl  = document.getElementById('chatInput');
  var chatSendBtn  = document.getElementById('chatSend');

  var BOT = {
    greeting: 'Kia ora! Welcome to ' + STUDIO.name + ' in ' + STUDIO.suburb + '.\n\nI can help with pricing, bookings, our artists, or anything else about the studio. What would you like to know?',
    pricing:  'Our pricing guide in New Zealand dollars:\n\nSmall tattoos (1–2 hrs): NZD 200–350\nMedium tattoos (3–4 hrs): NZD 450–700\nLarge tattoos (5–8 hrs): NZD 800–1,700\nFull sleeves or mega pieces: NZD 2,000–4,500+\n\nAll sessions require a non-refundable deposit of NZD 100–300, which comes off your final price.',
    booking:  'To book a session at InkXas:\n\n1. Browse our Gallery and select a tattoo\n2. Tap Pay Deposit or Pay in Full on any tattoo card\n3. WhatsApp opens with all your details pre-filled\n4. We confirm your slot once the deposit is received\n\nOr visit our Booking page to choose a session type directly.',
    deposit:  'Deposit policy:\n\nDeposits are non-refundable and range from NZD 100–300. Your deposit comes off your final price.\n\nPlease give at least 48 hours notice to reschedule.',
    artists:  'Our six resident artists:\n\nJames Tūhoe — Tā Moko and Polynesian\nAroha Ngāti — Portraiture and Realism\nKenji Murakami — Japanese Traditional\nLily Ashford — Fine Line and Minimalist\nDiego Reyes — Black and Grey and Script\nSophie Jamieson — Colour Realism and Floral',
    hours:    'Studio hours:\n\nMonday to Saturday: 8:00 am to 8:00 pm\nSunday: 9:00 am to 2:00 pm\n\nAppointments preferred. Walk-ins welcome when availability allows.',
    location: 'InkXas is a private studio in ' + STUDIO.suburb + ', New Zealand.\n\nWe also offer door-to-door service across Auckland.',
    gallery:  'Our gallery showcases 24 pieces across multiple styles. Every tattoo card includes a price estimate and payment buttons.',
    maori:    'Tā moko and Kirituhi are offered by James Tūhoe, who specialises in culturally grounded Māori and Polynesian tattoo design.',
    fallback: 'Thanks for your question. For personalised assistance, please message our team directly via WhatsApp or through the Contact page.',
  };

  function getBotReply(input) {
    var t = input.toLowerCase();
    if (/kia ora|hello|hi there|hey|good (morning|afternoon|evening)/.test(t)) return BOT.greeting;
    if (/pric|cost|nzd|dollar|how much|rate|fee/.test(t))                      return BOT.pricing;
    if (/book|appoint|session|schedule|reserve|walk.?in/.test(t))              return BOT.booking;
    if (/deposit|pay|full pay|upfront|payment|refund/.test(t))                 return BOT.deposit;
    if (/artist|james|aroha|kenji|lily|diego|sophie|who|team|staff/.test(t))   return BOT.artists;
    if (/hour|open|close|when|time|sunday|monday|saturday|availab/.test(t))    return BOT.hours;
    if (/where|location|address|parnell|auckland|studio|door|travel/.test(t))  return BOT.location;
    if (/gallery|example|work|photo|video|style|design|see|show/.test(t))      return BOT.gallery;
    if (/m.ori|moko|polynesian|cultural|kirituhi/.test(t))                     return BOT.maori;
    return BOT.fallback;
  }

  function appendMsg(text, sender) {
    if (!chatMsgs) return;
    var div = document.createElement('div');
    div.className   = 'chat-msg ' + sender;
    div.textContent = text;
    chatMsgs.appendChild(div);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
  }

  function sendMsg(text) {
    if (!text || !text.trim()) return;
    appendMsg(text, 'user');
    if (chatInputEl) chatInputEl.value = '';
    setTimeout(function () { appendMsg(getBotReply(text), 'bot'); }, 560);
  }

  function closeChatbot() { if (chatWindow) chatWindow.classList.remove('open'); }

  if (chatTrigger) {
    chatTrigger.addEventListener('click', function () {
      if (!chatWindow) return;
      chatWindow.classList.toggle('open');
      if (chatWindow.classList.contains('open') && chatMsgs && chatMsgs.children.length === 0) {
        setTimeout(function () { appendMsg(BOT.greeting, 'bot'); }, 300);
      }
    });
  }
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChatbot);
  if (chatSendBtn)  chatSendBtn.addEventListener('click',  function () { sendMsg(chatInputEl ? chatInputEl.value : ''); });
  if (chatInputEl)  chatInputEl.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendMsg(chatInputEl.value); });

  document.querySelectorAll('.quick-reply').forEach(function (btn) {
    btn.addEventListener('click', function () { sendMsg(btn.textContent); });
  });

  /* ── Global ESC key ─────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeArtistModal(); closeNav(); closeChatbot(); }
  });

}); /* end DOMContentLoaded */

/* ================================================================
   VIDEO AUTOPLAY — outside DOMContentLoaded so it runs after parse
   Targets: .pro-card (index.html) AND .tattoo-card (gallery.html)
   Desktop  → play on mouseenter, pause on mouseleave
   Mobile   → play when card is ≥70% visible, pause otherwise
   ================================================================ */
(function initVideoAutoplay() {
  var canHover = window.matchMedia('(hover: hover)').matches;

  /* Collect all video cards from both page types */
  var cards = Array.prototype.slice.call(
    document.querySelectorAll('.pro-card, .tattoo-card')
  );

  cards.forEach(function (card) {
    /* Find the video inside — could be .preview-video or just a plain <video> */
    var video = card.querySelector('.preview-video') || card.querySelector('video');
    if (!video) return;

    /* Ensure correct attributes for mobile autoplay */
    video.muted       = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');

    if (canHover) {
      /* ── Desktop: hover ──────────────────────────────────────── */
      card.addEventListener('mouseenter', function () {
        video.play().catch(function () {});
      });
      card.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
      });
    } else {
      /* ── Mobile: IntersectionObserver at 70% visibility ──────── */
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
            video.play().catch(function () {});
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      }, { threshold: [0, 0.7, 1.0] });

      observer.observe(card);
    }
  });
})();