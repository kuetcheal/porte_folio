import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8081/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur pour les requêtes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // pas de token sur le formulaire de contact
    const isContactRoute = config.url?.startsWith("/contacts");

    if (token && !isContactRoute) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepteur pour les réponses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erreur API :", error?.response || error.message);
    return Promise.reject(error);
  }
);

export default api;