import { defineStore } from "pinia";
import { getProjects } from "../api/endpoints";
import { getCache, setCache, clearCache } from "../utils/cache";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProjects(forceRefresh = false) {
      const cacheKey = "projects_cache";
      const cachedData = getCache(cacheKey, 10 * 60 * 1000);

      if (!forceRefresh && cachedData) {
        this.projects = cachedData;
        return cachedData;
      }

      this.loading = true;
      this.error = null;

      try {
        const data = await getProjects();
        this.projects = data;
        setCache(cacheKey, data);
        return data;
      } catch (error) {
        this.error = error.response?.data?.message || error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    clearProjectsCache() {
      clearCache("projects_cache");
    },
  },
});