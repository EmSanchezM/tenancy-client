import * as z from "zod";

export const CategoryFormSchema = z.object({
  name: z.string().min(2),
  description: z.string(),
});

export type CategoryFormValues = z.infer<typeof CategoryFormSchema>;
