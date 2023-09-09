import { AfterInsert, AfterRemove, AfterUpdate, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import Blog from "./Blog.entity"

@Entity()
class Comment {
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text')
    content?: string

    @Column('int', { nullable: true })
    likes?: number
    
    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @ManyToOne(() => Blog, (blog: Blog) => blog.comments)
    blog?: Blog

    @AfterInsert()
    logInsert() {
        console.log(`Inserted comment with id: ${this.id}`)
    }

    @AfterRemove()
    logRemove() {
        console.log(`Removed comment with id: ${this.id}`)
    }

    @AfterUpdate()
    logUpdate() {
        console.log(`Updated comment with id: ${this.id}`)
    }
}

export default Comment