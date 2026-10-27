/* Rise Personal: mobile menu. Builds a hamburger + slide-down panel from the page's own nav links. */
(function () {
  "use strict";
  var header = document.querySelector(".nav");
  var inner = document.querySelector(".nav-inner");
  var links = document.querySelectorAll(".nav-links a");
  if (!header || !inner || !links.length) return;

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "nav-toggle";
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "nav-panel");
  btn.setAttribute("aria-label", "Open menu");
  btn.innerHTML = '<span class="bars" aria-hidden="true"><i></i><i></i><i></i></span>';
  inner.appendChild(btn);

  var panel = document.createElement("div");
  panel.className = "nav-panel";
  panel.id = "nav-panel";
  panel.hidden = true;
  var nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Menu");
  var ul = document.createElement("ul");
  links.forEach(function (a) {
    var li = document.createElement("li");
    var c = a.cloneNode(true);
    li.appendChild(c);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  panel.appendChild(nav);
  header.appendChild(panel);

  var open = false, t = null;
  function setOpen(v) {
    if (v === open) return;
    open = v;
    clearTimeout(t);
    btn.setAttribute("aria-expanded", v ? "true" : "false");
    btn.setAttribute("aria-label", v ? "Close menu" : "Open menu");
    if (v) {
      panel.hidden = false;
      requestAnimationFrame(function () { requestAnimationFrame(function () { panel.classList.add("open"); }); });
    } else {
      panel.classList.remove("open");
      t = setTimeout(function () { panel.hidden = true; }, 260);
    }
  }
  btn.addEventListener("click", function () { setOpen(!open); });
  panel.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && open) { setOpen(false); btn.focus(); } });
  document.addEventListener("click", function (e) { if (open && !header.contains(e.target)) setOpen(false); });
  var mq = window.matchMedia("(min-width:70rem)");
  var onMq = function () { if (mq.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener("change", onMq); else if (mq.addListener) mq.addListener(onMq);
})();
