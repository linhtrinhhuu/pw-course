# Takeaway lesson 04
## 4.1 Javascript - Object
### 4.1.1 What is Object?
Object is a data type. It store a list couples **key** - **value**.

Data in an unique variable => easy manage and recall.

*Examples*:
```
let car1 = {
    name: "Acura NSX",
    manufacturer: "Honda",
    productionYear: "2017"
};

let car2 = {
    name: "8C Competizione",
    manufacturer: "Alfa Romeo",
    productionYear: "2013"
};
```
### 4.1.2 Declare Object
- Option 1: Object Literal (*Porpular*)
    ```
    let myInfo = {
        name: "Linh",
        age: 18
    };
    ```
- Option 2: Use `new Object()`
    ```
    let myInfo = new Object();
    myInfo.name: "Linh";
    myInfo.age: 18;
    ```
**Note**: Normally, Key is a string without `space`, special characters, `""`. 
However, if key contains `space`, special characters then we have to put that string in `""` or `''`. 
```
let myInfo = {
    name: "Linh",
    age: 18,
    "Is Handsome?" : true // key contains space and special characters so we have to put it in "" or ''
};
```
### 4.1.3 Retrieving data in Object
- Option 1: Use dot
    ```
    let myInfo = {
        name: "Linh",
        age: 18
    };
    console.log(myInfo.name); // Use dot at here to print value of myInfo.name
    ```
- Option 2: Use bracket
    ```
    let myInfo = {
        name: "Linh",
        age: 18,
        "Is Handsome?" : true
    };
    console.log(myInfo["Is Handsome?"]); // Only use bracket if key contains space or special characters
    ```
### 4.1.4 Assining value for Object
```
let myInfo = {
    name: "Linh",
    age: 18
};
console.log(myInfo); // print { name: "Linh", age: 18 }

myInfo.gender = "Male";
console.log(myInfo); // print { name: "Linh", age: 18, gender: Male }
```
**Note**: 
- If that key is not existing in the object then that key and that value will be created into that object.
- If that key is existing in the object then value of that key will be updated.

### 4.1.5 CRUD in Object
```
let myInfo = {
    name: "Linh",
    age: 18
};
myInfo.gender = "Male" // CREATE a new couple key - value
myInfo.name = "Ninh" // UPDATE value of key
delete myInfo.gender // DELETE a couple key - value
```
### 4.1.6 Nested Object
- Declare nested object
    ```
    const myInfo = {
        name: "Linh",
        address: {
            num: 23,
            street: "Infinity",
            city: {
                name: "Hanoi",
                code: 100000
            }
        }
    }
    ```
- Retrieving data
    ```
    console.log(myInfo.address.city.name); // print "Hanoi"
    ```

### 4.1.7 Conclusion
|Actions|Syntax|Examples|
|-------|------|--------|
|Declare|`{}` or `new Object()`|`let obj = {a: 1,b: "hai"};`|
|Retriev|`.key` or `["key"]`|`obj.a` or `obj["a"]`|
|CREATE/UPDATE|`obj.key = value;`|`obj.a = "mot";`|
|DELETE|`delete obj.key;`|`delete obj.b;`|
|Nested|value is Object|`obj.a1.a2.a3`|

## 4.2 Javascript - Array
### 4.2.1 What is array? Why we need array?
An array is a data type that stores values in an ordered list.

Index of array start from 0.

`let colours = ["yellow", "red", "blue", "orange"]; // index 0 have value is yellow`

### 4.2.2 Declare array
- Option 1: Array Literal (*Porpular*)
    ```
    let colours = ["yellow", "red", "blue", "orange"];
    let age = [23, 12, 19]; // 
    let nullArray = []; // a null array
    ```
- Option 2: Use `new Array()`
    ```
    let colours = new Array("yellow", "red", "blue", "orange");
    ```
**Note**: Elements of array can contains many data types. However, we should only use a data type for each array.
### 4.2.3 Retriving array
```
let colours = ["yellow", "red", "blue", "orange"];

console.log(colours[0]); // print yellow
console.log(colours[1]); // print red
console.log(colours[2]); // print blue
console.log(colours[3]); // print orange
```
```
// Count a length of an array
console.log(colours.length);
```
```
// Get element of the last index in an array (use length)
console.log(colours[colours.length - 1]);
```
```
// Re-retrive element of an array
colours[3] = "pink";
```

### 4.2.4 Add/Delete element/s
- Add element into the last of array `.push()`
    ```
    colours.push("purple");
    ```
- Delete the last element of array `.pop()`
    ```
    colours.pop();
    ```
- Add element into the first of array `.unshift()`
    ```
    colours.unshift("brown");
    ```
- Delete the first element of array `.shift()`
    ```
    colours.shift();
    ```

### 4.2.5 Combine Array with Loop
- Use `for i`
    ```
    let colours = ["yellow", "red", "blue", "orange"];

    for (let i = 0; i < colours.length; i++) {
        console.log(`Màu số ${i + 1} là: ${colours[i]}`);
    }
    ```

## 4.3 Javascript - Function
### 4.3.1 What is Function? Why need Function?
A function is a block of code that contains one or multiple statements. 

We can execute those statements multiple times simply by calling the function.

*Example*:
```
function showHeader() {
    console.log("=============");
    console.log("Hi. Welcome to my house!");
    console.log("=============");
}

showHeader(); // execute function first time
showHeader(); // execute function second time
```
### 4.3.2 Declare function
```
function functionName()  {
    // commands inside
}
```

- Name a function name: 
    - use camelCase convention 
    - describe an action
    - Examples: `countMark`, `getStudentList`

### 4.3.3 Call and Excecute function
```
functionName();
```

### 4.3.4 Passing parameters to a function
```
function calculateSumOfTwoNumbers(num1, num2) { //num1 and num2 are parameters.
    const sum = num1 + num2;
    console.log(`Tổng của ${num1} và ${num2} là: ${sum}`);
}
calculateSumOfTwoNumbers(23, 12); // 23 and 12 are arguments.
```

## 4.4 Javascript - array utils functions
### 4.4.1 `map()` function
```
const numbers = [1, 6, 3, 8];
const doubleNumbers = numbers.map(num => (num * 2)); 
console.log(numbers); // print [1, 6, 3, 8]
console.log(doubleNumbers); // print [ 2, 12, 6, 16 ]
```
Explain syntax in `map()`:

- `num` is a parameter representing each elements
- `=>` that separates the function parameters from the body, replacing the traditional function keyword.
- `(num * 2)` is function body

Use `map()` function to return a new array with opject data
```
const students = ["Để", "Mai", "Tính"];
const studentsOpject = students.map((name, index) => ({
    id: index + 1,
    name: name,
    studentCode: `HN00${index + 1}`
}));
console.log(students);
console.log(studentsOpject);
// output of studentsOpject
// [
// { id: 1, name: 'Để', studentCode: 'HN001' },
// { id: 2, name: 'Mai', studentCode: 'HN002' },
// { id: 3, name: 'Tính', studentCode: 'HN003' }
// ]
```
**Conclusion**: `map()` creates a brand-new array containing the transformed values of every element from the original array, leaving the original array unchanged.
### 4.4.2 `filter()` function
```
const numbers = [2, 6, 34, 5, 7, 8];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(numbers); 
console.log(evenNumbers); // print [ 2, 6, 34, 8 ]
```

Explain syntax in `filter()`:
- `num` is a parameter representing each elements
- `=>` that separates the function parameters from the body, replacing the traditional function keyword.
- `num % 2 === 0` is function body that contains the condition statement/s.

**Conclusion**: `filter()` creates a brand-new array containing only the elements that satisfy a specified condition, leaving the original array unchanged.

### 4.4.3 `find()` function
```
const numbers = [2, 6, 34, 5, 7, 8];
const firstEvenNumbers = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumbers); // print 2
```

**Conclusion**: `find()` returns only the first element that meets the condition, while `filter()` is used when you want a list of all matching elements.
### 4.4.4 `reduce()` function
```
const numbers = [2, 6, 34, 5, 7, 8];
const sumOfNumbers = numbers.reduce((total, num) => total + num, 0);
console.log(sumOfNumbers); // output is 62
```
|Loops|total value|num value|Calculate|
|-----|-----------|---------|---------|
|1|0|2|0 + 2|
|2|2|6|2 + 6|
|3|8|34|8 + 34|
|4|42|5|42 + 5|
|5|47|7|47 + 7|
|6|54|8|54 + 8|

Explain syntax in `reduce()`:
- `total` is a declared parameter.
- `num` is a parameter representing each elements.
- `=>` that separates the function parameters from the body, replacing the traditional function keyword.
- `total + num` is function body that contains the condition statement/s.
- `, 0` that mean total starting from 0.

If function body of `reduce()` have more than 2 commands then we need to use `{}` and `return` 
```
const numbers = [2, 6, 34, 5, 7, 8];
const sumOfNumbers = numbers.reduce((total, num) => {
    console.log(`Total: ${total}; Num: ${num}`);
    return total + num;
}, 0);
console.log(sumOfNumbers);
```

**Conclusion**: `reduce()` executes a reducer function on each element to condense the entire array into a single output value, leaving the original array unchanged.

### 4.4.5 `some()` function
```
const numbers = [2, 6, 34, 5, 7, 8];
const haveNumberGreaterThanSix = numbers.some(num => num > 6);
console.log(haveNumberGreaterThanSix); // output is true
```
Explain syntax in `some()`:
- `num` is a parameter representing each elements
- `=>` that separates the function parameters from the body, replacing the traditional function keyword.
- `num > 6` is function body that contain a statement.

**Conclusion**: `some()` checks if at least one element in the array satisfies the specified condition, returning `true` or `false`.

### 4.4.6 `every()` function
```
const numbers = [2, 6, 34, 5, 7, 8];
const isGreaterThanSix = numbers.every(num => num > 6);
console.log(isGreaterThanSix); // output is false
```
Explain syntax in `every()`:
- `num` is a parameter representing each elements
- `=>` that separates the function parameters from the body, replacing the traditional function keyword.
- `num > 6` is function body that contain a statement.

**Conclusion**: `every()` checks if all elements in the array satisfy the specified condition, returning `true` or `false`.

### 4.4.7 `sort()` function

Sort by alphabeta
```
const arr = ["Bruce", "Alice", "Celia"]; 
console.log(arr); // output [ 'Bruce', 'Alice', 'Celia' ]
arr.sort();
console.log(arr); // output [ 'Alice', 'Bruce', 'Celia' ]
```
Sort by desc/asc
```
const numbers = [2, 6, 34, 5, 7, 8];
const sortNumbersByAsc = numbers.sort((a, b) => (a - b));
console.log(sortNumbersByAsc); // output [ 2, 5, 6, 7, 8, 34 ]
const sortNumbersByDesc = numbers.sort((a, b) => (b - a));
console.log(sortNumbersByDesc); // output [ 34, 8, 7, 6, 5, 2 ]
```

**Conclusion**: `sort()` modifies the array in place by sorting its elements according to a compare function, and returns the sorted array.

**Note**: If want to keep values of the original array, we should use `toSorted()` function.