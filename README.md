# Currency Exchanger

#### By E. Luckie ☀️

#### A webpage where users are able to enter an amount of money from a specified currency (that they choose) and see the converted rate in various other currencies of their choosing.

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
* DotEnv
* Currency Exchanger API

## Description

This webpage utilizes API calls in order to convert currency. There is 160 supported currencies for user to choose from a drop-down list. Users must enter a whole number in the "amount to convert" field, and choose a currency to convert to and from. When user clicks convert, they are shown what their converted amount is in the new currency, as well as the latest published conversion rate between the specified currencies. 

If user wishes to see the full list of supported currencies and the countries that use them, they're able to click on the text "click to see supported currencies". This displays a full list of all 160 supported conversions as well as a button to then hide the list once they're done.

There is also a reset button which resets the form, clears the screen of any current conversions, and hides the list of supported currencies if displayed. 

[Click here](https://eluckie.github.io/currency-exchanger/) to view the live version of this Currency Exchanger webpage and view the full list of supported currencies available for conversion.

## Setup/Installation Requirements
#### this application requires an API key to function properly
* Clone this repository to your desktop
* Click this link to navigate to [the currency exchange API](https://www.exchangerate-api.com/)
* Locate the button at the top right corner that says _Get Free Key_
* Enter your email address & a password and click _Accept Terms & Create API Key_
* You will then be taken to a page titled "Dashboard" that displays your API key under a section called **API Access**. Copy this entire key as this will be the text you input in your .env file


_Note that there is a limited amount of API calls you're able to make with this free key. You are able to keep track of your remaining calls on the same "Dashboard" page under **API Request Quota Usage**_


* Navigate to the top level of this cloned directory in your computer's terminal
* create a file named ".env" in the top level of this directory
* In the text of the .env file, include **API_KEY={your API key}** where _{your API key}_ is replaced with the actual numbers of your API key
* Navigate back to the top level of this directory in your computer's terminal
* Run the command **_$ npm install_** in your terminal to install the necessary packages
* Run the command **_$ npm run start_** in your terminal to build the webpage. This will also open a live server in your browser so that you will be able to see any changes you make to the code in real time.
#### Be aware that if you wish to push your project back to GitHub, your .gitignore file will need to be committed first, and separately, in order to keep your API key private

## Known Bugs

* No known bugs.

## License

MIT License

Copyright (c) 2023 Elizabeth Luckie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
