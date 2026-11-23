import type { Amenity, NavLink } from "../types";

export const SITE = {
  name: "Café Roma",
  location: "Perote · Veracruz",
  tagline: "Un rincón de Europa en el corazón de Perote",
  phone: "282 000 0000",
  mapQuery: "Centro+Hist%C3%B3rico+Perote+Veracruz",
  themeStorageKey: "cafeRomaTheme",
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: "#nosotros", label: "Nosotros", mobileLabel: "Nosotros" },
  { href: "#restaurante", label: "Restaurante", mobileLabel: "Restaurante" },
  { href: "#instalaciones", label: "Instalaciones", mobileLabel: "Instalaciones" },
  { href: "#hotel", label: "Hotel", mobileLabel: "Hotel boutique" },
  { href: "#contacto", label: "Contacto", mobileLabel: "Ubicación y contacto" },
];

export const AMENITIES: Amenity[] = [
  { label: "WiFi", d: "M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01" },
  { label: "Agua caliente", d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5.5 12 2.5c-.5 3-2 5.4-4 7S5 13 5 15a7 7 0 0 0 7 7z" },
  { label: "Cafetera", d: "M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2" },
  { label: "Sala de trabajo", d: "M2 20h20M4 16V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10zM10 9h4" },
  { label: "Plancha", d: "M3 18h18l-1-5a6 6 0 0 0-6-5H7M7 8V5h10M9 13h.01M13 13h.01" },
  { label: "Sofá cama", d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0zM4 18v2M20 18v2" },
  { label: "Tapanco", d: "M3 21V10l9-7 9 7v11M3 14h18M8 14v7M16 14v7" },
];
