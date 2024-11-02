import { ref } from 'vue';
import type { Comment } from '@/types/comment';
import { fetchComments } from '@/api/commentApi';

/**
 * コメントコンポーザブル
 */
export function useComments() {
    const comments = ref<Comment[]>([]);
    const isLoading = ref(true);
    const error = ref<string | null>(null);

    const loadComments = async () => {
        try {
            comments.value = await fetchComments();
        } catch (e) {
            console.error(e);
            error.value = '読み込みに失敗しました';
        } finally {
            isLoading.value = false;
        }
    };

    return { comments, isLoading, error, loadComments };
}