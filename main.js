/* Renders the pages from content.js. You should not need to edit this file to change text. */
(function () {
  "use strict";

  var S = window.SITE;
  var body = document.body;
  var ROOT = body.getAttribute("data-root") || "";
  var PAGE = body.getAttribute("data-page") || "home";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function list(items, cls) {
    return '<ul class="' + (cls || "bullets") + '">' +
      items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }
  function paras(items) {
    return items.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }
  function chips(items) {
    return '<ul class="chips">' + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }
  function homeLink(hash) { return ROOT + "index.html" + (hash ? "#" + hash : ""); }

  var ICON = {
    download: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v9.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V4a1 1 0 0 1 1-1zM5 19h14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2z"/></svg>',
    linkedin: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    mail: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.4l8 5 8-5V7H4zm16 2.75-7.47 4.67a1 1 0 0 1-1.06 0L4 9.75V17h16V9.75z"/></svg>',
    pin: '<svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>',
    arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M13.3 5.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 1 1-1.4-1.4l4.3-4.3H4a1 1 0 1 1 0-2h13.6l-4.3-4.3a1 1 0 0 1 0-1.4z"/></svg>',
    back: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M10.7 5.3a1 1 0 0 1 0 1.4L6.4 11H20a1 1 0 1 1 0 2H6.4l4.3 4.3a1 1 0 1 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0z"/></svg>'
  };

  function ctaButtons() {
    return '<div class="ctas">' +
      '<a class="btn btn-primary" href="' + esc(ROOT + S.config.cvFile) + '" target="_blank" rel="noopener">' + ICON.download + "Download CV</a>" +
      '<a class="btn btn-ghost" href="' + esc(S.config.linkedin) + '" target="_blank" rel="noopener noreferrer">' + ICON.linkedin + "LinkedIn</a>" +
      '<a class="btn btn-ghost" href="' + homeLink("contact") + '">' + ICON.mail + "Contact me</a>" +
      "</div>";
  }

  /* ---------- Navigation ---------- */
  function navGroup(label, items) {
    var withPages = items.filter(function (i) { return i.page; });
    var id = "menu-" + label.toLowerCase();
    var active = withPages.some(function (i) { return i.id === PAGE; });
    return '<li class="nav-group' + (active ? " is-active" : "") + '">' +
      '<button class="nav-trigger" type="button" aria-expanded="false" aria-controls="' + id + '">' + esc(label) +
      '<svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M6.3 9.3a1 1 0 0 1 1.4 0L12 13.6l4.3-4.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 0-1.4z"/></svg></button>' +
      '<ul class="nav-menu" id="' + id + '">' +
      withPages.map(function (i) {
        var cur = i.id === PAGE ? ' aria-current="page"' : "";
        return '<li><a href="' + esc(ROOT + i.page) + '"' + cur + ">" + esc(i.company.replace(/^Association |«|»/g, "").trim()) + "</a></li>";
      }).join("") + "</ul></li>";
  }

  function renderNav() {
    var el = document.getElementById("site-nav");
    if (!el) return;
    var shortName = S.activities.map(function (a) {
      // shorter labels in the menu for activities
      var label = { tutoring: "Tutoring", entraide: "Entraide Scolaire Amicale", sports: "Padel, Tennis & Skiing" }[a.id];
      return label ? Object.assign({}, a, { company: label }) : a;
    });
    el.innerHTML =
      '<div class="nav-inner container">' +
      '<a class="brand" href="' + homeLink() + '"><span class="brand-mark" aria-hidden="true">AR</span><span>' + esc(S.profile.name) + "</span></a>" +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links"><span class="sr-only">Open menu</span><span class="bars" aria-hidden="true"></span></button>' +
      '<ul class="nav-links" id="nav-links">' +
      '<li><a href="' + homeLink() + '"' + (PAGE === "home" ? ' aria-current="page"' : "") + ">CV</a></li>" +
      navGroup("Experience", S.experience) +
      navGroup("Activities", shortName) +
      '<li><a href="' + homeLink("contact") + '">Contact</a></li>' +
      '<li class="nav-cta"><a class="btn btn-primary btn-sm" href="' + esc(ROOT + S.config.cvFile) + '" target="_blank" rel="noopener">' + ICON.download + "CV (PDF)</a></li>" +
      "</ul></div>";

    var toggle = el.querySelector(".nav-toggle");
    var links = el.querySelector(".nav-links");
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
    });

    var triggers = el.querySelectorAll(".nav-trigger");
    function closeAll(except) {
      triggers.forEach(function (t) { if (t !== except) t.setAttribute("aria-expanded", "false"); });
    }
    triggers.forEach(function (t) {
      t.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = t.getAttribute("aria-expanded") === "true";
        closeAll(t);
        t.setAttribute("aria-expanded", String(!open));
      });
    });
    document.addEventListener("click", function () { closeAll(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeAll(); toggle.setAttribute("aria-expanded", "false"); links.classList.remove("is-open"); }
    });
    // close mobile menu after following an in-page link
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); links.classList.remove("is-open"); closeAll(); }
    });

    var onScroll = function () { el.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Home ---------- */
  function entryCard(item, kind) {
    var meta = [item.dates, item.location].filter(Boolean);
    return '<article class="entry reveal">' +
      '<div class="entry-head">' +
      "<div><h3>" + esc(item.company) + '</h3><p class="entry-role">' + esc(item.role) + "</p></div>" +
      '<p class="entry-meta">' + meta.map(esc).join('<span class="dot" aria-hidden="true"></span>') + "</p>" +
      "</div>" +
      list(item.summary) +
      (item.page
        ? '<a class="read-more" href="' + esc(ROOT + item.page) + '">Read more<span class="sr-only"> about ' + esc(item.company) + "</span>" + ICON.arrow + "</a>"
        : "") +
      "</article>";
  }

  function renderHome() {
    var p = S.profile;
    var html = "";

    html += '<header class="hero" id="top"><div class="container hero-grid">' +
      '<div class="hero-text">' +
      '<p class="eyebrow">' + ICON.pin + esc(p.location) + "</p>" +
      "<h1>" + esc(p.name) + "</h1>" +
      '<p class="headline">' + esc(p.headline) + "</p>" +
      '<p class="summary">' + esc(p.summary) + "</p>" +
      ctaButtons() +
      "</div>" +
      '<div class="hero-photo"><img src="' + esc(ROOT + p.photo) + '" srcset="' + esc(ROOT + p.photo) + " 480w, " + esc(ROOT + p.photo2x) + ' 960w" sizes="(max-width: 720px) 160px, 300px" width="480" height="600" alt="' + esc(p.photoAlt) + '" fetchpriority="high"></div>' +
      "</div></header>";

    html += '<section class="highlights" aria-label="Key figures"><div class="container"><ul class="stats">' +
      S.highlights.map(function (h) {
        return '<li class="reveal"><span class="stat-value">' + esc(h.value) + '</span><span class="stat-label">' + esc(h.label) + "</span></li>";
      }).join("") + "</ul></div></section>";

    html += '<section class="section" id="education" aria-labelledby="h-edu"><div class="container">' +
      '<h2 id="h-edu" class="section-title">Education</h2>' +
      S.education.map(function (e) {
        return '<article class="entry reveal"><div class="entry-head">' +
          "<div><h3>" + esc(e.school) + '</h3><p class="entry-role">' + esc(e.degree) + "</p></div>" +
          '<p class="entry-meta">' + esc(e.dates) + '<span class="dot" aria-hidden="true"></span>' + esc(e.location) + "</p>" +
          "</div>" + list(e.points) + "</article>";
      }).join("") + "</div></section>";

    html += '<section class="section alt" id="experience" aria-labelledby="h-exp"><div class="container">' +
      '<h2 id="h-exp" class="section-title">Experience</h2>' +
      S.experience.map(function (x) { return entryCard(x); }).join("") + "</div></section>";

    html += '<section class="section" id="activities" aria-labelledby="h-act"><div class="container">' +
      '<h2 id="h-act" class="section-title">Extracurricular activities</h2>' +
      '<div class="grid-2">' + S.activities.map(function (a) { return entryCard(a); }).join("") + "</div></div></section>";

    html += '<section class="section alt" id="skills" aria-labelledby="h-skills"><div class="container">' +
      '<h2 id="h-skills" class="section-title">Skills, languages & interests</h2>' +
      '<div class="grid-3">' +
      S.skills.map(function (g) { return '<div class="panel reveal"><h3>' + esc(g.group) + "</h3>" + chips(g.items) + "</div>"; }).join("") +
      '<div class="panel reveal"><h3>Languages</h3><ul class="langs">' +
      S.languages.map(function (l) { return "<li><strong>" + esc(l.name) + "</strong><span>" + esc(l.level) + "</span></li>"; }).join("") +
      "</ul></div>" +
      '<div class="panel reveal"><h3>Interests</h3>' + list(S.interests) + "</div>" +
      "</div></div></section>";

    html += contactSection();
    document.getElementById("main").innerHTML = html;
    bindForm();
  }

  /* ---------- Contact ---------- */
  function contactSection() {
    var mail = esc(S.config.email);
    return '<section class="section contact" id="contact" aria-labelledby="h-contact"><div class="container contact-grid">' +
      '<div class="reveal"><h2 id="h-contact" class="section-title">Contact me</h2>' +
      "<p>Thank you for visiting. Send me a message with this form and it will reach my inbox directly.</p>" +
      '<p class="fallback">Prefer email? Write to <a href="mailto:' + mail + '">' + mail + "</a></p>" +
      '<p class="fallback"><a href="' + esc(S.config.linkedin) + '" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></p></div>' +
      '<form class="form reveal" id="contact-form" novalidate>' +
      '<div class="field"><label for="cf-name">Name</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>' +
      '<div class="field"><label for="cf-email">Email</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="200"></div>' +
      '<div class="field"><label for="cf-message">Message</label><textarea id="cf-message" name="message" rows="5" required maxlength="5000"></textarea></div>' +
      // honeypot field against spam bots: hidden from people, bots fill it in
      '<input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<button class="btn btn-primary" type="submit">Send message</button>' +
      '<p class="form-status" id="form-status" role="status" aria-live="polite"></p>' +
      "</form></div></section>";
  }

  function bindForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = document.getElementById("form-status");
    var btn = form.querySelector("button[type=submit]");
    function setStatus(msg, kind) { status.textContent = msg; status.className = "form-status " + (kind || ""); }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        var bad = form.querySelector(":invalid");
        setStatus("Please fill in your name, a valid email and a message.", "error");
        if (bad) bad.focus();
        return;
      }
      var key = S.config.web3formsKey;
      if (!key || key.indexOf("YOUR_") === 0) {
        setStatus("The form is not connected yet. Please email me at " + S.config.email + ".", "error");
        return;
      }
      var data = {
        access_key: key,
        subject: "New message from your website",
        from_name: S.profile.name + " website",
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        replyto: form.email.value.trim(),
        message: form.message.value.trim(),
        botcheck: form.botcheck.checked
      };
      btn.disabled = true;
      setStatus("Sending...", "");
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (res.ok && res.j.success !== false) {
            form.reset();
            setStatus("Thank you, your message has been sent. I will get back to you soon.", "success");
          } else {
            throw new Error(res.j.message || "error");
          }
        })
        .catch(function () {
          setStatus("Sorry, something went wrong. Please email me at " + S.config.email + ".", "error");
        })
        .then(function () { btn.disabled = false; });
    });
  }

  /* ---------- Detail pages ---------- */
  function renderDetail() {
    var all = S.experience.map(function (x) { return [x, "Experience"]; })
      .concat(S.activities.map(function (x) { return [x, "Extracurricular activity"]; }));
    var found = all.filter(function (p) { return p[0].id === PAGE; })[0];
    if (!found) { renderHome(); return; }
    var item = found[0], kind = found[1], d = item.detail;
    var isExp = kind === "Experience";
    var back = '<a class="back" href="' + homeLink(isExp ? "experience" : "activities") + '">' + ICON.back + "Back to CV</a>";

    // previous / next within the same group
    var group = (isExp ? S.experience : S.activities).filter(function (x) { return x.page; });
    var idx = group.indexOf(item);
    var prev = group[idx - 1], next = group[idx + 1];

    // role and company are already in the title, so the facts line only adds dates and location
    var facts = [
      ["Dates", item.dates],
      ["Location", item.location]
    ].filter(function (f) { return f[1]; });

    var html = '<header class="detail-hero"><div class="container">' + back +
      '<p class="eyebrow">' + esc(kind) + "</p>" +
      "<h1>" + esc(isExp ? item.company : item.role) + "</h1>" +
      '<p class="headline">' + esc(isExp ? item.role : item.company) + "</p>" +
      '<p class="facts-line">' + facts.map(function (f) { return '<span><span class="sr-only">' + esc(f[0]) + ": </span>" + esc(f[1]) + "</span>"; }).join('<span class="dot" aria-hidden="true"></span>') + "</p>" +
      "</div></header>";

    html += '<div class="container detail-body">' +
      (d.takeaways ? '<section class="takeaways reveal" aria-labelledby="h-take"><h2 id="h-take">Key takeaways</h2>' + list(d.takeaways) + "</section>" : "") +
      block("Context", paras(d.context)) +
      block(isExp ? "My responsibilities" : "What I do", list(d.responsibilities)) +
      block(isExp ? "Concrete results" : "Results", list(d.results, "bullets results")) +
      block("Skills used", chips(d.skills)) +
      block("What I learned", paras(d.learned), "learned") +
      '<nav class="pager" aria-label="More pages">' +
      (prev ? '<a href="' + esc(ROOT + prev.page) + '"><span>Previous</span>' + esc(navName(prev)) + "</a>" : "<span></span>") +
      (next ? '<a class="next" href="' + esc(ROOT + next.page) + '"><span>Next</span>' + esc(navName(next)) + "</a>" : "<span></span>") +
      "</nav>" +
      '<div class="detail-foot">' + back + ctaButtons() + "</div>" +
      "</div>";

    document.getElementById("main").innerHTML = html;
  }
  function navName(x) { return x.page && x.page.indexOf("activities/") === 0 ? x.role : x.company; }
  function block(title, inner, cls) {
    return '<section class="dblock reveal ' + (cls || "") + '"><h2>' + esc(title) + "</h2>" + inner + "</section>";
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML = '<div class="container footer-inner">' +
      "<p>&copy; " + new Date().getFullYear() + " " + esc(S.profile.name) + "</p>" +
      '<p><a href="mailto:' + esc(S.config.email) + '">Email</a><a href="' + esc(S.config.linkedin) + '" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="' + esc(ROOT + S.config.cvFile) + '" target="_blank" rel="noopener">CV (PDF)</a></p>' +
      "</div>";
  }

  /* ---------- Subtle reveal on scroll ---------- */
  function reveal() {
    var els = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });
    els.forEach(function (e) { io.observe(e); });
  }

  renderNav();
  if (PAGE === "home") renderHome(); else renderDetail();
  renderFooter();
  body.classList.add("js-ready");
  reveal();

  // jump to #section after content is rendered (content did not exist at page load)
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
