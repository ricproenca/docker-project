import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3002;
const CORS_PORT = process.env.API_PORT || 3000;
const CORS_URL = process.env.API_URL || 'localhost';
const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
console.log('CORS_ADDRESS: ', CORS_ADDRESS);

const app = express();

const corsOptions = { origin: CORS_ADDRESS };
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Listen to port ${PORT}`);
});

app.get("/test", (req, res) => {
    res.send("Hello from express with nodemon!");
});

