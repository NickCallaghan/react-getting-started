# React Getting Started

## Background

The following files takes you throught the steps to followed during the #sta-coding-pals first meetup: **Getting started with React**.

If you want to skip to the finish to the finished app just clone the git repo, install the dependencies and start the dev server.

```
git clone git@github.com:NickCallaghan/react-getting-started.git
cd react-getting-started/
npm i
npm start
```

**There different branches have been set up against this repo if you want to skip to a particular step then just switch to the branch corresponding to each step**

### Prerequisites

- [Node JS](https://nodejs.org/en/) installed (12.18.3 or greater)
- Google Chrome Browser
- Git installed - [Homebrew](https://brew.sh/) is a good option for this on the mac
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en#:~:text=React%20Developer%20Tools%20is%20a,%22%20and%20%22%E2%9A%9B%EF%B8%8F%20Profiler%22.)
- [Visual Studio Code](https://code.visualstudio.com/) (or other code editor)
- Some HTML/CSS/JavaScript knwoledge is recommended before beginning with react. It's possible to learn all at once but it will be a bit of a learning curve. If you know JS already it's also usefull to know ES6 features like arrow functions, destructuring, spread operator & template literals.

### Useful VS Code Extensions

- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Markdown All In One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [TabNine Autocompleter](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Bracket Pair Coloriser](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

_The theme i'm using is [Cobalt 2](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)_

The screensharing session was done on a Mac. Most of what we do should be directly translatable to windows/linux although there may be some minor differences on windows based devices. For example

---

## Setting up a project from scratch

### 1 - Using create react app.

Using create react app will set you up a default starter project with a boilerplate code.

```terminal
mkdir my-project-dir
npx create-react-app my-project-dir
```

Open up the project up in your code editor

---

### 2 - Installing Node Modules

If you are using a git repo which which you have cloned from the internet you will need to install any dependencies. These are listed in the `package.json` file. You can install them by running, from the root of you project:

```
npm i
```

Today we are going to install react boot strap by running:

```
npm install react-bootstrap bootstrap
```

### 3 - Staring the dev server

The react dev server runs a devlopment versions of your app. It has hot reloading so if you chnage the code the app will re-load. From the root of you project run:

```
npm start
```

### 4 - Creating a simple app.

For this session were going to create a **simplified login form** and talk about some key react concepts as we go.
1. Running create react app
2. Install-React-Bootstrap
3. A-Simple-Counter
4. Createing-login-component
5. Passing-props-to-set-user
6. Rendering-components-conditionally





