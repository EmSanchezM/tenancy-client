import * as z from "zod";

export const SupplierFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string().optional().or(z.literal("")),
  description: z.string(),
  code: z.string(),
});

export type SupplierFormValues = z.infer<typeof SupplierFormSchema>;
