// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
  
    var state = [
      { id: -3, description: 'first todo', done: false },
      { id: -2, description: 'second todo', done: false },
      { id: -1, description: 'third todo', done: false },
    ]; // this is our initial todoList
  
    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      
      // console.log(todo);
      
      var itemInfo = todoFunctions.cloneArrayOfObjects(state);
      // console.log(itemInfo);
      // console.log(todo.description);
      // var itemDescription = itemInfo[itemInfo.length-1].description;
      
      var todoNode = document.createElement('li');
      var item = document.createElement('span');

      item.textContent = todo.description;
      todoNode.appendChild(item);


      // add markTodo button
      var markButtonNode = document.createElement('input');
      markButtonNode.setAttribute('type', 'checkbox');
      console.log(todo);
      if(todo.done){
        markButtonNode.checked = true;
      }


      markButtonNode.addEventListener('click', function(event) {

        
        
        
        // event.target.checked = true;
        // console.log(event.target)
        
        // if (todo.done === true) {
        //   console.log('ok');
        //   // markButtonNode.checked
        //   // markButtonNode.removeAttribute('checked');
        //   markButtonNode.setAttribute('checked', '');
  
        //   // markButtonNode.checked = true;
        // }
        
        // console.log(todo.done, markButtonNode);
        // if (markButtonNode.checked) console.log('has attribute checked');
        
        // markButtonNode.checked = true;
        
        
        // else {
        //   console.log('nope');
        //   markButtonNode.removeAttribute('checked');
        //   // markButtonNode.checked = false;
        // }

        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);


        // console.log(todo.done, event.target);

        // if(todo.done === true) {
        //   // console.log(markButtonNode);
        //   event.target.checked = true;
        //   // markButtonNode.checked = true;
        // }


      });
      todoNode.appendChild(markButtonNode);
      
      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.textContent = "x";
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);
  
      return todoNode;
    };
  
    // bind create todo form
    if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // https://developer.mozilla.org/en-US/docs/Web/Events/submit
        // what does event.preventDefault do?
        // what is inside event.target?
        var description = event.target.firstElementChild.value;
  
        // hint: todoFunctions.addTodos
        // var newState = [...newItem]; // ?? change this!
        var newItem = todoFunctions.addTodo(state, description);
        var newState = [...newItem];
        update(newState);
      });
    }
  
    // you should not need to change this function
    var update = function(newState) {
      state = newState;
      renderState(state);
    };
  
    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
  
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });
  
      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);
  })();
  
