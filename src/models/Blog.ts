import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Blog {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    images?: string[]

    @Column('text')
    content?: string

    @Column()
    likes?: number
}

export default Blog