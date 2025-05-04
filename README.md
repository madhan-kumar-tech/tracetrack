# TraceTrack

TraceTrack is a cross-platform mobile application built with React Native, supporting both iOS and Android.

## Features

- React Native architecture (0.73+)
- TypeScript support
- State management with Zustand
- Navigation with React Navigation
- API data fetching with React Query
- Pre-configured ESLint and Prettier for code quality
- Husky for Git hooks
- Easy feature scaffolding via scripts

## Getting Started

### Prerequisites

- Node.js v18.20.8
- npm v10.8.2
- Ruby v3.1.7
- CocoaPods v1.13.0
- Java OpenJDK 17.0.15
- Xcode (for iOS) v16.2
- Android Studio (for Android)

### Installation

```sh
# Install JS dependencies
yarn

# Install iOS dependencies
cd ios && pod install && cd ..
```

### Running the App

#### iOS

```sh
yarn ios
```

#### Android

```sh
yarn android
```

### Linting & Formatting

```sh
yarn lint
```

### Running Tests

```sh
yarn test
```

## Project Structure

The TraceTrack project is organized for clarity, scalability, and ease of maintenance. Below is an overview of the main directories and their purposes:

```
src/
  assets/         # Static assets such as images and SVGs
  components/     # Reusable UI components, organized by atomic design (atoms, molecules, organisms, templates, pages)
  features/       # Feature-based modules (e.g., authentication, user profile)
    auth/         # Example feature: authentication logic, store, components, hooks, screens, services
  i18n/           # Internationalization configuration and translation files
android/          # Native Android project files (Gradle configs, Java/Kotlin code)
ios/              # Native iOS project files (Xcode project, Swift/Obj-C code)
scripts/          # Utility scripts for automation (e.g., feature generators)
__tests__/        # Jest unit and integration tests
```

### Folder Descriptions

- **src/assets/**: Contains all static files used in the app, such as images and SVGs.
- **src/components/**: Houses reusable UI components, structured by atomic design principles for maintainability and scalability.
- **src/features/**: Contains modular features of the app. Each feature (like `auth`) is self-contained with its own store, components, hooks, screens, and services.
- **src/i18n/**: Manages internationalization, including translation files and configuration.
- **android/**: Includes all native Android project files, Gradle configurations, and platform-specific code.
- **ios/**: Includes all native iOS project files, Xcode project, and platform-specific code.
- **scripts/**: Contains automation and helper scripts to streamline development and maintenance tasks.
- **__tests__/**: Stores automated tests for the app, executed using Jest.

This structure ensures a modular, organized, and scalable codebase, making it easier for teams to collaborate and extend the project.

## Scripts
 Contains automation and helper scripts to streamline development and maintenance tasks.  
  To quickly scaffold a new feature, run the generator script:

  ```sh
  node scripts/generate-feature.js <feature-name>
  ```

  Replace `<feature-name>` with your desired feature module name.


## Commit Guidelines & Git Hooks

This project uses [git-cz](https://github.com/commitizen/cz-cli) for standardized commit messages and [Husky](https://typicode.github.io/husky/) for Git hooks automation.

- **Standardized Commits:**  
  Use `npx git-cz` instead of `git commit` to follow the Conventional Commits specification. This helps with readable commit history and better changelog generation.

  ```sh
  npx git-cz
  ```

- **Pre-commit Hooks:**  
  Husky runs automated checks (like linting and tests) before each commit and push to ensure code quality and prevent broken code from being committed.

- **How to Commit:**
  1. Stage your changes:  
     ```sh
     git add .
     ```
  2. Run the commit wizard:  
     ```sh
     npx git-cz
     ```
  3. Follow the prompts to write a descriptive, conventional commit message.

- **How to Bypass Hooks (not recommended):**  
  If you need to skip hooks (e.g., in emergencies), use:  
  ```sh
  git commit --no-verify
  ```

Following these practices ensures a clean, consistent codebase and smooth collaboration for all contributors.