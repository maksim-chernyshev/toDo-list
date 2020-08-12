let toDoList = [];
// Зачем этот переменная?
let counter = 0;
const elementInputField = document.querySelector('.add-panel__new-item');

function addTask(name) {
    // Зачем тут этот айди и почему мы прибавляем что-то к каунтеру?
    let item = { name: name, id: counter++ };
    toDoList.push(item);
    return item;
}

function removeTask(id) {
    toDoList = toDoList.filter(item => item.id === id);
}

function onAddTask() {
    let name = elementInputField.value;
    let item = addTask(name);
    addTaskDom(item);
}

function addTaskDom(item) {
    let template = `
        <li class="tasks-list__item" data-item-id="${item.id}">
            ${item.name}
            <div class="item__close" data-id="${item.id}">
                X
            </div>
        </li>`;

    let wrapperList = document.querySelector('.tasks-list');
    wrapperList.innerHTML = template + wrapperList.innerHTML;
    clearInputField();
}

function removeTaskDom(id) {
    let toRemove = document.querySelector(`[data-item-id="${id}"]`);
    toRemove.remove();
}

function clearInputField() {
    elementInputField.value = '';
}

document.querySelector('.add-panel__submit').addEventListener('click', onAddTask);

document.addEventListener('click', function(e) {
    if(e.target && e.target.className === 'item__close') {
        let id = e.target.dataset.id;
        removeTask(+id);
        removeTaskDom(+id);
    }
});
