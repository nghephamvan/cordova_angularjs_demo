# Create project [Cordova](https://cordova.apache.org) using [Angular JS](https://angular.io)

## Table of Contents
* [Overview: NodeJS, Angular, Cordova](#overview)
* [How to do](#how-to-do)

## Overview
### npm
npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.

### NodeJS
Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://developers.google.com/v8/). Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, [npm](https://www.npmjs.com), is the largest ecosystem of open source libraries in the world.

### AngularJS
Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop

### Cordova
Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development.
#### Architecture Cordova
![](https://cordova.apache.org/static/img/guide/cordovaapparchitecture.png)

## How to do
### Install Cordova
On installation you should be able to invoke node and npm on your command line.
```bash
npm install -g cordova
```

`Note: "-g" is install global` 
### Install the Angular CLI
Install the Angular CLI, if you haven't already done so.
```bash
npm install -g @angular/cli
```

### Create project 
### Step 1: Create project demo 'Cordova' by command line
```bash
cordova create [path-name] [domain-style] [project-name]
```

Example: >cordova create demo vn.com.pvnghe Helloworld

### Step 2: Create project demo 'Angular' by command line
`Note: create project [Angular] base on [Cordova]. You should back-up file pacage.json`
- Normal:
```bash
ng new [path-name]
```
- Using scss:
```bash
ng new [path-name] --style=scss
```
or 
```bash
ng set defaults.styleExt scss
```

### Step 3: Update config
- Update config in `package.json`:
```bash
"main": "index.js";
```

- Update config in `.angular-cli.json` for build cordova source:
```bash
 "apps": [
    {
        "outDir": "./www",
    },
    {
        ...
    },
    ...
 ]
```
- Update config in `tsconfig.json`
```bash
{
    "compilerOptions": {
        "baseUrl": "src",
        ....
    }
}
```

### Step 4: Install more lib for 'ng build'
```bash
npm install @angular-devkit/core
```
To index.html add this script '<script type=”text/javascript” src=”cordova.js”></script>'

Copy dist folder content to www folder. open the 'index.html' file and change <base>. [pulse's link](https://www.linkedin.com/pulse/angular-2-build-your-mobile-app-using-cordova-eran-hadad)
```bash
<base href="/"> to <base href="./"> 
```
### Step 5: Run angular build
```bash
ng build
```
### Step 6: Cordova platform add browser and run in browser
Add platform browser
```bash
cordova platform add browser
```

Run platform browser
```bash
cordova run browser
```
Update source for browser
```bash
cordova platform update browser
```

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
