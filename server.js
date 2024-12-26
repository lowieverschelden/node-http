const http = require('http');
const pageData = require('./data');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="nl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${pageData.title}</title>
    </head>
    <body>
      <h1>${pageData.title}</h1>
      <h2>${pageData.subtitle}</h2>
      <p>${pageData.description}</p>
      <footer>Geschreven door: ${pageData.author}</footer>
    </body>
    </html>
  `;
    res.end(htmlContent);
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server draait op https://localhost:${PORT}`);
})