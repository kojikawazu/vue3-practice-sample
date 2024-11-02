<script setup lang="ts">
import { AppConfig } from '@/config/constants';
</script>

<template>
    <footer className="bg-[#1e293b] border-t border-[#334155] text-[#94a3b8] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <p className="font-roboto">© {{ AppConfig.name }} {{ AppConfig.year }}</p>
            <div className="mt-3 flex justify-center space-x-6">
                <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="text-lg" />
                </a>
                <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">
                    <font-awesome-icon :icon="['fab', 'github']" class="text-lg" />
                </a>
            </div>
        </div>
    </footer>
</template>
