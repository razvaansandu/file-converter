const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.wasm': 'application/wasm',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
}

http.createServer((req, res) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp')

  let filePath = '.' + req.url
  if (filePath === './') filePath = './index.html'

  const ext = path.extname(filePath)
  const contentType = MIME[ext] || 'text/plain'

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('Not found')
      return
    }
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(data)
  })
}).listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`)
})
