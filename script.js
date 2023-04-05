'use strict';

//////////////////SELECTORS
const saveBtn = document.getElementById('saveItems');
const removeItemsBtn = document.getElementById('removeItemsBtn');
const highlightBtn = document.getElementById('highlightBtn');
const shuffleBtn = document.getElementById('shuffleItemsBtn');
const submitTasksBtn = document.getElementById('submitBtn');

const userInput = document.getElementById('userInput');
const toDoList = document.getElementById('to-do-list');

let listItems = document.getElementsByClassName('list-item');

const darkMode = document.getElementById('dark-mode');

/////////////////////FUNCTIONS

//implement dark mode
darkMode.addEventListener('click', function () {
  document.querySelector('body').classList.toggle('dark-mode');
});

//separate user input into items by comma, push it to to-do list, clear input field
submitTasksBtn.addEventListener('click', function () {
  //clear default text if present
  let defaultText = document.querySelector('.default');
  if (defaultText) {
    toDoList.innerHTML = '';
  }

  let input = userInput.value;
  input = input.split(',');
  for (var i = input.length; i > 0; i--) {}

  input.forEach((element) => {
    let idNum = (i + 1, i++);
    toDoList.innerHTML += `<li id="li-${idNum}" class="list-item">${element}</li> <button id="btn-${idNum}" class="removeBtn hidden">✕</button>`;
  });
  userInput.value = '';
});

//shuffle button - shuffle items in list
shuffleBtn.addEventListener('click', function () {
  //create array from list items in DOM
  let result = Array.from(listItems).map((el) => `${el.textContent}`);

  //shuffle result array
  for (var i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }

  //display results to DOM
  toDoList.innerHTML = '';
  result.forEach((element) => {
    let idNum = (i + 1, i++);
    toDoList.innerHTML += `<li id="li-${idNum}" class="list-item">${element}</li> <button id="btn-${idNum}" class="removeBtn hidden">x</button>`;
  });
});

//functionality for highlight button
//get random index from listItems, add style to random index
highlightBtn.addEventListener('click', function () {
  let listItems2 = document.querySelectorAll('li');

  //clear old highlight
  for (let i of listItems2) {
    i.style = '';
  }

  //apply new highlight
  let randomItem = listItems2[Math.floor(Math.random() * listItems2.length)];
  randomItem.style.backgroundColor = 'yellow';
});

//functionality for remove items button
removeItemsBtn.addEventListener('click', function () {
  let removeBtns = document.getElementsByClassName('removeBtn');
  listItems = document.getElementsByClassName('list-item');

  //show/hide remove buttons onclick
  for (let i of removeBtns) {
    i.classList.toggle('hidden');
  }

  //delete specified items on click
  for (var i = 0; i < removeBtns.length; i++) {
    let removeButton = removeBtns[i];
    let listRemove = listItems[i];

    removeButton.addEventListener(
      'click',
      function () {
        removeButton.remove();
        listRemove.remove();
      },
      false
    );
  }
});

//functionality for save button
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

saveBtn.addEventListener('click', function () {
  listItems = document.getElementsByClassName('list-item');

  let newList = [];
  for (var i = 0; i < listItems.length; i++) {
    newList.push(listItems[i].textContent);
  }
  download('test', newList);
});

////////////////NOT YET IMPLEMENTED
//bug fix - if list is 2+, generate remove buttons, then new tasks are added while remove buttons are present, remove buttons are not generated correctly according to the new content
//need to refactor
//ideally implement some save functionality other than manually downloading a txt file every time (localStorage?)
//figure out how to get this as an app on the phone - web hosting
