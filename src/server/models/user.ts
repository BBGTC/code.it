import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project";

@Entity()
export class User implements UserInterface {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  campus: string;

  @Column()
  semester: number;

  @Column()
  major: string;

  @OneToMany(() => Project, (project) => project.ownerId)
  projects : Project[]
}

export interface UserInterface {
  id: string;
  email: string;
  name: string;
  lastName: string;
  campus: string;
  semester: number;
  major: string;
  createdAt: Date;
}