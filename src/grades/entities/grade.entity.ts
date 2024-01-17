import { IsNumber } from 'class-validator';
import { Course } from 'src/courses/entities/course.entity';
import { Student } from 'src/students/entities/student.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column('double')
  @IsNumber()
  grade: number;

  @ManyToMany(() => Course, (course) => course.grades, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  courses?: Course;

  @ManyToMany(() => Student, (student) => student.grades, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  students?: Student;
}

// many students can have same grade
