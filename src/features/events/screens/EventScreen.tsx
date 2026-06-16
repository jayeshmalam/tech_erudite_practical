import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';

import EventCard from '../components/EventCard';
import { useEvents } from '../hooks/useEvents';
import { Event } from '../types/event.types';
import AppHeader from '@components/AppHeader';
import { STRINGS } from '@constants/strings';

import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';

const EmptyEvents = () => (
  <View style={styles.center}>
    <Text style={styles.messageText}>
      {STRINGS.EVENTS.NO_EVENTS_FOUND}
    </Text>
  </View>
);

const EventScreen = () => {
  const { events, isLoading, error } = useEvents();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            color={colors.primary}
          />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.center}>
          <Text style={styles.errorText}>
            {error}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppHeader />

      <FlatList
        data={events}
        renderItem={({ item }: { item: Event }) => (
          <EventCard event={item} />
        )}
        keyExtractor={(item: Event) =>
          String(
            item.event_date_id ??
              item.event_id,
          )
        }
        contentContainerStyle={
          styles.listContainer
        }
        showsVerticalScrollIndicator={
          false
        }
        ListEmptyComponent={<EmptyEvents />}
      />
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  listContainer: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
    flexGrow: 1,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },

  messageText: {
    color: colors.textSecondary,
    textAlign: 'center',
  },

  errorText: {
    color: colors.error,
    textAlign: 'center',
  },
});