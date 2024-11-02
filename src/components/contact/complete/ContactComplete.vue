<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

/** * お問い合わせ完了ページ */
<template>
    <main className="flex-grow py-12 px-4">
        <div className="max-w-md mx-auto bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-[#334155]">
            <div className="p-8 text-center">
                <div className="text-[#60a5fa] text-6xl mb-4">
                    <i className="fas fa-check-circle"></i>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 font-roboto">送信完了</h2>
                <p className="text-[#94a3b8] mb-6">
                    お問い合わせありがとうございます。
                    <br />
                    内容を確認次第、担当者よりご連絡させていただきます。
                </p>
                <button
                    @click="router.push('/')"
                    className="px-6 py-3 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white rounded-xl hover:opacity-90 transition-opacity font-medium"
                >
                    トップページへ戻る
                </button>
            </div>
        </div>
    </main>
</template>
