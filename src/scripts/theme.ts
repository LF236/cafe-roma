import type { Theme } from "../types";

const KEY = "cafeRomaTheme";

const current = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

const apply = (t: Theme) => {
  document.documentElement.dataset.theme = t;
  document.querySelectorAll<HTMLElement>("[data-theme-toggle]").forEach((b) => {
    b.setAttribute("aria-label", t === "dark" ? "Modo claro" : "Modo oscuro");
    b.title = b.getAttribute("aria-label") ?? "";
  });
};

apply(current());

document.addEventListener("click", (e) => {
  const btn = (e.target as HTMLElement).closest("[data-theme-toggle]");
  if (!btn) return;
  const next: Theme = current() === "dark" ? "light" : "dark";
  try {
    localStorage.setItem(KEY, next);
  } catch {}
  apply(next);
});
