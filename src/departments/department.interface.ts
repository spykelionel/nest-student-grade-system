import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

export interface IDepartment {
  create(createDepartmentDto: CreateDepartmentDto): Promise<InsertResult | any>;
  findAll(): Promise<Department[] | []>;
  findOne(id: number): Promise<Department | {}>;
  update(
    id: number,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<UpdateResult | any>;
  remove(id: number): Promise<DeleteResult | any>;
}
