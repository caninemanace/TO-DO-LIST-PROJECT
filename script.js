document.addEventListener("DOMContentLoaded",function(){//ensures that things in the DOM are first first loaded before execution
    const resultDiv = document.getElementById("results");

    function clicked(){
        // A place to put our things
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        //input field
        let inputField = document.createElement("input");
        inputField.type = "input";
        inputField.placeholder = "Enter your items ...";
        inputField.classList.add("task-input");
        //add button field
        let addButton = document.createElement("button");
        addButton.textContent = "Add";
        addButton.classList.add("add-btn");
        //creating relationships
        taskContainer.appendChild(inputField);
        taskContainer.appendChild(addButton);
        resultDiv.appendChild(taskContainer);

        addButton.addEventListener("click",function(){
            let taskText = inputField.value.trim();
            if(taskText != ""){
                addTask(taskText);//to direct the js flow to the function addTask
                inputField.value = "";//clear the input box
        }
            
        });

    }
    function addTask(taskText){
        let taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `<span>${taskText}</span>
                              <button class="delete-btn">Delete</button>`;
        //delete
        taskItem.querySelector(".delete-btn").addEventListener("click", function(){
            taskItem.remove();
        });
        resultDiv.appendChild(taskItem);
    }
    window.clicked = clicked; //to make clicked globally available

    
    /*let taskHistory = JSON.parse(localStorage.getItem("taskHistory")) || [];
    taskHistory.push(taskItem);
    localStorage.setItem("taskHistory", JSON.stringify(taskHistory));*/

});

   