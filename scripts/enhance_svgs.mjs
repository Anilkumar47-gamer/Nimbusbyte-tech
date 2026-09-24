import fs from 'fs';
import path from 'path';

const assetsDir = 'c:/Users/pc/Downloads/nimbusbyte/nimbusbyte/public/assets';
const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.svg'));

console.log(`Processing ${files.length} SVG files...`);

const styleBlock = `
    <style type="text/css"><![CDATA[
      @keyframes svgFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-7px); }
      }
      @keyframes svgFloatAlt {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-5px) rotate(0.4deg); }
      }
      @keyframes svgPulse {
        0%, 100% { transform: scale(1); opacity: 0.85; }
        50% { transform: scale(1.08); opacity: 1; }
      }
      @keyframes svgGlow {
        0%, 100% { opacity: 0.12; transform: scale(1); }
        50% { opacity: 0.28; transform: scale(1.1); }
      }
      @keyframes svgBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.25; }
      }
      @keyframes svgDashFlow {
        from { stroke-dashoffset: 80; }
        to { stroke-dashoffset: 0; }
      }
      .svg-anim-glow { animation: svgGlow 5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
      .svg-anim-float { animation: svgFloat 6s ease-in-out infinite; }
      .svg-anim-float-delayed { animation: svgFloatAlt 7s ease-in-out -3.5s infinite; }
      .svg-anim-pulse { animation: svgPulse 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
      .svg-anim-blink { animation: svgBlink 2.2s ease-in-out infinite; }
      .svg-anim-dash { stroke-dasharray: 6 4; animation: svgDashFlow 12s linear infinite; }
      @media (prefers-reduced-motion: reduce) {
        *, .svg-anim-glow, .svg-anim-float, .svg-anim-float-delayed, .svg-anim-pulse, .svg-anim-blink, .svg-anim-dash {
          animation: none !important;
        }
      }
    ]]></style>`;

for (const file of files) {
  const filePath = path.join(assetsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert style into defs or svg
  if (!content.includes('svgFloat')) {
    if (content.includes('<defs>')) {
      content = content.replace('<defs>', `<defs>${styleBlock}`);
    } else if (content.includes('<svg')) {
      const idx = content.indexOf('>', content.indexOf('<svg')) + 1;
      content = content.slice(0, idx) + `<defs>${styleBlock}</defs>` + content.slice(idx);
    }
  }

  // Safely add class attributes BEFORE tag close:
  // 1. Ambient glow circles
  content = content.replace(/(<circle\b[^>]*\bopacity="0\.1[0-9]"[^>]*?)(\s*\/?\s*>)/gi, (match, tagBody, closing) => {
    if (tagBody.includes('class=')) return match;
    const isSelfClosing = closing.includes('/');
    return `${tagBody} class="svg-anim-glow"${isSelfClosing ? ' />' : '>'}`;
  });

  // 2. Status pulse dots
  content = content.replace(/(<circle\b[^>]*\br="(?:[3-8]|5\.5)"[^>]*\bfill="(?:#6ee7c4|#10b981|#3fa9f5)"[^>]*?)(\s*\/?\s*>)/gi, (match, tagBody, closing) => {
    if (tagBody.includes('class=')) return match;
    const isSelfClosing = closing.includes('/');
    return `${tagBody} class="svg-anim-blink"${isSelfClosing ? ' />' : '>'}`;
  });

  // 3. Floating device/card groups
  content = content.replace(/(<g\b[^>]*\btransform="translate\((?:36|24|48|160|280|320)[^"]*"\)[^>]*?)(\s*>)/gi, (match, tagBody, closing) => {
    if (tagBody.includes('class=')) return match;
    return `${tagBody} class="svg-anim-float">`;
  });

  // 4. Waveform or chart lines
  content = content.replace(/(<path\b[^>]*\bstroke="url\(#[^)]+\)"[^>]*\bstroke-width="2(?:\.5)?"[^>]*?)(\s*\/?\s*>)/gi, (match, tagBody, closing) => {
    if (tagBody.includes('class=') || tagBody.includes('fill="#')) return match;
    const isSelfClosing = closing.includes('/');
    return `${tagBody} class="svg-anim-dash"${isSelfClosing ? ' />' : '>'}`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Enhanced ${file}`);
}
