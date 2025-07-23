import { NavbarLink } from '@/components';
import { mainNavLinks, type NavLinkItemType } from '@/lib/navigation';
import type { MobileMenuLinksInterface } from '@/types';

export function MobileMenuLinks({ onLinkClick }: MobileMenuLinksInterface) {
  const mobileLinks: NavLinkItemType[] = mainNavLinks.filter(
    (link) => link.mobileOnly || !(link.mobileOnly || link.desktopOnly)
  );

  return (
    <ul className="flex flex-col space-y-2 p-4">
      {mobileLinks.map((link) => (
        <li key={link.href}>
          <NavbarLink
            href={link.href}
            label={link.label}
            onClick={onLinkClick}
          />
        </li>
      ))}
    </ul>
  );
}
