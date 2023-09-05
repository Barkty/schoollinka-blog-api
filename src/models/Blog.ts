import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import Comment from "./Comments"

@Entity()
class Blog {
    @PrimaryGeneratedColumn()
    id?: number

    @Column("varchar", { array: true })
    images?: string[]

    @Column('text')
    content?: string

    @Column()
    likes?: number

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @OneToMany(() => Comment, (comment: Comment) => comment.blog)
    comments?: Comment[]
}

export default Blog