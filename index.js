module.exports = function(raf) {
  return function(fps, tick, stop) {
    var delta, now;
    var then = Date.now();
    var frame = 0;
    var interval = 1000 / fps;

    stop = stop || function() { return false; };

    function draw() {
      raf(function() {
        if (stop()) return;

        return draw(tick);
      });

      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);
        tick(frame++);
      }
    }

    return draw;
  };
};
