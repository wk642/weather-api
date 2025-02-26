# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# WEATHER API
## Table of Contents
  1. [Objectives](#objective)
  2. [Prerequisites](#prerequisites)
  3. [Step by step to clone](#clone)
___
## OBJECTIVE: <a name="objective"></a>
### We will be using the weather API

___
## Prerequisites <a name="prerequisites"></a>

___
## Clone your project
  `git clone 
## Things to install to run the project 
At the root of the project (so where you cloned it)
- [ ]`npm install`
- [ ]`npm install dotenv`
- [ ]`npm install express`
- [ ]`npm install cors`

At server:
- [ ]`npm install`
- [ ]`npm install dotenv`
- [ ]`npm install express`
- [ ]`npm install cors`

At client:
- [ ]`npm install`
- [ ]`npm install dotenv`
- [ ]`npm install express`
- [ ]`npm install cors`

## Setting up your api key
1. goto [OpenWeatherAPI](https://openweathermap.org/api);
2. Click on [Sign Up](https://home.openweathermap.org/);
3. Set up account with a userName, email and password. 
4. After you are done, wait for an email with your api key in it. 
5. Go back to your code editor. 
6. Create a file called `.env`
7. Inside `.env`  put:
    ```
    WEATHER_API_KEY = YourAPIKey
    ```
8. Goto your .gitignore and add `.env`
9. When you do git status, you should not see the .env file, but you should see .gitignore. Please commit the changes.
___

In order to run the application you need to cd into server, run `node server.js`