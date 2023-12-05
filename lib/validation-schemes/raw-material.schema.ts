import * as z from "zod";

export const RawMaterialFormSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  expirationDate: z.coerce.date(),
  price: z.coerce.number().min(1),
  costPrice: z.coerce.number().min(1),
  quantity: z.coerce.number().min(1),
  minStock: z.coerce.number().min(1),
  maxStock: z.coerce.number().min(1),
  category: z.string(),
  suppliers: z.string(), //z.array(z.string()),
  unitsOfMeasure: z.string(), //z.array(z.string()),
});

export type RawMaterialFormValues = z.infer<typeof RawMaterialFormSchema>;
