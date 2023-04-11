// Write a function that creates a closure and returns a function that can add a specific number to any number passed to it.
//  For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.


function addNumberClosure(num) {
    function addNumber(x) {
      return x + num;
    }
    return addNumber;
  }

const addFive = addNumberClosure(5);  // Creates a closure that adds 5 to a number
const addTen = addNumberClosure(10);  // Creates a closure that adds 10 to a number

const result1 = addFive(7);   // Adds 5 to 7, result is 12
const result2 = addTen(7);    // Adds 10 to 7, result is 17

console.log(result1, result2); // Output: 12 17

// __________________________||||||||||||||||||||||||||||||||____________________________________

// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function searchArray(arr, val) {
    // Base case: If the array is empty, return false
    if (arr.length === 0) {
      return false;
    }
    
    // Check if the first element of the array is the value we're looking for
    if (arr[0] === val) {
      return true;
    }
    
    // Recursive case: Search the rest of the array for the value
    return searchArray(arr.slice(1), val);
  }


  const arr = [1, 2, 3, 4, 5];
  console.log(searchArray(arr, 3));  // Output: true
  console.log(searchArray(arr, 6));  // Output: false
    
// __________________________||||||||||||||||||||||||||||||||____________________________________

// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function addNewParagraph(text) {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    
    // Set the text content of the new paragraph element
    newParagraph.textContent = text;
    
    // Get the body element of the document
    const body = document.querySelector('body');
    
    // Add the new paragraph element to the body
    body.appendChild(newParagraph);
  }

  addNewParagraph('This is a new paragraph!');


// __________________________||||||||||||||||||||||||||||||||____________________________________

//   Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addNewListItem(text) {
    // Create a new list item element
    const newListItem = document.createElement('li');
    
    // Set the text content of the new list item element
    newListItem.textContent = text;
    
    // Get the unordered list element
    const unorderedList = document.querySelector('ul');
    
    // Add the new list item element to the unordered list
    unorderedList.appendChild(newListItem);
  }

  addNewListItem('This is a new list item!');

// __________________________||||||||||||||||||||||||||||||||____________________________________

//   Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color
  

function changeBackgroundColor(element, color) {
    // Set the background color of the element
    element.style.backgroundColor = color;
  }

  
  const myElement = document.querySelector('#my-element');
changeBackgroundColor(myElement, 'red');




// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store

function saveObjectToLocalStorage(key, obj) {
    // Convert the object to a JSON string
    const objString = JSON.stringify(obj);
    
    // Save the object string to localStorage
    localStorage.setItem(key, objString);
  }

const myObject = { name: 'John', age: 30 };
saveObjectToLocalStorage('myKey', myObject);


// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function getObjectFromLocalStorage(key) {
    // Get the object string from localStorage
    const objString = localStorage.getItem(key);
    
    // Parse the object string into an object
    const obj = JSON.parse(objString);
    
    // Return the object
    return obj;
  }
  const mObject = getObjectFromLocalStorage('myKey');
  console.log(mObject);
    


//   Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


function saveObjectPropertiesToLocalStorage(obj) {
    // Save each property to localStorage
    for (let prop in obj) {
      localStorage.setItem(prop, obj[prop]);
    }
    
    // Retrieve the object from localStorage
    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const prop = localStorage.key(i);
      newObj[prop] = localStorage.getItem(prop);
    }
    
    // Return the new object
    return newObj;
  }

  
const nyObject = { name: 'John', age: 30 };
const newObject = saveObjectPropertiesToLocalStorage(nyObject);
console.log(newObject);
