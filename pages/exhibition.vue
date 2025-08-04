<script setup>
    const { data, pending, error } = await useFetch('https://www.nmmba.gov.tw/OpenData.aspx?SN=BF6D6EB9CB6876BB')
</script>
<template>
<div class="p-4">
    <h1 class="font-bold mb-2">海生館展館消息</h1>
    <div v-if="pending">資料載入中⋯⋯🐢</div>
    <div v-else-if="error">發生錯誤：{{ error.message }}</div>
    <ul v-else>
        <li
        v-for="(item, index) in data"
        :key="index"
        class="border-b py-2"
        >
        {{ item.展出地點 }} - {{ item.特展名稱 }}
        </li>
    </ul>
</div>
</template>
