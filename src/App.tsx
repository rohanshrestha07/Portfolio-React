import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoute from './Routes/AppRoute';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Function to handle cursor change
    const handleMouseEnter = () => {
      document.body.style.cursor = 'url(/src/assets/beecursorfinal1.png) 32 32, auto'; // Adjust hotspot if needed
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = 'default';
    };

    // Attach event listeners
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
      document.body.style.cursor = 'default'; // Reset cursor to default
    };
  }, []);

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
