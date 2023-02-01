import * as fontkit from 'fontkit';
import assert from 'assert';
import fs from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.resolve(path.dirname(__filename))

describe('fontkit', function () {
  it('should open a font asynchronously (input buffer)', async () => {
    let buffer = await fs.promises.readFile(join(__dirname, 'data/OpenSans/OpenSans-Regular.ttf'))

    let font = await fontkit.open(buffer);
    assert.equal(font.type, 'TTF');
  });

  it('should open a font synchronously (input buffer)', function () {
    let font = fontkit.openSync(fs.readFileSync(join(__dirname, 'data/SourceSansPro/SourceSansPro-Regular.woff')));
    assert.equal(font.type, 'WOFF');

    font = fontkit.openSync(fs.readFileSync(join(__dirname, 'data/SourceSansPro/SourceSansPro-Regular.woff2')));
    assert.equal(font.type, 'WOFF2');

    font = fontkit.openSync(fs.readFileSync(join(__dirname, 'data/SourceSansPro/SourceSansPro-Regular.otf')));
    assert.equal(font.type, 'TTF');
  });
});
