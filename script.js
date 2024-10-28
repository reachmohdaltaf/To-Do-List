const myform = document.querySelector("#myform");
const input = document.querySelector("#input");
const added = document.querySelector(".added");

myform.addEventListener("submit", (e) => {
  e.preventDefault();

  addTask();
});

const addTask = () => {
  const task = input.value.trim();
  if (task) {
    createTask(task);
    input.value = "";
    saveTask(task);
  } else {
    alert("kuch to likh");
  }
};

const createTask = (task) => {
  const taskcontainer = document.createElement("div");
  const taskElement = document.createElement("p");
  const deletebtn = document.createElement("button");

  taskcontainer.classList.add("task");
  deletebtn.classList.add("deletebtn");
  deletebtn.innerText = "Delete";
  
  
  deletebtn.addEventListener('click', () => {
    const dailytask = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = dailytask.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    taskcontainer.remove();
});
 
 
  taskElement.innerText = task;
  taskcontainer.append(taskElement);
  taskcontainer.append(deletebtn);
  added.append(taskcontainer);
};


const saveTask = (task) =>{
    const dailytask = JSON.parse(localStorage.getItem('tasks')) || [];
    dailytask.push(task)
    localStorage.setItem('tasks', JSON.stringify(dailytask))

};


window.addEventListener("load", () =>{
    const dailytask = JSON.parse(localStorage.getItem('tasks')) || [];
        dailytask.forEach(task => {
            createTask(task);
        });
})




  

  
























