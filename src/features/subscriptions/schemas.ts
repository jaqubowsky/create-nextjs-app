import { z } from "zod";

export const checkoutSuccessSchema = z.object({
  session_id: z.string().min(1),
});

export type CheckoutSuccessData = z.infer<typeof checkoutSuccessSchema>;
