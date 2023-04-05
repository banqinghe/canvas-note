import { ref } from 'vue';
import { WebContainer } from '@webcontainer/api';
import { files } from './files';

let webcontainerInstance;

export const loading = ref('Booting');

async function installDependencies() {
  console.log('npm install ...');
  loading.value = 'Install dependencies';
  const installProcess = await webcontainerInstance.spawn('npm', ['install']);
  return installProcess.exit;
}

async function startDevServer(resolve) {
  await webcontainerInstance.spawn('npm', ['run', 'start']);

  webcontainerInstance.on('server-ready', (_, url) => {
    resolve(url);
  });
}

export function initWebContainer() {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      console.log('begin boot');
      webcontainerInstance = await WebContainer.boot();
      await webcontainerInstance.mount(files);
      console.log('end boot');

      const exitCode = await installDependencies();
      if (exitCode !== 0) {
        reject('installation failed');
      } else {
        console.log('install done');
      }

      startDevServer(resolve);
    });
  });
}

export async function writeFile(path, content) {
  if (!webcontainerInstance) {
    return;
  }
  await webcontainerInstance.fs.writeFile(path, content);
}
