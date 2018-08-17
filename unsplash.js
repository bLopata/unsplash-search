import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "0602fb6915e94f8abadf47dcafa06e7c89997fb4b04999484bbc74736b546ea4",
  secret: "f19c4eec4749aeaef1f0c6b96d7c23236944a3226b23670dbf3b3d3a53c88b5c",
  callbackUrl: "http://unsplash.com/search/photos/milky-way"
});

async function get() {
  const a = await unsplash.photos.listPhotos(2, 15, "latest");
  console.log(a.type);
}