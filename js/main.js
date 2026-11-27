(function () {
  var PHONE = "96171109205";

  var T = {
    en: {
      title: "Jouzour Wood | Handmade wood lamps and boards",
      metaDesc: "Handmade wood lamps and kitchen boards from Aadloun, Lebanon. Order on WhatsApp.",
      brandSub: "Wood", navLamps: "Lamps", navBoards: "Boards", navAbout: "About", navContact: "Contact", navInsta: "Instagram",
      heroEyebrow: "Handmade in Aadloun, Lebanon", heroTitle: "From roots to your home.",
      heroLead: "Lamps shaped from branches, roots and solid blocks of wood, and boards for the kitchen. Every piece is made by hand, so no two are alike.",
      ctaLamps: "See the lamps", ctaOrder: "Order on WhatsApp",
      heroAlt: "Branch lamp wrapped in rope, with a warm filament bulb hanging from its tip",
      lampsEyebrow: "Table lamps", lampsTitle: "Lamps", lampsIntro: "Branches, stone and rope turned into table lamps with warm filament bulbs.",
      l1: "Forked branch lamp", l1d: "A natural fork holds the bulb, set on a dark wood base.",
      l2: "Rope-wrapped branch lamp", l2d: "A curved branch wrapped in thick rope, with the bulb hanging from its tip.",
      l3: "Rope figure lamps", l3d: "Two little wood-block figures with rope arms and legs, sitting on the edge of a shelf.",
      l4: "Stone and wood lamp", l4d: "Stacked stones beside a curved wooden arm, under a linen shade.",
      l5: "Charred block lamp", l5d: "A dark, burnt-finish block of wood with a vintage toggle switch.",
      l6: "Rope-laced block lamp", l6d: "Rope laced through the wood like a boot, finished with a bow at the side.",
      boardsEyebrow: "For the kitchen", boardsTitle: "From roots to your kitchen",
      boardsIntro: "Natural wood boards for cutting and serving, each one burned with the Jouzour mark.",
      b1: "Branch-handle board", b1d: "A handle shaped like a small branch, on a wide, flat cutting surface.",
      b2: "Loop-handle board", b2d: "An open loop for carrying or hanging, and a sculpted edge that follows the grain.",
      b3: "Rope-tied paddle board", b3d: "A paddle-shaped board with a small loop handle, tied with natural rope and a Jouzour tag.",
      b4: "Sculpted-handle board", b4d: "A flowing, curved handle with a juice groove around the edge, new design.",
      b5: "Slot-handle board", b5d: "A cut-out handle at the top and a groove around the surface to catch juices.",
      b6: "Slim slot-handle board", b6d: "The same slot handle on a slimmer board, easy to hang and store.",
      b7: "Classic block board", b7d: "A plain, solid board with the Jouzour mark burned into the corner.",
      aboutEyebrow: "The name", aboutTitle: "Jouzour means roots", ringsAlt: "Tree rings",
      aboutBody: "We start from the wood itself, a branch, a root or a plank, and shape it by hand until it fits a room or a kitchen. The grain, knots and cracks stay visible, because they are what make each piece different.",
      f1: "Made by hand", f1d: "Cut, shaped, sanded and finished one piece at a time.",
      f2: "Natural wood", f2d: "Branches, roots and solid boards, left close to how they grew.",
      f3: "Made in Lebanon", f3d: "Built in our workshop in Aadloun.",
      contactEyebrow: "Order or ask", contactTitle: "Tell us what you need",
      contactBody: "Message us to order a piece or to ask about a design.",
      copy: "Copy number", copied: "Copied", copyFail: "Press and hold the number to copy it",
      dtInsta: "Instagram", dtPlace: "Workshop", dtPhone: "Phone",
      place: "Aadloun, Lebanon", mapLink: "Open in Google Maps",
      moreIg: "See more pieces on Instagram",
      ask: "Ask about this piece", zoom: "View larger", close: "Close", prev: "Previous photo", next: "Next photo",
      waGeneral: "Hello, I'd like to order or ask about a piece.",
      waItem: "Hello, I'm interested in: {name}",
      copyright: "\u00A9 2026 Jouzour Wood", footTag: "From roots to your home."
    },
    ar: {
      title: "جذور للأخشاب | أباجورات وألواح خشب يدوية",
      metaDesc: "أباجورات وألواح مطبخ من الخشب الطبيعي، صناعة يدوية من عدلون، لبنان. اطلب عبر واتساب.",
      brandSub: "للأخشاب", navLamps: "الأباجورات", navBoards: "الألواح", navAbout: "من نحن", navContact: "تواصل", navInsta: "إنستغرام",
      heroEyebrow: "صناعة يدوية من عدلون، لبنان", heroTitle: "من جذور… إلى بيتك.",
      heroLead: "أباجورات مصنوعة من أغصان وجذور وكتل خشب طبيعي، وألواح لمطبخك. كل قطعة مصنوعة يدويًا، لذلك لا تتشابه قطعتان.",
      ctaLamps: "شاهد الأباجورات", ctaOrder: "اطلب عبر واتساب",
      heroAlt: "أباجورة من غصن ملفوف بالحبل، ومصباح دافئ معلّق من طرفه",
      lampsEyebrow: "أباجورات طاولة", lampsTitle: "الأباجورات", lampsIntro: "أغصان وحجارة وحبال تتحول إلى أباجورات طاولة بمصابيح دافئة.",
      l1: "أباجورة الغصن المتفرع", l1d: "غصن متفرع بشكله الطبيعي يحمل المصباح فوق قاعدة خشبية داكنة.",
      l2: "أباجورة الغصن والحبل", l2d: "غصن منحنٍ ملفوف بحبل سميك، والمصباح معلّق من طرفه.",
      l3: "أباجورات الشخصيات", l3d: "شخصيتان صغيرتان من الخشب بأذرع وأرجل من الحبل، تجلسان على حافة الرف.",
      l4: "أباجورة الحجر والخشب", l4d: "حجارة متراصة بجانب ذراع خشبية منحنية، تحت غطاء من القماش.",
      l5: "أباجورة الخشب المحروق", l5d: "كتلة خشب بلمسة محروقة داكنة مع مفتاح تشغيل كلاسيكي.",
      l6: "أباجورة الكتلة المخيّطة بالحبل", l6d: "حبل مخيّط عبر الخشب كرباط الحذاء، مع عقدة على الجانب.",
      boardsEyebrow: "للمطبخ", boardsTitle: "من جذور… إلى مطبخك",
      boardsIntro: "ألواح من الخشب الطبيعي للتقطيع والتقديم، وعلى كل لوح ختم جذور محفور بالحرق.",
      b1: "لوح بمقبض غصن", b1d: "مقبض على شكل غصن صغير فوق سطح تقطيع عريض ومستوٍ.",
      b2: "لوح بمقبض دائري", b2d: "مقبض دائري للحمل أو التعليق، وحافة منحوتة تتبع عروق الخشب.",
      b3: "لوح بشكل مجداف", b3d: "لوح على شكل مجداف بمقبض صغير، مربوط بحبل طبيعي وبطاقة جذور.",
      b4: "لوح بمقبض منحوت", b4d: "مقبض منحنٍ انسيابي مع مجرى حول الحافة، تصميم جديد.",
      b5: "لوح بمقبض مفتوح", b5d: "مقبض مفرّغ في الأعلى ومجرى حول السطح لتجميع العصارة.",
      b6: "لوح نحيف بمقبض مفتوح", b6d: "المقبض نفسه على لوح أنحف، سهل التعليق والتخزين.",
      b7: "لوح كلاسيكي", b7d: "لوح سادة من الخشب الصلب، عليه ختم جذور محفور في الزاوية.",
      aboutEyebrow: "عن الاسم", aboutTitle: "اسمنا جذور", ringsAlt: "حلقات جذع الشجرة",
      aboutBody: "نبدأ من الخشب نفسه، غصن أو جذر أو لوح، ونشكّله بأيدينا حتى يناسب البيت أو المطبخ. تبقى العروق والعقد والشقوق ظاهرة، لأنها ما يميّز كل قطعة عن غيرها.",
      f1: "صناعة يدوية", f1d: "تُقطع وتُشكَّل وتُصقل وتُنهى قطعةً قطعة.",
      f2: "خشب طبيعي", f2d: "أغصان وجذور وألواح صلبة، قريبة مما كانت عليه في الطبيعة.",
      f3: "صنع في لبنان", f3d: "تُصنع في ورشتنا في عدلون.",
      contactEyebrow: "اطلب أو اسأل", contactTitle: "قل لنا ماذا تحتاج",
      contactBody: "راسلنا لطلب قطعة أو للاستفسار عن تصميم.",
      copy: "انسخ الرقم", copied: "تم النسخ", copyFail: "اضغط مطولًا على الرقم لنسخه",
      dtInsta: "إنستغرام", dtPlace: "الورشة", dtPhone: "الهاتف",
      place: "عدلون، لبنان", mapLink: "افتح في خرائط جوجل",
      moreIg: "شاهد المزيد من القطع على إنستغرام",
      ask: "اسأل عن هذه القطعة", zoom: "عرض أكبر", close: "إغلاق", prev: "الصورة السابقة", next: "الصورة التالية",
      waGeneral: "مرحبًا، أريد الطلب أو الاستفسار عن قطعة.",
      waItem: "مرحبًا، أريد الاستفسار عن: {name}",
      copyright: "\u00A9 2026 جذور للأخشاب", footTag: "من جذور… إلى بيتك."
    }
  };

  var root = document.documentElement;
  var current = window.JOUZOUR_LANG === "en" ? "en" : "ar";

  function waUrl(msg) { return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(msg); }
  function itemMsg(key) { return T[current].waItem.replace("{name}", T[current][key]); }

  function apply(lang) {
    current = lang;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    var d = T[lang];

    document.title = d.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", d.metaDesc);

    document.querySelectorAll("[data-k]").forEach(function (el) {
      var k = el.getAttribute("data-k");
      if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-ka]").forEach(function (el) {
      var k = el.getAttribute("data-ka");
      if (d[k] != null) el.setAttribute(el.tagName === "IMG" ? "alt" : "aria-label", d[k]);
    });
    document.querySelectorAll("[data-kl]").forEach(function (el) {
      var k = el.getAttribute("data-kl");
      if (d[k] != null) el.setAttribute("aria-label", d[k]);
    });
    document.querySelectorAll(".zoom").forEach(function (b) {
      b.setAttribute("aria-label", d.zoom + ": " + d[b.getAttribute("data-key")]);
    });
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      var k = a.getAttribute("data-wa");
      a.href = waUrl(k === "general" ? d.waGeneral : itemMsg(k));
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    try { localStorage.setItem("jouzour-lang", lang); } catch (e) {}
    root.className = root.className.replace(" pending", "");
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  /* copy number */
  var copyBtn = document.getElementById("copy");
  copyBtn.addEventListener("click", function () {
    var num = "+" + PHONE;
    function say(text) {
      copyBtn.textContent = text;
      setTimeout(function () { copyBtn.textContent = T[current].copy; }, 2200);
    }
    function fallback() {
      var ok = false;
      try {
        var r = document.createRange();
        r.selectNodeContents(document.querySelector("#phone bdi"));
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        ok = document.execCommand("copy");
      } catch (e) {}
      say(ok ? T[current].copied : T[current].copyFail);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(num).then(function () { say(T[current].copied); }, fallback);
    } else { fallback(); }
  });

  /* photo viewer */
  var dlg = document.getElementById("lb");
  if (dlg && typeof dlg.showModal === "function") {
    var items = [].slice.call(document.querySelectorAll(".zoom"));
    var lbImg = document.getElementById("lb-img");
    var lbCap = document.getElementById("lb-cap");
    var lbAsk = document.getElementById("lb-ask");
    var idx = 0;

    function show(i) {
      idx = (i + items.length) % items.length;
      var z = items[idx];
      var im = z.querySelector("img");
      var key = z.getAttribute("data-key");
      lbImg.src = im.currentSrc || im.src;
      lbImg.alt = im.alt;
      lbCap.textContent = T[current][key];
      lbAsk.href = waUrl(itemMsg(key));
    }
    function step(dir) { show(idx + dir); }
    function visualStep(dir) { step(root.dir === "rtl" ? -dir : dir); }

    items.forEach(function (z, i) {
      z.addEventListener("click", function () {
        show(i);
        dlg.showModal();
        root.classList.add("lb-open");
      });
    });
    document.getElementById("lb-close").addEventListener("click", function () { dlg.close(); });
    document.getElementById("lb-prev").addEventListener("click", function () { step(-1); });
    document.getElementById("lb-next").addEventListener("click", function () { step(1); });
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg || e.target.id === "lb-inner") dlg.close();
    });
    dlg.addEventListener("close", function () { root.classList.remove("lb-open"); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") visualStep(1);
      if (e.key === "ArrowLeft") visualStep(-1);
    });
    var x0 = null;
    dlg.addEventListener("touchstart", function (e) { x0 = e.changedTouches[0].clientX; }, { passive: true });
    dlg.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 50) visualStep(dx < 0 ? 1 : -1);
    }, { passive: true });
  } else {
    document.querySelectorAll(".zoom").forEach(function (z) { z.style.cursor = "default"; });
  }

  apply(current);
})();
