# Changelog

All notable changes to this project are documented in this file.

## [Unreleased] - 2026-06-16 (44 file changes)

- **Added:** Authentication feature and login UX
  - src/features/auth/api/authApi.ts
  - src/features/auth/authSlice.ts
  - src/features/auth/components/AuthHeader.tsx
  - src/features/auth/components/AuthInput.tsx
  - src/features/auth/components/LoginButton.tsx
  - src/features/auth/components/SocialButton.tsx
  - src/features/auth/hooks/useLogin.ts
  - src/features/auth/screens/LoginScreen.tsx
  - src/features/auth/types/auth.types.ts
  - src/features/auth/utils/authValidation.ts

- **Added:** Events feature scaffolding
  - src/features/events/api/eventApi.ts
  - src/features/events/eventSlice.ts
  - src/features/events/hooks/useEvents.ts
  - src/features/events/types/event.types.ts
  - src/features/events/screens/EventScreen.tsx

- **Added:** Favourites and Profile features
  - src/features/favourites/screens/FavouriteScreen.tsx
  - src/features/profile/screens/ProfileScreen.tsx

- **Added:** Bottom tab navigation
  - src/app/navigation/BottomTabNavigator.tsx

- **Added:** General app UI and components
  - src/components/AppHeader.tsx
  - src/components/AppImages.tsx
  - src/components/TabIcon.tsx
  - src/app/store/store.ts

- **Added:** App utilities and hooks
  - src/hooks/getImage.ts

- **Added:** UI assets (icons and other resources)
  - src/assets/icons/arrow-right.svg
  - src/assets/icons/calendar.svg
  - src/assets/icons/heart-outline.svg
  - src/assets/icons/heart.svg
  - src/assets/icons/profile.svg
  - src/assets/icons/search.svg
  - src/assets/icons/share.svg

- **Updated:** App navigation and structure
  - src/app/navigation/RootNavigator.tsx
  - src/features/events/components/EventCard.tsx
  - src/config/index.ts

- **Updated:** Configuration and environment
  - .env.example
  - react-native-config.d.ts
  - package.json
  - package-lock.json

- **Notes:** This changelog entry captures the current working tree changes for auth-login, events, favourites, and profile features. Bottom tab navigation implemented. Total 44 files added/modified. Please review and commit the updated files once validated.

## [0.1.0] - 2026-06-15
- Initial release — project scaffold. (commit f9779a2, author: jayesh-malam)
