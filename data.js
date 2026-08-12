// ==================== KONFIGURASI STATIS (GITHUB PAGES) ====================
// File ini digenerate otomatis dari fitur Export Admin Panel.
// Tidak memerlukan database atau API (PHP/MySQL) sama sekali.

window.CONFIG = {};

window.loadConfig = async function() {
    return window.CONFIG;
};

// Fallback compatibility
function getDefaultConfig() { return window.CONFIG; }
function fetchConfig() { return Promise.resolve(window.CONFIG); }
