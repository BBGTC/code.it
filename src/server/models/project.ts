import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";

export enum Status {
    Starting,
    OnGoing,
    Finished 
}

@Entity()
export class Project{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string
    
    @Column()
    description: string

    @ManyToOne(()=> User, (user) => user.projects)
    ownerId: User
    
    @Column()
    skills: string[]

    @Column({
        type: 'enum', 
        enum: Status, 
        default: Status.OnGoing
    })
    status: Status

    @Column("int")
    collaboratorsLimit: number
}