const toggle = document.querySelector("[data-menu-toggle]");
const panel = document.querySelector("#mobile-menu");

toggle?.addEventListener("click", () => panel?.classList.toggle("hidden"));
panel?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => panel.classList.add("hidden")),
);
