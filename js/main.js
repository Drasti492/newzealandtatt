/* ================================================================
   InkXas Auckland — main.js
   WhatsApp number: change STUDIO.whatsapp only — never touch HTML
   ================================================================ */

/* ===================== STUDIO CONFIG ===================== */
const STUDIO = {
  whatsapp: '64212345678',   /* NZ format: country code + number, no + or spaces */
  name:     'InkXas Auckland',
  suburb:   'Parnell, Auckland',
};

function buildWaUrl(message) {
  return `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(message)}`;
}

/* ===================== ARTIST DATA ===================== */
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
    bio:          'Aroha specialises in hyper-realistic portraiture, capturing emotion and depth with extraordinary precision. Her nuanced approach to skin tone, shading, and fine detail produces pieces that are genuinely painterly. She has 11 years of experience and a fully booked schedule year-round.',
    skills:       ['Portrait', 'Black and grey realism', 'Colour realism'],
    availability: 'Tuesday to Saturday, 9:00 am to 6:00 pm',
    rate:         'From NZD 250 per hour',
    photo:        './pages/gallery/mia valdez.jpg',
  },
  3: {
    name:         'Kenji Murakami',
    specialty:    'Japanese Traditional',
    bio:          'Kenji channels the ancient art of irezumi into bold, flowing compositions. Trained in Osaka before moving to Auckland, his large-scale Japanese works tell stories through koi, dragons, cherry blossoms, and waves. His back pieces are considered some of the finest in Aotearoa.',
    skills:       ['Irezumi', 'Japanese traditional', 'Large scale', 'Full sleeve'],
    availability: 'Wednesday to Sunday, 10:00 am to 7:00 pm',
    rate:         'From NZD 230 per hour',
    photo:        './pages/gallery/jun leo.jpg',
  },
  4: {
    name:         'Lily Ashford',
    specialty:    'Fine Line & Minimalist',
    bio:          'Lily crafts delicate, precise fine-line tattoos with an architectural eye for composition. Her minimalist pieces carry quiet power — every line is intentional, every negative space considered. She works with both small statement pieces and expansive abstract compositions.',
    skills:       ['Fine line', 'Minimalist', 'Geometric', 'Botanical'],
    availability: 'Monday to Friday, 9:00 am to 5:00 pm',
    rate:         'From NZD 200 per hour',
    photo:        './pages/gallery/leone carter.jpg',
  },
  5: {
    name:         'Diego Reyes',
    specialty:    'Black and Grey & Script',
    bio:          'Diego is renowned for his mastery of black and grey work, blending lettering, ornament, and portraiture into cohesive compositions with cinematic depth. His Chicano-influenced style carries a boldness that is uniquely his own.',
    skills:       ['Black and grey', 'Script', 'Chicano', 'Ornamental'],
    availability: 'Monday to Saturday, 10:00 am to 8:00 pm',
    rate:         'From NZD 210 per hour',
    photo:        './pages/gallery/diogo.jpg',
  },
  6: {
    name:         'Sophie Jamieson',
    specialty:    'Colour Realism & Floral',
    bio:          'Sophie transforms skin into a canvas of vivid botanical colour. Her floral compositions are celebrated for their painterly luminosity and rich saturation. She has worked with clients across New Zealand, Australia, and Europe, and her waiting list is typically three to four months.',
    skills:       ['Colour realism', 'Floral', 'Illustrative', 'Watercolour'],
    availability: 'Wednesday to Sunday, 9:00 am to 6:00 pm',
    rate:         'From NZD 240 per hour',
    photo:        './pages/gallery/sarah.jpg',
  },
};

/* ===================== TATTOO DATA ===================== */
const TATTOOS = {
  'angry-bird':      { name: 'Angry Birds Sleeve',         style: 'Colour cartoon realism',  placement: 'Forearm',              hours: 'approx 5 hours',   priceMin: 850,  priceMax: 1100, deposit: 150 },
  'back-flower':     { name: 'Large Back Floral',           style: 'Colour realism',           placement: 'Full upper back',      hours: 'approx 8 hours',   priceMin: 1350, priceMax: 1700, deposit: 200 },
  'butterfly-arm':   { name: 'Realistic Butterfly',         style: 'Colour realism',           placement: 'Inner forearm',        hours: 'approx 4 hours',   priceMin: 650,  priceMax: 850,  deposit: 150 },
  'crying-lady':     { name: 'Crying Woman Portrait',       style: 'Black and grey realism',   placement: 'Upper arm',            hours: 'approx 6 hours',   priceMin: 1000, priceMax: 1300, deposit: 200 },
  'greek-god':       { name: 'Greek God — Zeus',            style: 'Black and grey',           placement: 'Outer arm',            hours: 'approx 7 hours',   priceMin: 1150, priceMax: 1500, deposit: 200 },
  'rose-typography': { name: 'Rose and Typography Sleeve',  style: 'Fine line',                placement: 'Full forearm',         hours: 'approx 5 hours',   priceMin: 850,  priceMax: 1100, deposit: 150 },
  'zombie-sleeve':   { name: 'Zombie Apocalypse Sleeve',    style: 'Colour horror realism',    placement: 'Half sleeve',          hours: 'approx 7 hours',   priceMin: 1150, priceMax: 1500, deposit: 200 },
  'giant-peony':     { name: 'Giant Peony Statement',       style: 'Colour realism',           placement: 'Shoulder cap',         hours: 'approx 6 hours',   priceMin: 1000, priceMax: 1300, deposit: 200 },
  'leopard-hand':    { name: 'Leopard Hand Tattoo',         style: 'Realistic animal',         placement: 'Full hand',            hours: 'approx 6 hours',   priceMin: 1000, priceMax: 1350, deposit: 200 },
  'geometric-lines': { name: 'Minimal Geometric Lines',     style: 'Fine line abstract',       placement: 'Forearm',              hours: 'approx 3 hours',   priceMin: 480,  priceMax: 650,  deposit: 100 },
  'lion-arm':        { name: 'Lion Portrait',               style: 'Black and grey realism',   placement: 'Upper arm',            hours: 'approx 7 hours',   priceMin: 1150, priceMax: 1500, deposit: 200 },
  'blue-butterfly':  { name: 'Blue Morpho Butterfly',       style: 'Vibrant colour realism',   placement: 'Inner arm',            hours: 'approx 3 hours',   priceMin: 480,  priceMax: 650,  deposit: 100 },
  'owl-leg':         { name: 'Wise Owl Calf Piece',         style: 'Black and grey realism',   placement: 'Lower leg',            hours: 'approx 6 hours',   priceMin: 1000, priceMax: 1300, deposit: 200 },
  'red-lips':        { name: 'Red Lips Sketch',             style: 'Colour pop art',           placement: 'Shoulder',             hours: 'approx 4 hours',   priceMin: 650,  priceMax: 850,  deposit: 150 },
  'framed-floral':   { name: 'Framed Floral Square',        style: 'Neo-traditional',          placement: 'Forearm panel',        hours: 'approx 5 hours',   priceMin: 850,  priceMax: 1100, deposit: 150 },
  'wolf-thigh':      { name: 'Howling Wolf Thigh',          style: 'Black and grey realism',   placement: 'Upper thigh',          hours: 'approx 8 hours',   priceMin: 1350, priceMax: 1700, deposit: 200 },
  'spine-floral':    { name: 'Spine Floral Cascade',        style: 'Colour realism',           placement: 'Spine to lower back',  hours: 'approx 8 hours',   priceMin: 1350, priceMax: 1700, deposit: 200 },
  'lion-hd':         { name: 'Hyper-Realistic Lion HD',     style: 'Full colour realism',      placement: 'Full sleeve',          hours: 'approx 12 hours',  priceMin: 2000, priceMax: 2800, deposit: 300 },
  'smoking-cat':     { name: 'Smoking Cat Ankle',           style: 'Neo-traditional',          placement: 'Ankle wrap',           hours: 'approx 3 hours',   priceMin: 480,  priceMax: 650,  deposit: 100 },
  'monster-hand':    { name: 'Monster Claw Hand',           style: 'Colour horror',            placement: 'Hand and fingers',     hours: 'approx 6 hours',   priceMin: 1000, priceMax: 1350, deposit: 200 },
  'butterfly-disc':  { name: 'Butterfly Discovery Sleeve',  style: 'Colour realism',           placement: 'Half sleeve',          hours: 'approx 5 hours',   priceMin: 850,  priceMax: 1100, deposit: 150 },
  'rib-rose':        { name: 'Red Rose Rib Piece',          style: 'Colour realism',           placement: 'Side ribs',            hours: 'approx 5 hours',   priceMin: 850,  priceMax: 1100, deposit: 150 },
  'ankle-flower':    { name: 'Delicate Ankle Flower',       style: 'Fine line floral',         placement: 'Ankle',                hours: 'approx 3 hours',   priceMin: 480,  priceMax: 650,  deposit: 100 },
  'patchwork-sleeve':{ name: 'Collage Patchwork Sleeve',    style: 'Mixed styles',             placement: 'Full arm',             hours: 'approx 12 hours',  priceMin: 2000, priceMax: 2800, deposit: 300 },
};

/* ===================== DOM READY ===================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- WHATSAPP CONTACT LINK (index.html) ---------- */
  const contactWaLink = document.getElementById('contactWaLink');
  if (contactWaLink) {
    contactWaLink.href = buildWaUrl(`Kia ora ${STUDIO.name} team,\n\nI would like to get in touch regarding a tattoo enquiry.\n\nNgā mihi`);
  }

  /* ---------- HEADER SCROLL ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- NAVIGATION ---------- */
  const navToggle = document.getElementById('navToggle');
  const navList   = document.getElementById('navList');
  const navClose  = document.getElementById('navClose');

  function openNav() {
    if (!navList) return;
    navList.classList.add('open');
    navList.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  }
  function closeNav() {
    if (!navList) return;
    navList.classList.remove('open');
    navList.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
  }

  navToggle?.addEventListener('click', openNav);
  navClose?.addEventListener('click', closeNav);

  /* Close nav when a nav link is clicked */
  document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeNav));

  /* Close nav when clicking the backdrop overlay */
  document.addEventListener('click', (e) => {
    if (navList?.classList.contains('open') && !navList.contains(e.target) && e.target !== navToggle) {
      closeNav();
    }
  });

  /* ---------- ACTIVE NAV LINK ---------- */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (
      (currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('/')) && (href === '#home' || href.endsWith('index.html'))
    ) {
      link.classList.add('active');
    } else if (href.includes('gallery') && currentPath.includes('gallery')) {
      link.classList.add('active');
    } else if (href.includes('book') && currentPath.includes('book')) {
      link.classList.add('active');
    } else if (href.includes('contact') && currentPath.includes('contact')) {
      link.classList.add('active');
    }
  });

  /* ---------- ARTIST MODAL ---------- */
  const modalOverlay   = document.getElementById('artistModal');
  const modalPhoto     = document.getElementById('modalPhoto');
  const modalName      = document.getElementById('modalArtistName');
  const modalSpecialty = document.getElementById('modalArtistSpecialty');
  const modalBio       = document.getElementById('modalArtistBio');
  const modalDetails   = document.getElementById('modalArtistDetails');
  const modalBookBtn   = document.getElementById('modalBookBtn');

  /* Resolve photo path — pages are one level deep so adjust relative path */
  function resolvePhotoPath(photoPath) {
    const isSubPage = window.location.pathname.includes('/pages/');
    if (isSubPage) {
      return photoPath.replace('./', '../');
    }
    return photoPath;
  }

  function openArtistModal(id) {
    const a = ARTISTS[id];
    if (!a || !modalOverlay) return;

    if (modalPhoto)     { modalPhoto.src = resolvePhotoPath(a.photo); modalPhoto.alt = a.name; }
    if (modalName)      modalName.textContent    = a.name;
    if (modalSpecialty) modalSpecialty.textContent = a.specialty;
    if (modalBio)       modalBio.textContent     = a.bio;
    if (modalDetails)   {
      modalDetails.innerHTML = `
        <div class="modal-detail-row">
          <span class="modal-detail-label">Specialities</span>
          <span class="modal-detail-value">${a.skills.join(', ')}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-label">Availability</span>
          <span class="modal-detail-value">${a.availability}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-label">Rate</span>
          <span class="modal-detail-value">${a.rate}</span>
        </div>
      `;
    }

    if (modalBookBtn) {
      const msg = `Kia ora ${STUDIO.name} team,\n\nI would like to enquire about booking a session with ${a.name} (${a.specialty}).\n\nPlease let me know availability and next steps.\n\nNgā mihi`;
      modalBookBtn.href = buildWaUrl(msg);
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

  document.querySelectorAll('[data-artist]').forEach(el => {
    el.addEventListener('click',   () => openArtistModal(Number(el.dataset.artist)));
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openArtistModal(Number(el.dataset.artist)); });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => btn.addEventListener('click', closeArtistModal));
  modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeArtistModal(); });

  /* ---------- GALLERY FILTER ---------- */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const tattooCards = document.querySelectorAll('.tattoo-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      tattooCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* ---------- WHATSAPP — TATTOO DEPOSIT ---------- */
  document.querySelectorAll('[data-wa-deposit]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const key = btn.dataset.waDeposit;
      const t   = TATTOOS[key];
      if (!t) return;
      const msg =
        `Kia ora ${STUDIO.name} team,\n\n` +
        `I would like to pay a deposit to book the following tattoo:\n\n` +
        `Tattoo: ${t.name}\n` +
        `Style: ${t.style}\n` +
        `Placement: ${t.placement}\n` +
        `Estimated time: ${t.hours}\n` +
        `Estimated full price: NZD ${t.priceMin} to NZD ${t.priceMax}\n` +
        `Deposit amount: NZD ${t.deposit}\n\n` +
        `Please send me your payment details to secure my appointment.\n\nNgā mihi`;
      window.open(buildWaUrl(msg), '_blank');
    });
  });

  /* ---------- WHATSAPP — TATTOO FULL PAYMENT ---------- */
  document.querySelectorAll('[data-wa-full]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const key = btn.dataset.waFull;
      const t   = TATTOOS[key];
      if (!t) return;
      const msg =
        `Kia ora ${STUDIO.name} team,\n\n` +
        `I would like to pay in full for the following tattoo:\n\n` +
        `Tattoo: ${t.name}\n` +
        `Style: ${t.style}\n` +
        `Placement: ${t.placement}\n` +
        `Estimated time: ${t.hours}\n` +
        `Estimated full price: NZD ${t.priceMin} to NZD ${t.priceMax}\n\n` +
        `Please confirm the exact quote and send payment details.\n\nNgā mihi`;
      window.open(buildWaUrl(msg), '_blank');
    });
  });

  /* ---------- WHATSAPP — SESSION BOOKING ---------- */
  document.querySelectorAll('[data-wa-session]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const type      = btn.dataset.waSession;
      const amount    = btn.dataset.amount  || '';
      const isDeposit = btn.dataset.payType === 'deposit';
      const payText   = isDeposit
        ? `I would like to pay the NZD ${amount} deposit to secure my session.`
        : `I would like to enquire about paying in full. Estimated cost: ${amount}.`;
      const msg =
        `Kia ora ${STUDIO.name} team,\n\n` +
        `I would like to book a ${type}.\n${payText}\n\n` +
        `Please let me know available dates and next steps.\n\nNgā mihi`;
      window.open(buildWaUrl(msg), '_blank');
    });
  });

  /* ---------- WHATSAPP — GENERAL ---------- */
  document.querySelectorAll('[data-wa-general]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const context = btn.dataset.waGeneral || 'a tattoo session';
      const msg = `Kia ora ${STUDIO.name} team,\n\nI would like to enquire about booking ${context}.\n\nPlease let me know your availability.\n\nNgā mihi`;
      window.open(buildWaUrl(msg), '_blank');
    });
  });

  /* ---------- CONTACT FORM ---------- */
  const toast       = document.getElementById('toastNotification');

  function showToast(msg, duration = 4000) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('[type="submit"]');
      const original  = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled    = true;
      try {
        const res = await fetch(contactForm.action, {
          method:  'POST',
          body:    new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          showToast('Your message has been sent. We will be in touch shortly.');
          contactForm.reset();
        } else {
          showToast('There was an error sending your message. Please try again.');
        }
      } catch {
        showToast('Network error. Please check your connection and try again.');
      } finally {
        submitBtn.textContent = original;
        submitBtn.disabled    = false;
      }
    });
  }

  /* ---------- FOOTER YEAR ---------- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- ESC KEY ---------- */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeArtistModal();
      closeNav();
      closeChatbot();
    }
  });

  /* ---------- CHATBOT ---------- */
  const chatTrigger  = document.getElementById('chatbotTrigger');
  const chatWindow   = document.getElementById('chatbotWindow');
  const chatCloseBtn = document.getElementById('chatClose');
  const chatMsgs     = document.getElementById('chatMessages');
  const chatInputEl  = document.getElementById('chatInput');
  const chatSendBtn  = document.getElementById('chatSend');

  const BOT_RESPONSES = {
    greeting: `Kia ora! Welcome to ${STUDIO.name} in ${STUDIO.suburb}.\n\nI can help with pricing, bookings, our artists, or anything else about the studio. What would you like to know?`,
    pricing:  `Our pricing guide in New Zealand dollars:\n\nSmall tattoos (1–2 hrs): NZD 200–350\nMedium tattoos (3–4 hrs): NZD 450–700\nLarge tattoos (5–8 hrs): NZD 800–1,700\nFull sleeves or mega pieces: NZD 2,000–4,500+\n\nAll sessions require a non-refundable deposit of NZD 100–300, which comes off your final price.`,
    booking:  `To book a session at InkXas:\n\n1. Browse our Gallery and select a tattoo\n2. Tap "Pay Deposit" or "Pay in Full" on any tattoo card\n3. WhatsApp opens with all your details pre-filled\n4. We confirm your slot once the deposit is received\n\nOr visit our Booking page to choose a session type directly.`,
    deposit:  `Deposit policy:\n\nDeposits are non-refundable and range from NZD 100–300 depending on the piece. Your deposit comes off your final price.\n\nPlease give at least 48 hours notice to reschedule. Deposits are forfeited for no-shows or late cancellations. Up to two reschedules with adequate notice.`,
    artists:  `Our six resident artists:\n\nJames Tūhoe — Tā Moko and Polynesian\nAroha Ngāti — Portraiture and Realism\nKenji Murakami — Japanese Traditional\nLily Ashford — Fine Line and Minimalist\nDiego Reyes — Black and Grey and Script\nSophie Jamieson — Colour Realism and Floral\n\nVisit the homepage to view their full profiles.`,
    hours:    `Studio hours at ${STUDIO.suburb}:\n\nMonday to Saturday: 8:00 am to 8:00 pm\nSunday: 9:00 am to 2:00 pm\n\nAppointments are strongly preferred. Walk-ins welcome when availability allows.`,
    location: `InkXas is a private studio located in ${STUDIO.suburb}, New Zealand.\n\nWe also offer a door-to-door service across the Auckland region. Enquire via WhatsApp to arrange a travel quote.`,
    gallery:  `Our gallery showcases 24 pieces across multiple styles including Polynesian, realism, Japanese, fine line, colour, and black and grey.\n\nEvery tattoo card includes a description, cultural meaning, price estimate, and payment buttons. Visit the Gallery page to browse all works.`,
    maori:    `Tā moko and Kirituhi are offered by our artist James Tūhoe, who specialises in culturally grounded Māori and Polynesian tattoo design.\n\nAll cultural tattoo work begins with a consultation to understand your whakapapa and intent. Please reach out via WhatsApp to begin the conversation.`,
    default:  `Thanks for your question. For personalised assistance, please message our team directly via WhatsApp or through the Contact page — we are happy to help with any aspect of your tattoo journey.`,
  };

  function getBotReply(input) {
    const t = input.toLowerCase();
    if (/kia ora|hello|hi there|hey|good (morning|afternoon|evening)/.test(t)) return BOT_RESPONSES.greeting;
    if (/pric|cost|nzd|dollar|how much|rate|fee|cheap|expensive/.test(t))      return BOT_RESPONSES.pricing;
    if (/book|appoint|session|schedule|reserve|walk.?in/.test(t))              return BOT_RESPONSES.booking;
    if (/deposit|pay|full pay|upfront|payment|refund/.test(t))                 return BOT_RESPONSES.deposit;
    if (/artist|james|aroha|kenji|lily|diego|sophie|who|team|staff/.test(t))   return BOT_RESPONSES.artists;
    if (/hour|open|close|when|time|sunday|monday|saturday|availab/.test(t))    return BOT_RESPONSES.hours;
    if (/where|location|address|parnell|auckland|studio|door|travel/.test(t))  return BOT_RESPONSES.location;
    if (/gallery|example|work|photo|video|style|design|see|show/.test(t))      return BOT_RESPONSES.gallery;
    if (/m.ori|moko|polynesian|cultural|kirituhi/.test(t))                     return BOT_RESPONSES.maori;
    return BOT_RESPONSES.default;
  }

  function appendMsg(text, sender) {
    if (!chatMsgs) return;
    const div = document.createElement('div');
    div.className   = `chat-msg ${sender}`;
    div.textContent = text;
    chatMsgs.appendChild(div);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
  }

  function sendUserMsg(text) {
    if (!text.trim()) return;
    appendMsg(text, 'user');
    if (chatInputEl) chatInputEl.value = '';
    setTimeout(() => appendMsg(getBotReply(text), 'bot'), 560);
  }

  function closeChatbot() { chatWindow?.classList.remove('open'); }

  chatTrigger?.addEventListener('click', () => {
    chatWindow?.classList.toggle('open');
    if (chatWindow?.classList.contains('open') && chatMsgs?.children.length === 0) {
      setTimeout(() => appendMsg(BOT_RESPONSES.greeting, 'bot'), 300);
    }
  });
  chatCloseBtn?.addEventListener('click', closeChatbot);
  chatSendBtn?.addEventListener('click',  () => sendUserMsg(chatInputEl?.value || ''));
  chatInputEl?.addEventListener('keydown', e => { if (e.key === 'Enter') sendUserMsg(chatInputEl.value); });
  document.querySelectorAll('.quick-reply').forEach(btn => {
    btn.addEventListener('click', () => sendUserMsg(btn.textContent));
  });

});

/* ===================== VIDEO AUTOPLAY =====================
   Desktop : play on mouseenter, pause+reset on mouseleave
   Mobile  : play when card is >= 70% visible, pause otherwise
   No video autoplays on page load.
   All videos have muted + playsinline to satisfy browser policy.
   ========================================================= */
(function initVideoAutoplay() {

  /* Collect all video containers — works for both .tattoo-card and .pro-card */
  function getVideoCards() {
    const cards = [];
    document.querySelectorAll('.tattoo-card, .pro-card').forEach(card => {
      const video = card.querySelector('video');
      if (video) cards.push({ card, video });
    });
    return cards;
  }

  /* Ensure required attributes are set on every video */
  function prepareVideo(video) {
    video.muted       = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');
    video.preload     = 'metadata';
  }

  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  function initDesktop(items) {
    items.forEach(({ card, video }) => {
      prepareVideo(video);

      card.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
      });

      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }

  function initMobile(items) {
    /* Single shared observer — 70% threshold */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (!video) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }, {
      threshold:  0.7,
      rootMargin: '0px',
    });

    items.forEach(({ card, video }) => {
      prepareVideo(video);
      observer.observe(card);
    });
  }

  /* Wait for DOM then initialise */
  function init() {
    const items = getVideoCards();
    if (items.length === 0) return;

    if (isTouchDevice) {
      initMobile(items);
    } else {
      initDesktop(items);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();