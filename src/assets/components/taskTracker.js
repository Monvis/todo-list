import { todoList, tracker } from './../../app'

function taskTracker() {
    tracker.innerHTML = `You have ${todoList.length} active task(-s)`
}

export { taskTracker } 
