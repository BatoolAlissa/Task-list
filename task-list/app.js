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
    //filter through the tasks
    filter.addEventListener('keyup',filterTasks)
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
    if(confirm("Are you sure you wanna clear all tasks ?")){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild)
        }
    }
}


function filterTasks(e){
    const text = e.target.value.toLowerCase();

    //querySelectorAll retrurn a node list if i used gitElementByClass that will return an html collection then we have to confit it to an array to use forEach
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1){
            // show item
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
        console.log(item, text)
    });
}