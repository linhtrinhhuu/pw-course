# Takeaway lesson 2
## 2.1 Git Introduction
Git and Linux are same father.

Git porpulation is more than 90%.

Git is a program on the local machine.
GitHub, Bitbucket,.. are webs service.
We can upload Git Repository to them.

**=> Git and GitHub are difference.**

## 2.2 Three states in Git
- Working (Contains the changed files)
- Staging (Contains files that moved from Working state to Staging area)
- Repository (Contains the files those grouped to commitations)
### 2.2.1 From Working to Staging
Add a file or some files from Working state to Staging state

`git add <file_name>`

`git add <file_name_1> <file_name_2>`

**Note: If file or files are in a folder, we need to put the folder directory with file name**

`git add <folder_directory>/<file_name>`

Add all files from Working state to Staging state

`git add .`

### 2.2.2 From Staging to Repository
Commit one or more files from Staging area to Repository area 

`git commit -m "<commit_message>"`

## 2.3 Check status with git status

Based on files are on which states, the color highlight of that files will return the corresponding color. If run `git status` while file in :
- Working State
    - No file => return no tracking file
    - Have some files => return a files list with red highlight
- Staging State
    - Have some files => return a files list with green highlight   
- Repository State
    - The commited files will no appear

## 2.4 View list commit with git log
Use `git log` to return a list of commitations order by desc. Content of a commitation includes Commit ID, Author Name, Author Email, Commit Message.

## 2.5 Config with git config

- Config a global configuration for all current Git folders and the new Git folders that will create in the future. **(Recommened to use)**

    ```
    git config --global user.name "Your_Name"
    git config --global user.email "Your_Email" 
    ```

- Config a special configuration for a Git folder

    ```
    git config  user.name "Your_Name"
    git config  user.email "Your_Email" 
    ```

- To see configurations before
    ```
    git config --list
    ```
    or
    ```
    git config list
    ```

## 2.6 Git convention

Git commit conventiion follow a standard on the world. However, we should follow our team convention. Below is the basic convention of Git commit.

`<type>: <short_description>`

- **chore** type: is the minor adjusts or remove the redundant files
- **feat** type: is the new features or testcases
- **fix** type: is fix the error before
- short_description: is a short describer have about 50 characters

*Examples*:
```
git commit -m "chore: add .env file"
git commit -m "feat: add actions for testcase PROD_002"
git commit -m "fix: error the Purchase button is disappear after click Add to Cart button"
```

## 2.7 JavaScript Introduction

JavaScript is the most porpular program language in 10 years.

JavaScript is a nervous system of a website.

JavaScript is a basic language so TypeScript is an extention from JavaScript.

When we run JavaScript throw VS code, NodeJS we help us launch it. 


## 2.8 First program - Hello World

Hello World is the first program in the the world.

To run this simple program, do steps below:

1. Create a JS file in VCS (file_name.js)
2. Type JS code `console.log("Hello World");`
3. In Terminal screen, enter `node <file_name.js>` or `node <parent_folder>/<file_name.js>`

=>  The Terminal will return `Hello World`

## 2.9 Comment in JavaScript

- Comment a row code or a note

    Add `// ` before your row code

    *Example*:

    ```
    // console.log("comment");
    ```
    or
    ```
    console.log(comment); // This code will print "comment"
    ```
- Comment multi row codes

    Put `/*` on the first comment row code and `*/` on the last comment row code.

    *Example*:
    ```
    /*
    console.log("comment1");
    console.log("comment2");
    */
    ```

- Comment by hotkeys

    Highlight your code that you wanna comment; Press Ctrl + / 

## 2.10 Variable and Constant in JavaScript
| Feature | Variable | Constant |
| ------- | -------- | -------- |
| Value Modification | Can be changed or reassigned during program execution. | Cannot be changed or reassigned once initialized. |
| Memory Allocation | Points to a memory location whose contents can mutate. | Points to a memory location marked as read-only. |
| Primary Purpose | Storing dynamic data (e.g., counters, user input, state). | Storing fixed baseline values (e.g., mathematical constants, API URLs, config limits). |
| Declaration Scope | Used for values that evolve throughout a process. | Used to prevent accidental modification and magic numbers. |
| Naming Convention | (Common)	`camelCase` or `snake_case` (e.g., `userAge`, `total_count`) | `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_LIMIT`, `PI`) |
| Example | `let age = 25; age = 26;` | `const PI = 3.14159;` |

**Note**: 

No use `var`.

If reassign a constant then program will be error.
## 2.11 Data Types in JavaScript
### 2.11.1 Number

*Example*:
```
const age = 18; 
const PI = 3.14;
const infinity = 100/0; // It will return Infinity after print
const notNumber = 100 - "Hello"; // It will return NaN after print (Not a Number)
```

### 2.11.2 String

There are 3 ways to write a string.
```
const firstName = "Linh";
const lastName = 'Trinh';
const template = `age: 10`;
```

### 2.11.3 Boolean

Boolean have 2 logical values `true` and `false`

```
const isActive = true;
const isBoy = false;
```
**Note**: Use function `typeof` to know a type of data `console.log(typeof data);`

## 2.12 Comparison Operator (Toán tử so sánh)

`<`, `>`, `<=`, `>=` are operators.
Results of them will be returned `true` or `false`

```
const a = 10;
const b = 20;

console.log(a < b); // return true
console.log(a > b); // return false
console.log(a <= b); // return true
console.log(a >= b); // return false
```

Equality comparison `===`, `==` and inequality comparison `!==`, `!=`

```
const a = 10;
const b = "10";

console.log(a === b); // return false
console.log(a !== b); // return true
console.log(a == b); // return true
console.log(a != b); // return false
```

## 2.13 Arithmetic Operator (Toán tử toán học)
`+`, `-`, `*`, `/` same as plus, minus, times and devided by.
```
const a = 10;
const b = 20;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
```

## 2.14 Logical Operator (Toán tử logic)

`&&` (AND): return `true` if 2 statement are `true`

`||` (OR): return `true` if 1 or 2 statement is `true`

| A | B | A && B | A &#124;&#124; B |
|---|---|----------|----------------|
|true|true|true|true|
|true|false|false|true|
|false|true|false|true|
|false|false|false|false|

## 2.15 Unary Operator (Toán tử 1 ngôi)

- **Prefix**: Increase/Decrease first, return late (Tăng/giảm trước, trả về sau)
    - `++x;`

    *Examples*:
    ```
    let x = 10;

    console.log(++x); // return 11
    console.log(++x); // return 12
    console.log(x); // return 13
    ```
    - `--x;`

    *Examples*:
    ```
    let x = 10;

    console.log(--x); // return 9
    console.log(--x); // return 8
    console.log(x); // return 7
    ```
- **Post**: Increase/Decrease late, return first (Tăng/giảm sau, trả về trước)
    - `x++;`

    *Examples*:
    ```
    let x = 10;

    console.log(x++); // return 10
    console.log(x++); // return 11
    console.log(x); // return 12
    ```

    - `x--;`

    *Examples*:
    ```
    let x = 10;

    console.log(x--); // return 10
    console.log(x--); // return 9
    console.log(x); // return 8
    ```
## 2.16 Additional Knowledge
### 2.16.1 Remainder Operator (Toán tử chia dư)

`%` will only return the remainder
```
console.log(3%3); // return 0 because 3 divided by 3 leaves a remainder of 0
console.log(3%2); // return 1 because 3 is not divisible by 2 leaves a remainder of 1
console.log(3%1); // return 0 because 3 divided by 1 leaves a remainder of 0
console.log(1%2); // return 1 because 1 is not divisible by 2 leaves a remainder of 1
console.log(100%80); // return 20 because 100 is not devisible by 80 leaves a remainder of 20
```

Apply these to find even and odd numbers

```
const a = 6;
console.log(a%2); // return 0 because 6 devided by 2 leaves a remainder of 0
// => 6 is an even number

const b = 5;
console.log(b%2); // return 0 because 5 is not devisible by 2 leaves a remainder of 0
// => 5 is an odd number
```

### 2.16.2 Print String and Variable

- Use `+`
    ```
    const myHeight = 181;
    const myWeight = 63;

    console.log("My height is "+myHeight+" cm and my weight is "+myWeight+" kg.");
    // Print: My height is 181 cm and my weight is 63 kg.
    ```
- Use `,`
    ```
    const myHeight = 181;
    const myWeight = 63;

    console.log("My height is",myHeight,"cm and my weight is",myWeight,"kg.");
    // Print: My height is 181 cm and my weight is 63 kg.
    ```
**Note**: If use `,` then no need to add more some `space`.