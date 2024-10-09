# Women's Football
React Native (Expo) app that shows information about women's football leagues across the world.

## Before running the app
Before you'll be able to run the app, you need to sign up to [API Football](https://www.api-football.com/) and create an account. They have free and paid subscriptions, but a free subscription is sufficient. Once you have made an account, you need to create an `.env` file and put your API key in there like the following:
`EXPO_PUBLIC_API_KEY=your API key`

Now you should be able to do API calls using this app.

## How to run the app?
First, run `npm install`.

Once the dependencies have been installed, you can run the app.

For iOS:
`npm run ios`

For Android:
`npm run android`

## Available data
This app only includes the women's football leagues that are available on [API Football](https://www.api-football.com/) using the free tier. This means that for some leagues / seasons the details cannot be retrieved.

## ⚠️ Disclaimer ⚠️
I am in no way affliated with any of the teams included in this app. This app was built purely for personal purposes and to gain more experience building apps with React Native. I do not own any of the images and all credit goes to their respective owners.
