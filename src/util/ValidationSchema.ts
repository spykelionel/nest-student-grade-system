import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

/**
 * Schema validation pipe
 */
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  /**
   *
   * @param value value to be parsed
   * @param metadata a transform method meta data arg
   * @returns parsed value or error when unsuccessful
   */
  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
