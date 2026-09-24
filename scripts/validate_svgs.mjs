import fs from 'fs';
import path from 'path';

const dir = './public/assets';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

let errorCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check for common XML breakage
  // 1. Double closing tags like >> or />>
  if (/>>/.test(content)) {
    console.error(`[ERROR] Double > in ${file}`);
    errorCount++;
  }

  // 2. Broken attributes like class="..." inside tag
  const brokenAttr = content.match(/<[^>]+class="[^"]*"[^>]*class="[^"]*"/g);
  if (brokenAttr) {
    console.error(`[ERROR] Duplicate class attr in ${file}:`, brokenAttr[0]);
    errorCount++;
  }

  // 3. Broken tag endings like <path ... />> or <circle ... class="..."/>/>
  const brokenTag = content.match(/<[a-zA-Z0-9_-]+[^>]*\/\s*>/g);
  
  // 4. Check if style tag is inside defs properly or if & or < without CDATA broke it
  // In SVG XML, <style> containing < or & can break XML parser if not wrapped in CDATA: <![CDATA[ ... ]]>
  if (content.includes('<style>') && !content.includes('<![CDATA[')) {
    // Check if style contains & or <
    const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
    if (styleMatch && /<|&/.test(styleMatch[1])) {
      console.error(`[ERROR] Style contains XML special chars without CDATA in ${file}`);
      errorCount++;
    }
  }
}

console.log(`Validation finished. Found ${errorCount} errors across ${files.length} files.`);
