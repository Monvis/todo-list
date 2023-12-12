
// Product by Monvis

//*********************************************************************

let message    = document.querySelector('.todo__input')
let addBtn     = document.querySelector('.todo__btn')
let inputField = document.querySelector('.todo__input-field')
let plugText   = document.querySelector('.todo__list-plug')
let todo       = document.querySelector('.todo__list')
let deleteList = document.querySelector('.todo__delete-btn')
let tracker    = document.querySelector('.todo__tracker')
let taskInput  = document.querySelector('input[type="checkbox"]')
let warning    = document.createElement('p')

//*********************************************************************

// Event handlers

addBtn.addEventListener('click', createTask)
message.addEventListener('keydown', EnterBtn)
todo.addEventListener('click', deleteTask)
todo.addEventListener('click', isTaskCompleate)


let todoList = []

// General App functions

function createTask() {
    
    if ( message.value != '' ) {

        let newTodo = {
            text: message.value,
            checked: false
        }

        todoList.push(newTodo)
        displayMessages()

        addBtn.style.opacity = '0.5'
        plugText.style = 'display: none'

    } else {

        emptyInputField()
        warning.style.removeProperty('animation')
    }
}

function displayMessages() {

    let displayMessage = ''

    todoList.forEach((elem, i) => {

        displayMessage += `

            <li class="todo__item" id="${i}">
                <label id="item__${i}">
                    <input type="checkbox" class="input-checkbox" id="item__${i}"></input>
                    <p class="text">${elem.text}</p><span data-action="delete"><img data-action="delete" src="img/bin.svg" alt=""></span>
                </label>
            </li>
        `

        todo.innerHTML = displayMessage
        message.value = ''
        taskTracker()
    })
}

function taskTracker() {

    counter = todoList.length
    tracker.innerHTML = `You have ${counter} active task(s)`
}

function isTaskCompleate(elem) {

    checkbox = elem.target.closest('.todo__item')
    checkbox.classList.toggle('done')
}

function deleteTask(elem) {

    if (elem.target.dataset.action !== 'delete') return

    const item = elem.target.closest('.todo__item')
    const id = Number(item.id)

    const index = todoList.findIndex((task) => task.id === id)

    item.style.animation = '0.5s fade-out forwards'
    setTimeout(() => {

        todoList.splice(index, 1)
        item.remove()
        taskTracker()

        if ( todoList.length == 0 ) { plugText.style = 'display: block' }

    }, 600)

    if ( todoList.length == 0 ) { plugText.style = 'display: block' }
}

function emptyInputField() {

    warning.classList.add('warning')
    warning.innerHTML = ('This field cannot be empty')
    inputField.appendChild(warning)

    warning.style.removeProperty('animation')

    addBtn.style.opacity = '0.5'
    message.style.border = '1px solid #ed3511'
}

// Is Inpit Field Empty?
message.oninput = function() {

    if ( message.value == '' ) {

        emptyInputField()

    } else {

        addBtn.style.opacity = '1'
        message.style.border = '1px solid rgba(0, 0, 0, 0.075)'
        warning.style.animation = '1s fade-out forwards'
    }
}

// Adding a task with "Enter" button
function EnterBtn(e) { if ( e.keyCode === 13 ) { createTask() } }


deleteList.addEventListener('click', function() {

    todo.style.animation = '1s fade-out forwards'

    setTimeout(() => {

        todo.innerHTML = ''
        todoList.length = 0
        taskTracker()
        plugText.style = 'display: block'

    }, 600)

    todo.removeAttribute('style')
})