<script setup>
import { shallowRef } from 'vue';
import { Codemirror } from 'vue-codemirror';

const props = defineProps(['extensions', 'code']);
const emit = defineEmits(['change']);

// Codemirror EditorView instance ref
const view = shallowRef();
const handleReady = payload => {
  view.value = payload.view;
};
</script>

<template>
  <Codemirror
    :model-value="props.code"
    placeholder="Code goes here..."
    class="h-full"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="props.extensions"
    @ready="handleReady"
    @change="code => emit('change', code)"
  />
</template>
