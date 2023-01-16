const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./Routes/userRoutes');
const postRouter = require('./Routes/postsRouter')

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.use('/users', userRouter);
app.use('/posts', postRouter)

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => console.log('Connected...')).catch(err => console.log('Disconnected...'))

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on Port ${port}...`)
})
