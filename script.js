'use strict';

//////////////////SELECTORS
const saveBtn = document.getElementById('saveItems');
const removeItemsBtn = document.getElementById('removeItemsBtn');
const highlightBtn = document.getElementById('highlightBtn');
const shuffleBtn = document.getElementById('shuffleItemsBtn');
const submitTasksBtn = document.getElementById('submitBtn');

const userInput = document.getElementById('userInput');
const toDoList = document.getElementById('to-do-list');

const listItems = document.getElementsByClassName('list-item');

let removeBtns = document.getElementsByClassName('removeBtn');

const debugBtn = document.getElementById('debug');

/////////////////////FUNCTIONS

//separate user input into items by comma, push it to to-do list, clear input field
submitTasksBtn.addEventListener('click', function () {
  let input = userInput.value;
  input = input.split(',');
  for (var i = input.length; i > 0; i--) {}

  input.forEach((element) => {
    let idNum = (i + 1, i++);
    toDoList.innerHTML += `<li id="li-${idNum}" class="list-item">${element}</li> <button id="btn-${idNum}" class="removeBtn hidden">x</button>`;
  });
  userInput.value = '';
});

//test 1, test2, test 3, test4

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
  //show/hide remove buttons onclick
  for (let i of removeBtns) {
    i.classList.toggle('hidden');
  }
});

//test 1, test2, test 3, test4

////////////////NOT YET IMPLEMENTED
//remove item when adjacent rmvBtn clicked
removeBtns.addEventListener('click', function () {
  console.log(removeBtns);
});

//functionality for save button
saveBtn.addEventListener('click', function () {});

////////////////////DEBUG
debugBtn.addEventListener('click', function () {
  console.log(toDoList);
});
