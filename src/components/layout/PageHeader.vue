<script setup lang="ts">
import { AppConfig, CommonConstants } from '@/config/constants';
</script>

<template>
    <header className="bg-[#1e293b] text-white py-6 px-6 border-b border-[#334155]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1
                className="text-3xl font-bold font-roboto bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-transparent bg-clip-text"
            >
                ✨ {{ AppConfig.name }}
            </h1>
            <nav>
                <ul className="flex space-x-8">
                    <li>
                        <a :href="CommonConstants.URL.HOME" className="text-[#94a3b8] hover:text-white transition-colors">
                            {{ CommonConstants.PAGE.HOME }}
                        </a>
                    </li>
                    <li>
                        <a :href="CommonConstants.URL.TODO" className="text-[#94a3b8] hover:text-white transition-colors">
                            {{ CommonConstants.PAGE.TODO }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
