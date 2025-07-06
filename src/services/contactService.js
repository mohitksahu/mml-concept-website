import axios from 'axios';

// With proxy configured in package.json, we can use relative URL in development
const API_URL = '/api/contacts';

// Configure axios with better defaults
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.timeout = 10000; // 10 second timeout

// Log on successful backend connection
console.log('📡 Contact service initialized, ready to connect to API');

/**
 * Store contact form data locally when backend is unavailable
 * @param {Object} formData - Contact form data to store
 */
const storeFormDataLocally = (formData) => {
  try {
    // Get existing stored contacts or initialize empty array
    const storedContacts = JSON.parse(localStorage.getItem('offlineContacts') || '[]');
    
    // Add timestamp and unique ID to the contact
    const enrichedData = {
      ...formData,
      id: `offline-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      createdAt: new Date().toISOString(),
      status: 'offline'
    };
    
    // Add to stored contacts
    storedContacts.push(enrichedData);
    
    // Store back in localStorage (limit to most recent 50 entries to prevent storage issues)
    localStorage.setItem('offlineContacts', JSON.stringify(storedContacts.slice(-50)));
    
    console.log('📱 Contact form data stored locally (offline mode)');
    return { success: true, message: 'Form saved locally', offline: true };
  } catch (error) {
    console.error('Failed to store contact form data locally:', error);
    throw { success: false, error: 'Failed to save contact data locally' };
  }
};

/**
 * Submit contact form data to the server or store locally if offline
 * @param {Object} formData - Contact form data
 * @param {boolean} offlineMode - Force offline mode (for testing)
 * @returns {Promise} - Promise with the server response or local storage result
 */
export const submitContactForm = async (formData, offlineMode = false) => {
  try {
    console.log('🔄 Submitting contact form data...');
    
    // Create a smaller version of the data for logging (without sensitive info)
    const logData = {
      fields: Object.keys(formData),
      hasName: !!formData.name,
      hasEmail: !!formData.email,
      hasPhone: !!formData.phone,
      hasMessage: !!formData.message?.length,
      messageLength: formData.message?.length || 0
    };
    
    console.log('📤 Form data summary:', logData);
    
    // Check if we're in forced offline mode or should try server submission
    if (offlineMode) {
      console.log('🔌 Operating in offline mode, storing locally');
      return storeFormDataLocally(formData);
    }
    
    try {
      // Attempt server submission with a shorter timeout
      const response = await axios.post(API_URL, formData, { timeout: 5000 });
      console.log('✅ Form submission to server successful!', response.status);
      return response.data;
    } catch (error) {
      // If server error occurs, fall back to local storage
      console.warn('⚠️ Server submission failed, falling back to offline mode');
      return storeFormDataLocally(formData);
    }
  } catch (error) {
    const statusCode = error.response?.status;
    const errorMessage = error.response?.data?.error || error.message;
    
    console.error(`❌ Form submission error (${statusCode || 'error'}):`);
    console.error('Error details:', errorMessage);
    
    throw error.response?.data || { success: false, error: 'Error submitting form' };
  }
};
