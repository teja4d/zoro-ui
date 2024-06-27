# Zoro-UI

Zoro-UI is a Next.js project designed to provide a robust user interface with extensive testing and API integration capabilities. This README outlines the project's structure, dependencies, and how to set up and run the application.

## Table of Contents
- [Installation](#installation)
- [Scripts](#scripts)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [API Integration](#api-integration)

## Installation

To get started with Zoro-UI, clone the repository and install the necessary dependencies.

```bash
git clone <repository-url>
cd zoro-ui
npm install
```

## Scripts

Here is a list of scripts you can run with `npm`:

- **dev**: Runs the application in development mode.
  ```bash
  npm run dev
  ```
- **build**: Builds the application for production.
  ```bash
  npm run build
  ```
- **start**: Starts the application in production mode.
  ```bash
  npm run start
  ```
- **lint**: Lints the project using ESLint.
  ```bash
  npm run lint
  ```
- **test**: Runs the tests using Jest.
  ```bash
  npm run test
  ```
- **cypress:open**: Opens the Cypress test runner.
  ```bash
  npm run cypress:open
  ```
- **swagger**: Generates TypeScript API clients from Swagger definitions.
  ```bash
  npm run swagger
  ```

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

To start the application in production mode:

```bash
npm run start
```

## Testing

Zoro-UI uses Jest and Cypress for testing.

- To run unit tests with Jest:
  ```bash
  npm run test
  ```

- To run end-to-end tests with Cypress:
  ```bash
  npm run cypress:open
  ```

## API Integration

The project includes a script to generate TypeScript API clients from Swagger definitions:

```bash
npm run swagger
```

This script will:
1. Remove the existing Swagger-generated files.
2. Fetch the latest Swagger definition from the specified URL.
3. Generate the TypeScript API clients using the `swagger-typescript-api` tool.

Ensure the Swagger JSON is accessible at `http://localhost:5000/swagger.json` before running this script.
