const path = require('path');

module.exports = {
  alias: {
    src: path.resolve(__dirname, '../src'),
    pages: path.resolve(__dirname, '../src/pages'),
    utils: path.resolve(__dirname, '../src/utils'),
    themes: path.resolve(__dirname, '../src/themes'),
    components: path.resolve(__dirname, '../src/components'),
    zanui: path.resolve(__dirname, '../src/zanui'),
    constants: path.resolve(__dirname, '../src/constants'),
    'common-api': path.resolve(__dirname, '../src/common-api'),
    'theme-builder': path.resolve(__dirname, '../theme-builder')
  }
};
