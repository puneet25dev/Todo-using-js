let input = document.querySelector("input");

let addTaskBtn = document.querySelector("#task");
let taskContainer = document.querySelector(".taskContainer");

let tick=document.querySelector(".tick")

function addTask() {
  let newTask = document.createElement("li");
  newTask.textContent = input.value.toUpperCase();
  let spanTask = document.createElement("span");
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("groupBtn")
  spanTask.classList.add("newTaskContainer");
  spanTask.appendChild(newTask);
  taskContainer.appendChild(spanTask);
  delTaskBtn(spanTask,btnContainer);
  markDoneBtn(btnContainer,newTask)
}

function delTaskBtn(spanTask,btnContainer) {
  
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete Task";
  delBtn.classList.add("delBtn")
  btnContainer.appendChild(delBtn);
  spanTask.appendChild(btnContainer);

 

  //delete task event

  delBtn.addEventListener("click", () => {
    spanTask.remove();
  });
}
 function markDoneBtn(btnContainer,newTask){
    let markBtn=document.createElement("button")
    markBtn.classList.add("markBtn")
    markBtn.textContent="Mark Done"
    btnContainer.appendChild(markBtn)

    let icon=document.createElement("i")
    icon.classList.add("show")
    icon.className="fa-solid fa-check-double"
    newTask.appendChild(icon)


    markBtn.addEventListener("click",()=>{
       
        newTask.classList.toggle("active")
        icon.classList.toggle("show")

    })

    
    

}



addTaskBtn.addEventListener("click", (e) => {

  if (input.value.trim() === "") {
    return;
  } else {
    e.preventDefault();
    addTask();
    input.value = "";
  }
});
