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
    return (
      <div
        className={`${wrapperClassName} flex h-full w-full items-center justify-center bg-muted text-center text-muted-foreground text-xs`}
      >
        Sem Imagem
      </div>
    );
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
