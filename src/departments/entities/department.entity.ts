import { IsNumber, IsString } from 'class-validator';
import { Course } from 'src/courses/entities/course.entity';
import { School } from 'src/schools/entities/school.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column('varchar', { length: 255 })
  @IsString()
  name: string;

  @ManyToOne((_) => School, (school) => school.departments, { nullable: false })
  school: School;

  @OneToMany((_) => Course, (course) => course.department, { eager: true })
  courses?: Course[];

  @OneToMany((_) => Student, (student) => student.department)
  students?: Student[];
}
