/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import camelcase from 'camelcase';
import mkdirp from 'mkdirp';
import glob from 'glob';
import svgr from '@svgr/core';

const files = glob.sync('src/utils/SvgComponents/*.svg');

const names = files.map(inputFileName => {
  const baseName = path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, '');

  const functionName = camelcase(baseName, { pascalCase: true });
  const outputComponentFileName = `${functionName}.tsx`;

  return {
    inputFileName,
    outputComponentFileName,
    functionName,
    baseName,
  };
});

const componentPath = path.join(__dirname, '..', '..', 'src', 'Components', 'Atoms', 'Icons');

function getViewBox(attributes) {
  for (let i = attributes.length - 1; i >= 0; i -= 1) {
    if (attributes[i].name === 'viewBox') {
      return attributes[i].value;
    }
  }
  return '0 0 24 24';
}

mkdirp(componentPath);

function template({ template }, opts, { imports, componentName, props, jsx, exports }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
  import  React from "react";
      import OrbitIcon from "../IconSvg";

      export default function ${componentName}(props: IconProps) {
        return (
          ${jsx}
        );
      };`;
}

names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
  const dom = await JSDOM.fromFile(inputFileName);
  const content = dom.window.document.querySelector('svg');

  svgr(
    content.outerHTML,
    {
      svgAttributes: { viewBox: getViewBox(content.attributes) },
      template,
    },
    { componentName: functionName },
  ).then(jsCode => {
    fs.writeFileSync(
      path.join(componentPath, outputComponentFileName),
      jsCode.replace(
        /<svg\b[^>]* viewBox="(\b[^"]*)".*?>([\s\S]*?)<\/svg>/g,
        `<OrbitIcon viewBox="$1" size={props.size} color={props.color} customColor={props.customColor} className={props.className} dataTest={props.dataTest} ariaHidden={props.ariaHidden} reverseOnRtl={props.reverseOnRtl} ariaLabel={props.ariaLabel}>$2</OrbitIcon>`,
      ),
    );
  });
});

const index = names
  .map(({ functionName }) => `export { default as ${functionName} } from './${functionName}';\n`)
  .join('');

fs.writeFile(
  path.join(componentPath, 'index.tsx'),
  index,
  { flag: 'w+' },
  err => err && console.log('YOU HAVE ERR', err),
);

console.log('build iconsvg is complate');
