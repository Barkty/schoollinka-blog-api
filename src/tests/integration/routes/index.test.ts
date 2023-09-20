import supertest from 'supertest'
import server from '../../../server'

describe('A GET request to /api route', () => {
    it('returns a HTTP response 200 for an existing home route', async () => {
        const result = await supertest(server).get(`/api`)
        expect(result.statusCode).toBe(200)
        expect(result.body.success).toBeTruthy()
    })

    it('returns HTTP 404 for a non-existing home route', async () => {
        const result = await supertest(server).get(`/apis`)
        expect(result.statusCode).toBe(404)
        expect(result.notFound).toBeTruthy()
    })
})
