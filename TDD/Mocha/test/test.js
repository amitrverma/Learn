var assert = require('chai').assert;
var expected, current;
before(function(){
  expected = ['a', 'b', 'c'];
})
describe('String#split', function(){
  beforeEach(function(){
   current = 'a,b,c'.split(',');
  })
  it('should return an array', function(){
    assert(Array.isArray(current));
  });
})