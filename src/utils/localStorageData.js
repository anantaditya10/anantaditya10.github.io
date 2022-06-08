export default function localStorageData(action, key, value) {
  if (action === 'GET') {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  } else if (action === 'SET') {
    try {
      // Set from local storage by key
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return [];
    }
  }

  return [];
}
