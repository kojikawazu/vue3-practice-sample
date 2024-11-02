<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { ContactFormData } from '@/types/contact';
import { useContactFormStore } from '@/stores/contactForm';

// ルーター
const router = useRouter();
// ストア
const contactFormStore = useContactFormStore();

// フォームデータ
const formData = ref<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
});
if (contactFormStore.formData) {
    formData.value = contactFormStore.formData;
}

// 送信ハンドラ
const handleSubmit = (e: Event) => {
    e.preventDefault();
    contactFormStore.setFormData(formData.value);
    router.push('/contact/confirm');
};
</script>

/** * お問い合わせフォームページ */
<template>
    <main className="flex-grow py-12 px-4">
        <div className="max-w-md mx-auto bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-[#334155]">
            <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6 font-roboto">お問い合わせ</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-[#94a3b8] mb-2">お名前</label>
                        <input
                            v-model="formData.name"
                            type="text"
                            name="name"
                            className="w-full px-4 py-3 bg-[#334155] border-none text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-[#94a3b8]"
                            placeholder="山田 太郎"
                        />
                    </div>
                    <div>
                        <label className="block text-[#94a3b8] mb-2"> メールアドレス </label>
                        <input
                            v-model="formData.email"
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 bg-[#334155] border-none text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-[#94a3b8]"
                            placeholder="example@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-[#94a3b8] mb-2">件名</label>
                        <input
                            v-model="formData.subject"
                            type="text"
                            name="subject"
                            className="w-full px-4 py-3 bg-[#334155] border-none text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-[#94a3b8]"
                            placeholder="お問い合わせ内容の件名"
                        />
                    </div>
                    <div>
                        <label className="block text-[#94a3b8] mb-2">メッセージ</label>
                        <textarea
                            v-model="formData.message"
                            name="message"
                            rows="4"
                            className="w-full px-4 py-3 bg-[#334155] border-none text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-[#94a3b8]"
                            placeholder="お問い合わせ内容をご記入ください"
                        ></textarea>
                    </div>
                    <button
                        @click="handleSubmit"
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white rounded-xl hover:opacity-90 transition-opacity font-medium"
                    >
                        送信する
                    </button>
                </form>
            </div>
        </div>
    </main>
</template>
