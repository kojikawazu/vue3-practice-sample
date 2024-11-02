<script setup lang="ts">
import { ref } from 'vue';
import { useTodos } from '@/composables/useTodos';
const { todos, inputValue, addTodo, toggleTodo, editTodo, deleteTodo } = useTodos();
const editingId = ref<number | null>(null);
const editText = ref('');

const startEditing = (todo: { id: number, text: string }) => {
  editingId.value = todo.id;
  editText.value = todo.text;
};

const saveEdit = (id: number) => {
  if (editText.value.trim()) {
    editTodo(id, editText.value);
  }
  editingId.value = null;
};
</script>

<template>
    <main className="flex-grow py-12 px-4">
        <div className="max-w-md mx-auto bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-[#334155]">
            <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6 font-roboto">TODOリスト</h2>

                <div className="flex gap-3 mb-6">
                    <input
                        v-model="inputValue"
                        type="text"
                        name="todo-input"
                        className="flex-1 px-4 py-3 bg-[#334155] border-none text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-[#94a3b8]"
                        placeholder="新しいタスクを入力"
                    />
                    <button
                        @click="addTodo"
                        className="px-6 py-3 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white rounded-xl hover:opacity-90 transition-opacity font-medium"
                    >
                        追加
                    </button>
                </div>

                <ul className="space-y-3">
                    <li
                        v-for="todo in todos"
                        :key="todo.id"
                        className="flex items-center justify-between p-4 rounded-2xl bg-[#334155] hover:bg-[#475569] transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                :checked="todo.completed"
                                @change="() => toggleTodo(todo.id)"
                                className="w-5 h-5 text-[#60a5fa] bg-[#1e293b] rounded-md focus:ring-[#60a5fa]"
                            />
                            <span
                                v-if="editingId !== todo.id"
                                :class="{
                                    'line-through text-[#94a3b8]': todo.completed,
                                    'text-white': !todo.completed,
                                }"
                            >
                                {{ todo.text }}
                            </span>
                            <input
                                v-else
                                v-model="editText"
                                @blur="saveEdit(todo.id)"
                                @keyup.enter="saveEdit(todo.id)"
                                @keyup.esc="editingId = null"
                                className="bg-[#1e293b] text-white px-2 py-1 rounded focus:outline-none focus:ring-1 focus:ring-[#60a5fa]"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                @click="() => startEditing(todo)"
                                className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors"
                            >
                                <font-awesome-icon icon="pen" />
                            </button>
                            <button
                                @click="() => deleteTodo(todo.id)"
                                className="text-[#94a3b8] hover:text-[#ef4444] transition-colors"
                            >
                                <font-awesome-icon icon="trash" />
                            </button>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>
