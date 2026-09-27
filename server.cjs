const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(middlewares);

// Health check endpoint
server.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Electronics Store Backend API', timestamp: new Date() });
});

server.use(router);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Electronics Store Backend is running on http://localhost:${PORT}`);
  console.log(`📦 Resources:`);
  console.log(`   http://localhost:${PORT}/products`);
  console.log(`   http://localhost:${PORT}/users`);
  console.log(`   http://localhost:${PORT}/orders`);
});
