import { z } from 'zod';

export const CreateGradeSchema = z
  .object({
    grade: z.number(),
    course: z.any(),
    student: z.any(),
  })
  .required();

export type CreateGradeDto = z.infer<typeof CreateGradeSchema>;
