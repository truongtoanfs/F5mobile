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
        categoryName: 'airpods/ ph??? ki???n',
        categoryPath: '/categories/airpods-phukien',
    },
    {
        id: 10,
        categoryName: 'li??n h???',
        categoryPath: '/categories/lienhe',
    },
];

export const insurance = new Map();
insurance.set('new99%', {
    title: "Gi?? m??y Likenew 99%: lu??n m???c ?????nh T???NG MI???N PH?? g??i b???o h??nh cao nh???t",
    detail: [
        'B???o h??nh 12 th??ng (ph???n c???ng + ph???n m???m)',
        'Full ph??? ki???n: s???c, c??p cao c???p (b???o h??nh 6 th??ng)',
        'D??n c?????ng l???c mi???n ph?? tr???n ?????i. T???ng ???p silicon',
        'D??ng th??? 39 ng??y, ?????i l???i Mi???n ph??',
        'V???i m??y Lock h??? tr??? l???p sim gh??p l??n Qu???c t??? mi???n ph??',
    ],
})
insurance.set('new100%-actived', {
    title: "Gi?? m??y New 100% ???? k??ch ho???t:  lu??n m???c ?????nh T???NG MI???N PH?? g??i b???o h??nh (kh??ng ph???i mua th??m b???o h??nh nh?? nh???ng n??i kh??c):",
    detail: [
        'B???o h??nh 12 th??ng (ph???n c???ng + ph???n m???m)',
        'Full ph??? ki???n: s???c, c??p cao c???p (b???o h??nh 6 th??ng)',
        'D??n c?????ng l???c mi???n ph?? tr???n ?????i. T???ng ???p silicon',
        'D??n c?????ng l???c mi???n ph?? tr???n ?????i. T???ng ???p silicon',
        'D??ng th??? 10 ng??y, l???i 1 ?????i 1 Mi???n ph??',
    ],
})
insurance.set('new100%', {
    title: "Gi?? m??y FullBox New 100% ch??a k??ch ho???t",
    detail: [
        'B???o h??nh 12 th??ng ch??nh h??ng Apple v?? 12 th??ng t???i c???a h??ng',
        'Full ph??? ki???n: H???p, c??p s???c ch??nh h??ng Apple (b???o h??nh 12 th??ng)',
        'D??n c?????ng l???c mi???n ph?? tr???n ?????i. T???ng ???p silicon',
        'D??n c?????ng l???c mi???n ph?? tr???n ?????i. T???ng ???p silicon',
        'D??ng th??? 10 ng??y, l???i ph???n c???ng 1 ?????i 1',
    ],
})
insurance.set('new100%-vna', {
    title: "G??a m??y FullBox New 100% ch??nh h??ng VN/A",
    detail: [
        'B???o h??nh 12 th??ng ch??nh h??ng Apple 1 ?????i 1 t???i FPT ho???c c??c ????n v??? Apple ch??nh h??ng tr??n to??n qu???c',
        'Full ph??? ki???n: H???p, c??p s???c ch??nh h??ng Apple (b???o h??nh 12 th??ng)',
        'D??n c?????ng l???c mi???n ph?? tr???n ?????i. T???ng ???p silicon',
        'D??n c?????ng l???c mi???n ph?? tr???n ?????i. T???ng ???p silicon',
    ],
})


