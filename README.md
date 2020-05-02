# frame-interval

## What is this?

A library that allows you to limit the execution of `requestAnimationFrame` to n-frames per second for some value of n.

## Why should I use this?

- You want a `requestAnimationFrame` interface which runs at a lower speed or is bounded at some upper limit.

## Installation

```bash
yarn add frame-interval
```

## Usage

```ts
import { frameInterval } from "frame-interval";

const FPS = 24;

// constructor FrameInterval(fps: number, callback: FrameIntervalCallback): FrameInterval

// type FrameIntervalCallback = (
//   props?:
//     | {
//         time: number;
//         frame: number;
//       }
//     | undefined
// ) => void;

const fi = new FrameInterval(FPS, ({ frame }) => {
  document.body.innerHTML = `${Math.floor(frame / FPS)} ${frame}`;
});

fi.start();
// ...
fi.stop();
```
