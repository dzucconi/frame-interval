# frame-interval

Execute a function n-times per second, on requestAnimationFrame

## Installation

```
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
