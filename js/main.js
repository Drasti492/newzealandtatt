/* ================================================================
   InkXas Auckland — main.js
   Universal Booking Modal + all site functionality
   ================================================================ */

const STUDIO = {
  whatsapp: '64212345678',   // ← replace with real WhatsApp number
  name:     'InkXas Auckland',
  suburb:   'Parnell, Auckland',
};

function buildWaUrl(msg) {
  return 'https://wa.me/' + STUDIO.whatsapp + '?text=' + encodeURIComponent(msg);
}

/* ── Session types (single source of truth) ───────────────────── */
const SESSIONS = {
  'Studio Session': {
    price:   'NZD 200+',
    deposit: 100,
    blurb:   'Private Parnell studio — one-on-one, fully equipped',
  },
  'Door-to-Door': {
    price:   'NZD 450+',
    deposit: 150,
    blurb:   'Artist travels to your home or venue across Auckland',
  },
  'Custom Mega Project': {
    price:   'NZD 650+ per session',
    deposit: 300,
    blurb:   'Full sleeves, back pieces, multi-session projects',
  },
};

/* ── Artist data ───────────────────────────────────────────────── */
const ARTISTS = {
  1: {
    name:         'James "Hori" Tūhoe',
    specialty:    'Tā Moko & Polynesian',
    bio:          "James is a master of traditional Māori tā moko and contemporary Polynesian tattooing. His deep understanding of whakapapa and cultural narrative ensures every piece carries authentic meaning. With over 14 years of experience, he is one of Auckland's most respected cultural tattoo artists.",
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

function resolvePhoto(path) {
  if (window.location.pathname.indexOf('/pages/') !== -1) {
    return path.replace('./', '../');
  }
  return path;
}

/* ── Tattoo data ───────────────────────────────────────────────── */
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
   UNIVERSAL BOOKING MODAL
   Injected into DOM by JS — works on every page with no HTML changes
   ================================================================ */

var BK_CTX = {};          // context object set by each trigger
var BK_PAY = 'deposit';   // 'deposit' | 'full' | 'enquiry'

/* ── Inject styles + HTML ──────────────────────────────────────── */
function injectBookingModal() {
  if (document.getElementById('bookingModal')) return;

  /* CSS */
  var s = document.createElement('style');
  s.textContent = `
    .bk-overlay {
      position:fixed; inset:0;
      background:rgba(4,4,4,0.92);
      backdrop-filter:blur(10px);
      -webkit-backdrop-filter:blur(10px);
      z-index:1050;
      display:none; align-items:center; justify-content:center;
      padding:20px;
    }
    .bk-overlay.open { display:flex; }
    .bk-box {
      background:#0d0d0d;
      border:1px solid rgba(184,151,90,0.25);
      border-radius:14px;
      width:100%; max-width:580px;
      max-height:92vh; overflow-y:auto;
      position:relative;
      padding:44px 40px 36px;
    }
    .bk-close {
      position:absolute; top:16px; right:16px;
      width:34px; height:34px;
      background:rgba(8,8,8,0.8); border:1px solid rgba(184,151,90,0.18);
      border-radius:50%; color:#e8e2d9; font-size:15px;
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; transition:all 280ms; z-index:2;
    }
    .bk-close:hover { border-color:#b8975a; color:#b8975a; }
    .bk-eyebrow {
      font-size:10px; font-weight:700; letter-spacing:0.22em;
      text-transform:uppercase; color:#b8975a;
      display:flex; align-items:center; gap:8px; margin-bottom:6px;
    }
    .bk-eyebrow::before { content:''; width:20px; height:1px; background:#b8975a; }
    .bk-title {
      font-family:'Cormorant Garamond',Georgia,serif;
      font-size:30px; font-weight:700; color:#f5f0e8; margin-bottom:8px;
    }
    .bk-badge {
      display:inline-block; font-size:11px; color:#b8975a;
      background:rgba(184,151,90,0.10); border:1px solid rgba(184,151,90,0.20);
      border-radius:20px; padding:4px 14px; margin-bottom:28px;
    }
    .bk-badge:empty { display:none; margin-bottom:10px; }
    .bk-form { display:flex; flex-direction:column; gap:22px; }
    .bk-lbl {
      display:block; font-size:10px; font-weight:700;
      letter-spacing:0.16em; text-transform:uppercase;
      color:#a09b94; margin-bottom:9px;
    }
    .bk-input, .bk-textarea {
      width:100%; padding:11px 14px;
      background:#111; border:1px solid rgba(184,151,90,0.18);
      border-radius:3px; color:#e8e2d9;
      font-family:'DM Sans',system-ui,sans-serif;
      font-size:14px; outline:none; transition:border-color 280ms;
    }
    .bk-input:focus, .bk-textarea:focus { border-color:#b8975a; }
    .bk-input::placeholder, .bk-textarea::placeholder { color:#7a7672; }
    .bk-textarea { resize:vertical; min-height:90px; }
    .bk-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

    /* Session cards */
    .bk-sessions { display:flex; flex-direction:column; gap:8px; }
    .bk-sess {
      display:flex; align-items:center; gap:14px;
      padding:14px 16px;
      background:#111; border:1px solid rgba(184,151,90,0.18);
      border-radius:6px; cursor:pointer;
      transition:border-color 280ms, background 280ms;
      user-select:none;
    }
    .bk-sess:hover { border-color:rgba(184,151,90,0.4); }
    .bk-sess.active { border-color:#b8975a; background:rgba(184,151,90,0.07); }
    .bk-sess input { display:none; }
    .bk-dot {
      width:16px; height:16px; flex-shrink:0;
      border:2px solid rgba(184,151,90,0.35); border-radius:50%;
      display:flex; align-items:center; justify-content:center;
      transition:border-color 280ms;
    }
    .bk-sess.active .bk-dot { border-color:#b8975a; }
    .bk-dot::after {
      content:''; width:8px; height:8px;
      background:#b8975a; border-radius:50%;
      opacity:0; transition:opacity 280ms;
    }
    .bk-sess.active .bk-dot::after { opacity:1; }
    .bk-sess-info { flex:1; }
    .bk-sess-info strong { display:block; font-size:14px; color:#f5f0e8; margin-bottom:2px; }
    .bk-sess-info span  { font-size:12px; color:#7a7672; }
    .bk-sess-dep {
      flex-shrink:0; text-align:right;
      font-family:'Cormorant Garamond',Georgia,serif;
      font-size:17px; font-weight:700; color:#b8975a; line-height:1.1;
    }
    .bk-sess-dep small {
      display:block; font-family:'DM Sans',system-ui,sans-serif;
      font-size:10px; color:#7a7672; font-weight:400;
    }

    /* Payment tabs */
    .bk-pay-tabs { display:grid; grid-template-columns:repeat(3,1fr); gap:6px; }
    .bk-ptab {
      padding:10px 6px; text-align:center;
      font-family:'DM Sans',system-ui,sans-serif;
      font-size:11px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase;
      color:#7a7672; border:1px solid rgba(184,151,90,0.18);
      background:transparent; border-radius:3px;
      cursor:pointer; transition:all 280ms;
    }
    .bk-ptab:hover { color:#b8975a; border-color:rgba(184,151,90,0.45); }
    .bk-ptab.active { background:rgba(184,151,90,0.12); color:#b8975a; border-color:#b8975a; }
    .bk-pay-note {
      margin-top:10px; font-size:12px; color:#7a7672; line-height:1.6; min-height:20px;
    }
    .bk-pay-note strong { color:#e8e2d9; }

    /* Submit */
    .bk-submit {
      display:flex; align-items:center; justify-content:center; gap:10px;
      width:100%; padding:16px;
      background:#b8975a; color:#0a0a0a;
      font-family:'DM Sans',system-ui,sans-serif;
      font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase;
      border:none; border-radius:3px; cursor:pointer;
      transition:background 280ms, transform 280ms;
      margin-top:4px;
    }
    .bk-submit:hover { background:#d4b578; transform:translateY(-1px); }
    .bk-submit i { font-size:17px; }
    .bk-note {
      font-size:11px; color:#7a7672; text-align:center;
      line-height:1.65; margin-top:2px;
    }
    .bk-error {
      display:none; font-size:12px; color:#e07070;
      background:rgba(220,80,80,0.08); border:1px solid rgba(220,80,80,0.2);
      border-radius:3px; padding:10px 14px;
    }
    .bk-error.show { display:block; }

    @media (max-width:540px) {
      .bk-box  { padding:36px 20px 28px; }
      .bk-row  { grid-template-columns:1fr; }
      .bk-pay-tabs { grid-template-columns:1fr; }
      .bk-title { font-size:24px; }
    }
  `;
  document.head.appendChild(s);

  /* HTML */
  var el = document.createElement('div');
  el.id = 'bookingModal';
  el.className = 'bk-overlay';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Book a tattoo session');
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <div class="bk-box" role="document">
      <button class="bk-close" id="bkClose" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <p class="bk-eyebrow">InkXas Auckland</p>
      <h2 class="bk-title">Book a Session</h2>
      <span class="bk-badge" id="bkBadge"></span>

      <form class="bk-form" id="bkForm" novalidate>

        <div>
          <label class="bk-lbl" for="bkIdea">Your Tattoo Idea</label>
          <textarea class="bk-textarea" id="bkIdea"
            placeholder="Describe your idea — style, size, placement, and any reference images or inspiration you have in mind..."></textarea>
        </div>

        <div>
          <label class="bk-lbl">Session Type <span style="color:#e07070">*</span></label>
          <div class="bk-sessions" id="bkSessions">

            <label class="bk-sess" data-session="Studio Session">
              <input type="radio" name="bkSession" value="Studio Session">
              <div class="bk-dot"></div>
              <div class="bk-sess-info">
                <strong>Studio Session</strong>
                <span>Private Parnell studio &bull; NZD 200+</span>
              </div>
              <div class="bk-sess-dep">NZD 100<small>deposit</small></div>
            </label>

            <label class="bk-sess" data-session="Door-to-Door">
              <input type="radio" name="bkSession" value="Door-to-Door">
              <div class="bk-dot"></div>
              <div class="bk-sess-info">
                <strong>Door-to-Door</strong>
                <span>Artist comes to you &bull; NZD 450+</span>
              </div>
              <div class="bk-sess-dep">NZD 150<small>deposit</small></div>
            </label>

            <label class="bk-sess" data-session="Custom Mega Project">
              <input type="radio" name="bkSession" value="Custom Mega Project">
              <div class="bk-dot"></div>
              <div class="bk-sess-info">
                <strong>Custom Mega Project</strong>
                <span>Full sleeves &amp; back pieces &bull; NZD 650+/session</span>
              </div>
              <div class="bk-sess-dep">NZD 300<small>deposit</small></div>
            </label>

          </div>
          <div class="bk-error" id="bkSessionError">Please select a session type before continuing.</div>
        </div>

        <div>
          <label class="bk-lbl">Payment Preference</label>
          <div class="bk-pay-tabs" id="bkPayTabs">
            <button type="button" class="bk-ptab active" data-pay="deposit">Pay Deposit</button>
            <button type="button" class="bk-ptab"        data-pay="full">Pay in Full</button>
            <button type="button" class="bk-ptab"        data-pay="enquiry">Just Enquiring</button>
          </div>
          <p class="bk-pay-note" id="bkPayNote">Select a session type to see the deposit amount.</p>
        </div>

        <div class="bk-row">
          <div>
            <label class="bk-lbl" for="bkName">Your Name</label>
            <input class="bk-input" type="text" id="bkName"
              placeholder="Name" autocomplete="given-name">
          </div>
          <div>
            <label class="bk-lbl" for="bkDate">Preferred Date / Time</label>
            <input class="bk-input" type="text" id="bkDate"
              placeholder="e.g. Any weekday afternoon">
          </div>
        </div>

        <div>
          <button type="submit" class="bk-submit">
            <i class="fa-brands fa-whatsapp"></i>
            Send Booking via WhatsApp
          </button>
          <p class="bk-note">
            WhatsApp opens with your details pre-filled — we respond within the hour.
            A non-refundable deposit secures your slot and comes off your final price.
          </p>
        </div>

      </form>
    </div>
  `;
  document.body.appendChild(el);
}

/* ── Open booking modal ───────────────────────────────────────── */
function openBookingModal(ctx) {
  BK_CTX = ctx || {};
  BK_PAY = ctx.payment || 'deposit';

  var modal = document.getElementById('bookingModal');
  if (!modal) return;

  /* Badge */
  var badge = document.getElementById('bkBadge');
  if (badge) badge.textContent = BK_CTX.label || '';

  /* Pre-fill idea field */
  var ideaEl = document.getElementById('bkIdea');
  if (ideaEl) ideaEl.value = BK_CTX.idea || '';

  /* Session type */
  document.querySelectorAll('.bk-sess').forEach(function(label) {
    var isMatch = BK_CTX.sessionType && label.dataset.session === BK_CTX.sessionType;
    label.classList.toggle('active', isMatch);
    var radio = label.querySelector('input');
    if (radio) radio.checked = isMatch;
  });

  /* Payment tab */
  bkSetPayTab(BK_PAY);

  /* Reset error */
  var err = document.getElementById('bkSessionError');
  if (err) err.classList.remove('show');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  /* Focus first meaningful input */
  setTimeout(function() {
    var ideaField = document.getElementById('bkIdea');
    if (ideaField) ideaField.focus();
  }, 100);
}

/* ── Close booking modal ──────────────────────────────────────── */
function closeBookingModal() {
  var modal = document.getElementById('bookingModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

/* ── Payment tab state ────────────────────────────────────────── */
function bkSetPayTab(type) {
  BK_PAY = type;
  document.querySelectorAll('.bk-ptab').forEach(function(t) {
    t.classList.toggle('active', t.dataset.pay === type);
  });
  bkUpdatePayNote();
}

/* ── Update payment note based on selection ───────────────────── */
function bkUpdatePayNote() {
  var note = document.getElementById('bkPayNote');
  if (!note) return;
  var active = document.querySelector('.bk-sess.active');

  if (!active) {
    note.innerHTML = 'Select a session type to see the deposit amount.';
    return;
  }

  var s = SESSIONS[active.dataset.session];
  if (!s) return;

  if (BK_PAY === 'deposit') {
    note.innerHTML =
      '<strong>NZD ' + s.deposit + ' deposit</strong> secures your slot. ' +
      'Deducted from your final price. Due within 48 hours of booking.';
  } else if (BK_PAY === 'full') {
    note.innerHTML =
      'We will confirm your exact quote over WhatsApp and send payment details to secure your appointment.';
  } else {
    note.innerHTML =
      'No payment needed now — we will discuss your idea, quote, and availability via WhatsApp first.';
  }
}

/* ── Build the WhatsApp message ───────────────────────────────── */
function bkBuildMessage() {
  var idea     = (document.getElementById('bkIdea').value  || '').trim();
  var name     = (document.getElementById('bkName').value  || '').trim();
  var date     = (document.getElementById('bkDate').value  || '').trim();
  var active   = document.querySelector('.bk-sess.active');
  var sessType = active ? active.dataset.session : '';
  var s        = sessType ? SESSIONS[sessType] : null;

  var lines = ['Kia ora ' + STUDIO.name + ' team,\n'];

  if (name) lines.push('Name: ' + name);
  if (date) lines.push('Preferred time: ' + date);

  lines.push('');

  /* Tattoo idea */
  if (idea) {
    lines.push('Tattoo idea:\n' + idea);
  } else {
    lines.push('Tattoo idea:\nTo be discussed — please reach out so we can get started.');
  }

  /* Context extras (artist / reference tattoo) */
  if (BK_CTX.artist)    lines.push('\nPreferred artist: ' + BK_CTX.artist);
  if (BK_CTX.reference) lines.push('Reference piece: '   + BK_CTX.reference);

  lines.push('');

  /* Session + payment */
  if (s) {
    lines.push('Session type: ' + sessType + ' — ' + s.blurb + ' (' + s.price + ')');

    if (BK_PAY === 'deposit') {
      lines.push(
        'Payment: Deposit — NZD ' + s.deposit +
        ' to secure the appointment (deducted from final price)'
      );
    } else if (BK_PAY === 'full') {
      lines.push('Payment: Pay in full — please confirm the exact quote and send payment details.');
    } else {
      lines.push('Payment: Enquiry only — I would like to discuss details before committing.');
    }
  }

  lines.push('\nPlease confirm availability and next steps.\n\nNgā mihi');
  return lines.join('\n');
}

/* ── Wire up booking modal events ─────────────────────────────── */
function setupBookingModal() {
  /* Close button */
  var closeBtn = document.getElementById('bkClose');
  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);

  /* Backdrop */
  var overlay = document.getElementById('bookingModal');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeBookingModal();
    });
  }

  /* Session label clicks */
  document.querySelectorAll('.bk-sess').forEach(function(label) {
    label.addEventListener('click', function() {
      document.querySelectorAll('.bk-sess').forEach(function(l) { l.classList.remove('active'); });
      label.classList.add('active');
      var r = label.querySelector('input');
      if (r) r.checked = true;
      /* Clear session error */
      var err = document.getElementById('bkSessionError');
      if (err) err.classList.remove('show');
      bkUpdatePayNote();
    });
  });

  /* Payment tab clicks */
  document.querySelectorAll('.bk-ptab').forEach(function(tab) {
    tab.addEventListener('click', function() { bkSetPayTab(tab.dataset.pay); });
  });

  /* Form submit */
  var form = document.getElementById('bkForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      /* Validate session type */
      var active = document.querySelector('.bk-sess.active');
      if (!active) {
        var err = document.getElementById('bkSessionError');
        if (err) {
          err.classList.add('show');
          err.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      var msg = bkBuildMessage();
      window.open(buildWaUrl(msg), '_blank');
      closeBookingModal();
    });
  }
}

/* ================================================================
   DOM READY
   ================================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Inject and wire the universal booking modal first ────────── */
  injectBookingModal();
  setupBookingModal();

  /* ── WhatsApp contact link ────────────────────────────────────── */
  var contactWaLink = document.getElementById('contactWaLink');
  if (contactWaLink) {
    contactWaLink.href = buildWaUrl(
      'Kia ora ' + STUDIO.name + ' team,\n\nI would like to get in touch regarding a tattoo enquiry.\n\nNgā mihi'
    );
  }

  /* ── Sticky header ────────────────────────────────────────────── */
  var header = document.getElementById('siteHeader');
  if (header) {
    function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Hamburger navigation ─────────────────────────────────────── */
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
  if (navClose)  navClose.addEventListener('click',  closeNav);

  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', closeNav);
  });
  document.addEventListener('click', function(e) {
    if (navList && navList.classList.contains('show') &&
        !navList.contains(e.target) &&
        navToggle && e.target !== navToggle && !navToggle.contains(e.target)) {
      closeNav();
    }
  });

  /* ── Artist info modal ────────────────────────────────────────── */
  var artistModal   = document.getElementById('artistModal');
  var modalPhoto    = document.getElementById('modalPhoto');
  var modalName     = document.getElementById('modalArtistName');
  var modalSpec     = document.getElementById('modalArtistSpecialty');
  var modalBio      = document.getElementById('modalArtistBio');
  var modalDetails  = document.getElementById('modalArtistDetails');
  var modalBookBtn  = document.getElementById('modalBookBtn');
  var activeArtist  = null;  // track which artist is open

  function openArtistModal(id) {
    var a = ARTISTS[id];
    if (!a || !artistModal) return;
    activeArtist = a;

    if (modalPhoto)   { modalPhoto.src = resolvePhoto(a.photo); modalPhoto.alt = a.name; }
    if (modalName)    modalName.textContent = a.name;
    if (modalSpec)    modalSpec.textContent = a.specialty;
    if (modalBio)     modalBio.textContent  = a.bio;
    if (modalDetails) {
      modalDetails.innerHTML =
        '<div class="modal-detail-row"><span class="modal-detail-label">Specialities</span><span class="modal-detail-value">' + a.skills.join(', ') + '</span></div>' +
        '<div class="modal-detail-row"><span class="modal-detail-label">Availability</span><span class="modal-detail-value">' + a.availability + '</span></div>' +
        '<div class="modal-detail-row"><span class="modal-detail-label">Rate</span><span class="modal-detail-value">' + a.rate + '</span></div>';
    }

    /* "Book This Artist" now opens the booking modal */
    if (modalBookBtn) {
      modalBookBtn.onclick = function(e) {
        e.preventDefault();
        closeArtistModal();
        openBookingModal({
          label:  'Booking with ' + a.name,
          artist: a.name + ' — ' + a.specialty,
          payment: 'deposit',
        });
      };
    }

    artistModal.classList.add('open');
    artistModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeArtistModal() {
    if (!artistModal) return;
    artistModal.classList.remove('open');
    artistModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeArtist = null;
  }

  /* Both article cards and "View Profile" buttons have data-artist */
  document.querySelectorAll('[data-artist]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      openArtistModal(Number(el.dataset.artist));
    });
    el.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') openArtistModal(Number(el.dataset.artist));
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(function(btn) {
    btn.addEventListener('click', closeArtistModal);
  });
  if (artistModal) {
    artistModal.addEventListener('click', function(e) {
      if (e.target === artistModal) closeArtistModal();
    });
  }

  /* ── Gallery filter ───────────────────────────────────────────── */
  var filterBtns  = document.querySelectorAll('.filter-btn');
  var tattooCards = document.querySelectorAll('.tattoo-card');

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.dataset.filter;
      tattooCards.forEach(function(card) {
        card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
      });
    });
  });

  /* ================================================================
     BOOKING TRIGGERS — all routes go through openBookingModal()
     ================================================================ */

  /* Gallery cards — "Pay Deposit" */
  document.querySelectorAll('[data-wa-deposit]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var t = TATTOOS[btn.dataset.waDeposit];
      if (!t) return;
      openBookingModal({
        label:     t.name,
        idea:      t.name + '\nStyle: ' + t.style + '\nPlacement: ' + t.placement + '\nEstimated: ' + t.hours,
        reference: t.name + ' — ' + t.style + ', ' + t.placement + ', est. NZD ' + t.priceMin + '–' + t.priceMax,
        payment:   'deposit',
      });
    });
  });

  /* Gallery cards — "Pay in Full" */
  document.querySelectorAll('[data-wa-full]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var t = TATTOOS[btn.dataset.waFull];
      if (!t) return;
      openBookingModal({
        label:     t.name,
        idea:      t.name + '\nStyle: ' + t.style + '\nPlacement: ' + t.placement + '\nEstimated: ' + t.hours,
        reference: t.name + ' — ' + t.style + ', ' + t.placement + ', est. NZD ' + t.priceMin + '–' + t.priceMax,
        payment:   'full',
      });
    });
  });

  /* Rate cards / session cards — "Book Now" / "Pay Deposit" / "Enquire" */
  document.querySelectorAll('[data-wa-session]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var type    = btn.dataset.waSession || '';
      var payType = btn.dataset.payType === 'full' ? 'full' : 'deposit';
      openBookingModal({
        label:       type,
        sessionType: type,
        payment:     payType,
      });
    });
  });

  /* "Book Similar" links in gallery preview cards (index.html) */
  document.querySelectorAll('.book-now-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      openBookingModal({ label: 'Book a Tattoo Session' });
    });
  });

  /* General enquiry buttons */
  document.querySelectorAll('[data-wa-general]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      openBookingModal({
        label:   btn.dataset.waGeneral || 'General Enquiry',
        payment: 'enquiry',
      });
    });
  });

  /* ── Toast ───────────────────────────────────────────────────── */
  var toast = document.getElementById('toastNotification') || document.getElementById('toast');

  function showToast(msg, duration) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, duration || 4000);
  }

  /* ── Contact form (Formspree) ─────────────────────────────────── */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn   = contactForm.querySelector('[type="submit"]');
      var orig  = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled    = true;
      fetch(contactForm.action, {
        method:  'POST',
        body:    new FormData(contactForm),
        headers: { Accept: 'application/json' },
      }).then(function(res) {
        if (res.ok) { showToast('Message sent. We will be in touch shortly.'); contactForm.reset(); }
        else        { showToast('Error sending message. Please try again.'); }
      }).catch(function() {
        showToast('Network error. Please check your connection.');
      }).finally(function() {
        btn.textContent = orig;
        btn.disabled    = false;
      });
    });
  }

  /* ── Footer year ──────────────────────────────────────────────── */
  document.querySelectorAll('[data-year]').forEach(function(el) { el.textContent = new Date().getFullYear(); });
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Chatbot ──────────────────────────────────────────────────── */
  var chatTrigger  = document.getElementById('chatbotTrigger');
  var chatWindow   = document.getElementById('chatbotWindow');
  var chatCloseBtn = document.getElementById('chatClose');
  var chatMsgs     = document.getElementById('chatMessages');
  var chatInputEl  = document.getElementById('chatInput');
  var chatSendBtn  = document.getElementById('chatSend');

  function closeChatbot() { if (chatWindow) chatWindow.classList.remove('open'); }

  if (chatTrigger && chatWindow) {
    var BOT = {
      greeting: 'Kia ora! Welcome to ' + STUDIO.name + ' in ' + STUDIO.suburb + '.\n\nI can help with pricing, bookings, our artists, or anything else. What would you like to know?',
      pricing:  'Our pricing guide:\n\nSmall (1–2 hrs): NZD 200–350\nMedium (3–4 hrs): NZD 450–700\nLarge (5–8 hrs): NZD 800–1,700\nFull sleeves / mega pieces: NZD 2,000–4,500+\n\nAll sessions require a non-refundable deposit of NZD 100–300, deducted from the final price.',
      booking:  'To book from anywhere on the site:\n\n1. Click any "Book" button\n2. A booking form opens — fill in your idea and details\n3. Tap "Send via WhatsApp"\n4. We confirm once your deposit is received.\n\nYou can choose Deposit, Pay in Full, or Just Enquire.',
      deposit:  'Deposits range from NZD 100–300 depending on session type:\n\nStudio Session: NZD 100\nDoor-to-Door: NZD 150\nMega Project: NZD 300\n\nAll deposits are non-refundable and come off your final price. 48 hours notice required to reschedule.',
      artists:  'Our six resident artists:\n\nJames Tūhoe — Tā Moko and Polynesian\nAroha Ngāti — Portraiture and Realism\nKenji Murakami — Japanese Traditional\nLily Ashford — Fine Line and Minimalist\nDiego Reyes — Black and Grey and Script\nSophie Jamieson — Colour Realism and Floral',
      hours:    'Studio hours:\n\nMonday to Saturday: 8:00 am to 8:00 pm\nSunday: 9:00 am to 2:00 pm\n\nAppointments preferred. Walk-ins welcome when availability allows.',
      location: 'InkXas is a private studio in ' + STUDIO.suburb + ', New Zealand.\n\nWe also offer door-to-door service across Auckland.',
      gallery:  'Our gallery has 24 original custom tattoos. Every piece shows an estimated price, and you can book directly from each tattoo card.',
      maori:    'Tā moko and Kirituhi are offered by James Tūhoe, who specialises in culturally grounded Māori and Polynesian tattoo design.',
      fallback: 'Thanks for your question. For personalised help, tap any "Book" button on the site or message us directly via WhatsApp.',
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
      setTimeout(function() { appendMsg(getBotReply(text), 'bot'); }, 560);
    }

    chatTrigger.addEventListener('click', function() {
      chatWindow.classList.toggle('open');
      if (chatWindow.classList.contains('open') && chatMsgs && chatMsgs.children.length === 0) {
        setTimeout(function() { appendMsg(BOT.greeting, 'bot'); }, 300);
      }
    });
    if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChatbot);
    if (chatSendBtn)  chatSendBtn.addEventListener('click',  function() { sendMsg(chatInputEl ? chatInputEl.value : ''); });
    if (chatInputEl)  chatInputEl.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendMsg(chatInputEl.value); });
    document.querySelectorAll('.quick-reply').forEach(function(btn) {
      btn.addEventListener('click', function() { sendMsg(btn.textContent); });
    });
  }

  /* ── Global ESC key ───────────────────────────────────────────── */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeArtistModal();
      closeBookingModal();
      closeNav();
      closeChatbot();
    }
  });

}); /* end DOMContentLoaded */

/* ================================================================
   VIDEO AUTOPLAY
   Desktop  → hover on card to play
   Mobile   → observe video CONTAINER (not full card) at ≥50%
              This ensures gallery cards (which are tall) play as
              soon as the video area scrolls into view, not when
              the entire card (including text/buttons) is 70% visible.
   ================================================================ */
(function initVideoAutoplay() {

  var canHover = window.matchMedia('(hover: hover)').matches;

  var cards = Array.prototype.slice.call(
    document.querySelectorAll('.pro-card, .tattoo-card')
  );

  cards.forEach(function(card) {
    var video = card.querySelector('.preview-video') || card.querySelector('video');
    if (!video) return;

    video.muted       = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');

    if (canHover) {
      card.addEventListener('mouseenter', function() { video.play().catch(function() {}); });
      card.addEventListener('mouseleave', function() { video.pause(); video.currentTime = 0; });
    } else {
      /* Observe the video container (.media-wrapper or .tattoo-media),
         not the full card — so threshold is relative to the video area only */
      var target = video.parentElement || card;

      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            video.play().catch(function() {});
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      }, { threshold: [0, 0.5, 1.0] });

      obs.observe(target);
    }
  });

})();
