import supertest from 'supertest'
import server from '../../server'
import { findBlog } from '../fixtures/blog'
import { existingBlog } from '../setupAfterEnv'

jest.mock('../../repository/Blog.service')

describe('A GET request to /api/blog route', () => {
    it('returns a HTTP 200 response for a blog', async () => {
        const result = await supertest(server).get(`/api/blog/${existingBlog.id}`)
        expect(result.statusCode).toBe(200)
        expect(result.body).toEqual(existingBlog)
    })

    it('returns a HTTP error 404 for a non-existing blog', async () => {
        const result = await supertest(server).get(`/api/blog/${findBlog.id}`)
        expect(result.notFound).toBeTruthy()
        expect(result.statusCode).toBe(404)
    })

    it('returns HTTP 200 response for all blog records', async () => {
        const result = await supertest(server).get(`/api/blog?page=1&limit=20`)
        expect(result.status).toBe(200)
        expect(result.body).toEqual({success: 1, message: 'Successful'})
    })
})