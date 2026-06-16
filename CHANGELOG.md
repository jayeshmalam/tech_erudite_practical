# Changelog

All notable changes to this project are documented in this file.

## [Unreleased] - 2026-06-16 (10 file changes)

- **Added:** Favourites module
  - src/features/favourites/favouriteSlice.ts
  - src/features/favourites/hooks/useFavouriteIds.ts
  - src/features/favourites/screens/FavouriteScreen.tsx
  - src/features/favourites/types/favourite.types.ts

- **Added:** Search screen
  - src/features/search/screens/SearchScreen.tsx

- **Updated:** Navigation and app state
  - src/app/navigation/BottomTabNavigator.tsx
  - src/app/store/store.ts

- **Updated:** Events UI
  - src/features/events/components/EventCard.tsx
  - src/features/events/screens/EventScreen.tsx

- **Updated:** Shared app text
  - src/constants/strings.ts

- **Notes:** Favourite module completed and search screen added. Review bottom tab navigation, app state, event screen updates, and the new changelog entry.

## [0.1.0] - 2026-06-15
- Initial release — project scaffold. (commit f9779a2, author: jayesh-malam)
