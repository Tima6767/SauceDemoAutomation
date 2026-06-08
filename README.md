# SauceDemoAutomation

Automated UI tests for SauceDemo website using WebdriverIO.

## Technologies

- JavaScript
- WebdriverIO
- Mocha
- Page Object Model (POM)

## Project structure

test

- pageobjects
  - login.page.js
  - inventory.page.js
  - cart.page.js

- specs
  - test.e2e.js

## Implemented test cases

1. Checkout without products

Steps:
- Login as standard user
- Open cart page
- Click Checkout button
- Verify error message

## How to run tests

Install dependencies:

npm install

Run tests:

npx wdio run ./wdio.conf.js
## Bug found

Checkout is available with empty cart.

Expected result:

User stays on Cart page and error message "Cart is empty" is displayed.

Actual result:

User is redirected to Checkout Information page without any error message.