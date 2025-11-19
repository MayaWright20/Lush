# Hey

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```
3. Run on ios

   ```bash
   i
   ```

4. Run on android

   ```bash
   a
   ```

## Assumptions

I've assumed isAvailable being false means sold out. 

## Things to note

Instead of localstate i have used zustand which allows the app to create fake profiles. You'll need to remember the name you entered on the login screen in order to see any favourites you have saved. Logging in with a different name will create a new profile.

![Profiles](./assets/images/header.png)

![Shop](./assets/images/vertical.png)

![Categories](./assets/images/horizontal.png)

![Product](./assets/images/horizontal.png)