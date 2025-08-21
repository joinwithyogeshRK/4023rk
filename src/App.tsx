import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import { TodoProvider } from '@/context/TodoContext';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TodoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Toaster />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
