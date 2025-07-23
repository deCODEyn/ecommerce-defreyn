import Image from 'next/image';
import type { ProductImageType } from '@/types';

export function ProductImage({
  imageUrl,
  altText,
  className,
}: ProductImageType) {
  if (!imageUrl) {
    return null;
  }

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-180">
      <Image
        alt={altText}
        className={`object-cover transition-opacity duration-300 ${className || ''}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        src={imageUrl}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
