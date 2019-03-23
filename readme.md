# microdirne

**Micro service creation wizard for NodeJS**

[![](https://img.shields.io/npm/v/mikrodirne.svg)](https://www.npmjs.com/package/mikrodirne)

## 1. Introduction

mikrodirne helps you create micro service in nodejs. It creates the folder structure and imports required packages.

Folder Structure:

```
- src/
-- src/controllers/
-- src/models/
-- src/repositories/
-- src/services/
- bootloader.js
- config.json
- test/
-- test/controllers/
-- test/repositories/
-- test/services/
```

## 2. Dependencies

Project has four dependencies:

-   fs-extra
-   express
-   mocha
-   injectbul

## 3. Installation

```
npm i microdirne
```

## 4. Usage

Full usage of mocha: https://github.com/mochajs/mocha
Full usage of express: https://github.com/expressjs/express
Full usage of injectbul: https://github.com/muhammedfatih/injectbul

To create a project with microdirne you should first install microdirne package on your project.

```
npm i microdirne
```

In order to start your project you need to input command below:

```
npm run init
```

Your folder structure, and example data, will be ready on your project folder now. You can examine how the system works.

Project has config.json which contains some configurations for your project. Basically you need to set port and injection informations. If your project needs something more, you can put them here.

On index.js, you can set routes and specify route operations.

You can create your controllers under the src/controllers folder, services under the src/services, repositories under the src/repositories and models under the src/models. You can inject your injections with help of the injectbul package.

Tests are under test folder with their grouping operand such as controllers, repositories, services. Names can be given as xController.spec.js or xService.spec.js. In order to run unit tests:

```
npm run test
```
