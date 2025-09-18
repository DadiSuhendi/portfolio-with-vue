<script setup>
        import { onMounted, ref } from 'vue';
        let open = ref(false)
        let active = ref(false)
        onMounted(() => {
            window.document.onscroll = () => {
                let navbar = document.getElementById('nav')
                if(window.scrollY > navbar.offsetTop) {
                    active.value = true
                } else {
                    active.value = true
                }
            }
        })
</script>
<template>
    <nav id="nav" class="bg-white border border-gray-100 shadow-sm text-[#222222] md:py-2 py-4 xl:px-32 transition-all ease-in-out duration-75 fixed w-full top-0 left-0 rounded-none">
    <!-- <nav id="nav" class="bg-white border border-gray-100 shadow-sm text-[#222222] rounded-full md:py-6 py-4  transition-all ease-in-out duration-75" :class="{'fixed w-full top-0 left-0 rounded-none': active, 'relative':!active}"> -->
        <div class="flex justify-between px-7 text-lg items-center font-monaSans">
            <p class="font-bold uppercase tracking-wider">Dadi <span class="hidden md:inline">Suhendi</span></p>
            <ul class="md:flex gap-6 font-semibold items-center hidden">
                <li><a href="#home">I'am</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="https://drive.google.com/file/d/1SsKRITpHflSxDR1ly6lGj4zz5UTtSP01/view?usp=sharing" target="_blank" class="w-[120px] border border-gray-200 shadow-sm flex items-center justify-center py-3 rounded-full font-bold">Resume</a></li>
            </ul>
            <div class="md:hidden transition-all duration-700 delay-300" :class="(open) ? '-mr-24' : ''">
                <button class="text-[#222222] w-10 h-10 relative focus:outline-none" @click="open = !open">
                    <span class="sr-only">Open main menu</span>
                    <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                        <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                        <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
                    </div>
                </button>
            </div>
        </div>
    </nav>

    <!-- Sidebar active -->
    <div class="w-[300px] h-screen bg-white fixed top-0 border border-r-slate-700 transition-all ease-in-out duration-700 delay-300" :class="(open == true) ? 'left-0' : '-left-80'">
        <div class="flex justify-end px-5 pt-3 transition-all duration-700 delay-300 ease-in-out w-full" :class="(!open) ? '-ml-72' : ''">
            <button class="text-[#222222] w-10 h-10 relative focus:outline-none " @click="open = !open">
                <span class="sr-only">Open main menu</span>
                <div class="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                    <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                    <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
                </div>
            </button>
        </div>
        <div class="px-8 py-3 flex flex-col gap-8 text-lg w-full">
            <p class="font-bold uppercase tracking-wider">Dadi Suhendi</p>
            <ul class="font-medium flex flex-col gap-8 w-full">
                <li class="w-full">
                    <a href="#home" id="iamNavbar" class="w-full block">
                        I'am
                        <div class="w-5 h-[2px] bg-black lineNavbarAnimation"></div>
                    </a>
                </li>
                <li class="w-full">
                    <a href="#projects" id="projectNavbar" class="w-full block">
                        Projects
                        <div class="w-5 h-[2px] bg-black lineNavbarAnimation"></div>
                    </a>
                </li>
                <li class="w-full">
                    <a href="#" id="aboutNavbar" class="w-full block">
                        About
                        <div class="w-5 h-[2px] bg-black lineNavbarAnimation"></div>
                    </a>
                </li>
                <li><a href="#" class="w-[120px] border border-slate-700 flex items-center justify-center py-3 rounded-full font-medium">Resume</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@keyframes lineNavbarAnimation {
    0% {
        width: 15px;
    }
    50% {
        width: 10px;
    }
    70% {
        width: 100%;
    }
    90% {
        width: 95%;
    }
    100% {
        width: 100%;
    }
}
    #iamNavbar:hover .lineNavbarAnimation, #projectNavbar:hover .lineNavbarAnimation, #aboutNavbar:hover .lineNavbarAnimation {
        animation: lineNavbarAnimation .5s ease forwards;
    }
</style>