import { Moon, Sun, User } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="app-header">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="app-logo">SimpleTodo</div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <div className="user-avatar">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
