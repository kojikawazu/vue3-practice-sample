import { ref } from 'vue';
import type { Todo } from '@/types/todo';

/**
 * TODOコンポーザブル
 */
export function useTodos() {
    const todos = ref<Todo[]>([]);
    const inputValue = ref('');

    const addTodo = () => {
        if (inputValue.value.trim()) {
            todos.value.push({
                id: Date.now(),
                text: inputValue.value.trim(),
                completed: false,
            });
            inputValue.value = '';
        }
    };

    const toggleTodo = (id: number) => {
        const todo = todos.value.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    };

    const editTodo = (id: number, newText: string) => {
        todos.value = todos.value.map(todo => (todo.id === id ? { ...todo, text: newText } : todo));
    };

    const deleteTodo = (id: number) => {
        todos.value = todos.value.filter(todo => todo.id !== id);
    };

    return {
        todos,
        inputValue,
        addTodo,
        toggleTodo,
        editTodo,
        deleteTodo,
    };
}
