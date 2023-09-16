import Blog from '../models/Blog.entity';
import BlogRepository from '../repository/Blog.service';
import { AppDataSource } from '../services/database';
import { blog } from './fixtures/blog';

const dataSource = AppDataSource

export let existingBlog: any

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
    // console.log({existingBlog})
    await dataSource.destroy()
})