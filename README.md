# Tech Erudite Practical

A React Native CLI application developed as part of the Tech Erudite practical assignment. The project follows a feature-based architecture with reusable components, custom hooks, API integration, TypeScript support, and scalable folder organization.

---

## Features

- User Authentication
- Event Listing
- Add/Remove Favourites
- User Profile
- Logout Functionality
- API Integration
- Reusable Components
- Custom Hooks
- TypeScript Support
- Feature-Based Architecture

---


## Tech Stack

- React Native CLI
- TypeScript
- React Navigation
- Redux Toolkit
- Redux Persist
- Axios / Fetch API
- React Hooks
- ESLint
- Prettier

---
## Project Structure

```text
src
├── app                 # Navigation and app entry configuration
├── assets              # Images, icons and static assets
├── components          # Shared reusable UI components
├── config              # App configuration
├── constants           # Application constants
├── features
│   ├── auth            # Authentication module
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   ├── screens
│   │   ├── types
│   │   └── utils
│   ├── events          # Events feature
│   ├── favourites      # Favourites feature
│   ├── profile         # Profile feature
│   └── search          # Search feature
├── hooks               # Global custom hooks
├── services            # API and external services
├── theme               # Theme and styling configuration
├── types               # Global TypeScript types
└── utils               # Shared utility functions
```

---

## Prerequisites

Before running the project, ensure you have installed:

* Node.js (Latest LTS Version)
* npm or Yarn
* Java JDK 17+
* Android Studio
* Android SDK
* React Native CLI Environment

Verify your setup:

```bash
npx react-native doctor
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd TECH_ERUDITE_PRACTICAL
```

### Install Dependencies

Using npm:

```bash
npm install
```

Using Yarn:

```bash
yarn install
```

---

## Environment Setup

Create a `.env` file in the project root.

Example:

```env
API_BASE_URL=https://api.example.com
IMAGE_BASE_URL=https://api.example.com/uploads
```

You can also copy values from `.env.example`.

---

## Running the Project

### Start Metro Bundler

Using npm:

```bash
npm start
```

Using Yarn:

```bash
yarn start
```

---

### Run Android Application

Make sure an Android emulator is running or a physical Android device is connected.

Using npm:

```bash
npm run android
```

Using Yarn:

```bash
yarn android
```

The application will automatically install and launch on the connected Android device or emulator.

---

## Build APK

Generate a debug APK:

### Windows

```bash
cd android
gradlew assembleDebug
```

### macOS / Linux

```bash
cd android
./gradlew assembleDebug
```

Generated APK Location:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## Architecture

This project follows a Feature-Based Architecture.

Each feature contains its own:

* API Layer
* Components
* Hooks
* Screens
* Types
* Utilities

### Benefits

* Better Scalability
* Easy Maintenance
* Clear Separation of Concerns
* Reusable Business Logic
* Modular Development

---

## Code Quality

The project includes:

* ESLint Configuration
* Prettier Configuration
* TypeScript Support
* Reusable Components
* Custom Hooks
* Modular Folder Structure

---

## Platform Support

| Platform | Status        |
| -------- | ------------- |
| Android  | ✅ Supported   |
| iOS      | ⚠️ Not Tested |

---

## Future Improvements

* Unit Testing
* Integration Testing
* Push Notifications
* Offline Data Support
* Enhanced Search Filters
* Performance Optimization

---

## Author

**Jayesh Malam**

React Native Developer

GitHub: https://github.com/jayeshmalam

LinkedIn: https://linkedin.com/in/jayeshmalam

---

## Assignment Submission

This project was developed as part of the Tech Erudite React Native Practical Assignment using React Native CLI, TypeScript, reusable architecture patterns, and modular feature-based development practices.
