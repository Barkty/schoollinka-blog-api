import server from "./src/server"
import "reflect-metadata"
import { AppDataSource } from "./src/services/database";

const { PORT } = process.env;

const serverStart = async () => {
    try {

        AppDataSource.initialize().then(() => {
            console.log('Database initialized')
        }).catch((error) => console.log(error))

        server.listen(PORT, ()=> {
            console.log(`⚡️[server]: Server is running on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

serverStart()