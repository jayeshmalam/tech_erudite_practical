import React, { memo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AuthHeader from '../components/AuthHeader';
import AuthInput from '../components/AuthInput';
import LoginButton from '../components/LoginButton';
import SocialButton from '../components/SocialButton';

import GoogleIcon from '../../../assets/icons/social_media/google-icon.svg';
import AppleIcon from '../../../assets/icons/social_media/apple-icon.svg';
import FacebookIcon from '../../../assets/icons/social_media/facebook-icon.svg';
import EyeIcon from '../../../assets/icons/eye-icon.svg';
import EyeOffIcon from '../../../assets/icons/eye-off-icon.svg';

import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';
import { colors } from '../../../theme/colors';

import { STRINGS } from '../../../constants/strings';
import { useLogin } from '../hooks/useLogin';

const SOCIAL_ICONS = [
  {
    id: 'google',
    Icon: GoogleIcon,
  },
  {
    id: 'apple',
    Icon: AppleIcon,
  },
  {
    id: 'facebook',
    Icon: FacebookIcon,
  },
];

const LoginScreen = () => {
  const {
    email,
    password,
    secure,
    errors,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    togglePasswordVisibility,
    handleGuestLogin
  } = useLogin();

  const passwordIcon = secure ? (
    <EyeOffIcon width={22} height={22} />
  ) : (
    <EyeIcon width={22} height={22} />
  );

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={45}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <AuthHeader />

        <View style={styles.formContainer}>
          <AuthInput
            label={STRINGS.LOGIN.EMAIL_LABEL}
            value={email}
            placeholder={STRINGS.LOGIN.EMAIL_PLACEHOLDER}
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
            onChangeText={handleEmailChange}
          />

          <AuthInput
            label={STRINGS.LOGIN.PASSWORD_LABEL}
            value={password}
            placeholder={STRINGS.LOGIN.PASSWORD_PLACEHOLDER}
            secureTextEntry={secure}
            error={errors.password}
            onChangeText={handlePasswordChange}
            rightIcon={passwordIcon}
            onRightIconPress={togglePasswordVisibility}
          />

          <TouchableOpacity>
            <Text style={styles.forgotText}>
              {STRINGS.LOGIN.FORGOT_PASSWORD}
            </Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <LoginButton
              title={STRINGS.LOGIN.SIGN_IN}
              onPress={handleLogin}
            />

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                {STRINGS.LOGIN.NOT_MEMBER}
              </Text>

              <TouchableOpacity>
                <Text style={styles.signupLink}>
                  {STRINGS.LOGIN.SIGN_UP}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.line} />

            <Text style={styles.orText}>
              {STRINGS.LOGIN.SOCIAL_LOGIN_TEXT}
            </Text>

            <View style={styles.line} />
          </View>

          <View style={styles.socialContainer}>
            {SOCIAL_ICONS.map(item => (
              <SocialButton
                key={item.id}
                icon={item.Icon}
              />
            ))}
          </View>

          <TouchableOpacity
            style={styles.guestContainer}
            onPress={handleGuestLogin}>
            <Text style={styles.guestText}>
              {STRINGS.LOGIN.ENTER_AS_GUEST}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: spacing.xl,
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    marginTop: spacing.lg,
  },

  forgotText: {
    alignSelf: 'flex-end',
    fontSize: typography.size.small,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: spacing.md,
  },

  buttonContainer: {
    justifyContent: 'flex-end', alignItems: 'flex-end'
  },
  signupText: {
    fontSize: typography.size.caption,
    color: colors.textPrimary,
  },

  signupLink: {
    fontSize: typography.size.caption,
    color: colors.textPrimary,
    textDecorationLine: 'underline',
    marginLeft: spacing.xs,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xl,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },

  orText: {
    marginHorizontal: spacing.sm,
    fontSize: typography.size.small,
    color: colors.textSecondary,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    marginTop: spacing.lg,
  },

  guestContainer: {
    marginTop: spacing.xl,
    alignItems: 'flex-end',
  },

  guestText: {
    fontSize: typography.size.caption,
    color: colors.textSecondary,
  },

});