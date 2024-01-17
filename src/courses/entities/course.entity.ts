import { IsNumber } from 'class-validator';
import { Department } from 'src/departments/entities/department.entity';
import { Grade } from 'src/grades/entities/grade.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  name: string;

  @ManyToOne((_) => Department, (department) => department.courses, {
    nullable: false,
  })
  department: Department;

  @ManyToMany(() => Student, (student) => student.courses, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  students?: Student[];

  @ManyToMany(() => Grade, (grade) => grade.courses, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  grades?: Grade;
}
