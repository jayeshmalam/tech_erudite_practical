import React, {
  memo,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Event } from '../types/event.types';

import ArrowRightIcon from '@assets/icons/arrow-right.svg';
import ShareIcon from '@assets/icons/share.svg';
import HeartIcon from '@assets/icons/heart.svg';
import HeartOutlineIcon from '@assets/icons/heart-outline.svg';
import ImagePlaceholderIcon from '@assets/icons/image-placeholder.svg';

import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';
import { metrics } from '@theme/metrics';

type Props = {
  event: Event;
  onPress?: () => void;
  onFavoritePress?: () => void;
  onSharePress?: () => void;
};

const IMAGE_SIZE = 86;
const ICON_SIZE = 24;

const EventCard = ({
  event,
  onPress,
  onFavoritePress,
  onSharePress,
}: Props) => {
  const [imageError, setImageError] =
    useState(false);

  useEffect(() => {
    setImageError(false);
  }, [event.event_profile_img]);

  const tags = useMemo(
    () =>
      [
        ...event.keywords.slice(0, 2),
        ...event.danceStyles.map(
          style => style.ds_name,
        ),
      ].slice(0, 4),
    [event.keywords, event.danceStyles],
  );

  const FavoriteIcon = event.isFavorite
    ? HeartIcon
    : HeartOutlineIcon;

  const renderImage = () => {
    if (
      imageError ||
      !event.event_profile_img
    ) {
      return (
        <View style={styles.placeholder}>
          <ImagePlaceholderIcon
            width={32}
            height={32}
          />
        </View>
      );
    }

    return (
      <Image
        source={{
          uri: event.event_profile_img,
        }}
        style={styles.image}
        resizeMode="cover"
        onError={() =>
          setImageError(true)
        }
      />
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={onPress}>
      <View style={styles.imageContainer}>
        {renderImage()}
      </View>

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text
            numberOfLines={1}
            style={styles.title}>
            {event.event_name}
          </Text>

          <ArrowRightIcon
            width={22}
            height={22}
            color={colors.textPrimary}
          />
        </View>

        <View style={styles.infoRow}>
          <View>
            <Text style={styles.date}>
              {event.readable_from_date}
            </Text>

            <Text style={styles.price}>
              €{event.event_price_from}
              {event.event_price_to > 0 &&
                ` - €${event.event_price_to}`}
            </Text>
          </View>

          <Text
            numberOfLines={2}
            style={styles.location}>
            {event.city}, {event.country}
          </Text>
        </View>

        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <View
              key={`${tag}-${index}`}
              style={styles.tag}>
              <Text
                numberOfLines={1}
                style={styles.tagText}>
                {tag}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={onSharePress}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}>
            <ShareIcon
              width={22}
              height={22}
              color="#555"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onFavoritePress}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}>
            <FavoriteIcon
              width={ICON_SIZE}
              height={ICON_SIZE}
              color="#16C784"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(EventCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: metrics.radius.lg,
    padding: spacing.sm + 2,
    marginHorizontal: spacing.sm + 4,
    marginVertical: spacing.xs + 2,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  imageContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius:
      metrics.radius.sm + 2,
    overflow: 'hidden',
    backgroundColor:
      colors.background,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      colors.background,
  },

  content: {
    flex: 1,
    marginLeft: spacing.sm + 2,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  title: {
    flex: 1,
    marginRight: spacing.sm,
    fontSize:
      typography.size.body + 2,
    fontWeight:
      typography.weight.semiBold,
    color: colors.textPrimary,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xs,
  },

  date: {
    fontSize:
      typography.size.caption + 1,
    color: colors.primary,
    fontWeight:
      typography.weight.medium,
  },

  price: {
    marginTop: 2,
    fontSize:
      typography.size.caption + 1,
    color: colors.textSecondary,
  },

  location: {
    width: 90,
    textAlign: 'right',
    fontSize:
      typography.size.caption,
    color: colors.textSecondary,
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
  },

  tag: {
    backgroundColor:
      colors.background,
    borderRadius: 20,
    paddingHorizontal:
      spacing.sm + 2,
    paddingVertical: spacing.xs,
    marginRight:
      spacing.xs + 2,
    marginBottom: spacing.xs,
  },

  tagText: {
    fontSize:
      typography.size.caption,
    color: colors.textPrimary,
    fontWeight:
      typography.weight.medium,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: spacing.md - 2,
    marginTop: spacing.xs + 2,
  },
});