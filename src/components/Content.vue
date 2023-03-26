<script setup>
import { ref, watch } from 'vue';
import { WebContainer } from '@webcontainer/api';
import { debounce } from 'throttle-debounce';
import { javascript } from '@codemirror/lang-javascript';
import Editor from './Editor.vue';
import { files } from '../webcontainer/files';
import { getNotePath } from '../utils';

const props = defineProps({
  chapter: String,
});

/** @type {import('@webcontainer/api').WebContainer}  */
let webcontainerInstance;

const iframeRef = ref(null);

const loading = ref(true);
const code = ref('');
console.log('hello');
const editorExtension = ref([javascript()]);
const chapterContent = ref(null);

// iframe url without path
let iframeUrl;
// record the cause of input event, prevent extra reload
let inputCause = 'input';

async function installDependencies() {
  console.log('npm install ...');
  const installProcess = await webcontainerInstance.spawn('npm', ['install']);

  // print unreadable characters (why?), disable
  // installProcess.output.pipeTo(
  //   new WritableStream({
  //     write(data) {
  //       console.log(data);
  //     },
  //   })
  // );

  return installProcess.exit;
}

async function startDevServer() {
  await webcontainerInstance.spawn('npm', ['run', 'start']);

  webcontainerInstance.on('server-ready', (_, url) => {
    iframeUrl = url;
    iframeRef.value.src = `${iframeUrl}/static/${props.chapter}/index.html`;
    loading.value = false;
  });
}

async function writeIndexJS(content) {
  if (!webcontainerInstance) {
    return;
  }
  await webcontainerInstance.fs.writeFile(
    chapterContent.value.javascript.path,
    content
  );
}

const handleInput = debounce(
  250,
  async code => {
    if (inputCause === 'input') {
      await writeIndexJS(code);
      iframeRef.value.contentWindow.location.reload();
    } else {
      inputCause = 'input';
    }
  },
  { atBegin: false }
);

window.addEventListener('load', async () => {
  console.log('begin boot');
  webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);
  console.log('end boot');

  const exitCode = await installDependencies();
  if (exitCode !== 0) {
    throw new Error('Installation failed');
  } else {
    console.log('install done');
  }

  startDevServer();
});

watch(
  () => props.chapter,
  () => {
    chapterContent.value = getNotePath(props.chapter);
    code.value = chapterContent.value.javascript.contents;
    inputCause = 'chapter';
    if (iframeRef.value) {
      iframeRef.value.src = `${iframeUrl}/static/${props.chapter}/index.html`;
    }
  },
  { immediate: true }
);
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
      class="flex justify-center items-center bg-gray-200 opacity-50 absolute inset-0"
    >
      <p class="text-2xl font-bold text-black animate-pulse">Loading...</p>
    </div>
  </div>
</template>
