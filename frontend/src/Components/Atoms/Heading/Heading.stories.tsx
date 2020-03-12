import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import RenderInRtl from 'utils/rtl/RenderInRtl';
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from './consts';

import Heading from './index';

storiesOf('Heading', module)
  .add(
    'Default',
    () => {
      const customTitle = text('Title', 'jajiga design system');
      return <Heading>{customTitle}</Heading>;
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Title Display',
    () => {
      const customTitle = text('Title', 'jajiga design system');
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
      return (
        <Heading type="display" element={element as HeadingElement}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Title displaySubtitle',
    () => {
      const customTitle = text('Title', 'jajiga design system');
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
      return (
        <Heading type="displaySubtitle" element={element as HeadingElement}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Title 1',
    () => {
      const customTitle = text('Title', 'jajiga design system');
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
      return (
        <Heading type="title1" element={element as HeadingElement}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Title 2',
    () => {
      const customTitle = text('Title', 'jajiga design system');
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
      return (
        <Heading type="title2" element={element as HeadingElement}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Title 3',
    () => {
      const customTitle = text('Title', 'jajiga design system');
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H3);
      return (
        <Heading type="title3" element={element as HeadingElement}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Title 4',
    () => {
      const customTitle = text('Title', 'jajiga design system');
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H4);
      return (
        <Heading type="title4" element={element as HeadingElement}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Title 5',
    () => {
      const customTitle = text('Title', 'jajiga design system');
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H5);
      return (
        <Heading type="title5" element={element as HeadingElement}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Inverted heading',
    () => {
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H1);
      const type = select('Type', Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
      const inverted = boolean('Inverted', true);
      const customTitle = text('Title', 'jajiga design system');

      return (
        <div style={{ padding: 20, backgroundColor: '#46515E' }}>
          <Heading
            type={type as HeadingType}
            element={element as HeadingElement}
            inverted={inverted}>
            {customTitle}
          </Heading>
        </div>
      );
    },
    {
      info:
        'Headings are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      const element = select('Element', Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
      const type = select('Type', Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DISPLAY);
      const dataTest = text('dataTest', 'test');
      const id = text('ID', 'ID-OF-A-ELEMENT');
      const customTitle = text('Title', 'jajiga design system');
      const dataA11ySection = text('dataA11ySection', 'ID-OF-SECTION');
      return (
        <Heading
          id={id}
          element={element as HeadingElement}
          dataA11ySection={dataA11ySection}
          type={type as HeadingType}
          dataTest={dataTest}>
          {customTitle}
        </Heading>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Accessibility',
    () => {
      const dataA11ySection = text('dataA11ySection', 'ID-OF-SECTION');
      const customTitle = text('Title', 'jajiga design system');
      return <Heading dataA11ySection={dataA11ySection}>{customTitle}</Heading>;
    },
    {
      info: 'This is a preview of component accessibility props',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <Heading type="display">jajiga design system</Heading>
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
