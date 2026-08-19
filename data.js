// ==================== KONFIGURASI DINAMIS (DATABASE) ====================
// File ini sekarang berfungsi sebagai jembatan untuk mengambil data terbaru
// secara langsung dari database melalui API.

window.CONFIG = {};

window.loadConfig = async function() {
    try {
        const response = await fetch('data/api.php?action=getConfig');
        if (!response.ok) {
            throw new Error('Gagal terhubung ke API (Status: ' + response.status + ')');
        }
        
        const result = await response.json();
        
        if (result.status === 'success' && result.data) {
            window.CONFIG = result.data;
            console.log('✅ Konfigurasi berhasil dimuat dari Database!');
        } else {
            console.error('❌ API mengembalikan error:', result.message);
        }
    } catch (e) {
        console.error('❌ Gagal memuat data dari database:', e);
    }
    
    return window.CONFIG;
};

// Fallback compatibility
function getDefaultConfig() { return window.CONFIG; }
