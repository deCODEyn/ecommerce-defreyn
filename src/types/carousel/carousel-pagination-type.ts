import type { CarouselApi } from '@/components/ui/carousel';

export type CarouselPaginationProps = {
  api: CarouselApi | undefined;
  count: number;
  currentSlide: number;
};
