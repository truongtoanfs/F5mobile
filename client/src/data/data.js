/* used in store > modules > products > index.js */
/* category, type used to find products */
const products = [
    {
        "id": 1,
        "product": "iphone",
        "filterConditions": {
            "appearance": ["Mới 100%", "Likenew 99,99%"],
            "memory": ["512GB", "256GB", "128GB", "64GB", "32GB", "16GB"],
            "color": ["Xanh", "Xanh Blue", "Xanh lục", "Xanh midnight", "Xanh ngọc", "Xanh dương","Đen bonhs", "Đỏ,", "Đen", "Vàng", "Trắng", "Tím", "Hồng", "Cam"],
            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
        },
        "modelsList": [
            {
                "id": 1,
                "category": "12-12mini-12promax",
                "categoryFilter": {
                    "appearance": ["Mới 100%", "Likenew 99,99%"],
                    "memory": ["256GB", "64GB"],
                    "color": ["Xanh midnight", "Xanh ngọc", "Đỏ", "Đen", "Vàng", "Trắng", "Tím"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "categoryDetail": [
                    {
                        "id": 1,
                        "series": "iphone-11",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["64GB"],
                            "color": ["Xanh ngọc", "Đỏ", "Đen", "Vàng", "Trắng", "Tím"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 11 Lock 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-lock-64gb-likenew-9999",
                                "avatar": "/products/iphone-11.jpg",
                                "currentPrice": 11000000,
                                "oldPrice": 14000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-xanh-ngoc",
                                        "color": "Xanh ngọc"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-11-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-11-tim",
                                        "color": "Tím"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Liquid Retina 6.1 inchs, 828 x 1792 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Camera kép góc siêu rộng",
                                    "frontCamera": "12.0 MP (4K 60fps) Slo-motion",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "Lithium-ion 3110mAh, Lâu hơn iPhone XR 1h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Đỏ, Xanh ngọc, Tím",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 11 Quốc tế 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-11.jpg",
                                "currentPrice": 12200000,
                                "oldPrice": 16000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-xanh-ngoc",
                                        "color": "Xanh ngọc"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-11-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-11-tim",
                                        "color": "Tím"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Liquid Retina 6.1 inchs, 828 x 1792 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Camera kép góc siêu rộng",
                                    "frontCamera": "12.0 MP (4K 60fps) Slo-motion",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "Lithium-ion 3110mAh, Lâu hơn iPhone XR 1h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Đỏ, Xanh ngọc, Tím",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone 11 Lock 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-lock-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11.jpg",
                                "currentPrice": 11500000,
                                "oldPrice": 13400000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-xanh-ngoc",
                                        "color": "Xanh ngọc"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-11-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-11-tim",
                                        "color": "Tím"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Liquid Retina 6.1 inchs, 828 x 1792 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Camera kép góc siêu rộng",
                                    "frontCamera": "12.0 MP (4K 60fps) Slo-motion",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "Lithium-ion 3110mAh, Lâu hơn iPhone XR 1h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Đỏ, Xanh ngọc, Tím",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone 11 Quốc tế 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-quoc-te-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11.jpg",
                                "currentPrice": 12700000,
                                "oldPrice": 16400000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-xanh-ngoc",
                                        "color": "Xanh ngọc"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-11-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-11-tim",
                                        "color": "Tím"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Liquid Retina 6.1 inchs, 828 x 1792 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Camera kép góc siêu rộng",
                                    "frontCamera": "12.0 MP (4K 60fps) Slo-motion",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "Lithium-ion 3110mAh, Lâu hơn iPhone XR 1h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Đỏ, Xanh ngọc, Tím",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "series": "iphone-11-pro",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["64GB"],
                            "color": ["Xanh midnight", "Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 11 Pro 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-pro-64gb-likenew-9999",
                                "avatar": "/products/iphone-11-pro.jpg",
                                "currentPrice": 14900000,
                                "oldPrice": 19000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Super Retina XDR 5.8 inchs, 1125 x 2436 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim), 1 e-sim",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS 4h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 11 Pro 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-pro-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11-pro.jpg",
                                "currentPrice": 15400000,
                                "oldPrice": 20000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Super Retina XDR 5.8 inchs, 1125 x 2436 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim), 1 e-sim",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS 4h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Mới 100%, đã kích hoạt"
                                }
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "series": "iphone-11-pro-max",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["256GB", "64GB"],
                            "color": ["Xanh midnight", "Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 11 Pro Max Lock 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-pro-max-lock-64gb-likenew-9999",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 15700000,
                                "oldPrice": 19000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim)",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Máy lướt, hình thức đẹp như mới, cực ít sử dụng"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 11 Pro Max 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-pro-max-64gb-likenew-9999",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 17000000,
                                "oldPrice": 23000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim)",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Máy lướt, hình thức đẹp như mới, cực ít sử dụng"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone 11 Pro Max 256GB - Likenew 99,99%",
                                "path": "/products/iphone-11-pro-max-256gb-likenew-9999",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 19000000,
                                "oldPrice": 25000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "256GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim)",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Máy lướt, hình thức đẹp như mới, cực ít sử dụng"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone 11 Pro Max 256GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-pro-max-256gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 20000000,
                                "oldPrice": 25000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "256GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim nano, 1 e-sim",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Mới 100%, Máy trần, mới 100% đã kích hoạt"
                                }
                            },
                            {
                                "id": 5,
                                "title": "iPhone 11 Pro Max Lock 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-pro-max-lock-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 16200000,
                                "oldPrice": 20700000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim nano",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Mới 100%, đã kích hoạt"
                                }
                            },
                            {
                                "id": 6,
                                "title": "iPhone 11 Pro Max 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-pro-max-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 18000000,
                                "oldPrice": 24300000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim nano",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Mới 100%, Máy trần, mới 100% đã kích hoạt"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "category": "11-11pro-11promax",
                "categoryFilter": {
                    "appearance": ["Mới 100%", "Likenew 99,99%"],
                    "memory": ["256GB", "64GB"],
                    "color": ["Xanh midnight", "Xanh ngọc", "Đỏ", "Đen", "Vàng", "Trắng", "Tím"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "categoryDetail": [
                    {
                        "id": 1,
                        "series": "11",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["64GB"],
                            "color": ["Xanh ngọc", "Đỏ", "Đen", "Vàng", "Trắng", "Tím"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 11 Lock 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-lock-64gb-likenew-9999",
                                "avatar": "/products/iphone-11.jpg",
                                "currentPrice": 11000000,
                                "oldPrice": 14000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-xanh-ngoc",
                                        "color": "Xanh ngọc"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-11-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-11-tim",
                                        "color": "Tím"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Liquid Retina 6.1 inchs, 828 x 1792 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Camera kép góc siêu rộng",
                                    "frontCamera": "12.0 MP (4K 60fps) Slo-motion",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "Lithium-ion 3110mAh, Lâu hơn iPhone XR 1h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Đỏ, Xanh ngọc, Tím",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 11 Quốc tế 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-11.jpg",
                                "currentPrice": 12200000,
                                "oldPrice": 16000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-xanh-ngoc",
                                        "color": "Xanh ngọc"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-11-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-11-tim",
                                        "color": "Tím"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Liquid Retina 6.1 inchs, 828 x 1792 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Camera kép góc siêu rộng",
                                    "frontCamera": "12.0 MP (4K 60fps) Slo-motion",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "Lithium-ion 3110mAh, Lâu hơn iPhone XR 1h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Đỏ, Xanh ngọc, Tím",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone 11 Lock 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-lock-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11.jpg",
                                "currentPrice": 11500000,
                                "oldPrice": 13400000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-xanh-ngoc",
                                        "color": "Xanh ngọc"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-11-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-11-tim",
                                        "color": "Tím"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Liquid Retina 6.1 inchs, 828 x 1792 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Camera kép góc siêu rộng",
                                    "frontCamera": "12.0 MP (4K 60fps) Slo-motion",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "Lithium-ion 3110mAh, Lâu hơn iPhone XR 1h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Đỏ, Xanh ngọc, Tím",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone 11 Quốc tế 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-quoc-te-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11.jpg",
                                "currentPrice": 12700000,
                                "oldPrice": 16400000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-xanh-ngoc",
                                        "color": "Xanh ngọc"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-11-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-11-tim",
                                        "color": "Tím"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Liquid Retina 6.1 inchs, 828 x 1792 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Camera kép góc siêu rộng",
                                    "frontCamera": "12.0 MP (4K 60fps) Slo-motion",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "Lithium-ion 3110mAh, Lâu hơn iPhone XR 1h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Đỏ, Xanh ngọc, Tím",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "series": "11pro",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["64GB"],
                            "color": ["Xanh midnight", "Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 11 Pro 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-pro-64gb-likenew-9999",
                                "avatar": "/products/iphone-11-pro.jpg",
                                "currentPrice": 14900000,
                                "oldPrice": 19000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Super Retina XDR 5.8 inchs, 1125 x 2436 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim), 1 e-sim",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS 4h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 11 Pro 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-pro-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11-pro.jpg",
                                "currentPrice": 15400000,
                                "oldPrice": 20000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Super Retina XDR 5.8 inchs, 1125 x 2436 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim), 1 e-sim",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS 4h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Mới 100%, đã kích hoạt"
                                }
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "series": "11promax",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["256GB", "64GB"],
                            "color": ["Xanh midnight", "Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 11 Pro Max Lock 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-pro-max-lock-64gb-likenew-9999",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 15700000,
                                "oldPrice": 19000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim)",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Máy lướt, hình thức đẹp như mới, cực ít sử dụng"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 11 Pro Max 64GB - Likenew 99,99%",
                                "path": "/products/iphone-11-pro-max-64gb-likenew-9999",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 17000000,
                                "oldPrice": 23000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim)",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Máy lướt, hình thức đẹp như mới, cực ít sử dụng"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone 11 Pro Max 256GB - Likenew 99,99%",
                                "path": "/products/iphone-11-pro-max-256gb-likenew-9999",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 19000000,
                                "oldPrice": 25000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "256GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (1 Nano sim)",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Máy lướt, hình thức đẹp như mới, cực ít sử dụng"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone 11 Pro Max 256GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-pro-max-256gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 20000000,
                                "oldPrice": 25000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "256GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim nano, 1 e-sim",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Mới 100%, Máy trần, mới 100% đã kích hoạt"
                                }
                            },
                            {
                                "id": 5,
                                "title": "iPhone 11 Pro Max Lock 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-pro-max-lock-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 16200000,
                                "oldPrice": 20700000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim nano",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Mới 100%, đã kích hoạt"
                                }
                            },
                            {
                                "id": 6,
                                "title": "iPhone 11 Pro Max 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-11-pro-max-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-11-pro-max.jpg",
                                "currentPrice": 18000000,
                                "oldPrice": 24300000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-11-pro-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-11-pro-max-xanh-ngoc",
                                        "color": "Xanh midnight"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-11-pro-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-11-pro-max-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-11-pro-max-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "Super Retina XDR 6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A13 Bionic, 6",
                                    "ram": "6GB",
                                    "rearCamera": "12.0 MP (4K 60fps) Triple 12MP Ultra Wide, Wide and Telephoto cameras",
                                    "frontCamera": "12.0 MP Selfie ngược sáng HDR, Camera góc rộng, Nhận diện khuôn mặt",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 13",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim nano",
                                    "battery": "Lithium-ion, Lâu hơn iPhone XS Max 5h",
                                    "connectionseries": "Wifi:802.11ax / GPS/GNSS / Bluetooth: v5.0 / GPRS/ NFC",
                                    "color": "Đen, Trắng, Vàng, Xanh",
                                    "state": "Mới 100%, Máy trần, mới 100% đã kích hoạt"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": 3,
                "category": "x-xs-xsmax-xr",
                "categoryFilter": {
                    "appearance": ["Mới 100%", "Likenew 99,99%"],
                    "memory": ["256GB", "64GB"],
                    "color": ["Đỏ", "Đen", "Vàng", "Trắng", "Cam", "Xanh dương"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "categoryDetail": [
                    {
                        "id": 1,
                        "series": "x",
                        "seriesFilter": {
                            "appearance": ["Likenew 99,99%"],
                            "memory": ["256GB", "64GB"],
                            "color": ["Đen", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone X Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-x-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-x.jpg",
                                "currentPrice": 8000000,
                                "oldPrice": 11700000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-x",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-x-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-x-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.8 inchs, 2436 x 1125 Pixels",
                                    "cpu": "Apple A11 Bionic, 6",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "2716 mAh, hỗ trợ sạc không dây",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone X Quốc tế 256GB – Likenew 99,99%",
                                "path": "/products/iphone-x-quoc-te-256gb-likenew-9999",
                                "avatar": "/products/iphone-x.jpg",
                                "currentPrice": 9000000,
                                "oldPrice": 13800000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-x",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-x-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-x-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.8 inchs, 2436 x 1125 Pixels",
                                    "cpu": "Apple A11 Bionic, 6",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "256GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 Sim vật lý (NanoSim)",
                                    "battery": "2716 mAh, hỗ trợ sạc không dây",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng",
                                    "state": "Máy lướt, hình thức đẹp như mới"
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "series": "xs",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["256GB", "64GB"],
                            "color": ["Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone XS Quốc tế 64GB – Mới 100% đã kích hoạt",
                                "path": "/products/iphone-xs-quoc-te-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-xs.jpg",
                                "currentPrice": 9300000,
                                "oldPrice": 13700000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "5.8 inchs, 1125 x 2436 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "2658 mAh, Lâu hơn iPhone X 30'",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Mới Active, new 100%"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone XS Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-xs-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-xs.jpg",
                                "currentPrice": 8800000,
                                "oldPrice": 13200000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "5.8 inchs, 1125 x 2436 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "2658 mAh, Lâu hơn iPhone X 30'",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Máy lướt ít sử dụng, đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone XS Quốc tế 256GB – Likenew 99,99%",
                                "path": "/products/iphone-xs-quoc-te-256gb-likenew-9999",
                                "avatar": "/products/iphone-xs.jpg",
                                "currentPrice": 10200000,
                                "oldPrice": 16000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new100%",
                                "specifications": {
                                    "screen": "5.8 inchs, 1125 x 2436 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "2658 mAh, Lâu hơn iPhone X 30'",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Mới Fullbox nguyên seal, chưa Active"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone XS Quốc tế 256GB – Mới 100% đã kích hoạt",
                                "path": "/products/iphone-xs-quoc-te-256gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-xs.jpg",
                                "currentPrice": 10700000,
                                "oldPrice": 19500000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new100%",
                                "specifications": {
                                    "screen": "5.8 inchs, 1125 x 2436 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "2658 mAh, Lâu hơn iPhone X 30'",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Mới Fullbox nguyên seal, chưa Active"
                                }
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "series": "xsmax",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["256GB", "64GB"],
                            "color": ["Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone XS Max Quốc tế 64GB – Mới 100% đã kích hoạt",
                                "path": "/products/iphone-xs-max-quoc-te-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-xs-max.jpg",
                                "currentPrice": 12100000,
                                "oldPrice": 15500000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-max-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-max-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "3174 mAh, Lâu hơn iPhone X 1,5h",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Mới active, new 100% chưa qua sử dụng"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone XS Max Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-xs-max-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-xs-max.jpg",
                                "currentPrice": 11600000,
                                "oldPrice": 14900000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-max-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-max-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "3174 mAh, Lâu hơn iPhone X 1,5h",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Máy lướt ít sử dụng, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone XS Max Quốc tế 256GB – Mới 100% đã kích hoạt",
                                "path": "/products/iphone-xs-max-quoc-te-256gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-xs-max.jpg",
                                "currentPrice": 13500000,
                                "oldPrice": 17300000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-max-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-max-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "256GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "3174 mAh, Lâu hơn iPhone X 1,5h",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Đã kích hoạt, mới 100% chưa qua sử dụng"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone XS Max Quốc tế 256GB – Likenew 99,99%",
                                "path": "/products/iphone-xs-max-quoc-te-256gb-likenew-9999",
                                "avatar": "/products/iphone-xs-max.jpg",
                                "currentPrice": 13000000,
                                "oldPrice": 16700000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-max-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-max-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "256GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "3174 mAh, Lâu hơn iPhone X 1,5h",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Máy lướt ít sử dụng, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 5,
                                "title": "iPhone XS Max Lock 64GB - Mới 100% đã kích hoạt",
                                "path": "/products/iphone-xs-max-lock-64gb---moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-xs-max.jpg",
                                "currentPrice": 10500000,
                                "oldPrice": 12900000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-max-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-max-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "3174 mAh, Lâu hơn iPhone X 1,5h",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Mới Active, new 100%"
                                }
                            },
                            {
                                "id": 6,
                                "title": "iPhone XS Max Lock 64GB - Likenew 99,99%",
                                "path": "/products/iphone-xs-max-lock-64gb---likenew-9999",
                                "avatar": "/products/iphone-xs-max.jpg",
                                "currentPrice": 10000000,
                                "oldPrice": 11900000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xs-max",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xs-max-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xs-max-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xs-max-vang",
                                        "color": "Vàng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "6.5 inchs, 1242 x 2688 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "4GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "3174 mAh, Lâu hơn iPhone X 1,5h",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "series": "xr",
                        "seriesFilter": {
                            "appearance": ["Mới 100%", "Likenew 99,99%"],
                            "memory": ["64GB"],
                            "color": ["Đỏ", "Đen", "Vàng", "Trắng", "Cam", "Xanh dương"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone XR Quốc tế 64GB – Mới Active 100% LL/A",
                                "path": "/products/iphone-xr-quoc-te-64gb-moi-active-100-lla",
                                "avatar": "/products/iphone-xr.jpg",
                                "currentPrice": 9100000,
                                "oldPrice": 13000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xr",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xr-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xr-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xr-vang",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-xr-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-xr-cam",
                                        "color": "Cam"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-xr-xanh-duong",
                                        "color": "Xanh dương"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "IPS LCD, 6.1\", Liquid Retina 828 x 1792 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "2942 mAh, có sạc nhanh",
                                    "connectionseries": "Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot",
                                    "color": "Đỏ, Xanh dương, Cam, Đen, Trắng, Vàng",
                                    "state": "Mới active, new 100% chưa qua sử dụng"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone XR Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-xr-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-xr.jpg",
                                "currentPrice": 8700000,
                                "oldPrice": 12500000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xr",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xr-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xr-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xr-vang",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-xr-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-xr-cam",
                                        "color": "Cam"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-xr-xanh-duong",
                                        "color": "Xanh dương"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "IPS LCD, 6.1\", Liquid Retina 828 x 1792 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "2942 mAh, có sạc nhanh",
                                    "connectionseries": "Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot",
                                    "color": "Đỏ, Xanh dương, Cam, Đen, Trắng, Vàng",
                                    "state": "Máy lướt ít sử dụng, hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone XR Lock 64GB – Mới 100% đã kích hoạt",
                                "path": "/products/iphone-xr-lock-64gb-moi-100-da-kich-hoat",
                                "avatar": "/products/iphone-xr.jpg",
                                "currentPrice": 8100000,
                                "oldPrice": 11000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xr",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xr-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xr-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xr-vang",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-xr-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-xr-cam",
                                        "color": "Cam"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-xr-xanh-duong",
                                        "color": "Xanh dương"
                                    }
                                ],
                                "state": "new100%-actived",
                                "specifications": {
                                    "screen": "IPS LCD, 6.1\", Liquid Retina 828 x 1792 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "2942 mAh, có sạc nhanh",
                                    "connectionseries": "Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot",
                                    "color": "Đỏ, Xanh dương, Cam, Đen, Trắng, Vàng",
                                    "state": "Mới active, new 100% chưa qua sử dụng"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone XR Lock 64GB – Likenew 99,99%",
                                "path": "/products/iphone-xr-lock-64gb-likenew-9999",
                                "avatar": "/products/iphone-xr.jpg",
                                "currentPrice": 7800000,
                                "oldPrice": 10500000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-xr",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-xr-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-xr-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-xr-vang",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-xr-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-xr-cam",
                                        "color": "Cam"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-xr-xanh-duong",
                                        "color": "Xanh dương"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "IPS LCD, 6.1\", Liquid Retina 828 x 1792 Pixels",
                                    "cpu": "Apple A12 Bionic, 6",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 4 nhân",
                                    "advanceSecurity": "Face ID",
                                    "numberOfSimSlots": "1 NanoSim, 1 eSim",
                                    "battery": "2942 mAh, có sạc nhanh",
                                    "connectionseries": "Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot",
                                    "color": "Đỏ, Xanh dương, Cam, Đen, Trắng, Vàng",
                                    "state": "Máy lướt, ít sử dụng đẹp như mới"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": 4,
                "category": "8-8plus",
                "categoryFilter": {
                    "appearance": ["Likenew 99,99%"],
                    "memory": ["256GB", "64GB"],
                    "color": ["Đỏ", "Đen", "Vàng", "Trắng"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "categoryDetail": [
                    {
                        "id": 1,
                        "series": "8",
                        "seriesFilter": {
                            "appearance": ["Likenew 99,99%"],
                            "memory": ["64GB"],
                            "color": ["Đỏ", "Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 8 Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-8-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-8.jpg",
                                "currentPrice": 4800000,
                                "oldPrice": 7400000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-8",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-8-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-8-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-8-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-8-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "4.7 inchs, 1334 x 750 pixels",
                                    "cpu": "Apple A11 Bionic, 6",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1821 mAh, hỗ trợ sạc không dây",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Đỏ",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "series": "8plus",
                        "seriesFilter": {
                            "appearance": ["Likenew 99,99%"],
                            "memory": ["256GB", "64GB"],
                            "color": ["Đỏ", "Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 8 Plus Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-8-plus-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-8-plus.jpg",
                                "currentPrice": 7200000,
                                "oldPrice": 9800000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-8-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-8-plus-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-8-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-8-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-8-plus-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inches, 1080 x 1920 pixels",
                                    "cpu": "Apple A11 Bionic 6 nhân, 2.1 GHz",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 11",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2675 mAh, hỗ trợ sạc không dây",
                                    "connectionseries": "Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Đỏ",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 8 Plus Quốc tế 256GB – Likenew 99,99%",
                                "path": "/products/iphone-8-plus-quoc-te-256gb-likenew-9999",
                                "avatar": "/products/iphone-8-plus.jpg",
                                "currentPrice": 8400000,
                                "oldPrice": 11600000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-8-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-8-plus-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-8-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-8-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-8-plus-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inches, 1080 x 1920 pixels",
                                    "cpu": "Apple A11 Bionic 6 nhân, 2.1 GHz",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "256GB",
                                    "operatingSystem": "iOS 11",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2675 mAh, hỗ trợ sạc không dây",
                                    "connectionseries": "Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Đỏ",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": 5,
                "category": "7-7plus",
                "categoryFilter": {
                    "appearance": ["Likenew 99,99%"],
                    "memory": ["128GB", "32GB"],
                    "color": ["Đen bóng", "Đỏ", "Đen", "Vàng", "Trắng", "Hồng"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "categoryDetail": [
                    {
                        "id": 1,
                        "series": "7",
                        "seriesFilter": {
                            "appearance": ["Likenew 99,99%"],
                            "memory": ["128GB", "32GB"],
                            "color": ["Đen bóng", "Đỏ", "Đen", "Vàng", "Trắng", "Hồng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 7 Quốc tế 32GB – Likenew 99,99%",
                                "path": "/products/iphone-7-quoc-te-32gb-likenew-99999",
                                "avatar": "/products/iphone-7.jpg",
                                "currentPrice": 3300000,
                                "oldPrice": 4300000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-7",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-7-den-bong",
                                        "color": "Đen bóng"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-7-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-7-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-7-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-7-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "LED-backlit IPS LCD, 4.7\", Retina HD",
                                    "cpu": "Apple A10 Fusion 4 nhân 64-bit",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "32GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1960 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Đỏ",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 7 Quốc tế 128GB – Likenew 99,99%",
                                "path": "/products/iphone-7-quoc-te-128gb-likenew-99999",
                                "avatar": "/products/iphone-7.jpg",
                                "currentPrice": 4700000,
                                "oldPrice": 5100000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-7",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-7-den-bong",
                                        "color": "Đen bóng"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-7-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-7-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-7-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-7-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-7-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "LED-backlit IPS LCD, 4.7\", Retina HD",
                                    "cpu": "Apple A10 Fusion 4 nhân 64-bit",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "32GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1960 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen bóng, Trắng, Vàng, Hồng, Đen nhám, Đỏ",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone 7 Lock 32GB – Likenew 99,99%",
                                "path": "/products/iphone-7-lock-32gb-likenew-99999",
                                "avatar": "/products/iphone-7.jpg",
                                "currentPrice": 2600000,
                                "oldPrice": 4100000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-7",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-7-den-bong",
                                        "color": "Đen bóng"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-7-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-7-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-7-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-7-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "LED-backlit IPS LCD, 4.7\", Retina HD",
                                    "cpu": "Apple A10 Fusion 4 nhân 64-bit",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "32GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1960 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen bóng, Trắng, Vàng, Hồng, Đen nhám",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone 7 Lock 128GB – Likenew 99,99%",
                                "path": "/products/iphone-7-lock-128gb-likenew-99999",
                                "avatar": "/products/iphone-7.jpg",
                                "currentPrice": 3200000,
                                "oldPrice": 4800000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-7",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-7-den-bong",
                                        "color": "Đen bóng"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-7-do",
                                        "color": "Đỏ"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-7-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-7-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-7-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 7,
                                        "url": "/products/iphone-7-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "LED-backlit IPS LCD, 4.7\", Retina HD",
                                    "cpu": "Apple A10 Fusion 4 nhân 64-bit",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "128GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Apple GPU 3 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1960 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen bóng, Trắng, Vàng, Hồng, Đen nhám, Đỏ",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "series": "7plus",
                        "seriesFilter": {
                            "appearance": ["Likenew 99,99%"],
                            "memory": ["128GB", "32GB"],
                            "color": ["Đen bóng", "Đỏ", "Đen", "Vàng", "Trắng", "Hồng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 7 Plus Quốc tế 32GB – Likenew 99,99%",
                                "path": "/products/iphone-7-plus-quoc-te-32gb-likenew-99999",
                                "avatar": "/products/iphone-7-plus.jpg",
                                "currentPrice": 4900000,
                                "oldPrice": 7000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-7-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-7-plus-den-bong",
                                        "color": "Đen bóng"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-7-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-7-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-7-plus-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-7-plus-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inchs, Full HD (1080 x 1920 Pixels)",
                                    "cpu": "Apple A10 Fusion 4 nhân 64-bit, 2.3 GHz",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "32GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Chip đồ họa 6 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2900 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen bóng, Trắng, Vàng, Hồng, Đen nhám",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 7 Plus Quốc tế 32GB – Likenew 99,99%",
                                "path": "/products/iphone-7-plus-quoc-te-32gb-likenew-99999",
                                "avatar": "/products/iphone-7-plus.jpg",
                                "currentPrice": 5500000,
                                "oldPrice": 8000000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-7-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-7-plus-den-bong",
                                        "color": "Đen bóng"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-7-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-7-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-7-plus-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-7-plus-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inchs, Full HD (1080 x 1920 Pixels)",
                                    "cpu": "Apple A10 Fusion 4 nhân 64-bit, 2.3 GHz",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "128GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Chip đồ họa 6 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2900 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen bóng, Trắng, Vàng, Hồng, Đen nhám",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone 7 Plus Lock 32GB – Likenew 99,99%",
                                "path": "/products/iphone-7-plus-lock-32gb-likenew-99999",
                                "avatar": "/products/iphone-7-plus.jpg",
                                "currentPrice": 3900000,
                                "oldPrice": 5400000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-7-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-7-plus-den-bong",
                                        "color": "Đen bóng"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-7-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-7-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-7-plus-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-7-plus-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inchs, Full HD (1080 x 1920 Pixels)",
                                    "cpu": "Apple A10 Fusion 4 nhân 64-bit, 2.3 GHz",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "32GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Chip đồ họa 6 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2900 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen bóng, Trắng, Vàng, Hồng, Đen nhám",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone 7 Plus Lock 128GB – Likenew 99,99%",
                                "path": "/products/iphone-7-plus-lock-128gb-likenew-9999",
                                "avatar": "/products/iphone-7-plus.jpg",
                                "currentPrice": 4600000,
                                "oldPrice": 6100000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-7-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-7-plus-den-bong",
                                        "color": "Đen bóng"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-7-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-7-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-7-plus-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 6,
                                        "url": "/products/iphone-7-plus-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inchs, Full HD (1080 x 1920 Pixels)",
                                    "cpu": "Apple A10 Fusion 4 nhân 64-bit, 2.3 GHz",
                                    "ram": "3GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "7.0 MP",
                                    "internalMemory": "128GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "Chip đồ họa 6 nhân",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2900 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen bóng, Trắng, Vàng, Hồng, Đen nhám",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": 6,
                "category": "6-6s-6plus-6splus",
                "categoryFilter": {
                    "appearance": ["Likenew 99,99%"],
                    "memory": ["128GB", "64GB", "32GB", "16GB"],
                    "color": ["Đen", "Vàng", "Trắng", "Hồng"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "categoryDetail": [
                    {
                        "id": 1,
                        "series": "6",
                        "seriesFilter": {
                            "appearance": ["Likenew 99,99%"],
                            "memory": ["64GB", "16GB"],
                            "color": ["Đen", "Vàng", "Trắng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 6 Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-6-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-6.jpg",
                                "currentPrice": 3000000,
                                "oldPrice": 3300000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "4.7 inchs, Retina HD (750 x 1334 Pixels)",
                                    "cpu": "Apple A8 2 nhân 64-bit, 1.4 GHz",
                                    "ram": "1GB",
                                    "rearCamera": "8.0 MP",
                                    "frontCamera": "1.2 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "PowerVR GX6450",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1810 mAh",
                                    "connectionseries": "Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Direct, hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 6 Quốc tế 16GB – Likenew 99,99%",
                                "path": "/products/iphone-6-quoc-te-16gb-likenew-9999",
                                "avatar": "/products/iphone-6.jpg",
                                "currentPrice": 2600000,
                                "oldPrice": 2700000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6-trang",
                                        "color": "Trắng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "4.7 inchs, Retina HD (750 x 1334 Pixels)",
                                    "cpu": "Apple A8 2 nhân 64-bit, 1.4 GHz",
                                    "ram": "1GB",
                                    "rearCamera": "8.0 MP",
                                    "frontCamera": "1.2 MP",
                                    "internalMemory": "16GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "PowerVR GX6450",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1810 mAh",
                                    "connectionseries": "Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Direct, hotspot",
                                    "color": "Đen, Trắng, Vàng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "series": "6s",
                        "seriesFilter": {
                            "appearance": ["Likenew 99,99%"],
                            "memory": ["128GB", "64GB", "32GB", "16GB"],
                            "color": ["Đen", "Vàng", "Trắng", "Hồng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 6S Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-6s-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-6s.jpg",
                                "currentPrice": 3400000,
                                "oldPrice": 4600000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6s",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6s-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6s-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6s-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-6s-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "4.7 inchs, Retina HD (750 x 1334 Pixels)",
                                    "cpu": "Apple A9 2 nhân 64-bit, 1.8 GHz",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "5.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 11",
                                    "graphicsChip": "PowerVR GT7600",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1715 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Hồng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 6S Quốc tế 32GB – Likenew 99,99%",
                                "path": "/products/iphone-6s-quoc-te-32gb-likenew-9999",
                                "avatar": "/products/iphone-6s.jpg",
                                "currentPrice": 3000000,
                                "oldPrice": 4300000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6s",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6s-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6s-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6s-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-6s-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "4.7 inchs, Retina HD (750 x 1334 Pixels)",
                                    "cpu": "Apple A9 2 nhân 64-bit, 1.8 GHz",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "5.0 MP",
                                    "internalMemory": "32GB",
                                    "operatingSystem": "iOS 11",
                                    "graphicsChip": "PowerVR GT7600",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1715 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Hồng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone 6S Quốc tế 16GB – Likenew 99,99%",
                                "path": "/products/iphone-6s-quoc-te-16gb-likenew-9999",
                                "avatar": "/products/iphone-6s.jpg",
                                "currentPrice": 2700000,
                                "oldPrice": 3900000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6s",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6s-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6s-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6s-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-6s-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "4.7 inchs, Retina HD (750 x 1334 Pixels)",
                                    "cpu": "Apple A9 2 nhân 64-bit, 1.8 GHz",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "5.0 MP",
                                    "internalMemory": "16GB",
                                    "operatingSystem": "iOS 11",
                                    "graphicsChip": "PowerVR GT7600",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1715 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Hồng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 4,
                                "title": "iPhone 6S Quốc tế 128GB – Likenew 99,99%",
                                "path": "/products/iphone-6s-quoc-te-128gb-likenew-9999",
                                "avatar": "/products/iphone-6s.jpg",
                                "currentPrice": 3600000,
                                "oldPrice": 4900000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6s",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6s-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6s-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6s-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-6s-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "4.7 inchs, Retina HD (750 x 1334 Pixels)",
                                    "cpu": "Apple A9 2 nhân 64-bit, 1.8 GHz",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "5.0 MP",
                                    "internalMemory": "128GB",
                                    "operatingSystem": "iOS 11",
                                    "graphicsChip": "PowerVR GT7600",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "1715 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Hồng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "series": "6plus",
                        "seriesFilter": {
                            "appearance": ["Tất cả hình thức"],
                            "memory": ["Tất cả bộ nhớ"],
                            "color": ["Tất cả màu sắc"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": []
                    },
                    {
                        "id": 4,
                        "series": "6splus",
                        "seriesFilter": {
                            "appearance": ["Likenew 99,99%"],
                            "memory": ["64GB", "32GB", "16GB"],
                            "color": ["Đen", "Vàng", "Trắng", "Hồng"],
                            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                        },
                        "products": [
                            {
                                "id": 1,
                                "title": "iPhone 6S PLus Quốc tế 64GB – Likenew 99,99%",
                                "path": "/products/iphone-6s-plus-quoc-te-64gb-likenew-9999",
                                "avatar": "/products/iphone-6s-plus.jpg",
                                "currentPrice": 4100000,
                                "oldPrice": 6200000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6s-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6s-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6s-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6s-plus-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-6s-plus-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inchs, IPS LCD Full HD (1080 x 1920 Pixels)",
                                    "cpu": "Apple A9 2 nhân 64-bit, 1.8 GHz",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "5.0 MP",
                                    "internalMemory": "64GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "PowerVR GT7600",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2750 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Hồng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 2,
                                "title": "iPhone 6S Plus Quốc tế 32GB – Likenew 99,99%",
                                "path": "/products/iphone-6s-plus-quoc-te-32gb-likenew-9999",
                                "avatar": "/products/iphone-6s-plus.jpg",
                                "currentPrice": 3800000,
                                "oldPrice": 5900000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6s-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6s-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6s-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6s-plus-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-6s-plus-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inchs, IPS LCD Full HD (1080 x 1920 Pixels)",
                                    "cpu": "Apple A9 2 nhân 64-bit, 1.8 GHz",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "5.0 MP",
                                    "internalMemory": "32GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "PowerVR GT7600",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2750 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Hồng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            },
                            {
                                "id": 3,
                                "title": "iPhone 6S PLus Quốc tế 16GB – Likenew 99,99%",
                                "path": "/products/iphone-6s-plus-quoc-te-16gb-likenew-9999",
                                "avatar": "/products/iphone-6s-plus.jpg",
                                "currentPrice": 3200000,
                                "oldPrice": 5600000,
                                "available": "Còn hàng",
                                "images": [
                                    {
                                        "id": 1,
                                        "url": "/products/iphone-6s-plus",
                                        "color": ""
                                    },
                                    {
                                        "id": 2,
                                        "url": "/products/iphone-6s-plus-den",
                                        "color": "Đen"
                                    },
                                    {
                                        "id": 3,
                                        "url": "/products/iphone-6s-plus-vang",
                                        "color": "Vàng"
                                    },
                                    {
                                        "id": 4,
                                        "url": "/products/iphone-6s-plus-trang",
                                        "color": "Trắng"
                                    },
                                    {
                                        "id": 5,
                                        "url": "/products/iphone-6s-plus-hong",
                                        "color": "Hồng"
                                    }
                                ],
                                "state": "new99%",
                                "specifications": {
                                    "screen": "5.5 inchs, IPS LCD Full HD (1080 x 1920 Pixels)",
                                    "cpu": "Apple A9 2 nhân 64-bit, 1.8 GHz",
                                    "ram": "2GB",
                                    "rearCamera": "12.0 MP",
                                    "frontCamera": "5.0 MP",
                                    "internalMemory": "16GB",
                                    "operatingSystem": "iOS 12",
                                    "graphicsChip": "PowerVR GT7600",
                                    "advanceSecurity": "Vân tay",
                                    "numberOfSimSlots": "1Sim (NanoSim)",
                                    "battery": "2750 mAh",
                                    "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                                    "color": "Đen, Trắng, Vàng, Hồng",
                                    "state": "Máy lướt, Hình thức đẹp như mới"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "product": "ipad",
        "filterConditions": {
            "appearance": ["Likenew 99,99%", "Mới 100%"],
            "memory": ["256GB", "64GB", "32GB"],
            "color": ["Đen", "Vàng", "Trắng", "Hồng"],
            "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
        },
        "modelsList": [
            {
                "id": 1,
                "category": "air-mini-pro-gen",
                "categoryFilter": {
                    "appearance": ["Likenew 99,99%"],
                    "memory": ["128GB", "64GB", "32GB", "16GB"],
                    "color": ["Đen", "Vàng", "Trắng", "Hồng"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                }
            },
            {
                "id": 1,
                "series": "air",
                "seriesFilter": {
                    "appearance": ["Tất cả hình thức"],
                    "memory": ["Tất cả bộ nhớ"],
                    "color": ["Tất cả màu sắc"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "products": []
            },
            {
                "id": 2,
                "series": "mini",
                "seriesFilter": {
                    "appearance": ["Mới 100%"],
                    "memory": ["256GB"],
                    "color": ["Đen", "Vàng", "Trắng"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "products": [
                    {
                        "id": 1,
                        "title": "iPad Mini 5 256GB – Fullbox 100% (4G + Wifi) 7.9 inchs",
                        "path": "/products/iphone-11-lock-64gb-likenew-9999",
                        "avatar": "/products/iphone-6s.jpg",
                        "currentPrice": 3400000,
                        "oldPrice": 4600000,
                        "available": "Còn hàng",
                        "images": [
                            {
                                "id": 1,
                                "url": "/products/iphone-6s",
                                "color": ""
                            },
                            {
                                "id": 2,
                                "url": "/products/iphone-6s-den",
                                "color": "Đen"
                            },
                            {
                                "id": 3,
                                "url": "/products/iphone-6s-vang",
                                "color": "Vàng"
                            },
                            {
                                "id": 4,
                                "url": "/products/iphone-6s-trang",
                                "color": "Trắng"
                            },
                            {
                                "id": 5,
                                "url": "/products/iphone-6s-hong",
                                "color": "Hồng"
                            }
                        ],
                        "state": "new99%",
                        "specifications": {
                            "screen": "4.7 inchs, Retina HD (750 x 1334 Pixels)",
                            "cpu": "Apple A9 2 nhân 64-bit, 1.8 GHz",
                            "ram": "2GB",
                            "rearCamera": "12.0 MP",
                            "frontCamera": "5.0 MP",
                            "internalMemory": "64GB",
                            "operatingSystem": "iOS 11",
                            "graphicsChip": "PowerVR GT7600",
                            "advanceSecurity": "Vân tay",
                            "numberOfSimSlots": "1Sim (NanoSim)",
                            "battery": "1715 mAh",
                            "connectionseries": "Wi-Fi 802.11ac b/g/n, DLNA, Wi-Fi hotspot",
                            "color": "Đen, Trắng, Vàng, Hồng",
                            "state": "Máy lướt, Hình thức đẹp như mới"
                        }
                    }
                ]
            },
            {
                "id": 3,
                "series": "pro",
                "seriesFilter": {
                    "appearance": ["Tất cả hình thức"],
                    "memory": ["Tất cả bộ nhớ"],
                    "color": ["Tất cả màu sắc"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "products": []
            },
            {
                "id": 4,
                "series": "gen",
                "seriesFilter": {
                    "appearance": ["Tất cả hình thức"],
                    "memory": ["Tất cả bộ nhớ"],
                    "color": ["Tất cả màu sắc"],
                    "price": ["Dưới 2 triệu", "2 triệu - 4 triệu", "4 triệu - 7 triệu", "7 triệu - 13 triệu", "Trên 13 triệu"]
                },
                "products": []
            }
        ]
    }
]

function getProductListFromPath(data, path) {
    let listName = path.replace(/(\/categories\/|\/series\/iphone-|\/series\/ipad-)/g, '');
    /* find category by name */
    for(let product of data) {
        for(let model of product.modelsList) {
            if(model.category.includes(listName)) {
                if(model.category === listName) {
                    return model;
                } else {
                    return model.categoryDetail.find(series => series.series === listName);
                }
            }
        }
    }
    
    return undefined;
}
