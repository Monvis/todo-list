import { plugText, todo, todoList, tracker } from './../../app'

function taskTracker() {
    if (todoList.length !== 0) {
        plugText.style = 'display: none'
    }
    
    // For checked filter 
    if (todo.innerHTML.trim() === '') {
        plugText.style = 'display: block'
    }

    let completedTasks = 0
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].checked === true) {
            ++completedTasks
        }
    }
    
    tracker.innerHTML = `You have ${todoList.length - completedTasks} active task(-s) / ${todoList.length}`
}

export { taskTracker }