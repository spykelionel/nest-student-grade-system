import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { IDepartment } from './department.interface';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService implements IDepartment {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  create(createDepartmentDto: {
    name: string;
    school: any;
  }): Promise<InsertResult> {
    return this.departmentRepository.insert(createDepartmentDto);
  }
  findAll(): Promise<[] | Department[]> {
    return this.departmentRepository.find();
  }
  findOne(id: number): Promise<{} | Department> {
    return this.departmentRepository.findOne({ where: { id } });
  }
  update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<any> {
    return this.departmentRepository.update(id, updateDepartmentDto);
  }
  remove(id: number): Promise<unknown> {
    return this.departmentRepository.delete(id);
  }
}
