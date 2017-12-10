# frame-interval

## What is this?

A library that allows you to limit the execution of `requestAnimationFrame` to n-frames per second for some value of n.

## Why should I use this?

* You want a `requestAnimationFrame` interface which runs at a lower speed or is bounded at some upper limit.

## Installation

```bash
yarn add frame-interval
# or
npm i frame-interval --save
```

## Usage

```javascript
import fps from 'frame-interval';

const FPS = 30;

fps(requestAnimationFrame)(FPS, frame => {
  document.body.innerHTML = `${Math.floor(frame / FPS)} ${frame}`;
})();
```

The default export accepts some callback accepting function. You'll likely use `requestAnimationFrame`, but can polyfill if necessary.

The returned function accepts
* a framerate
* a function to execute on every tick
* and optionally some predicate which allows you to conditionally pause execution of the tick.

```javascript
let stopped = false;

fps(requestAnimationFrame)(24, () => {
  if (someStopCondition) {
    stopped = true;
    console.log('Logs a single time');
  } else {
    console.log('Logs 24 times per-second until someStopCondition is met');
  }
}, () => stopped)();
```
