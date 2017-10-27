# frame-interval

Execute a function n-times per second, on requestAnimationFrame

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
