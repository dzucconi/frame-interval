module.exports = function(raf) {
  return function(fps, tick) {
    var delta;
    var now;
    var then = Date.now();
    var frame = 0;
    var interval = 1000 / fps;

    function draw() {
      raf(function() {
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
