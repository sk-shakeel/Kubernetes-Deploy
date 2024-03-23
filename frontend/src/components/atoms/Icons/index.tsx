import React from 'react';
import { ICONS } from '../../../utils/constants';


interface Props {
  icon: string ;
  width: string;
  height: string;
  onClick?: () => void;
}
export const Icons = (props: Props) => {
  return (
    <div {...props} data-testid={'icon'} >
      {ICONS[props.icon]}
    </div>
    
  );
};
