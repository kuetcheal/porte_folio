import { defineStore } from "pinia";
import { sendContact } from "../api/endpoints";

export const useContactStore = defineStore("contact", {
  state: () => ({
    loading: false,
    success: false,
    error: null,
  }),

  actions: {
    async submitContact(formData) {
      this.loading = true;
      this.success = false;
      this.error = null;

      try {
        const response = await sendContact(formData);
        this.success = true;
        return response;
      } catch (error) {
        this.error =
          error.response?.data?.message ||
          error.response?.data?.error ||
          "Erreur lors de l'envoi du message";

        throw error;
      } finally {
        this.loading = false;
      }
    },

    resetContactState() {
      this.loading = false;
      this.success = false;
      this.error = null;
    },
  },
});