import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import RenderInRtl from 'utils/rtl/RenderInRtl';
import Icon from 'Atoms/Icon';
import Heading from '../Heading';
import Text from '../Text';
import Loading from '../Loading';
import Button from '../Button';
import Stack from '../Stack';
import Badge from '../Badge';

import Card, { CardHeader, CardSection, CardSectionHeader, CardSectionContent } from './index';

storiesOf('Card', module)
  .add(
    'Default',
    () => {
      const title = text('Title', 'Card with title');
      const description = text('Description', 'Description');
      return (
        <Card>
          <CardHeader icon={<Icon />} title={title} subTitle={description} />
        </Card>
      );
    },
    {
      info: 'This is the default configuration of this component.',
    },
  )
  .add(
    'Card with description',
    () => {
      const title = text('Title', 'Card with title & description');
      const description = text('Description', 'This is a description of the card.');
      return (
        <Card>
          <CardHeader icon={<Icon />} title={title} subTitle={description} />
        </Card>
      );
    },
    {
      info:
        'Card component is a simple container for grouping some relevant information. It’s possible to add title and description. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Card with only section',
    () => {
      const content = text('Content', 'This is a content of the card.');
      return (
        <Card>
          <CardSection>
            <Text>{content}</Text>
          </CardSection>
        </Card>
      );
    },
    {
      info:
        'Card component is a simple container for grouping some relevant information. You can add a content to Card. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Card with sections',
    () => {
      const title = text('Title', 'Card with sections');
      const description = text('Description', 'This is a description of the card.');
      return (
        <Card>
          <CardSection>
            <Heading type="title3" element="h3">
              {title}
            </Heading>
            <Text>{description}</Text>
          </CardSection>
          <CardSection>
            <Heading type="title3" element="h3">
              {title}
            </Heading>
            <Text>{description}</Text>
          </CardSection>
          <CardSection>
            <Heading type="title3" element="h3">
              {title}
            </Heading>
            <Text>{description}</Text>
          </CardSection>
        </Card>
      );
    },
    {
      info:
        'Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Card with expandable sections',
    () => {
      const title = text('Title', 'Card with sections');
      const description = text('Description', 'This is a description of the card.');
      return (
        <Card>
          <CardHeader title={title} subTitle={description} />
          <CardSection expandable>
            <CardSectionHeader>
              <Heading type="title3" element="h3">
                {title}
              </Heading>
            </CardSectionHeader>
            <CardSectionContent>
              <Text>{description}</Text>
            </CardSectionContent>
          </CardSection>
          <CardSection expandable>
            <CardSectionHeader>
              <Heading type="title3" element="h3">
                {title}
              </Heading>
            </CardSectionHeader>
            <CardSectionContent>
              <Text>{description}</Text>
            </CardSectionContent>
          </CardSection>
          <CardSection expandable>
            <CardSectionHeader>
              <Heading type="title3" element="h3">
                {title}
              </Heading>
              <Text>{description}</Text>
            </CardSectionHeader>
            <CardSectionContent>
              <Text>{description}</Text>
            </CardSectionContent>
          </CardSection>
        </Card>
      );
    },
    {
      info:
        'Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Card with default expanded',
    () => {
      const initialExpanded = boolean('initialExpended', true);
      return (
        <Card>
          <CardSection expandable>
            <CardSectionHeader>
              <Stack direction="row" align="center" justify="between">
                <div>
                  <Stack direction="row" align="center">
                    <Text type="secondary">Trip length: 1h55m</Text>
                    <Badge icon={<Icon />} type="warning">
                      Unavailable
                    </Badge>
                  </Stack>
                </div>
              </Stack>
            </CardSectionHeader>
            <CardSectionContent>Hidden content</CardSectionContent>
          </CardSection>
          <CardSection
            expandable
            initialExpanded={initialExpanded}
            onExpand={() => console.log('onex')}
            onClose={() => console.log('on close')}>
            <CardSectionHeader
              actions={
                                <div>
                  <Button type="secondary" size="small">
                    Close
  </Button>
</div>
              }>
              <Stack direction="row" align="center" justify="between">
                <div>
                  <Stack direction="row" align="center">
                    <Text type="secondary">Trip length: 1h55m</Text>
                  </Stack>
                </div>
              </Stack>
            </CardSectionHeader>
            <CardSectionContent visible>By default visible content</CardSectionContent>
          </CardSection>
        </Card>
      );
    },
    {
      info:
        'Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Card with mixed sections',
    () => {
      const title = text('Title', 'Card with sections');
      const description = text('Description', 'This is a description of the card.');
      return (
        <Card>
          <CardHeader
            title={title}
            subTitle={description}
            actions={<Button size="small">Button</Button>}
          />
          <CardSection>
            <CardSectionHeader>
              <Heading type="title3" element="h3">
                {title}
              </Heading>
              <Text>Test</Text>
            </CardSectionHeader>
            <CardSectionContent>{description}</CardSectionContent>
          </CardSection>
          <CardSection expandable>
            <CardSectionHeader>
              <Heading type="title3">{title}</Heading>
            </CardSectionHeader>
            <CardSectionContent>{description}</CardSectionContent>
          </CardSection>
          <CardSection>
            <CardSectionHeader>
              <Heading type="title3">{title}</Heading>
            </CardSectionHeader>
            <CardSectionContent>{description}</CardSectionContent>
          </CardSection>
        </Card>
      );
    },
    {
      info:
        'Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Loading Card',
    () => (
      <Card>
        <Loading type="boxLoader" loading>
          {true && (
            <>
              <CardHeader title="Test" />
              <CardSection>kek</CardSection>
            </>
          )}
        </Loading>
      </Card>
    ),
    {
      info:
        'Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )

  .add(
    'Playground',
    () => {
      const title = text('Title', 'Customisable card title');
      const description = text('Description', 'This is a customisable description of the card.');
      const closable = boolean('Closable', false);
      const dataTest = text('dataTest', 'test');
      return (
        <Card closable={closable} onClose={() => console.log('close')} dataTest={dataTest}>
          <CardHeader icon={<Icon />} title={title} subTitle={description} dataTest={dataTest} />
          <CardSection dataTest={dataTest}>
            <Heading type="title3" element="h3">
              Content with Heading and text
            </Heading>
            <Text>Text in content</Text>
          </CardSection>
          <CardSection dataTest={dataTest}>
            <Heading type="title3" element="h3">
              Section with Heading and text
            </Heading>
            <Text>Text in section</Text>
          </CardSection>
        </Card>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Accessibility',
    () => {
      const title = text('Title', 'Card with title');
      const dataA11ySection = text('dataA11ySection', 'ID-OF-CARD');
      return (
        <Card>
          <CardHeader dataA11ySection={dataA11ySection} title={title} />
        </Card>
      );
    },
    {
      info: 'This is a preview of component accessibility props',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <Card closable onClose={() => console.log('onex')}>
          <CardHeader
            icon={<Icon />}
            title="Title of the CardHeader"
            subTitle="Description of the CardHeader"
          />
          <CardSection>
            <Heading type="title3" element="h3">
              Content with Heading and text
            </Heading>
            <Text>Text in content</Text>
          </CardSection>
          <CardSection>
            <Heading type="title3" element="h3">
              Section with Heading and text
            </Heading>
            <Text>Text in section</Text>
          </CardSection>
          <CardSection expandable>
            <CardSectionHeader>
              <Heading type="title3" element="h3">
                Content with Heading and text
              </Heading>
              <Text>Text in content</Text>
            </CardSectionHeader>
            <CardSectionContent>
              <Text>Text in content</Text>
            </CardSectionContent>
          </CardSection>

          <CardSection expandable initialExpanded>
            <CardSectionHeader actions={<Button size="small">Action</Button>}>
              <Heading type="title3" element="h3">
                Content with Heading and text
              </Heading>
              <Text>Text in content</Text>
            </CardSectionHeader>
            <CardSectionContent>
              <Text>Text in content</Text>
            </CardSectionContent>
          </CardSection>
        </Card>
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
