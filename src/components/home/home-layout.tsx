import { CallToActionSection, HeroSection } from '@/components/home';
import type { HomeLayoutType } from '@/types';

export function HomeLayout({ bannerImageUrl, children }: HomeLayoutType) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection imageUrl={bannerImageUrl} />
      {children}
      <CallToActionSection />
    </main>
  );
}
