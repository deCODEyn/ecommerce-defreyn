import type { ComponentPropsWithoutRef } from 'react';
import type { Button } from '@/components/ui';

export interface ButtonLinkType
  extends ComponentPropsWithoutRef<typeof Button> {
  ariaLabel: string;
  className?: string;
  href: string;
  label: string;
}

export type ImageUrlType = {
  imageUrl: string;
};

export type ThemeToggleType = {
  className?: string;
};
