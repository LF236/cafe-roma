export interface NavLink {
  href: string;
  label: string;
  mobileLabel: string;
}

export interface Amenity {
  label: string;
  /** SVG path data (24x24 viewBox, stroke icon) */
  d: string;
}

export type ReservationType = "rest" | "hotel";
export type Theme = "light" | "dark";
