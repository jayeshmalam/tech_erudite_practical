import { useMemo } from 'react';

import { useAppSelector } from '@hooks/redux';

export const useFavouriteIds = () => {
  const favourites =
    useAppSelector(
      state =>
        state.favourites.favourites,
    );

  return useMemo(
    () =>
      new Set(
        favourites.map(
          item =>
            item.event_date_id,
        ),
      ),
    [favourites],
  );
};