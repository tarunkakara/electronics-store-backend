# Electronics Store Backend (JSON Server)

Backend API service for the Electronics Store application powered by `json-server`.

## 📦 Features
- Full REST API for `/products`, `/users`, and `/orders`
- Ready for local testing and one-click deployment on [Render](https://render.com)
- Built-in CORS and health check endpoint at `/health`

## 🚀 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   # Server runs on http://localhost:5000
   ```

3. Endpoints available:
   - `GET /products` - List all electronics products
   - `GET /products/:id` - Get single product details
   - `POST /products` - Add a new product
   - `PUT /products/:id` - Update existing product
   - `DELETE /products/:id` - Delete product
   - `GET /users` - List users
   - `POST /users` - Register a new user
   - `GET /health` - Server health check

## 🌐 Deploying to Render

1. Push this folder to a GitHub repository (e.g. `electronics-store-backend`).
2. Log in to [Render](https://render.com).
3. Click **New +** -> **Web Service**.
4. Connect your `electronics-store-backend` repository.
5. Settings:
   - **Name**: `electronics-store-api` (or any unique name)
   - **Environment / Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Click **Create Web Service**.
7. Once deployed, copy your Render URL (e.g., `https://electronics-store-api.onrender.com`) and paste it into the frontend `services/api.js` or `.env` as `VITE_API_URL`.
