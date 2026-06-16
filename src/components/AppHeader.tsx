import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {logout} from '../features/auth/authSlice';
import {STRINGS} from '../constants/strings';

const AppHeader = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(
    state => state.auth.user,
  );

  const handleLogout = () => {
    Alert.alert(
      STRINGS.HEADER.LOGOUT_TITLE,
      STRINGS.HEADER.LOGOUT_MESSAGE,
      [
        {
          text: STRINGS.HEADER.CANCEL,
          style: 'cancel',
        },
        {
          text: STRINGS.HEADER.LOGOUT,
          style: 'destructive',
          onPress: () => {
            dispatch(logout());
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>
            {STRINGS.HEADER.HELLO}{' '}
            {user?.usr_fname ?? STRINGS.HEADER.GUEST}!
          </Text>

          <Text style={styles.subtitle}>
            {STRINGS.HEADER.SUBTITLE}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}>
          <Text style={styles.logoutText}>
            {STRINGS.HEADER.LOGOUT}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(AppHeader);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#222222',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#7A7A7A',
  },

  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  logoutText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});