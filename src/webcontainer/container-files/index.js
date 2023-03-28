import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import finalhandler from 'finalhandler';
import serveStatic from 'serve-static';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const serve = serveStatic(path.resolve(__dirname, 'notes'));

http
  .createServer((req, res) => {
    serve(req, res, finalhandler(req, res));
  })
  .listen(3000);
