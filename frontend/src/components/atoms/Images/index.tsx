import React from 'react';
import {SVG_IMAGE_PATH,Svg} from '../../../utils/constants';

interface Props {
  image: Svg;
  style ?: React.CSSProperties;
}
const Index = (props: Props) => {
    return <img src={SVG_IMAGE_PATH+`${props.image}.svg`} alt={props.image} />;
 
};

export default Index;
