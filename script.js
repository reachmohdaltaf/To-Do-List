const myform = document.querySelector("#myform");
const input = document.querySelector("#input");
const added = document.querySelector(".added");
let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

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
  const editbtn = document.createElement('button')
  const completebtn = document.createElement('button')


  taskcontainer.classList.add("task");
  deletebtn.classList.add("deletebtn");
  completebtn.classList.add("complete")
  completebtn.textContent = "✔"
  deletebtn.innerText = "Delete";
  editbtn.innerText = "Edit";
  editbtn.classList.add("editbtn");


  
  deletebtn.addEventListener('click', () => {
    const dailytask = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = dailytask.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    taskcontainer.remove();
});


editbtn.addEventListener('click', ()=>{
  let changetask = prompt("Change your task");
  if(changetask){
    taskElement.innerText = changetask;

    const dailytask = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = dailytask.map(t => (t === task ? changetask : t));
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }


});


completebtn.addEventListener('click', ()=>{
  completedtask(task, taskcontainer);
})





 
  taskElement.innerText = task;
  taskcontainer.append(taskElement);
  taskcontainer.append(editbtn);
  taskcontainer.append(deletebtn);
  taskcontainer.append(completebtn)
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
        completedTasks.forEach(task => {
          console.log("Completed task loaded:", task);
        });
})


const completedtask = (task, taskcontainer) => {
  completedTasks.push(task);
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  localStorage.removeItem("tasks")
  taskcontainer.remove();
};





  

  
























