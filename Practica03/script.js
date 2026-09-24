// script.js — Construye el grid e interactúa con el Business Model Canvas.
// Los datos viven en BMC_DATA (data.js); aquí solo se renderizan.

(function () {
  const grid = document.getElementById("bmc-grid");
  const modal = document.getElementById("bmc-modal");
  if (!grid || !modal || typeof BMC_DATA === "undefined") return;

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

  /** Tarjeta del bloque actualmente abierta en el modal (null si ninguna). */
  let activeCard = null;

  /** Crea un <button class="card"> a partir de un dato. */
  function createCard(data) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.dataset.block = data.id;
    card.setAttribute("aria-haspopup", "dialog");

    const icon = document.createElement("span");
    icon.className = "card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = ICONS[data.id] || "";

    const title = document.createElement("span");
    title.className = "card-title";
    title.textContent = data.title;

    const summary = document.createElement("span");
    summary.className = "card-summary";
    summary.textContent = data.resumen || "";

    card.append(icon, title, summary);
    card.addEventListener("click", () => openModal(data, card));
    return card;
  }

  /** Abre el modal con el detalle del bloque indicado. */
  function openModal(data, card) {
    activeCard = card;

    modal.querySelector(".modal-icon").innerHTML = ICONS[data.id] || "";
    modal.querySelector(".modal-title").textContent = data.title;
    modal.querySelector(".modal-subtitle").textContent = EN_NAMES[data.id] || "";
    modal.querySelector(".modal-metric").textContent = METRICS[data.id] || "";
    modal.querySelector(".modal-points").replaceChildren(
      ...data.points.map(renderPoint)
    );

    document.querySelectorAll(".card").forEach((c) => c.classList.remove("is-active"));
    card.classList.add("is-active");
    document.body.classList.add("no-scroll");
    if (!modal.open) modal.showModal();
  }

  /** Renderiza un punto de la lista: flecha verde + encabezado en negrita. */
  function renderPoint(text) {
    const li = document.createElement("li");

    const arrow = document.createElement("span");
    arrow.className = "point-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML =
      '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>';

    const header = document.createElement("strong");
    const colon = text.indexOf(":");
    if (colon !== -1) {
      header.textContent = text.slice(0, colon);
      const rest = document.createElement("span");
      rest.className = "point-detail";
      rest.textContent = text.slice(colon + 1).trim();
      li.append(arrow, header, rest);
    } else {
      header.textContent = text;
      li.append(arrow, header);
    }
    return li;
  }

  // Cierre: botón X, clic fuera del modal y tecla Esc (manejo nativo).
  modal.querySelector(".modal-close").addEventListener("click", () => modal.close());

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  /** Limpieza al cerrar: suelta el scroll, quita el resaltado y devuelve el foco. */
  modal.addEventListener("close", () => {
    document.body.classList.remove("no-scroll");
    document.querySelectorAll(".card").forEach((c) => c.classList.remove("is-active"));
    if (activeCard) {
      activeCard.focus();
      activeCard = null;
    }
  });

  // Render inicial: un botón por cada entrada de BMC_DATA.
  BMC_DATA.forEach((data) => grid.appendChild(createCard(data)));
})();