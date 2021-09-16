# Git Flow

## Main worflow when working with Git

    git init
        > git add .
            > git commit -m "Commit Message"
                > git push origin <branch>

    git branch <new-branch> <original branch>
        > git add .
            > git commit -m "Commit Message"
                > git push origin <branch>

## When cloning a repo

-   Clone an existing repository:

```bash
    Via SSH
    $ git clone ssh://user@domain.com/repo.git


    Via HTTP
    $ git clone http://domain.com/user/repo.git
```

-   Create a new local repository in the current directory:
    ```bash
    $ git init
    ```

## Handling Local Changes

-   Checking for changes in working directory:

    ```bash
    $ git status
    ```

-   Checking for changes to tracked files:

    ```bash
    $ git diff
    ```

-   See changes/difference of a specific file:

    ```bash
    $ git diff <filename>
    ```

-   Add all current changes to the next commit:

    ```bash
    $ git add .
    ```

-   Add only the mentioned files to the next commit:

    ```bash
    $ git add <filename1> <filename2>
    ```

-   Commit with message:

    ```bash
    $ git commit -m "message here"
    ```

-   Move uncommitted changes from current branch to some other branch:
    ```bash
    $ git stash
    $ git checkout branch2
    $ git stash pop
    ```

## Handling Branches

-   List all local branches:

    ```bash
    $ git branch
    ```

-   List local/remote branches:

    ```bash
    $ git branch -a
    ```

-   Switch HEAD (current) branch:

    ```bash
    $ git checkout <branch>
    ```

-   Create a new branch from an exiting branch and switch to new branch:

    ```bash
    $ git checkout -b <new_branch> <existing_branch>
    ```

-   Create a new branch based on your current HEAD:

    ```bash
    $ git branch <new-branch>
    ```

-   Delete a local branch:

    ```bash
    $ git branch -d <branch>
    ```

-   Rename current branch to new branch name:

    ```bash
    $ git branch -m <new_branch_name>
    ```

-   Force delete a local branch (You will lose unmerged changes!):
    ```bash
    $ git branch -D <branch>
    ```

## Handling Updates and Publishes

-   List all current configured remotes:

    ```bash
    $ git remote -v
    ```

-   Add new remote repository, named <remote>:

    ```bash
    $ git remote add <remote> <url>
    ```

-   Remove a remote:

    ```bash
    $ git remote rm <remote>
    ```

-   Download all changes from <remote>, but don't integrate into HEAD:

    ```bash
    $ git fetch <remote>
    ```

-   Get all changes from HEAD to local repository:

    ```bash
    $ git pull origin master
    ```

-   Publish local changes on a remote:
    ```bash
    $ git push remote <remote> <branch>
    ```
