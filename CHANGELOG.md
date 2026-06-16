# Changelog

All notable changes to this project are documented in this file.

## [Unreleased] - 2026-06-16 (28 file changes)

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
  - src/features/events/components/EventCard.tsx
  - src/features/events/eventSlice.ts
  - src/features/events/hooks/useEvents.ts
  - src/features/events/types/event.types.ts
  - src/features/events/screens/EventScreen.tsx

- **Added:** General app UI and navigation
  - src/components/AppHeader.tsx
  - src/app/navigation/RootNavigator.tsx
  - src/app/store/store.ts
  - src/assets/icons/arrow-right.svg
  - src/assets/icons/heart-outline.svg
  - src/assets/icons/heart.svg
  - src/assets/icons/share.svg

- **Updated:** App constants and strings
  - src/constants/strings.ts

- **Updated:** Project configuration and build setup
  - babel.config.js
  - package.json
  - package-lock.json
  - tsconfig.json

- **Notes:** This changelog entry captures the current working tree changes for the auth-login and events feature work. Please review and commit the updated files once validated.

## [0.1.0] - 2026-06-15
- Initial release — project scaffold. (commit f9779a2, author: jayesh-malam)
