import z from 'zod';

export const ProductAddSchema = z.object({
  id: z.string(),
  name: z.string(),
  images: z.array(z.string()).min(1).optional(),
  default_price: z.object(
    {
      unit_amount: z
        .number()
        .min(0, { message: 'Preço unitário deve ser um número positivo' }),
    },
    { message: 'Informações de preço são necessárias' }
  ),
});
