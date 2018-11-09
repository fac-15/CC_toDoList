// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd
var order;
var todoFunctions = {
  
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  // this will take a description, then convert it to an object
  createTodo: function(str){
    return {id:todoFunctions.generateId(), description: str, done: false}
  },

  addTodo: function(todos, newTodo) {

    var newTodo = this.createTodo(newTodo);
    return this.cloneArrayOfObjects(todos).concat(newTodo);

    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },
  deleteTodo: function(todos, idToDelete) {
    return this.cloneArrayOfObjects(todos).filter(todo => todo.id !== idToDelete)

    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
  },
  markTodo: function(todos, idToMark) {
    return this.cloneArrayOfObjects(todos).map(todo => {

      // todo = clicked AND already checked done, remove done
      if(todo.id == idToMark && todo.done == true){
        return {...todo, done: false}
      }
      // todo = clicked OR already checked done, add done
      else if(todo.id == idToMark || todo.done == true){
        return {...todo, done: true}
      }
      // else, must be false
      else {
        return {...todo, done: false}
      }
    })

    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
  },
  sortFunction: function(todos) {
    // this function feeds in to sortTodos - keep it pure hopefully
    // - sort by ID
    // - only sorts once so far (just reverses order)
    order = !order;
    return this.cloneArrayOfObjects(todos).sort(function(a, b) { 
      if (order) {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
      
    });
  },
  sortTodos: function(todos, sortFunction) {

    // works similar to addTodo
    var sortedTodos = this.sortFunction(todos);
    return this.cloneArrayOfObjects(sortedTodos);

    // stretch goal! Do this last
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
