import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'active' | 'completed';

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => onFilterChange('all')}
        className={cn(
          'filter-tab',
          activeFilter === 'all' ? 'filter-tab-active' : 'filter-tab-inactive'
        )}
      >
        All
      </Button>
      <Button
        onClick={() => onFilterChange('active')}
        className={cn(
          'filter-tab',
          activeFilter === 'active' ? 'filter-tab-active' : 'filter-tab-inactive'
        )}
      >
        Active
      </Button>
      <Button
        onClick={() => onFilterChange('completed')}
        className={cn(
          'filter-tab',
          activeFilter === 'completed' ? 'filter-tab-active' : 'filter-tab-inactive'
        )}
      >
        Completed
      </Button>
    </div>
  );
};

export default FilterTabs;
