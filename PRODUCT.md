# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Locales de Perote y la región: comer, celebrar, buffet dominical; reservar mesa.
- Viajeros y gente de negocios de paso: buscan hospedaje, WiFi, espacio para trabajar.

Turistas de fin de semana y grupos de eventos no confirmados como audiencia.

## Product Purpose

Landing de una sola página para Café Roma: restaurante y hotel boutique (4 habitaciones) en una casona de más de un siglo, Centro Histórico de Perote, Veracruz. Éxito: el visitante reserva mesa o habitación.

## Positioning

Cocina europea (chistorra, chorizo español, pastas de inspiración italiana) y mexicana regional bajo el mismo techo que un hotel boutique, dentro de una casona centenaria. Se come y se duerme en el mismo edificio.

## Operating Context

- Abierto hace cinco años en un edificio con más de 100 años de historia.
- Buffet dominical todos los domingos; niños menores de 5 años sin costo.
- Hotel: 4 habitaciones, solo con reservación previa.
- Amenidades: WiFi, agua caliente, cafetera, sala de trabajo, plancha, sofá cama, tapanco.
- Contenido en español.

## Capabilities and Constraints

- Stack: Astro 7 + Tailwind CSS 4, una página, estructura `src/{pages,components,layouts,styles,scripts,types,utils,config}`.
- Reservación por tipo (restaurante: fecha/personas; hotel: llegada/noches). Hoy el formulario es maqueta (solo muestra confirmación). Debe enviarse por WhatsApp o email; canal exacto por definir.
- Tema claro/oscuro con toggle (persistido en localStorage).
- Placeholders actuales a reemplazar con datos reales: teléfono (282 000 0000), "Ver menú completo" (sin menú), ubicación (consulta de mapa genérica del Centro Histórico).

## Brand Commitments

- Nombre: Café Roma. Ubicación: Perote · Veracruz.
- Tagline vigente: "Un rincón de Europa en el corazón de Perote".

## Evidence on Hand

- Una foto: `public/images/roma.webp` (muro de barricas / salón).
- El dueño entregará después: teléfono real, menú, precios, más fotos. Hasta entonces no inventar menú, precios, reseñas, ni cifras.

## Product Principles

- La reservación es la acción central; cada sección conduce a ella.
- Dos usos, un lugar: restaurante y hotel se presentan como una sola casa, sin competir entre sí.
- Solo hechos confirmados; faltantes quedan marcados, no fabricados.
- Móvil primero: los visitantes llegan desde el teléfono, de paso o local.
