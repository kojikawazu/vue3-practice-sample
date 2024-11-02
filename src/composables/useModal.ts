import { ref } from 'vue';

/**
 * モーダルコンポーザブル
 */
export function useModal() {
    // モーダルの開閉
    const isModalOpen = ref(false);

    // モーダルを開く
    const openModal = () => {
        isModalOpen.value = true;
    };

    // モーダルを閉じる
    const closeModal = () => {
        isModalOpen.value = false;
    };
    
    return { isModalOpen, openModal, closeModal };
}
