import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumbs, { BreadcrumbsItem } from './index';

storiesOf('Breadcrumbs', module)
  .add(
    'Default',
    () => (
      <Breadcrumbs>
        <BreadcrumbsItem href="https://kiwi.com" onClick={() => console.log('clicked')}>
          Kiwi.com
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#1" onClick={() => console.log('clicked')}>
          1. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#2" onClick={() => console.log('clicked')}>
          2. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#3" onClick={() => console.log('clicked')}>
          3. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#4" onClick={() => console.log('clicked')}>
          4. Level
        </BreadcrumbsItem>
      </Breadcrumbs>
    ),
    {
      info: 'Some description about this type of component. ',
    },
  )
  .add(
    'Playground',
    () => (
      <Breadcrumbs onGoBack={() => console.log('clicked go back')}>
        <BreadcrumbsItem href="https://kiwi.com" onClick={() => console.log('clicked')}>
          Kiwi.com
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#1" onClick={() => console.log('clicked')}>
          1. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#2" onClick={() => console.log('clicked')}>
          2. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#3" onClick={() => console.log('clicked')}>
          3. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#4" onClick={() => console.log('clicked')}>
          4. Level
        </BreadcrumbsItem>
      </Breadcrumbs>
    ),
    {
      info: 'Some description about this type of component. ',
    },
  );
