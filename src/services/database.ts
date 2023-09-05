import { DataSource } from "typeorm";
import Blog from "../models/Blog";
import dotenv from "dotenv"
import Comment from "../models/Comments";

dotenv.config()

const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT } = process.env
console.log('PASS:: ', DB_PASSWORD)
export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Blog, Comment],
})