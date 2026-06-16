import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {colors} from '@theme/colors';
import {metrics} from '@theme/metrics';
import {typography} from '@theme/typography';
import { spacing } from '@theme/spacing';

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

const LoginButton = ({
  title,
  onPress,
  loading,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}>
      <Text style={styles.text}>
        {loading ? 'Loading...' : title}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    padding: spacing.sm+2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: metrics.radius.sm,
  },

  text: {
    color: colors.white,
    fontSize: typography.size.body,
    fontWeight: '600',
  },
});