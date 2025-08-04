<template>
    <header class="w-full bg-white py-3 px-6 flex justify-between items-center">
        <div class="flex items-center justify-center space-x-6 font-medium">
            <a href="/signup" class="flex items-center">
                <img
                    src="/public/logo.png"
                    alt="Sea Museum"
                    width=176
                    height=65
                    class="mr-2"
                />
            </a>
            <nav class="hidden md:flex items-center space-x-8 font-medium">
                <a href="/exhibition" class="text-[#525252] hover:text-[#2a68c8] transition-colors">
                    展區介紹
                </a>
                <a href="#" class="text-[#525252] hover:text-[#2a68c8] transition-colors">
                    海洋保育專區
                </a>
                <a href="#" class="text-[#525252] hover:text-[#2a68c8] transition-colors">
                    參觀資訊
                </a>
                <a href="#" class="text-[#525252] hover:text-[#2a68c8] transition-colors">
                    最新消息
                </a>
            </nav>
        </div>
        <div class="flex items-center">
            <svg class="text-[#525252]" xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5em" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
        </div>
    </header>
</template>