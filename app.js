//test
//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners;
loadEventListeners();

//Load all event listeners;
function loadEventListeners(){
form.addEventListener('submit', addTask)
}

//add Task

function loadEventListeners(){
    //DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks)
    // Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTask);
}
// get tasks from LocalStorage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks' === null)){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task){
        // create li element
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        // create text node and appenf it
        li.appendChild(document.createTextNode(tasks));
        //create new link element
        const link = document.createElement('a');
        //add a class
        link.className = 'delete-item secondary content';
        // add icon html;
        link.innerHTML = '<i class="fa fa-remowe"></i>';
        //append the link
        li.appendChild(link);
        //append the li to ul
        taskList.appendChild(li);

    })
}

//add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and appenf it
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add a class
    link.className = 'delete-item secondary content';
    // add icon html;
    link.innerHTML = '<i class="fa fa-remowe"></i>';
    //append the link
    li.appendChild(link);

    //append the li to ul
    taskList.appendChild(li);

    //Store in local storage;
    storeTaskinLocalStorage();


    //clear input;

    taskInput.value = '';


    e.preventDefault();
}

//Store Tasks
function storeTaskinLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are you Sure?')){
            e.target.parentElement.parentElement.remove();

            // Remove from LocalStrage;
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}

// Remove from localStorage

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))

}

// Clear Tasks
function clearTasks(e){
    //taskList.innerHTML = '';

    //faster
    while(taskList.firstChild){
        taskList.replaceChild(taskList.firstChild)
    }
    // Clear tasks from localStorage
    clearFromLocalStorage();
}

// Clear tasks from local storage
function clearFromLocalStorage(){
    localStorage.clear();
}

// Filter tasks
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLocaleLowerCase().indexOf(text) != -1){
                task.style.display = 'block'
            } else {
                task.style.display = 'none';
            }
        }
    )


}