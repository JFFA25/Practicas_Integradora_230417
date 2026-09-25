/* ============================================================
   Business Model Canvas de SICPES
   Render del canvas y despliegue de bloques con animación FLIP
   ============================================================ */

(function () {
  'use strict';

  var DATA = window.SICPES_CANVAS;
  var canvas = document.getElementById('canvas');
  var scrim = document.getElementById('scrim');
  var closer = document.getElementById('closer');
  var masthead = document.querySelector('.masthead');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var supportsInert = 'inert' in HTMLElement.prototype;
  var current = null;

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function icon(name) {
    return DATA.icons[name] || '';
  }

  function buildCard(block) {
    var card = make('button', 'card');
    var badge = make('span', 'card__icon');
    var title = make('span', 'card__title', block.title);
    var summary = make('span', 'card__summary', block.summary);

    badge.innerHTML = icon(block.icon);
    title.id = 'title-' + block.id;
    card.type = 'button';
    card.id = 'card-' + block.id;
    card.setAttribute('aria-expanded', 'false');
    card.setAttribute('aria-controls', 'panel-' + block.id);
    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(summary);

    return card;
  }

  function buildPanel(block) {
    var panel = make('div', 'panel');
    var body = make('div', 'panel__body');
    var meta = make('div', 'panel__meta');
    var list = make('ul', 'panel__points');

    meta.appendChild(make('span', 'panel__subtitle', block.subtitle));
    meta.appendChild(make('span', 'panel__metric', block.metric));
    body.appendChild(meta);
    body.appendChild(make('p', 'panel__eyebrow', 'Detalle completo'));

    block.points.forEach(function (point) {
      var item = make('li', 'point');
      var mark = make('span', 'point__mark');
      var text = make('div', 'point__text');

      mark.innerHTML = icon('chevron');
      text.appendChild(make('span', 'point__label', point.label));
      text.appendChild(make('span', 'point__detail', point.detail));
      item.appendChild(mark);
      item.appendChild(text);
      list.appendChild(item);
    });

    body.appendChild(list);
    panel.id = 'panel-' + block.id;
    panel.appendChild(buildCard(block));
    panel.appendChild(body);

    return panel;
  }

  function render() {
    var fragment = document.createDocumentFragment();

    DATA.blocks.forEach(function (block) {
      var slot = make('div', 'slot');
      slot.dataset.block = block.id;
      slot.appendChild(buildPanel(block));
      fragment.appendChild(slot);
    });

    canvas.appendChild(fragment);

    canvas.addEventListener('click', function (event) {
      var card = event.target.closest('.card');
      if (!card) return;
      var slot = card.closest('.slot');
      if (current && current.slot === slot) {
        close();
      } else {
        open(slot);
      }
    });

    scrim.addEventListener('click', function () { close(); });
    closer.addEventListener('click', function () { close(); });
    document.addEventListener('keydown', onKeydown);
  }

  function flip(panel, from, to, closing) {
    var dx = from.left - to.left;
    var dy = from.top - to.top;
    var sx = to.width > 0 ? from.width / to.width : 1;
    var sy = to.height > 0 ? from.height / to.height : 1;
    var collapsed = {
      transform: 'translate(' + dx + 'px, ' + dy + 'px) scale(' + sx + ', ' + sy + ')',
      borderRadius: '14px'
    };
    var expanded = { transform: 'none', borderRadius: '18px' };

    panel.style.willChange = 'transform';

    var anim = panel.animate(closing ? [expanded, collapsed] : [collapsed, expanded], {
      duration: 400,
      easing: 'ease-in-out'
    });

    anim.addEventListener('finish', function () {
      panel.style.willChange = '';
    });

    return anim;
  }

  function fadeBody(panel) {
    var body = panel.querySelector('.panel__body');
    if (!body || !body.animate) return;
    body.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 260,
      delay: 90,
      easing: 'ease-out',
      fill: 'backwards'
    });
  }

  function setOthersInert(state) {
    if (!supportsInert) return;
    Array.prototype.forEach.call(canvas.querySelectorAll('.slot'), function (slot) {
      slot.inert = state && !slot.classList.contains('is-open');
    });
    if (masthead) masthead.inert = state;
  }

  function open(slot) {
    if (current) close(true);

    var panel = slot.firstElementChild;
    var card = panel.querySelector('.card');
    var start = card.getBoundingClientRect();

    slot.style.setProperty('--slot-h', start.height + 'px');
    slot.classList.add('is-open');
    panel.classList.remove('is-closing');
    panel.classList.add('is-open');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-labelledby', 'title-' + slot.dataset.block);
    card.setAttribute('aria-expanded', 'true');

    scrim.hidden = false;
    closer.hidden = false;
    document.body.classList.add('is-open', 'is-locked');
    setOthersInert(true);
    window.requestAnimationFrame(function () { scrim.classList.add('is-visible'); });

    var end = panel.getBoundingClientRect();
    current = { slot: slot, panel: panel, card: card };

    if (reduceMotion.matches) {
      panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, easing: 'ease-out' });
    } else {
      flip(panel, start, end, false);
      fadeBody(panel);
    }

    card.focus();
  }

  function close(instant) {
    if (!current) return;

    var slot = current.slot;
    var panel = current.panel;
    var card = current.card;

    current = null;

    // Feedback inmediato: se anuncia el cierre y se atenúa el fondo,
    // pero el panel SIGUE con la clase "is-open" (tamaño grande) hasta
    // que la animación termine. Quitarla antes causaba el salto de
    // texto/estilos a mitad de la animación.
    card.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-locked');
    scrim.classList.remove('is-visible');
    closer.hidden = true;
    panel.classList.add('is-closing');

    function finishClose() {
      panel.removeAttribute('role');
      panel.removeAttribute('aria-modal');
      panel.removeAttribute('aria-labelledby');
      panel.classList.remove('is-open', 'is-closing');
      slot.classList.remove('is-open');
      document.body.classList.remove('is-open');
      setOthersInert(false);
      scrim.hidden = true;
      slot.style.removeProperty('--slot-h');
      card.focus({ preventScroll: true });
    }

    if (instant) {
      finishClose();
      return;
    }

    if (reduceMotion.matches) {
      panel
        .animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, easing: 'ease-out' })
        .addEventListener('finish', finishClose);
      return;
    }

    // El panel sigue "grande" (position: fixed) en este momento, así que
    // su rect actual es el tamaño real. El rect pequeño de destino se
    // toma del slot: aunque el panel esté fuera del flujo normal, el
    // slot conserva la posición y altura (--slot-h) de la tarjeta
    // colapsada original, incluso si la ventana cambió de tamaño
    // mientras el bloque estaba abierto.
    var bigRect = panel.getBoundingClientRect();
    var smallRect = slot.getBoundingClientRect();

    flip(panel, smallRect, bigRect, true).addEventListener('finish', finishClose);
  }

  function onKeydown(event) {
    if (!current) return;

    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== 'Tab') return;

    var focusable = Array.prototype.slice.call(
      current.panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    );
    focusable.push(closer);

    if (!focusable.length) return;

    var index = focusable.indexOf(document.activeElement);
    if (index === -1) {
      event.preventDefault();
      focusable[0].focus();
      return;
    }

    var next = event.shiftKey ? index - 1 : index + 1;
    if (next < 0 || next >= focusable.length) next = (next + focusable.length) % focusable.length;
    event.preventDefault();
    focusable[next].focus();
  }

  render();
})();