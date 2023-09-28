import supertest from 'supertest'
import server from '../../../server'
import { findBlog, blog } from '../../fixtures/blog'
import { existingBlog } from '../../setupAfterEnv'


describe('A GET request to /api/blog route', () => {
    it('returns a HTTP 200 response for an existing blog', async () => {
        const result = await supertest(server).get(`/api/blog/${existingBlog.id}`)
        expect(result.statusCode).toBe(200)
        expect(result.body.success).toBeTruthy()
    })
    
    it('returns a HTTP error 404 for a non-existing blog', async () => {
        const result = await supertest(server).get(`/api/blog/${findBlog.id}`)
        expect(result.notFound).toBeTruthy()
        expect(result.statusCode).toBe(404)
    })
    
    it('returns HTTP 200 response for all blog records', async () => {
        const result = await supertest(server).get(`/api/blog?page=1&limit=20`)
        expect(result.status).toBe(200)
        expect(result.body.success).toBeTruthy()
    })
})

describe('A DELETE request to /api/blog route', () => {
    it('returns a HTTP 200 response for existing blog', async () => {
        const result = await supertest(server).delete(`/api/blog/${existingBlog.id}`)
        expect(result.status).toBe(200)
        expect(result.body.success).toBeTruthy()
    })

    it('returns a HTTP error 404 response for a non existing blog', async () => {
        const result = await supertest(server).delete(`/api/blog/${existingBlog.id}`)
        expect(result.status).toBe(404)
        expect(result.notFound).toBeTruthy()
    })
})

describe('A POST request to /api/blog route', () => {
    it('returns a HTTP 200 response for an existing blog', async () => {
        const result = await supertest(server).post(`/api/blog`).send({...blog})
        expect(result.statusCode).toBe(201)
        expect(result.body.success).toBeTruthy()
    })
    
    it('returns a HTTP 400 response for an existing blog', async () => {
        const result = await supertest(server).post(`/api/blog`).send({...blog})
        expect(result.statusCode).toBe(400)
        expect(result.body.success).not.toBeTruthy()
    })
})

