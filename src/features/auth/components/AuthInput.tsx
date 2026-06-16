import React, {forwardRef, memo} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
} from 'react-native';

import {colors} from '@theme/colors';
import {metrics} from '@theme/metrics';
import {spacing} from '@theme/spacing';
import {typography} from '@theme/typography';

type Props = TextInputProps & {
  label: string;
  error?: string;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
};

const AuthInput = forwardRef<TextInput, Props>(
  (
    {
      label,
      error,
      rightIcon,
      onRightIconPress,
      ...rest
    },
    ref,
  ) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {label}
        </Text>

        <View
          style={[
            styles.inputContainer,
            error ? styles.errorBorder : null,
          ]}>
          <TextInput
            ref={ref}
            {...rest}
            style={styles.input}
            placeholderTextColor={colors.placeholder}
            accessibilityLabel={label}
          />

          {rightIcon ? (
            <TouchableOpacity
              style={styles.rightIconContainer}
              onPress={onRightIconPress}
              activeOpacity={0.7}>
              {rightIcon}
            </TouchableOpacity>
          ) : null}
        </View>

        {error ? (
          <Text style={styles.errorText}>
            {error}
          </Text>
        ) : null}
      </View>
    );
  },
);

AuthInput.displayName = 'AuthInput';

export default memo(AuthInput);

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },

  label: {
    fontSize: typography.size.input,
    fontWeight: typography.weight.regular,
    color: colors.textPrimary,
    marginBottom: spacing.xs + 2,
  },

  inputContainer: {
    height: 48,
    backgroundColor: colors.white,

    borderRadius: metrics.radius.sm,

    paddingHorizontal: spacing.md - 2,

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3,

    elevation: 3,
  },

  input: {
    flex: 1,

    color: colors.textPrimary,
    fontSize: typography.size.input,
    fontWeight: typography.weight.regular,

    paddingVertical: 0,
  },

  rightIconContainer: {
    paddingLeft: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorBorder: {
    borderWidth: 1,
    borderColor: colors.error,
  },

  errorText: {
    marginTop: spacing.xs,
    color: colors.error,
    fontSize: typography.size.caption,
  },
});