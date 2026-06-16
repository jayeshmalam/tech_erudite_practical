import React, {
  memo,
  useCallback,
} from 'react';

import {
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import EventCard from '@features/events/components/EventCard';
import {
  useAppDispatch,
  useAppSelector,
} from '@hooks/redux';
import AppHeader from '@components/AppHeader';
import { colors } from '@theme/colors';
import {
  toggleFavourite,
} from '../favouriteSlice';
import { Event } from '@features/events/types/event.types';
import { useFavouriteIds } from '../hooks/useFavouriteIds';
import { STRINGS } from '@constants/strings';

type FavouriteItemProps = {
  item: Event;
  isFavorite: boolean;
  onToggle: (item: Event) => void;
};

const FavouriteItem = memo(
  ({
    item,
    isFavorite,
    onToggle,
  }: FavouriteItemProps) => {
    const handleFavoritePress =
      useCallback(() => {
        onToggle(item);
      }, [item, onToggle]);

    return (
      <EventCard
        event={item}
        isFavorite={!isFavorite}
        onFavoritePress={
          handleFavoritePress
        }
      />
    );
  },
);

const EmptyComponent = memo(() => (
  <View style={styles.empty}>
    <Text>{STRINGS.API.NO_FAVOURITES_FOUND}</Text>
  </View>
));

const FavouriteScreen = () => {
  const dispatch = useAppDispatch();

  const favourites =
    useAppSelector(
      state =>
        state.favourites.favourites,
    );

  const favouriteIds =
    useFavouriteIds();

  const handleToggleFavourite =
    useCallback(
      (item: Event) => {
        dispatch(toggleFavourite(item));
      },
      [dispatch],
    );

  const renderItem = useCallback(
    ({
      item,
    }: {
      item: Event;
    }) => (
      <FavouriteItem
        item={item}
        isFavorite={favouriteIds.has(
          item.event_date_id,
        )}
        onToggle={
          handleToggleFavourite
        }
      />
    ),
    [
      favouriteIds,
      handleToggleFavourite,
    ],
  );

  const keyExtractor =
    useCallback(
      (item: Event) =>
        String(item.event_date_id),
      [],
    );

  return (
    <View style={styles.container}>
      <AppHeader />

      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        windowSize={7}
        removeClippedSubviews
        updateCellsBatchingPeriod={
          50
        }
        showsVerticalScrollIndicator={
          false
        }
        ListEmptyComponent={
          <EmptyComponent />
        }
      />
    </View>
  );
};

export default memo(
  FavouriteScreen,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      colors.white,
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});