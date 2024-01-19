import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';

/**
 * Interface representing the operations that can be performed on the Grade entity.
 * @interface IGrade
 */
export interface IGrade {
  /**
   * Creates a new grade record.
   *
   * @param {CreateGradeDto} createGradeDto - The data for creating a new grade.
   * @returns {Promise<InsertResult | any>} A promise resolving to the insert result or an error.
   */
  create(createGradeDto: CreateGradeDto): Promise<InsertResult | any>;

  /**
   * Retrieves all grade records.
   *
   * @returns {Promise<Grade[] | []>} A promise resolving to an array of Grade entities or an empty array if no records are found.
   */
  findAll(): Promise<Grade[] | []>;

  /**
   * Retrieves a specific grade record by its ID.
   *
   * @param {number} id - The ID of the grade record to retrieve.
   * @returns {Promise<Grade | {}>} A promise resolving to the Grade entity with the specified ID or an empty object if not found.
   */
  findOne(id: number): Promise<Grade | {}>;

  /**
   * Updates a specific grade record by its ID.
   *
   * @param {number} id - The ID of the grade record to update.
   * @param {UpdateGradeDto} updateGradeDto - The data for updating the grade.
   * @returns {Promise<UpdateResult | any>} A promise resolving to the update result or an error.
   */
  update(
    id: number,
    updateGradeDto: UpdateGradeDto,
  ): Promise<UpdateResult | any>;

  /**
   * Removes a specific grade record by its ID.
   *
   * @param {number} id - The ID of the grade record to remove.
   * @returns {Promise<DeleteResult | any>} A promise resolving to the delete result or an error.
   */
  remove(id: number): Promise<DeleteResult | any>;
}
