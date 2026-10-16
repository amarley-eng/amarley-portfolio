/* Shows a labeled placeholder box wherever an image or video file hasn't been added yet.
   To fill a placeholder, just save your file at the path in the tag's src — no code edits needed. */
(function () {
  function toPlaceholder(el) {
    if (el.dataset.swapped) return;
    el.dataset.swapped = "1";
    var box = document.createElement("div");
    box.className = "ph";
    var label = el.getAttribute("data-ph") || "Media placeholder";
    var src = el.getAttribute("src") || (el.querySelector("source") || {}).getAttribute && el.querySelector("source").getAttribute("src");
    box.innerHTML = "<div><strong>" + label + "</strong>" + (src ? "<br><span class='mono'>" + src + "</span>" : "") + "</div>";
    el.replaceWith(box);
  }

  document.querySelectorAll("img[data-ph]").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) toPlaceholder(img);
    else img.addEventListener("error", function () { toPlaceholder(img); });
  });

  document.querySelectorAll("video[data-ph]").forEach(function (v) {
    var fail = function () { toPlaceholder(v); };
    v.addEventListener("error", fail, true);
    var sources = v.querySelectorAll("source");
    if (sources.length) sources[sources.length - 1].addEventListener("error", fail);
    if (v.networkState === 3) fail(); // NETWORK_NO_SOURCE
  });
})();
