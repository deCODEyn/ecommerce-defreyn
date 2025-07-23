import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useCartStore } from '@/hooks';

export function CartIconButton({ className }: { className?: string }) {
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link
      aria-label={`Ver carrinho de compras com ${cartCount} itens`}
      className={
        className ||
        'relative text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
      }
      href="/checkout"
    >
      <ShoppingCartIcon className="h-6 w-6" />
      {cartCount > 0 && (
        <span className="-top-2 -right-2 absolute flex h-5 w-5 animate-bounce-once items-center justify-center rounded-full bg-destructive font-bold text-destructive-foreground text-xs">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
