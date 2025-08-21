import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTodos } from '@/context/TodoContext';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {
  const [taskText, setTaskText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTodo = {
        id: uuidv4(),
        text: taskText.trim(),
        completed: false,
        priority: 'medium',
        createdAt: new Date().toISOString(),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Default due date: 1 week
      };
      addTodo(newTodo);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="todo-input"
      />
      <Button type="submit" className="btn-primary">
        <Plus className="h-5 w-5 mr-1" />
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
