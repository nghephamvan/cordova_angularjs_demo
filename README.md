# Create project [Cordova](https://cordova.apache.org) using [Angular JS](https://github.com/angular/angular-cli)

## Table of Contents

* [Download and install Node.js](#download-and-install-Node.js)
* [Install the Angular CLI](#install-the-angular-cli)
* [How to do](#how-to-do)

## Download and install Node.js
On installation you should be able to invoke node and npm on your command line.
* on OS X and Linux:
```bash
sudo npm install -g cordova
```

* on Windows:
```bash
npm install -g cordova
```

`Note: "-g" is install global` 

## Install the Angular CLI
Install the Angular CLI, if you haven't already done so.
```bash
npm install -g @angular/cli
```

## How to do
### Step 1: Create project demo 'Cordova' by command line
```bash
cordova create [path-name] [domain-style] [project-name]
```

Example: >cordova create demo vn.com.pvnghe Helloworld

### Step 2: Create project demo 'Angular' by command line
`Note: create project [Angular] base on [Cordova]. You should back-up file pacage.json`

```bash
ng new [path-name]
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

### Step 5: Run angular build
```bash
ng build
```
### Step 5: Cordova platform add browser and run in browser
Add platform browser
```bash
cordova platform add brower
```

Run platform browser
```bash
cordova run brower
```

### Step 6: Cordova platform add android and run build

#### Installing the Requirements
##### Java Development Kit (JDK) and Install [Android Studio](https://developer.android.com/studio/index.html).
Add platform android
```bash
cordova platform add android
```

Run platform android
Open project platform android by Android Studio

##### Update source for android
```bash
cordova platform update android
```

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
