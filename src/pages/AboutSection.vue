<script setup>
    import Title from '@/components/Title.vue';
</script>

<template>
    <div class="lg:mt-40 mt-10" id="about">
        <Title title="About Me" description="I'm a passionate and experienced web developer with expertise in building responsive, scalable, and user-friendly websites." />
        <div class="mt-10 text-center">
            <p class="font-bold text-2xl lg:text-4xl md:text-3xl">Skills</p>
            <p class="lg:text-lg">List of the technologies that I've use</p>
        </div>
        <div class="grid xl:grid-cols-3 md:grid-cols-2 md:gap-10 gap-6 mt-6">
            <div class="bg-white border border-gray-100 shadow-sm w-full rounded-[20px] p-8">
                <img src="../assets/laravel.svg" alt="Laravel Image" class="w-12 h-12">
                <p class="font-bold text-xl">Laravel</p>
                <p class="mt-2">Using Tailwind.css, leveraging its utility-first approach to build modern web app .</p>
            </div>
            <div class="bg-white border border-gray-100 shadow-sm w-full rounded-[20px] p-8">
                <img src="../assets/tailwind-css.svg" alt="Tailwind.css Image" class="w-12 h-12">
                <p class="font-bold text-xl">Tailwind.css</p>
                <p class="mt-2">Using Tailwind.css, leveraging its utility-first approach to build modern web app .</p>
            </div>
            <div class="bg-white border border-gray-100 shadow-sm w-full rounded-[20px] p-8">
                <img src="../assets/bootstrap-5.svg" alt="Bootstrap Image" class="w-12 h-12">
                <p class="font-bold text-xl">Bootstrap</p>
                <p class="mt-2">Using Tailwind.css, leveraging its utility-first approach to build modern web app .</p>
            </div>
            <div class="bg-white border border-gray-100 shadow-sm w-full rounded-[20px] p-8">
                <img src="../assets/vue.svg" alt="Vue.js Image" class="w-12 h-12">
                <p class="font-bold text-xl">Vue.js</p>
                <p class="mt-2">Using Tailwind.css, leveraging its utility-first approach to build modern web app .</p>
            </div>
        </div>
    </div>
</template>