import { z } from 'zod';

export const CreateDepartmentSchema = z
  .object({
    name: z.string(),
    school: z.number(),
  })
  .required();

export type CreateDepartmentDto = z.infer<typeof CreateDepartmentSchema>;
