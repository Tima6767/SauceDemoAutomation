# SauceDemoAutomation

Automated UI testing project for SauceDemo website using WebdriverIO.

## Technologies

- JavaScript
- WebdriverIO
- Mocha
- Chai / WebdriverIO Expect
- Page Object Model (POM)


## Project structure

```
test
│
├── pageobjects
│   ├── Login.Page.js
│   ├── Inventory.Page.js
│   ├── Cart.Page.js
│   └── Checkout.Page.js
│
└── specs
    └── test.e2e.js

wdio.conf.js
package.json
README.md
```


## Implemented test cases

### 1. Checkout without products

Steps:

- Login as standard user
- Open cart page
- Click checkout button
- Verify checkout validation

Status: Failed due to application bug


### 2. Valid login

Steps:

- Open login page
- Enter valid username
- Enter valid password
- Click login button
- Verify inventory page is opened

Status: Passed


### 3. Login with invalid password

Steps:

- Open login page
- Enter valid username
- Enter invalid password
- Click login button
- Verify error message

Status: Passed


### 4. Login with locked out user

Steps:

- Open login page
- Enter locked out username
- Enter valid password
- Click login button
- Verify locked user error message

Status: Passed


### 5. Add product to cart

Steps:

- Login as standard user
- Add product to cart
- Verify cart badge

Status: Passed


### 6. Saving cart after logout

Steps:

- Login as standard user
- Add product to cart
- Logout
- Login again
- Verify product remains in cart

Status: Passed


### 7. Product sorting

Covered:

- Price low to high
- Price high to low
- Name A-Z
- Name Z-A

Status: Passed


### 8. Valid checkout

Steps:

- Login as standard user
- Add product
- Open cart
- Complete checkout process
- Verify successful order

Status: Passed


### 9. Logout

Steps:

- Login as standard user
- Open burger menu
- Click logout
- Verify login page is displayed

Status: Passed


### 10. Footer links

Covered:

- Twitter link
- Facebook link
- LinkedIn link

Status: Passed



## How to run tests

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npx wdio run ./wdio.conf.js
```


## Known bugs

### Checkout available with empty cart

Expected result:

User stays on cart page and error message is displayed:

```
Cart is empty
```

Actual result:

User can continue checkout process with empty cart.

Bug is documented in GitHub Issues.