/* eslint-disable no-restricted-globals */
// self.importScripts('./manifest.json')
// import json from '../package.json'

self.onmessage = function (e) {
  const { json } = e.data;
  json.__custom__ = json.__render__;
  self.postMessage({ json, finished: true });
};

self.onerror = function (error) {
  console.log(error, "self.onerror");
};
