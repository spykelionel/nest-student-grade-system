import { InsertResult, UpdateResult } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

export interface Icourse {
  create(createCourseDto: CreateCourseDto): Promise<InsertResult | any>;
  findAll(): Promise<Course[] | []>;
  findOne(id: number): Promise<Course | {}>;
  update(
    id: number,
    updateCourseDto: UpdateCourseDto,
  ): Promise<UpdateResult | any>;
  remove(id: number): Promise<string | unknown>;
}
