/* global Image */

const loadImage = (src) => {
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.crossOrigin = 'anonymous';
    img.onerror = reject;
    img.onabort = reject;
    img.onload = () => {
      resolve(img);
    };
    img.src = src;
  });
};

export default loadImage;
