// Followed https://flaviocopes.com/tailwind-setup/ for PurgeCSS and CSSNano setup
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./client/**/*.html', './imports/**/*.vue', './imports/**/*.jsx'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
