import BlogRepository from '../../repository/Blog.service';

describe('Blog Repository', () => {
    describe('get blog service', () => {
        it('should not exist', async () => {
            const blogRepo = new BlogRepository()
            const result = await blogRepo.findOne(2)
            expect(result).toBeNull()
        })
    })
})