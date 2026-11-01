// ==========================================================================
// DORALICE CONFEITARIA AFETIVA & CAFÉ - APP CONTROLLER
// Inspirado na elegância de transição e estética de madie.es
// ==========================================================================

import { CATEGORIES, PRODUCTS, TESTIMONIALS } from './products.js';

// Configuration
const CONFIG = {
  whatsappNumber: '5511999998888', // Altere para o seu WhatsApp ou do cliente
  storeHours: {
    openDays: [2, 3, 4, 5, 6, 0], // Terça a Domingo (0 = Domingo)
    openHour: 10,
    closeHour: 19
  },
  deliveryFee: 15.00
};

// Application State
const state = {
  currentCategory: 'todos',
  searchQuery: '',
  cart: JSON.parse(localStorage.getItem('doralice_cart') || '[]'),
  deliveryMethod: 'pickup', // 'pickup' | 'delivery'
  giftCard: false,
  soundEnabled: true
};

// Web Audio API Micro-sound Generator (No external dependencies)
function playGentleChime(type = 'add') {
  if (!state.soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    if (type === 'add') {
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
    } else {
      osc.frequency.setValueAtTime(783.99, ctx.currentTime); // G5
      osc.frequency.exponentialRampToValueAtTime(523.25, ctx.currentTime + 0.15); // C5
    }

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {
    // AudioContext blocked or not supported
  }
}

// Toast Notifications
export function showToast(message, icon = '✨') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span>${icon}</span>
    <span class="font-medium">${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// Format Currency BRL
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

// ==========================================================================
// 1. SIGNATURE OVERLAY NAVIGATION (Madie Style)
// ==========================================================================
function initNavigation() {
  const overlay = document.getElementById('nav-overlay');
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const navLinks = document.querySelectorAll('.overlay-nav-link');

  function openMenu() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    playGentleChime('add');
    if (window.gsap) {
      window.gsap.fromTo(
        '.overlay-anim-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.15 }
      );
    }
  }

  function closeMenu() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ==========================================================================
// 2. LIVE STORE STATUS (Horário de Funcionamento em Tempo Real)
// ==========================================================================
function updateStoreStatus() {
  const statusBadge = document.getElementById('store-status-badge');
  const statusText = document.getElementById('store-status-text');
  const statusDot = document.getElementById('store-status-dot');
  if (!statusBadge || !statusText || !statusDot) return;

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const isOpen = CONFIG.storeHours.openDays.includes(day) && 
                 hour >= CONFIG.storeHours.openHour && 
                 hour < CONFIG.storeHours.closeHour;

  if (isOpen) {
    statusDot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-green';
    statusText.textContent = 'Atelier Aberto Agora (Jardins)';
    statusText.className = 'text-xs font-semibold text-emerald-800';
    statusBadge.className = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200';
  } else {
    statusDot.className = 'w-2.5 h-2.5 rounded-full bg-amber-500';
    statusText.textContent = 'Fechado no momento — Reabrimos às 10h';
    statusText.className = 'text-xs font-semibold text-amber-900';
    statusBadge.className = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200';
  }
}

// ==========================================================================
// 3. PRODUCT CATALOG RENDERING & FILTERING
// ==========================================================================
function initCatalog() {
  const tabsContainer = document.getElementById('category-tabs');
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('product-search');

  // Render Category Tabs
  if (tabsContainer) {
    tabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button 
        type="button" 
        data-category="${cat.id}"
        class="category-tab px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[#E0D4C5] bg-[#FAF7F2] text-[#4A3B35] hover:border-[#631626] whitespace-nowrap transition-all flex items-center gap-2 ${cat.id === state.currentCategory ? 'active' : ''}">
        <span>${cat.name}</span>
      </button>
    `).join('');

    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-tab');
      if (!btn) return;
      const category = btn.dataset.category;
      state.currentCategory = category;

      document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderProducts();
      playGentleChime('add');
    });
  }

  // Search input handler
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });

  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('products-empty');
  if (!grid) return;

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = state.currentCategory === 'todos' || product.category === state.currentCategory;
    const matchesSearch = !state.searchQuery || 
      product.name.toLowerCase().includes(state.searchQuery) ||
      product.shortDescription.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(product => `
    <article class="product-card group bg-white rounded-2xl overflow-hidden border border-[#ECE3D5] flex flex-col justify-between" data-id="${product.id}">
      <div>
        <!-- Imagem com badge -->
        <div class="relative h-64 overflow-hidden bg-[#F3EDE2] cursor-pointer" onclick="window.doralice.openQuickView('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy"
            class="product-image w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span class="text-xs uppercase tracking-wider font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
              Espiar Detalhes
            </span>
          </div>
          ${product.badge ? `
            <span class="absolute top-3 left-3 bg-[#631626] text-[#FAF7F2] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              ${product.badge}
            </span>
          ` : ''}
        </div>

        <!-- Conteúdo do card -->
        <div class="p-6">
          <div class="flex items-start justify-between gap-2 mb-2">
            <h3 class="font-serif text-lg font-bold text-[#241614] leading-snug group-hover:text-[#631626] transition-colors cursor-pointer" onclick="window.doralice.openQuickView('${product.id}')">
              ${product.name}
            </h3>
          </div>
          <p class="text-xs font-mono text-[#8C7A72] mb-3">${product.weight}</p>
          <p class="text-sm text-[#5C4D47] line-clamp-2 leading-relaxed mb-4">
            ${product.shortDescription}
          </p>
        </div>
      </div>

      <!-- Rodapé do card: preço e ação -->
      <div class="p-6 pt-0 border-t border-[#F5EFE6] flex items-center justify-between gap-3 mt-auto">
        <div>
          <span class="text-xs text-[#8C7A72] block">Valor unitário</span>
          <span class="font-serif text-xl font-bold text-[#631626]">
            ${formatCurrency(product.price)}
          </span>
        </div>

        <button 
          type="button" 
          onclick="window.doralice.addToCart('${product.id}')"
          class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#631626] text-[#631626] hover:text-white border border-[#631626] rounded-full text-xs font-semibold tracking-wide uppercase transition-all shadow-sm active:scale-95">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Pedir</span>
        </button>
      </div>
    </article>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================================================
// 4. QUICK VIEW MODAL
// ==========================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickview-modal');
  const modalBody = document.getElementById('quickview-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-[#F3EDE2]">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
        ${product.badge ? `
          <span class="absolute top-4 left-4 bg-[#631626] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            ${product.badge}
          </span>
        ` : ''}
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs uppercase font-mono tracking-wider text-[#C88544] font-semibold">${product.category.toUpperCase()}</span>
            <span class="text-xs font-mono text-[#8C7A72]">${product.weight}</span>
          </div>

          <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#241614] mb-3 leading-tight">
            ${product.name}
          </h2>

          <div class="font-serif text-2xl font-bold text-[#631626] mb-4">
            ${formatCurrency(product.price)}
          </div>

          <p class="text-sm text-[#4A3B35] leading-relaxed mb-5">
            ${product.fullDescription}
          </p>

          <!-- Alérgenos -->
          <div class="mb-5 p-3.5 bg-[#FAF7F2] rounded-xl border border-[#ECE3D5]">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-[#631626] mb-1.5 flex items-center gap-1.5">
              <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
              <span>Ingredientes & Alérgenos</span>
            </h4>
            <div class="flex flex-wrap gap-1.5">
              ${product.allergens.map(a => `
                <span class="text-[11px] px-2 py-0.5 rounded-md bg-white border border-[#E0D4C5] text-[#5C4D47]">${a}</span>
              `).join('')}
            </div>
          </div>

          <!-- Harmonização do Chef -->
          <div class="mb-6 p-3 bg-[#FAF0E4] rounded-xl border border-[#E8B985]/40 flex items-start gap-2.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-[#C88544] flex-shrink-0 mt-0.5"></i>
            <p class="text-xs text-[#5C4328] italic">
              <strong>Sugestão do Confeiteiro:</strong> ${product.pairing}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-[#ECE3D5]">
          <div class="flex items-center border border-[#D5C7B7] rounded-full px-3 py-1.5 bg-[#FAF7F2]">
            <button type="button" class="text-lg font-bold px-2 text-[#631626] hover:scale-110 transition-transform" onclick="window.doralice.changeModalQty(-1)">−</button>
            <span id="modal-qty-val" class="font-mono text-sm px-3 font-semibold text-[#241614]">1</span>
            <button type="button" class="text-lg font-bold px-2 text-[#631626] hover:scale-110 transition-transform" onclick="window.doralice.changeModalQty(1)">+</button>
          </div>

          <button 
            type="button" 
            onclick="window.doralice.addModalProductToCart('${product.id}')"
            class="flex-1 py-3 px-6 bg-[#631626] hover:bg-[#470F1A] text-white rounded-full font-medium text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>Adicionar à Sacola</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

let modalQty = 1;
function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  const qtyEl = document.getElementById('modal-qty-val');
  if (qtyEl) qtyEl.textContent = modalQty;
}

function addModalProductToCart(productId) {
  addToCart(productId, modalQty);
  closeQuickView();
  modalQty = 1;
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 5. SHOPPING BAG & WHATSAPP CHECKOUT
// ==========================================================================
function saveCart() {
  localStorage.setItem('doralice_cart', JSON.stringify(state.cart));
  updateCartBadge();
  renderCartDrawer();
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
  }

  saveCart();
  playGentleChime('add');
  showToast(`Adicionado: ${product.name}`, '🛍️');

  // Micro bounce effect on cart button
  const cartBtn = document.getElementById('open-cart-btn');
  if (cartBtn) {
    cartBtn.classList.add('scale-110');
    setTimeout(() => cartBtn.classList.remove('scale-110'), 200);
  }
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
    showToast('Item removido da sacola', '🗑️');
  }
  saveCart();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  showToast('Item removido', '🗑️');
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const footerEl = document.getElementById('cart-footer-content');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const deliveryFeeEl = document.getElementById('cart-delivery-fee');

  if (!itemsContainer) return;

  const totalItems = state.cart.reduce((sum, i) => sum + i.quantity, 0);

  if (totalItems === 0) {
    itemsContainer.innerHTML = '';
    emptyState?.classList.remove('hidden');
    footerEl?.classList.add('hidden');
    return;
  }

  emptyState?.classList.add('hidden');
  footerEl?.classList.remove('hidden');

  const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const delivery = state.deliveryMethod === 'delivery' ? CONFIG.deliveryFee : 0;
  const grandTotal = subtotal + delivery;

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (deliveryFeeEl) deliveryFeeEl.textContent = state.deliveryMethod === 'delivery' ? formatCurrency(delivery) : 'Grátis';
  if (totalEl) totalEl.textContent = formatCurrency(grandTotal);

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#ECE3D5]">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <h4 class="text-xs sm:text-sm font-semibold text-[#241614] truncate">${item.name}</h4>
        <span class="text-xs text-[#631626] font-bold block">${formatCurrency(item.price)} cada</span>
        
        <div class="flex items-center gap-2 mt-1.5">
          <div class="flex items-center border border-[#E0D4C5] rounded-md bg-[#FAF7F2]">
            <button type="button" class="px-2 py-0.5 text-xs text-[#631626] font-bold" onclick="window.doralice.updateCartQty('${item.id}', -1)">−</button>
            <span class="px-2 text-xs font-mono font-semibold">${item.quantity}</span>
            <button type="button" class="px-2 py-0.5 text-xs text-[#631626] font-bold" onclick="window.doralice.updateCartQty('${item.id}', 1)">+</button>
          </div>
          <button type="button" class="text-[11px] text-[#A68F85] hover:text-[#C53030] ml-auto transition-colors" onclick="window.doralice.removeCartItem('${item.id}')">
            Remover
          </button>
        </div>
      </div>
      <div class="text-right">
        <span class="text-xs sm:text-sm font-bold font-mono text-[#241614]">
          ${formatCurrency(item.price * item.quantity)}
        </span>
      </div>
    </div>
  `).join('');
}

function initCartDrawer() {
  const openBtn = document.getElementById('open-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  const deliveryRadios = document.querySelectorAll('input[name="delivery-type"]');
  const giftCardToggle = document.getElementById('gift-card-toggle');
  const giftCardMessageWrap = document.getElementById('gift-card-msg-wrap');
  const checkoutBtn = document.getElementById('checkout-whatsapp-btn');

  function openCart() {
    drawer?.classList.add('active');
    backdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }

  function closeCart() {
    drawer?.classList.remove('active');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn?.addEventListener('click', openCart);
  closeBtn?.addEventListener('click', closeCart);
  backdrop?.addEventListener('click', closeCart);

  // Delivery type switcher
  deliveryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.deliveryMethod = e.target.value;
      const addressWrap = document.getElementById('delivery-address-wrap');
      if (addressWrap) {
        if (state.deliveryMethod === 'delivery') {
          addressWrap.classList.remove('hidden');
        } else {
          addressWrap.classList.add('hidden');
        }
      }
      renderCartDrawer();
    });
  });

  // Gift card toggle
  giftCardToggle?.addEventListener('change', (e) => {
    state.giftCard = e.target.checked;
    if (giftCardMessageWrap) {
      if (state.giftCard) {
        giftCardMessageWrap.classList.remove('hidden');
      } else {
        giftCardMessageWrap.classList.add('hidden');
      }
    }
  });

  // Checkout via WhatsApp
  checkoutBtn?.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Sua sacola está vazia!', '⚠️');
      return;
    }

    const customerName = document.getElementById('customer-name')?.value.trim() || 'Cliente Especial';
    const customerPhone = document.getElementById('customer-phone')?.value.trim() || '';
    const deliveryAddress = document.getElementById('customer-address')?.value.trim() || '';
    const giftCardText = document.getElementById('gift-card-text')?.value.trim() || '';

    const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const delivery = state.deliveryMethod === 'delivery' ? CONFIG.deliveryFee : 0;
    const grandTotal = subtotal + delivery;

    // Build WhatsApp message
    let msg = `✨ *NOVO PEDIDO - DORALICE CONFEITARIA AFETIVA* ✨\n\n`;
    msg += `👤 *Nome:* ${customerName}\n`;
    if (customerPhone) msg += `📱 *Telefone:* ${customerPhone}\n`;
    msg += `📍 *Forma de Recebimento:* ${state.deliveryMethod === 'pickup' ? 'Retirada no Atelier (Jardins)' : 'Entrega por Delivery Express'}\n`;
    
    if (state.deliveryMethod === 'delivery' && deliveryAddress) {
      msg += `🏠 *Endereço de Entrega:* ${deliveryAddress}\n`;
    }

    msg += `\n🛒 *ITENS DA SACOLA:*\n`;
    state.cart.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.quantity}x ${item.name} (${formatCurrency(item.price * item.quantity)})\n`;
    });

    msg += `\n💵 *Subtotal:* ${formatCurrency(subtotal)}\n`;
    if (state.deliveryMethod === 'delivery') {
      msg += `🛵 *Taxa de Entrega:* ${formatCurrency(CONFIG.deliveryFee)}\n`;
    }
    msg += `💰 *TOTAL A PAGAR:* *${formatCurrency(grandTotal)}*\n`;

    if (state.giftCard && giftCardText) {
      msg += `\n🎁 *CARTÃO DE PRESENTE (Mensagem manuscrita):*\n"${giftCardText}"\n`;
    }

    msg += `\n🍰 _Pedido gerado através do site Doralice Confeitaria_`;

    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;

    playGentleChime('add');
    showToast('Abrindo WhatsApp para enviar pedido...', '📲');
    window.open(whatsappUrl, '_blank');
  });
}

// ==========================================================================
// 6. EVENT & CATERING SWEET CALCULATOR
// ==========================================================================
function initCateringCalculator() {
  const guestsInput = document.getElementById('event-guests');
  const guestsVal = document.getElementById('event-guests-val');
  const typeSelect = document.getElementById('event-type');
  const resultSweets = document.getElementById('calc-total-sweets');
  const resultVarieties = document.getElementById('calc-varieties');
  const resultEstimate = document.getElementById('calc-estimate');
  const quoteBtn = document.getElementById('event-quote-whatsapp');

  function calculate() {
    const guests = parseInt(guestsInput?.value || 80, 10);
    const eventType = typeSelect?.value || 'casamento';

    if (guestsVal) guestsVal.textContent = `${guests} convidados`;

    // Multiplier per guest
    let sweetsPerGuest = 5;
    let varietyCount = '5 a 6 sabores';
    let basePricePerSweet = 7.00;

    if (eventType === 'casamento') {
      sweetsPerGuest = 5;
      varietyCount = '6 a 8 sabores finos';
    } else if (eventType === 'aniversario') {
      sweetsPerGuest = 4;
      varietyCount = '4 a 5 sabores';
    } else if (eventType === 'corporativo') {
      sweetsPerGuest = 3;
      varietyCount = '3 a 4 sabores em caixas';
    } else if (eventType === 'batizado') {
      sweetsPerGuest = 4;
      varietyCount = '4 sabores temáticos';
    }

    const totalSweets = guests * sweetsPerGuest;
    const estimate = totalSweets * basePricePerSweet;

    if (resultSweets) resultSweets.textContent = `${totalSweets} doces`;
    if (resultVarieties) resultVarieties.textContent = varietyCount;
    if (resultEstimate) resultEstimate.textContent = `Aprox. ${formatCurrency(estimate)}`;

    return { guests, eventType, totalSweets, varietyCount, estimate };
  }

  guestsInput?.addEventListener('input', calculate);
  typeSelect?.addEventListener('change', calculate);
  calculate();

  // Quote Button to WhatsApp
  quoteBtn?.addEventListener('click', () => {
    const data = calculate();
    const eventTypesMap = {
      casamento: 'Casamento',
      aniversario: 'Aniversário / Festa Privada',
      corporativo: 'Evento Corporativo',
      batizado: 'Batizado / Chá de Bebê'
    };

    let msg = `✨ *ORÇAMENTO PARA EVENTO - MESA DE DOCES* ✨\n\n`;
    msg += `🎉 *Tipo de Evento:* ${eventTypesMap[data.eventType] || data.eventType}\n`;
    msg += `👥 *Número de Convidados:* ${data.guests} pessoas\n`;
    msg += `🍰 *Quantidade Estimada:* ${data.totalSweets} doces (${data.varietyCount})\n`;
    msg += `💰 *Estimativa Base:* ${formatCurrency(data.estimate)}\n\n`;
    msg += `Gostaria de agendar uma caixa de degustação e conversar com o atendimento sobre datas disponíveis!`;

    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;

    showToast('Redirecionando para o WhatsApp do Atelier...', '🧁');
    window.open(whatsappUrl, '_blank');
  });
}

// ==========================================================================
// 7. NEWSLETTER & COUPON GENERATOR
// ==========================================================================
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  const successBox = document.getElementById('newsletter-success');
  const couponCode = document.getElementById('coupon-code');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input?.value.trim();
    if (!email) return;

    if (successBox) {
      successBox.classList.remove('hidden');
      form.classList.add('hidden');
    }
    showToast('Cupom DORALICE10 ativado com sucesso!', '🎟️');
    playGentleChime('add');
  });

  couponCode?.addEventListener('click', () => {
    navigator.clipboard.writeText('DORALICE10');
    showToast('Código DORALICE10 copiado!', '📋');
  });
}

// ==========================================================================
// 8. PIX COPY SHORTCUT (For quick portfolio demo)
// ==========================================================================
function copyPixKey() {
  navigator.clipboard.writeText('contato@doraliceconfeitaria.com.br');
  showToast('Chave Pix copiada para a área de transferência!', '💳');
}

// ==========================================================================
// 9. GSAP SCROLL ANIMATIONS (Matching Madie's smooth elegance)
// ==========================================================================
function initGSAPAnimations() {
  if (typeof window.gsap === 'undefined') return;

  const { gsap } = window;

  // Hero section reveal
  gsap.from('.hero-title-line', {
    y: 40,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.hero-badge-stamp', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    delay: 0.4
  });

  gsap.from('.hero-image-card', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
  });
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Expose global methods for inline HTML events
  window.doralice = {
    addToCart,
    openQuickView,
    closeQuickView,
    changeModalQty,
    addModalProductToCart,
    updateCartQty,
    removeCartItem,
    copyPixKey,
    showToast
  };

  initNavigation();
  initCatalog();
  initCartDrawer();
  initCateringCalculator();
  initNewsletter();
  updateStoreStatus();
  updateCartBadge();
  initGSAPAnimations();

  // Close QuickView on modal backdrop click
  document.getElementById('quickview-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'quickview-modal') {
      closeQuickView();
    }
  });

  // Re-run store status check every minute
  setInterval(updateStoreStatus, 60000);

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

