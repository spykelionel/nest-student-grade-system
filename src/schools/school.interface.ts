import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';

/**
 * Interface representing the operations that can be performed on the School entity.
 * @interface ISchool
 */
export interface ISchool {
  /**
   * Creates a new school record.
   *
   * @param {CreateSchoolDto} createSchoolDto - The data for creating a new school.
   * @returns {Promise<InsertResult | any>} A promise resolving to the insert result or an error.
   */
  create(createSchoolDto: CreateSchoolDto): Promise<InsertResult | any>;

  /**
   * Retrieves all school records.
   *
   * @returns {Promise<School[] | []>} A promise resolving to an array of School entities or an empty array if no records are found.
   */
  findAll(): Promise<School[] | []>;

  /**
   * Retrieves a specific school record by its ID.
   *
   * @param {number} id - The ID of the school record to retrieve.
   * @returns {Promise<School | {}>} A promise resolving to the School entity with the specified ID or an empty object if not found.
   */
  findOne(id: number): Promise<School | {}>;

  /**
   * Updates a specific school record by its ID.
   *
   * @param {number} id - The ID of the school record to update.
   * @param {UpdateSchoolDto} updateSchoolDto - The data for updating the school.
   * @returns {Promise<UpdateResult | any>} A promise resolving to the update result or an error.
   */
  update(
    id: number,
    updateSchoolDto: UpdateSchoolDto,
  ): Promise<UpdateResult | any>;

  /**
   * Removes a specific school record by its ID.
   *
   * @param {number} id - The ID of the school record to remove.
   * @returns {Promise<DeleteResult | any>} A promise resolving to the delete result or an error.
   */
  remove(id: number): Promise<DeleteResult | any>;
}
