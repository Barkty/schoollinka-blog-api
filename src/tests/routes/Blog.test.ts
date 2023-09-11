import supertest from 'supertest'
import server from '../../server'
import { AppDataSource } from '../../services/database';

jest.mock('../../services/database')
jest.mock('../../repository/Blog.service')

beforeAll( async () => {
    const datasource = await AppDataSource
    datasource.initialize()
});

afterAll(async () => {
    AppDataSource.destroy()
})

describe('Blog', () => {
    describe('get blog route', () => {
        describe('given blog does not exist', () => {
            it('should return a 404', async () => {
                const blogId = 123
                const result = await supertest(server).get(`/api/blog/${blogId}`)
                expect(result.statusCode).toBe(404)
                expect(result.statusType).toBe("Not Found")
            })
        })
    })
})