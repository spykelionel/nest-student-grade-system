import { z } from 'zod';

export const UpdateGradeSchema = z
  .object({
    grade: z.number(),
  })
  .required();

export type UpdateGradeDto = z.infer<typeof UpdateGradeSchema>;
