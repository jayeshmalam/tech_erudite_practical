import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {colors} from '@theme/colors';
import {metrics} from '@theme/metrics';

type Props = {
  icon: React.ComponentType<any>;
  onPress?: () => void;
};

const SocialButton = ({
  icon: Icon,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Icon width={24} height={24} />
    </TouchableOpacity>
  );
};

export default memo(SocialButton);

const styles = StyleSheet.create({
  container: {
    width: 46,
    height: 46,
    borderRadius: metrics.radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 2,
  },
});