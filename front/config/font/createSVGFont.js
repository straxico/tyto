/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webfontsGenerator from 'webfonts-generator';
import glob from 'glob';
import fs from 'fs';

const fontDir = path.join(__dirname, '../../public', 'static', 'fonts');
const fontName = 'icon';
const cssDir = path.join(__dirname, '../../public', 'static', 'css', `${fontName}.css`);
const cssFontsUrl = path.join('/static', 'fonts');

webfontsGenerator(
  {
    files: glob.sync('src/utils/SvgIcons/*.svg'),
    dest: fontDir,
    fontName,
    css: true,
    cssDest: cssDir,
    cssFontsUrl,
    types: ['woff'],
    order: ['woff'],
    startCodepoint: 0xf101,
    formatOptions: { svg: { fontHeight: 1000, normalize: true } },
    templateOptions: {
      classPrefix: 'icon_',
      baseSelector: 'i',
    },
    cssTemplate: path.join(__dirname, 'css.hbs'),
    writeFiles: false,
  },
  (error, result) => {
    fs.writeFileSync(cssDir, result.generateCss());
    fs.writeFileSync(path.join(fontDir, `${fontName}.woff`), result.woff);
    if (error) {
      console.log('Fail!', error);
    } else {
      console.log('build font is complate');
    }
  },
);

// create IconName type file
const files = glob.sync('src/utils/SvgIcons/*.svg');
const iconTypedir = path.join(
  __dirname,
  '../../src',
  'Components',
  'Atoms',
  'Icon',
  `iconName.d.ts`,
);
let typeFile = '/* eslint-disable prettier/prettier */\ntype IconName =IconNull | (';
files.forEach(inputFileName => {
  typeFile = `${typeFile}\n  | '${path
    .basename(inputFileName)
    .replace(/( \(custom\))?\.svg$/, '')}'`;
});
typeFile += ');\n';
fs.writeFile(iconTypedir, typeFile, { flag: 'w+' }, err => err && console.log('YOU HAVE ERR', err));
