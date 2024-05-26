module.exports = {
  language: 'ja',
  theme: ['.'],
  workspaceDir: '.vivliostyle',
  entry: ['example/default.md', 'example/copyright.md'],
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
