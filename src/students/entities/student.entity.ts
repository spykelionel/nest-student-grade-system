import { IsNumber, IsString } from 'class-validator';
import { Course } from 'src/courses/entities/course.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Grade } from 'src/grades/entities/grade.entity';
import { School } from 'src/schools/entities/school.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  address: string;

  @ManyToOne((_) => Department, (department) => department.students)
  department: Department;

  @ManyToOne((_) => School, (school) => school.students)
  school: School;

  @ManyToMany(() => Course, (course) => course.students, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  courses?: Course[];

  @ManyToMany(() => Grade, (grade) => grade.students, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  grades?: Grade[];
}
