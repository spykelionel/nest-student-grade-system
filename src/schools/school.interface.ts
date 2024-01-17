import { InsertResult, UpdateResult } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';

export interface ISchool {
  create(createSchoolDto: CreateSchoolDto): Promise<InsertResult | any>;
  findAll(): Promise<School[] | []>;
  findOne(id: number): Promise<School | {}>;
  update(
    id: number,
    updateSchoolDto: UpdateSchoolDto,
  ): Promise<UpdateResult | any>;
  remove(id: number): Promise<string | unknown>;
}
