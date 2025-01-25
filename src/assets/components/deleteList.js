import { todoList, todo, plugText } from './../../app'
// import taskTracker from './taskTracker'

const deleteList = () => {
    todo.style.animation = '1s fade-out forwards'
    todo.innerHTML = ''
    todoList.length = 0
    plugText.style = 'display: block'
    todo.removeAttribute('style')
}

export { deleteList }