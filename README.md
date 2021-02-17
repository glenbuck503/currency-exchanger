# Currency Exchanger

<div align="center">
<img src="https://github.com/glenbuck503.png" width="200px" height="auto" >
</div>
<br>
<br>
<br>

#### This application will convert USD to the selected currency.

#### By Glen Buck

## Description

This application will let users select currency rates from 5 different countries and convert USD to the selected country.

## Retrieving API Key Instructions

- go to https://www.exchangerate-api.com/
- Type in your email address in the box where it says "Your email address" and click "Get Free Key"
- The prompt will take you to a dashboard that will show you your API Key.
- Copy and Paste into clipboard and follow in the structions below under "How to set up .env file"

## Setup/Installation Requirements

- Go to https://github.com/glenbuck503/currency-exchanger
- Go to the middle upper right corner where the green box that says "Code" and click it.
- Copy the HTTPs site to your clipboard.
- Open terminal or bash and get to the directory you want to download the repo to.
- Type into the terminal "git clone command + v if using Mac or control + v is using a PC" and press enter.
- Open the file labeled "index.html" in the directory you just downloaded the repo to.
- Go to the terminal and in the root directory, type in "NPM install".
- You will need to set up your own .env file and add your API Key inside that file.
  Instrucitons on how to setup .env file
  _ Open the project directory in VS Code
  _ Navigate to your terminal and get to your projects root directory.
  _ Type in " touch .env" and hit enter - this will create a .env file in your directory.
  _ Add .env file to .gitignore file. Add API Key in .env file and label it " API_KEY=(your key here).

## Known Bugs

No Known bugs 2/13/2021

If you are using a version of Jest where the coverage directory is not automatically generated, you will need to update package.json file:

`"scripts": {..."test": "jest --coverage"},"jest": { "collectCoverage": true, "coverageReporters": ["html"]},`

## Support and contact details

For contact support, please email Glen Buck <a href = "mailto: glenbuck@gamil.com">Send Email</a>

## Technologies Used

- VS Code
- HTML/CSS
- Git
- Git Hub
- Jquery
- JavaScript
- Node
- Webpack
- .ENV
- API key

### License

23434.554454.22

Copyright (c) 2021 Glen Buck Inc.
