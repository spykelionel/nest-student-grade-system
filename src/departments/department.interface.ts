import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

/**
 * Interface representing the operations that can be performed on the Department entity.
 * @interface IDepartment
 */
export interface IDepartment {
  /**
   * Creates a new department record.
   *
   * @param {CreateDepartmentDto} createDepartmentDto - The data for creating a new department.
   * @returns {Promise<InsertResult | any>} A promise resolving to the insert result or an error.
   */
  create(createDepartmentDto: CreateDepartmentDto): Promise<InsertResult | any>;

  /**
   * Retrieves all department records.
   *
   * @returns {Promise<Department[] | []>} A promise resolving to an array of Department entities or an empty array if no records are found.
   */
  findAll(): Promise<Department[] | []>;

  /**
   * Retrieves a specific department record by its ID.
   *
   * @param {number} id - The ID of the department record to retrieve.
   * @returns {Promise<Department | {}>} A promise resolving to the Department entity with the specified ID or an empty object if not found.
   */
  findOne(id: number): Promise<Department | {}>;

  /**
   * Updates a specific department record by its ID.
   *
   * @param {number} id - The ID of the department record to update.
   * @param {UpdateDepartmentDto} updateDepartmentDto - The data for updating the department.
   * @returns {Promise<UpdateResult | any>} A promise resolving to the update result or an error.
   */
  update(
    id: number,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<UpdateResult | any>;

  /**
   * Removes a specific department record by its ID.
   *
   * @param {number} id - The ID of the department record to remove.
   * @returns {Promise<DeleteResult | any>} A promise resolving to the delete result or an error.
   */
  remove(id: number): Promise<DeleteResult | any>;
}
