import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { SIZES, TYPES } from './consts';
import TextLink from '../TextLink';

import List, { ListItem } from './index';

storiesOf('List', module)
  .add(
    'Default',
    () => (
      <List>
        <ListItem>
          24,000 locations
          <TextLink href="#">around</TextLink>
          the globe
        </ListItem>
        <ListItem>
          Lowest price car rental in
          <strong>Warsaw</strong>
        </ListItem>
        <ListItem>From 3 star budget to 5 star luxury</ListItem>
      </List>
    ),
    {
      info:
        'List groups related information together and make content more scalable and organized.',
    },
  )
  .add(
    'Different type and size',
    () => {
      const size = select('Size', Object.values(SIZES), SIZES.SMALL);
      const type = select('Type', Object.values(TYPES), TYPES.SECONDARY);

      return (
        <List size={size as ListSize} type={type as ListType}>
          <ListItem>
            Gain peace of mind before you travel. No stress about what could go wrong.
          </ListItem>
          <ListItem>Customise your coverage to suit your needs and your budget.</ListItem>
          <ListItem>
            Feel safe in the hands of AXA Assistance, the travel insurance experts.
          </ListItem>
        </List>
      );
    },
    {
      info:
        'List groups related information together and make content more scalable and organized.',
    },
  )

  .add(
    'Playground',
    () => {
      const size = select('Size', Object.values(SIZES), SIZES.NORMAL);
      const type = select('Type', Object.values(TYPES), TYPES.PRIMARY);
      const content = text(
        'Content',
        '24,000 locations around the globe.You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines',
      );

      return (
        <List size={size as ListSize} type={type as ListType}>
          <ListItem>{content}</ListItem>
          <ListItem>{content}</ListItem>
          <ListItem>{content}</ListItem>
        </List>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  );
