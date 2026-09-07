# Takeaway lesson 3
## 3.1 Git - unstage
Unstage that mean move files in the Staging area to the Working area.

Unstage one or more files
```
git restore --staged <file_name>
```
or
```
git restore --staged <file_name_1> <file_name_2>
```
Unstage all files
```
git restore --staged .
```

## 3.2 Git - un-commit

Uncommit that mean move files in the Repository area to the Staging area or Working area.
- From Repository area to Staging area
    ```
    // uncommit the lastest commit
    git reset --soft HEAD~1

    // uncommit 3 lastest commits
    git reset --soft HEAD~3
    ```
- From Repository area to Working area
    ```
    // uncommit the lastest commit
    git reset HEAD~1

    // uncommit 3 lastest commits
    git reset HEAD~3
    ```

**Note**: The first commit can not be reset. So the solution is remove .git then init again. 

## 3.3 Git - Amend commit message

Adjust the lastest commit message.
```
git commit --amend -m "<new_commit_message>"
```

## 3.4 JavaScript - Conditionals (if)

Conditional Statement to check a logic before execute it. That mean the condition is true then run code inside it.

Syntax:
```
if (<condition>){
    // code...
}
```

*Examples*:
```
const bateryPercentage = 12;
if(bateryPercentage < 15){
    console.log("Please charge your phone!");
}
// No print if bateryPercentage >= 15; print "Please charge your phone!" if bateryPercentage < 15.
```
```
const hour = 12;
if(hour >= 11 && hour <= 13){
    console.log("Now is your rest time!");
}
// No print if hour < 11 and hour > 13; print "Now is your rest time!" if hour in 11 to 13.
```

## 3.5 JavaScript - Loops (i)

Syntax:

```
for (<inital_condition>; <loop_condition>; <update>){
    // code..
}
```
- **inital_condition**: execute once when start loop.
- **loop_condition**: if true then continue to run, false then break loop.
- **update**: run at the end of each loop, to change value of the count variable.

*Example*:
```
for (let i = 0; i < 3; i++){
    console.log("Hello");
}
```
*Explaination*:
- **Loop 1st**: 
    - i = 0; 
    - check i < 3 => true => print "Hello"; 
    - i++ => update i = 1; 
    - then continue loop
- **Loop 2nd**: 
    - i = 1; 
    - check i < 3 => true => print "Hello"; 
    - i++ => update i = 2; 
    - then continue loop
- **Loop 3rd**: 
    - i = 2; 
    - check i < 3 => true => print "Hello"; 
    - i++ => update i = 3; 
    - then continue loop
- **Loop 4th**: 
    - i = 3; 
    - check i < 3 => false => break loop

## 3.6 JavaScript - Conventions

- **snake_case**: 
    - ex: i_love_you
    - name for column name in database (*not use in this course*)
- **kebab-case**: 
    - ex: i-love-you
    - name for file name, folder name 
- **camelCase**:
    - ex: iLoveYou
    - name for variable name, function name
- **PascalCase**: 
    - ex: ILoveYou
    - name for class name
- **SCREAMING_SNAKE_CASE**: 
    - ex: I_LOVE_YOU
    - name for object in .env