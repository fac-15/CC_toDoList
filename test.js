var test = require("tape");
var logic = require("./logic");

test("tape is working", function(t) {
  t.deepEquals(1, 1, "1 should equal 1");
  t.end();
});

test("clone array of objects", function(t) {
  var actual = logic.cloneArrayOfObjects([{}]);
  var expected = [{}];
  t.deepEquals(actual, expected, "should clone array of objects");
  t.end();
});

test("adding a todo object to an empty array", function(t) {
  var actual = logic.addTodo([], { description: "abc", done: false, id: 1 });
  var expected = [{ description: "abc", done: false, id: 1 }];
  t.deepEquals(actual, expected, "should add object to array");
  t.end();
});

test("adding a todo object to an array", function(t) {
  var actual = logic.addTodo([{ description: "abc", done: false, id: -1 }], {
    description: "def",
    done: false,
    id: 2
  });
  var expected = [
    { description: "abc", done: false, id: -1 },
    { description: "def", done: false, id: 2 }
  ];
  t.deepEquals(actual, expected, "should add object to array");
  t.end();
});

test("test id in addTodo", function(t) {
  var actual = logic.addTodo([{ description: "abc", done: false, id: -1 }], {
    description: "def",
    done: false,
    id: 3
  });
  var expected = [
    { description: "abc", done: false, id: -1 },
    { description: "def", done: false, id: 3 }
  ];
  t.deepEquals(actual, expected, "should add object with id");
  t.end();
});

test("test createTodo", function(t) {
  var actual = logic.createTodo("abc");
  var expected = { description: "abc", done: false, id: 4 };
  t.deepEquals(
    actual,
    expected,
    "should create object with description, done and id keys"
  );
  t.end();
});

test("filter to delete", function(t) {
  var actual = logic.deleteTodo(
    [{ description: "abc", done: false, id: 1 }],
    1
  );
  var expected = [];
  t.deepEquals(actual, expected, " should delete object to array");
  t.end();
});

test("filter to delete specic obj", function(t) {
  var actual = logic.deleteTodo(
    [
      { description: "abc", done: false, id: 1 },
      { description: "def", done: false, id: 2 }
    ],
    1
  );
  var expected = [{ description: "abc", done: false, id: 2 }];
  t.deepEquals(actual, expected, " should delete object to array");
  t.end();
});

test("mark as done", function(t) {
  var actual = logic.markTodo([{ description: "abc", done: false, id: 1 }], 1);
  var expected = [{ description: "abc", done: true, id: 1 }];
  t.deepEquals(actual, expected, " should toggle value of done to true");
  t.end();
});

test("mark as not done", function(t) {
  var actual = logic.markTodo([{ description: "abc", done: true, id: 1 }], 1);
  var expected = [{ description: "abc", done: false, id: 1 }];
  t.deepEquals(actual, expected, " should toggle value of done to false");
  t.end();
});
  
test("generateID", function(t) {
  let actual = logic.generateID();
  let expected = 5;
  t.equals(actual, expected, "should generate unique ID number");
  t.end();
});

test("create todo", function(t) {
  var actual = logic.createTodo("abc");
  var expected = { description: "abc", done: false, id: 6 };
  t.deepEquals(actual, expected, " should create description, done and id");
  t.end();
});
