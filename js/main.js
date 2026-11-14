(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- Placeholder: ẩn ảnh lỗi/thiếu để lộ khung xám ---------- */
  function bindPlaceholders(root = document) {
    $$(".ph img", root).forEach((img) => {
      const ph = img.closest(".ph");
      const src = img.getAttribute("src") || "";
      if (!ph.dataset.label && src) ph.dataset.label = src.split("/").pop(); // gợi ý tên file cần thêm
      const ok = () => ph.classList.add("is-loaded");
      const fail = () => img.remove();
      if (!img.getAttribute("src")) return fail();
      if (img.complete) (img.naturalWidth ? ok() : fail());
      else { img.addEventListener("load", ok, { once: true }); img.addEventListener("error", fail, { once: true }); }
    });
    // Logo: khi có logo.svg thì ẩn chữ fallback
    const logoImg = $(".ph--logo img");
    if (logoImg) {
      const show = () => document.body.classList.add("has-logo");
      if (logoImg.complete && logoImg.naturalWidth) show();
      else logoImg.addEventListener("load", show, { once: true });
    }
  }

  const imgTag = (src, alt = "") => (src ? `<img src="${src}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy" />` : "");

  /* ---------- Product card ---------- */
  function productCard(p, i) {
    const swatches = p.colors
      .slice(0, 4)
      .map((c, idx) => `<button class="swatch${idx === 0 ? " is-active" : ""}" style="--c:${c}" aria-label="Màu ${idx + 1}"></button>`)
      .join("");
    const more = p.more ? `<span class="swatch-more">+${p.more}</span>` : "";
    const rating = p.rating ? `<span class="rating"><svg class="ic"><use href="#i-star"/></svg>${p.rating}</span>` : "";
    const badge = p.badge
      ? `<span class="pbadge pbadge--new">${p.badge}</span>`
      : p.bestseller ? `<span class="pbadge">BÁN CHẠY</span>` : "";
    const old = p.old ? `<span class="pprice__disc">${p.disc}</span><del>${p.old}</del>` : "";
    return `
      <article class="pcard">
        <a href="#" class="pcard__media">
          <span class="ph" data-label="Ảnh sản phẩm ${i + 1}">${imgTag(p.img, p.name)}</span>
          ${badge}
          <span class="pcard__quick" aria-label="Thêm nhanh"><svg class="ic"><use href="#i-bag-plus"/></svg></span>
          <span class="pcard__sizes">
            <span class="pcard__sizes-title">Thêm nhanh vào giỏ hàng +</span>
            <span class="pcard__sizes-list"><b>S</b><b>M</b><b>L</b><b>XL</b><b>2XL</b><b>3XL</b></span>
          </span>
        </a>
        <div class="pcard__meta">
          <div class="swatches">${swatches}${more}</div>
          ${rating}
        </div>
        <a href="#" class="pcard__name">${p.name}</a>
        <div class="pprice"><b>${p.price}</b>${old}</div>
      </article>`;
  }

  function renderProducts(el, list) {
    el.innerHTML = list.map(productCard).join("");
    el.scrollLeft = 0;
    bindPlaceholders(el);
    el.dispatchEvent(new Event("scroll"));
  }

  const newEl = $("#newArrivals");
  const bestEl = $("#bestSellers");
  const BEST = window.BEST_SELLERS.map((p) => ({ ...p, bestseller: true }));
  renderProducts(newEl, window.NEW_ARRIVALS.nam);
  renderProducts(bestEl, BEST);

  /* ---------- Tabs ---------- */
  $$("[data-tabs]").forEach((tabs) => {
    tabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".tabs__btn");
      if (!btn) return;
      $$(".tabs__btn", tabs).forEach((b) => b.classList.toggle("is-active", b === btn));
      const key = btn.dataset.tab;
      if (tabs.dataset.tabs === "newArrivals") renderProducts(newEl, window.NEW_ARRIVALS[key]);
      else renderProducts(bestEl, key === "all" ? BEST : BEST.filter((p) => p.g === key));
    });
  });

  /* ---------- Collections ---------- */
  $("#collections").innerHTML = window.COLLECTIONS.map(
    (c, i) => `
    <a href="#" class="ccard">
      <span class="ph ph--dark" data-label="Bộ sưu tập ${i + 1}">${imgTag(c.img, c.title)}</span>
      <span class="ccard__content">
        <span class="ccard__title">${c.title}</span>
        <span class="link-underline">Khám phá <svg class="ic ic--sm"><use href="#i-arrow-right"/></svg></span>
      </span>
    </a>`
  ).join("");

  /* ---------- Carousels (scroll-snap + nút) ---------- */
  $$("[data-carousel]").forEach((car) => {
    const track = $(".carousel__track", car);
    const prev = $(".carousel__btn--prev", car);
    const next = $(".carousel__btn--next", car);
    const step = () => {
      const card = track.firstElementChild;
      if (!card) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const per = Math.max(1, Math.floor((track.clientWidth + gap) / (card.offsetWidth + gap)));
      return per * (card.offsetWidth + gap);
    };
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.classList.toggle("is-hidden", track.scrollLeft <= 2);
      next.classList.toggle("is-hidden", track.scrollLeft >= max);
    };
    prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

  /* ---------- Hero slider ---------- */
  const hero = $("#hero");
  const slides = $$(".hero__slide", hero);
  const dotsWrap = $("#heroDots");
  const DURATION = 5000;
  let cur = 0, timer;
  dotsWrap.innerHTML = slides.map((_, i) => `<button class="hero__dot" aria-label="Slide ${i + 1}"><i></i></button>`).join("");
  const dots = $$(".hero__dot", dotsWrap);
  function go(i) {
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === cur));
    dots.forEach((d, k) => {
      d.classList.remove("is-active", "is-done");
      if (k < cur) d.classList.add("is-done");
      void d.offsetWidth; // restart animation
      if (k === cur) d.classList.add("is-active");
    });
    clearTimeout(timer);
    timer = setTimeout(() => go(cur + 1), DURATION);
  }
  hero.style.setProperty("--hero-dur", DURATION + "ms");
  dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
  $('[data-hero="prev"]').addEventListener("click", () => go(cur - 1));
  $('[data-hero="next"]').addEventListener("click", () => go(cur + 1));
  // swipe trên mobile
  let sx = null;
  hero.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
  hero.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
    sx = null;
  });
  go(0);

  /* ---------- Announcement rotate ---------- */
  const ann = $$(".announce__item");
  let ai = 0;
  const rotate = () => { ann[ai].classList.remove("is-active"); ai = (ai + 1) % ann.length; ann[ai].classList.add("is-active"); };
  setInterval(rotate, 4000);
  $(".announce__arrow").addEventListener("click", rotate);

  /* ---------- Header: ẩn topbar/announce khi cuộn ---------- */
  const header = $("#siteHeader");
  const toTop = $("#toTop");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    toTop.classList.toggle("is-visible", y > 400);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Mobile drawer ---------- */
  const drawer = $("#drawer");
  const setMenu = (open) => {
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  $("#openMenu").addEventListener("click", () => setMenu(true));
  $$("[data-close-menu]").forEach((b) => b.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  /* ---------- Care & Share marquee: nhân bản nhóm ảnh ---------- */
  const careTrack = $("#careTrack");
  const group = $(".care__group", careTrack);
  careTrack.appendChild(group.cloneNode(true));

  /* ---------- CoolClub ticker ---------- */
  const actHTML = (list) =>
    list.map(([who, verb, strong, tail]) => `<span>${who} ${verb} <b>${strong}</b> ${tail}</span>`).join("");
  const A = window.ACTIVITIES;
  const half = Math.ceil(A.length / 2);
  [["#ticker1", A.slice(0, half)], ["#ticker2", A.slice(half)]].forEach(([sel, list]) => {
    const html = actHTML(list);
    $(sel).innerHTML = html + html; // lặp để chạy liên tục
  });

  /* ---------- Footer accordion (mobile) ---------- */
  $$(".fgroup__title").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (window.matchMedia("(min-width: 1024px)").matches) return;
      btn.parentElement.classList.toggle("is-open");
    })
  );

  bindPlaceholders();
})();
