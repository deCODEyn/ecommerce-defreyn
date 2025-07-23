import { NavbarLink } from '@/components';
import { mainNavLinks, type NavLinkItemType } from '@/lib/navigation';

export function NavbarDesktopLinks() {
  const desktopLinks: NavLinkItemType[] = mainNavLinks.filter(
    (link) => link.desktopOnly || !(link.mobileOnly || link.desktopOnly)
  );

  return (
    <div className="hidden space-x-6 md:flex">
      {desktopLinks.map((link) => (
        <NavbarLink href={link.href} key={link.href} label={link.label} />
      ))}
    </div>
  );
}
