import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 4173;
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(distPath)) {
  console.warn('\n[Aviso] A pasta "dist" não foi encontrada. Execute "npm run build" antes do deploy.');
}

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  if (!req.url) {
    res.statusCode = 400;
    res.end('Requisição inválida');
    return;
  }

  const cleanPath = req.url.split('?')[0];
  const requestedPath = path.join(distPath, decodeURIComponent(cleanPath));
  const isFile = fs.existsSync(requestedPath) && fs.statSync(requestedPath).isFile();

  const fileToServe = isFile ? requestedPath : indexPath;
  const ext = path.extname(fileToServe);
  const mimeType = mimeTypes[ext] || 'application/octet-stream';

  res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
  res.setHeader('Content-Type', mimeType);

  fs.createReadStream(fileToServe)
    .on('error', () => {
      res.statusCode = 500;
      res.end('A build ainda não foi gerada. Execute "npm run build" antes de iniciar o servidor.');
    })
    .pipe(res);
});

server.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
