# Takeaway lesson 06
## 1. Git Remote

Git remote allow us perform actions on other repositories.
- Add a repository
    ```bash
    git remote add <remote_name> <repository_url> 
    # We should default remote name is "origin", it can be changed but not recommended.
    ```
- Add another repository
    ```bash
    git remote add <another_remote_name> <repository_url>
    # to add another repository on that git folder, put another name with another repository url 
    ```

- List all remotes
    ```
    git remote -v
    ```
- Remove a remote
    ```
    git remote remove <remote_name>
    ```

## 2. Git clone, pull, push
- `git clone` to copy all source code in a repository into any folder on our computer
    ```bash
    # Clone a repository from GitHub with folder name is same as on GitHub
    git clone <repository_url>

    # Clone a repository from GitHub with a special folder name
    git clone <repository_url> <folder_name>
    ```
- `git push` to push your source code from local machine to GitHub
    ```bash
    git push <remote_name> <branch_name>

    #ex: 
    git push origin main
    ```
- `git pull` to pull source code from gitHub to local machine
    ```bash
    git pull <remote_name> <branch_name>

    #ex:
    git pull origin main
    ```

## 3. Git ignore
`.gitignore` is a config file. It contains file names those disappear on git stages such as working, staging repository stages.

Example ignore a file, folder or a file in folder: 
- `file-name.txt` 
- `folder-name/` 
- `folder-name/file-name.txt`

## 4. Git branch
- Config default branch
    ```bash
    git config --global init.defaultBranch <branch_name>
    ```
- Create a new branch without switch to new branch
    ```bash
    git branch <new_branch_name>
    ```
- Switch to a branch
    ```bash
    git checkout <branch_name>
    # or
    git switch <branch_name>
    ```
- Create a new branch with switch to new branch
    ```
    git checkout -b <new_branch_name>
    ```
- List branchs
    ```
    git branch
    ```
## 5. JavaScript: Class
```JavaScript
class <ClassName> {
    // Declare propertises
    <propertiseName1>: <data_type>;
    <propertiseName2>: <data_type>;

    // Add constructor function
    constructor (<parameter_propertiseName1>: <data_type>, <parameter_propertiseName2>: <data_type>) {
        this.<propertiseName1> = <propertiseName1>;
        this.<propertiseName2> = <propertiseName2>;
    }

    // Add methods (optional)
    <methodName> (<parameter>) {
        // Actions inside method
    }
}

// Use class
const <constName> = new <ClassName>(<argument_propertiseName1>, <argument_propertiseName2>);

// Use method of class
<constName>.<methodName>(<parameter>);
```
- `<ClassName>` use PascalCase to name. Ex: `ClassName`, `Student`
- `<propertiseName1>` use camlCase to name. Ex: `horsePower`
- `<data_type>` such as `string`, `number`, `float`,..
- `constructor` is an inital function (*must have*)
- `<parameter_propertiseName1>` is parameter that will be declared. Name of it should be same `<propertiseName1>`
- `<argument_propertiseName1>` is value of argument to insert to parameter in `constructor()` function

*Example*:
```JavaScript
class Car {
    // Declare propertises
    horsePower: number;
    color: string;
    manufactory: string;

    // Add constructor function
    constructor(horsePower: number, color: string) {
        this.horsePower = horsePower;
        this.color = color;
        this.manufactory = "Volswagen";
    }

    // Add method
    changeManufactory(newManufactory: string) {
        this.manufactory = newManufactory;
    }
}

// Use class
const car1 = new Car(1500, "Red");
const car2 = new Car(1000, "Blue");
console.log(car1); // Output: Car { horsePower: 1500, color: 'Red', manufactory: 'Volswagen' }

// Use method of class
car1.changeManufactory("China");
console.log(car1); // Output: Car { horsePower: 1500, color: 'Red', manufactory: 'China' }
```

## 6. JavaScript string ultis function
### 6.1 Remove space
- `trim()`: remove spaces on the left and right of a string
    ```
    let text = "  Hello World  "
    console.log(text.trim()); // Output: "Hello World" 
    ```
- `trimStart()`: remove spaces on the left of string
    ```
    let text = "  Hello World  "
    console.log(text.trimStart()); // Output: "Hello World  " 
    ```
- `trimEnd()`: remove spaces on the right of string
    ```
    let text = "  Hello World  "
    console.log(text.trimEnd()); // Output: "  Hello World" 
    ```

### 6.2 Convert string to uppercase and lowercase
- `toUpperCase()`:
    ```
    let text = "JavaScript";
    console.log(text.toUpperCase()); // Output: "JAVASCRIPT"
    ```
- `toLowerCase()`;
    ```
    let text = "JavaScript";
    console.log(text.toLowerCase()); // Output: "javascript"
    ```

### 6.3 Check string includes something
```
let text = "Hello World";
console.log(text.includes("Hello")); // Output: true
console.log(text.includes("hello")); // Output: false
```

### 6.4 Split string
```
let text = "Today is Monday";
let date = "23/12/1999";
console.log(text.split(" ")); // Output: ["Today", "is", "Monday"]
console.log(date.split("/")); // Output: ["23", "12". "1999"]
```

### 6.5 Replace string
```
let text = "Hello World";
console.log(text.replace("Hello", "Hi")); // Output: "Hi World"
```

[More ulti string functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Git Advance Squash, Rebase, Conflict
[Details in here](./git-squash-rebase-conflict.md)



