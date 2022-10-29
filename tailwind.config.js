/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'JIT',
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            primary: '#202225',
            secondary: '#5865f2',
            gray: colors.trueGray
        }
    },
    plugins: []
};
