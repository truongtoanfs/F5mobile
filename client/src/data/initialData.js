export const navList = [
    {
        id: 1,
        categoryName: '12/ 12mini/ 12promax',
        categoryPath: '/categories/12-12mini-12pro-12promax',
        categoryList: [
            {
                id: 1,
                seriesName: 'iphone 12',
                seriesPath: '/series/iphone-12',
            },
            {
                id: 2,
                seriesName: 'iphone 12 mini',
                seriesPath: '/series/iphone-12mini',
            },
            {
                id: 3,
                seriesName: 'iphone 12 pro',
                seriesPath: '/series/iphone-12pro',
            },
            {
                id: 4,
                seriesName: 'iphone 12 pro max',
                seriesPath: '/series/iphone-12promax',
            },

        ]
    },
    {
        id: 2,
        categoryName: '11/ 11pro/ 11promax',
        categoryPath: '/categories/11-11pro-11promax',
        categoryList: [
            {
                id: 1,
                seriesName: 'iphone 11',
                seriesPath: '/series/iphone-11',
            },
            {
                id: 2,
                seriesName: 'iphone 11 pro',
                seriesPath: '/series/iphone-11pro',
            },
            {
                id: 3,
                seriesName: 'iphone 11 promax',
                seriesPath: '/series/iphone-11promax',
            },
        ]
    },
    {
        id: 3,
        categoryName: 'x/ xs/ xsmax/ xr',
        categoryPath: '/categories/x-xs-xsmax-xr',
        categoryList: [
            {
                id: 1,
                seriesName: 'iphone x',
                seriesPath: '/series/iphone-x',
            },
            {
                id: 2,
                seriesName: 'iphone xs',
                seriesPath: '/series/iphone-xs',
            },
            {
                id: 3,
                seriesName: 'iphone xs max',
                seriesPath: '/series/iphone-xsmax',
            },
            {
                id: 4,
                seriesName: 'iphone xr',
                seriesPath: '/series/iphone-xr',
            },
        ]
    },
    {
        id: 4,
        categoryName: '8/ 8plus',
        categoryPath: '/categories/8-8plus',
        categoryList: [
            {
                id: 1,
                seriesName: 'iphone 8',
                seriesPath: '/series/iphone-8',
            },
            {
                id: 2,
                seriesName: 'iphone 8 plus',
                seriesPath: '/series/iphone-8plus',
            },
        ]
    },
    {
        id: 5,
        categoryName: '7/ 7plus',
        categoryPath: '/categories/7-7plus',
        categoryList: [
            {
                id: 1,
                seriesName: 'iphone 7',
                seriesPath: '/series/iphone-7',
            },
            {
                id: 2,
                seriesName: 'iphone 7 plus',
                seriesPath: '/series/iphone-7plus',
            },
        ]
    },
    {
        id: 6,
        categoryName: '6/ 6s/ 6splus',
        categoryPath: '/categories/6-6s-6plus-6splus',
        categoryList: [
            {
                id: 1,
                seriesName: 'iphone 6',
                seriesPath: '/series/iphone-6',
            },
            {
                id: 2,
                seriesName: 'iphone 6s',
                seriesPath: '/series/iphone-6s',
            },
            {
                id: 3,
                seriesName: 'iphone 6 plus',
                seriesPath: '/series/iphone-6plus',
            },
            {
                id: 4,
                seriesName: 'iphone 6s plus',
                seriesPath: '/series/iphone-6splus',
            },
            
        ]
    },
    {
        id: 7,
        categoryName: 'ipad',
        categoryPath: '/categories/air-mini-pro-gen',
        categoryList: [
            {
                id: 1,
                seriesName: 'ipad air',
                seriesPath: '/series/ipad-air',
            },
            {
                id: 2,
                seriesName: 'ipad mini 3/4/5',
                seriesPath: '/series/ipad-mini',
            },
            {
                id: 4,
                seriesName: 'ipad pro',
                seriesPath: '/series/ipad-pro',
            },
            {
                id: 5,
                seriesName: 'ipad gen 5/6/7/8',
                seriesPath: '/series/ipad-gen',
            },
            
        ]
    },
    {
        id: 8,
        categoryName: 'apple watch',
        categoryPath: '/categories/apple-watch',
    },
    {
        id: 9,
        categoryName: 'airpods/ phụ kiện',
        categoryPath: '/categories/airpods-phukien',
    },
    {
        id: 10,
        categoryName: 'liên hệ',
        categoryPath: '/categories/lienhe',
    },
];

export const insurance = new Map();
insurance.set('new99%', {
    title: "Giá máy Likenew 99%: luôn mặc định TẶNG MIỄN PHÍ gói bảo hành cao nhất",
    detail: [
        'Bảo hành 12 tháng (phần cứng + phần mềm)',
        'Full phụ kiện: sạc, cáp cao cấp (bảo hành 6 tháng)',
        'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
        'Dùng thử 39 ngày, đổi lỗi Miễn phí',
        'Với máy Lock hỗ trợ lắp sim ghép lên Quốc tế miễn phí',
    ],
})
insurance.set('new100%-actived', {
    title: "Giá máy New 100% đã kích hoạt:  luôn mặc định TẶNG MIỄN PHÍ gói bảo hành (không phải mua thêm bảo hành như những nơi khác):",
    detail: [
        'Bảo hành 12 tháng (phần cứng + phần mềm)',
        'Full phụ kiện: sạc, cáp cao cấp (bảo hành 6 tháng)',
        'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
        'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
        'Dùng thử 10 ngày, lỗi 1 đổi 1 Miễn phí',
    ],
})
insurance.set('new100%', {
    title: "Giá máy FullBox New 100% chưa kích hoạt",
    detail: [
        'Bảo hành 12 tháng chính hãng Apple và 12 tháng tại cửa hàng',
        'Full phụ kiện: Hộp, cáp sạc chính hãng Apple (bảo hành 12 tháng)',
        'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
        'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
        'Dùng thử 10 ngày, lỗi phần cứng 1 đổi 1',
    ],
})
insurance.set('new100%-vna', {
    title: "Gía máy FullBox New 100% chính hãng VN/A",
    detail: [
        'Bảo hành 12 tháng chính hãng Apple 1 đổi 1 tại FPT hoặc các đơn vị Apple chính hãng trên toàn quốc',
        'Full phụ kiện: Hộp, cáp sạc chính hãng Apple (bảo hành 12 tháng)',
        'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
        'Dán cường lực miễn phí trọn đời. Tặng ốp silicon',
    ],
})


