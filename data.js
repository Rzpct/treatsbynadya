// ==================== KONFIGURASI STATIS (GITHUB PAGES) ====================
// File ini digenerate otomatis dari fitur Export Admin Panel.
// Tidak memerlukan database atau API (PHP/MySQL) sama sekali.

window.CONFIG = {
    "businessName": "Treats by Nad",
    "businessPhone": "6281355631765",
    "businessDescription": "Risoles Renyah & Pudding Lembut Rumahan",
    "aboutTitle": "Cerita dari Dapur Kecil Penuh Cinta",
    "aboutMainText": "Dapur Rumahan berawal dari hobi membuat camilan untuk keluarga. Resep risoles gurih dan pudding lembut favorit anak-anak kini hadir untuk Anda.",
    "aboutSubText": "Setiap produk kami buat fresh setiap hari menggunakan bahan-bahan pilihan. Kami percaya bahwa makanan rumahan terbaik lahir dari kesederhanaan, kebersihan, dan ketulusan.",
    "aboutImage": "assets/images/profile.jpg",
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
            "status": "available",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-11 21:20:03",
            "imageScale": 100,
            "imageOffsetX": 0,
            "imageOffsetY": 0,
            "submenus": [
                {
                    "id": "silverqueen",
                    "product_id": "pudding",
                    "name": "Pudding Silverqueen",
                    "description": "{\"imageScale\":140,\"imageOffsetX\":0,\"imageOffsetY\":10}",
                    "image": "assets/images/pudding-silverqueen.webp",
                    "price": "125000",
                    "note": "Chocolate Lovers",
                    "flavor_type": "manis",
                    "status": "available",
                    "sort_order": "0",
                    "created_at": "2026-08-13 07:36:46",
                    "updated_at": "2026-08-13 07:36:46",
                    "imageScale": 140,
                    "imageOffsetX": 0,
                    "imageOffsetY": 10,
                    "optionMinOrder": {
    "ukuran-opt1": 1,      // "Normal" → minimal order 1
    "ukuran-opt2": 1,      // "Sedang (500ml)" → minimal order 1
    "ukuran-opt3": 15      // "Kecil (100ml)" → minimal order 15
                }
                },
                {
                    "id": "regal",
                    "product_id": "pudding",
                    "name": "Pudding Regal",
                    "description": "{\"imageScale\":135,\"imageOffsetX\":0,\"imageOffsetY\":10}",
                    "image": "assets/images/pudding-regal.webp",
                    "price": "95000",
                    "note": "Setiap Lapisan Punya Cerita",
                    "flavor_type": "manis",
                    "status": "available",
                    "sort_order": "1",
                    "created_at": "2026-08-13 07:36:46",
                    "updated_at": "2026-08-13 07:36:46",
                    "imageScale": 135,
                    "imageOffsetX": 0,
                    "imageOffsetY": 10,
                    "optionMinOrder": {
    "ukuran-opt1": 1,      // "Normal" → minimal order 1
    "ukuran-opt2": 1,      // "Sedang (500ml)" → minimal order 1
    "ukuran-opt3": 15      // "Kecil (100ml)" → minimal order 15
}
                }
            ],
            "optionalGroups": [
                {
                    "id": "topping",
                    "product_id": "pudding",
                    "label": "Serving",
                    "sort_order": "0",
                    "created_at": "2026-08-13 07:36:46",
                    "updated_at": "2026-08-13 07:36:46",
                    "options": [
                        {
                            "id": "serv-opt1",
                            "group_id": "topping",
                            "product_id": "pudding",
                            "name": "Normal",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-13 07:36:46",
                            "updated_at": "2026-08-13 07:36:46",
                            "adj": 0
                        },
                        {
                            "id": "serv-opt2",
                            "group_id": "topping",
                            "product_id": "pudding",
                            "name": "Pisah Saos",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "1",
                            "created_at": "2026-08-13 07:36:46",
                            "updated_at": "2026-08-13 07:36:46",
                            "adj": 0
                        }
                    ]
                },
                {
                    "id": "serving",
                    "product_id": "pudding",
                    "label": "Topping",
                    "sort_order": "1",
                    "created_at": "2026-08-13 07:36:46",
                    "updated_at": "2026-08-13 07:36:46",
                    "options": [
                        {
                            "id": "toppings-opt1",
                            "group_id": "serving",
                            "product_id": "pudding",
                            "name": "Kasar",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-13 07:36:46",
                            "updated_at": "2026-08-13 07:36:46",
                            "adj": 0
                        },
                        {
                            "id": "toppings-opt2",
                            "group_id": "serving",
                            "product_id": "pudding",
                            "name": "Halus",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "1",
                            "created_at": "2026-08-13 07:36:46",
                            "updated_at": "2026-08-13 07:36:46",
                            "adj": 0
                        }
                    ]
                },
                {
                    "id": "ukuran",
                    "product_id": "pudding",
                    "label": "Ukuran",
                    "sort_order": "2",
                    "created_at": "2026-08-13 07:36:46",
                    "updated_at": "2026-08-13 07:36:46",
                    "options": [
                        {
                            "id": "ukuran-opt1",
                            "group_id": "ukuran",
                            "product_id": "pudding",
                            "name": "Normal ",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-13 07:36:46",
                            "updated_at": "2026-08-13 07:36:46",
                            "adj": 0
                        },
                        {
                            "id": "ukuran-opt2",
                            "group_id": "ukuran",
                            "product_id": "pudding",
                            "name": "Sedang (500ml)",
                            "adjustment": 0,
                            "overrides": {
                                "silverqueen": -80000,
                                "regal": -60000
                            },
                            "sort_order": "1",
                            "created_at": "2026-08-13 07:36:46",
                            "updated_at": "2026-08-13 07:36:46",
                            "adj": 0
                        },
                        {
                            "id": "ukuran-opt3",
                            "group_id": "ukuran",
                            "product_id": "pudding",
                            "name": "Kecil (100ml)",
                            "adjustment": 0,
                            "overrides": {
                                "silverqueen": -116000,
                                "regal": -88000
                            },
                            "sort_order": "2",
                            "created_at": "2026-08-13 07:36:46",
                            "updated_at": "2026-08-13 07:36:46",
                            "adj": 0
                        }
                    ]
                }
            ]
        },
        {
            "id": "risoles",
            "name": "",
            "parent_name": "",
            "emoji": "",
            "description": "",
            "image": "",
            "note": "",
            "is_best_seller": "0",
            "best_seller_badge": "",
            "rating": "5",
            "sales_rules": {
                "minOrder": 10,
                "defaultStep": 5,
                "imageScale": 100,
                "imageOffsetX": 0,
                "imageOffsetY": 0
            },
            "status": "available",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-12 22:29:14",
            "imageScale": 100,
            "imageOffsetX": 0,
            "imageOffsetY": 0,
            "submenus": [
                {
                    "id": "sosis",
                    "product_id": "risoles",
                    "name": "Risoles Sosis",
                    "description": "{\"imageScale\":190,\"imageOffsetX\":0,\"imageOffsetY\":50}",
                    "image": "assets/images/sosis mayo-nobg.webp",
                    "price": "5000",
                    "note": "Pilihan aman untuk semua pelanggan.",
                    "flavor_type": "asin",
                    "status": "available",
                    "sort_order": "0",
                    "created_at": "2026-08-13 07:27:37",
                    "updated_at": "2026-08-13 07:27:37",
                    "imageScale": 190,
                    "imageOffsetX": 0,
                    "imageOffsetY": 50
                },
                {
                    "id": "ragout",
                    "product_id": "risoles",
                    "name": "Risoles Ragout",
                    "description": "{\"imageScale\":190,\"imageOffsetX\":0,\"imageOffsetY\":50}",
                    "image": "assets/images/ragout-nobg.webp",
                    "price": "6000",
                    "note": "Cocok untuk yang ingin rasa lebih gurih.",
                    "flavor_type": "asin",
                    "status": "coming_soon",
                    "sort_order": "1",
                    "created_at": "2026-08-13 07:27:37",
                    "updated_at": "2026-08-13 07:27:37",
                    "imageScale": 190,
                    "imageOffsetX": 0,
                    "imageOffsetY": 50
                },
                {
                    "id": "smoke-beef",
                    "product_id": "risoles",
                    "name": "Risoles Smoke Beef",
                    "description": "{\"imageScale\":190,\"imageOffsetX\":0,\"imageOffsetY\":50}",
                    "image": "assets/images/smokebeef-nobg.webp",
                    "price": "7000",
                    "note": "Varian paling premium dari keluarga risoles.",
                    "flavor_type": "asin",
                    "status": "coming_soon",
                    "sort_order": "2",
                    "created_at": "2026-08-13 07:27:37",
                    "updated_at": "2026-08-13 07:27:37",
                    "imageScale": 190,
                    "imageOffsetX": 0,
                    "imageOffsetY": 50
                },
                {
                    "id": "risoles-var1",
                    "product_id": "risoles",
                    "name": "Choco Cheese",
                    "description": "{\"imageScale\":200,\"imageOffsetX\":0,\"imageOffsetY\":45,\"minOrder\":5}",
                    "image": "assets/images/risoles-choco-cheese.webp",
                    "price": "5000",
                    "note": "Nikmat Rasakan Gurih dan Coklat",
                    "flavor_type": "manis",
                    "status": "available",
                    "sort_order": "3",
                    "created_at": "2026-08-13 07:27:37",
                    "updated_at": "2026-08-13 07:27:37",
                    "imageScale": 200,
                    "imageOffsetX": 0,
                    "imageOffsetY": 45,
                    "minOrder": 5
                }
            ],
            "optionalGroups": [
                {
                    "id": "serving",
                    "product_id": "risoles",
                    "label": "Penyajian",
                    "sort_order": "0",
                    "created_at": "2026-08-13 07:27:37",
                    "updated_at": "2026-08-13 07:27:37",
                    "options": [
                        {
                            "id": "goreng",
                            "group_id": "serving",
                            "product_id": "risoles",
                            "name": "Goreng",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-13 07:27:37",
                            "updated_at": "2026-08-13 07:27:37",
                            "adj": 0
                        },
                        {
                            "id": "frozen",
                            "group_id": "serving",
                            "product_id": "risoles",
                            "name": "Frozen",
                            "adjustment": -1000,
                            "overrides": [],
                            "sort_order": "1",
                            "created_at": "2026-08-13 07:27:37",
                            "updated_at": "2026-08-13 07:27:37",
                            "adj": -1000
                        }
                    ]
                },
                {
                    "id": "variant",
                    "product_id": "risoles",
                    "label": "Pilihan Isi",
                    "sort_order": "1",
                    "created_at": "2026-08-13 07:27:37",
                    "updated_at": "2026-08-13 07:27:37",
                    "options": [
                        {
                            "id": "normal",
                            "group_id": "variant",
                            "product_id": "risoles",
                            "name": "Telur",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-13 07:27:37",
                            "updated_at": "2026-08-13 07:27:37",
                            "adj": 0
                        },
                        {
                            "id": "tanpa-telur",
                            "group_id": "variant",
                            "product_id": "risoles",
                            "name": "Tanpa Telur",
                            "adjustment": -500,
                            "overrides": [],
                            "sort_order": "1",
                            "created_at": "2026-08-13 07:27:37",
                            "updated_at": "2026-08-13 07:27:37",
                            "adj": -500
                        }
                    ]
                }
            ]
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
