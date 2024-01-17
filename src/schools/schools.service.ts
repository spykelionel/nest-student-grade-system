import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';
import { ISchool } from './school.interface';

@Injectable()
export class SchoolsService implements ISchool {
  constructor(
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
  ) {}
  create(createSchoolDto: CreateSchoolDto): Promise<InsertResult | any> {
    return this.schoolRepository.insert(createSchoolDto);
  }
  findAll(): Promise<[] | School[]> {
    return this.schoolRepository.find();
  }
  findOne(id: number): Promise<{} | School> {
    return this.schoolRepository.findOne({ where: { id } });
  }
  update(id: number, updateSchoolDto: UpdateSchoolDto): Promise<any> {
    return this.schoolRepository.update(id, updateSchoolDto);
  }
  remove(id: number): Promise<unknown> {
    return this.schoolRepository.delete(id);
  }
}
