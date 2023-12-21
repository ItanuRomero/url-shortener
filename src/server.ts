import { URLShortener } from './services/shortener.ts'
const port = 8080;

const shortener = new URLShortener()

const handler = (request: Request): Response => {
  const { method, url } = request
  const data = url.split('localhost:8080/')[1]

  if (method === 'GET') {
    const shorten = shortener.shortenURL(data)
    return new Response(JSON.stringify({ method, shorten }), { status: 200 });
  }

  if (method === 'POST') {
    const longURL = shortener.retrieveURL(data)
    return new Response(JSON.stringify({ method, longURL }), { status: 200 });
  }
  
};

console.log(`HTTP server running. Access it at: http://localhost:8080/`);
Deno.serve({ port }, handler);