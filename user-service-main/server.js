const http = require('http');
const app = require('./src/app'); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

if (!MONGODB_URI) {
  console.error('Missing required env var: MONGODB_URI. Set it in .env or your shell.');
  process.exit(1);
}

if (!JWT_SECRET) {
  console.warn('Warning: JWT_SECRET is not set. Authentication may be insecure.');
}


const server = http.createServer(app);


mongoose.connection.once('open', () => {
  console.log('MongoDB connection is ready!!');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting with MongoDB:', err);
});


async function startServer() {
  try {
    
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1); 
  }
}

startServer();
