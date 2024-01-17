import { z } from 'zod';

export const CreateSchoolSchema = z
  .object({
    name: z.number(),
  })
  .required();

export type CreateSchoolDto = z.infer<typeof CreateSchoolSchema>;
