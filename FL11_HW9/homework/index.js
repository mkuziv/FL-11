//task0
function getNumbers(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if ('1'=== str[i] || '2'=== str[i] || '3'=== str[i] || '4'=== str[i] || '5'=== str[i] || 
    '6'=== str[i] || '7'=== str[i] || '8'=== str[i] || '9'=== str[i] || '0'=== str[i] ) {
      arr.push(parseInt(str[i]));
    }
  }
  return arr;
}

//task1
function findTypes() {
  let types = {};
  for (let i = 0; i < arguments.length; i++) {
  let temp = typeof arguments[i];
  types[temp] ? types[temp]++ : types[temp] = 1;
  }
  return types;
}

//task2
function executeforEach(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    fun(arr[i]);
  }
}

// task3
function mapArray(arr, func) {
  let resultArray = [];
  executeforEach(arr, function (item) {
    resultArray.push(func(item));
  })
  return resultArray;
}

//task4
function filterArray(arr, fun) {
  let resultArray = [];
  executeforEach(arr, function (item) {
    if (fun(item)) {
      resultArray.push(item);
    }
  })
  return resultArray;
}

//task5
function showFormattedDate() {
  let d = arguments[0];
  console.log(`Date: ${d.getDate()} ${d.toLocaleString('en-US', { month: 'short' })} ${d.getFullYear()}`);
}

//task6 
function canConvertToDate(a) {
  let day = new Date(a);
  let dayA = day.getTime();  
  if (!dayA) {
    return false;
  } else {
    return true;
  }    
}

//task7
function daysBetween(a, b) {
  let day = 86400000; 
  return Math.round((b - a)/day);
}

//task8
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

function getAmountOfAdultPeople(data) {
  let counter = 0
  filterArray(data, function (el) {
    let temp =new Date(el.birthday);
    let birthday = temp.getFullYear();
    let temp1 = new Date();
    let thisYear = temp1.getFullYear();
    let adult = 18;
    if(thisYear - birthday > adult) {
      counter++
    }
  })
  return counter;
}

//task 9
function keys(obj) {
  let arr = [];
  for (let prop in obj) {
    if(arr) {
    arr.push(prop);
    }
  } 
  return arr;
}

//task10
function values(obj) {
  let arr = [];
  for (let prop in obj) {
    if(arr) {
    arr.push(obj[prop]);
    }
  }
  return arr;
}