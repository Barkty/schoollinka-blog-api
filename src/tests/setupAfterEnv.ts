import { AppDataSource } from '../services/database';

const dataSource = AppDataSource

beforeAll(async () => {
    await dataSource.initialize()
    if (dataSource.isInitialized) {
        console.log('Database initialized')
    } else {
        console.log('Database error')
    }
})

afterAll(async () => {
    await dataSource.destroy()
})