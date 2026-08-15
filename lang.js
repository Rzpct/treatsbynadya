const translations = {
    // Navbar
    "Beranda": "Home",
    "Profil": "Profile",
    "Best Seller": "Best Seller",
    "Menu": "Menu",
    "Testimoni": "Testimonials",
    "Keranjang": "Cart",

    // Hero Section
    "Homemade Since 2021": "Homemade Since 2021",
    "Risoles Renyah & Pudding Lembut Rumahan": "Crispy Risoles & Soft Homemade Pudding",
    "Dibuat dengan bahan berkualitas, resep turun-temurun, dan cinta di setiap gigitan. Tersedia dalam opsi goreng hangat atau frozen siap simpan.": "Made with quality ingredients, family recipes, and love in every bite. Available hot fried or frozen ready to store.",
    "Lihat Menu": "View Menu",
    "Tentang Kami": "About Us",

    // About Section
    "Profil Kami": "Our Profile",
    "Cerita dari Dapur Kecil Penuh Cinta": "A Story from a Kitchen Full of Love",
    "Dapur Rumahan berawal dari hobi membuat camilan untuk keluarga. Resep risoles warisan nenek dan pudding lembut favorit anak-anak kini hadir untuk Anda.": "Dapur Rumahan started from a hobby of making snacks for the family. Grandma's heritage risoles recipe and the kids' favorite soft pudding are now here for you.",
    "Setiap produk kami buat fresh setiap hari menggunakan bahan-bahan pilihan. Kami percaya bahwa makanan rumahan terbaik lahir dari kesederhanaan, kebersihan, dan ketulusan.": "We make every product fresh every day using selected ingredients. We believe that the best homemade food comes from simplicity, cleanliness, and sincerity.",
    "Bahan Segar": "Fresh Ingredients",
    "Higienis": "Hygienic",
    "Made with Love": "Made with Love",
    "Pengiriman Cepat": "Fast Delivery",
    "Ikuti kami di media sosial": "Follow us on social media",

    // Best Seller & Menu Section
    "Pilihan Favorit Pelanggan": "Customer's Favorite Picks",
    "Menu paling laris dan disukai": "Our best-selling and most loved menu",
    "Pilihan Menu Utama": "Main Menu Selection",
    "Pesan Sekarang": "Order Now",

    // Testimonial
    "Apa Kata Mereka": "What They Say",
    "Ulasan jujur dari pelanggan kami": "Honest reviews from our customers",

    // Footer
    "Hubungi Kami": "Contact Us",
    "Jam Operasional": "Operational Hours",
    "Buka Setiap Hari": "Open Everyday",
    "08:00 - 17:00 WIB": "08:00 AM - 05:00 PM",
    "Lokasi": "Location",
    "Jakarta, Indonesia": "Jakarta, Indonesia",

    // Modals & Cart (App.js hardcoded)
    "Tutup": "Close",
    "Kembali": "Back",
    "Lanjut ke WhatsApp": "Continue to WhatsApp",
    "Keranjang Anda kosong.": "Your cart is empty.",
    "Keranjang kosong": "Empty cart",
    "item": "item",
    "pcs": "pcs",
    "Pesanan dari Website": "Website Order",
    "Opsi": "Option",
    "Total:": "Total:",
    "Subtotal:": "Subtotal:",
    "Tambahkan ke Keranjang": "Add to Cart",
    "Catatan untuk penjual (opsional)...": "Notes for the seller (optional)...",
    "Pilih Varian:": "Select Variant:",
    "Pilih varian dulu": "Select a variant first",
    "Kuantitas:": "Quantity:",
    "Minimal Order": "Minimum Order",
    "Halo, saya ingin memesan:": "Hello, I would like to order:",
    "Catatan:": "Notes:",
    "Harga:": "Price:",

    // Dynamic Data (from data.js)
    "Pilihan aman untuk semua pelanggan.": "A safe choice for all customers.",
    "Cocok untuk yang ingin rasa lebih gurih.": "Perfect for those who want a more savory taste.",
    "Varian paling premium dari keluarga risoles.": "The most premium variant from the risoles family.",
    "Rasakan perpaduan coklat dan keju": "Taste the mix of chocolate and cheese",
    "Nikmat Rasakan Gurih dan Coklat": "Delicious savory and chocolate taste",
    "Chocolate Lovers": "Chocolate Lovers",
    "Setiap Lapisan Punya Cerita": "Every Layer Has a Story",
    
    "Pilihan Isi": "Filling Option",
    "Opsi Penyajian": "Serving Option",
    "Serving": "Serving",
    "Topping": "Topping",
    "Ukuran": "Size",
    
    "Goreng (Hangat)": "Fried (Warm)",
    "Frozen (Siap Simpan)": "Frozen (Ready to store)",
    "Keju": "Cheese",
    "Coklat": "Chocolate",
    "Sedang (500ml)": "Medium (500ml)",
    "Kecil (100ml)": "Small (100ml)",
    "Tanpa Topping": "No Topping",
    
    // Fallbacks just in case
    "Asin (Gurih)": "Savory",
    "Manis (Sweet)": "Sweet"
};

// State bahasa saat ini (default: id)
window.currentLang = localStorage.getItem('siteLang') || 'id';

// Fungsi utama penerjemah
window.t = function(text) {
    if (!text) return text;
    // Bersihkan spasi berlebih
    const cleanText = text.trim();
    if (window.currentLang === 'en' && translations[cleanText]) {
        // Coba pertahankan leading/trailing whitespace jika ada (opsional)
        return text.replace(cleanText, translations[cleanText]);
    }
    return text;
};

// Fungsi update elemen ber-atribut data-i18n
window.updateStaticTranslations = function() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        
        // Khusus jika di dalamnya ada span atau badge, kita harus render hati-hati.
        // Di index.html, beberapa teks seperti badge memiliki ikon HTML di dalamnya.
        // Agar aman, kita gunakan innerHTML, pastikan key-nya sederhana.
        if (key) {
            let translated = window.t(key);
            
            // Pertahankan ikon emoji statis jika ada (khusus logo cart dan hero)
            if (el.id === 'cartBadgeParent') {
                // Jangan override badge cart
                return; 
            }
            
            el.innerHTML = translated;
        }
    });
};

// Fungsi toggle bahasa
window.toggleLanguage = function() {
    window.currentLang = window.currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('siteLang', window.currentLang);
    
    // Update tombol toggle di navbar
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.innerHTML = window.currentLang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';
    }
    
    // Update seluruh halaman statis
    window.updateStaticTranslations();
    
    // Panggil ulang render dinamis di app.js jika ada
    if (typeof renderBestSellers === 'function') renderBestSellers();
    if (typeof renderMenu === 'function') renderMenu();
    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof renderTestimonials === 'function') renderTestimonials();
    
    // Update modal submenu jika sedang terbuka
    if (document.getElementById('submenuModal')?.classList.contains('open') && typeof openSubmenuModal === 'function') {
        // Hanya update teks tertentu atau tutup modal, lebih aman dirender ulang oleh user
    }
};

// Inisialisasi awal saat script dimuat
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.innerHTML = window.currentLang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';
    }
    window.updateStaticTranslations();
});
