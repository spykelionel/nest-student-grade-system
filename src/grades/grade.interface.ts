import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';

export interface IGrade {
  create(createGradeDto: CreateGradeDto): Promise<InsertResult | any>;
  findAll(): Promise<Grade[] | []>;
  findOne(id: number): Promise<Grade | {}>;
  update(
    id: number,
    updateGradeDto: UpdateGradeDto,
  ): Promise<UpdateResult | any>;
  remove(id: number): Promise<DeleteResult | any>;
}
