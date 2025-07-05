import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();
const { DB_NAME,DB_HOST,DB_PASS,DB_PORT,DB_USER } = process.env;

const connection = new Sequelize({
    username:DB_USER,
    password:DB_PASS,
    host:DB_HOST,
    dialect: 'postgres',
    database: DB_NAME,
    port:DB_PORT
});


export default connection;