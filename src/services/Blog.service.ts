import { paginate } from "../helpers/paginate";
import Blog from "../models/Blog";
import { AppDataSource } from "./database";

class BlogRepository {
    repo: any
    constructor() {
        this.repo = AppDataSource.getRepository(Blog)
    }

    findAll = async (page: number, limit: number) => {
        try {
            const blogs = await this.repo.findAndCount({
                order: {
                    id: "ASC",
                },
                skip: page ? page - 10 : 0,
                take: limit
            })

            const result = paginate(blogs, page ? page - 10 : 0, limit)

            return result
        } catch (e) {
            throw e
        }
    }
}

export default BlogRepository