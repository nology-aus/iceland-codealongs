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
    Via SSH
    $ git clone ssh://user@domain.com/repo.git

    Via HTTP
    $ git clone http://domain.com/user/repo.git

-   Create a new local repository in the current directory:
    $ git init

## Handling Local Changes

-   Checking for changes in working directory:
    $ git status

-   Checking for changes to tracked files:
    $ git diff

-   See changes/difference of a specific file:
    $ git diff <filename>

-   Add all current changes to the next commit:
    $ git add .

-   Add only the mentioned files to the next commit:
    $ git add <filename1> <filename2>

-   Commit with message:
    $ git commit -m "message here"

-   Move uncommitted changes from current branch to some other branch:
    $ git stash
    $ git checkout branch2
    $ git stash pop

## Handling Branches

-   List all local branches:
    $ git branch

-   List local/remote branches:
    $ git branch -a

-   Switch HEAD (current) branch:
    $ git checkout <branch>

-   Create a new branch from an exiting branch and switch to new branch:
    $ git checkout -b <new_branch> <existing_branch>

-   Create a new branch based on your current HEAD:
    $ git branch <new-branch>

-   Delete a local branch:
    $ git branch -d <branch>

-   Rename current branch to new branch name:
    $ git branch -m <new_branch_name>

-   Force delete a local branch (You will lose unmerged changes!):
    $ git branch -D <branch>

## Handling Updates and Publishes

-   List all current configured remotes:
    $ git remote -v

-   Add new remote repository, named <remote>:
    $ git remote add <remote> <url>

-   Remove a remote:
    $ git remote rm <remote>

-   Download all changes from <remote>, but don't integrate into HEAD:
    $ git fetch <remote>

-   Get all changes from HEAD to local repository:
    $ git pull origin master

-   Publish local changes on a remote:
    $ git push remote <remote> <branch>
