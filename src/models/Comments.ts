import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import Blog from "./Blog"

@Entity()
class Comment {
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    content?: string
    
    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @ManyToOne(() => Blog, (blog: Blog) => blog.comments)
    blog?: Blog
}

export default Comment