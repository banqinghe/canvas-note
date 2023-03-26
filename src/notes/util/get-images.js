export function getImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossorigin', 'anonymous');

    img.src = url;

    img.onload = () => {
      resolve(img);
    };

    img.onerror = () => {
      reject(`load ${url} error`);
    };
  });
}

export function getAllImages(urls) {
  return Promise.all(urls.map((url) => getImage(url)));
}
