<script setup lang="ts">
import { onMounted } from 'vue';
import { useComments } from '@/composables/useComments';
const { comments, isLoading, error, loadComments } = useComments();

onMounted(() => {
    loadComments();
});
</script>

<template>
    <main className="flex-grow py-12 px-4">
        <div className="max-w-md mx-auto bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-[#334155]">
            <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6 font-roboto">コメント一覧</h2>

                <div v-if="isLoading" class="text-center">読み込み中...</div>

                <div v-else-if="error" class="text-red-500">
                    {{ error }}
                </div>

                <div v-else class="space-y-4">
                    <div
                        v-for="comment in comments"
                        :key="comment.id"
                        class="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-lg hover:border-gray-600 transition-colors"
                    >
                        <div class="flex flex-col gap-3">
                            <h3 class="font-bold text-white">name: {{ comment.name }}</h3>
                            <p class="text-gray-300">email: {{ comment.email }}</p>
                            <p class="mt-2 text-gray-200">body: {{ comment.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
