import { defineStore } from 'pinia';
import type { ContactFormData } from '@/types/contact';

/**
 * お問い合わせフォームストア
 */
export const useContactFormStore = defineStore('contactForm', {
    state: () => ({
        formData: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    }),
    actions: {
        setFormData(data: ContactFormData) {
            this.formData = data;
        },
    },
});
