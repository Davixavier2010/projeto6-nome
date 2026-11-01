// ==========================================================================
// DORALICE CONFEITARIA AFETIVA & CAFÉ - BUNDLE STANDALONE
// Funciona tanto em servidor local (HTTP) quanto abrindo direto no arquivo (file://)
// ==========================================================================

(function() {
  // 1. DADOS DE PRODUTOS & CATEGORIAS
  const CATEGORIES = [
    { id: 'todos', name: 'Todas as Criações', icon: 'sparkles' },
    { id: 'brigadeiros', name: 'Brigadeiros & Trufas', icon: 'circle-dot' },
    { id: 'bolos', name: 'Bolos & Fatias', icon: 'cake' },
    { id: 'classicos', name: 'Clássicos do Brasil', icon: 'heart' },
    { id: 'cafeteria', name: 'Cafés Especiais', icon: 'coffee' },
    { id: 'presentes', name: 'Caixas de Presente', icon: 'gift' }
  ];

  const PRODUCTS = [
    {
      id: 'brigadeiro-pistache',
      name: 'Brigadeiro de Pistache Siciliano & Flor de Sal',
      category: 'brigadeiros',
      price: 7.50,
      badge: 'Mais Vendido',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Pistache italiano 100% puro, chocolate branco nobre e toque de flor de sal marinha de Guamaré.',
      fullDescription: 'Uma releitura sofisticada do doce mais amado do Brasil. Utilizamos pasta pura de pistache de Bronte (Sicília), base aveludada de chocolate branco nobre e finalização em grãos tostados de pistache com delicados cristais de flor de sal.',
      allergens: ['Contém leite', 'Contém pistache', 'Não contém glúten'],
      weight: '25g por unidade',
      pairing: 'Harmoniza com nosso Café Filtrado da Mantiqueira ou Espresso Tostado.'
    },
    {
      id: 'brigadeiro-noir-70',
      name: 'Brigadeiro Noir Cacau 70% da Bahia',
      category: 'brigadeiros',
      price: 6.90,
      badge: 'Origem Bahia',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Cacau fino de Ilhéus, massa sedosa com amargor equilibrado e finalizado com nibs crocantes.',
      fullDescription: 'Elaborado com cacau de fazenda sustentável de Ilhéus (BA). Textura aveludada com teor equilibrado de doçura, finalizado em nibs de cacau tostados que conferem um crocante inesquecível ao paladar.',
      allergens: ['Contém leite', 'Pode conter traços de nozes', 'Não contém glúten'],
      weight: '25g por unidade',
      pairing: 'Perfeito acompanhado de um Cappuccino cremoso ou Licor de Café.'
    },
    {
      id: 'bolo-cenoura-vulcao',
      name: 'Fatia de Bolo de Cenoura Vulcão',
      category: 'bolos',
      price: 22.00,
      badge: 'Receita Afetiva',
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Massa fofinha de cenouras frescas banhada em calda vulcão de brigadeiro 54% ainda morna.',
      fullDescription: 'O maior ícone da memória afetiva brasileira. Massa úmida e aerada feita com cenouras selecionadas, coberta com uma generosa camada de calda cremosa de chocolate belga 54% que escorre a cada garfada.',
      allergens: ['Contém glúten', 'Contém ovos', 'Contém leite'],
      weight: '190g a fatia generosa',
      pairing: 'Experimente com nosso Café Coado na Mesa ou um copo de leite frio.'
    },
    {
      id: 'quindim-dourado',
      name: 'Quindim Dourado da Fazenda',
      category: 'classicos',
      price: 14.00,
      badge: 'Tradição Artesanal',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Gemas caipiras peneiradas à mão, coco fresco ralado e base brilhante espelhada.',
      fullDescription: 'Seguindo à risca a receita secular das cozinhas coloniais brasileiras. As gemas são peneiradas manualmente para garantir aroma suave, com base de coco fresco ralado e aquela cor dourada inconfundível.',
      allergens: ['Contém ovos', 'Contém leite', 'Não contém glúten'],
      weight: '90g por unidade',
      pairing: 'Excelente com Espresso clássico para equilibrar a doçura natural.'
    },
    {
      id: 'bolo-de-rolo',
      name: 'Bolo de Rolo Pernambucano Tradicional',
      category: 'classicos',
      price: 24.00,
      badge: 'Patrimônio Imaterial',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Camadas milimétricas de massa amanteigada enroladas com pura goiabada cascão cremosa.',
      fullDescription: 'Uma verdadeira obra de arte da confeitaria brasileira. Camadas extremamente finas e delicadas de pão de ló amanteigado, entrelaçadas com goiabada cascão artesanal de Ponte Nova (MG). Servido polvilhado de açúcar fino.',
      allergens: ['Contém glúten', 'Contém leite', 'Contém ovos'],
      weight: '180g (porção fatiada)',
      pairing: 'Harmoniza divinamente com Queijo do Reino curado ou Café Especial.'
    },
    {
      id: 'pao-de-mel-artesanal',
      name: 'Pão de Mel com Doce de Leite de Viçosa',
      category: 'classicos',
      price: 16.50,
      badge: 'Favorito dos Clientes',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Massa úmida de especiarias brasileiras, recheio farto de doce de leite e casquinha de chocolate 54%.',
      fullDescription: 'Receita com mel puro de flor de laranjeira, canela, cravo e noz-moscada. Recheado generosamente com o premiado doce de leite de Viçosa e mergulhado em uma casquinha de chocolate meio amargo crocante.',
      allergens: ['Contém glúten', 'Contém leite', 'Contém ovos'],
      weight: '110g por unidade',
      pairing: 'Perfeito para o lanche da tarde com Chá de Especiarias ou Latte Macchiato.'
    },
    {
      id: 'torta-cacau-cupuacu',
      name: 'Torta Mousse Cacau 70% & Cupuaçu',
      category: 'bolos',
      price: 27.00,
      badge: 'Edição Especial',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Base crocante de castanha-de-caju, mousse densa de cacau e camada aveludada de cupuaçu amazônico.',
      fullDescription: 'A união entre o terroir amazônico e a pâtisserie francesa. Sablet crocante de castanhas nacionais, recheio duplo com ganache intensa de cacau 70% e mousse refrescante de cupuaçu.',
      allergens: ['Contém castanhas', 'Contém leite', 'Não contém glúten'],
      weight: '170g a fatia',
      pairing: 'Harmoniza com Café Coado de torra média-clara.'
    },
    {
      id: 'caixa-degustacao-12',
      name: 'Caixa Luxo Degustação (12 Brigadeiros)',
      category: 'presentes',
      price: 84.00,
      badge: 'Presente Perfeito',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Embalagem rígida na cor vinho bordô com fita de cetim e 12 brigadeiros artesanais sortidos.',
      fullDescription: 'Nossa caixa mais desejada para presentes especiais. Inclui 12 brigadeiros artesanais selecionados (Pistache, Noir 70%, Brûlée, Doce de Leite com Flor de Sal, Tradicional e Café Especial). Acompanha cartão caligráfico personalizado.',
      allergens: ['Contém leite', 'Contém castanhas / pistache'],
      weight: '320g com embalagem',
      pairing: 'Acompanha cartão com mensagem personalizada escrita à mão.'
    },
    {
      id: 'caixa-afeto-16',
      name: 'Caixa Coleção Afeto & Tradição (16 Unidades)',
      category: 'presentes',
      price: 115.00,
      badge: 'Exclusividade Atelier',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Mix premium com mini quindins, brigadeiros nobres e trufas de chocolate com cupuaçu.',
      fullDescription: 'A experiência sensorial definitiva da Doralice. Uma caixa presenteável com acabamento aveludado e estampagem em dourado fosco contendo 16 unidades dos maiores destaques de nosso cardápio.',
      allergens: ['Contém leite', 'Contém ovos', 'Contém castanhas'],
      weight: '440g com embalagem',
      pairing: 'Inclui fita de seda e lacre de cera personalizado do atelier.'
    },
    {
      id: 'cappuccino-doralice',
      name: 'Cappuccino com Borda de Brigadeiro Nobre',
      category: 'cafeteria',
      price: 19.50,
      badge: 'Assinatura da Casa',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Espresso duplo, leite cremoso microespumado e borda de brigadeiro de colher com canela em pó.',
      fullDescription: 'Servido em nossa xícara de cerâmica artesanal. A borda da taça é coberta com brigadeiro de panela fresco e finalizada com canela aromática, combinando o calor do café com o doce reconfortante.',
      allergens: ['Contém leite'],
      weight: '220ml',
      pairing: 'Aprecie colherando o brigadeiro enquanto saboreia o café.'
    },
    {
      id: 'cafe-filtrado-mantiqueira',
      name: 'Café Especial Filtrado na Mesa (V60)',
      category: 'cafeteria',
      price: 14.00,
      badge: 'Café 86+ Pontos',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Grãos 100% arábica do Sul de Minas com notas naturais de rapadura, pêssego e acidez cítrica suave.',
      fullDescription: 'Extraído individualmente à sua frente no método V60. Grãos cultivados a mais de 1.200 metros de altitude, torrados artesanalmente em pequenos lotes todas as semanas.',
      allergens: ['Não contém glúten', 'Vegano'],
      weight: '250ml (serve até 2 xícaras)',
      pairing: 'Ideal para acompanhar nossas fatias de bolo ou quindim.'
    }
  ];

  // 2. CONFIGURAÇÕES
  const CONFIG = {
    whatsappNumber: '5511999998888',
    storeHours: {
      openDays: [2, 3, 4, 5, 6, 0],
      openHour: 10,
      closeHour: 19
    },
    deliveryFee: 15.00
  };

  const state = {
    currentCategory: 'todos',
    searchQuery: '',
    cart: JSON.parse(localStorage.getItem('doralice_cart') || '[]'),
    deliveryMethod: 'pickup',
    giftCard: false,
    soundEnabled: true
  };

  function playGentleChime(type = 'add') {
    if (!state.soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      if (type === 'add') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      } else {
        osc.frequency.setValueAtTime(783.99, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(523.25, ctx.currentTime + 0.15);
      }
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  }

  function showToast(message, icon = '✨') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<span>${icon}</span><span class="font-medium">${message}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  // NAVEGAÇÃO OVERLAY
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
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeMenu();
    });
  }

  // STATUS DA LOJA EM TEMPO REAL
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
      statusBadge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200';
    } else {
      statusDot.className = 'w-2.5 h-2.5 rounded-full bg-amber-500';
      statusText.textContent = 'Fechado no momento — Reabrimos às 10h';
      statusText.className = 'text-xs font-semibold text-amber-900';
      statusBadge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200';
    }
  }

  // CATALOGO
  function initCatalog() {
    const tabsContainer = document.getElementById('category-tabs');
    const searchInput = document.getElementById('product-search');

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
        state.currentCategory = btn.dataset.category;
        document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts();
        playGentleChime('add');
      });
    }

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

          <div class="p-6">
            <h3 class="font-serif text-lg font-bold text-[#241614] leading-snug group-hover:text-[#631626] transition-colors cursor-pointer mb-2" onclick="window.doralice.openQuickView('${product.id}')">
              ${product.name}
            </h3>
            <p class="text-xs font-mono text-[#8C7A72] mb-3">${product.weight}</p>
            <p class="text-sm text-[#5C4D47] line-clamp-2 leading-relaxed mb-4">
              ${product.shortDescription}
            </p>
          </div>
        </div>

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

    if (window.lucide) window.lucide.createIcons();
  }

  // QUICK VIEW
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
    if (window.lucide) window.lucide.createIcons();
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

  // CARRINHO & SACOLA
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
      if (count > 0) badge.classList.remove('hidden');
      else badge.classList.add('hidden');
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

    deliveryRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.deliveryMethod = e.target.value;
        const addressWrap = document.getElementById('delivery-address-wrap');
        if (addressWrap) {
          if (state.deliveryMethod === 'delivery') addressWrap.classList.remove('hidden');
          else addressWrap.classList.add('hidden');
        }
        renderCartDrawer();
      });
    });

    giftCardToggle?.addEventListener('change', (e) => {
      state.giftCard = e.target.checked;
      if (giftCardMessageWrap) {
        if (state.giftCard) giftCardMessageWrap.classList.remove('hidden');
        else giftCardMessageWrap.classList.add('hidden');
      }
    });

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

  // SIMULADOR DE EVENTOS
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

  // NEWSLETTER
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

  function copyPixKey() {
    navigator.clipboard.writeText('contato@doraliceconfeitaria.com.br');
    showToast('Chave Pix copiada para a área de transferência!', '💳');
  }

  function initGSAPAnimations() {
    if (typeof window.gsap === 'undefined') return;
    const { gsap } = window;
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

  // EXPORTAÇÃO GLOBAL
  window.doralice = {
    addToCart,
    openQuickView,
    closeQuickView,
    changeModalQty,
    addModalProductToCart,
    updateCartQty,
    removeCartItem,
    copyPixKey,
    showToast,
    renderProducts
  };

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCatalog();
    initCartDrawer();
    initCateringCalculator();
    initNewsletter();
    updateStoreStatus();
    updateCartBadge();
    initGSAPAnimations();

    document.getElementById('quickview-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'quickview-modal') closeQuickView();
    });

    setInterval(updateStoreStatus, 60000);
    if (window.lucide) window.lucide.createIcons();
  });
})();

