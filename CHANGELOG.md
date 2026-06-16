# Changelog

All notable changes to this project are documented in this file.

## [Unreleased] - 2026-06-16 (uncommitted changes)

- **Added:** Authentication feature (login screen, components, hooks, API, validation, types):
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

- **Added:** App structure and state
	- src/app/navigation/RootNavigator.tsx
	- src/app/store/store.ts

- **Added:** Theme tokens and UI assets
	- src/theme/colors.ts
	- src/theme/metrics.ts
	- src/theme/spacing.ts
	- src/theme/typography.ts
	- src/assets/icons/* (multiple SVG icons added)

- **Added:** Services, hooks and utils
	- src/services/api.ts
	- src/hooks/redux.ts
	- src/utils/toast.ts

- **Added:** Other screens and constants
	- src/features/events/screens/EventScreen.tsx
	- src/config/index.ts
	- src/constants/strings.ts

- **Added:** Type declarations
	- declarations.d.ts
	- src/types/env.d.ts
	- react-native-config.d.ts

- **Changed:** Project and build configuration
	- App.tsx — app entrypoint updated
	- package.json — dependency / script updates
	- package-lock.json
	- metro.config.js
	- android/app/build.gradle
	- .gitignore

- **Notes:** Approximately 40 files added/modified (untracked files under `src/` plus tracked file updates). Commit these changes to record them in the repository.

## [0.1.0] - 2026-06-15
- Initial release — project scaffold. (commit f9779a2, author: jayesh-malam)
