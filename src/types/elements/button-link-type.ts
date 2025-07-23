import type { ComponentPropsWithoutRef } from 'react';
import type { Button } from '@/components';

export interface ButtonLinkType
  extends ComponentPropsWithoutRef<typeof Button> {
  href: string;
  label: string;
  ariaLabel: string;
  className?: string;
}
