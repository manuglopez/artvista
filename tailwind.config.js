/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            blue_arti: '#495ba2',
            black_arti: '#1a1a1a',
            yellow_arti: '#e8b319',
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            slate: colors.slate,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)']
            },
        },

    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}
