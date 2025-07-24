import Image from 'next/image';
import type { ProductImageType } from '@/types';

export function ProductImage({
  imageUrl,
  altText,
  wrapperClassName,
  imageClassName,
  imageSizes,
}: ProductImageType) {
  if (!imageUrl) {
    return null;
  }

  return (
    <div className={wrapperClassName}>
      <Image
        alt={altText}
        className={imageClassName}
        fill
        sizes={imageSizes}
        src={imageUrl}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
