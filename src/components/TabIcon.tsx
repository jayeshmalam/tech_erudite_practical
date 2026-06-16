import React from 'react';
import {SvgProps} from 'react-native-svg';

type Props = {
  Icon: React.FC<SvgProps>;
  color: string;
  size?: number;
};

const TabIcon = ({
  Icon,
  color,
  size = 28,  
}: Props) => {
  return (
    <Icon
      width={size}
      height={size}
      color={color}
    />
  );
};

export default TabIcon;