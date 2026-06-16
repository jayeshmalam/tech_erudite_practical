import React from 'react';
import {View, StyleSheet} from 'react-native';

import AppIcon from '../../../assets/icons/app-icon.svg';
import Placeholder from '../../../assets/icons/image-placeholder.svg';

import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/spacing';

const AuthHeader = () => {
  return (
    <View>
      <View style={styles.logoContainer}>
        <AppIcon width={120} height={55} />
      </View>

      <View style={styles.imageContainer}>
        <Placeholder width={60} height={60} />
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },

  imageContainer: {
    padding: '15%',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});