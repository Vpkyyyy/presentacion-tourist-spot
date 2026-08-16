/* =============================================================
   PRESENTACION, CAMARINES SUR — SITE SCRIPT
   ------------------------------------------------------------- 
   Quick map of this file:
     1. IMAGES — change your photos here, nowhere else needed
     2. VIDEOS — change your two video clips here
     3. Highlights — which photos show in "Presentacion Gallery"
     4. Apply the images above to the page 
     5. Navbar (scroll style + mobile menu)
     6. Smooth scrolling for every link that starts with #
     7. Scroll-in animations
     8. Lightbox (full-screen photo viewer)
     9. Video modal  
    10. Feedback form (Google Sheet)
    11. Footer year
============================================================= */

document.addEventListener('DOMContentLoaded', function () {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -----------------------------------------------------------
     1. IMAGES
     This is the ONLY place you need to edit to change a photo.
     Replace the text inside the quotes with your own filename,
     e.g. "images/mini-new-zealand/mini-day-1.jpg" -> "images/my-photo.jpg"
     You can also paste a full web address (https://...) instead
     of a filename if your photo is hosted online.
  ----------------------------------------------------------- */
  const images = {
 
    // Big background photo at the very top of the page
    hero: "images/PRESENTACION HOME.jpg", // CHANGE THIS IMAGE TO YOUR OWN PHOTO
 
    // Photo used in the "About Presentacion" section
    about: "images/PRESENTACION HOME.jpg", // CHANGE THIS IMAGE TO YOUR OWN PHOTO

    // Mini New Zealand — photo [0] also becomes the destination card photo.
    // All 20 appear together when someone clicks "View Gallery": the first
    // 10 are daytime shots, the last 10 are nighttime shots.
    miniNewZealand: [
      // --- daytime (indexes 0-9) ---
      "images/new zealand.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/11.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/10.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/DAY 1.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/day 3.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/3.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/4.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/5.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/6.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/7.jpg", // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      // --- nighttime (indexes 10-19) ---
      "images/NIGH.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n2.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n3.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n4.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n5.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n6.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n7.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n8.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n9.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/n10.jpg"  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
    ],

    // I Love Presentacion View Deck — same idea: photo [0] is the card
    // photo, first 10 are daytime, last 10 are nighttime.
    viewDeck: [
      // --- daytime (indexes 0-9) ---
      "images/i love outside.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/presentacion angle 1.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/view deck angle 1.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/view deck angle 2.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/ view deck angle 3.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/inside 1.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/inside 2.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/view deck left.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/view deck down.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/sea side.jpg", // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      // --- nighttime (indexes 10-19) ---
      "images/i love night.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love night 1.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love night 2.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love night 4.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love night 6.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love night 8.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love night 9.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love night 10.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love stair.jpg",  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
      "images/i love cottages.jpg"  // CHANGE THIS IMAGE TO YOUR OWN PHOTO
    ]
  };

  // The full display name for each gallery — used in captions & alt text
  const galleryTitles = {
    miniNewZealand: "Mini New Zealand",
    viewDeck: "I Love Presentacion View Deck"
  };

  /* -----------------------------------------------------------
     2. VIDEOS
     One clip per destination. Leave the quotes empty ("") if you
     don't have a video yet — the site will show a friendly
     "no video added" message instead of a broken player.
     Use an .mp4 file for the widest browser support, placed in
     a "videos" folder next to "images" (create that folder
     yourself and drop your .mp4 files in it).
  ----------------------------------------------------------- */
  const videos = {
    miniNewZealand: "", // e.g. "videos/mini-new-zealand.mp4" — CHANGE THIS VIDEO TO YOUR OWN CLIP
    viewDeck: "videos/lv_0_20260814191739.mp4"        // e.g. "videos/view-deck.mp4" — CHANGE THIS VIDEO TO YOUR OWN CLIP
  };

  /* -----------------------------------------------------------
     3. HIGHLIGHTS
     Which photos appear in the "Presentacion Gallery" section
     further down the page. "index" is which photo in the list
     above (0 = first photo, 1 = second photo, and so on).
     Add, remove, or reorder these lines to change the grid.
     "wide: true" makes that photo take up two grid spaces.
  ----------------------------------------------------------- */
  const highlights = [
    { gallery: "miniNewZealand", index: 0, wide: true },  // day
    { gallery: "viewDeck", index: 0 },                     // day
    { gallery: "miniNewZealand", index: 10 },              // night
    { gallery: "viewDeck", index: 10 },                    // night
    { gallery: "miniNewZealand", index: 1 },               // day
    { gallery: "viewDeck", index: 11, wide: true },        // night
    { gallery: "miniNewZealand", index: 11 },              // night
    { gallery: "viewDeck", index: 1 },                     // day
    { gallery: "miniNewZealand", index: 2 },               // day
    { gallery: "viewDeck", index: 2 }                      // day
  ];

  /* -----------------------------------------------------------
     4. APPLY IMAGES TO THE PAGE
     You shouldn't need to change anything below this point —
     this part just reads the lists above and puts them on the page.
  ----------------------------------------------------------- */
  const heroImg = document.getElementById('heroImg');
  const aboutImg = document.getElementById('aboutImg');
  const mnzCardImg = document.getElementById('mnzCardImg');
  const vdCardImg = document.getElementById('vdCardImg');

  if (heroImg) heroImg.src = images.hero;
  if (aboutImg) aboutImg.src = images.about;
  if (mnzCardImg) mnzCardImg.src = images.miniNewZealand[0];
  if (vdCardImg) vdCardImg.src = images.viewDeck[0];

  // Build the "Presentacion Gallery" highlight grid
  const highlightGrid = document.getElementById('highlightGrid');
  if (highlightGrid) {
    highlights.forEach(function (item) {
      const list = images[item.gallery];
      if (!list || !list[item.index]) return; // skip anything misconfigured

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'highlight-item' + (item.wide ? ' highlight-item--wide' : '');
      button.setAttribute('data-gallery', item.gallery);
      button.setAttribute('data-index', item.index);
      button.setAttribute('aria-label', 'View ' + galleryTitles[item.gallery] + ' photo ' + (item.index + 1));

      const img = document.createElement('img');
      img.src = list[item.index];
      img.alt = galleryTitles[item.gallery] + ' — photo ' + (item.index + 1);
      img.loading = 'lazy';

      button.appendChild(img);
      highlightGrid.appendChild(button);
    });
  }

  /* -----------------------------------------------------------
     5. NAVBAR — darkens on scroll, hamburger menu on mobile
  ----------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  function updateNavbarBackground() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  updateNavbarBackground();
  window.addEventListener('scroll', updateNavbarBackground);

  function closeMobileMenu() {
    navLinks.classList.remove('is-open');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('is-open');
    hamburger.classList.toggle('is-active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* -----------------------------------------------------------
     6. SMOOTH SCROLLING
     Applies to the nav links, the "Explore Destinations" button,
     the scroll-down arrow, and the footer links — anything that
     points to an #id on this same page.
  ----------------------------------------------------------- */
  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const navHeight = navbar.offsetHeight;
    const targetY = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;
    window.scrollTo({ top: targetY, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      scrollToSection(id);
      closeMobileMenu();
    });
  });

  /* -----------------------------------------------------------
     7. SCROLL-IN ANIMATIONS
     Anything with data-animate in the HTML fades/rises into view
     the first time it scrolls onto the screen.
  ----------------------------------------------------------- */
  const animatedItems = document.querySelectorAll('[data-animate]');
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    animatedItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    // Fallback for older browsers or reduced-motion users: show everything immediately
    animatedItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* -----------------------------------------------------------
     8. LIGHTBOX — the full-screen photo viewer
     Used by both destination "View Gallery" buttons and the
     Presentacion Gallery highlight grid.
  ----------------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxFilmstrip = document.getElementById('lightboxFilmstrip');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGallery = null;
  let currentIndex = 0;
  let lastFocusedElement = null;

  function renderFilmstrip(galleryKey) {
    lightboxFilmstrip.innerHTML = '';
    images[galleryKey].forEach(function (src, i) {
      const thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'filmstrip-thumb' + (i === currentIndex ? ' is-active' : '');
      thumb.setAttribute('aria-label', 'Go to photo ' + (i + 1));

      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      thumb.appendChild(img);

      thumb.addEventListener('click', function () { showSlide(i); });
      lightboxFilmstrip.appendChild(thumb);
    });
  }

  function showSlide(index) {
    const list = images[currentGallery];
    const total = list.length;
    currentIndex = (index + total) % total; // wraps around both directions

    lightboxImage.classList.add('is-fading');
    window.setTimeout(function () {
      lightboxImage.src = list[currentIndex];
      lightboxImage.alt = galleryTitles[currentGallery] + ' — photo ' + (currentIndex + 1);
      lightboxImage.classList.remove('is-fading');
    }, 150);

    lightboxCaption.textContent = galleryTitles[currentGallery] + ' — Photo ' + (currentIndex + 1) + ' of ' + total;

    const thumbs = lightboxFilmstrip.querySelectorAll('.filmstrip-thumb');
    thumbs.forEach(function (thumb, i) {
      thumb.classList.toggle('is-active', i === currentIndex);
      if (i === currentIndex) thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  }

  function openLightbox(galleryKey, startIndex) {
    if (!images[galleryKey]) return;
    currentGallery = galleryKey;
    lastFocusedElement = document.activeElement;

    renderFilmstrip(galleryKey);
    showSlide(startIndex || 0);
    // Skip the fade-in on the very first photo of this visit
    lightboxImage.classList.remove('is-fading');
    lightboxImage.src = images[galleryKey][startIndex || 0];

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function nextSlide() { showSlide(currentIndex + 1); }
  function prevSlide() { showSlide(currentIndex - 1); }

  // Open triggers: destination "View Gallery" buttons
  document.querySelectorAll('[data-gallery]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openLightbox(this.getAttribute('data-gallery'), 0);
    });
  });

  // Open triggers: Presentacion Gallery highlight grid (built in section 3 above)
  if (highlightGrid) {
    highlightGrid.addEventListener('click', function (e) {
      const item = e.target.closest('.highlight-item');
      if (!item) return;
      openLightbox(item.getAttribute('data-gallery'), Number(item.getAttribute('data-index')));
    });
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', prevSlide);
  lightboxNext.addEventListener('click', nextSlide);

  // Click the dark backdrop (not the photo/controls) to close
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard support: Escape closes, arrow keys navigate
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Swipe support for mobile
  let touchStartX = 0;
  const SWIPE_THRESHOLD = 40;
  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (deltaX < 0) nextSlide(); else prevSlide();
  }, { passive: true });

  /* -----------------------------------------------------------
     9. VIDEO MODAL
     Plays the clip for whichever "Watch Video" button was
     clicked. Shows a friendly placeholder message instead if
     that destination's video path (section 2, above) is empty.
  ----------------------------------------------------------- */
  const videoModal = document.getElementById('videoModal');
  const videoModalPlayer = document.getElementById('videoModalPlayer');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoModalCaption = document.getElementById('videoModalCaption');
  let videoLastFocusedElement = null;

  function openVideoModal(key) {
    const src = videos[key];
    const hasVideo = Boolean(src);

    videoModal.classList.toggle('has-video', hasVideo);
    if (hasVideo) {
      videoModalPlayer.src = src;
      videoModalPlayer.play().catch(function () { /* autoplay can be blocked by the browser — that's fine, the controls are still visible */ });
    } else {
      videoModalPlayer.removeAttribute('src');
    }
    videoModalCaption.textContent = hasVideo ? galleryTitles[key] : '';

    videoLastFocusedElement = document.activeElement;
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    videoModalClose.focus();
  }

  function closeVideoModal() {
    videoModalPlayer.pause();
    videoModalPlayer.removeAttribute('src');
    videoModalPlayer.load(); // releases the video fully so it doesn't keep playing in the background
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (videoLastFocusedElement) videoLastFocusedElement.focus();
  }

  document.querySelectorAll('[data-video]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openVideoModal(this.getAttribute('data-video'));
    });
  });

  videoModalClose.addEventListener('click', closeVideoModal);

  // Click the dark backdrop (not the video/controls) to close
  videoModal.addEventListener('click', function (e) {
    if (e.target === videoModal) closeVideoModal();
  });

  // Escape closes the video modal too
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && videoModal.classList.contains('is-open')) closeVideoModal();
  });

  /* -----------------------------------------------------------
     10. FEEDBACK FORM (Google Sheet)
     The form submits the normal HTML way — see the action=""
     and target="" attributes on the <form> tag in index.html.
     This script only shows a "Sending..." / "Thank you" message
     so visitors get feedback on-screen.
  ----------------------------------------------------------- */
  const feedbackForm = document.getElementById('feedbackForm');
  const hiddenFormFrame = document.getElementById('hiddenFormFrame');
  const formStatus = document.getElementById('formStatus');
  let feedbackSubmitting = false;

  if (feedbackForm && hiddenFormFrame) {
    feedbackForm.addEventListener('submit', function () {
      feedbackSubmitting = true;
      formStatus.textContent = 'Sending...';
      formStatus.classList.remove('is-success');
    });

    // The hidden iframe finishes "loading" once Google has received
    // the submission — that's our cue to show a thank-you message.
    hiddenFormFrame.addEventListener('load', function () {
      if (!feedbackSubmitting) return; // ignore the blank load when the page first opens
      feedbackSubmitting = false;
      formStatus.textContent = 'Thank you! Your experience has been sent.';
      formStatus.classList.add('is-success');
      feedbackForm.reset();
    });
  }

  /* -----------------------------------------------------------
     11. FOOTER YEAR
  ----------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
