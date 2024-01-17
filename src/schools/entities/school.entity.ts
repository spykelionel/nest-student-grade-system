import { IsNumber, IsString } from 'class-validator';
import { Department } from 'src/departments/entities/department.entity';
import { Student } from 'src/students/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  name: string;

  @OneToMany((_) => Department, (department) => department.school)
  departments?: Department[];

  @OneToMany((_) => Student, (student) => student.school)
  students?: Student[];
}
