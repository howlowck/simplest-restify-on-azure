var restify = require('restify')

var server = restify.createServer()

server.get('/api/messages', (req, res) => {
  res.json({messages: 'Hi!!!'})
})

server.get(/\/?.*/, restify.serveStatic({
  directory: './public',
  default: 'index.html'
}))

server.listen(process.env.port || 8080, function () {
  console.log('%s listening at %s', server.name, server.url)
})
