'use strict'

// Product and supported by Monvis
import './assets/scss/style.scss'

// icons
import lightTheme          from './assets/img/light-theme.svg'
import darkTheme           from './assets/img/dark-theme.svg'

// components
import { taskTracker }     from './assets/components/taskTracker'
import { createTask }      from './assets/components/createTask'
import { render }          from './assets/components/render'
import { isTaskComplete } from './assets/components/isTaskComplete'
import { deleteTask }      from './assets/components/deleteTask'
import { deleteList }      from './assets/components/deleteList'

const body       = document.querySelector('.body')
const themes     = document.querySelector('.header__theme')
const themeIcon  = document.querySelector('#theme-icon')
const message    = document.querySelector('.todo__input')
const addBtn     = document.querySelector('.todo__btn')
const inputField = document.querySelector('.todo__input-field')
const plugText   = document.querySelector('.todo__list-plug')
const todo       = document.querySelector('.todo__list')
const deleteBtn  = document.querySelector('.todo__delete-btn')
const tracker    = document.querySelector('.todo__tracker')
const warning    = document.createElement('p')

// Filter buttons
const allTasksBtn = document.getElementById('allTasks')
const activeTasksBtn = document.getElementById('activeTasks')
const completedTasksBtn = document.getElementById('completedTasks')

// All tasks here...
let todoList = []

// LOCAL STORAGE - Render tasks
if (localStorage.getItem('todo') != undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'))
    render()
    taskTracker(todoList)
}

// LOCAL STORAGE - Themes
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme')
    themeIcon.src = `${lightTheme}`
}

window.onload = function() {

    // properties for <p class="warning"></p> when input field empty
    const emptyInputField = () => {
        // styles
        warning.classList.add('warning')
        warning.innerHTML = 'This field cannot be empty'
        warning.style.removeProperty('animation')
        inputField.appendChild(warning)
        addBtn.style.opacity = '0.5'

        // contains? --> dark theme
        if (body.classList.contains('dark-theme')) {
            message.style.border = '1px solid #8E49EB'
        }
        // dosn't contains? --> light theme
        if (!(body.classList.contains('dark-theme'))) {
            message.style.border = '1px solid #00B86A'
        }
    }

    // check input field status
    message.oninput = () => {
        if (message.value === '') {
            // contains? --> dark theme
            if (body.classList.contains('dark-theme')) {
                emptyInputField()
                message.style.border = '1px solid #8E49EB'
            }
            // dosn't contains? --> light theme
            if (!(body.classList.contains('dark-theme'))) {
                emptyInputField()
                message.style.border = '1px solid #00B86A'
            }

        } else {
            // styles
            // default properties for input
            addBtn.style.opacity = '1'
            message.style.border = '1px solid rgba(0, 0, 0, 0.27)'
            warning.style.animation = '1s fade-out forwards'
        }
    }

    themes.onclick = () => {
        body.classList.toggle('dark-theme')
        message.style.border = '1px solid rgba(0, 0, 0, 0.27)'
        warning.style.animation = '1s fade-out forwards'

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark')
            themeIcon.src = `${lightTheme}`

        } else {
            localStorage.setItem('theme', 'light')
            themeIcon.src = `${darkTheme}`
        }
    }
    
    // func: createTask
    addBtn.onclick = () => {
        if (message.value === '') {
            emptyInputField()
        }
        
        createTask()
        render()
        taskTracker()
    }
    
    // func: deleteList
    deleteBtn.onclick = () => {
        deleteList()
        taskTracker()
        localStorage.removeItem('todo')
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
    todo.addEventListener('click', isTaskComplete)
    todo.addEventListener('click', deleteTask)
    todo.addEventListener('click', taskTracker)
    todo.addEventListener('click', deleteTaskTrigger)
    message.addEventListener('keydown', enterBtn)

    // Filter event handlers - Render active filter
    allTasksBtn.addEventListener('click', () => {
        render('allTasks')
        plugText.innerHTML = 'You don\'t have tasks, let\'s<br> create the first one'
        taskTracker()
    })

    activeTasksBtn.addEventListener('click', () => {
        render('activeTasks')
        plugText.innerHTML = 'You don\'t have active tasks, let\'s<br> create the first one'
        taskTracker()
    })
    
    completedTasksBtn.addEventListener('click', () => {
        render('completedTasks')
        plugText.innerHTML = 'You don\'t have completed tasks, let\'s<br> finish the first one'
        taskTracker()
    })
}

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