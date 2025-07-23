import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components';
import { useTheme } from '@/hooks';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <Button
      aria-label={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      className={
        className ||
        'text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
      }
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="icon"
      variant="ghost"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </Button>
  );
}
