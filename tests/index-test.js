import expect from 'expect';
import loadImage from 'src/index';
import js from './js.png';

describe('loadImage', () => {
  it('should return a loaded image', async () => {
    const img = await loadImage(js);
    expect(img.width).toEqual(640);
  })
})
