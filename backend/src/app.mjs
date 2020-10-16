import express from 'express';
import cors from 'cors';

const PORT = 3001;
const app = express();

const corsOptions = { origin: 'http://localhost:3000' };
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Listen to port ${PORT}`);
});

app.get("/test", (req, res) => {
    res.send("Hello from express!");
});

