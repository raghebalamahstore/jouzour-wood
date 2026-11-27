/* Runs first, in <head>, so the page opens in the right language and direction.
   Change DEFAULT_LANG to "en" to make English the default for new visitors. */
(function () {
  var DEFAULT_LANG = "ar";
  var d = document.documentElement;
  var lang = DEFAULT_LANG;
  try {
    var saved = localStorage.getItem("jouzour-lang");
    if (saved === "ar" || saved === "en") lang = saved;
  } catch (e) {}
  d.lang = lang;
  d.dir = lang === "ar" ? "rtl" : "ltr";
  window.JOUZOUR_LANG = lang;
  /* hide the page for a moment until main.js has filled in the text */
  d.className += " pending";
  setTimeout(function () { d.className = d.className.replace(" pending", ""); }, 1500);
})();
