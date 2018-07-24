# Stripo

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Current technologies stack:
* React
* Redux
* Material-ui

## Instruction

In the project directory:

### `npm install`
Install all dependencies

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Requirements

Створити веб-програму сторінки:
1. Список HTML шаблонів
2. Сторінка деталей шаблона

Програма отримує з серверу (використати будь-яку зручну його імітацію) список шаблонів та зберігає його в пам'яті. <br>
Тестові дані зберiгаються ./src/mock.js

На сторінці 1 відобразити таблицю шаблонів що містить ім'я і час останньої зміни шаблону.
Ім'я має бути посиланням на сторінку деталей шаблону.

Сторінка 2 має відмалювати зміст HTML шаблону.
Додати можливість виділення будь-якого елементу відмальованого шаблону що містить клас '.editable' мишою.
У випадку виділення елементу відобразити панель, що дозволить встановити текст та розмір шрифту елементу.
Після кожної зміни шаблону імітувати його збереження до серверу та оновлювати список шаблонів в пам'яті.
Після повернення на сторінку 1 таблиця має містити коректний час останньої зміни
