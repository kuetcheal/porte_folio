import { defineStore } from "pinia";
import { getServices } from "../api/endpoints";
import { getCache, setCache, clearCache } from "../utils/cache";

export const useServicesStore = defineStore("services", {
  state: () => ({
    services: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchServices(forceRefresh = false) {
      const cacheKey = "services_cache";
      const cachedData = getCache(cacheKey, 10 * 60 * 1000);

      if (!forceRefresh && cachedData) {
        this.services = cachedData;
        return cachedData;
      }

      this.loading = true;
      this.error = null;

      try {
        const data = await getServices();
        this.services = data;
        setCache(cacheKey, data);
        return data;
      } catch (error) {
        this.error = error.response?.data?.message || error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    clearServicesCache() {
      clearCache("services_cache");
    },
  },
});