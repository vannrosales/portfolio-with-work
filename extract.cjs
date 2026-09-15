const fs = require('fs');
const https = require('https');

https.get('https://vann-dev.vercel.app/assets/index-Cy7dU6D-.js', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    // Extract strings that look like sentences or JSON text
    const matches = data.match(/`([^`]{20,})`/g) || [];
    const text = matches.map(s => s.replace(/`/g, '')).filter(s => !s.includes('class') && !s.includes('<')).join('\n\n');
    fs.writeFileSync('extracted.txt', text);
    console.log('Extracted to extracted.txt');
  });
});
