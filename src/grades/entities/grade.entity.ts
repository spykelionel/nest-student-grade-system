import { IsNumber } from 'class-validator';
import { Course } from 'src/courses/entities/course.entity';
import { Student } from 'src/students/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A model representation of a Grade object
 */
@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column('double')
  @IsNumber()
  grade: number;

  @ManyToOne(() => Course, (course) => course.grade, { eager: true })
  course: Course;

  @ManyToOne(() => Student, (student) => student.grades)
  student: Student;
}

// many students can have same grade
