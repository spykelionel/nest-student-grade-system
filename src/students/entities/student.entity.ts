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
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * A model representation of a Student object
 */
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

  @ManyToOne((_) => Department, (department) => department.students, {
    eager: true,
  })
  department: Department;

  @ManyToOne((_) => School, (school) => school.students)
  school: School;

  @ManyToMany(() => Course, (course) => course.students, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  courses: Course[];

  @OneToMany(() => Grade, (grade) => grade.student, { eager: true })
  grades: Grade[];
}
