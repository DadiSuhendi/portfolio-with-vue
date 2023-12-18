<script setup>
import Navbar from './components/Navbar.vue';
import HomeSection from './pages/HomeSection.vue';
import ProjectSection from './pages/ProjectSection.vue';
import AboutSection from './pages/AboutSection.vue';
import FooterSection from './pages/FooterSection.vue';
</script>

<template>
  <main class="xl:mx-[10em] mx-4 mb-6 pt-11">
    <Navbar />
    <HomeSection/>
    <ProjectSection/>
    <AboutSection/>
    <FooterSection/>
  </main>
</template>

<style>
  body {
    background: #f8f8f8;
  }
  html {
    scroll-behavior: smooth;
  }
</style>