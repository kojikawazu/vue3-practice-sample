<script setup lang="ts">
// プロパティ
defineProps<{
    isModalOpen: boolean;
}>();

// イベント
const emit = defineEmits(['close', 'submit']);

// モーダルを閉じる
const closeModal = () => emit('close');
// 送信ハンドラ
const handleSubmit = () => emit('submit');
</script>

/** * モーダル */
<template>
    <Teleport to="body">
        <div v-if="isModalOpen" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1e293b] p-6 rounded-xl max-w-sm w-full mx-4">
                <h3 className="text-xl font-bold text-white mb-4">確認</h3>
                <p className="text-[#94a3b8] mb-6">この内容で送信してもよろしいですか？</p>
                <div className="flex space-x-4">
                    <button
                        @click="closeModal"
                        className="w-1/2 px-4 py-2 bg-[#334155] text-white rounded-lg hover:bg-[#475569] transition-colors"
                    >
                        キャンセル
                    </button>
                    <button
                        @click="handleSubmit"
                        className="w-1/2 px-4 py-2 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                        送信する
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>
