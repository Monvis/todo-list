'use strict'
// Product and supported by Monvis

import './assets/scss/style.scss'

// components
import { taskTracker }     from './assets/components/taskTracker'
import { createTask }      from './assets/components/createTask'
import { render }          from './assets/components/render'
import { isTaskCompleate } from './assets/components/isTaskComplete'
import { deleteTask }      from './assets/components/deleteTask'
import { deleteList }      from './assets/components/deleteList'

const message    = document.querySelector('.todo__input')
const addBtn     = document.querySelector('.todo__btn')
const inputField = document.querySelector('.todo__input-field')
const plugText   = document.querySelector('.todo__list-plug')
const todo       = document.querySelector('.todo__list')
const deleteBtn  = document.querySelector('.todo__delete-btn')
const tracker    = document.querySelector('.todo__tracker')
const warning    = document.createElement('p')

// All tasks here...
const todoList = []

const emptyInputField = () => {
    // styles
    warning.classList.add('warning')
    warning.innerHTML = 'This field cannot be empty'
    inputField.appendChild(warning)

    warning.style.removeProperty('animation')
    addBtn.style.opacity = '0.5'
    message.style.border = '1px solid #8E49EB'
}

message.oninput = () => {
    if (message.value === '') {
        emptyInputField()
    } else {
        // styles
        addBtn.style.opacity = '1'
        message.style.border = '1px solid rgba(0, 0, 0, 0.27)'
        warning.style.animation = '1s fade-out forwards'
    }
}

// func: createTask
addBtn.onclick = () => {
    createTask()
    render()
    taskTracker()
}

// func: deleteList
deleteBtn.onclick = () => {
    deleteList()
    taskTracker()
}

// Adding a task with "Enter" button
const enterBtn = e => {
    if (e.keyCode === 13) {
        createTask()
        render()
        taskTracker()
    }
}

function deleteTaskTrigger(elem) {
    if (elem.target.dataset.action !== 'delete') return 0
    todo.addEventListener('click', deleteTask)
    taskTracker()
}

// Event handlers
todo.addEventListener('click', isTaskCompleate)
todo.addEventListener('click', deleteTask)
todo.addEventListener('click', deleteTaskTrigger)
message.addEventListener('keydown', enterBtn)

export {
    todoList,
    addBtn,
    warning,
    inputField,
    plugText,
    todo,
    message,
    tracker
}