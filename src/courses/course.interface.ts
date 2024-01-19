import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

/**
 * Interface representing the operations that can be performed on the Course entity.
 * @interface ICourse
 */
export interface ICourse {
  /**
   * Creates a new course record.
   *
   * @param {CreateCourseDto} createCourseDto - The data for creating a new course.
   * @returns {Promise<InsertResult | any>} A promise resolving to the insert result or an error.
   */
  create(createCourseDto: CreateCourseDto): Promise<InsertResult | any>;

  /**
   * Retrieves all course records.
   *
   * @returns {Promise<Course[] | []>} A promise resolving to an array of Course entities or an empty array if no records are found.
   */
  findAll(): Promise<Course[] | []>;

  /**
   * Retrieves a specific course record by its ID.
   *
   * @param {number} id - The ID of the course record to retrieve.
   * @returns {Promise<Course | {}>} A promise resolving to the Course entity with the specified ID or an empty object if not found.
   */
  findOne(id: number): Promise<Course | {}>;

  /**
   * Updates a specific course record by its ID.
   *
   * @param {number} id - The ID of the course record to update.
   * @param {UpdateCourseDto} updateCourseDto - The data for updating the course.
   * @returns {Promise<UpdateResult | any>} A promise resolving to the update result or an error.
   */
  update(
    id: number,
    updateCourseDto: UpdateCourseDto,
  ): Promise<UpdateResult | any>;

  /**
   * Removes a specific course record by its ID.
   *
   * @param {number} id - The ID of the course record to remove.
   * @returns {Promise<DeleteResult | any>} A promise resolving to the delete result or an error.
   */
  remove(id: number): Promise<DeleteResult | any>;
}
