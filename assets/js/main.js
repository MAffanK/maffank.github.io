/* =====================================================================
   Affan Khan — Portfolio  ·  vanilla JS (no dependencies)
   ===================================================================== */
(function () {
  "use strict";

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;
  if (toggle) {
    toggle.addEventListener("click", function () {
      body.classList.toggle("nav-open");
      var open = body.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close the menu when a link is tapped
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { body.classList.remove("nav-open"); });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Active nav link based on section in view (home page) ---- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href*="#"]'));
  var sections = navLinks
    .map(function (a) {
      var id = a.getAttribute("href").split("#")[1];
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          navLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href").indexOf("#" + id) !== -1);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Accolades card deck (select to enlarge + highlight) ---- */
  document.querySelectorAll(".deck").forEach(function (deck) {
    var track = deck.querySelector(".deck-track");
    var cards = Array.prototype.slice.call(deck.querySelectorAll(".deck-card"));
    var prev = deck.querySelector(".deck-prev");
    var next = deck.querySelector(".deck-next");
    var now = deck.querySelector(".deck-now");
    if (!track || !cards.length) return;

    var active = 0;
    cards.forEach(function (c, i) { if (c.classList.contains("is-active")) active = i; });

    function center(card) {
      var left = card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2;
      track.scrollTo({ left: left, behavior: "smooth" });
    }

    // update which card looks active (no scrolling)
    function highlight(i) {
      active = Math.max(0, Math.min(cards.length - 1, i));
      cards.forEach(function (c, idx) {
        var on = idx === active;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-selected", on ? "true" : "false");
      });
      if (now) now.textContent = active + 1;
    }

    function setActive(i, scroll) {
      highlight(i);
      if (scroll !== false) center(cards[active]);
    }

    // index of the card whose centre is closest to the deck's centre
    function nearestIndex() {
      var mid = track.scrollLeft + track.clientWidth / 2;
      var best = 0, bestDist = Infinity;
      cards.forEach(function (c, idx) {
        var d = Math.abs((c.offsetLeft + c.offsetWidth / 2) - mid);
        if (d < bestDist) { bestDist = d; best = idx; }
      });
      return best;
    }

    if (prev) prev.addEventListener("click", function () { setActive(active - 1); });
    if (next) next.addEventListener("click", function () { setActive(active + 1); });

    // hover + mouse-wheel steps through the cards (one card per notch)
    var wheelLock = false;
    track.addEventListener("wheel", function (e) {
      var delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (!delta) return;
      var dir = delta > 0 ? 1 : -1;
      // at an edge and pushing further outward → let the page scroll normally
      if ((dir < 0 && active === 0) || (dir > 0 && active === cards.length - 1)) return;
      e.preventDefault();
      if (wheelLock) return;
      wheelLock = true;
      setTimeout(function () { wheelLock = false; }, 240);
      setActive(active + dir);
    }, { passive: false });

    // keep the highlight in sync when scrolled by drag/touch (debounced)
    var t;
    track.addEventListener("scroll", function () {
      clearTimeout(t);
      t = setTimeout(function () { highlight(nearestIndex()); }, 90);
    }, { passive: true });

    // sync classes/count on load WITHOUT auto-scrolling the page to the deck
    setActive(active, false);
  });

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
