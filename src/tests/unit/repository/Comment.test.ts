import Comment from "../../../models/Comment.entity"
import CommentRepository from "../../../repository/Comment.service"
import { findBlog } from "../../fixtures/blog"
import { comment } from "../../fixtures/comment"

const commentRepo = new CommentRepository()

describe('A create call to comment repository', () => {
    it('returns an updated blog with comments', async () => {
        const createOneSpy = jest.spyOn(commentRepo, 'create').mockResolvedValue(comment as Comment)
        const createComment = await commentRepo.create(findBlog.id, comment)
        expect(createComment).toEqual(createComment)
        expect(createOneSpy).toHaveBeenCalledWith(findBlog.id, comment)
        expect(createOneSpy).toReturn()
    })

    
})