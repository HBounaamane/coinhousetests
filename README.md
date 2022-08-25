# WebdriverIO with Cucumber E2E Tests
<p align="center">
    <a href="https://github.com/HBounaamane/coinhousetests/actions/workflows/ci.yaml">
        <img alt="Build Status" src="https://github.com/HBounaamane/coinhousetests/actions/workflows/ci.yaml/badge.svg?branch=feat%2Fadd-coinHouse-tests">
    </a>
</p>

## Introduction
This is a simple test project using [webdriverIO](https://webdriver.io/docs/api) with [cucumber](https://cucumber.io/docs/guides/api-automation/?lang=java) framework to launch simple tests on coin house site


<p align="right">
    <a href="https://webdriver.io/">
        <img alt="WebdriverIO" src="https://webdriver.io/assets/images/robot-3677788dd63849c56aa5cb3f332b12d5.svg" width="40">
    </a>
</p>

## E2E Trigger Rules

The tests are triggered in the github Actions pipeline: 

1. Each time a push on HBounaamane/coinhousetests project occurs on dev or master branch
2. Each time a PR is created 
3. Nightly on schedule with cron `00 22 * * 1-5`


## SETUP

1. Open a terminal command
2. Clone this repo using :
```bash 
git clone https://github.com/HBounaamane/coinhousetests.git
```
3. install dependencies using the script:
```bash 
npm run setup
```
4.run tests using the script:
```bash 
npm run test
```

## Html Test report 
After running tests, the html reporter is generated in the folder `./report/reports/index.html`

## COMMANDS

```bash
npm run test                       # to launch all test in feature folder
npm run setup                      # to install all dependecies
```
