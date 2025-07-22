import type { CarouselApi } from '@/components';

export type CarouselPaginationType = {
  api: CarouselApi | undefined;
  count: number;
  currentSlide: number;
};
