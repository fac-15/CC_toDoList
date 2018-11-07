var test = require('tape');
var logic = require('./logic');

test("tape is working", function(t) {
  t.deepEquals(1, 1, "1 should equal 1");
  t.end();
});



test('clone array of objects', function(t) {
  var actual = logic.cloneArrayOfObjects([]);
  var expected = []
  t.deepEquals(actual, expected, "should clone array of objects");
  t.end();
});


test('adding a todo', function(t) {
  var actual = logic.addTodo([], {a: 1});
  var expected = [{a: 1, id: 1}]
  t.deepEquals(actual, expected, "should add object to array");
  t.end();
});

test('adding a todo', function(t) {
  var actual = logic.addTodo([{a: 1, id: -1}], {b: 2});
  var expected = [{a: 1, id: -1}, {b: 2, id: 2}]
  t.deepEquals(actual, expected, "should add object to array");
  t.end();
});

test('test id', function(t) {
  var actual = logic.addTodo([{id: -1}], {a: 1});
  var expected = [{id: -1}, {a: 1, id: 3}]
  t.deepEquals(actual, expected, "should add id to new object");
  t.end();
});

test('adding a todo', function(t) {
  var actual = logic.addTodo([], {});
  var expected = [{id: 4}]
  t.deepEquals(actual, expected, "should add object to array");
  t.end();
});