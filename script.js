document.getElementById("submitButton").addEventListener("click", addTask);

function addTask(){

    /*here we need to access the content of the input and do something with it*/

    const taskInput = document.getElementById("taskInput").value;

    if (taskInput) {
        
        const newTask = document.createElement('li');
        newTask.innerText = taskInput;

        const deleteButton = document.createElement("button");
        deleteButton.className="button";
        deleteButton.innerText="x";
        newTask.appendChild(deleteButton)

        deleteButton.addEventListener("click", () => taskList.removeChild(newTask));

        document.getElementById("taskList").appendChild(newTask);    

        document.getElementById('taskInput').value=''
    }
}
