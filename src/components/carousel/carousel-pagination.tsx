import { useCallback } from 'react';
import type { CarouselPaginationType } from '@/types';

export function CarouselPagination({
  api,
  count,
  currentSlide,
}: CarouselPaginationType) {
  const effectiveCount = Math.max(0, count);
  const effectiveCurrentSlide = Math.min(
    Math.max(0, currentSlide),
    effectiveCount > 0 ? effectiveCount - 1 : 0
  );

  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  if (effectiveCount === 0) {
    return null;
  }

  return (
    <div className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 flex space-x-2">
      {Array.from({ length: effectiveCount }).map((_, i) => (
        <button
          aria-label={`Ir para o slide ${i + 1}`}
          className={`h-2 w-2 rounded-full transition-colors duration-300 ${i === effectiveCurrentSlide ? 'bg-primary' : 'bg-muted-foreground opacity-60'}`}
          key={`indicator-${i.toString()}`}
          onClick={() => scrollTo(i)}
          type="button"
        />
      ))}
    </div>
  );
}
