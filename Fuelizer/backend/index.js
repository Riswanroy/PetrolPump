import app from './app.js';
import dotenv from  'dotenv';
import connection from './config/db.config.js';

dotenv.config();
const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connection.authenticate()
        await connection.sync({ alter: true });
        console.log(`[INFO]:[index]:startServer(): DB Connected Successfully`)
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.error(`[Error]:[index]:startServer(): Error In server: ${error.message}`)
    }
}

startServer()