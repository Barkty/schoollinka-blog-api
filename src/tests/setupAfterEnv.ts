import BlogRepository from '../repository/Blog.service';
import { AppDataSource } from '../services/database';
import { blog } from './fixtures/blog';

const dataSource = AppDataSource

var existingBlog: any

beforeAll(async () => {
    await dataSource.initialize()
    if (dataSource.isInitialized) {
        console.log('Database initialized')
    } else {
        console.log('Database error')
    }
    const blogRepo = new BlogRepository()
    existingBlog = await blogRepo.create(blog)
})

afterAll(async () => {
    await dataSource.dropDatabase()
    await dataSource.destroy()
})

export { existingBlog }