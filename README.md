# Weather API App
## Table of Contents
  1. [Objectives](#objective)
  2. [Prerequisites](#prerequisites)
  3. [Step by step to clone](#clone)
  4. [Things to install to run the project](#install)
  5. [Setting up your api key](#apiKey)
  6. [How to run this](#run)
  7. [What you should see](#see)
  8. [Some nice to haves in the future](#nice)

___
## OBJECTIVE: <a name="objective"></a>
We will be using the [Open Weather API](https://openweathermap.org/api) and the [Joke API](https://v2.jokeapi.dev/) as well. 
___
## Prerequisites <a name="prerequisites"></a>
- [ ] API
- [ ] OauthToken
- [ ] You do need your own API token for the weather app, you will not need one for the jokes API.
___
## Clone your project <a name="clone"></a>
  `git clone https://github.com/wk642/weather-api.git`
## Things to install to run the project <a name="install"></a>
- [ ]`npm install`
- [ ]`npm install dotenv`
- [ ]`npm install express`
- [ ]`npm install cors`
 

## Setting up your api key <a name="apiKey"></a>
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
9. When you do git status, you should not see the .env file, but you should see .gitignore. 

## How to run this <a name="run"></a>
 - For backend  
  `npm run server`  
  
    To make sure the connection is working   
    Go to `localhost:5000/api`  
      
    To see the weather data in JSON   
    Go to `localhost:5000/weather/:city`  
    Please replace `city` with your own city
      
    To see the weather data in JSON   
    Go to `localhost:5000/jokes`  

  - For Front End  
  `npm run dev`  
    Go to `http://localhost:5173/`

## What you should see <a name="see"></a>
Here's a demo:
![weather-api-demo](https://github.com/user-attachments/assets/ddc67eb2-0ece-4a70-b2e1-7baedadbd641)

What the backend looks like:
<img src="./src/assets/back-end.png"/>
## Some nice to haves in the future <a name="nice"></a>
- [ ] Change the theme of the website based off of the wheather or city
- [ ] Add an avatar of some sort that shows what to wear - inspred by my kiddo that likes to "check the weather" and then dress the opposite.
