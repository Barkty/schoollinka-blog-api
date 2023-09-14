import supertest from 'supertest'
import server from '../../server'

jest.mock('../../repository/Blog.service')

describe('Blog Routes', () => {
    describe('get blog route', () => {
        describe('given blog does not exist', () => {
            it('should return a 404', async () => {

                const blogId = 3
                const result = await supertest(server).get(`/api/blog/${blogId}`)
                console.log('TEST B:: ', result.body)
                expect(result.statusCode).toBe(404)
                expect(result.statusType).toBe("Not Found")
            })
        })
    })
})