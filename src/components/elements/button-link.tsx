import Link from 'next/link';
import { Button } from '@/components/ui';
import type { ButtonLinkType } from '@/types';

export function ButtonLink({
  href,
  label,
  ariaLabel,
  variant,
  size,
  className,
  ...props
}: ButtonLinkType) {
  return (
    <Button
      asChild
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 shadow-md transition-all duration-300 hover:scale-105 ${className || ''}`}
      size={size}
      variant={variant}
      {...props}
    >
      <Link
        aria-label={ariaLabel}
        className="inline-flex items-center justify-center rounded-full px-6 py-3"
        href={href}
      >
        {label}
      </Link>
    </Button>
  );
}
