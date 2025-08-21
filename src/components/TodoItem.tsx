import { useState } from 'react';
import { format } from 'date-fns';
import { Check, Clock, Edit, Trash } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useTodos } from '@/context/TodoContext';
import { Todo } from '@/types';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { updateTodo, deleteTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggleComplete = () => {
    updateTodo(todo.id, { completed: !todo.completed });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      updateTodo(todo.id, { text: editText.trim() });
    }
    setIsEditing(!isEditing);
  };

  const getPriorityClass = () => {
    switch (todo.priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return 'priority-medium';
    }
  };

  const formattedDueDate = todo.dueDate ? format(new Date(todo.dueDate), 'MMM d, yyyy') : '';

  return (
    <div className={cn(
      'todo-card group transition-all',
      todo.completed && 'opacity-70'
    )}>
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleToggleComplete}
          className="task-checkbox"
        />
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full p-1 border rounded"
              autoFocus
            />
          ) : (
            <>
              <h3 className={cn(
                'task-title group-hover:text-primary transition-colors',
                todo.completed && 'line-through text-muted-foreground'
              )}>
                {todo.text}
              </h3>
              <p className="task-date flex items-center gap-1">
                <Clock className="h-3 w-3" /> Due: {formattedDueDate}
              </p>
            </>
          )}
        </div>
        <span className={getPriorityClass()}>{todo.priority}</span>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleEdit}
            className="h-8 w-8 opacity-50 hover:opacity-100"
          >
            {isEditing ? <Check className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            className="h-8 w-8 text-accent opacity-50 hover:opacity-100"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
