//test
//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners;

loadEventListeners();

function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
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

    //clear input;

    taskInput.value = '';


    console.log(li)



    e.preventDefault();
}