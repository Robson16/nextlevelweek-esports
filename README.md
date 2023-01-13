<p align="center">
<img src="./assets/img/nlw-esports-logo.svg" alt="Next Level Week Esports Logo"/></p>

<br>

Project create at the 9th edition of [Next Level Week](https://lp.rocketseat.com.br/nlw) by Rocketseat.

The web client is deployed on Vercel here:

https://nextlevelweek-esports.vercel.app/

<hr>
<br>

- [Description](#description)
- [Stack and tools](#stack-and-tools)
- [Quickstart](#quickstart)

<br>

## Description

The project is called *Find your Duo*.
It is a platform to find the perfect partner to play your favorite game together, by connecting your Twitch.tv account.

<p align="center">
<img src="./assets/img/app-preview.jpeg" alt="Next Level Week Esports Logo"/></p>

## Stack and tools
* [Node.js](https://nodejs.org/en/)
* [Prisma](https://www.prisma.io/)
* [React](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Radix UI](https://www.radix-ui.com/)

## Quickstart

### Server

First, create a new ``.env`` file on the root directory, using the `.env.example` template as base.

Then, to create the local db run:
```sh
$ npm install
$ npm run db:migrate
```

After that, to start the server, run:
```sh
$ npm run dev
```

### Web

To run the local Vite web client:
```sh
$ npm install
$ npm run dev
```

### Mobile

The easiest way to run is by installing the [Expo Go](https://expo.dev/client) app on your smartphone or tablet, and run the commands below in your terminal inside the mobile folder of the project: (Be sure to be in the same network in both your devices)
```sh
$ npm install
$ npm run start
```