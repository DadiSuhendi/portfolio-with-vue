<script setup>
    const props = defineProps({
        title: String,
        description: String
    })
</script>

<template>
    <div class="flex gap-10 items-center">
        <div class="lg:w-14 w-11 h-[5px] bg-[#222222]"></div>
        <h1 class="font-bold lg:text-6xl md:text-5xl text-4xl">{{ props.title }}</h1>
    </div>
    <div class="mt-5 lg:ml-24 ml-[85px] lg:text-lg md:text-base text-sm font-medium text-justify text-[#222222]">
        <p>{{ props.description }}</p>
    </div>
</template>