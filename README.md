# Set up project on github from command line

This project is a test projct where everything was done through the command line, no mouse cliking or webbrowser viewing. Once you have learnt this mehtod, the workflow will be seemless, and you can do any correction on project from command prompt.

The problem is solved by to steps: 

<ol>
    <li>
        First you'd need to create the project locally i a folder, and work from the folder you want to connect to GitHub. The project you create could be any project, for this example I have chosen a react project.
    </li>
    <li>
        Then you will be needing to connect the project to GitHub with GitHub client. The following steps below will take you through the process.
    </li>
</ol>


The picture below illustrate the code I needed to run in order to make this work. First you'd need som program on your computer, if you not allready have:
<ul>
    <li>
        <a href="https://git-scm.com/downloads">link to install GitHub on your computer.</a>
    </li>
    <li>
        <a href="https://cli.github.com/">link to install GitHub Cli on your computer.</a>
    </li>
</ul>


To install Git in with winget:
```
winget install --id Git.Git -e --source winget
```
To install GitHub Client with winget:
```
winget install --id GitHub.cli
```

In order to work with GitHub from command line, you need to verify that it is you on you computer.
Just run the code in command prompt below, and follow the instructions, to connect your device to the GitHub Client:

```
gh auth login
```

Then initialize Git repository by running command below:
```
git init
```

Ikke ferdig med å foklare dette:
```
gh repo create ChessWithReact --public --source=. --remote=upstream --push
```


Then add your project to a remote repository by either command:
If you use ssh-keys:

```
git add remote origin git@github.com:<user-name>/<projec-name>
```
And if you use web url:

```
git add remote origin https://github.com/<user-name>/<projec-name>
```

You need to set the naming of the default branch to same as the remote branch, you can check your account to see what the naming is for your case, but mostly it would be named: `main`. Then you need to define the default branch by tag `-M`, run this code:

```
git branch -M main
```

Now you can make your first commit as you would normally do, run this these code for intance:
 ```
 git add .          git commit -m "first"
 ```

The first the you push you need to define an upstream to the branch. Lately, you will only need to use command `git push` to push commits, because then the local branch is connected to the remote branch. For this first push, connect your branch to upstream by running this command:

```
git push -u origin main 
```



<img src="src/assets/image.png" alt="picture of code in command prompt"></img>

