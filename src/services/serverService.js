import axios from 'axios';

/**
 * Check server health on application startup - called after assets are preloaded
 */
export const checkServerHealth = async () => {
  try {
    // Silent server health check
    
    // Add a small delay before checking server health to ensure UI is responsive
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const response = await axios.get('/api/health');
    
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error('❌ Failed to connect to backend server:', error.message);
    console.warn('⚠️ Application will function with limited features (frontend-only mode)');
    return false;
  }
};
