import supertest from 'supertest'
import server from '../../server'

describe('Home', () => {
    describe('get API home', () => {
        describe('given API exists', () => {
            it('should return a 200', async () => {
                const mockResult = {
                    message: `Hello from homepage. Check the API specification for further guidance and next steps.`,
                    success: 1,
                }
                const result = await supertest(server).get(`/api`)
                expect(result.statusCode).toBe(200)
                expect(result.body).toEqual(mockResult)
            })
        })

        describe('given API does not exist', () => {
            it('should return a 404', async () => {
                const mockResult = {
                    message: "OOPs!! Server can't find /apis. This could be a typographical issue. Check the API specification for further guidance",
                    success: 0
                }
                const result = await supertest(server).get(`/apis`)
                expect(result.statusCode).toBe(404)
                expect(result.body).toEqual(mockResult)
            })
        })
    })
})

describe('Blog', () => {
    describe('get blog route', () => {
        describe('given blog does not exist', () => {
            it('should return a 404', async () => {
                const blogId = 123
                const result = await supertest(server).get(`/api/blog/${blogId}`)
                console.log('TEST B:: ', result.body)
                expect(result.statusCode).toBe(404)
                expect(result.statusType).toBe("Not Found")
                console.log('TEST CODE:: ', result.statusCode)
            })
        })
    })
})