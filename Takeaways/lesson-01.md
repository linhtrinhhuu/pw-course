# Takeaway lesson 1
## 1.1 What is Playwright?
Playwright is a framework of Microsoft https://playwright.dev/.

Playwright support Chrome, Edge, Firefox, and Safari browsers with many versions.

Playwright support both Windows, Linux, and MacOS.

Hightlight of Playwright is auto-wait function. => reduce flacky test

Report of Playwright is easy to check.

Extension Code Gen help auto generate the Playwright code follow by the user actions.

## 1.2 Explaination about NVM, Git, VS Code; config global for Git
NVM is Node Version Management that help manage NodeJS.

Git to manage source code on local.
    - Config your name in git `git config --global user.name "your_name"`
    - Config your email in git `git config --global user.email "your_email"`
    - Config the default branch `git config --global init.defaultBranch main`

GitHub to manage source code on Cloud.

VS Code have extensions to execute Playwright code smoothly.

## 1.3 Use VS Code basic
**Note**: Should disable AI agent to write code by manually.

## 1.4 Run first test by Playwright

Follow steps below:
- Create a new folder

- Open Git bash terminal in that folder

- Init Playwright commands `npm init playwright@latest` > Enter > Enter > Enter > Press n > Enter > Enter

- Open folder that inited Playwright before

- Open `example.spec.ts` file then click "Play" icon on each test

## 1.5 Understand simple Playwright code
Understand. No key to note.

## 1.6 Create SSH key and push code to GitHub
SSH key includes Private key and Public key
- Private key `id_rsa` is on Git - Local machine
- Public key `id_rsa.pub` is on GitHub - Cloud

Create SSH key and put public key into GitHub
- In a terminal window, enter command `ssh-keygen -t rsa -b 4096 -C "your_email"`
- After created successful, view `id_rsa.pub` file to copy key by command `cat ~/.ssh/id_rsa.pub`
- Copy id-rsa string and then paste to GitHub

Push the initial code to GitHub
- Create new repository on GitHub
- Copy `repository_url` on the created repository
- On terminal of VSCode, inti git by command `git init`
- Add remote url `git remote add origin <repository_url>`
- Add all current code into Staging area `git add .`
- Commit all code from Staging area to Repository area `git commit -m"init project"`
- Push code to GitHub `git push origin main`

**=> Done. Check new code on repository of GitHub**
