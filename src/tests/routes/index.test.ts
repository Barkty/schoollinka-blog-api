import supertest from 'supertest'
import server from '../../server'

describe('A GET request to /api route', () => {
    it('returns a HTTP response 200 for an existing home route', async () => {
        const mockResult = {
            message: `Hello from homepage. Check the API specification for further guidance and next steps.`,
            success: 1,
        }
        const result = await supertest(server).get(`/api`)
        expect(result.statusCode).toBe(200)
        expect(result.body).toEqual(mockResult)
    })

    it('returns HTTP 400 for a non-existing home route', async () => {
        const result = await supertest(server).get(`/apis`)
        expect(result.statusCode).toBe(404)
        expect(result.notFound).toBeTruthy()
    })
})
