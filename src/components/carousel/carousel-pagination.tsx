import { useCallback } from 'react';
import type { CarouselPaginationType } from '@/types';

export function CarouselPagination({
  api,
  count,
  currentSlide,
}: CarouselPaginationType) {
  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  return (
    <div className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 flex space-x-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          aria-label={`Ir para o slide ${i + 1}`}
          className={`h-2 w-2 rounded-full transition-colors duration-300 ${i === currentSlide ? 'bg-primary' : 'bg-muted-foreground opacity-60'}`}
          key={`indicator-${i.toString()}`}
          onClick={() => scrollTo(i)}
          type="button"
        />
      ))}
    </div>
  );
}
