import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

/**
 * Interface representing the operations that can be performed on the Student entity.
 * @interface IStudent
 */
export interface IStudent {
  /**
   * Creates a new student record.
   *
   * @param {CreateStudentDto} createStudentDto - The data for creating a new student.
   * @returns {Promise<InsertResult | any>} A promise resolving to the insert result or an error.
   */
  create(createStudentDto: CreateStudentDto): Promise<InsertResult | any>;

  /**
   * Retrieves all student records.
   *
   * @returns {Promise<Student[] | []>} A promise resolving to an array of Student entities or an empty array if no records are found.
   */
  findAll(): Promise<Student[] | []>;

  /**
   * Retrieves a specific student record by its ID.
   *
   * @param {number} id - The ID of the student record to retrieve.
   * @returns {Promise<Student | {}>} A promise resolving to the Student entity with the specified ID or an empty object if not found.
   */
  findOne(id: number): Promise<Student | {}>;

  /**
   * Updates a specific student record by its ID.
   *
   * @param {number} id - The ID of the student record to update.
   * @param {UpdateStudentDto} updateStudentDto - The data for updating the student.
   * @returns {Promise<UpdateResult | any>} A promise resolving to the update result or an error.
   */
  update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<UpdateResult | any>;

  /**
   * Removes a specific student record by its ID.
   *
   * @param {number} id - The ID of the student record to remove.
   * @returns {Promise<DeleteResult | any>} A promise resolving to the delete result or an error.
   */
  remove(id: number): Promise<DeleteResult | any>;
}
