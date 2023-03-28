window.addEventListener('message', e => {
  if (e.data === 'reload') {
    location.reload();
  }
});
