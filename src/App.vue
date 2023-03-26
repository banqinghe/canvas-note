<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import SideNav from './components/SideNav.vue';
import Content from './components/Content.vue';

const curChapter = ref('00.canvas-api');

function handleClickSideBtn(newChapter) {
  curChapter.value = newChapter;
}
</script>

<template>
  <Header />
  <main class="flex h-[calc(100vh-48px)]">
    <SideNav :chapter="curChapter" @click-side-btn="handleClickSideBtn" />
    <Content :chapter="curChapter" />
  </main>
</template>
