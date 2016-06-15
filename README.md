JavaScript Logging Lab
---

## Objectives

1. Practice using `console.log()`
2. Practice using `console.error()`
3. Practice using `console.warn()`


## Introduction

Welcome to your first JavaScript lab! You'll notice a few new things in this lesson that we haven't encountered before. Don't worry, we'll walk you through them.

### Why test?

In science, when we want to run an experiment, we need to develop a hypothesis and we need to test it. So if we want to experiment with whether adding salt to ice water makes it hotter or colder, we need to design an experiment that controls for all of the other variables: we need to _isolate_ our experiment from parts of its environment that aren't relevant to what we hope to test.

In programming, tests pick up on the discipline's computer science background. We run tests to verify that our programs behave the way we think they do. Tests help us identify bugs, and they give us a sense of the health of our applications.

On Learn, we use tests as teaching tools. Just like in a normal coding environment, we use tests to describe the program's behavior. Unlike in a normal coding environment, you, not we, are in charge of getting the tests to pass — that is, making the app behave like we expect it to.

### Structure

The structure of this lab — where its files and folders are located — looks roughly like the following:

``` shell
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── index.js
├── node_modules/
├── package.json
└── test
    └── index-test.js
```

All labs will more or less have the same structure. (And READMEs, for that matter, will still have CONTRIBUTING.md, LICENSE.md, and README.md files.)

`index.js` might be called something else (something more descriptive) in other labs, and so `test/index-test.js` would be renamed accordingly. But `index.js` is also descriptive in its own right, defining something of an entry point for finding one's way around the app. This is often the file where you will write your code. (Later on, we'll introduce `index.html` and `index.css` — you'll have to update or refer to these files sometimes, too!)

### Code-along

For now, open up `index.js` in your text editor. You should see, well, nothing. We'll fix that soon.

Now upon up `test/index-test.js`. Hey, there's something! What's all of this stuff doing?

At the very top of the file, you'll see

``` javascript
const expect = require('expect')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
```

This might be a bit bewildering, but all we're doing is referencing different _libraries_ that help us run your tests. A library is code that someone else (usually multiple someone elses) wrote for our use. Note that `require` won't work out of the box in the browser. We're actually running our tests in a different _environment_. (Remember the sandbox analogy from earlier? It's just like that.)

A little farther down the page, you'll see

``` javascript
describe('index', () => {
  // there's stuff in here, too
})
```

`describe` is a function provided by our test runner (in this case, we're using [Mocha](https://mochajs.org/)) — it's basically a container for our tests.

Then we have a few chunks like

``` javascript
it('calls console.error()', () => {
  // this is where the tests are!
})
```

Each of these chunks describes a behavior that we expect the main program to implement. As you can see, they describe that behavior pretty carefully — in this example, we know that our main file should call `console.error()` — pretty simple, right?

Don't worry too much yet about what's happening inside these chunks. Sometimes we'll need to do some pretty fancy footwork to test some pretty basic things; other times, and as time goes on, you'll be able to read and understand basically what our tests are expecting.

And that'll be great! These aren't like tests that we all took in school: they're testing behavior, not information. Tests are meant to be as transparent as possible about what they're doing, and as you grow as a programmer, it's important to understand more and more what the aims of tests are.

In some of our tests, you'll see lines like the following:

``` javascript
jsdom({
  src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
})
```

This line reads `index.js` (remember how we said we'd modify that?) and adds its code to the _execution environment_. The "execution environment" is simply where our code runs.

## Running the Tests

To run the tests, simply type `learn test` in the Learn IDE. You should see something like

![failures](https://curriculum-content.s3.amazonaws.com/skills-based-js/console_logging_lab_all_failing.png)

For the moment, all of the tests fail. Let's figure out how to get one of them passing! (The rest will be up to you.)

Let's take the first one. The test description says, "index calls console.error()". So it sounds like, pretty straight-forwardly, like we should _call_ `console.error()` somewhere in `index.js`. "Calling" a function means invoking it, causing it to act. We call functions with parentheses: `console.error` _is_ a function, but `console.error()` is a _call_ to the function.

In `index.js`, add a call to `console.error()` — you can call it with anything you like (as long as the syntax is valid). We're going to go with

``` javascript
console.error("HALP!")
```

Because it seems sufficiently dire.

Anyway, let's run the tests again. In the Learn IDE's terminal, run

``` javascript
learn test
```

We should now see:

![one passing](https://curriculum-content.s3.amazonaws.com/skills-based-js/console_logging_lab_one_passing.png)

Nice! We got the first one to pass!

## A note about spies

You might often see errors like the ones above: `"Uncaught error: spy was not called"`. Spies are little bits of code that keep track of whether or not they were called. We use them to make sure that a function is called when we expect it to be called.

We'll try to rewrite these error messages when possible to be more descriptive about what kinds of calls we expected; but know that sometimes, especially later on, we leave the errors intentionally ambiguous for you to work out.

## Your turn

Now it's your turn — can you follow a flow similar to the one we followed together above to get the remaining to tests to pass?

When all of your tests pass, be sure to run `learn submit` to move on to the next lesson.

## Resources

- [npm](https://npmjs.org)
