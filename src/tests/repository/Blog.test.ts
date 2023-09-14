import Blog from '../../models/Blog.entity';
import BlogRepository from '../../repository/Blog.service';
import { faker } from '@faker-js/faker'

const blogRepo = new BlogRepository()

describe('Blog Repository', () => {
    describe('create blog service', () => {
        const createRandomBlog = () => {
            return {
                title: faker.internet.displayName(),
                content: faker.lorem.paragraphs(5),
                avatar: [faker.internet.avatar()]
            }
        }
        const blog = createRandomBlog()
        
        describe('given blog is created', () => {
            it('should return a blog', async () => {
               const createOneSpy = jest.spyOn(blogRepo, 'create').mockResolvedValue(blog as Blog)
               const createBlog = await blogRepo.create(blog)
               expect(createBlog).toEqual(blog)
               expect(createOneSpy).toHaveBeenCalledWith(createBlog)
            })
        })

        describe('given blog already exists', () => {
            it('should return 400', async () => {
                const blogExists = {
                    title: 'The Fourth Blog',
                    content: 'This blog already exist and it has some testing content'
                }
                const createOneSpy = jest.spyOn(blogRepo, 'create').mockRejectedValue(new Error('Blog already exists'))
                const createBlog = await blogRepo.create(blogExists)
                expect(createBlog).toEqual('')
                expect(createOneSpy).toHaveBeenCalledWith(blogExists)
            })
        })
    })

    describe('get blog service', () => {
        const findRandomBlog = () => {
            return {
                id: faker.number.int(),
                title: faker.internet.displayName(),
                content: faker.lorem.paragraphs(5),
                avatar: [faker.internet.avatar()]
            }
        }

        const findBlog = findRandomBlog()

        describe('given blog does not exist', () => {
            it('should return null', async () => {
                const findOneSpy = jest.spyOn(blogRepo, 'findOne').mockResolvedValue(null)
                const foundBlog = await blogRepo.findOne(findBlog.id)
                expect(foundBlog).toBeNull()
                expect(findOneSpy).toHaveBeenCalledWith(findBlog.id)
            })
        })

        describe('given blog post exists', () => {
            it('should return found blog', async () => {
                const findOneSpy = jest.spyOn(blogRepo, 'findOne').mockResolvedValue(findBlog as Blog)
                const foundBlog = await blogRepo.findOne(findBlog.id)
                expect(foundBlog).toEqual(findBlog)
                expect(findOneSpy).toHaveBeenCalledWith(findBlog.id)
            })
        })
    })
})