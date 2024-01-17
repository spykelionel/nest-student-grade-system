import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

export interface IStudent {
  create(createStudentDto: CreateStudentDto): Promise<InsertResult | any>;
  findAll(): Promise<Student[] | []>;
  findOne(id: number): Promise<Student | {}>;
  update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<UpdateResult | any>;
  remove(id: number): Promise<DeleteResult | any>;
}
