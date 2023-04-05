'use strict';

//////////////////SELECTORS
const saveBtn = document.getElementById('saveItems');
const removeItemsBtn = document.getElementById('removeItemsBtn');
const highlightBtn = document.getElementById('highlightBtn');
const shuffleBtn = document.getElementById('shuffleItemsBtn');
const submitTasksBtn = document.getElementById('submitBtn');
const removeBtns = document.getElementsByClassName('removeBtn');

const userInput = document.getElementById('userInput');
const toDoList = document.getElementById('to-do-list');
let listItems;

const darkMode = document.getElementById('dark-mode');

/////////////////////FUNCTIONS

//dark mode
darkMode.addEventListener('click', function () {
  document.querySelector('body').classList.toggle('dark-mode');
});

//submit button - take tasks & display them to DOM
submitTasksBtn.addEventListener('click', function () {
  //hide remove buttons if any are present
  if (document.getElementById('btn-0')) {
    for (let i of removeBtns) {
      i.classList.toggle('hidden');
    }
  }

  let input = userInput.value;

  //check that something was typed
  if (input.length < 1) {
    alert('Please enter something.');
  } else {
    //clear default text if present
    let defaultText = document.querySelector('.default');
    if (defaultText) {
      toDoList.innerHTML = '';
    }

    //split tasks by comma
    input = input.split(',');

    //establish i
    for (var i = input.length; i > 0; i--) {}

    //add items to unordered tasks list
    input.forEach((element) => {
      let idNum = (i + 1, i++);
      toDoList.innerHTML += `<li id="li-${idNum}" class="list-item">${element}</li> <button id="btn-${idNum}" class="removeBtn hidden">✕</button>`;
    });
    userInput.value = '';
  }
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

//highlight button - generate random index from listItems, add highlight style to random index
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
  listItems = document.getElementsByClassName('list-item');

  //show/hide remove buttons onclick
  for (let i of removeBtns) {
    i.classList.toggle('hidden');
  }

  //delete specified items on click
  for (var i = 0; i < removeBtns.length; i++) {
    let removeButton = removeBtns[i];
    let listRemove = listItems[i];

    removeButton.addEventListener('click', function () {
      removeButton.remove();
      listRemove.remove();
    });
  }
});

//creating a downloadable file
//i don't know how or why this works
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);
  element.click();
}

//put list-item textContent into array, then print that to file and download it to user device
saveBtn.addEventListener('click', function () {
  listItems = document.getElementsByClassName('list-item');

  let newList = [];
  for (var i = 0; i < listItems.length; i++) {
    newList.push(listItems[i].textContent);
  }
  download('tasks', newList);
});

////////////////NOT YET IMPLEMENTED
//ideally implement some save functionality other than manually downloading a txt file every time (localStorage?)
//figure out how to get this as an app on the phone - web hosting
