// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        safeList: [],
        content: [
            './index.html',
            './src/**/*.tsx',
            './src/**/*.ts',
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    // ...
}