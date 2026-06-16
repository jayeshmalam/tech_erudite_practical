import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const metrics = {
  screenWidth: width,
  screenHeight: height,

  radius: {
    sm: 6,
    md: 10,
    lg: 16,
  },
};