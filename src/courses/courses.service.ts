import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICourse } from './course.interface';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService implements ICourse {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  create(createCourseDto: CreateCourseDto): Promise<any> {
    return this.courseRepository.insert(createCourseDto);
  }
  findAll(): Promise<Course[] | []> {
    return this.courseRepository.find();
  }
  findOne(id: number): Promise<{} | Course> {
    return this.courseRepository.findOne({ where: { id } });
  }
  update(id: number, updateCourseDto: UpdateCourseDto): Promise<any> {
    return this.courseRepository.update(id, updateCourseDto);
  }
  remove(id: number): Promise<any> {
    return this.courseRepository.delete(id);
  }
}
