import re

with open('dokumen/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
if not body_match:
    print('No body found')
    exit()

body_html = body_match.group(1)
body_html = re.sub(r'<script.*?</script>', '', body_html, flags=re.DOTALL | re.IGNORECASE)
body_html = body_html.replace(' class=\"', ' className=\"')
body_html = body_html.replace(' for=\"', ' htmlFor=\"')

body_html = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1/>', body_html)
body_html = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1/>', body_html)
body_html = re.sub(r'<br([^>]*?)(?<!/)>', r'<br/>', body_html)
body_html = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr/>', body_html)

body_html = re.sub(r'style=\"([^\"]*)\"', r'', body_html)
body_html = re.sub(r'onclick=\"[^\"]*\"', '', body_html)
body_html = re.sub(r'onchange=\"[^\"]*\"', '', body_html)
body_html = re.sub(r'onsubmit=\"[^\"]*\"', '', body_html)

body_html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', body_html, flags=re.DOTALL)

with open('app/Template.tsx', 'w', encoding='utf-8') as f:
    f.write('export default function Template() {\n  return (\n    <>\n')
    f.write(body_html)
    f.write('\n    </>\n  );\n}\n')
print('Created Template.tsx')

