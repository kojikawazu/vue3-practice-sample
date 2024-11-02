<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useContactFormStore } from '@/stores/contactForm'
import { useModal } from '@/composables/useModal';
import ContactModal from '@/components/contact/common/ContactModal.vue';

// ルーター
const router = useRouter();
// ストア
const contactFormStore = useContactFormStore();
// フォームデータ
const formData = contactFormStore.formData;
// モーダル
const { isModalOpen, openModal, closeModal } = useModal();

// フォームデータが未入力の場合はリダイレクト
if (!formData || formData.name.length === 0) {
    router.push('/contact');
}

/**
 * 送信ハンドラ
 */
const handleSubmit = () => {
    closeModal();
    router.push('/contact/complete');
};
</script>

/** * お問い合わせ確認ページ */
<template>
    <main className="flex-grow py-12 px-4">
        <div className="max-w-md mx-auto bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-[#334155]">
            <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6 font-roboto">お問い合わせ内容の確認</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-[#94a3b8]">お名前</p>
                        <p className="font-medium text-white">{{ formData.name || "未入力" }}</p>
                    </div>
                    <div>
                        <p className="text-sm text-[#94a3b8]">メールアドレス</p>
                        <p className="font-medium text-white">{{ formData.email || "未入力" }}</p>
                    </div>
                    <div>
                        <p className="text-sm text-[#94a3b8]">件名</p>
                        <p className="font-medium text-white">{{ formData.subject || "未入力" }}</p>
                    </div>
                    <div>
                        <p className="text-sm text-[#94a3b8]">メッセージ</p>
                        <p className="font-medium text-white whitespace-pre-wrap">{{ formData.message || "未入力" }}</p>
                    </div>
                    <div className="flex space-x-4 mt-6">
                        <button
                            @click="router.back()"
                            className="w-1/2 px-4 py-3 bg-[#334155] text-white rounded-xl hover:bg-[#475569] transition-colors"
                        >
                            修正する
                        </button>
                        <button
                            @click="openModal"
                            className="w-1/2 px-4 py-3 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white rounded-xl hover:opacity-90 transition-opacity"
                        >
                            送信する
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- 確認モーダル -->
    <ContactModal 
        :isModalOpen="isModalOpen" 
        @close="closeModal" 
        @submit="handleSubmit"
    />
</template>
