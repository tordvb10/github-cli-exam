# Set up project on github from command line

This project is a test projct where everything was done through the command line, no mouse cliking or webbrowser viewing.

The picture below illustrate the code I needed to run in order to make this work. First you'd need som program on your computer, if you not allready have:
<ol>
    <li>
        <a href="https://git-scm.com/downloads">link to install GitHub on your computer.</a> <br/>Or install it from command prompt: <br/>
    </li>
    <li>
        <a href="https://cli.github.com/">link to install GitHub Cli on your computer.</a>
    </li>
</ol>


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



<img src="src/assets/image.png" alt="picture of code in command prompt"></img>

