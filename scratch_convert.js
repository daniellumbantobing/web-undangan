const fs = require('fs');

const html = fs.readFileSync('dokumen/index.html', 'utf8');

const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.log('No body found');
  process.exit(1);
}

let bodyHtml = bodyMatch[1];
bodyHtml = bodyHtml.replace(/<script[\s\S]*?<\/script>/gi, '');
bodyHtml = bodyHtml.replace(/ class="/g, ' className="');
bodyHtml = bodyHtml.replace(/ for="/g, ' htmlFor="');

bodyHtml = bodyHtml.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1/>');
bodyHtml = bodyHtml.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1/>');
bodyHtml = bodyHtml.replace(/<br([^>]*?)(?<!\/)>/g, '<br/>');
bodyHtml = bodyHtml.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr/>');

bodyHtml = bodyHtml.replace(/style="([^"]*)"/g, '');
bodyHtml = bodyHtml.replace(/onclick="([^"]*)"/gi, '');
bodyHtml = bodyHtml.replace(/onchange="([^"]*)"/gi, '');
bodyHtml = bodyHtml.replace(/onsubmit="([^"]*)"/gi, '');

bodyHtml = bodyHtml.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

fs.writeFileSync('app/Template.tsx', 'export default function Template() {\n  return (\n    <>\n' + bodyHtml + '\n    </>\n  );\n}\n');
console.log('Created Template.tsx');

