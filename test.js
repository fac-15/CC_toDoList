var test = require('tape');
var logic = require('./logic');

test("tape is working", function(t) {
  t.deepEquals(1, 1, "1 should equal 1");
  t.end();
});

test('clone array of objects', function(t) {
  var actual = logic.cloneArrayOfObjects([{}]);
  var expected = [{}];
  t.deepEquals(actual, expected, "should clone array of objects");
  t.end();
});


test('adding a todo to an empty array', function(t) {
  var actual = logic.addTodo([], {a: 1});
  var expected = [ { description: { a: 1 }, done: false, id: 1 } ]
  t.deepEquals(actual, expected, "should add object to array");
  t.end();
});

test('adding a todo to an array', function(t) {
  var actual = logic.addTodo([{a: 1, id: -1}], {b: 2});
  var expected = [{a: 1, id: -1}, { description: { b: 2 }, done: false, id: 2 } ]
  t.deepEquals(actual, expected, "should add object to array");
  t.end();
});

test('test id', function(t) {
  var actual = logic.addTodo([{id: -1}], {a: 1});
  var expected = [{id: -1}, { description: { a: 1 }, done: false, id: 3 }]
  t.deepEquals(actual, expected, "should add id to new object");
  t.end();
});

test('adding a todo', function(t) {
  var actual = logic.addTodo([], {});
  var expected = [{ description: {}, done: false, id: 4 }]
  t.deepEquals(actual, expected, "should add object to array");
  t.end();
});

test('filter to delete', function(t){
  var actual = logic.deleteTodo([{a: 1, id: 1}], 1);
  var expected = [];
  t.deepEquals(actual, expected, ' should delete object to array');
  t.end();
});

test('map to mark', function(t){
  var actual = logic.markTodo([{a: 1, id: 1}], 1);
  var expected = [{a: 1, id: 1, done: true}];
  t.deepEquals(actual, expected, ' should mark object to array');
  t.end();
});

test('create todo', function(t){
  var actual = logic.createTodo('grocery shopping');
  var expected = {description: 'grocery shopping', done: false};
  t.deepEquals(actual, expected, ' should create description');
  t.end();
});