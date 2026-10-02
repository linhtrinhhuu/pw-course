# Take away lesson 08
## 1. Git Merge
Normally, we will merge from other branchs to main branch.
- Fast forward merge
    - It will not create the merge commit.
    - Occur when do not have any change on main branch since the feature branch created.
- Three way merge
    - It will create the merge commit.
    - Occur when have changes on main branch since the feature branch created.

**Note**: Accept three way merge in VIM editor: After `git merge <branch>`; press `ESC`; press `:wq`; press `Enter`. 

## 2. Git Conflict
Conflict happen when a file has changed by 2 persons. 
```
<<<<<<<<< HEAD (Current Change)
code in main branch
=========
code in other branch
>>>>>>>>> other_branch (Incoming Change)
```
Steps:
- To handle conflict, we need to contact with author who written code in same file with you;
- And then remove the unnesscessary codes; 
- Just keep code you want. Example: `code in main branch`;
- `git add .`
- `git commit -m "resolve conflict"`

**Note**: To cancel a merge action such as `git merge <branch_name>`, we use command `git merge --abort`

## 3. Git Rebase
In case my last commit on A branch is not same main branch, we should stand on A branch and then perform rebase `git rebase main`.

After that, switch to main and then perform git merge normally.

## 4. Git Squash
Squash is combine commits to one commit.

Perfrom squash follow steps below:
- On main branch, execute command `git rebase -i HEAD~ <commit_numbers>`. commit_number is amount commit that we want to combine. 
- Terminal will open VIM editor with contents of 2 commits. We need to edit `pick` to `s` on 1 of 2 row.
    ```VIM
    pick commit_id_1 commit_message_1
    pick commit_id_2 commit_message_2
    ```
- Press `i` to switch to edit mode of VIM
- Change a `pick` to `s`
- Press `ESC` to quit edit mode of VIM
- Press `:wq` + `ENTER` to write and quit VIM
- Terminal will continue as us use which commit message. So we will comment one and keep the rest one.
- Press `i` to switch to edit mode of VIM
- Change to keep one commit message
- Press `ESC` to quit edit mode of VIM
- Press `:wq` + `ENTER` to write and quit VIM