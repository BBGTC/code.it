import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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