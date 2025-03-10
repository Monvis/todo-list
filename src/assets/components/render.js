import { todoList, todo, message, plugText } from './../../app'
import bin from './../img/bin.svg'

const render = (activeFilter = 'allTasks') => {
    let displayMessage = ''

    todoList.forEach((elem, i) => {
        let shouldRender = false

        switch (activeFilter) {
            case 'allTasks':
                shouldRender = true // should render all tasks
                break
            case 'activeTasks':
                shouldRender = !elem.checked // should render unchecked tasks
                // eslint-disable-next-line quotes
                plugText.innerHTML = "You don't have active tasks, let's<br> create the first one"
                break
            case 'completedTasks':
                shouldRender = elem.checked // should render checked tasks
                // eslint-disable-next-line quotes
                plugText.innerHTML = "You don't have completed tasks, let's<br> finish the first one"
                break
            default:
                return
        }

        if (shouldRender) {
            const checkedAttribute = elem.checked ? 'checked' : ''

            displayMessage += `
            <li class="todo__item ${elem.checked ? 'checked' : ''}" id="${elem.id}">
            <label>
                <input type="checkbox" class="input-checkbox" ${checkedAttribute} id="${i}"></input>
                <p class="text">${elem.text}</p><span class="delete" data-action="delete"><img data-action="delete" src=${bin} alt="delete"></span>
            </label>
            </li>
            `
        }
    })

    todo.innerHTML = displayMessage
    message.value = ''
}

export { render }