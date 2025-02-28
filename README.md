<div style="background-color: rgb(255, 179, 0); width: 15%; border-radius: 10px; text-align: center; color: rgb(39, 57, 47); display:inline-block;">React</div>
<div style="background-color: rgb(35, 245, 20); width: 15%; border-radius: 10px; text-align: center; color: rgb(39, 57, 47); display:inline-block;">HTML</div>
<div style="background-color: rgb(20, 148, 245); width: 15%; border-radius: 10px; text-align: center; color: rgb(39, 57, 47); display:inline-block;">CSS</div>
<div style="background-color: rgb(207, 191, 255); width: 15%; border-radius: 10px; text-align: center; color: rgb(39, 57, 47); display:inline-block;">JS</div>
<div style="background-color: rgb(241, 88, 88); width: 15%; border-radius: 10px; text-align: center; color: rgb(39, 57, 47); display:inline-block;">API</div> 
<br></br>  

# Weather API App
## Table of Contents
  1. [Objectives](#objective)
  2. [Prerequisites](#prerequisites)
  3. [Step by step to clone](#clone)
___
## OBJECTIVE: <a name="objective"></a>
We will be using the [Open Weather API](https://openweathermap.org/api) and the [Joke API](https://v2.jokeapi.dev/) as well. 
___
## Prerequisites <a name="prerequisites"></a>
- [ ] API
- [ ] OauthToken
- [ ] You do need your own API token for the weather app, you will not need one for the jokes API.
___
## Clone your project
  `git clone https://github.com/wk642/weather-api.git`
## Things to install to run the project 
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
9. When you do git status, you should not see the .env file, but you should see .gitignore. 

## How to run this
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

## What you should see
Here's a demo:

What the backend looks like:
<img src="./src/assets/back-end.png"/>