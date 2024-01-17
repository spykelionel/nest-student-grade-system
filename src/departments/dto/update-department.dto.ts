import { z } from 'zod';

export const UpdateDepartmentSchema = z
  .object({
    name: z.string(),
  })
  .required();

export type UpdateDepartmentDto = z.infer<typeof UpdateDepartmentSchema>;
