import * as z from "zod";

export const UnitsOfMeasureFormSchema = z.object({
  name: z.string().min(2),
  symbol: z.string(),
  factor: z.coerce.number().min(1),
});

export type UnitsOfMeasureFormValues = z.infer<typeof UnitsOfMeasureFormSchema>;
