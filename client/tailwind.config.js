module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                f5: {
                    primary: 'var(--primary-color)',
                    secondary: 'var(--secondary-color)',
                    black: 'var(--text-black)',
                }
            },
            backgroundColor: {
                f5: {
                    primary: 'var(--primary-color)',
                    secondary: 'var(--secondary-color)',
                }
            },
            borderColor: {
                f5: {
                    primary: 'var(--primary-color)',
                    secondary: 'var(--secondary-color)',
                }
            },
            placeholderColor: {
                f5: {
                    primary: 'var(--primary-color)',
                    secondary: 'var(--secondary-color)',
                }
            },
            boxShadow: {
                secondary: '0 2px 4px 0 rgba(55, 181, 72, 0.4)',//'var(--secondary-color)'
            },
            maxWidth: {
                '1300': '1300px',
            },
            fontSize: {
                'xsm': ['11px', '14px']
            },
            height: {
                'sm': '640px',
            },
            transitionProperty: {
                'maxHeight': 'maxHeight',
            }
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            maxWidth: ['group-hover'],
            maxHeight: ['group-hover'],
            translate: ['group-hover'],
            height: ['group-hover'],
            padding: ['first'],
        },
    },
    plugins: [],
}
