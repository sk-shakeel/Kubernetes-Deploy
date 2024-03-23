import React, { MouseEventHandler } from 'react';

interface ChipProps {
  text: string|React.ReactNode;
  testid: string;
  style?: React.CSSProperties;
  onclick?: MouseEventHandler<HTMLDivElement>;
}

function Chip(props: ChipProps) {
  return (
    <div data-testid={props.testid} onClick={props.onclick} style={props.style}>
      <span>{props.text}</span>
    </div>
  );
}

export default Chip;
