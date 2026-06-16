import Config from 'react-native-config';

export const getImageUrl = (
  fileName?: string | null,
): string | null => {
  if (!fileName) {
    return null;
  }

  return `${Config.IMAGE_BASE_URL}/${fileName}`;
};