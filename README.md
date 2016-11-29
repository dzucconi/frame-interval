# frame-interval

```javascript
import fps from 'frame-interval';

const FPS = 30;

fps(requestAnimationFrame)(30, frame => {
  document.body.innerHTML = `${Math.floor(frame / FPS)} ${frame}`
})();
```
