import * as z from "zod";

export const customerFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.object({
    address: z.string().optional().or(z.literal("")),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postalCode: z.string().optional().or(z.literal("")),
  }),
  contactInformation: z.object({
    email: z.string().email(),
    phoneNumbers: z.array(z.string()),
    website: z.string().url().optional().or(z.literal("")),
    facebook: z.string().url().optional().or(z.literal("")),
    instagram: z.string().url().optional().or(z.literal("")),
  }),
  birthday: z.date().optional().or(z.literal(undefined)),
});

export type CustomerFormValues = z.infer<typeof customerFormSchema>;
