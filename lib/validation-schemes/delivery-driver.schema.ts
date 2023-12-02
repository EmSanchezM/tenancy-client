import * as z from "zod";

export const DeliveryDriverFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2)
});

export type DeliveryDriverFormValues = z.infer<typeof DeliveryDriverFormSchema>;
