import * as z from "zod";

export const ProductFormSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  category: z.string(),
  price: z.coerce.number().min(0),
  variants: z.array(
    z.object({
      name: z.string(),
      price: z.coerce.number().min(1),
    })
  ),
});

export type ProductFormValues = z.infer<typeof ProductFormSchema>;
