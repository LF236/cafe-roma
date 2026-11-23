---
name: Café Roma
description: Casona centenaria en Perote: vino, crema y ámbar, serifas itálicas y líneas finas.
colors:
  wine: "#7b1c2e"
  wine-hover: "#932338"
  cream: "#faf7f2"
  sand: "#f5e6c8"
  espresso: "#1e0f08"
  gold-brand: "#d4922a"
  amber-brand: "#b8651a"
  ink: "#2c1a0e"
  ink-soft: "#4a3324"
  gold-text: "#8e4a12"
  amber-text: "#9a5414"
  mute: "#6b5442"
  footer-light: "#eadbc0"
  dark-bg-a: "#24120a"
  dark-card: "#2a160c"
  dark-ink-soft: "#e2d3bb"
  dark-mute: "#bfae92"
  dark-footer: "#140904"
typography:
  display:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(64px, 14vw, 136px)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(36px, 5vw, 56px)"
    fontWeight: 500
    lineHeight: 1.08
  title:
    fontFamily: "Playfair Display, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.2
  lead:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.5
  script:
    fontFamily: "Great Vibes, cursive"
    fontSize: "clamp(30px, 6vw, 46px)"
    lineHeight: 1.15
  body:
    fontFamily: "Lato, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Lato, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.3em"
rounded:
  none: "0px"
spacing:
  section-x: "20px"
  section-y: "clamp(72px, 10vw, 128px)"
  gap-grid: "clamp(40px, 6vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "0 32px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.wine-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.gold-text}"
    rounded: "{rounded.none}"
    padding: "0 32px"
    height: "52px"
---

# Design System: Café Roma

## Overview

**Creative North Star: "La Posada Centenaria"**

Una casa vieja que acoge: muros de barrica, manteles blancos, una habitación arriba. El sistema es cálido y sereno, hecho de vino profundo, crema, arena y ámbar, con serifas itálicas que sugieren letrero de trattoria y un script puntual para la voz del anfitrión. Se lee como una posada, no como un restaurante de cadena: tranquilo, sin prisa, de papel y madera.

La densidad es holgada. Secciones de 72–128px de aire vertical, una columna de texto angosta, una imagen enmarcada. La profundidad viene del color de fondo y de líneas finas, no de sombras. Todo es ortogonal: esquinas rectas, bordes de 1px, una regla dorada de 4px que separa secciones.

El tema claro y el oscuro son dos iluminaciones de la misma casa: día (crema y arena) y noche (espresso y ámbar), con el vino cediendo su lugar al ámbar en oscuro.

**Key Characteristics:**
- Vino como voz principal; ámbar/dorado como acento de borde y regla.
- Playfair itálica para el nombre y los grandes titulares; Cormorant para frases de apertura; Lato para todo lo funcional.
- Esquinas 0px, bordes hairline, profundidad tonal.
- Tema claro/oscuro con paridad completa.
- Imagen cálida y teñida de vino bajo el hero.

## Colors

Paleta de bodega y mantel: vino y espresso sobre crema y arena, con ámbar dorado como único brillo.

### Primary
- **Vino de Casona** (#7b1c2e): botones primarios, bloque del logotipo, fondo de la sección Hotel, selección de texto. Hover: **Vino Vivo** (#932338).

### Secondary
- **Oro de Barrica** (#d4922a): borde del botón primario, regla de 4px, iconos del hero, acento principal en oscuro.
- **Ámbar Tostado** (#b8651a): extremos de la regla dorada y marco desplazado de la foto.

### Neutral
- **Crema Mantel** (#faf7f2): fondo base claro (bgB), texto sobre vino.
- **Arena Cálida** (#f5e6c8): fondo alterno claro (bgA), tarjetas, texto secundario sobre vino/espresso.
- **Espresso de Cava** (#1e0f08): fondo base oscuro, superficie bajo la foto del hero.
- **Tinta de Café** (#2c1a0e) / **Tinta Suave** (#4a3324): texto principal y secundario en claro.
- **Oro Oscuro de Texto** (#8e4a12): eyebrows y títulos dorados en claro (contraste AA sobre crema).
- **Ámbar de Texto** (#9a5414), **Humo Tostado** (#6b5442): apoyos de texto.
- **Fondo Nocturno** (#24120a), **Tarjeta Nocturna** (#2a160c), **Tinta Nocturna Suave** (#e2d3bb), **Humo Nocturno** (#bfae92), **Pie Nocturno** (#140904): equivalentes del tema oscuro. En oscuro, el "vino de texto" pasa a ámbar claro (#e0a04a).

### Named Rules
**The Day-Night Pair Rule.** Cada color de texto o acento tiene su par claro/oscuro en variables CSS (`--ink`, `--gold`, `--wine`…). Nunca fijar un hex de texto en un componente.

**The Gold Is a Line Rule.** El oro/ámbar aparece como borde, regla o icono, no como relleno amplio. Su rareza es el acento.

## Typography

**Display Font:** Playfair Display (serif)
**Serif Font:** Cormorant Garamond (serif)
**Body Font:** Lato (sans-serif)
**Script Font:** Great Vibes (cursive)

**Character:** Playfair da la fachada de letrero europeo, Cormorant susurra frases de bienvenida, Lato mantiene la funcionalidad clara y Great Vibes aparece solo como firma.

### Hierarchy
- **Display** (500 itálica, clamp(64px,14vw,136px), 0.95): nombre "Café Roma" en el hero.
- **Headline** (500, clamp(36px,5vw,56px), 1.08): títulos de sección; Hotel sube a clamp(44px,6.5vw,72px) en itálica.
- **Title** (500, 28px): títulos de las tres columnas del restaurante.
- **Lead** (Cormorant 400, 22px, 1.45–1.5): frases de apertura bajo cada título, en itálica cuando se desea voz.
- **Script** (clamp(30px,6vw,46px)): tagline del hero y el "Grazie mille" del mensaje de éxito.
- **Body** (Lato 400, 16px, 1.7–1.75): párrafos de apoyo, sin superar ~70ch.
- **Label** (Lato 700, 12px, 0.3em, mayúsculas): eyebrows de sección. Botones: 14px, 0.14em.

### Named Rules
**The Italic Is the Sign Rule.** La itálica de Playfair se reserva para el nombre y el título de Hotel; los demás titulares van en romana.

**The One Script Rule.** Great Vibes solo en dos lugares: el tagline y la confirmación. No para etiquetas ni navegación.

## Layout

Contenedor centrado de 1140px (max-w-285) para secciones, 1200px (max-w-300) para el encabezado. Secciones con padding lateral de 20px y vertical clamp(72px,10vw,128px). Rejillas `auto-fit` con `minmax(min(100%,420px),1fr)` para pares texto–imagen; la brecha crece de 40px a 88px con el viewport. Rejillas de tres columnas (restaurante) y de amenidades usan hairlines internas en lugar de tarjetas. El menú de escritorio aparece a 1080px; debajo, hamburguesa. Alternancia de fondo por sección: arena (Nosotros), crema (Restaurante, Contacto), vino (Hotel). Una regla dorada de 4px marca los cortes.

## Elevation & Depth

Plano por defecto. La profundidad se logra con alternancia de fondos y hairlines (`--line`: vino 20% en claro, oro 30% en oscuro). La única sombra es la de la foto de Nosotros, que se acompaña de un marco de ámbar desplazado 14px.

### Shadow Vocabulary
- **Foto enmarcada** (`box-shadow: 0 20px 40px rgba(30,15,8,.25)`): solo sobre la imagen de Nosotros.
- **Encabezado** (`backdrop-filter: blur(4px)` sobre `--hdr` 94% opaco): se separa por un borde inferior, no por sombra.

### Named Rules
**The Flat-By-Default Rule.** Sin sombras en tarjetas, botones ni campos. La profundidad es tonal y lineal.

## Shapes

Esquinas rectas en todo (0px): botones, campos, tarjetas, imágenes. Bordes de 1px en vino/oro/arena traslúcidos; marcos duplicados desplazados como único gesto decorativo. Divisores de hairline entre columnas.

## Components

### Buttons
- **Shape:** rectángulo recto, alto mínimo 52px, padding horizontal 32px.
- **Primary** (`btn-wine`): fondo Vino de Casona, texto crema, borde Oro de Barrica, Lato 700 mayúsculas 14px con 0.14em de tracking. Hover a Vino Vivo.
- **Outline:** transparente, borde y texto en oro (Ver menú completo) o crema sobre el hero; hover rellena con color de la paleta.
- **Inverso** (Hotel): fondo crema, texto vino; hover oro con espresso.
- Transición de color, sin movimiento de transformación.

### Cards / Containers
- **Corner Style:** recto.
- **Background:** Arena Cálida (claro) / Tarjeta Nocturna (oscuro).
- **Border:** 1px `--line`.
- **Internal Padding:** clamp(24px,4vw,40px).

### Inputs / Fields
- **Style:** borde de 1px `--field` (tinta 30% / arena 35%), fondo transparente, sin radio.
- **Selector de tipo:** dos botones en una caja con borde dorado; activo en vino (claro) u oro con espresso (oscuro).
- **Confirmación:** reemplaza el formulario con "Grazie mille" en script.

### Navigation
- Encabezado fijo con 94% de opacidad, borde inferior hairline. Logotipo en bloque vino con nombre en Playfair itálica y ubicación en 8px mayúsculas. Enlaces Lato 13px mayúsculas con 0.12em; CTA "Reservar mesa" como botón vino con borde dorado. Móvil: lista en Cormorant 24px con separadores hairline. Conmutador de tema junto al menú.

### Amenidades (componente firma)
Rejilla de celdas con hairlines sand/25 en la sección Hotel: icono de línea (stroke 1.5) y etiqueta de 15px en crema.

## Do's and Don'ts

### Do:
- **Do** usar variables de tema (`text-ink`, `text-gold`, `bg-bga`) para todo color de texto y fondo.
- **Do** mantener esquinas en 0px y bordes de 1px.
- **Do** reservar el vino para la acción principal y los bloques de marca.
- **Do** separar secciones con la regla dorada de 4px o con cambio de fondo.
- **Do** mantener objetivos táctiles de 44–52px.

### Don't:
- **Don't** redondear botones, campos ni tarjetas.
- **Don't** añadir sombras a componentes; la profundidad es tonal.
- **Don't** usar Great Vibes fuera del tagline y la confirmación.
- **Don't** usar oro como relleno extenso; es línea y acento.
- **Don't** fijar hex de texto; rompe el tema oscuro.
