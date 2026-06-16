import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { logout } from '@features/auth/authSlice';
import AppImage from '@components/AppImages';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(
    state => state.auth.user,
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  const fullName = `${user?.usr_fname ?? ''} ${user?.usr_lname ?? ''
    }`;

  return (
    <ScrollView
      contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>

        <View style={styles.avatarContainer}>

          <AppImage
            imageName={user?.usr_profile_img}
            size={120}
          />
        </View>

        <Text style={styles.name}>
          {fullName}
        </Text>

        <Text style={styles.email}>
          {user?.usr_email}
        </Text>
      </View>

      <View style={styles.card}>
        <ProfileRow
          label="User ID"
          value={String(user?.usr_id ?? '-')}
        />

        <ProfileRow
          label="First Name"
          value={user?.usr_fname ?? '-'}
        />

        <ProfileRow
          label="Last Name"
          value={user?.usr_lname ?? '-'}
        />

        <ProfileRow
          label="Email"
          value={user?.usr_email ?? '-'}
        />
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}>
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

type ProfileRowProps = {
  label: string;
  value: string;
};

const ProfileRow = ({
  label,
  value,
}: ProfileRowProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
  },

  profileSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  name: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },

  email: {
    marginTop: 4,
    fontSize: 15,
    color: '#777',
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 2,
  },

  row: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },

  logoutButton: {
    marginTop: 32,
    backgroundColor: '#FF4D4F',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },

  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});