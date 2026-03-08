import { defineStore } from "pinia";
import { getParcours, getParcoursById } from "../api/endpoints";
import { getCache, setCache, clearCache } from "../utils/cache";

export const useParcoursStore = defineStore("parcours", {
  state: () => ({
    parcours: [],
    parcoursDetails: {},
    loading: false,
    error: null,
  }),

  actions: {
    async fetchParcours(forceRefresh = false) {
      const cacheKey = "parcours_cache";
      const cachedData = getCache(cacheKey, 10 * 60 * 1000);

      if (!forceRefresh && cachedData) {
        this.parcours = cachedData;
        return cachedData;
      }

      this.loading = true;
      this.error = null;

      try {
        const data = await getParcours();
        this.parcours = data;
        setCache(cacheKey, data);
        return data;
      } catch (error) {
        this.error = error.response?.data?.message || error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchParcoursById(id, forceRefresh = false) {
      const cacheKey = `parcours_${id}`;
      const cachedData = getCache(cacheKey, 10 * 60 * 1000);

      if (!forceRefresh && cachedData) {
        this.parcoursDetails[id] = cachedData;
        return cachedData;
      }

      this.loading = true;
      this.error = null;

      try {
        const data = await getParcoursById(id);
        this.parcoursDetails[id] = data;
        setCache(cacheKey, data);
        return data;
      } catch (error) {
        this.error = error.response?.data?.message || error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    clearParcoursCache() {
      clearCache("parcours_cache");
    },

    clearParcoursByIdCache(id) {
      clearCache(`parcours_${id}`);
    },
  },
});