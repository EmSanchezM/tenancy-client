import * as z from "zod";

export const RequisitionFormSchema = z.object({
  name: z.string(),
  dateToMeet: z.coerce.date(),
  items: z.array(
    z.object({
      quantity: z.coerce.number(),
      product: z.string(),
      unit: z.string(),
      price: z.coerce.number().min(1),
    })
  ),
});

export const UpdatePricesFormSchema = z.object({
  prices: z.array(
    z.object({
      requisitionItemId: z.string(),
      price: z.coerce.number(),
    })
  ),
});

export const UpdateRequisitionFormSchema = z.object({
  area: z.optional(z.string()),
  user: z.optional(z.string()),
  dateToMeet: z.optional(z.coerce.date()),
});

export const UpdateStatusRequisitionFormSchema = z.object({
  status: z.string(),
});

export const AddRequisitionItemsFormSchema = z.object({
  items: z.array(
    z.object({
      quantity: z.coerce.number(),
      product: z.string(),
      unit: z.string(),
      price: z.coerce.number().min(1),
    })
  ),
});

export const DeleteRequisitionItemsFormSchema = z.object({
  items: z.array(z.string()),
});

export type RequisitionFormValues = z.infer<typeof RequisitionFormSchema>;
export type UpdatePricesFormValues = z.infer<typeof UpdatePricesFormSchema>;
export type AddRequisitionItemsFormValues = z.infer<
  typeof AddRequisitionItemsFormSchema
>;
export type DeleteRequisitionItemsFormValues = z.infer<
  typeof DeleteRequisitionItemsFormSchema
>;
export type UpdateRequisitionFormValues = z.infer<
  typeof UpdateRequisitionFormSchema
>;
export type UpdateStatusRequisitionFormValues = z.infer<
  typeof UpdateStatusRequisitionFormSchema
>;
