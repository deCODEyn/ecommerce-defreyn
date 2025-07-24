import type { ComponentPropsWithoutRef } from 'react';
import type { Button } from '@/components';

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
