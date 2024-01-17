import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';
import { IStudent } from './student.interface';

@Injectable()
export class StudentsService implements IStudent {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  create(createStudentDto: CreateStudentDto): Promise<any> {
    return this.studentRepository.insert(createStudentDto);
  }
  findAll(): Promise<Student[] | []> {
    return this.studentRepository.find();
  }
  findOne(id: number): Promise<{} | Student> {
    return this.studentRepository.findOne({ where: { id } });
  }
  update(id: number, updateStudentDto: { name?: string }): Promise<any> {
    return this.studentRepository.update(id, updateStudentDto);
  }
  remove(id: number): Promise<any> {
    return this.studentRepository.delete(id);
  }
}
