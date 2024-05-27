module.exports = {
  language: 'ja',
  theme: [
    '@fontsource/ibm-plex-mono',
    '@fontsource/libre-baskerville',
    '@fontsource/m-plus-1-code',
    '@fontsource/material-icons',
    '@fontsource/noto-sans-jp',
    '@fontsource/noto-serif-jp',
    '@fontsource/yakuhanjp',
    '@fontsource/yakuhanmp',
    '@vivliostyle/theme-base',
    '@liarnose/vivliostyle-theme-spellbook-5e'],
  workspaceDir: '.vivliostyle',
  entry: ['example/default.md', 'example/copyright.md'],
  output: "book.pdf"
};
