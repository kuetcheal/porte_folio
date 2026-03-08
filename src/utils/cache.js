export const getCache = (key, ttl = 5 * 60 * 1000) => {
  const cached = localStorage.getItem(key);

  if (!cached) return null;

  try {
    const parsed = JSON.parse(cached);
    const now = Date.now();

    if (now - parsed.timestamp > ttl) {
      localStorage.removeItem(key);
      return null;
    }

    return parsed.data;
  } catch (error) {
    localStorage.removeItem(key);
    return null;
  }
};

export const setCache = (key, data) => {
  const payload = {
    data,
    timestamp: Date.now(),
  };

  localStorage.setItem(key, JSON.stringify(payload));
};

export const clearCache = (key) => {
  localStorage.removeItem(key);
};