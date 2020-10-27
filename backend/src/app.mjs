import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL || 'api_mongo';
const MONGO_DB = `mongodb://${MONGO_URL}:${MONGO_PORT}`;

mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', () => {
    console.error.bind(console, 'MongoDB connection error:');
});

const PORT = process.env.PORT || 3002;
const CORS_PORT = process.env.API_PORT || 3000;
const CORS_URL = process.env.API_URL || 'localhost';
const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
console.log('CORS_ADDRESS: ', CORS_ADDRESS);

const app = express();

const corsOptions = { origin: CORS_ADDRESS };
// app.use(cors(corsOptions));

app.get("/test", cors(corsOptions), (req, res) => {
    res.send("Hello from express with nodemon!");
});

app.get("/healthcheck", cors(corsOptions), (req, res) => {
    mongoose.connection.db.admin().ping( (error, result) => {
        if (error || !result) {
            res.send({ 
                message: `Ping failed with error: ${JSON.stringify(error)}`,
                status: 'fail'
            });
        }

        res.send({ 
            message: `Connection with Mongo is up!`,
            status: 'ok'
        });
    });
    
});

app.listen(PORT, () => {
    console.log(`Listen to port ${PORT}`);
});
