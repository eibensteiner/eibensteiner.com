module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            height: {
                '5.5': '1.375rem',
                '22': '5.5rem',
            },
            width: {
                '5.5': '1.375rem',
            },
            borderRadius: {
                inherit: 'inherit',
            },
            fontFamily: {
                sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
            },
            fontWeight: {
                'normal-medium': '450',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                }
            },
            animation: {
                'fade-in': 'fade-in .6s forwards',
            },
            dropShadow: {
                '2xl': '0 20px 30px rgb(0 0 0 / 0.10)'
            }
        },
    },
    plugins: [],
}
