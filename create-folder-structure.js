const fs = require('fs');
const path = require('path');

const directories = [
  'pos-system/public',
  'pos-system/src',
  'pos-system/src/assets/images',
  'pos-system/src/assets/styles',
  'pos-system/src/components',
  'pos-system/src/pages',
  'pos-system/src/context',
  'pos-system/src/hooks',
  'pos-system/src/services',
  'pos-system/src/utils'
];

const files = {
  'pos-system/public/index.html': '<!DOCTYPE html>\n<html>\n<head>\n  <title>POS System</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>',
  'pos-system/public/favicon.ico': '',

  'pos-system/src/assets/styles/App.css': '',
  'pos-system/src/components/Header.js': '',
  'pos-system/src/components/Footer.js': '',
  'pos-system/src/components/Sidebar.js': '',
  'pos-system/src/components/ProductList.js': '',
  'pos-system/src/components/ProductItem.js': '',
  'pos-system/src/components/Cart.js': '',
  'pos-system/src/components/Checkout.js': '',

  'pos-system/src/pages/Home.js': '',
  'pos-system/src/pages/Products.js': '',
  'pos-system/src/pages/CartPage.js': '',
  'pos-system/src/pages/CheckoutPage.js': '',

  'pos-system/src/context/CartContext.js': '',
  'pos-system/src/context/ProductContext.js': '',
  'pos-system/src/context/UserContext.js': '',

  'pos-system/src/hooks/useCart.js': '',
  'pos-system/src/hooks/useProducts.js': '',
  'pos-system/src/hooks/useUser.js': '',

  'pos-system/src/services/api.js': '',
  'pos-system/src/services/auth.js': '',

  'pos-system/src/utils/helpers.js': '',
  'pos-system/src/utils/constants.js': '',

  'pos-system/src/App.js': '',
  'pos-system/src/index.js': '',
  'pos-system/src/serviceWorker.js': '',

  'pos-system/.gitignore': 'node_modules/\ndist/\n.env',
  'pos-system/package.json': JSON.stringify({
    name: "pos-system",
    version: "1.0.0",
    description: "POS System in React JS",
    main: "src/index.js",
    scripts: {
      start: "react-scripts start",
      build: "react-scripts build",
      test: "react-scripts test",
      eject: "react-scripts eject"
    },
    dependencies: {
      react: "^17.0.2",
      "react-dom": "^17.0.2",
      "react-scripts": "4.0.3"
    },
    devDependencies: {},
    browserslist: {
      production: [">0.2%", "not dead", "not op_mini all"],
      development: ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
    }
  }, null, 2),
  'pos-system/README.md': '# POS System\nThis is a POS system built with React JS.',
  'pos-system/yarn.lock': '',
  'pos-system/package-lock.json': ''
};

directories.forEach(dir => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
});

Object.keys(files).forEach(file => {
  fs.writeFileSync(file, files[file]);
});

console.log('Folder structure created successfully!');
