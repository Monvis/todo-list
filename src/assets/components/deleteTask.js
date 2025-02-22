import { todoList, plugText } from './../../app'

const deleteTask = elem => {
    if (elem.target.dataset.action !== 'delete') return 0

    const item = elem.target.closest('.todo__item')
    const id = item.id
    const index = todoList.findIndex(task => task.id === id)

    item.style.animation = '0.5s fade-out forwards'

    todoList.splice(index, 1)
    item.remove()
    localStorage.setItem('todo', JSON.stringify(todoList))

    if (todoList.length == 0) {
        plugText.style = 'display: block'
    }
}

export { deleteTask }