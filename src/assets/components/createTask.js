import { message, todoList, addBtn, plugText, warning } from '../../app'

const generateId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const createTask = () => {
    if (message.value != '') {
        const newTodo = {
            text: message.value,
            checked: false,
            id: generateId()
        }

        todoList.push(newTodo)
        localStorage.setItem('todo', JSON.stringify(todoList))

        addBtn.style.opacity = '0.5'
        plugText.style = 'display: none'
    } else {
        warning.style.removeProperty('animation')
    }
}

export { createTask, todoList }