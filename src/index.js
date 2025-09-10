import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { callAgent } from './agent.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ 'message': 'server running successfully' })
})

app.post('/api/translate', async (req, res) => {
    try {
        const { code } = req.body;
        const data = await callAgent(code);

        res.status(200).json({ data });
    } catch (err) {

        console.error(err);
        res.status(400).json({ 'message': 'Internal server error' });
    }

})

app.listen(3000, () => {
    console.log('Server is running on port ', 3000);
})