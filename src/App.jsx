
import { useEffect, useState } from 'react';
import AppRoutes from './routes';
import { checkServerHealth } from './services/serverService';

function App() {
  const [serverStatus, setServerStatus] = useState({
    checked: false,
    connected: false
  });
  
  // Check server health on component mount
  useEffect(() => {
    // Add a small delay to ensure UI is rendered
    const timer = setTimeout(() => {
      const checkHealth = async () => {
        try {
          const connected = await checkServerHealth();
          setServerStatus({ checked: true, connected });
        } catch (error) {
          console.error('Server health check failed:', error);
          setServerStatus({ checked: true, connected: false });
        }
      };
      
      checkHealth();
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Render the application routes
  return (
    <AppRoutes />
  );
}

export default App;