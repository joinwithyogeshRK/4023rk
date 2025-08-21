import { ClipboardList } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="empty-state">
      <ClipboardList className="h-12 w-12 text-muted-foreground/50" />
      <h3 className="mt-2 text-lg font-medium">No tasks yet</h3>
      <p>Add your first task to get started</p>
    </div>
  );
};

export default EmptyState;
