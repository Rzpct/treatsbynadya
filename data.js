// ==================== KONFIGURASI STATIS (GITHUB PAGES) ====================
// File ini digenerate otomatis dari fitur Export Admin Panel.
// Tidak memerlukan database atau API (PHP/MySQL) sama sekali.

window.CONFIG = {
    "businessName": "Treats by Nad",
    "businessPhone": "6287742379234",
    "businessDescription": "Risoles Renyah & Pudding Lembut Rumahan",
    "aboutTitle": "Cerita dari Dapur Kecil Penuh Cinta",
    "aboutMainText": "Dapur Rumahan berawal dari hobi membuat camilan untuk keluarga. Resep risoles dan pudding lembut favorit anak-anak kini hadir untuk Anda.",
    "aboutSubText": "Setiap produk kami buat fresh setiap hari menggunakan bahan-bahan pilihan. Kami percaya bahwa makanan rumahan terbaik lahir dari kesederhanaan, kebersihan, dan ketulusan.",
    "aboutImage": "assets/images/treatsbynad.webp",
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
                    "description": "",
                    "image": "assets/images/sq side angle.webp",
                    "price": "125000",
                    "note": "Chocolate Lovers",
                    "flavor_type": "manis",
                    "status": "available",
                    "sort_order": "0",
                    "created_at": "2026-08-15 10:15:29",
                    "updated_at": "2026-08-18 21:06:34",
                    "total_sales": "11",
                    "imageScale": 185,
                    "imageOffsetX": 0,
                    "imageOffsetY": 45,
                    "hiddenOptionalGroups": [],
                    "optionMinOrder": {
                        "ukuran-opt3": 15
                    }
                },
                {
                    "id": "regal",
                    "product_id": "pudding",
                    "name": "Pudding Regal",
                    "description": "",
                    "image": "assets/images/regal side angle.webp",
                    "price": "95000",
                    "note": "Setiap Lapisan Punya Cerita",
                    "flavor_type": "manis",
                    "status": "available",
                    "sort_order": "1",
                    "created_at": "2026-08-15 10:15:29",
                    "updated_at": "2026-08-18 21:06:34",
                    "total_sales": "22",
                    "imageScale": 180,
                    "imageOffsetX": 0,
                    "imageOffsetY": 50,
                    "hiddenOptionalGroups": [
                        "topping",
                        "serving"
                    ],
                    "optionMinOrder": {
                        "ukuran-opt3": 15
                    }
                }
            ],
            "optionalGroups": [
                {
                    "id": "topping",
                    "product_id": "pudding",
                    "label": "Serving",
                    "sort_order": "0",
                    "created_at": "2026-08-15 10:15:29",
                    "updated_at": "2026-08-15 10:15:29",
                    "options": [
                        {
                            "id": "serv-opt1",
                            "group_id": "topping",
                            "product_id": "pudding",
                            "name": "Normal",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-15 10:15:29",
                            "updated_at": "2026-08-15 10:15:29",
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
                            "created_at": "2026-08-15 10:15:29",
                            "updated_at": "2026-08-15 10:15:29",
                            "adj": 0
                        }
                    ]
                },
                {
                    "id": "serving",
                    "product_id": "pudding",
                    "label": "Topping",
                    "sort_order": "1",
                    "created_at": "2026-08-15 10:15:29",
                    "updated_at": "2026-08-15 10:15:29",
                    "options": [
                        {
                            "id": "toppings-opt1",
                            "group_id": "serving",
                            "product_id": "pudding",
                            "name": "Kasar",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-15 10:15:29",
                            "updated_at": "2026-08-15 10:15:29",
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
                            "created_at": "2026-08-15 10:15:29",
                            "updated_at": "2026-08-15 10:15:29",
                            "adj": 0
                        }
                    ]
                },
                {
                    "id": "ukuran",
                    "product_id": "pudding",
                    "label": "Ukuran",
                    "sort_order": "2",
                    "created_at": "2026-08-15 10:15:29",
                    "updated_at": "2026-08-15 10:15:29",
                    "options": [
                        {
                            "id": "ukuran-opt1",
                            "group_id": "ukuran",
                            "product_id": "pudding",
                            "name": "Normal ",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-15 10:15:29",
                            "updated_at": "2026-08-15 10:15:29",
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
                            "created_at": "2026-08-15 10:15:29",
                            "updated_at": "2026-08-15 10:15:29",
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
                            "created_at": "2026-08-15 10:15:29",
                            "updated_at": "2026-08-15 10:15:29",
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
            "image": "assets/images/risoles.webp",
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
            "updated_at": "2026-08-15 09:58:22",
            "imageScale": 100,
            "imageOffsetX": 0,
            "imageOffsetY": 0,
            "submenus": [
                {
                    "id": "sosis",
                    "product_id": "risoles",
                    "name": "Risoles Sosis",
                    "description": "",
                    "image": "assets/images/sosis mayo-nobg.webp",
                    "price": "5000",
                    "note": "Pilihan aman untuk semua pelanggan.",
                    "flavor_type": "asin",
                    "status": "available",
                    "sort_order": "0",
                    "created_at": "2026-08-19 20:47:43",
                    "updated_at": "2026-08-19 20:47:43",
                    "total_sales": "522",
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
                    "price": "6000",
                    "note": "Cocok untuk yang ingin rasa lebih gurih.",
                    "flavor_type": "asin",
                    "status": "coming_soon",
                    "sort_order": "1",
                    "created_at": "2026-08-19 20:47:43",
                    "updated_at": "2026-08-19 20:47:43",
                    "total_sales": "0",
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
                    "price": "6000",
                    "note": "Varian paling premium dari keluarga risoles.",
                    "flavor_type": "asin",
                    "status": "available",
                    "sort_order": "2",
                    "created_at": "2026-08-19 20:47:43",
                    "updated_at": "2026-08-19 20:47:43",
                    "total_sales": "0",
                    "imageScale": 190,
                    "imageOffsetX": 0,
                    "imageOffsetY": 50,
                    "hiddenOptionalGroups": [],
                    "optionMinOrder": []
                },
                {
                    "id": "risoles-var1",
                    "product_id": "risoles",
                    "name": "Choco Cheese",
                    "description": "",
                    "image": "assets/images/risoles-choco-cheese.webp",
                    "price": "6000",
                    "note": "Rasakan perpaduan coklat dan keju",
                    "flavor_type": "manis",
                    "status": "available",
                    "sort_order": "3",
                    "created_at": "2026-08-19 20:47:43",
                    "updated_at": "2026-08-19 20:47:43",
                    "total_sales": "80",
                    "imageScale": 400,
                    "imageOffsetX": 0,
                    "imageOffsetY": 80,
                    "minOrder": 5
                },
                {
                    "id": "risoles-var2",
                    "product_id": "risoles",
                    "name": "Chocolate",
                    "description": "",
                    "image": "assets/images/submenu_1786716496.webp",
                    "price": "6000",
                    "note": "Nikmat Rasakan Gurih dan Coklat",
                    "flavor_type": "manis",
                    "status": "available",
                    "sort_order": "4",
                    "created_at": "2026-08-19 20:47:43",
                    "updated_at": "2026-08-19 20:47:43",
                    "total_sales": "0",
                    "imageScale": 400,
                    "imageOffsetX": 0,
                    "imageOffsetY": 90,
                    "minOrder": 5,
                    "optionMinOrder": []
                }
            ],
            "optionalGroups": [
                {
                    "id": "serving",
                    "product_id": "risoles",
                    "label": "Penyajian",
                    "sort_order": "0",
                    "created_at": "2026-08-19 20:47:43",
                    "updated_at": "2026-08-19 20:47:43",
                    "options": [
                        {
                            "id": "goreng",
                            "group_id": "serving",
                            "product_id": "risoles",
                            "name": "Goreng",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-19 20:47:43",
                            "updated_at": "2026-08-19 20:47:43",
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
                            "created_at": "2026-08-19 20:47:43",
                            "updated_at": "2026-08-19 20:47:43",
                            "adj": -1000
                        }
                    ]
                },
                {
                    "id": "variant",
                    "product_id": "risoles",
                    "label": "Pilihan Isi",
                    "sort_order": "1",
                    "created_at": "2026-08-19 20:47:43",
                    "updated_at": "2026-08-19 20:47:43",
                    "options": [
                        {
                            "id": "normal",
                            "group_id": "variant",
                            "product_id": "risoles",
                            "name": "Normal",
                            "adjustment": 0,
                            "overrides": [],
                            "sort_order": "0",
                            "created_at": "2026-08-19 20:47:43",
                            "updated_at": "2026-08-19 20:47:43",
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
                            "created_at": "2026-08-19 20:47:43",
                            "updated_at": "2026-08-19 20:47:43",
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
            "image": "assets/images/sosis mayo-nobg.webp",
            "description": "Kulit renyah, isian creamy.",
            "badge": "",
            "rating": "5",
            "sort_order": "0",
            "created_at": "2026-08-10 00:02:45",
            "updated_at": "2026-08-15 10:18:53"
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
            "quote": "Sumpah risolesnya lumer banget di mulut! Varian sosis mayo the best sih, selalu nyetok yang frozen di rumah.",
            "author": "𝓣𝓱𝓪𝓶𝓪𝓻𝓪 𝓐𝓷𝓷𝓲𝓼𝓪 𝓟𝓾𝓻𝓲 𝓛𝓮𝓼𝓽𝓪𝓻𝓲",
            "location": "Instagram",
            "role": "@thamaraannisa",
            "rating": "5",
            "image": null,
            "sort_order": "1",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "2",
            "quote": "Pudding regalnya juara! Teksturnya super lembut, manisnya pas dan anakku suka banget. Next time pasti order lagi.",
            "author": "nadyajunita",
            "location": "Instagram",
            "role": "@nadyaajunita",
            "rating": "5",
            "image": null,
            "sort_order": "2",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "3",
            "quote": "Pertama kali nyoba langsung jatuh cinta sama risolesnya. Renyah di luar, isiannya full dan creamy parah.",
            "author": "Yusharion_manslom",
            "location": "Instagram",
            "role": "@yusharion",
            "rating": "5",
            "image": null,
            "sort_order": "3",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "4",
            "quote": "Fix ini mah cemilan andalan buat nemenin nugas. Digoreng anget-anget rasanya mantul bgt!",
            "author": "Naufal",
            "location": "Instagram",
            "role": "@naufalzahranrahmat",
            "rating": "5",
            "image": null,
            "sort_order": "4",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "5",
            "quote": "Udah langganan, kualitas rasanya nggak pernah berubah. Pudding silverqueennya premium banget kerasa coklatnya!",
            "author": "ᴍᴜʜᴀᴍᴍᴀᴅ Qᴀᴅʀɪ ᴇ́ʀʏᴀɴᴛᴏ",
            "location": "Instagram",
            "role": "@mqdreryanto",
            "rating": "5",
            "image": null,
            "sort_order": "5",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "6",
            "quote": "Cocok banget buat nemenin acara kumpul keluarga. Kemarin pesen banyak buat arisan, pada nanyain beli dimana.",
            "author": "Novita Nur Afifah",
            "location": "Instagram",
            "role": "@novitanuraf",
            "rating": "5",
            "image": null,
            "sort_order": "6",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "7",
            "quote": "Pelayanannya ramah dan pengirimannya cepet. Risolesnya ukuran besar jadi puas makannya.",
            "author": "Mamat Thoulmen Nur Rahmat",
            "location": "Instagram",
            "role": "@thoulmennurrahmat",
            "rating": "5",
            "image": null,
            "sort_order": "7",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "8",
            "quote": "Risoles tanpa telurnya ngebantu banget buat adekku yang alergi. Makasih ya kak udah nyediain opsi ini!",
            "author": "Annisa Nisa",
            "location": "Instagram",
            "role": "@nisa5942",
            "rating": "5",
            "image": null,
            "sort_order": "8",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "9",
            "quote": "Beli buat ngemil di kosan, ternyata seenak itu woy! Pudding coklatnya lumer, bener-bener melting.",
            "author": "Dhiandra Tackha",
            "location": "Instagram",
            "role": "@dhiandra99",
            "rating": "5",
            "image": null,
            "sort_order": "9",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        },
        {
            "id": "10",
            "quote": "Jujur ini dessert tersimple tapi ter-enak yang pernah aku coba sejauh ini. Sukses terus Treats by Nad!",
            "author": "𝐬𝐲𝐚𝐝𝐳𝐚 𝐧𝐮𝐫 𝐥𝐚𝐭𝐡𝐢𝐟𝐚’s college acc",
            "location": "Instagram",
            "role": "@syadzalthfa",
            "rating": "5",
            "image": null,
            "sort_order": "10",
            "is_active": "1",
            "created_at": "2026-08-18 22:13:32",
            "updated_at": "2026-08-18 22:13:32"
        }
    ],
    "salesRecordsRaw": [
        {
            "id": "ragout_frozen",
            "submenu_id": "ragout",
            "option_id": "frozen",
            "quantity_sold": 0,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "ragout_goreng",
            "submenu_id": "ragout",
            "option_id": "goreng",
            "quantity_sold": 0,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "regal_ukuran-opt1",
            "submenu_id": "regal",
            "option_id": "ukuran-opt1",
            "quantity_sold": 5,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "regal_ukuran-opt2",
            "submenu_id": "regal",
            "option_id": "ukuran-opt2",
            "quantity_sold": 0,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "regal_ukuran-opt3",
            "submenu_id": "regal",
            "option_id": "ukuran-opt3",
            "quantity_sold": 17,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "risoles-var1_frozen",
            "submenu_id": "risoles-var1",
            "option_id": "frozen",
            "quantity_sold": 50,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "risoles-var1_goreng",
            "submenu_id": "risoles-var1",
            "option_id": "goreng",
            "quantity_sold": 30,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "risoles-var2_frozen",
            "submenu_id": "risoles-var2",
            "option_id": "frozen",
            "quantity_sold": 0,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "risoles-var2_goreng",
            "submenu_id": "risoles-var2",
            "option_id": "goreng",
            "quantity_sold": 0,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "silverqueen_ukuran-opt1",
            "submenu_id": "silverqueen",
            "option_id": "ukuran-opt1",
            "quantity_sold": 10,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "silverqueen_ukuran-opt2",
            "submenu_id": "silverqueen",
            "option_id": "ukuran-opt2",
            "quantity_sold": 0,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "silverqueen_ukuran-opt3",
            "submenu_id": "silverqueen",
            "option_id": "ukuran-opt3",
            "quantity_sold": 1,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "smoke-beef_frozen",
            "submenu_id": "smoke-beef",
            "option_id": "frozen",
            "quantity_sold": 46,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "smoke-beef_goreng",
            "submenu_id": "smoke-beef",
            "option_id": "goreng",
            "quantity_sold": 0,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "sosis_frozen",
            "submenu_id": "sosis",
            "option_id": "frozen",
            "quantity_sold": 467,
            "updated_at": "2026-08-18 21:06:34"
        },
        {
            "id": "sosis_goreng",
            "submenu_id": "sosis",
            "option_id": "goreng",
            "quantity_sold": 55,
            "updated_at": "2026-08-18 21:06:34"
        }
    ]
};

window.loadConfig = async function() {
    return window.CONFIG;
};

// Fallback compatibility
function getDefaultConfig() { return window.CONFIG; }
function fetchConfig() { return Promise.resolve(window.CONFIG); }
