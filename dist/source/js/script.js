
// Product by @Hatvis7

//****************************************************************************************************************/

let message = document.querySelector('.todo__input');
let addBtn = document.querySelector('.todo__btn');
let plugText = document.querySelector('.todo__list-plug')
let todo = document.querySelector('.todo__list');
let deleteList = document.querySelector('.todo__delete-btn');
let tracker = document.querySelector('.todo__tracker');

//****************************************************************************************************************/



let todoList = [];

addBtn.addEventListener('click', function() {
    
    if ( message.value != '' ) {

        let newTodo = {
            todo: message.value,
            checked: false,
            important: false
        }

        plugText.style = 'display: none';
        todoList.push(newTodo);
        displayMessages();
    }
})

function displayMessages() {

    let displayMessage = '';

    todoList.forEach((item, index) => {

        displayMessage += `
            <div class="todo__item">
                <li id="item__${index}"><p>${item.todo}</p><span><img src="img/delete.png" alt=""></span></li>
            </div>
        `;

        todo.innerHTML = displayMessage;
        message.value = '';
        taskTracker();
    })
}

function taskTracker() {

    counter = todoList.length;
    innerText = `You have ${counter} active task(s)`;
    tracker.innerHTML = innerText;
}

isInputFieldEmpty();


deleteList.addEventListener('click', function() {

    todo.innerHTML = '';
    todoList.length = 0;
    taskTracker();
    plugText.style = 'display: block';
})