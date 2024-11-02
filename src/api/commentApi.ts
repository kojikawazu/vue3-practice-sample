import axios from 'axios';
import type { Comment } from '@/types/comment';

const JSON_PLACE_URL = import.meta.env.VITE_JSON_PLACE_URL;

/**
 * コメントを取得する
 * @returns コメントの配列
 */
export const fetchComments = async (limit: number = 10): Promise<Comment[]> => {
    try {
        const response = await axios.get<Comment[]>(`${JSON_PLACE_URL}/comments`);
        if (response.status !== 200) {
            throw new Error('データの取得に失敗しました');
        }
        return response.data.slice(0, limit);
    } catch (error) {
        console.error('コメントの取得に失敗しました:', error);
        throw error;
    }
};
