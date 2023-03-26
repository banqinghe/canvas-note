<script setup>
const props = defineProps({
  chapter: String,
});

const dirs = [
  '00.canvas-api',
  '01.basic-usage',
  '02.drawing-shapes',
  '03.applying-styles-and-colors',
  '04.drawing-text',
  '05.using-images',
  '06.transformations',
  '07.compositing',
  '08.basic-animations',
  '09.advanced-animations',
  '10.pixel-manipulation-with-canvas',
  '11.hit-regions-and-accessibility',
  '12.optimizing-canvas',
];
</script>

<template>
  <aside class="w-48 h-full border-r overflow-auto">
    <ul class="px-2 py-4 space-y-2">
      <li v-for="chapter in dirs">
        <button
          class="text-xs break-all px-2 py-2 text-left border border-gray-200 rounded-sm w-full hover:bg-gray-100"
          :class="{ 'bg-gray-200': props.chapter === chapter }"
          @click="$emit('click-side-btn', chapter)"
        >
          {{ chapter }}
        </button>
      </li>
    </ul>
  </aside>
</template>
