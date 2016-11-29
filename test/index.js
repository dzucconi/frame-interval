var sinon = require('sinon');
var fps = require('../index');

describe('frame-interval', function() {
  it('needs a test that actually does something...', function() {
    var raf = sinon.stub();
    var draw = sinon.stub();

    raf.called.should.be.false();
    draw.called.should.be.false();

    var start = fps(raf)(30, draw);

    start();

    raf.called.should.be.true();
  });
});
