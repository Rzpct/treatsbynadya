// ==================== KONFIGURASI DAPUR RUMAHAN ====================
// Data diambil dari API (MySQL) dengan fallback ke localStorage & default

// data.js
// data.js dan admin.js – ubah baris ini
const API_BASE = './data/api.php';

// ============ HELPER API ============
async function apiCall(action, data = {}) {
    try {
        const response = await fetch(API_BASE + '?action=' + action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();
        if (result.error) {
            throw new Error(result.error);
        }
        return result;
    } catch (error) {
        console.warn(`⚠️ API Call gagal (${action}):`, error.message);
        return null;
    }
}

// ============ DEFAULT CONFIG (Fallback jika semua gagal) ============
function getDefaultConfig() {
    return {
        businessName: 'Dapur Rumahan',
        businessPhone: '6281234567890',
        businessDescription: 'Risoles Renyah & Pudding Lembut Rumahan',
        aboutTitle: 'Cerita dari Dapur Kecil Penuh Cinta',
        aboutMainText: 'Dapur Rumahan berawal dari hobi membuat camilan untuk keluarga. Resep risoles warisan nenek dan pudding lembut favorit anak-anak kini hadir untuk Anda.',
        aboutSubText: 'Setiap produk kami buat fresh setiap hari menggunakan bahan-bahan pilihan. Kami percaya bahwa makanan rumahan terbaik lahir dari kesederhanaan, kebersihan, dan ketulusan.',
        aboutImage: 'assets/images/about.jpg',
        aboutHighlights: '✅ Bahan Segar,🧼 Higienis,❤️ Made with Love,🚀 Pengiriman Cepat',
        products: [
            {
                id: 'risoles',
                name: 'Risoles',
                emoji: '🥟',
                description: 'Keluarga risoles homemade dengan beragam isi dan gaya sajian.',
                image: 'assets/images/risoles.webp',
                note: '📦 Minimal pembelian 10 pcs. Tambah dalam kelipatan 5 atau 10.',
                isBestSeller: true,
                bestSellerBadge: '🔥 Best Seller',
                rating: 5,
                salesRules: { minOrder: 10, defaultStep: 5, stepOptions: [5, 10] },
                submenus: [
                    { id: 'sosis', name: 'Risoles Sosis', description: 'Isi sosis gurih dengan tekstur lembut.', image: 'assets/images/risoles.webp', price: 5000, note: 'Pilihan aman untuk semua pelanggan.' },
                    { id: 'ragout', name: 'Risoles Ragout', description: 'Ragout creamy yang lebih kaya rasa.', image: 'assets/images/risoles.webp', price: 6000, note: 'Cocok untuk yang ingin rasa lebih gurih.' },
                    { id: 'smoke-beef', name: 'Risoles Smoke Beef', description: 'Rasa smoky yang lebih premium.', image: 'assets/images/risoles.webp', price: 7000, note: 'Varian paling premium dari keluarga risoles.' }
                ],
                optionalGroups: [
                    {
                        id: 'serving',
                        label: 'Penyajian',
                        options: [
                            { id: 'goreng', name: 'Goreng', adj: 0 },
                            { id: 'frozen', name: 'Frozen', adj: -500 }
                        ]
                    },
                    {
                        id: 'variant',
                        label: 'Pilihan Isi',
                        options: [
                            { id: 'normal', name: 'Normal', adj: 0 },
                            { id: 'tanpa-telur', name: 'Tanpa Telur', adj: -500 }
                        ]
                    }
                ]
            },
            {
                id: 'pudding',
                name: 'Pudding',
                emoji: '🍮',
                description: 'Keluarga pudding homemade dengan beberapa rasa dan pilihan topping.',
                image: 'assets/images/pudding-silverqueen.webp',
                note: '✨ Pudding lembut lapis cokelat Silverqueen premium. 1 cup = 1 porsi.',
                isBestSeller: true,
                bestSellerBadge: '💎 Premium',
                rating: 5,
                salesRules: null,
                submenus: [
                    { id: 'silverqueen', name: 'Pudding Silverqueen', description: 'Lembut, creamy, dengan lapisan cokelat Silverqueen premium.', image: 'assets/images/pudding-silverqueen.webp', price: 35000, note: '1 cup = 1 porsi.' },
                    { id: 'regal', name: 'Pudding Regal', description: 'Perpaduan pudding vanilla lembut dengan remahan biskuit Regal.', image: 'assets/images/pudding-regal.webp', price: 30000, note: '1 cup = 1 porsi.' }
                ],
                optionalGroups: [
                    {
                        id: 'presentation',
                        label: 'Tampilan',
                        options: [
                            { id: 'normal', name: 'Normal', adj: 0 },
                            { id: 'pisah-topping', name: 'Pisah Topping', adj: 0 }
                        ]
                    },
                    {
                        id: 'topping',
                        label: 'Tekstur Topping',
                        options: [
                            { id: 'halus', name: 'Topping Halus', adj: 0 },
                            { id: 'kasar', name: 'Topping Kasar', adj: 0 }
                        ]
                    }
                ]
            }
        ],
        bestSellers: [
            { id: 'risoles', name: 'Risoles Sosis', image: 'assets/images/risoles.webp', description: 'Kulit renyah, isian creamy.', badge: '🔥 Best Seller', rating: 5 },
            { id: 'pudding-silverqueen', name: 'Pudding Silverqueen', image: 'assets/images/pudding-silverqueen.webp', description: 'Lembut dengan cokelat premium.', badge: '💎 Premium', rating: 5 },
            { id: 'pudding-regal', name: 'Pudding Regal', image: 'assets/images/pudding-regal.webp', description: 'Perpaduan vanilla dan biskuit Regal.', badge: '👑 Favorit', rating: 5 }
        ],
        testimonials: [
            { id: 1, quote: 'Risolesnya enak banget! Kulitnya renyah, isiannya creamy. Saya selalu stok yang frozen di rumah biar bisa goreng kapan aja. Recommended!', author: 'Anisa Putri', location: 'Jakarta', role: 'Pelanggan Setia', rating: 5 },
            { id: 2, quote: 'Pudding Silverqueen-nya juara! Lembut banget dan cokelatnya kerasa premium. Cocok buat hampers atau dessert acara keluarga.', author: 'Budi Santoso', location: 'Bandung', role: 'Food Blogger', rating: 5 },
            { id: 3, quote: 'Langganan udah 2 tahun. Bersih, enak, dan pelayanannya ramah. Pudding Regal favorit anak-anak saya. Pasti repeat order!', author: 'Sari Wulandari', location: 'Surabaya', role: 'Ibu Rumah Tangga', rating: 5 }
        ]
    };
}

// ============ LOAD DARI LOCAL STORAGE (Fallback) ============
function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('DAPUR_CONFIG');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Pastikan struktur lengkap (merge dengan default untuk menjaga konsistensi)
            const defaults = getDefaultConfig();
            return { ...defaults, ...parsed };
        }
    } catch (e) {
        console.warn('Gagal baca localStorage:', e);
    }
    return null;
}

// ============ SIMPAN KE LOCAL STORAGE (Cache) ============
function saveToLocalStorage(config) {
    try {
        localStorage.setItem('DAPUR_CONFIG', JSON.stringify(config));
    } catch (e) {
        console.warn('Gagal simpan ke localStorage:', e);
    }
}

// ============ FETCH DARI API & GABUNGKAN ============
async function fetchConfig() {
    try {
        // Jalankan semua request secara paralel untuk efisiensi
        const [businessResult, productsResult, bestSellersResult, testimonialsResult] = await Promise.all([
            apiCall('getBusinessInfo'),
            apiCall('getProducts'),
            apiCall('getBestSellers'),
            apiCall('getTestimonials')
        ]);

        // Mulai dari default config
        const config = getDefaultConfig();

        // 1. Update Business Info — API sekarang mengembalikan dual key (snake_case + camelCase)
        if (businessResult && businessResult.data) {
            const biz = businessResult.data;
            // Baca camelCase alias yang telah ditambahkan di api.php
            if (biz.businessName)        config.businessName        = biz.businessName;
            if (biz.businessPhone)       config.businessPhone       = biz.businessPhone;
            if (biz.businessDescription) config.businessDescription = biz.businessDescription;
            if (biz.aboutTitle)          config.aboutTitle          = biz.aboutTitle;
            if (biz.aboutMainText)       config.aboutMainText       = biz.aboutMainText;
            if (biz.aboutSubText)        config.aboutSubText        = biz.aboutSubText;
            // Foto profil: pakai DB jika ada, fallback ke default
            if (biz.aboutImage)          config.aboutImage          = biz.aboutImage;
            else if (biz.about_image)    config.aboutImage          = biz.about_image;
            // Highlights: bisa array atau string
            if (biz.aboutHighlights) {
                config.aboutHighlights = biz.aboutHighlights;
            } else if (biz.highlights) {
                config.aboutHighlights = biz.highlights;
            }
        }

        // 2. Update Products
        if (productsResult && productsResult.data && productsResult.data.length > 0) {
            config.products = productsResult.data.map(p => {
                // Ekstrak image konfigurasi dari sales_rules jika ada
                if (p.sales_rules) {
                    if (p.sales_rules.imageScale !== undefined)   p.imageScale = p.sales_rules.imageScale;
                    if (p.sales_rules.imageOffsetX !== undefined) p.imageOffsetX = p.sales_rules.imageOffsetX;
                    if (p.sales_rules.imageOffsetY !== undefined) p.imageOffsetY = p.sales_rules.imageOffsetY;
                }
                return p;
            });
        }

        // 3. Update Best Sellers
        if (bestSellersResult && bestSellersResult.data && bestSellersResult.data.length > 0) {
            config.bestSellers = bestSellersResult.data;
        }

        // 4. Update Testimonials
        if (testimonialsResult && testimonialsResult.data && testimonialsResult.data.length > 0) {
            config.testimonials = testimonialsResult.data;
        }

        // Simpan ke localStorage sebagai cache
        saveToLocalStorage(config);

        return config;
    } catch (error) {
        console.error('❌ Gagal fetch dari API:', error);
        // Fallback ke localStorage atau default
        const fallback = loadFromLocalStorage();
        if (fallback) {
            console.log('✅ Menggunakan data dari localStorage (cache)');
            return fallback;
        }
        console.log('⚠️ Menggunakan data default (hardcoded)');
        return getDefaultConfig();
    }
}

// ============ SIMPAN KONFIGURASI KE API (Business Info saja untuk saat ini) ============
async function saveConfig(configData) {
    try {
        // Kirim hanya businessInfo yang diubah
        const businessInfo = {
            business_name:        configData.businessName,
            business_phone:       configData.businessPhone,
            business_description: configData.businessDescription,
            about_title:          configData.aboutTitle,
            about_main_text:      configData.aboutMainText,
            about_sub_text:       configData.aboutSubText,
            about_image:          configData.aboutImage,
            highlights:           configData.aboutHighlights
        };

        const result = await apiCall('updateBusinessInfo', { businessInfo });
        if (result) {
            console.log('✅ Config berhasil disimpan ke API');
            // Update cache lokal DAN window.CONFIG agar halaman langsung reflect perubahan
            saveToLocalStorage(configData);
            window.CONFIG = configData;
            return true;
        }
        return false;
    } catch (e) {
        console.error('Gagal simpan config:', e);
        return false;
    }
}

// ============ RESET CONFIG ============
function resetConfig() {
    localStorage.removeItem('DAPUR_CONFIG');
    const defaults = getDefaultConfig();
    saveToLocalStorage(defaults);
    window.CONFIG = defaults;
    location.reload();
}

// ============ EKSPOR GLOBAL UNTUK APP.JS & ADMIN.JS ============
window.loadConfig = async function() {
    const config = await fetchConfig();
    window.CONFIG = config;
    console.log('✅ Config loaded:', config);
    return config;
};

window.saveConfig = saveConfig;
window.resetConfig = resetConfig;

// ============ INISIALISASI OTOMATIS SAAT LOAD ============
(async function init() {
    // Tunggu hingga DOM siap (optional, karena app.js juga panggil loadConfig)
    // Tapi kita panggil agar tersedia saat app.js dijalankan
    if (!window.CONFIG) {
        window.CONFIG = await fetchConfig();
    }
})();