<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import PageHeader from './components/layout/PageHeader.vue';
import PageFooter from './components/layout/PageFooter.vue';
</script>

<template>
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
        <PageHeader />
        <RouterView />
        <PageFooter />
    </div>
</template>

<style scoped></style>
