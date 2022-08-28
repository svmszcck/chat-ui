# Chat UI

Demo:

https://codesandbox.io/s/github/svmszcck/chat-ui

<br>

<img src="https://i.ibb.co/23sjGr6/Screenshot-2022-08-28-at-09-54-52.png" >

<br>

**Used Technologies:**

- React
- Context API
- Typescript for static type checking
- React Router DOM
- Jest & Testing Library

<br />

# Architecture

I have also separated services & constants & config variables as separate files.

Let me show the folder structure:

```
src
├── __tests__ => unit tests
├── constants => global constant variables
│   └── colors.js
│   └── config.js
│   └── content.js
│   └── general.js
│   └── routes.js
├── assets
├── components => shared, reusable components
│   └── Button
│   └── ChatPanel
│   └── Text
│   └── Header
│   └── History
│   └── Message
│   └── index.js
├── contexts => state management
│   └── GlobalContext
│       └── actions.ts
│       └── provider.ts
│       └── reducer.ts
│       └── index.ts
├── hooks => custom hooks
│   └── useWindowDimensions.ts
├── pages => app screens
│   └── Home
│   └── About
│   └── index.js
├── services => api calls
│   └── messages.ts
├── utils => helper functions
│   └── general.ts
│   └── ui.ts
│   └── text.ts
├── global-types.ts => global types
├── router.tsx => global router

```

# Details

I tried to follow DRY, SOLID principles.

Common(shared) types are in the "global-types.ts" file. Component specific types are directly in the component files.

In order to run all of the tests please do "yarn test". You need to install jest on your local machine.

If you want to run a single test, you can do this: "jest filename.test.js".

<br>
# Pros & Cons

**Pros:**

- I tried to use clean code & sexy UI as much as possible. Without a good design a product won't be able to succeed ;)

- I have used context api instead of state management libraries as this is a small project.

- I have separated the business logic from the UI part(Business logic is in the container files, UI related things are in the view files.)

- I have implemented custom hooks. You can check the "src/hooks" folder :)

- I tried to use as much resuable components as possible. You can check the reusable components in "src/components" folder.

- I have used ES6+ syntax(For example I have preferred async & await instead of promises).

**Cons:**

- Not E2E testing as there wasn't enough time to work on that.

- Not %100 code coverage regarding Unit Testing. However you can check how I am testing the components by checking the implemented tests.

- No feature branchs, regular commits. Normally I should have used feature branchs for the separate features and pushed those changes regularly.

**Anyway, if I had more time I could solve these issues but it's also important to be aware of these right? =)**
