import { z } from 'zod';

export const UpdateStudentSchema = z
  .object({
    name: z.string(),
  })
  .required();

export type UpdateStudentDto = z.infer<typeof UpdateStudentSchema>;
