import { create } from './base';
import fs from 'fs';

export function openSync(file, postscriptName) {
  if(!_isBuffer(file)) {
    file = fs.readFileSync(file);
  }
  return create(file, postscriptName);
}

export async function open(file, postscriptName, callback) {
  if (typeof postscriptName === 'function') {
    callback = postscriptName;
    postscriptName = null;
  }

  if(!_isBuffer(file)) {
    file = await fs.promises.readFile(file);
  }

  return create(file, postscriptName);
}

// https://github.com/feross/is-buffer/blob/master/index.js
function _isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}