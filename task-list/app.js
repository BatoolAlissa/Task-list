//defined the UI variables 

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event listeners 
loadEventListeners();

//load all event listeners 
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit',addTask);
    // remove tasks from list 
    taskList.addEventListener('click',removeTask)
    //remove all the tasks
    clearBtn.addEventListener('click',clearTasks)
}

//add Task
function addTask(e){
    if(taskInput.value === ""){
        alert('Add your task')
    }

    // Create li element 
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element 
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link)
    //append li to ul
    taskList.appendChild(li);
    //clear input
    taskInput.value = ''

    e.preventDefault();
}

function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item')) {
        if(confirm("Are you sure you want to remove")){
        e.target.parentElement.parentElement.remove()
        }
    }
}

// function clearTasks(){
//     taskList.innerHTML = ''
// }

function clearTasks() {
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}