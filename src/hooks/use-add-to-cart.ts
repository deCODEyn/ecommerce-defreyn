import { toast } from 'sonner';
import type Stripe from 'stripe';
import { useCartStore } from '@/hooks';
import { ProductAddSchema } from '@/schemas';
import { logError } from '@/utils/logger';

export function useAddToCart() {
  const { items, addItem, removeItem } = useCartStore();

  const addInitialProductToCart = (
    product: Stripe.Product,
    initialQuantity = 1
  ) => {
    const validationResult = ProductAddSchema.safeParse(product);

    if (!validationResult.success) {
      logError(
        'Erro de validação ao adicionar o produto:',
        validationResult.error
      );
      toast.error('Erro ao adicionar produto', {
        description:
          'Erro no servidor. Não foi possível adicionar o produto ao carrinho.',
      });
      return;
    }

    const validatedProduct = validationResult.data;
    const price = validatedProduct.default_price as Stripe.Price;

    const cartItem = items.find((item) => item.id === validatedProduct.id);
    const wasQuantityZero = !cartItem || cartItem.quantity === 0;

    addItem({
      id: validatedProduct.id,
      name: validatedProduct.name,
      price: price.unit_amount as number,
      imageUrl: validatedProduct.images?.[0] || null,
      quantity: initialQuantity,
    });

    if (wasQuantityZero) {
      toast.success('Produto adicionado!', {
        description: `${validatedProduct.name} foi adicionado ao seu carrinho.`,
      });
    }
  };

  const removeProductFromCart = (productId: string, productName: string) => {
    const existingItem = items.find((item) => item.id === productId);
    removeItem(productId);

    if (existingItem && existingItem.quantity === 1) {
      toast.info('Item removido do carrinho', {
        description: `${productName} foi removido do seu carrinho.`,
      });
    }
  };
  return { addInitialProductToCart, removeProductFromCart };
}
