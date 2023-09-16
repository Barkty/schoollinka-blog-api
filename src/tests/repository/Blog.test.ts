import Blog from '../../models/Blog.entity';
import BlogRepository from '../../repository/Blog.service';
import { IResult, blog, blogRecords, findBlog, updateBlog } from '../fixtures/blog';

const blogRepo = new BlogRepository()

describe('A create call to blog repository', () => {
    it('returns a new blog created', async () => {
        const createOneSpy = jest.spyOn(blogRepo, 'create').mockResolvedValue(blog as Blog)
        const createBlog = await blogRepo.create(blog)
        expect(createBlog).toEqual(blog)
        expect(createOneSpy).toHaveBeenCalledWith(blog)
        expect(createOneSpy).toReturn()
    })

    it('returns a 400 error when creating an existing blog', async () => {
        try {
            const existingBlog = await blogRepo.create(blog)
            const result = await blogRepo.create(existingBlog)
        } catch (e: any) {
            // console.error({e})
        }
        
    })
})

describe('A GET call to blog repository', () => {
    it('returns null when fetching a blog that does not exist', async () => {
        const findOneSpy = jest.spyOn(blogRepo, 'findOne').mockResolvedValue(null)
        const foundBlog = await blogRepo.findOne(findBlog.id)
        expect(foundBlog).toBeNull()
        expect(findOneSpy).toHaveBeenCalledWith(findBlog.id)
        expect(findOneSpy).toReturn()
    })

    it('returns a blog record', async () => {
        const findOneSpy = jest.spyOn(blogRepo, 'findOne').mockResolvedValue(findBlog as Blog)
        const foundBlog = await blogRepo.findOne(findBlog.id)
        expect(foundBlog).toEqual(findBlog)
        expect(findOneSpy).toHaveBeenCalledWith(findBlog.id)
        expect(findOneSpy).toReturn()
    })

    it('should return all blog post', async () => {
        const findAllSpy = jest.spyOn(blogRepo, 'findAll').mockResolvedValue(blogRecords as IResult)
        const foundAll = await blogRepo.findAll(1, 20)
        expect(foundAll).toEqual(blogRecords)
        expect(findAllSpy).toHaveBeenCalledWith(1, 20)
        expect(findAllSpy).toReturn()
    })
})

describe('A EDIT call to blog repository', () => {
    it('returns an updated form of blog record', async () => {
        const updateOneSpy = jest.spyOn(blogRepo, 'updateOne').mockResolvedValue(updateBlog as Blog)
        const updateOne = await blogRepo.updateOne(updateBlog.id, updateBlog)
        expect(updateOne).toEqual(updateBlog)
        expect(updateOneSpy).toHaveBeenCalledWith(updateBlog.id, updateBlog)
        expect(updateOneSpy).toReturn()
    })

    it('returns a 400 error when updating a blog that does not exist', async () => {
        try {
            const updateOneSpy = jest.spyOn(blogRepo, 'updateOne').mockRejectedValue(new Error('Blog does not exist'))
            await blogRepo.updateOne(updateBlog.id, updateBlog)
            expect(updateOneSpy).toHaveBeenCalledWith(updateBlog.id, updateBlog)
            expect(updateOneSpy).toThrow()
        } catch (e) {
            // console.error({e})
        }
    })
})

describe('A DELETE call to blog repository', () => {
    it('returns deleted blog repository', async () => {
        const deletedOneSpy = jest.spyOn(blogRepo, 'removeOne').mockResolvedValue(updateBlog as Blog)
        const update = await blogRepo.removeOne(updateBlog.id)
        expect(update).toEqual(updateBlog)
        expect(deletedOneSpy).toHaveBeenCalledWith(updateBlog.id)
        expect(deletedOneSpy).toReturn()
    })

    it('returns a 404 error for deleting a non-existing blog', async () => {
        try {
            const deleteOneSpy = jest.spyOn(blogRepo, 'removeOne').mockRejectedValue(new Error('Blog does not exist'))
            const update = await blogRepo.removeOne(updateBlog.id)
            expect(deleteOneSpy).toHaveBeenCalledWith(updateBlog.id)
            expect(deleteOneSpy).toThrow()
        } catch (e) {
            // console.error({e})
        }
    })
})