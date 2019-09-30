var todos = ["watch a movie"]; //todos新陣列

window.setTimeout(function() {
    // put all the rest of your JS code from the lecture here

    //問候想要做什麼
    var input = prompt("What would you like to do?");

    while(input !== "quit"){
        //處理input
        if(input === "list"){ //如果是List則印出todos
            console.log(todos);
        }
        else if (input === "new"){ //new的話則新增到todos
        var item = prompt("Enter new todo");
            todos.push(item);
        }
        //重複詢問
        input = prompt("What would you like to do?");
    }

    console.log("You quit the app!");
}, 500);

