import { faker } from '@faker-js/faker'
import Blog from '../../models/Blog.entity'

export interface IResult {
    totalItems: number,
    totalPages: number,
    page: number,
    docs: Blog[]
}

const createRandomBlog = () => {
    return {
        title: faker.internet.displayName(),
        content: faker.lorem.paragraphs(5),
        avatar: [faker.internet.avatar()]
    }
}

const findRandomBlog = () => {
    return {
        id: faker.number.int({ min: 1, max: 30 }),
        title: faker.internet.displayName(),
        content: faker.lorem.paragraphs(5),
        avatar: [faker.internet.avatar()],
    }
}

const updateRandomBlog = () => {
    return {
        id: faker.number.int({ min: 1, max:30 }),
        content: faker.lorem.paragraphs(5),
        avatar: [faker.internet.avatar()],
        likes: faker.number.int({ min: 1 })
    }
}

export const findBlog = findRandomBlog()
export const blog = createRandomBlog()
export const updateBlog = updateRandomBlog()

export const blogRecords = {
    totalItems: faker.number.int({ min: 1, max: 50 }),
    totalPages: faker.number.int(),
    page: faker.number.int(),
    docs: [findBlog]
}