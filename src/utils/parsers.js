export function getLastPageFromURL(url) {
  return url
    .split(',')[1]
    .match(/&page=[0-9]*/)[0]
    .split('=')[1];
}
