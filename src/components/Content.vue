<script setup>
import { ref, watch } from 'vue';
import { debounce } from 'throttle-debounce';
import { javascript } from '@codemirror/lang-javascript';
import Editor from './Editor.vue';
import { initWebContainer, writeFile, loading } from '../webcontainer';
import { getNotePath } from '../utils';

const props = defineProps({
  chapter: String,
});

const iframeRef = ref(null);
const code = ref('');
const editorExtension = ref([javascript()]);
const chapterContent = ref(null);

// iframe url without path
let iframeUrl;
// record the cause of input event, prevent extra reload
let inputCause = 'input';

const handleInput = debounce(
  250,
  async code => {
    if (inputCause === 'input') {
      await writeFile(chapterContent.value.javascript.path, code);
      iframeRef.value.contentWindow.postMessage('reload', '*');
    } else {
      inputCause = 'input';
    }
  },
  { atBegin: false }
);

function loadContentByChapter(chapter) {
  chapterContent.value = getNotePath(chapter);
  code.value = chapterContent.value.javascript.contents;
  if (iframeRef.value) {
    iframeRef.value.src = `${iframeUrl}/${chapter}/index.html`;
  }
}

async function initContent() {
  try {
    const url = await initWebContainer();
    iframeUrl = url;
    loadContentByChapter(props.chapter);
    loading.value = '';
  } catch (err) {
    console.error(err);
  }
}

watch(
  () => props.chapter,
  () => {
    inputCause = 'chapter';
    loadContentByChapter(props.chapter);
  }
);

initContent();
</script>

<template>
  <div class="relative flex w-full h-full overflow-hidden">
    <div class="flex-1 border-r h-full overflow-auto">
      <Editor
        v-show="!loading"
        :code="code"
        :extensions="editorExtension"
        @change="handleInput"
      />
    </div>
    <div class="flex-1">
      <div class="w-full h-full" v-show="!loading">
        <iframe class="h-full w-full" ref="iframeRef" frameborder="0"></iframe>
      </div>
    </div>

    <div
      v-if="loading"
      class="flex justify-center items-center bg-gray-100 opacity-80 fixed inset-0"
    >
      <p class="text-2xl font-bold font-mono text-black animate-pulse">
        {{ loading }} ...
      </p>
    </div>
  </div>
</template>
