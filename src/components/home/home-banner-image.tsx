import Image from 'next/image';
import type { ImageUrlType } from '@/types';

export function HomeBannerImage({
  imageUrl,
  altText = 'Imagem de destaque de um de nossos produtos exclusivos.',
}: ImageUrlType) {
  if (!imageUrl) {
    return null;
  }

  return (
    <div className="relative h-96 w-full max-w-sm overflow-hidden rounded-lg md:max-w-md lg:h-[450px]">
      <Image
        alt={altText}
        className="border-2 border-muted object-cover shadow-xl"
        fill
        priority
        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
        src={imageUrl}
      />
    </div>
  );
}
