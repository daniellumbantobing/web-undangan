const https = require('https');
https.get('https://hanifmega.katsudoto.id', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const images = data.match(/src="([^"]+)"/g);
    if(images) {
        images.forEach(img => {
            if(img.includes('.png') || img.includes('.svg') || img.includes('.webp') || img.includes('.jpg')) {
                console.log(img);
            }
        });
    } else {
        console.log('no images');
    }
  });
}).on('error', err => console.log(err));

