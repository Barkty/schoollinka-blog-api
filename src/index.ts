import server from "./server"
import "reflect-metadata"
import { AppDataSource } from "./services/database";

const { PORT } = process.env;

const serverStart = async () => {
    try {

        AppDataSource.initialize().then(() => {
                // here you can start to work with your database
                console.log('Database initialized')
        }).catch((error) => console.log(error))

        // const dataSource = await AppDataSource.initialize()

        server.listen(PORT, ()=> {
            console.log(`⚡️[server]: Server is running on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

serverStart()