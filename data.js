<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dapur Rumahan - Risoles &amp; Pudding Homemade</title>
    <link rel="stylesheet" href="assets/bootstrap-5.3.8-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <!-- ==================== NAVBAR ==================== -->
    <nav class="navbar" id="navbar">
        <div class="navbar-inner">
            <a href="#hero" class="nav-logo">
                <img src="assets/images/profile.jpg" alt="Logo" class="logo-icon-img"> Dapur Rumahan
            </a>
            <ul class="nav-links" id="navLinks">
                <li><a href="#hero" class="active" data-i18n="Beranda">Beranda</a></li>
                <li><a href="#about" data-i18n="Profil">Profil</a></li>
                <li><a href="#best-seller" data-i18n="Best Seller">Best Seller</a></li>
                <li><a href="#menu" data-i18n="Menu">Menu</a></li>
                <li><a href="#testimoni" data-i18n="Testimoni">Testimoni</a></li>
                <li>
                    <button class="nav-cart-btn btn" onclick="openCart()" aria-label="Buka keranjang">
                        <span id="cartBadgeParent" data-i18n="Keranjang">🛒 Keranjang</span> <span class="cart-badge"
                            id="cartBadge">0</span>
                    </button>
                </li>
                <li>
                    <button id="langToggleBtn" class="btn btn-outline"
                        style="padding:4px 8px;font-size:0.8rem;margin-left:8px;" onclick="toggleLanguage()">🇮🇩
                        ID</button>
                </li>
            </ul>
            <button class="hamburger" id="hamburger" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <!-- ==================== HERO SECTION ==================== -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <span class="hero-badge" data-i18n="Homemade Since 2021">🏠 Homemade Since 2021</span>
            <h1 data-i18n="Risoles Renyah & Pudding Lembut Rumahan">Risoles Renyah &amp; <span class="highlight">Pudding
                    Lembut</span> Rumahan</h1>
            <p
                data-i18n="Dibuat dengan bahan berkualitas dan cinta di setiap gigitan. Tersedia dalam opsi goreng hangat atau frozen siap simpan.">
                Dibuat dengan bahan berkualitas, resep turun-temurun, dan cinta di setiap gigitan. Tersedia dalam opsi
                goreng hangat atau frozen siap simpan.</p>
            <div class="hero-buttons">
                <a href="#menu" class="btn btn-primary" data-i18n="Lihat Menu">📋 Lihat Menu</a>
                <a href="#about" class="btn btn-outline" data-i18n="Tentang Kami">👩‍🍳 Tentang Kami</a>
            </div>
        </div>
        <div class="hero-visual">
            <span class="food-emoji">🥟</span>
            <span class="food-emoji">🍮</span>
            <span class="food-emoji">🥐</span>
        </div>
    </section>

    <!-- ==================== ABOUT / PROFILE ==================== -->
    <section class="section about-section" id="about">
        <div class="about-grid">
            <div class="about-image" id="aboutImageContainer">
                <img id="aboutImage" src="assets/images/profile.jpg" alt="Tentang Kami"
                    style="width:100%;height:100%;object-fit:cover;border-radius:20px;">
            </div>
            <div class="about-text">
                <span class="section-label" data-i18n="Profil Kami">Profil Kami</span>
                <h2 data-i18n="Cerita dari Dapur Kecil Penuh Cinta">Cerita dari Dapur Kecil Penuh Cinta</h2>
                <p>
                    <strong
                        data-i18n="Dapur Rumahan berawal dari hobi membuat camilan untuk keluarga. Resep risoles warisan nenek dan pudding lembut favorit anak-anak kini hadir untuk Anda.">Dapur
                        Rumahan berawal dari hobi membuat camilan untuk keluarga. Resep risoles
                        dan pudding lembut favorit anak-anak kini hadir untuk Anda.</strong>
                </p>
                <p
                    data-i18n="Setiap produk kami buat fresh setiap hari menggunakan bahan-bahan pilihan. Kami percaya bahwa makanan rumahan terbaik lahir dari kesederhanaan, kebersihan, dan ketulusan.">
                    Setiap produk kami buat fresh setiap hari menggunakan bahan-bahan pilihan. Kami percaya bahwa
                    makanan rumahan terbaik lahir dari kesederhanaan, kebersihan, dan ketulusan.
                </p>
                <div class="about-highlights">
                    <div class="about-highlight">
                        <span class="icon-circle">✅</span> Bahan Segar
                    </div>
                    <div class="about-highlight">
                        <span class="icon-circle">🧼</span> Higienis
                    </div>
                    <div class="about-highlight">
                        <span class="icon-circle">❤️</span> Made with Love
                    </div>
                    <div class="about-highlight">
                        <span class="icon-circle">🚀</span> Pengiriman Cepat
                    </div>
                </div>
                <!-- Social Media Links -->
                <div class="about-social">
                    <p class="social-label">Ikuti kami di media sosial</p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/treatsby.nad/" target="_blank" rel="noopener noreferrer"
                            class="social-icon instagram" aria-label="Follow kami di Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                            </svg>
                            <span>@treatsby.nad</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== BEST SELLER ==================== -->
    <section class="section best-seller-section" id="best-seller">
        <div class="section-header">
            <span class="section-label" data-i18n="Best Seller">🌟 Best Seller</span>
            <h2 class="section-title" data-i18n="Pilihan Favorit Pelanggan">Paling Banyak Dipesan</h2>
            <p class="section-subtitle" data-i18n="Menu paling laris dan disukai">Inilah produk-produk andalan yang
                selalu jadi favorit pelanggan setia kami.</p>
        </div>
        <div class="best-seller-grid" id="bestSellerGrid">
            <!-- Best seller cards rendered by app.js from CONFIG.bestSellers -->
        </div>
    </section>

    <!-- ==================== MENU SECTION ==================== -->
    <section class="section menu-section" id="menu">
        <div class="section-header">
            <span class="section-label" data-i18n="Menu">📋 Menu Kami</span>
            <h2 class="section-title" data-i18n="Pilihan Menu Utama">Pilih &amp; Pesan Sekarang</h2>
            <p class="section-subtitle">Semua menu tersedia fresh, langsung dari dapur kami ke tangan Anda.</p>
        </div>
        <div class="menu-grid" id="menuGrid">
            <!-- Dirender secara dinamis oleh app.js -->
        </div>
    </section>

    <!-- ==================== TESTIMONI ==================== -->
    <section class="section testimoni-section" id="testimoni">
        <div class="section-header">
            <span class="section-label">💬 Testimoni</span>
            <h2 class="section-title">Kata Pelanggan Kami</h2>
            <p class="section-subtitle">Ratusan pelanggan puas telah mencicipi produk Dapur Rumahan.</p>
        </div>
        <div class="testimoni-grid">
            <div class="testimoni-card">
                <div class="quote-icon">❝</div>
                <p>"Risolesnya enak banget! Kulitnya renyah, isiannya creamy. Saya selalu stok yang frozen di rumah biar
                    bisa goreng kapan aja. Recommended!"</p>
                <div class="t-stars">⭐⭐⭐⭐⭐</div>
                <div class="t-author">Anisa Putri</div>
                <div class="t-role">Pelanggan Setia • Jakarta</div>
            </div>
            <div class="testimoni-card">
                <div class="quote-icon">❝</div>
                <p>"Pudding Silverqueen-nya juara! Lembut banget dan cokelatnya kerasa premium. Cocok buat hampers atau
                    dessert acara keluarga."</p>
                <div class="t-stars">⭐⭐⭐⭐⭐</div>
                <div class="t-author">Budi Santoso</div>
                <div class="t-role">Food Blogger • Bandung</div>
            </div>
            <div class="testimoni-card">
                <div class="quote-icon">❝</div>
                <p>"Langganan udah 2 tahun. Bersih, enak, dan pelayanannya ramah. Pudding Regal favorit anak-anak saya.
                    Pasti repeat order!"</p>
                <div class="t-stars">⭐⭐⭐⭐⭐</div>
                <div class="t-author">Sari Wulandari</div>
                <div class="t-role">Ibu Rumah Tangga • Surabaya</div>
            </div>
        </div>
    </section>

    <!-- ==================== FOOTER ==================== -->
    <footer class="footer">
        <p>&copy; 2026 <strong>Dapur Rumahan</strong> — Risoles &amp; Pudding Homemade. Made with ❤️ dari dapur kecil
            kami
            untuk Anda.</p>
    </footer>

    <!-- ==================== CART OVERLAY & PANEL ==================== -->
    <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
    <div class="cart-panel" id="cartPanel">
        <!-- Collapsed compact bar visible when panel is collapsed -->
        <div class="cart-collapsed" id="cartCollapsed" onclick="openCart()" role="button" aria-label="Buka keranjang">
            <div class="cc-left">
                <div class="cc-count" id="ccCount">0</div>
                <div class="cc-info">
                    <div class="cc-items" id="ccItems">Keranjang kosong</div>
                    <div class="cc-total" id="ccTotal">Rp 0</div>
                </div>
            </div>
            <div class="cc-action">
                <button id="ccQuickOrder" class="cc-quick-btn" onclick="orderViaWhatsApp()"
                    aria-label="Pesan sekarang">Pesan</button>
                <div style="width:8px"></div>
                <div>🛒</div>
            </div>
        </div>
        <div class="cart-header">
            <h3>🛒 Keranjang Belanja</h3>
            <button class="cart-close" onclick="closeCart()" aria-label="Tutup keranjang">✕</button>
        </div>
        <div class="cart-items" id="cartItems">
            <div class="cart-empty">
                <div class="empty-icon">🛒</div>
                <p>Keranjang masih kosong.</p>
                <p style="font-size:0.85rem;">Yuk, pilih menu favoritmu!</p>
            </div>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Total:</span>
                <span class="total-price" id="cartTotal">Rp 0</span>
            </div>
            <button class="btn-wa" id="btnWhatsApp" onclick="orderViaWhatsApp()" disabled>
                💬 Pesan via WhatsApp
            </button>
        </div>
    </div>

    <!-- ==================== TOAST ==================== -->
    <div class="toast" id="toast"></div>

    <!-- ==================== SCRIPTS ==================== -->
    <script src="assets/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js"></script>
    <script src="lang.js"></script>
    <script src="data.js"></script>
    <script src="app.js"></script>
</body>

</html>
