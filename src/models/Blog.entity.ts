import { AfterInsert, AfterRemove, AfterUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import Comment from "./Comment.entity"

@Entity()
class Blog {
    @PrimaryGeneratedColumn()
    id?: number

    @Column("varchar")
    title?: string

    @Column("varchar", { array: true })
    avatar?: string[]

    @Column('text')
    content?: string

    @Column('int', { nullable: true })
    likes?: number

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @OneToMany(() => Comment, (comment: Comment) => comment.blog)
    comments?: Comment[]
    
    @AfterInsert()
    logInsert() {
        console.log(`Inserted blog with id: ${this.id}`)
    }

    @AfterRemove()
    logRemove() {
        console.log(`Removed blog with id: ${this.id}`)
    }
    @AfterUpdate()
    logUpdate() {
        console.log(`Updated blog with id: ${this.id}`)
    }

}

export default Blog