import { Grid, Stack, Typography ,styled} from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Chip from '.';
import theme from '../../../utils/theme';

export default {
  title: 'Atoms/chip',
  Component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Timechip = Template.bind({});
Timechip.args = {
  text: '06.00 - 07.00',
  style: {
    background: '#9E62B2',
    color: '#FFFFFF',
    width: '128px',
    height: '40px',
    fontWeight: 500,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
  },
};

export const Monthchip = Template.bind({});
Monthchip.args = {
  text: 'March',
  style: {
    background: '#9E62B2',
    color: '#FFFFFF',
    width: '142px',
    height: '40px',
    borderRadius: '12px',
    display: 'flex',
    fontWeight: 500,
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
  },
};

const Item = styled(Grid)({
  color:'primary.main',
  display:'grid',
  alignItems:'center',
  justifyContent:'center'

});

const Date = () => {
  return (
    <Stack sx={{ width: '65px' }}>
      <Item>
          <Typography variant="caption" >Mon</Typography>
          <Typography variant="body1" marginLeft={'0.5vh'}>21</Typography>
      </Item>    
    </Stack>
  )
}

export const Daychip = Template.bind({});
Daychip.args = {
  text: <Date/>,
  style: {
    background: '#9E62B2',
    color: '#FFFFFF',
    width: '65px',
    height: '76px',
    borderRadius: '12px',
    display: 'flex',
    fontWeight: 500,
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
  },
}


