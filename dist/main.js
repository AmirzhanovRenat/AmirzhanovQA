/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function () {\n    //создаем заголовок приложения\n    function createAppTitle(title) {\n        let appTitle = document.createElement('h2');\n        appTitle.innerHTML = title;\n        return title;\n    }\n    //Создаем и возвращаем форму для создания дела\n\n    function createToDoItemForm() {\n        let form = document.createElement('form');\n        let input = document.createElement('input');\n        let buttonWrapper = document.createElement('div');\n        let button = document.createElement('button');\n\n        form.classList.add('input-group', 'mb-3');\n        input.classList.add('form-control');\n        input.placeholder = 'Введите название нового дела';\n        buttonWrapper.classList.add('input-group-append');\n        button.classList.add('btn', 'btn-primary');\n        button.textContent = 'Добавить дело';\n\n        buttonWrapper.append(button);\n        form.append(input);\n        form.append(buttonWrapper);\n\n        return { form, input, button };\n    }\n\n    //Создаем и возвращаем список элемнетов\n\n    function createToDoList() {\n        let list = document.createElement('li');\n        list.classList.add('list-group');\n        return list;\n    }\n\n    function createTodoItem(name) {\n        let item = document.createElement('li');\n        // Помещаем кнопки в элемент, которй красиво покажет их в одной группе\n        let buttonGroup = document.createElement('div');\n        let doneButton = document.createElement('button');\n        let deleteButton = document.createElement('button');\n\n        //Устанавливаем стили для списка, а также для размещения кнопок в его правой части при помощи flex\n        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');\n        item.textContent = name;\n\n        buttonGroup.classList.add('btn-group', 'btn-group-sm');\n        doneButton.classList.add('btn', 'btn-success');\n        doneButton.textContent = 'Готово';\n        deleteButton.classList.add('btn', 'btn-danger');\n        deleteButton.textContent = 'Удалить';\n\n        //Вкладываем кнопки в один элемент\n        buttonGroup.append(doneButton);\n        buttonGroup.append(deleteButton);\n        item.append(buttonGroup);\n\n        return {\n            item,\n            doneButton,\n            deleteButton,\n        };\n    }\n\n    document.addEventListener('DOMContentLoaded', function () {\n        let container = document.querySelector('#todo-app');\n\n        let todoAppTitle = createAppTitle('Список дел');\n        let todoItemForm = createToDoItemForm();\n        let todoList = createToDoList();\n\n        container.append(todoAppTitle);\n        container.append(todoItemForm.form);\n        container.append(todoList);\n\n        //браузер создает сабмит на форме, по нажатию на Enter  или на кнопку\n        todoItemForm.form.addEventListener('submit', function (e) {\n            //Страниуы не перезагружается при отправке формы\n            e.preventDefault();\n\n            //если пользователь ничего не ввел игнорим создание элемента\n            if (!todoItemForm.input.value) {\n                return;\n            }\n\n            let todoItem = createTodoItem(todoItemForm.input.value);\n            //Добавляем обработчики кнопок\n            todoItem.doneButton.addEventListener('click', function () {\n                todoItem.item.classList.toggle('list-group-item-success');\n            });\n\n            todoItem.deleteButton.addEventListener('click', function () {\n                if (confirm('Вы уверены)')) {\n                    todoItem.item.remove();\n                }\n            });\n\n            //Создаем и добавляем в списое новое дело с названием из поля ввода\n            todoList.append(todoItem.item);\n            //Обнуляем значения поляlist-group-item', 'd-flex', 'justify-content-between', 'align-items-center\n            todoItemForm.input.value = '';\n        });\n    });\n})();\n\n\n\n//# sourceURL=webpack://amirzhanovqa/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;