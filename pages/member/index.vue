<script setup>
    const profile = useState('userProfile')
</script>
<template>
    <PublicHeader />
    <div class="min-h-screen bg-[#fafafa] text-gray-700">
        <div class="relative h-48 bg-gradient-to-r from-[#644D5E] to-[#154065] overflow-hidden">
            <div class="absolute inset-0 opacity-30">
                <div class="animation absolute top-4 left-8 w-3 h-3 bg-white/40 rounded-full"></div>
                <div class="animation absolute top-12 right-16 w-2 h-2 bg-white/30 rounded-full"></div>
                <div class="animation absolute bottom-8 left-1/4 w-4 h-4 bg-white/20 rounded-full"></div>
                <div class="animation absolute top-8 left-1/3 w-2 h-2 bg-white/40 rounded-full"></div>
                <div class="animation absolute bottom-12 right-1/3 w-3 h-3 bg-white/30 rounded-full"></div>
            </div>
        </div>
        <div class="relative -mt-16 px-6">
            <div class="flex flex-col items-center mb-12">
                <div class="relative m-4">
                    <div class="flex items-center justify-center h-24 w-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-[#f6f8f9]">
                        <img v-if="profile.picture" :src="profile.picture" :alt="profile.name" />
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="text-[#E2E8F0]" width="4rem" height="4em" viewBox="0 0 24 24">
                            <path d="M8.5 13.498l2.5 3.006l3.5-4.506l4.5 6H5m16 1v-14a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" fill="currentColor" />
                        </svg>
                    </div>
                    <button class="absolute -bottom-1 -right-1 w-8 h-8 bg-[#707070] rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-[#525252] transition-colors">
                        <svg width="16" height="16" class="text-[#FFFFFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                        </svg>
                    </button>
                </div>
                <h1 class="text-2xl font-medium text-[#525252] mb-2">嗨 {{ profile.name }} 你好！</h1>
                <p class="text-[#98A0AE] text-sm">LINE ID {{ profile.sub }}</p>

            </div>
            <div class="max-w-md mx-auto space-y-8">
                <div class="space-y-2">
                    <label class="text-[#98A0AE] text-base font-medium">姓名</label>
                    <div class="border-b border-[#CCCECF] pb-2">
                    <input
                        v-model="profile.name"
                        type="text"
                        class="w-full border-0 bg-transparent p-0 text-[#525252] placeholder:text-[#98A0AE] focus:outline-none"
                    />
                    </div>
                </div>
                <div class="space-y-2">
                    <label class="text-[#98A0AE] text-base font-medium">信箱</label>
                    <div class="border-b border-[#CCCECF] pb-2">
                    <input
                        v-model="profile.email"
                        type="email"
                        class="w-full border-0 bg-transparent p-0 text-[#525252] placeholder:text-[#98A0AE] focus:outline-none"
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    input:focus {
        outline: none;
    }
    .animation {
        animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
</style>