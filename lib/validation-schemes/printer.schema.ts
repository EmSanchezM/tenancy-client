import * as z from "zod";

export const PrinterFormSchema = z.object({
  name: z.string().min(2),
  model: z.string().min(2),
  serialNumber: z.string().min(2),
  ipAddress: z.string().min(2),
  tcpPort: z.coerce.number().min(0),
  macAddress: z.string().min(2),
  hostName: z.string().min(2),
  subnetMask: z.string().min(2),
  gateway: z.string().optional(),
  area: z.string(),
});

export type PrinterFormValues = z.infer<typeof PrinterFormSchema>;
