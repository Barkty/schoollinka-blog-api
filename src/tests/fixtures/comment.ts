import { faker } from '@faker-js/faker'

const createRandomComment = () => {
    return {
        content: faker.lorem.paragraphs(2),
    }
}

export const comment = createRandomComment()