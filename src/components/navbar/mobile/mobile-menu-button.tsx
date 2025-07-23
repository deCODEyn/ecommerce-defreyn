import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components';
import type { MobileMenuButtonInterface } from '@/types';

export function MobileMenuButton({
  onToggle,
  isOpen,
  className,
}: MobileMenuButtonInterface) {
  const Icon = isOpen ? XMarkIcon : Bars3Icon;
  return (
    <Button
      aria-label={isOpen ? 'Fechar menu mobile' : 'Abrir menu mobile'}
      className={
        className ||
        'text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden'
      }
      onClick={onToggle}
      variant="ghost"
    >
      <Icon className="h-6 w-6" />
    </Button>
  );
}
