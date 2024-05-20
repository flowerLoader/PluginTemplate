<h1>Flower Loader Plugin Template</h1>

![Static Badge](https://img.shields.io/badge/Language-Typescript_ESM-blue?style=for-the-badge&logo=typescript)

[![License](https://img.shields.io/badge/License-Creative_Commons_0-yellowgreen?style=for-the-badge&logo=creativecommons)](https://creativecommons.org/public-domain/cc0/)

**Flower Loader** is a Plugin loader and detour manager for Node.js applications. With Flower Loader, you can easily manage and develop Plugins. This repository contains the Template Plugin to help you get started modding Creator of Another World. It is built with ESBuild and is source-available under the Creative Commons Zero license.

<h2> Table of Contents </h2>

- [Building Your First Plugin](#building-your-first-plugin)
  - [Prerequisites](#prerequisites)
  - [Create a new project](#create-a-new-project)
  - [Clone your new repo locally](#clone-your-new-repo-locally)
  - [Change your Plugin's name and META](#change-your-plugins-name-and-meta)
  - [Install required packages](#install-required-packages)
  - [Do a test build](#do-a-test-build)
- [Final Words](#final-words)


## Building Your First Plugin

### Prerequisites
- [Git](https://git-scm.com/downloads)
- [NPM](https://nodejs.org/en/download/package-manager)
- ESBuild (installed through NPM for you)

### Create a new project
In the top right of the [Template Repository](https://github.com/flowerLoader/plugintemplate) click `Use This Template` and then create a new repository. The tags on this cloned repo will be how [Flower CLI](https://github.com/flowerLoader/tool) adds your plugin to the install command and the name you use for the repo will be the ID users input into the install command so choose something simple but descriptive.

### Clone your new repo locally
Use `git clone <your repo here>` to clone your repo locally onto your computer. Inside the plugin directory, edit the package.json and change the following fields:
- **Name**: change this to be the same as your plugin's GUID in the META object.
- **Version**: You probably want this to read 1.0.0 for your first release, keep it in sync with your plugin's version in the META object, too.
- **Repository**: Change this to a link to your cloned plugin's repository
- **Author**: Give yourself credit here instead of Robin
- **License**: CC-0-1.0 is a "no license" style of license. You probably want to change this unless you _really_ don't care at all how other users use your plugin
- **Bugs**: This should point to your cloned repo's issue page
- **Homepage**: This can be any website. If you aren't sure just point to your repo's readme like the default does

### Change your Plugin's name and META
Now that the package.json is up to date, its time to work with the main plugin file: `flowerteam.plugintemplate.ts`. Your first move should be to rename that file to be something different. We suggest using the same format as your **Name** field from the package.json which will also be your GUID. This typically follows the `<TeamName>.<ProductName>` format. Once you've named the file, open it up in your IDE and edit the META object.

```ts
export const META: FlowerMeta =
{
    GUID: "flowerteam.plugintemplate",
    VERSION: "1.2.0",
    NAME: "Flower Plugin Template",
    ENABLED: true
};
```

Some of those fields look familiar right? Its best practice for your GUID to match both the **Name** from the package.json and your filename. The **version** here should also match your package.json version. Finally, **NAME** can be nearly anything you want, just don't make it excessively long, please, and **ENABLED** should generally be `true`. If a user wants to disable your mod they can set it to `false`. 

### Install required packages
This step is easy. Open your terminal in the plugin's directory on your computer and simply let NPM do the work for you with `npm install`

### Do a test build
If you are using VSCode, you can just press F1 and type build and select "Run Build Task" and the default build task will output the test plugin to your `./build/<pluginname>`. Now you need only move this file into your /flower-plugins/ folder in the game directory to test it and you should see flower report loading your plugin followed shortly by your plugin reporting it has received the `Awake()` event. Great work!

## Final Words
Your plugin will be available for download from the github repository you cloned the template into. Don't forget to edit the Readme.md file to make it more unique and tell users what your plugin does. When you edit your plugin, you'll need to commit to your repo in order for users to receive updates. By default, the .gitignore file is setup to ignore the /build/ directory because users of Flower CLI will download and compile their own versions of your plugin. For more information about how Flower CLI works, read up on the [Flower CLI repository](https://github.com/flowerLoader/tool)