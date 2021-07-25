import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5000
const DB_URL = "mongodb+srv://user:user@cluster0.52ff5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`Server started at port: ${PORT}`))
    } catch (e) {

    }
}

startApp()
