// Reference: https://kiyamayellow.com/blog/vitereact-%E3%81%A7%E7%94%BB%E5%83%8F%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E5%8B%95%E7%9A%84%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BF/

export const getImage = (fileName: string): string => {
  return new URL(`../assets/${fileName}`, import.meta.url).href;
};

export const getCardImage = (fileName: string): string => {
  return new URL(`../assets/card/${fileName}.jpg`, import.meta.url).href;
};
