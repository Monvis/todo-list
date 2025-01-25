import { todoList, todo, message } from './../../app'
import bin from './../img/bin.svg'

const render = () => {
    let displayMessage = ''
    todoList.forEach((elem, i) => {
        displayMessage += `
            <li class="todo__item" id="${i}">
                <label>
                    <input type="checkbox" class="input-checkbox" id="${i}"></input>
                    <p class="text">${elem.text}</p><span class="delete" data-action="delete"><img data-action="delete" src=${bin} alt="delete"></span>
                </label>
            </li>
        `

        todo.innerHTML = displayMessage
        message.value = ''
    })
}

export { render }