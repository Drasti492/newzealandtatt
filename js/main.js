/* ================================================================
   InkXas Auckland — main.js
   WhatsApp number configured once here. Never hardcoded in HTML.
   ================================================================ */

/* ===================== STUDIO CONFIG ===================== */
const STUDIO = {
  whatsapp: '19155032586',   /* Change this number only — format: country code + number, no + or spaces */
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
    photo:        './gallery/johnny rebel.jpg',
  },
  2: {
    name:         'Aroha Ngāti',
    specialty:    'Portraiture & Realism',
    bio:          'Aroha specialises in hyper-realistic portraiture, capturing emotion and depth with extraordinary precision. Her nuanced approach to skin tone, shading, and fine detail produces pieces that are genuinely painterly. She has 11 years of experience and a fully booked schedule year-round.',
    skills:       ['Portrait', 'Black and grey realism', 'Colour realism'],
    availability: 'Tuesday to Saturday, 9:00 am to 6:00 pm',
    rate:         'From NZD 250 per hour',
    photo:        './gallery/mia valdez.jpg',
  },
  3: {
    name:         'Kenji Murakami',
    specialty:    'Japanese Traditional',
    bio:          'Kenji channels the ancient art of irezumi into bold, flowing compositions. Trained in Osaka before moving to Auckland, his large-scale Japanese works tell stories through koi, dragons, cherry blossoms, and waves. His back pieces are considered some of the finest in Aotearoa.',
    skills:       ['Irezumi', 'Japanese traditional', 'Large scale', 'Full sleeve'],
    availability: 'Wednesday to Sunday, 10:00 am to 7:00 pm',
    rate:         'From NZD 230 per hour',
    photo:        './gallery/jun leo.jpg',
  },
  4: {
    name:         'Lily Ashford',
    specialty:    'Fine Line & Minimalist',
    bio:          'Lily crafts delicate, precise fine-line tattoos with an architectural eye for composition. Her minimalist pieces carry quiet power — every line is intentional, every negative space considered. She works with both small statement pieces and expansive abstract compositions.',
    skills:       ['Fine line', 'Minimalist', 'Geometric', 'Botanical'],
    availability: 'Monday to Friday, 9:00 am to 5:00 pm',
    rate:         'From NZD 200 per hour',
    photo:        './gallery/leone carter.jpg',
  },
  5: {
    name:         'Diego Reyes',
    specialty:    'Black and Grey & Script',
    bio:          'Diego is renowned for his mastery of black and grey work, blending lettering, ornament, and portraiture into cohesive compositions with cinematic depth. His Chicano-influenced style carries a boldness that is uniquely his own.',
    skills:       ['Black and grey', 'Script', 'Chicano', 'Ornamental'],
    availability: 'Monday to Saturday, 10:00 am to 8:00 pm',
    rate:         'From NZD 210 per hour',
    photo:        './gallery/diogo.jpg',
  },
  6: {
    name:         'Sophie Jamieson',
    specialty:    'Colour Realism & Floral',
    bio:          'Sophie transforms skin into a canvas of vivid botanical colour. Her floral compositions are celebrated for their painterly luminosity and rich saturation. She has worked with clients across New Zealand, Australia, and Europe, and her waiting list is typically three to four months.',
    skills:       ['Colour realism', 'Floral', 'Illustrative', 'Watercolour'],
    availability: 'Wednesday to Sunday, 9:00 am to 6:00 pm',
    rate:         'From NZD 240 per hour',
    photo:        './gallery/sarah.jpg',
  },
};

/* ===================== TATTOO DATA =====================
   Each tattoo has: name, style, placement, hours, description,
   meaning, category, priceMin, priceMax, deposit
   Price ranges based on real Auckland NZD market rates 2025.
   ======================================================= */
const TATTOOS = {
  'angry-bird':      { name: 'Angry Birds Sleeve',          style: 'Colour cartoon realism', placement: 'Forearm',         hours: '5 hrs',   description: 'A vibrant forearm sleeve featuring characters from the Angry Birds franchise rendered in hyper-realistic colour. Bold outlines give way to seamlessly blended saturated pigment.',                  meaning: 'Playful rebellion and the satisfaction of overcoming obstacles — a lighthearted reminder not to take life too seriously.',          category: 'colour',     priceMin: 850,  priceMax: 1100, deposit: 150 },
  'back-flower':     { name: 'Large Back Floral',            style: 'Colour realism',         placement: 'Full upper back', hours: '8 hrs',   description: 'An expansive upper back piece featuring oversized peonies and botanicals in full colour realism. Rich pinks, burgundies, and greens bloom across the canvas of the skin.',            meaning: 'Femininity, prosperity, and the fleeting beauty of nature — the peony is considered a flower of good fortune in many cultures.',   category: 'colour',     priceMin: 1350, priceMax: 1700, deposit: 200 },
  'butterfly-arm':   { name: 'Realistic Butterfly',          style: 'Colour realism',         placement: 'Inner forearm',   hours: '4 hrs',   description: 'A photorealistic butterfly rendered with extraordinary attention to wing texture, iridescence, and depth. The piece sits naturally on the inner forearm with a delicate sense of movement.',    meaning: 'Transformation, freedom, and the beauty of change. A deeply personal symbol of growth and becoming.',                              category: 'colour',     priceMin: 650,  priceMax: 850,  deposit: 150 },
  'crying-lady':     { name: 'Crying Woman Portrait',        style: 'Black and grey realism', placement: 'Upper arm',       hours: '6 hrs',   description: 'A striking black and grey portrait of a weeping woman rendered with cinematic shading. The emotional intensity of the subject is captured through precise tonal work and fine detail.',         meaning: 'Grief, resilience, and the strength it takes to feel deeply. A tribute to emotional honesty and human vulnerability.',              category: 'blackgrey',  priceMin: 1000, priceMax: 1300, deposit: 200 },
  'greek-god':       { name: 'Greek God — Zeus',             style: 'Black and grey',         placement: 'Outer arm',       hours: '7 hrs',   description: 'A neo-traditional interpretation of Zeus rendered in bold black and grey, with dramatic cloud formations and classical motifs surrounding the figure. The composition fills the outer arm with authority.',  meaning: 'Power, leadership, and the capacity to bring order from chaos. Often chosen to represent strength of character.',                   category: 'blackgrey',  priceMin: 1150, priceMax: 1500, deposit: 200 },
  'rose-typography': { name: 'Rose and Typography Sleeve',   style: 'Fine line',              placement: 'Full forearm',    hours: '5 hrs',   description: 'An elegant combination of fine-line roses and ornamental lettering flowing across the forearm. Script and botanicals intertwine in a balanced, intentional composition.',                          meaning: 'The balance between beauty and expression — words carry weight, and the rose reminds us that meaning often lies in the detail.',     category: 'fineline',   priceMin: 850,  priceMax: 1100, deposit: 150 },
  'zombie-sleeve':   { name: 'Zombie Apocalypse Sleeve',     style: 'Colour horror realism',  placement: 'Half sleeve',     hours: '7 hrs',   description: 'A dramatic half sleeve depicting a post-apocalyptic scene in vivid colour, featuring decaying figures, torn fabric, and atmospheric smoke. A bold conversation piece with exceptional detail.',    meaning: 'Fascination with mortality and the macabre — a celebration of horror culture and the art of storytelling through tattooing.',       category: 'colour',     priceMin: 1150, priceMax: 1500, deposit: 200 },
  'giant-peony':     { name: 'Giant Peony Statement',        style: 'Colour realism',         placement: 'Shoulder cap',    hours: '6 hrs',   description: 'An oversized peony in full bloom rendered in layered colour realism, draping across the shoulder cap. The petal detail, light source, and colour gradients are exceptional.',                    meaning: 'Honour, romance, and prosperity. The peony is revered across East Asian cultures as a symbol of beauty and good fortune.',          category: 'colour',     priceMin: 1000, priceMax: 1300, deposit: 200 },
  'leopard-hand':    { name: 'Leopard Hand Tattoo',          style: 'Realistic animal',       placement: 'Full hand',       hours: '6 hrs',   description: 'A full hand piece featuring a leopard face in rich colour realism, with spotted patterns extending across the fingers. Hand tattoos are a commitment — this one earns the attention it receives.',    meaning: 'Stealth, independence, and power. The leopard is a symbol of solitude and focused strength.',                                      category: 'colour',     priceMin: 1000, priceMax: 1350, deposit: 200 },
  'geometric-lines': { name: 'Minimal Geometric Lines',      style: 'Fine line abstract',     placement: 'Forearm',         hours: '3 hrs',   description: 'Clean, precise geometric linework flowing across the forearm. The composition uses negative space and mathematical precision to create a visually striking minimalist statement.',                meaning: 'Order, symmetry, and the belief that beauty exists in structure. Often chosen by those who find meaning in clarity and form.',       category: 'fineline',   priceMin: 480,  priceMax: 650,  deposit: 100 },
  'lion-arm':        { name: 'Lion Portrait',                style: 'Black and grey realism', placement: 'Upper arm',       hours: '7 hrs',   description: 'A majestic black and grey lion rendered with extraordinary mane texture, depth of gaze, and tonal range. The piece commands the upper arm with authority and precision.',                         meaning: 'Courage, family, and the dignity of leadership. The lion is one of the most universal symbols of strength across cultures.',         category: 'blackgrey',  priceMin: 1150, priceMax: 1500, deposit: 200 },
  'blue-butterfly':  { name: 'Blue Morpho Butterfly',        style: 'Vibrant colour realism', placement: 'Inner arm',       hours: '3 hrs',   description: 'A stunning Blue Morpho butterfly rendered in luminous colour, capturing the iridescent quality of the wings with layered blue and violet pigments.',                                          meaning: 'Rare beauty and the joy found in fleeting moments. The Morpho butterfly symbolises transformation achieved through patience.',        category: 'colour',     priceMin: 480,  priceMax: 650,  deposit: 100 },
  'owl-leg':         { name: 'Wise Owl Calf Piece',          style: 'Black and grey realism', placement: 'Lower leg',       hours: '6 hrs',   description: 'A finely rendered black and grey owl perched with wings slightly spread, occupying the full calf with rich feather detail and a penetrating gaze. Exceptional depth of shading.',              meaning: 'Wisdom, intuition, and the ability to see what others cannot. Owls are revered across Māori and European traditions alike.',         category: 'blackgrey',  priceMin: 1000, priceMax: 1300, deposit: 200 },
  'red-lips':        { name: 'Red Lips Sketch',              style: 'Colour pop art',         placement: 'Shoulder',        hours: '4 hrs',   description: 'Bold, graphic red lips rendered in a painterly sketch style with expressive linework and vivid colour. The piece has a confident, editorial quality with strong visual impact.',                    meaning: 'Confidence, sensuality, and self-expression. A bold statement about owning your presence without apology.',                         category: 'colour',     priceMin: 650,  priceMax: 850,  deposit: 150 },
  'framed-floral':   { name: 'Framed Floral Square',         style: 'Neo-traditional',        placement: 'Forearm panel',   hours: '5 hrs',   description: 'A neo-traditional floral composition framed within a clean geometric border on the forearm. Bold outlines and rich colour fills give the piece a timeless graphic quality.',                    meaning: 'Growth within boundaries — the idea that beauty flourishes when given structure. A popular choice for those who value balance.',     category: 'colour',     priceMin: 850,  priceMax: 1100, deposit: 150 },
  'wolf-thigh':      { name: 'Howling Wolf Thigh',           style: 'Black and grey realism', placement: 'Upper thigh',     hours: '8 hrs',   description: 'A powerful black and grey wolf howling at a full moon, rendered across the upper thigh with deep contrast and meticulous fur texture. One of our most requested large-scale pieces.',          meaning: 'Loyalty, instinct, and freedom. The wolf represents the primal desire to run with your pack whilst remaining true to yourself.',     category: 'blackgrey',  priceMin: 1350, priceMax: 1700, deposit: 200 },
  'spine-floral':    { name: 'Spine Floral Cascade',         style: 'Colour realism',         placement: 'Spine to lower back', hours: '8 hrs', description: 'A cascading arrangement of flowers flowing down the spine to the lower back, rendered in full colour realism. The vertical composition works beautifully with the natural lines of the body.',  meaning: 'Strength and beauty united along the backbone of the body — a deeply personal piece about one\'s own core and resilience.',          category: 'colour',     priceMin: 1350, priceMax: 1700, deposit: 200 },
  'lion-hd':         { name: 'Hyper-Realistic Lion HD',      style: 'Full colour realism',    placement: 'Full sleeve',     hours: '12 hrs',  description: 'An extraordinary full sleeve featuring a hyper-realistic lion in full colour — one of our most technically demanding pieces. Multiple sessions, layered pigments, and exceptional artist skill combine for a result that stops people in the street.',  meaning: 'Ultimate strength and presence. A commitment to carrying power and nobility permanently.',                                           category: 'colour',     priceMin: 2000, priceMax: 2800, deposit: 300 },
  'smoking-cat':     { name: 'Smoking Cat Ankle',            style: 'Neo-traditional',        placement: 'Ankle wrap',      hours: '3 hrs',   description: 'A cheeky neo-traditional cat with a cigarette, rendered with bold outlines and flat colour fills in a classic tattoo flash style. The ankle wrap placement adds a playful, spontaneous energy.',  meaning: 'Irreverence, independence, and the refusal to take everything too seriously. A tongue-in-cheek nod to living by your own rules.',    category: 'colour',     priceMin: 480,  priceMax: 650,  deposit: 100 },
  'monster-hand':    { name: 'Monster Claw Hand',            style: 'Colour horror',          placement: 'Hand and fingers', hours: '6 hrs', description: 'A horror-inspired monster claw extending across the hand and fingers, with skin-tearing detail and vivid colour. An unapologetically bold statement piece that occupies visible, committed placement.',    meaning: 'Embracing the darker side of imagination — a celebration of horror art and the courage to commit to extreme body art.',              category: 'colour',     priceMin: 1000, priceMax: 1350, deposit: 200 },
  'butterfly-disc':  { name: 'Butterfly Discovery Sleeve',   style: 'Colour realism',         placement: 'Half sleeve',     hours: '5 hrs',   description: 'A colour realism half sleeve following the metamorphosis from chrysalis to fully emerged butterfly, morphing across the skin in layered pigments and exceptional colour depth.',                 meaning: 'Personal transformation and the courage to go through necessary change. A powerful symbol for anyone who has reinvented themselves.', category: 'colour',     priceMin: 850,  priceMax: 1100, deposit: 150 },
  'rib-rose':        { name: 'Red Rose Rib Piece',           style: 'Colour realism',         placement: 'Side ribs',       hours: '5 hrs',   description: 'A rich red rose in full bloom rendered along the ribs in colour realism. The ribcage placement is challenging and rewarding — the piece flows naturally with the curves of the body.',            meaning: 'Love, passion, and the acceptance of both the beauty and the thorns that life brings.',                                             category: 'colour',     priceMin: 850,  priceMax: 1100, deposit: 150 },
  'ankle-flower':    { name: 'Delicate Ankle Flower',        style: 'Fine line floral',       placement: 'Ankle',           hours: '3 hrs',   description: 'A refined fine-line floral wrapping delicately around the ankle. The linework is precise and feather-light, achieving an elegance that is characteristic of Lily Ashford\'s botanical work.',      meaning: 'Grace, new beginnings, and the understanding that the smallest things can carry the most meaning.',                                 category: 'fineline',   priceMin: 480,  priceMax: 650,  deposit: 100 },
  'patchwork-sleeve':{ name: 'Collage Patchwork Sleeve',     style: 'Mixed styles',           placement: 'Full arm',        hours: '12 hrs',  description: 'A full arm sleeve built from individually framed vignettes in mixed styles — realism, neo-traditional, fine line, and blackwork — unified by a cohesive layout and tonal palette.',           meaning: 'The richness of a life lived fully, with many chapters. A patchwork sleeve tells the story of who you are through collected imagery.', category: 'colour',    priceMin: 2000, priceMax: 2800, deposit: 300 },
};

/* ===================== DOM READY ===================== */
document.addEventListener('DOMContentLoaded', () => {

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
    navList.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    navList.classList.remove('open');
    document.body.style.overflow = '';
  }

  navToggle?.addEventListener('click', openNav);
  navClose?.addEventListener('click', closeNav);
  document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeNav));

  /* ---------- ACTIVE NAV LINK ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.includes(currentPage) || (currentPage === 'index.html' && href.endsWith('../index.html'))) {
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

  function openArtistModal(id) {
    const a = ARTISTS[id];
    if (!a || !modalOverlay) return;

    modalPhoto.src          = a.photo;
    modalPhoto.alt          = a.name;
    modalName.textContent   = a.name;
    modalSpecialty.textContent = a.specialty;
    modalBio.textContent    = a.bio;
    modalDetails.innerHTML  = `
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

    const msg = `Kia ora ${STUDIO.name} team,\n\nI would like to enquire about booking a session with ${a.name} (${a.specialty}).\n\nPlease let me know availability and next steps.\n\nNgā mihi`;
    modalBookBtn.href = buildWaUrl(msg);

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArtistModal() {
    modalOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-artist]').forEach(el => {
    el.addEventListener('click', () => openArtistModal(el.dataset.artist));
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openArtistModal(el.dataset.artist); });
  });
  document.querySelectorAll('.modal-close-btn').forEach(btn => btn.addEventListener('click', closeArtistModal));
  modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeArtistModal(); });

  /* ---------- GALLERY FILTER ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tattooCards = document.querySelectorAll('.tattoo-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      tattooCards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });

  /* ---------- WHATSAPP — TATTOO DEPOSIT BUTTON ---------- */
  document.querySelectorAll('[data-wa-deposit]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const key  = btn.dataset.waDeposit;
      const t    = TATTOOS[key];
      if (!t) return;
      const msg = `Kia ora ${STUDIO.name} team,\n\nI would like to pay a deposit to book the following tattoo:\n\n` +
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

  /* ---------- WHATSAPP — TATTOO FULL PAYMENT BUTTON ---------- */
  document.querySelectorAll('[data-wa-full]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const key = btn.dataset.waFull;
      const t   = TATTOOS[key];
      if (!t) return;
      const msg = `Kia ora ${STUDIO.name} team,\n\nI would like to pay in full for the following tattoo:\n\n` +
                  `Tattoo: ${t.name}\n` +
                  `Style: ${t.style}\n` +
                  `Placement: ${t.placement}\n` +
                  `Estimated time: ${t.hours}\n` +
                  `Estimated full price: NZD ${t.priceMin} to NZD ${t.priceMax}\n\n` +
                  `Please confirm the exact quote and send payment details.\n\nNgā mihi`;
      window.open(buildWaUrl(msg), '_blank');
    });
  });

  /* ---------- WHATSAPP — SESSION BOOKING (booking page) ---------- */
  document.querySelectorAll('[data-wa-session]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const type    = btn.dataset.waSession;
      const amount  = btn.dataset.amount || '';
      const isDeposit = btn.dataset.payType === 'deposit';
      const payText = isDeposit
        ? `I would like to pay the NZD ${amount} deposit to secure my session.`
        : `I would like to enquire about paying in full. Estimated cost: ${amount}.`;

      const msg = `Kia ora ${STUDIO.name} team,\n\nI would like to book a ${type}.\n${payText}\n\nPlease let me know available dates and next steps.\n\nNgā mihi`;
      window.open(buildWaUrl(msg), '_blank');
    });
  });

  /* ---------- WHATSAPP — GENERAL BOOK NOW ---------- */
  document.querySelectorAll('[data-wa-general]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const context = btn.dataset.waGeneral || 'a tattoo session';
      const msg = `Kia ora ${STUDIO.name} team,\n\nI would like to enquire about booking ${context}.\n\nPlease let me know your availability.\n\nNgā mihi`;
      window.open(buildWaUrl(msg), '_blank');
    });
  });

  /* ---------- CONTACT FORM ---------- */
  const toast = document.getElementById('toastNotification');
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
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;
      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
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
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- FOOTER YEAR ---------- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- ESC KEY ---------- */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeArtistModal(); closeNav(); closeChatbot(); }
  });

  /* ---------- CHATBOT ---------- */
  const chatTrigger   = document.getElementById('chatbotTrigger');
  const chatWindow    = document.getElementById('chatbotWindow');
  const chatCloseBtn  = document.getElementById('chatClose');
  const chatMsgs      = document.getElementById('chatMessages');
  const chatInputEl   = document.getElementById('chatInput');
  const chatSendBtn   = document.getElementById('chatSend');

  const BOT_RESPONSES = {
    greeting:  `Kia ora! Welcome to ${STUDIO.name} in ${STUDIO.suburb}.\n\nI can help you with pricing, bookings, our artists, or anything else about the studio. What would you like to know?`,
    pricing:   `Here is a guide to our pricing in New Zealand dollars:\n\nSmall tattoos (1 to 2 hrs): NZD 200 to 350\nMedium tattoos (3 to 4 hrs): NZD 450 to 700\nLarge tattoos (5 to 8 hrs): NZD 800 to 1,700\nFull sleeves or mega pieces: NZD 2,000 to 4,500\n\nAll sessions require a non-refundable deposit ranging from NZD 100 to 300, which comes off your final price.`,
    booking:   `To book a session at InkXas:\n\n1. Browse our Gallery and select a tattoo\n2. Tap "Pay Deposit" or "Pay in Full" on any tattoo card\n3. This opens WhatsApp with all your tattoo details pre-filled\n4. We confirm your appointment once the deposit is received\n\nAlternatively, visit our Bookings page to choose a session type, or send us a message directly via WhatsApp.`,
    deposit:   `Our deposit policy follows standard Auckland studio practice:\n\nDeposits are non-refundable and range from NZD 100 to 300 depending on the piece.\n\nYour deposit comes off your final price. Please give at least 48 hours notice to reschedule. Deposits are forfeited for no-shows or late cancellations.\n\nPay full upfront and we lock in your session immediately.`,
    artists:   `We have six resident artists at InkXas:\n\nJames Tūhoe — Tā Moko and Polynesian\nAroha Ngāti — Portraiture and Realism\nKenji Murakami — Japanese Traditional\nLily Ashford — Fine Line and Minimalist\nDiego Reyes — Black and Grey and Script\nSophie Jamieson — Colour Realism and Floral\n\nVisit our homepage to view their profiles and specialities.`,
    hours:     `Our studio hours at ${STUDIO.suburb}:\n\nMonday to Saturday: 8:00 am to 8:00 pm\nSunday: 9:00 am to 2:00 pm\n\nAppointments are strongly preferred. Walk-ins are welcome when availability allows — it is always worth calling ahead.`,
    location:  `InkXas is a private studio located in ${STUDIO.suburb}, New Zealand.\n\nWe also offer a door-to-door service across the Auckland region and surrounding areas. Please enquire via WhatsApp to arrange a travel quote.`,
    gallery:   `Our gallery showcases 24 pieces across multiple styles including Polynesian, realism, Japanese, fine line, colour, and black and grey.\n\nEvery tattoo card includes a description, cultural meaning, price estimate, and payment options. Visit the Gallery page to browse all works.`,
    maori:     `Tā moko and Kirituhi are offered by our artist James Tūhoe, who specialises in culturally grounded Māori and Polynesian tattoo design.\n\nAll cultural tattoo work begins with a consultation to understand your whakapapa and intent. This is a respectful, considered process. Please reach out via WhatsApp to begin the conversation.`,
    default:   `Thank you for your question. For the most personalised assistance, please reach out to our team directly via WhatsApp or through our Contact page — we are happy to discuss any aspect of your tattoo journey.`,
  };

  function getBotReply(input) {
    const t = input.toLowerCase();
    if (/kia ora|hello|hi there|hey|good (morning|afternoon|evening)/.test(t)) return BOT_RESPONSES.greeting;
    if (/pric|cost|nzd|dollar|how much|rate|fee|cheap|expensive/.test(t))       return BOT_RESPONSES.pricing;
    if (/book|appoint|session|schedule|reserve|walk-?in/.test(t))               return BOT_RESPONSES.booking;
    if (/deposit|pay|full pay|upfront|payment|refund/.test(t))                  return BOT_RESPONSES.deposit;
    if (/artist|james|aroha|kenji|lily|diego|sophie|who|team|staff/.test(t))    return BOT_RESPONSES.artists;
    if (/hour|open|close|when|time|sunday|monday|saturday|availab/.test(t))     return BOT_RESPONSES.hours;
    if (/where|location|address|parnell|auckland|studio|door|travel/.test(t))   return BOT_RESPONSES.location;
    if (/gallery|example|work|photo|video|style|design|see|show/.test(t))       return BOT_RESPONSES.gallery;
    if (/māori|maori|moko|polynesian|cultural|tā|ta moko|kirituhi/.test(t))     return BOT_RESPONSES.maori;
    return BOT_RESPONSES.default;
  }

  function appendMsg(text, sender) {
    if (!chatMsgs) return;
    const div = document.createElement('div');
    div.className = `chat-msg ${sender}`;
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
  chatSendBtn?.addEventListener('click', () => sendUserMsg(chatInputEl?.value || ''));
  chatInputEl?.addEventListener('keydown', e => { if (e.key === 'Enter') sendUserMsg(chatInputEl.value); });

  document.querySelectorAll('.quick-reply').forEach(btn => {
    btn.addEventListener('click', () => sendUserMsg(btn.textContent));
  });

});

/* ===================== VIDEO AUTOPLAY ===================== */
/* ===================== VIDEO AUTOPLAY ===================== */
(function initVideoAutoplay() {
  const canHover = window.matchMedia('(hover: hover)').matches;

  document.querySelectorAll('.tattoo-card, .pro-card').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    if (canHover) {
      card.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
      });

      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });

    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {});
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      }, { threshold: 0.6 });

      observer.observe(card);
    }
  });
})();