// ==================== KONFIGURASI STATIS (GITHUB PAGES) ====================
// File ini digenerate otomatis dari fitur Export Admin Panel.
// Tidak memerlukan database atau API (PHP/MySQL) sama sekali.

window.CONFIG = {
    "businessName": "Treats by Nad",
    "businessPhone": "6281355631765",
    "businessDescription": "Risoles Renyah & Pudding Lembut Rumahan",
    "aboutTitle": "Cerita dari Dapur Kecil Penuh Cinta",
    "aboutMainText": "Dapur Rumahan berawal dari hobi membuat camilan untuk keluarga. Resep risoles warisan nenek dan pudding lembut favorit anak-anak kini hadir untuk Anda.",
    "aboutSubText": "Setiap produk kami buat fresh setiap hari menggunakan bahan-bahan pilihan. Kami percaya bahwa makanan rumahan terbaik lahir dari kesederhanaan, kebersihan, dan ketulusan.",
    "aboutImage": "assets/images/about_1786329499.jpg",
    "aboutHighlights": [
        "Bahan Segar",
        "Higienis",
        "Made with Love",
        "Pengiriman Cepat"
    ],
    "products": [
        {
            "id": "pudding",
            "name": "Pudding",
            "parent_name": "",
            "emoji": "🍮",
            "description": "Keluarga pudding homemade dengan beberapa rasa dan pilihan topping.",
            "image": "assets/images/pudding-silverqueen.webp",
            "note": "",
            "is_best_seller": "0",
            "best_seller_badge": "",
            "rating": "5",
            "sales_rules": {
                "imageScale": 100,
                "imageOffsetX": 0,
                "imageOffsetY": 0
            },
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-11 21:20:03",
            "submenus": [
                {
                    "id": "silverqueen",
                    "product_id": "pudding",
                    "name": "Pudding Silverqueen",
                    "description": "",
                    "image": "assets/images/pudding-silverqueen.webp",
                    "price": 125000,
                    "note": "Chocolate Lovers",
                    "sort_order": "0",
                    "created_at": "2026-08-12 20:26:48",
                    "updated_at": "2026-08-12 20:26:48",
                    "imageScale": 160,
                    "imageOffsetX": 0,
                    "imageOffsetY": 45
                },
                {
                    "id": "regal",
                    "product_id": "pudding",
                    "name": "Pudding Regal",
                    "description": "",
                    "image": "assets/images/pudding-regal.webp",
                    "price": 95000,
                    "note": "Setiap Lapisan Punya Cerita",
                    "sort_order": "1",
                    "created_at": "2026-08-12 20:26:48",
                    "updated_at": "2026-08-12 20:26:48",
                    "imageScale": 150,
                    "imageOffsetX": 0,
                    "imageOffsetY": 45
                }
            ],
            "optionalGroups": [
                {
                    "id": "presentation",
                    "product_id": "pudding",
                    "label": "Tampilan",
                    "sort_order": "0",
                    "created_at": "2026-08-12 20:26:48",
                    "updated_at": "2026-08-12 20:26:48",
                    "options": [
                        {
                            "id": "normal",
                            "group_id": "presentation",
                            "product_id": "pudding",
                            "name": "Normal",
                            "adjustment": 0,
                            "sort_order": "0",
                            "created_at": "2026-08-12 20:26:48",
                            "updated_at": "2026-08-12 20:26:48",
                            "adj": 0
                        },
                        {
                            "id": "pisah-topping",
                            "group_id": "presentation",
                            "product_id": "pudding",
                            "name": "Pisah Topping",
                            "adjustment": 0,
                            "sort_order": "1",
                            "created_at": "2026-08-12 20:26:48",
                            "updated_at": "2026-08-12 20:26:48",
                            "adj": 0
                        }
                    ]
                },
                {
                    "id": "topping",
                    "product_id": "pudding",
                    "label": "Tekstur Topping",
                    "sort_order": "1",
                    "created_at": "2026-08-12 20:26:48",
                    "updated_at": "2026-08-12 20:26:48",
                    "options": [
                        {
                            "id": "halus",
                            "group_id": "topping",
                            "product_id": "pudding",
                            "name": "Topping Halus",
                            "adjustment": 0,
                            "sort_order": "0",
                            "created_at": "2026-08-12 20:26:48",
                            "updated_at": "2026-08-12 20:26:48",
                            "adj": 0
                        },
                        {
                            "id": "kasar",
                            "group_id": "topping",
                            "product_id": "pudding",
                            "name": "Topping Kasar",
                            "adjustment": 0,
                            "sort_order": "1",
                            "created_at": "2026-08-12 20:26:48",
                            "updated_at": "2026-08-12 20:26:48",
                            "adj": 0
                        }
                    ]
                }
            ],
            "imageScale": 100,
            "imageOffsetX": 0,
            "imageOffsetY": 0
        },
        {
            "id": "risoles",
            "name": "Risoles",
            "parent_name": "Risoles",
            "emoji": "🥟",
            "description": "Keluarga risoles homemade dengan beragam isi dan gaya sajian.",
            "image": "assets/images/risoles.webp",
            "note": "📦 Minimal pembelian 10 pcs. Tambah dalam kelipatan 5 atau 10.",
            "is_best_seller": "1",
            "best_seller_badge": "🔥 Best Seller",
            "rating": "5",
            "sales_rules": {
                "minOrder": 10,
                "defaultStep": 5,
                "stepOptions": [
                    5,
                    10
                ],
                "imageScale": 100,
                "imageOffsetX": 0,
                "imageOffsetY": 0
            },
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-10 11:13:22",
            "submenus": [
                {
                    "id": "sosis",
                    "product_id": "risoles",
                    "name": "Risoles Sosis",
                    "description": "",
                    "image": "assets/images/sosis mayo-nobg.webp",
                    "price": 5000,
                    "note": "Pilihan aman untuk semua pelanggan.",
                    "sort_order": "0",
                    "created_at": "2026-08-11 21:15:59",
                    "updated_at": "2026-08-11 21:15:59",
                    "imageScale": 190,
                    "imageOffsetX": 0,
                    "imageOffsetY": 50
                },
                {
                    "id": "ragout",
                    "product_id": "risoles",
                    "name": "Risoles Ragout",
                    "description": "",
                    "image": "assets/images/ragout-nobg.webp",
                    "price": 6000,
                    "note": "Cocok untuk yang ingin rasa lebih gurih.",
                    "sort_order": "1",
                    "created_at": "2026-08-11 21:15:59",
                    "updated_at": "2026-08-11 21:15:59",
                    "imageScale": 190,
                    "imageOffsetX": 0,
                    "imageOffsetY": 50
                },
                {
                    "id": "smoke-beef",
                    "product_id": "risoles",
                    "name": "Risoles Smoke Beef",
                    "description": "",
                    "image": "assets/images/smokebeef-nobg.webp",
                    "price": 7000,
                    "note": "Varian paling premium dari keluarga risoles.",
                    "sort_order": "2",
                    "created_at": "2026-08-11 21:15:59",
                    "updated_at": "2026-08-11 21:15:59",
                    "imageScale": 190,
                    "imageOffsetX": 0,
                    "imageOffsetY": 50
                }
            ],
            "optionalGroups": [
                {
                    "id": "serving",
                    "product_id": "risoles",
                    "label": "Penyajian",
                    "sort_order": "0",
                    "created_at": "2026-08-11 21:15:59",
                    "updated_at": "2026-08-11 21:15:59",
                    "options": [
                        {
                            "id": "goreng",
                            "group_id": "serving",
                            "product_id": "risoles",
                            "name": "Goreng",
                            "adjustment": 0,
                            "sort_order": "0",
                            "created_at": "2026-08-11 21:15:59",
                            "updated_at": "2026-08-11 21:15:59",
                            "adj": 0
                        },
                        {
                            "id": "frozen",
                            "group_id": "serving",
                            "product_id": "risoles",
                            "name": "Frozen",
                            "adjustment": -500,
                            "sort_order": "1",
                            "created_at": "2026-08-11 21:15:59",
                            "updated_at": "2026-08-11 21:15:59",
                            "adj": -500
                        }
                    ]
                },
                {
                    "id": "variant",
                    "product_id": "risoles",
                    "label": "Pilihan Isi",
                    "sort_order": "1",
                    "created_at": "2026-08-11 21:15:59",
                    "updated_at": "2026-08-11 21:15:59",
                    "options": [
                        {
                            "id": "normal",
                            "group_id": "variant",
                            "product_id": "risoles",
                            "name": "Normal",
                            "adjustment": 0,
                            "sort_order": "0",
                            "created_at": "2026-08-11 21:15:59",
                            "updated_at": "2026-08-11 21:15:59",
                            "adj": 0
                        },
                        {
                            "id": "tanpa-telur",
                            "group_id": "variant",
                            "product_id": "risoles",
                            "name": "Tanpa Telur",
                            "adjustment": -500,
                            "sort_order": "1",
                            "created_at": "2026-08-11 21:15:59",
                            "updated_at": "2026-08-11 21:15:59",
                            "adj": -500
                        }
                    ]
                }
            ],
            "imageScale": 100,
            "imageOffsetX": 0,
            "imageOffsetY": 0
        }
    ],
    "bestSellers": [
        {
            "id": "risoles",
            "name": "Risoles Sosis",
            "image": "assets/images/risoles.webp",
            "description": "Kulit renyah, isian creamy.",
            "badge": "🔥 Best Seller",
            "rating": "5",
            "sort_order": "1",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-10 00:02:45"
        },
        {
            "id": "pudding-silverqueen",
            "name": "Pudding Silverqueen",
            "image": "assets/images/pudding-silverqueen.webp",
            "description": "Lembut dengan cokelat premium.",
            "badge": "💎 Premium",
            "rating": "5",
            "sort_order": "2",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-10 00:02:45"
        },
        {
            "id": "pudding-regal",
            "name": "Pudding Regal",
            "image": "assets/images/pudding-regal.webp",
            "description": "Perpaduan vanilla dan biskuit Regal.",
            "badge": "👑 Favorit",
            "rating": "5",
            "sort_order": "3",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-10 00:02:45"
        }
    ],
    "testimonials": [
        {
            "id": "1",
            "quote": "Risolesnya enak banget! Kulitnya renyah, isiannya creamy. Saya selalu stok yang frozen di rumah biar bisa goreng kapan aja. Recommended!",
            "author": "Anisa Putri",
            "location": "Jakarta",
            "role": "Pelanggan Setia",
            "rating": "5",
            "image": null,
            "sort_order": "1",
            "is_active": "1",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-10 00:02:45"
        },
        {
            "id": "2",
            "quote": "Pudding Silverqueen-nya juara! Lembut banget dan cokelatnya kerasa premium. Cocok buat hampers atau dessert acara keluarga.",
            "author": "Budi Santoso",
            "location": "Bandung",
            "role": "Food Blogger",
            "rating": "5",
            "image": null,
            "sort_order": "2",
            "is_active": "1",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-10 00:02:45"
        },
        {
            "id": "3",
            "quote": "Langganan udah 2 tahun. Bersih, enak, dan pelayanannya ramah. Pudding Regal favorit anak-anak saya. Pasti repeat order!",
            "author": "Sari Wulandari",
            "location": "Surabaya",
            "role": "Ibu Rumah Tangga",
            "rating": "5",
            "image": null,
            "sort_order": "3",
            "is_active": "1",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-10 00:02:45"
        }
    ]
};

window.loadConfig = async function() {
    return window.CONFIG;
};

// Fallback compatibility
function getDefaultConfig() { return window.CONFIG; }
function fetchConfig() { return Promise.resolve(window.CONFIG); }
