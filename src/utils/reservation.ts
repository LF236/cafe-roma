import type { ReservationType } from "../types";

export const reservationCopy = (type: ReservationType) =>
  type === "hotel"
    ? { dateLabel: "Llegada", countLabel: "Noches", submitLabel: "Solicitar habitación" }
    : { dateLabel: "Fecha", countLabel: "Personas", submitLabel: "Reservar mesa" };
