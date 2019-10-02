var todos = ["watch a movie"]; //todos新陣列

window.setTimeout(function() {
    // put all the rest of your JS code from the lecture here

    //問候想要做什麼
    var input = prompt("What would you like to do?");

    while(input !== "quit"){
        //處理input
        if(input === "list"){ //如果是List則印出todos
            listTodos();

        } else if (input === "new"){ //new的話則新增到todos
            addTodo();
            
        } else if (input === "delete"){ //ask for index to be deleted
            delTodo();
        }
        //重複詢問
        input = prompt("What would you like to do?");
    }

    console.log("You quit the app!");

    function listTodos(){
        console.log("**********");
        todos.forEach(function(todo, i) { //forEach , i 代表index
            console.log(i + ": " + todo);
        })
        console.log("**********");
    }

    function addTodo(){
        var item = prompt("Enter new todo");
        todos.push(item);
        console.log( item + " added to list");
    }

    function delTodo(){
        var index  = prompt("Enter index");
            todos.splice(index ,1);
            console.log("Todo Removed");
    }
}, 500);

