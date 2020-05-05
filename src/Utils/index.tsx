const replaceImageName = (item: any) =>
  item.replace("./", "").replace(".png", "");

export const importMinisterImg = () => {
  const imageFiles = require.context(
    `../img/people/교역자`,
    false,
    /\.(png|jpe?g|svg)$/
  );
  let images: any = {};
  imageFiles.keys().map((item: any) => {
    images[replaceImageName(item)] = imageFiles(item);
  });
  return images;
};

export const importCheifImg = () => {
  const imageFiles = require.context(
    `../img/people/부장부감`,
    false,
    /\.(png|jpe?g|svg)$/
  );
  let images: any = {};
  imageFiles.keys().map((item: any) => {
    images[replaceImageName(item)] = imageFiles(item);
  });
  return images;
};

export const importYouth1Img = () => {
  const imageFiles = require.context(
    `../img/people/청년1부`,
    false,
    /\.(png|jpe?g|svg)$/
  );
  let images: any = {};
  imageFiles.keys().map((item: any) => {
    images[replaceImageName(item)] = imageFiles(item);
  });
  return images;
};

export const importYouth2Img = () => {
  const imageFiles = require.context(
    `../img/people/청년2부`,
    false,
    /\.(png|jpe?g|svg)$/
  );
  let images: any = {};
  imageFiles.keys().map((item: any) => {
    images[replaceImageName(item)] = imageFiles(item);
  });
  return images;
};

export const importYouth3Img = () => {
  const imageFiles = require.context(
    `../img/people/청년3부`,
    false,
    /\.(png|jpe?g|svg)$/
  );
  let images: any = {};
  imageFiles.keys().map((item: any) => {
    images[replaceImageName(item)] = imageFiles(item);
  });
  return images;
};
