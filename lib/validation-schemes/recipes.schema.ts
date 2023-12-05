import * as z from "zod";

export const RecipeFormSchema = z.object({
  name: z.string().min(2),
  category: z.string(),
  product: z.string(),
  portions: z.coerce.number().min(0),
  preparationTime: z.object({
    time: z.coerce.number(),
    unit: z.string(),
  }),
  difficulty: z.string(),
  ingredients: z.array(
    z.object({
      rawMaterial: z.string(),
      quantity: z.coerce.number().min(1),
      unit: z.string(),
    })
  ),
});

export type RecipeFormValues = z.infer<typeof RecipeFormSchema>;
