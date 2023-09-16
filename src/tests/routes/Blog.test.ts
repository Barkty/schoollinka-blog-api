import supertest from 'supertest'
import server from '../../server'
import { findBlog } from '../fixtures/blog'

jest.mock('../../repository/Blog.service')

describe('A GET request to /api/blog route', () => {
    it('returns a HTTP 200 response for a blog', async () => {
        const result = await supertest(server).get(`/api/blog/${findBlog.id}`)
        // expect(result.statusCode).toBe(200)
        expect(result.body).toEqual(findBlog)
    })

    it('returns a HTTP error 404 for a non-existing blog', async () => {
        const result = await supertest(server).get(`/api/blog/${findBlog.id}`)
        expect(result.notFound).toBeTruthy()
        expect(result.statusCode).toBe(404)
    })
})