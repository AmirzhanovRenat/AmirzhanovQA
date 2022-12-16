(function () {
    //создаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return title;
    }
    //Создаем и возвращаем форму для создания дела

    function createToDoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return { form, input, button };
    }

    //Создаем и возвращаем список элемнетов

    function createToDoList() {
        let list = document.createElement('li');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        // Помещаем кнопки в элемент, которй красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //Устанавливаем стили для списка, а также для размещения кнопок в его правой части при помощи flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        //Вкладываем кнопки в один элемент
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    document.addEventListener('DOMContentLoaded', function () {
        let container = document.querySelector('#todo-app');

        let todoAppTitle = createAppTitle('Список дел');
        let todoItemForm = createToDoItemForm();
        let todoList = createToDoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        //браузер создает сабмит на форме, по нажатию на Enter  или на кнопку
        todoItemForm.form.addEventListener('submit', function (e) {
            //Страниуы не перезагружается при отправке формы
            e.preventDefault();

            //если пользователь ничего не ввел игнорим создание элемента
            if (!todoItemForm.input.value) {
                return;
            }

            let todoItem = createTodoItem(todoItemForm.input.value);
            //Добавляем обработчики кнопок
            todoItem.doneButton.addEventListener('click', function () {
                todoItem.item.classList.toggle('list-group-item-success');
            });

            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены)')) {
                    todoItem.item.remove();
                }
            });

            //Создаем и добавляем в списое новое дело с названием из поля ввода
            todoList.append(todoItem.item);
            //Обнуляем значения поляlist-group-item', 'd-flex', 'justify-content-between', 'align-items-center
            todoItemForm.input.value = '';
        });
    });
})();
