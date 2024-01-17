import { z } from 'zod';

export const createCourseSchema = z
  .object({
    name: z.string(),
    department: z.number(),
  })
  .required();

export type CreateCourseDto = z.infer<typeof createCourseSchema>;
