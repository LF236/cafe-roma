const toggle = document.querySelector<HTMLElement>("[data-menu-toggle]");
const panel = document.querySelector<HTMLElement>("#mobile-menu");

const setOpen = (open: boolean) => {
  panel?.classList.toggle("hidden", !open);
  toggle?.setAttribute("aria-expanded", String(open));
};

toggle?.addEventListener("click", () => setOpen(panel?.classList.contains("hidden") ?? false));
panel?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
