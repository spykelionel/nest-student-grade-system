import { z } from 'zod';

export const CreateStudentSchema = z
  .object({
    name: z.string(),
    address: z.string(),
    department: z.any(),
    school: z.any(),
  })
  .required();

export type CreateStudentDto = z.infer<typeof CreateStudentSchema>;
