# Tjekvik Frontend UI recruitment task
Welcome dear candidate for Frontend/UI developer position at Tjekvik. We’re very
happy you found our position interesting and want to work with us.

The task is to implement a ”language selection” feature for our product
interface. It’s exactly the task taken out from our recent sprints, so this is
kind of work you’d expect to deal with at your daily job.

## Objective
In this repository you'll find `Multi Language Feature.xd` file. Your objective
is to implement this feature UI. This means adding missing stuff to the topbar,
then showing the language selection screen after clicking on the flag in top
right corner.

After clicking on a language flag user should be redirected to root page,
don't worry about actual logic behind it – just going back to the first screen
is enough.

Please keep in mind that main focus of this task is solid CSS code and how
things look.

### Tips
- We'll look at how things look in the browser using 1600x900px screen
  resolution, just like in provided mockup.
- We'll look at the code, how it's structured, how easy it's to get familiar
  with it and change something.
- We'll definitely appreciate any glowing-shiny-bonusy stuff that shows your
  approach :-)
- We'll look at HTML structure
- And last but not least we'll look at JS code itself, you won't get minus
  points for bad things in it but you may get some bonus ones here

## What’s in the repo?
So, this repository is just bootstraped react application created with
`create-react-app`. Most interesting files for you, are:

- `src/App.js` and `src/App.css` just to start things off I added some initial
  HTML & CSS for you. Please feel free to refactor and change it however you
  feel makes sense. It’s just to start things off.

- `ui-screens/Multi Lang Feature.xd` this is AdobeXD project exported by our designer that
  we’d like you to code. This is provided exactly how our developers get the
  designs from UX guy. If you didn't work with AdobeXD before you can download
  it from: https://helpx.adobe.com/xd/get-started.html

- if you rather not installing AdobeXD for this, you can also find all the
  screens exported to `.png` files in `ui-screens` directory.

## Running the app
- At first you'll need to install all the dependencies with `yarn install`
- Then start local development with `yarn start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\ See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

Adding any tests is not necessary for this task, but the runner is available
if you wanna do it.

## Learn More
You're always welcome to add, play and do whatever you think is reasonable with
the repo. If you want to learn more about how is this repo setup you can check
[Create React App
documentation](https://facebook.github.io/create-react-app/docs/getting-started).

And in case of any problems or issues feel free to reach me at
jakub@tjekvik.com.

# Good luck & have fun :-)
