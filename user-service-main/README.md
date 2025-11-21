# Sparrow: User-Service

Quick start instructions to run the User Service locally.

Required environment variables (copy to `.env` or set in your shell):

- `MONGODB_URI` — MongoDB connection string (e.g. `mongodb://localhost:27017/userdb`)
- `JWT_SECRET` — secret used to sign JWTs
- `PORT` — optional, defaults to `8003`

Example (PowerShell):

```powershell
$env:MONGODB_URI = 'mongodb://localhost:27017/userdb'
$env:JWT_SECRET = 'your_jwt_secret'
$env:PORT = '8003'
npm install --prefix .\user-service-main
npm start --prefix .\user-service-main
```

Or create a `.env` file from `.env.example` and start normally.