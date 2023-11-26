import * as z from "zod";

export const BranchFormSchema = z.object({
  name: z.string().min(2),
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
});

export type BranchFormValues = z.infer<typeof BranchFormSchema>;
