// script.js — Construye el grid e interactúa con el Business Model Canvas.
// Los datos viven en BMC_DATA (data.js); aquí solo se renderizan.
// El detalle se muestra expandiendo la propia tarjeta (técnica FLIP),
// sin modal: la tarjeta crece hasta casi toda la pantalla y se contrae
// de regreso a su celda exacta del grid.

(function () {
  const grid = document.getElementById("bmc-grid");
  const overlay = document.getElementById("bmc-overlay");
  if (!grid || !overlay || typeof BMC_DATA === "undefined") return;

  // Íconos SVG monocromáticos por bloque (trazo se controla desde styles.css).
  const ICONS = {
    "key-partners":
      '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    "key-activities":
      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    "key-resources":
      '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    "value-props":
      '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    "customer-relations":
      '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    channels:
      '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    "customer-segments":
      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    "cost-structure":
      '<svg viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>',
    "revenue-streams":
      '<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  };

  // Nombre en inglés de cada bloque del canvas.
  const EN_NAMES = {
    "key-partners": "Key Partners",
    "key-activities": "Key Activities",
    "key-resources": "Key Resources",
    "value-props": "Value Proposition",
    "customer-relations": "Customer Relationships",
    channels: "Channels",
    "customer-segments": "Customer Segments",
    "cost-structure": "Cost Structure",
    "revenue-streams": "Revenue Streams",
  };

  // Etiqueta con la métrica de cada bloque.
  const METRICS = {
    "key-partners": "5 tipos de socios",
    "key-activities": "5 actividades clave",
    "key-resources": "5 recursos centrales",
    "value-props": "5 propuestas de valor",
    "customer-relations": "4 formas de relación",
    channels: "5 canales de entrega",
    "customer-segments": "5 segmentos de clientes",
    "cost-structure": "5 áreas de costo",
    "revenue-streams": "5 fuentes de ingresos",
  };

  // Duración (ms) de la animación FLIP de crecimiento / contracción.
  const EXPAND_MS = 400;

  /** Tarjeta actualmente expandida (null si ninguna). */
  let activeCard = null;
  /** Animaciones de expansión/contracción en curso. */
  let animCount = 0;

  const isReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const beginAnimation = () => animCount++;
  const endAnimation = () => {
    animCount = Math.max(0, animCount - 1);
  };
  const isAnimating = () => animCount > 0;

  /** Crea un <button class="card"> a partir de un dato. */
  function createCard(data) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.dataset.block = data.id;
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-expanded", "false");

    const icon = document.createElement("span");
    icon.className = "card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = ICONS[data.id] || "";

    const title = document.createElement("span");
    title.className = "card-title";
    title.id = `card-title-${data.id}`;
    title.textContent = data.title;

    const summary = document.createElement("span");
    summary.className = "card-summary";
    summary.textContent = data.resumen || "";

    card.append(icon, title, summary);

    card.addEventListener("click", () => toggleCard(card, data));
    card.addEventListener("keydown", trapFocus);
    return card;
  }

  /** Atrapa el foco dentro de la tarjeta expandida (dialog). */
  function trapFocus(e) {
    if (e.key !== "Tab") return;
    const dialog = e.currentTarget;
    const close = dialog.querySelector(".expand-close");
    if (!close) return;

    const order = [dialog, close];
    const index = order.indexOf(document.activeElement);
    if (index === -1) return;

    const target = e.shiftKey
      ? order[(index - 1 + order.length) % order.length]
      : order[(index + 1) % order.length];
    if (target !== document.activeElement) {
      e.preventDefault();
      target.focus();
    }
  }

  /** Abre (o cierra) la tarjeta al hacer clic en ella. */
  function toggleCard(card, data) {
    if (isAnimating()) return;

    // Ya hay otra expandida: se cierra esa y se abre la nueva.
    if (activeCard && activeCard !== card) {
      closeCard(activeCard, { returnFocus: false });
      openCard(card, data);
      return;
    }

    // Hacer clic de nuevo en la tarjeta expandida la contrae.
    if (activeCard === card) {
      closeCard(card);
      return;
    }

    openCard(card, data);
  }

  /** Expande la tarjeta con animación FLIP desde su tamaño real. */
  function openCard(card, data) {
    const first = card.getBoundingClientRect();

    // Espacio reservado en el grid: evita que el resto del canvas se mueva.
    const ghost = document.createElement("span");
    ghost.className = "card-ghost";
    ghost.dataset.block = card.dataset.block;
    ghost.setAttribute("aria-hidden", "true");
    card.after(ghost);

    buildExpandedContent(card, data);

    card.classList.add("is-expanded", "is-active");
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-modal", "true");
    card.setAttribute("aria-labelledby", `card-title-${data.id}`);
    card.setAttribute("aria-expanded", "true");

    overlay.classList.add("is-visible");
    document.body.classList.add("no-scroll");

    const last = card.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const sx = first.width / last.width;
    const sy = first.height / last.height;

    activeCard = card;

    // Sin movimiento reducido: la tarjeta solo aparece con fade.
    if (isReducedMotion() || typeof card.animate !== "function") return;

    beginAnimation();
    const flip = card.animate(
      [
        {
          transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
          transformOrigin: "top left",
        },
        { transform: "none", transformOrigin: "top left" },
      ],
      { duration: EXPAND_MS, easing: "ease-in-out", fill: "backwards" }
    );
    flip.onfinish = endAnimation;
    flip.oncancel = endAnimation;
  }

  /** Contrae la tarjeta y la devuelve a su celda exacta (FLIP inverso). */
  function closeCard(card, { returnFocus = true } = {}) {
    const from = card.getBoundingClientRect();
    const sibling = card.nextElementSibling;
    const ghost = sibling && sibling.classList.contains("card-ghost") ? sibling : null;
    const to = ghost ? ghost.getBoundingClientRect() : from;

    const finish = () => {
      card.classList.remove("is-expanded", "is-active");
      card.removeAttribute("role");
      card.removeAttribute("aria-modal");
      card.removeAttribute("aria-labelledby");
      card.setAttribute("aria-expanded", "false");
      cleanupExpanded(card);
      if (ghost) ghost.remove();

      if (activeCard === card) {
        activeCard = null;
        overlay.classList.remove("is-visible");
        document.body.classList.remove("no-scroll");
        if (returnFocus) card.focus();
      }
    };

    const canAnimate =
      !isReducedMotion() &&
      typeof card.animate === "function" &&
      from.width > 0 &&
      to.width > 0;

    if (!canAnimate) {
      finish();
      return;
    }

    beginAnimation();
    const tx = to.left - from.left;
    const ty = to.top - from.top;
    const tsx = to.width / from.width;
    const tsy = to.height / from.height;

    const flip = card.animate(
      [
        { transform: "none", transformOrigin: "top left" },
        {
          transform: `translate(${tx}px, ${ty}px) scale(${tsx}, ${tsy})`,
          transformOrigin: "top left",
        },
      ],
      { duration: EXPAND_MS, easing: "ease-in-out" }
    );
    const done = () => {
      finish();
      endAnimation();
    };
    flip.onfinish = done;
    flip.oncancel = done;
  }

  /** Añade el contenido propio de la vista expandida a la tarjeta. */
  function buildExpandedContent(card, data) {
    const close = document.createElement("button");
    close.type = "button";
    close.className = "expand-close";
    close.setAttribute("aria-label", "Cerrar detalle");
    close.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
    close.addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeCard === card && !isAnimating()) closeCard(card);
    });

    const subtitle = document.createElement("span");
    subtitle.className = "card-subtitle";
    subtitle.textContent = EN_NAMES[data.id] || "";

    const metric = document.createElement("span");
    metric.className = "card-metric";
    metric.textContent = METRICS[data.id] || "";

    const label = document.createElement("span");
    label.className = "card-label";
    label.textContent = "Detalle completo";

    const points = document.createElement("span");
    points.className = "card-points";
    data.points.forEach((point) => points.appendChild(renderPoint(point)));

    card.append(subtitle, metric, label, points, close);
  }

  /** Quita el contenido temporal de la vista expandida. */
  function cleanupExpanded(card) {
    card
      .querySelectorAll(
        ".card-subtitle, .card-metric, .card-label, .card-points, .expand-close"
      )
      .forEach((node) => node.remove());
  }

  /** Renderiza un punto: flecha verde + encabezado (arriba) + descripción (debajo). */
  function renderPoint(text) {
    const point = document.createElement("span");
    point.className = "card-point";

    const arrow = document.createElement("span");
    arrow.className = "point-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>';

    const wrap = document.createElement("span");
    wrap.className = "point-text";

    const header = document.createElement("strong");
    const colon = text.indexOf(":");
    if (colon !== -1) {
      header.textContent = text.slice(0, colon);
      const detail = document.createElement("span");
      detail.className = "point-detail";
      detail.textContent = text.slice(colon + 1).trim();
      wrap.append(header, detail);
    } else {
      header.textContent = text;
      wrap.append(header);
    }

    point.append(arrow, wrap);
    return point;
  }

  // Cierre con la tecla Esc.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeCard && !isAnimating()) {
      closeCard(activeCard);
    }
  });

  // Cierre al hacer clic en el overlay (margen alrededor de la tarjeta).
  overlay.addEventListener("click", () => {
    if (activeCard && !isAnimating()) closeCard(activeCard);
  });

  // Render inicial: un botón por cada entrada de BMC_DATA.
  BMC_DATA.forEach((data) => grid.appendChild(createCard(data)));
})();