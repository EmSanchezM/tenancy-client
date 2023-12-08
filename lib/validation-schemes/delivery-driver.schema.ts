import * as z from "zod";

export const DeliveryDriverFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  contactInformation: z.object({
    email: z.string().email(),
    phoneNumbers: z.array(z.string()),
    website: z.string().url().optional().or(z.literal("")),
    facebook: z.string().url().optional().or(z.literal("")),
    instagram: z.string().url().optional().or(z.literal("")),
  }),
});

export type DeliveryDriverFormValues = z.infer<typeof DeliveryDriverFormSchema>;
