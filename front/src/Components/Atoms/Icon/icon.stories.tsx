import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import 'static/css/_normalize.css';
import 'static/css/fonts.css';
import 'static/css/icon.css';
import 'static/css/_grid.css';
import axios from 'axios';
import Card from 'Atoms/Card';
import Icon from 'Atoms/Icon';
import Text from 'Atoms/Text';
import Grid from 'Atoms/Grid';

const GetAllIcon = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/static/css/icon.css')
      .then(response => {
        // handle success
        const regex = /\w+?(?=:before)/g;
        const matches = response.data.match(regex);
        setData(matches);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Grid columns="repeat(6, 1fr)" rowGap="15px">
        {data.map(iconName => (
          <Card key={iconName}>
            <Text align="center">
              <Icon iconName={iconName.substr(5)} color="info" size="large" />
            </Text>
            <Text align="center">{iconName.substr(5)}</Text>
          </Card>
        ))}
      </Grid>
    </>
  );
};

const story = storiesOf('icon', module);
story.add('icon', () => {
  return <GetAllIcon />;
});
