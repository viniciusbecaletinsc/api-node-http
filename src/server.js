import http from 'node:http'

const routes = {
  "/": "Hello World",
  "/about": "About Us",
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(routes[req.url])
})

server.listen(3000, () => console.log("Server is running on port 3000"))