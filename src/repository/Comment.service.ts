import Comment from "../models/Comment.entity"
import { AppDataSource } from "../services/database"
import { IComment } from "../interfaces"
import { createCustomError } from "../utils/customError"
import BlogRepository from "./Blog.service"

class CommentRepository {
    private repo: any
    private blogRepo: any

    constructor() {
        this.repo = AppDataSource.getRepository(Comment)
        this.blogRepo = new BlogRepository()
    }

    async create (blogId: number, body: IComment) {
        try {
            const comment = await this.repo.create({ ...body })
            const blog = await this.blogRepo.findOne(blogId)
            const comments = blog.comments || []
            comments.push(comment)
            blog.comments = comments

            await this.blogRepo.updateOne(blogId, blog)

            return await this.repo.save(comment)

        } catch (e) {
            throw e
        }
    }

    async findOne (id: any) {
        try {

            const comment = await this.repo.findOneBy({ id })

            return comment
        } catch (e) {
            throw e
        }
    }

    updateOne = async (id: number, updates: Partial<IComment>) => {

        try {
            
          const comment = await this.findOne(id)
    
          if (!comment) throw createCustomError('Comment does not exist', 404)

          let likes = comment.likes
          Object.assign(comment, updates)

          if (updates.likes) {
            likes += 1
            comment.likes = likes
          }
    
          return await this.repo.save(comment)
    
        } catch (e) {
          throw e
        }
    }
}

export default CommentRepository