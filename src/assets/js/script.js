
// Product and supported by Monvis

import '../scss/style.scss'
import bin from '../img/bin.svg'

//*********************************************************************
const message    = document.querySelector('.todo__input')
const addBtn     = document.querySelector('.todo__btn')
const inputField = document.querySelector('.todo__input-field')
const plugText   = document.querySelector('.todo__list-plug')
const todo       = document.querySelector('.todo__list')
const deleteList = document.querySelector('.todo__delete-btn')
const tracker    = document.querySelector('.todo__tracker')
const warning    = document.createElement('p')
//*********************************************************************

// Event handlers

addBtn.addEventListener('click', createTask)
todo.addEventListener('click', deleteTask)
todo.addEventListener('click', isTaskCompleate)
message.addEventListener('keydown', enterBtn)

// All tasks here...
let todoList = []

// General App functions
function createTask() {
    if ( message.value != '' ) {
        let newTodo = {
            text: message.value,
            checked: false,
            id: todoList.length
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

        displayMessage += 
        `
            <li class="todo__item" id="${i}">
                <label id="item__${i}">
                    <input type="checkbox" class="input-checkbox" id="${i}"></input>
                    <p class="text">${elem.text}</p><span data-action="delete"><img data-action="delete" src=${bin} alt="delete"></span>
                </label>
            </li>
        `

        todo.innerHTML = displayMessage
        message.value = ''
        taskTracker()
    })
}

function taskTracker() {
    let counter = todoList.length
    tracker.innerHTML = `You have ${counter} active task(s)`
}

function isTaskCompleate(elem) {
    if (elem.target.type !== 'checkbox') { return 0 }

    let checkbox
    checkbox = elem.target.closest('.todo__item')
    checkbox.classList.toggle('checked')

    // Toggle checked status (true:false) for current element in todo array
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == checkbox.id) {
            todoList[i].checked === false ? todoList[i].checked = true : todoList[i].checked = false
        }
    }
}

function deleteTask(elem) {
    if (elem.target.dataset.action !== 'delete') return 0

    const item = elem.target.closest('.todo__item')
    const id = Number(item.id)
    const index = todoList.findIndex((task) => task.id === id)

    item.style.animation = '0.5s fade-out forwards'
    todoList.splice(index, 1)
    item.remove()
    taskTracker()

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
function enterBtn(e) { if ( e.keyCode === 13 ) { createTask() } }


deleteList.addEventListener('click', function() {
    todo.style.animation = '1s fade-out forwards'

    setTimeout(() => {
        todo.innerHTML = ''
        todoList.length = 0
        taskTracker()
        plugText.style = 'display: block'
    }, 500)

    todo.removeAttribute('style')
})