<h1 align="center">
   <img alt="GoBarber" title="GoBarber" src="./app-images/logo-purple.svg" width="100px" />
   <br>
  <br>
  GoBarber (mobile)
</h1>

<h3 align="center">
:computer: Web version <a href="https://github.com/gabrielbarth/web-goBarber">here</a>
<br>
:floppy_disk: Backend version <a href="https://github.com/gabrielbarth/backend-goBarber"> here</a>
</h3>

<br>
Mobile (react-native) project of  barber shop scheduling app :barber: for costumers, developed during <a href="https://rocketseat.com.br/">GoStack10 bootcamp</a>.
<br>


## :mag_right: Overview / Visão geral

This application allows:

- Create and update account;
- See all barbers and their available schedule;
- Schedule and cancel an appointment with a barber;
- Send notification to web project - barber platform;

#### :rocket: See about this challange [here](https://github.com/Rocketseat/bootcamp-gostack-desafio-10)

##  :iphone:  Interfaces view

<p align="center">
  <img alt="IMAGE.GIF" title="html-image" src="./app-images/mob-gif1.gif" width="600px" />
</p>
<p align="center">
  <img alt="IMAGE.GIF" title="html-image" src="./app-images/mob-gif2.gif" width="600px" />
</p>


## :link: Project dependencies

:heavy_check_mark: [**@react-navigation/native (v5)**](https://reactnavigation.org/) `// routing and navigation for your React Native apps` <br>
:heavy_check_mark: [**@react-native-linear-gradient**](https://github.com/react-native-community/react-native-linear-gradient) `// <LinearGradient> component for react-native` <br>
:heavy_check_mark: [**axios**](https://github.com/axios/axios)  `// promise based HTTP client for the browser and node.js` <br>
:heavy_check_mark: [**date-fns**](https://date-fns.org/) `// library to handle with date` <br>
:heavy_check_mark: [**styled-components**](https://styled-components.com/) `// allows to write actual CSS code to style components` <br>
:heavy_check_mark: [**redux**](https://redux.js.org/) `// allows manage app global state` <br>
:heavy_check_mark: [**redux-saga**](https://github.com/redux-saga/redux-saga) `// allows manage app global state using middlewares (each other things)` <br>
:heavy_check_mark: [**redux-persist**](https://github.com/rt2zz/redux-persist) `// Persist and rehydrate a redux store.` <br>
:heavy_check_mark: [**reactotron-react-native**](https://github.com/infinitered/reactotron) `// desktop app for inspecting informations through the app` <br>
:heavy_check_mark: [**prop-types**](https://www.npmjs.com/package/prop-types) `//  used to document the intended types of properties passed to components` <br>
:heavy_check_mark: [**immer**](https://github.com/immerjs/immer) `//  allows create the next immutable state by mutating the current one` <br>
:heavy_check_mark: [**react-native-vector-icons**](https://github.com/oblador/react-native-vector-icons) `// icons for react-native` <br>


**Development dependencies:** <br>

:heavy_check_mark: [**eslint**](https://eslint.org/) `// allows find and fix problems in your JavaScript code` <br>
:heavy_check_mark: [**prettier**](https://prettier.io/)  `// code formatter, makes code prettier` <br>


## :computer: Getting Started - Running on your machine

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### :ballot_box_with_check: Prerequisites

Check the [backend repository](https://github.com/gabrielbarth/backend-goBarber) and follow the steps to run this project as well.


### :hammer_and_wrench: Installing

Now follow the bellow steps to run project on your machine:

**1.** Clone this repo using `git clone https://github.com/gabrielbarth/mobile-goBarber`. <br />
**2.** Move to the appropriate directory: `cd mobile-goBarber`.<br />
**3.** Run `yarn` to install dependencies.<br />
**4.** Now consider running the follow commands to ports redirect: `adb reverse tcp:9090 tcp:9090` (for using reactotron),`adb reverse tcp:3333 tcp:3333` and `adb reverse tcp:8181 tcp:8181` (for physical device) <br />
**6.** Run `react-native run-android` and after `react-native start` to run the app on your device or simulator.<br/>

## :bulb: :handshake: Contributing
Please feel free to contributing and submitting pull requests.

## :pray: Acknowledgments
* Rocketseat team
* Rocketseat community

## :thinking: Any question?
**Contact me on my social medias:**<br>
[LinkedIn](https://www.linkedin.com/in/gabriel-barth-silv%C3%A9rio-6081ba153/) <br>
[Instagram](https://instragram.com/gb1.dev) <br>
[YouTube](https://www.youtube.com/channel/UCmA_19d5L3WTFdDfwQ6Uenw) <br>
[Discord](https://www.wikihow.com/Add-Friends-on-Discord) (**gabrielbarth1#0492**)<br>
Or send me an email :incoming_envelope:: gabrielbarth.dev@gmail.com.
<br>
<br>
<p align="center">
  Made with ♥ by <a href="https://gabrielbarth.com/">Gabriel Barth</a>
</p>
