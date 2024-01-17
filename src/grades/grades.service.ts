import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';
import { IGrade } from './grade.interface';

@Injectable()
export class GradesService implements IGrade {
  constructor(
    @InjectRepository(Grade)
    private readonly gradeRepository: Repository<Grade>,
  ) {}

  create(createGradeDto: CreateGradeDto): Promise<InsertResult> {
    return this.gradeRepository.insert(createGradeDto);
  }
  findAll(): Promise<[] | Grade[]> {
    return this.gradeRepository.find();
  }
  findOne(id: number): Promise<{} | Grade> {
    return this.gradeRepository.findOne({ where: { id } });
  }
  update(id: number, updateGradeDto: UpdateGradeDto): Promise<any> {
    return this.gradeRepository.update(id, updateGradeDto);
  }
  remove(id: number): Promise<DeleteResult> {
    return this.gradeRepository.delete(id);
  }
}
