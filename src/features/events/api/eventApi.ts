import {api} from '@services/api';
import {Event} from '../types/event.types';

export interface EventsListingResponse {
  success: boolean;
  message: string;
  data?: {
    events?: Event[];
    total?: number;
  };
}

export const getEventsApi = async (
  token: string,
) : Promise<EventsListingResponse> => {
  const response = await api.post(
    '/events-listing',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
