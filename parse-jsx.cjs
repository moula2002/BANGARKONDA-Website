const fs = require('fs');
const parser = require('@babel/parser');
const path = require('path');

const file = path.join(__dirname, 'src', 'pages', 'Home.jsx');
const code = fs.readFileSync(file, 'utf8');

try {
  parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx'],
  });
  console.log('Parsed successfully');
} catch (e) {
  console.error('Parse error:');
  console.error(e.message);
  console.error('Location:', e.loc);
}
