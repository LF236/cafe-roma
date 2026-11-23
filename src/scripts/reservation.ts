import type { ReservationType } from "../types";
import { reservationCopy } from "../utils/reservation";

const form = document.querySelector<HTMLFormElement>("#reservation-form");
const done = document.querySelector<HTMLElement>("#reservation-done");

const setType = (type: ReservationType) => {
  if (!form) return;
  form.dataset.type = type;
  const c = reservationCopy(type);
  form.querySelector("[data-date-label]")!.textContent = c.dateLabel;
  form.querySelector("[data-count-label]")!.textContent = c.countLabel;
  form.querySelector("[data-submit]")!.textContent = c.submitLabel;
  form.querySelectorAll<HTMLElement>("[data-pick]").forEach((b) => {
    b.dataset.active = String(b.dataset.pick === type);
  });
  form.classList.remove("hidden");
  done?.classList.add("hidden");
};

document.querySelectorAll<HTMLElement>("[data-pick]").forEach((b) =>
  b.addEventListener("click", () => setType(b.dataset.pick as ReservationType)),
);
// External CTAs (hero, header, hotel) that also preselect the type
document.querySelectorAll<HTMLElement>("[data-pick-cta]").forEach((a) =>
  a.addEventListener("click", () => setType(a.dataset.pickCta as ReservationType)),
);

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("hidden");
  done?.classList.remove("hidden");
});

document.querySelector("#reservation-reset")?.addEventListener("click", () => setType("rest"));
