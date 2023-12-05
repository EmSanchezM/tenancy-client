import * as z from "zod";

export const AreaFormSchema = z.object({
  name: z.string().min(2),
  tables: z.optional(
    z.array(
      z.object({
        tableNumber: z.coerce.number().min(1),
        capacity: z.coerce.number().min(1),
      })
    )
  ),
});

export const TableFormSchema = z.object({
  tableNumber: z.coerce.number().min(1),
  capacity: z.coerce.number().min(1),
});

export type AreaFormValues = z.infer<typeof AreaFormSchema>;
export type TableFormValues = z.infer<typeof TableFormSchema>;
