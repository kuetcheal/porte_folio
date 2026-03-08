import { defineStore } from "pinia";
import { getBlogs, getBlogById } from "../api/endpoints";
import { getCache, setCache, clearCache } from "../utils/cache";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogs: [],
    blogDetails: {},
    loading: false,
    error: null,
  }),

  actions: {
    async fetchBlogs(forceRefresh = false) {
      const cacheKey = "blogs_cache";
      const cachedData = getCache(cacheKey, 10 * 60 * 1000);

      if (!forceRefresh && cachedData) {
        this.blogs = cachedData;
        return cachedData;
      }

      this.loading = true;
      this.error = null;

      try {
        const data = await getBlogs();
        this.blogs = data;
        setCache(cacheKey, data);
        return data;
      } catch (error) {
        this.error = error.response?.data?.message || error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchBlogById(id, forceRefresh = false) {
      const cacheKey = `blog_${id}`;
      const cachedData = getCache(cacheKey, 10 * 60 * 1000);

      if (!forceRefresh && cachedData) {
        this.blogDetails[id] = cachedData;
        return cachedData;
      }

      this.loading = true;
      this.error = null;

      try {
        const data = await getBlogById(id);
        this.blogDetails[id] = data;
        setCache(cacheKey, data);
        return data;
      } catch (error) {
        this.error = error.response?.data?.message || error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    clearBlogsCache() {
      clearCache("blogs_cache");
    },
  },
});