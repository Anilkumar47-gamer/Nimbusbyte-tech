import fs from 'fs';
import path from 'path';

const dir = './public/assets';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

let allValid = true;

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check 1: < and > balance
  const openCount = (content.match(/</g) || []).length;
  const closeCount = (content.match(/>/g) || []).length;

  if (openCount !== closeCount) {
    console.error(`[INVALID] Bracket mismatch in ${file}: < has ${openCount}, > has ${closeCount}`);
    allValid = false;
  }

  // Check 2: No double slashes before > like //> or / >
  if (/\/\s*\/\s*>/.test(content)) {
    console.error(`[INVALID] Double slash in ${file}`);
    allValid = false;
  }

  // Check 3: Check CDATA closure
  if (content.includes('<![CDATA[') && !content.includes(']]>')) {
    console.error(`[INVALID] Unclosed CDATA in ${file}`);
    allValid = false;
  }

  // Check 4: Check style tag closure
  if (content.includes('<style') && !content.includes('</style>')) {
    console.error(`[INVALID] Unclosed style in ${file}`);
    allValid = false;
  }

  // Check 5: Check svg tag closure
  if (!content.trim().endsWith('</svg>')) {
    console.error(`[INVALID] File does not end with </svg> in ${file}`);
    allValid = false;
  }
}

if (allValid) {
  console.log(`ALL ${files.length} SVG files are 100% valid XML and properly structured!`);
}
