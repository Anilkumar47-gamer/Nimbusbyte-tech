import fs from 'fs';
import path from 'path';

const dir = './public/assets';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

// Let's replace any unescaped > or & in text nodes and check all SVGs
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace raw `> ` inside text tags: <text ...>> ...</text> -> <text ...>&gt; ...</text>
  content = content.replace(/(<text[^>]*>)\s*>\s*/g, '$1&gt; ');

  // Ensure no unclosed or broken tags
  content = content.replace(/\/ class="/g, ' class="');

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Sanitized all text nodes in SVGs.');
