// ==================== DAPUR RUMAHAN - APP.JS ====================
// Frontend logic untuk menampilkan menu, bisnis info, dan cart

(function() {
    'use strict';

    // ============ STATE ============
    let config = {};
    let cart = [];
    let currentProductIndex = {}; // diisi dinamis sesuai produk yang ada

    // ============ INITIALIZATION ============
    async function init() {
        if (typeof window.loadConfig === 'function') {
            config = await window.loadConfig();
        } else {
            config = window.CONFIG || {};
        }

        console.log('✅ Config loaded in app.js:', config);

        loadCart();
        renderBusinessInfo();
        renderBestSellers();
        renderMenuCards();
        renderAbout();
        renderTestimonials();
        setupNavigation();
        setupCartPanel();
        updateCartUI();

        console.log('✅ Frontend siap!');
    }

    // ============ RENDER BUSINESS INFO ============
    function renderBusinessInfo() {
        if (!config) return;

        if (config.businessName) {
            document.querySelectorAll('.nav-logo').forEach(el => {
                const logoSrc = config.aboutImage || 'assets/images/about.jpg';
                el.innerHTML = `<img src="${logoSrc}" alt="Logo" class="logo-icon-img"> ${config.businessName}`;
            });
            const footerName = document.querySelector('.footer strong');
            if (footerName) footerName.textContent = config.businessName;
            document.title = `${config.businessName} - Risoles & Pudding Homemade`;
        }
    }

    // ============ RENDER ABOUT / PROFIL ============
    function renderAbout() {
        if (!config) return;

        const img = document.getElementById('aboutImage');
        if (img && config.aboutImage) {
            img.src = config.aboutImage;
        }
        const titleEl = document.querySelector('.about-text h2');
        if (titleEl && config.aboutTitle) {
            titleEl.textContent = config.aboutTitle;
        }
        const mainTextEl = document.querySelector('.about-text p:first-of-type');
        if (mainTextEl && config.aboutMainText) {
            mainTextEl.innerHTML = config.aboutMainText;
        }
        const subTextEl = document.querySelector('.about-text p:last-of-type');
        if (subTextEl && config.aboutSubText) {
            subTextEl.innerHTML = config.aboutSubText;
        }

        // Render Highlights Dinamis
        const highlightsContainer = document.querySelector('.about-highlights');
        if (highlightsContainer && config.aboutHighlights) {
            let items = [];
            if (Array.isArray(config.aboutHighlights)) {
                items = config.aboutHighlights;
            } else if (typeof config.aboutHighlights === 'string') {
                items = config.aboutHighlights.split(',').map(s => s.trim()).filter(Boolean);
            }

            if (items.length > 0) {
                highlightsContainer.innerHTML = items.map(item => {
                    const text = typeof item === 'string' ? item : (item.text || item);
                    const icon = (typeof item === 'object' && item.icon) ? item.icon : '✅';
                    return `
                        <div class="about-highlight">
                            <span class="icon-circle">${icon}</span> ${text}
                        </div>
                    `;
                }).join('');
            }
        }
    }

    // ============ RENDER BEST SELLERS ============
    function renderBestSellers() {
        const $container = document.getElementById('bestSellerGrid');
        if (!$container) return;

        const bestSellers = config.bestSellers || [];
        if (bestSellers.length === 0) {
            $container.innerHTML = '<p style="text-align:center;color:#999;">Tidak ada best seller</p>';
            return;
        }

        $container.innerHTML = bestSellers.map(bs => `
            <div class="best-seller-card">
                <div class="bs-image">
                    <img src="${bs.image || 'assets/images/risoles.webp'}" alt="${bs.name}">
                    <span class="bs-badge">${bs.badge || ''}</span>
                </div>
                <div class="bs-content">
                    <h3>${bs.name}</h3>
                    <p class="bs-desc">${bs.description || ''}</p>
                    <div class="bs-rating">${bs.rating ? '⭐'.repeat(bs.rating) : ''}</div>
                </div>
            </div>
        `).join('');
    }

    // ============ RENDER MENU (DINAMIS) ============
    function renderMenuCards() {
        const products = config.products;
        if (!Array.isArray(products) || products.length === 0) return;

        const $grid = document.getElementById('menuGrid');
        if (!$grid) return;

        // Inisialisasi index state untuk setiap produk
        products.forEach(p => {
            if (currentProductIndex[p.id] === undefined) {
                currentProductIndex[p.id] = 0;
            }
        });

        // Tentukan kelas layout berdasarkan jumlah produk (ganjil/genap)
        const count = products.length;
        $grid.className = 'menu-grid' + (count % 2 !== 0 ? ' menu-grid-odd' : ' menu-grid-even');

        // Render kartu untuk setiap produk
        $grid.innerHTML = products.map((product, i) => {
            const cat = product.id;
            const firstSub = (product.submenus && product.submenus[0]) || {};
            const defaultImg   = firstSub.image || product.image || '';
            const defaultTitle = firstSub.name  || product.name  || '';
            const defaultPrice = parseInt(firstSub.price, 10) || 0;
            const defaultNote  = firstSub.note  || product.note  || '';

            // Kartu terakhir pada grid ganjil mendapat kelas full-width
            const isLastOdd = (count % 2 !== 0 && i === count - 1);

            // Sales rules untuk qty
            let minQty = 1;
            let stepQty = 1;
            if (product.sales_rules) {
                const sr = typeof product.sales_rules === 'string' ? JSON.parse(product.sales_rules) : product.sales_rules;
                minQty  = parseInt(sr.minOrder,    10) || 1;
                stepQty = parseInt(sr.defaultStep, 10) || 1;
            }

            return `
            <div class="menu-card-modern${isLastOdd ? ' menu-card-last-odd' : ''}" id="menu-${cat}">
                <div class="mc-visual">
                    <h3 class="mc-title mc-title-back" id="${cat}TitleDisplayBack">${defaultTitle}</h3>
                    <div class="mc-nav-left" onclick="switchProduct('${cat}', -1)" aria-label="Varian sebelumnya">◀</div>
                    <img src="${defaultImg}" alt="${defaultTitle}" class="mc-img" id="${cat}ImgDisplay">
                    <h3 class="mc-title mc-title-front" id="${cat}TitleDisplayFront" aria-hidden="true">${defaultTitle}</h3>
                    <div class="mc-nav-right" onclick="switchProduct('${cat}', 1)" aria-label="Varian selanjutnya">▶</div>
                    <div class="mc-price" id="${cat}PriceDisplay" data-base-price="${defaultPrice}">Rp ${defaultPrice.toLocaleString('id-ID')} / pcs</div>
                </div>
                <div class="mc-body">
                    <p class="menu-note" id="${cat}NoteDisplay">${defaultNote}</p>
                    <div id="${cat}Optional1"></div>
                    <div id="${cat}Optional2" class="mt-2"></div>
                    <div class="row g-2 align-items-center mt-1">
                        <div class="col-12 col-md-5">
                            <div class="mc-qty-box w-100">
                                <button type="button" onclick="changeQty('${cat}', -1)" aria-label="Kurang">−</button>
                                <span id="${cat}Qty">${minQty}</span>
                                <button type="button" onclick="changeQty('${cat}', 1)" aria-label="Tambah">+</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-7">
                            <button class="mc-btn active w-100 text-uppercase fs-small" id="${cat}AddBtn"
                                onclick="addToCartByCategory('${cat}')">Tambahkan ke Keranjang</button>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        // Render konten awal semua kartu
        products.forEach(p => renderMenuCard(p.id));
    }

    function renderMenuCard(category) {
        if (!Array.isArray(config.products)) return;

        const product = config.products.find(p => p.id === category);
        if (!product) return;

        const submenus = product.submenus || [];
        const idx = currentProductIndex[category] || 0;
        const currentSubmenu = submenus[idx] || submenus[0];
        if (!currentSubmenu) return;

        // Title
        const titleBack  = document.getElementById(`${category}TitleDisplayBack`);
        const titleFront = document.getElementById(`${category}TitleDisplayFront`);
        let titleText = currentSubmenu.name || product.name;
        if (titleBack)  titleBack.innerHTML  = titleText;
        if (titleFront) titleFront.innerHTML = titleText;

        // Image
        const imgDisplay = document.getElementById(`${category}ImgDisplay`);
        if (imgDisplay) {
            imgDisplay.src = currentSubmenu.image || product.image || '';
            imgDisplay.alt = currentSubmenu.name  || product.name;
            const scale   = parseInt(currentSubmenu.imageScale,   10) || 100;
            const offsetX = parseInt(currentSubmenu.imageOffsetX, 10) || 0;
            const offsetY = parseInt(currentSubmenu.imageOffsetY, 10) || 0;
            imgDisplay.style.transform       = `scale(${scale / 100}) translate(${offsetX}px, ${offsetY}px)`;
            imgDisplay.style.transformOrigin = 'center bottom';
        }

        // Price
        const priceDisplay = document.getElementById(`${category}PriceDisplay`);
        if (priceDisplay) {
            const basePrice = parseInt(currentSubmenu.price, 10) || 0;
            priceDisplay.textContent       = `Rp ${basePrice.toLocaleString('id-ID')} / pcs`;
            priceDisplay.dataset.basePrice = basePrice;
        }

        // Note
        const noteDisplay = document.getElementById(`${category}NoteDisplay`);
        if (noteDisplay) noteDisplay.textContent = currentSubmenu.note || product.note || '';

        // Optional Groups (maks 2)
        const optionalGroups = product.optionalGroups || [];
        renderOptionalGroup(category, 0, optionalGroups[0]);
        if (optionalGroups.length > 1) renderOptionalGroup(category, 1, optionalGroups[1]);

        // Qty default berdasarkan sales_rules
        const qtyEl = document.getElementById(`${category}Qty`);
        if (qtyEl) {
            let minOrder = 1;
            if (product.sales_rules) {
                const rules = typeof product.sales_rules === 'string'
                    ? JSON.parse(product.sales_rules) : product.sales_rules;
                minOrder = parseInt(rules.minOrder, 10) || 1;
            }
            const currentVal = parseInt(qtyEl.textContent, 10) || 0;
            if (currentVal < minOrder) qtyEl.textContent = minOrder;
        }
    }

    function renderOptionalGroup(category, groupIndex, group) {
        const containerId = `${category}Optional${groupIndex + 1}`;
        const $container = document.getElementById(containerId);
        if (!$container) return;

        if (!group || !group.options || group.options.length === 0) {
            $container.innerHTML = '';
            return;
        }

        $container.innerHTML = `
            <div class="option-group">
                <label style="font-weight:600;display:block;margin-bottom:0.5rem;">
                    ${group.label || group.id}
                </label>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                    ${group.options.map((option, idx) => `
                        <label style="display:flex;align-items:center;cursor:pointer;">
                            <input 
                                type="radio" 
                                name="${category}_optional_${groupIndex}" 
                                value="${option.id}"
                                data-adjustment="${option.adj || option.adjustment || 0}"
                                ${idx === 0 ? 'checked' : ''}
                                onchange="updateProductPrice('${category}')"
                            >
                            <span style="margin-left:0.4rem;font-size:0.9rem;">
                                ${option.name}
                                ${(option.adj || option.adjustment) ? `<span style="color:#666;font-size:0.8rem;"> (${(option.adj || option.adjustment) > 0 ? '+' : ''}${option.adj || option.adjustment})</span>` : ''}
                            </span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // ============ PRICE ADJUSTMENT ============
    window.updateProductPrice = function(category) {
        if (!Array.isArray(config.products)) return;
        const product = config.products.find(p => p.id === category);
        if (!product) return;

        const submenus = product.submenus || [];
        const currentSubmenu = submenus[currentProductIndex[category]] || submenus[0];
        // parseInt wajib agar tidak terjadi string concatenation
        const basePrice = parseInt(currentSubmenu ? currentSubmenu.price : 0, 10) || 0;

        let totalAdjustment = 0;
        const optionalGroups = product.optionalGroups || [];
        optionalGroups.forEach((group, idx) => {
            const selected = document.querySelector(`input[name="${category}_optional_${idx}"]:checked`);
            if (selected) {
                totalAdjustment += parseInt(selected.dataset.adjustment, 10) || 0;
            }
        });

        const finalPrice = basePrice + totalAdjustment;
        const priceDisplay = document.getElementById(`${category}PriceDisplay`);
        if (priceDisplay) {
            priceDisplay.textContent = `Rp ${finalPrice.toLocaleString('id-ID')} / pcs`;
            priceDisplay.dataset.finalPrice = finalPrice;
        }
    };

    // ============ SWITCH PRODUCT ============
    window.switchProduct = function(category, direction) {
        if (!Array.isArray(config.products)) return;
        const product = config.products.find(p => p.id === category);
        if (!product) return;

        const submenus = product.submenus || [];
        if (submenus.length === 0) return;

        currentProductIndex[category] += direction;
        if (currentProductIndex[category] < 0) {
            currentProductIndex[category] = submenus.length - 1;
        } else if (currentProductIndex[category] >= submenus.length) {
            currentProductIndex[category] = 0;
        }

        renderMenuCard(category);
        updateProductPrice(category);
    };

    // ============ QUANTITY ============

    // Helper: ambil sales rules untuk produk tertentu
    function getProductRules(productId) {
        const product = Array.isArray(config.products)
            ? config.products.find(p => p.id === productId) : null;
        if (!product || !product.sales_rules) return { minOrder: 1, defaultStep: 1 };
        const r = typeof product.sales_rules === 'string'
            ? JSON.parse(product.sales_rules) : product.sales_rules;
        return {
            minOrder:    parseInt(r.minOrder,    10) || 1,
            defaultStep: parseInt(r.defaultStep, 10) || 1
        };
    }

    // Kompatibilitas mundur — fungsi lama tetap berjalan
    function getRisolesRules() { return getProductRules('risoles'); }

    // Tombol qty universal untuk semua produk
    window.changeQty = function(category, direction) {
        const qtyEl = document.getElementById(`${category}Qty`);
        if (!qtyEl) return;
        const rules = getProductRules(category);
        const step  = rules.defaultStep;
        const min   = rules.minOrder;
        let currentQty = parseInt(qtyEl.textContent, 10);
        if (isNaN(currentQty) || currentQty < min) currentQty = min;
        qtyEl.textContent = Math.max(min, currentQty + (direction * step));
    };

    // Kompatibilitas mundur untuk fungsi qty lama
    window.changeRisolesQty = function(dir) { window.changeQty('risoles', dir); };
    window.changePuddingQty = function(dir) { window.changeQty('pudding', dir); };

    // ============ ADD TO CART ============
    window.addToCartByCategory = function(cat) { addToCart(cat); };
    window.addRisolesToCart = function() { addToCart('risoles'); };
    window.addPuddingToCart = function() { addToCart('pudding'); };

    function addToCart(category) {
        if (!Array.isArray(config.products)) {
            showToast('❌ Data produk belum siap');
            return;
        }
        const product = config.products.find(p => p.id === category);
        if (!product) {
            showToast('❌ Produk tidak ditemukan');
            return;
        }

        // Baca qty dari span
        const qtyEl = document.getElementById(`${category}Qty`);
        const qty = qtyEl ? (parseInt(qtyEl.textContent, 10) || 1) : 1;

        // Validasi minimum order
        const rules = getProductRules(category);
        if (qty < rules.minOrder) {
            showToast(`⚠️ Minimal pembelian adalah ${rules.minOrder} pcs.`);
            if (qtyEl) qtyEl.textContent = rules.minOrder;
            return;
        }
        const submenus = product.submenus || [];
        const currentSubmenu = submenus[currentProductIndex[category]] || submenus[0];
        if (!currentSubmenu) {
            showToast('❌ Varian tidak ditemukan');
            return;
        }

        const options = {};
        const optionalGroups = product.optionalGroups || [];
        optionalGroups.forEach((group, idx) => {
            const selected = document.querySelector(`input[name="${category}_optional_${idx}"]:checked`);
            if (selected) {
                options[group.id] = {
                    label: group.label,
                    selected: selected.value,
                    selectedName: selected.labels[0].textContent.trim().split('(')[0].trim(),
                    adjustment: parseInt(selected.dataset.adjustment) || 0
                };
            }
        });

        const basePrice = parseInt(currentSubmenu.price, 10) || 0;
        let totalAdjustment = 0;
        Object.values(options).forEach(opt => totalAdjustment += (parseInt(opt.adjustment, 10) || 0));
        const finalPrice = basePrice + totalAdjustment;

        const cartItem = {
            id: `${category}-${Date.now()}`,
            category: category,
            submenuId: currentSubmenu.id,
            submenuName: currentSubmenu.name,
            parentName: product.name,
            qty: qty,
            basePrice: basePrice,
            priceAdjustment: totalAdjustment,
            finalPrice: finalPrice,
            options: options
        };

        cart.push(cartItem);
        saveCart();
        updateCartUI();
        showToast(`✅ ${currentSubmenu.name} ditambahkan ke keranjang!`);
    }

    // ============ CART MANAGEMENT ============
    function loadCart() {
        try {
            const saved = localStorage.getItem('DAPUR_CART');
            cart = saved ? JSON.parse(saved) : [];
        } catch (e) {
            cart = [];
        }
    }

    function saveCart() {
        try {
            localStorage.setItem('DAPUR_CART', JSON.stringify(cart));
        } catch (e) {
            console.error('Error saving cart:', e);
        }
    }

    window.removeFromCart = function(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        saveCart();
        updateCartUI();
        showToast('🗑️ Item dihapus dari keranjang');
    };

    window.updateItemQty = function(itemId, newQty) {
        const item = cart.find(c => c.id === itemId);
        if (!item) return;
        const rules = getProductRules(item.category);
        newQty = Math.max(rules.minOrder, parseInt(newQty, 10) || rules.minOrder);
        item.qty = newQty;
        saveCart();
        updateCartUI();
    };

    function updateCartUI() {
        renderCartItems();
        updateCartBadge();
        updateCartPanel();
    }

    function renderCartItems() {
        const $container = document.getElementById('cartItems');
        if (!$container) return;

        if (cart.length === 0) {
            $container.innerHTML = `
                <div class="cart-empty">
                    <div class="empty-icon">🛒</div>
                    <p>Keranjang masih kosong.</p>
                    <p style="font-size:0.85rem;">Yuk, pilih menu favoritmu!</p>
                </div>
            `;
            return;
        }

        $container.innerHTML = cart.map(item => {
            const rules  = getProductRules(item.category);
            const step   = rules.defaultStep || 1;
            const minQty = rules.minOrder    || 1;
            const prevQty = Math.max(minQty, item.qty - step);
            const nextQty   = item.qty + step;

            return `
            <div class="cart-item">
                <div class="ci-info">
                    <h4>${item.submenuName}</h4>
                    <p class="ci-meta">${item.parentName} • Rp ${item.finalPrice.toLocaleString('id-ID')}/pcs</p>
                    ${Object.keys(item.options).length > 0 ? `
                        <p class="ci-options" style="font-size:0.8rem;color:#666;margin-top:0.3rem;">
                            ${Object.values(item.options).map(opt => `${opt.selectedName}`).join(', ')}
                        </p>
                    ` : ''}
                </div>
                <div class="ci-controls">
                    <div class="qty-selector">
                        <button onclick="updateItemQty('${item.id}', ${prevQty})" ${item.qty <= minQty ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>−</button>
                        <span>${item.qty} pcs</span>
                        <button onclick="updateItemQty('${item.id}', ${nextQty})">+</button>
                    </div>
                    <div class="ci-total">
                        Rp ${(item.finalPrice * item.qty).toLocaleString('id-ID')}
                    </div>
                    <button class="ci-delete" onclick="removeFromCart('${item.id}')">🗑️</button>
                </div>
            </div>
        `;
        }).join('');
    }

    function updateCartBadge() {
        const $badge = document.getElementById('cartBadge');
        if ($badge) $badge.textContent = cart.length;
        const $ccCount = document.getElementById('ccCount');
        if ($ccCount) $ccCount.textContent = cart.length;
    }

    function updateCartPanel() {
        const total = cart.reduce((sum, item) => sum + (item.finalPrice * item.qty), 0);
        const $cartTotal = document.getElementById('cartTotal');
        if ($cartTotal) $cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
        const $ccTotal = document.getElementById('ccTotal');
        if ($ccTotal) $ccTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
        const $ccItems = document.getElementById('ccItems');
        if ($ccItems) {
            $ccItems.textContent = cart.length === 0 ? 'Keranjang kosong' : `${cart.length} item${cart.length > 1 ? 's' : ''}`;
        }
        const $btnWA = document.getElementById('btnWhatsApp');
        const $ccQuickOrder = document.getElementById('ccQuickOrder');
        if ($btnWA) $btnWA.disabled = cart.length === 0;
        if ($ccQuickOrder) $ccQuickOrder.disabled = cart.length === 0;
    }

    function setupCartPanel() {
        const $cartOverlay = document.getElementById('cartOverlay');
        if ($cartOverlay) $cartOverlay.addEventListener('click', closeCart);
    }

    window.openCart = function() {
        const $cartPanel = document.getElementById('cartPanel');
        const $cartOverlay = document.getElementById('cartOverlay');
        if ($cartPanel) $cartPanel.classList.add('open');
        if ($cartOverlay) $cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeCart = function() {
        const $cartPanel = document.getElementById('cartPanel');
        const $cartOverlay = document.getElementById('cartOverlay');
        if ($cartPanel) $cartPanel.classList.remove('open');
        if ($cartOverlay) $cartOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    };

    // ============ WHATSAPP ORDER ============
    window.orderViaWhatsApp = function() {
        if (cart.length === 0) {
            showToast('❌ Keranjang masih kosong');
            return;
        }

        const phone = config.businessPhone || '6281234567890';
        const businessName = config.businessName || 'Dapur Rumahan';

        let message = `*Pesanan dari Website ${businessName}*\n\n`;
        let total = 0;

        cart.forEach((item, idx) => {
            const itemTotal = item.finalPrice * item.qty;
            total += itemTotal;
            message += `${idx + 1}. ${item.submenuName} (${item.qty} pcs)\n`;
            message += `   Rp ${item.finalPrice.toLocaleString('id-ID')} × ${item.qty} = Rp ${itemTotal.toLocaleString('id-ID')}\n`;
            if (Object.keys(item.options).length > 0) {
                message += `   Opsi: ${Object.values(item.options).map(opt => opt.selectedName).join(', ')}\n`;
            }
            message += '\n';
        });

        message += `*Total: Rp ${total.toLocaleString('id-ID')}*\n`;
        message += `\nMohon konfirmasi ketersediaan dan jadwal pengiriman.`;

        const encoded = encodeURIComponent(message);
        const waUrl = `https://wa.me/${phone}?text=${encoded}`;
        window.open(waUrl, '_blank');
    };

    // ============ RENDER TESTIMONI ============
    function renderTestimonials() {
        const testimonials = config.testimonials || [];
        const container = document.querySelector('.testimoni-grid');
        if (!container || testimonials.length === 0) return;

        container.innerHTML = testimonials.map(t => `
            <div class="testimoni-card">
                <div class="quote-icon">❝</div>
                <p>"${t.quote}"</p>
                <div class="t-stars">${'⭐'.repeat(t.rating || 5)}</div>
                <div class="t-author">${t.author}</div>
                <div class="t-role">${t.role || ''}${t.location ? ' • ' + t.location : ''}</div>
            </div>
        `).join('');
    }

    // ============ NAVBAR ============
    function setupNavigation() {
        const $hamburger = document.getElementById('hamburger');
        const $navLinks = document.getElementById('navLinks');
        if ($hamburger && $navLinks) {
            $hamburger.addEventListener('click', () => {
                $navLinks.classList.toggle('open');
            });
            $navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => $navLinks.classList.remove('open'));
            });
        }

        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ============ TOAST ============
    function showToast(message) {
        const $toast = document.getElementById('toast');
        if (!$toast) return;
        $toast.textContent = message;
        $toast.classList.add('show');
        setTimeout(() => $toast.classList.remove('show'), 3000);
    }

    // ============ START ============
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();