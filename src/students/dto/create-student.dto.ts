import { z } from 'zod';

export const CreateStudentSchema = z
  .object({
    name: z.string(),
    address: z.string(),
    department: z.number(),
    school: z.number(),
  })
  .required();

export type CreateStudentDto = z.infer<typeof CreateStudentSchema>;
