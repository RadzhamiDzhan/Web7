// У звітному HTML-документі створити html-розміту,
// яка складається з наступних елементів: текст, кнопка,
// два інпута (поля введення ). Після натискання кнопки SWAP ME здійснюється
// обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// У звітному HTML-документі відобразити скрін програмного коду.    

function swapInputs() {
    let input1Value = document.getElementById('input1').value;
    let input2Value = document.getElementById('input2').value;

    document.getElementById('input1').value = input2Value;
    document.getElementById('input2').value = input1Value;
}
// У звітному HTML-документі створити html-розміту,
//                 яка складається з наступних елементів: текст, блок
//                 (div), дві кнопки. Кнопка Зменшити робить квадрат менше на 15
//                 пікселів.
//                 Повторний натиск на кнопці Зменшити робить
//                 квадрат ще менше на 15 пікселів.
//                 Збільшити – робить квадрат більше на 15 пікселів.
//                 Повторний натиск на кнопці Зменшити   робить
//                 квадрат ще більше на 15 пікселів.
//                 У звітному HTML-документі відобразити скрін
//                 програмного коду  
                
let size = 200; 

function decreaseSize() {
    size -= 15; 
    document.getElementById('square').style.width = size + 'px';
    document.getElementById('square').style.height = size + 'px';
}

function increaseSize() {
    size += 15; 
    document.getElementById('square').style.width = size + 'px';
    document.getElementById('square').style.height = size + 'px';
}

// У звітному HTML-документі створити html-розміту,
// яка складається з наступних елементів: текст,
// маркирований список. Натиснувши кнопку Подвоїти, збільшити значення
// у кожному елементі списку у 2 рази. Повторний натиск
// на кнопці Подвоїти, також збільшить значення у
// кожному елементі списку у 2 рази
// У звітному HTML-документі відобразити скрін
// програмного коду


function doubleValues() {
    const listItems = document.querySelectorAll('#myList li');
    listItems.forEach(item => {
        const currentValue = parseInt(item.textContent);
        item.textContent = currentValue * 2;
    });
}

// Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій
// в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у
// списку ul#categories, знайде і виведе в консоль
// текст заголовку елемента (тегу h2) і кількість
// елементів в категорії (усіх li, вкладених в
// нього).
// Для виконання цього завдання потрібно використати
// метод forEach() і властивості навігації по DOM.


const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Кількість категорій:', categoryItems.length);

categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    console.log('Категорія:', categoryTitle);
    const categoryElements = item.querySelectorAll('ul li');
    console.log('Кількість елементів у категорії:', categoryElements.length);
});

// 1. Обробка відправлення форми form.login-
//form повинна відбуватися за подією submit.
//2. Під час відправлення форми сторінка не повинна
//перезавантажуватися.
//3. Якщо при сабміті у формі є незаповнені поля,
//виводь alert з попередженням про те, що All
//form fields must be filled in. Не
// додавай на інпути атрибут required, валідація має
//відбуватися саме через JS.
// 4. Якщо користувач заповнив усі поля і відправив
// форму, збери значення полів в об'єкт з двома
//властивостями, де ключ — це ім'я інпутів, а
//значення — відповідні значення цих інпутів,
//очищені від пробілів по краях. Для доступу до
//елементів форми використовуй
//властивість elements.
//5. При сабміті форми виведи об'єкт із введеними
//даними в консоль

document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (!email || !password || !email && !password) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email,
        password: password
    };

    console.log(formData);
    event.target.reset();
});
// Напиши скрипт, який змінює колір фону елемента &lt;body&gt; через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
// <div class=&quot;widget&quot;&gt;&lt;p&gt;Background color: &lt;span class=&quot;color&quot;&gt;-&lt;/span&gt;&lt;/p&gt;
// &lt;button type=&quot;button&quot; class=&quot;change-color&quot;&gt;Change color&lt;/button&gt;
// &lt;/div&gt; Для генерування випадкового кольору використовуй функцію getRandomHexColor().
//                 function getRandomHexColor() {
//                 return `#${Math.floor(Math.random() *
//                 16777215)
//                 .toString(16)
//                 .padStart(6, 0)}`;
//                 }
// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на &lt;body&gt; буде у
// форматі rgb. Це нормально й не потребує якихось правок. 

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.querySelector('.change-color').addEventListener('click', function() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector('.color').textContent = newColor;
});
// Напиши скрипт створення й очищення колекції
// елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість
// елементів. Після натискання на кнопку Create має
// рендеритися (додаватися в DOM) колекція з
// відповідною кількістю елементів і очищатися значення
// в інпуті. При повторному натисканні на
// кнопку Create поверх старої колекції має рендеритись
// нова. Після натискання на кнопку Destroy колекція
// елементів має очищатися.
// &lt;div id=&quot;controls&quot;&gt;
// &lt;input type=&quot;number&quot; min=&quot;1&quot; max=&quot;100&quot;
// step=&quot;1&quot; /&gt;
// &lt;button type=&quot;button&quot; data-
// create&gt;Create&lt;/button&gt;
// &lt;button type=&quot;button&quot; data-
// destroy&gt;Destroy&lt;/button&gt;
// &lt;/div&gt;
// &lt;div id=&quot;boxes&quot;&gt;&lt;/div&gt;
// Після натискання користувачем на
// кнопку Create треба провалідувати значення в input,
// воно має бути в межах від 1 до 100 включно. Тільки
// якщо воно задоволяє умову, мають додаватися
// нові &lt;div&gt; елементи в DOM.
// Для рендеру елементів на сторінці створи
// функцію createBoxes(amount), яка приймає один
// параметр — число, що зберігає кількість елементів для
// рендеру. Функція має створювати
// стільки &lt;div&gt; елементів, скільки вказано
// в параметрі amount і додавати їх у DOM дочірніми
// елементами для div#boxes.
// 1. Розміри першого &lt;div&gt; елемента мають бути
// 30px на 30px.
// 2. Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// 3. Усі елементи повинні мати випадковий колір
// фону. Використовуй готову
// функцію getRandomHexColor() для отримання
// випадкового кольору.
// function getRandomHexColor() {
// return `#${Math.floor(Math.random() *
// 16777215)
// .toString(16)
// .padStart(6, 0)}`;
// }

// Для очищення колекції після натискання на
// кнопку Destroy створи функцію destroyBoxes(), яка
// очищає вміст div#boxes, у такий спосіб видаляючи всі
// створені елементи.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; 
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        boxSize += 10; 
    }
}

function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; 
}

document.querySelector('[data-create]').addEventListener('click', () => {
    const input = document.querySelector('#controls input');
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; 
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);



