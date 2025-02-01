import { todoList } from './../../app'

const isTaskCompleate = elem => {
    if (elem.target.type !== 'checkbox') {
        return 0
    }
    
    const checkbox = elem.target.closest('.todo__item')
    checkbox.classList.toggle('checked')

    // Toggle checked status (true:false) for current element in todoList array
    for (let i = 0; i < todoList.length; i++) {

        if (todoList[i].id == checkbox.id) {

            if (todoList[i].checked === false) {

                todoList[i].checked = true
                localStorage.setItem('todo', JSON.stringify(todoList))
            } else {
                todoList[i].checked = false
                localStorage.setItem('todo', JSON.stringify(todoList))
            }
        }
    }
}

export { isTaskCompleate }