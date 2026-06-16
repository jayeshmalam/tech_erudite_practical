import {useEffect} from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from '@hooks/redux';

import {fetchEvents} from '../eventSlice';

export const useEvents = () => {
  const dispatch =
    useAppDispatch();

  const {
    events,
    isLoading,
    error,
  } = useAppSelector(
    state => state.events,
  );

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return {
    events,
    isLoading,
    error,
  };
};