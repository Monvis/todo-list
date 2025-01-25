import { message, todoList, addBtn, plugText, warning } from '../../app'

const createTask = () => {
    if (message.value != '') {
        const newTodo = {
            text: message.value,
            checked: false,
            id: todoList.length
        }
        todoList.push(newTodo)

        addBtn.style.opacity = '0.5'
        plugText.style = 'display: none'
    } else {
        warning.style.removeProperty('animation')
    }
}

export { createTask }