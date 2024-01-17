import { z } from 'zod';

export const CreateGradeSchema = z
  .object({
    grade: z.number(),
    course: z.number(),
    student: z.number(),
  })
  .required();

export type CreateGradeDto = z.infer<typeof CreateGradeSchema>;
