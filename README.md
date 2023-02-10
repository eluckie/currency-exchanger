# Currency Exchanger

#### By E. Luckie ☀️

#### A webpage where users are able to enter an amount in USD and see the converted rate in various other currencies.

## Technologies Used

* HTML
* CSS
* JavaScript
* Markdown
* Git
* ESLint
* Postman
* npm
* node.js
* webpack
* .env
* Currency Exchanger API

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

[Click here](https://eluckie.github.io/currency-exchanger/) to view the live version of this Currency Exchanger webpage.

## Setup/Installation Requirements

* Clone this repository to your desktop
#### this application requires an API key to function properly
* Click the link to navigate to [the currency exchange API](https://www.exchangerate-api.com/)
* Locate the button at the top right corner that says _Get free key_
* Enter your email address & a password and click _Accept terms & create API key_
* You will then be taken to a page titled "Dashboard" that displays your API key under a section called **API Access**. Copy this entire key as this will be the text you input in your .env file
* _Note that there is a limited amount of API calls you're able to make with this free key. You are able to keep track of your remaining calls on the same "Dashboard" page under **API Request Quota Usage**_
* Navigate to the top level of this cloned directory in your computer's terminal
* create a file named ".env" in the top level of this directory
* In the text of the .env file, include **API_KEY={your API key}** where _{your API key}_ is replaced with the actual numbers of your API key
* Navigate back to the top level of this directory in your computer's terminal
* Run the command "$ npm install" to install the necessary packages
* Run the command "$ npm run start" in your terminal to build the webpage. This will also open a live server in your browser so that you will be able to see any changes you make to the code in real time.
#### Be aware that if you want to push your project back to GitHub, your .gitignore file will need to be pushed first, and separately, in order to keep your API key private

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

MIT License

Copyright (c) 2023 Elizabeth Luckie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
