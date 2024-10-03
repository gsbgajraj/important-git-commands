# important-git-commands

git config --unset user.name
git config --unset user.email

git config --global user.name "Default Username"
git config --global user.email "default_email@example.com"

#you can do it for particular repository
git config user.name "User 2"
git config user.email "user2@example.com"

#you can do it for particular repository temparary changes are also possible 
git config user.name "Desired User"
git config user.email "desired_user@example.com"

new
  git push origin <branch-name>: Push a specific branch to the remote.7. Undoing Changes:git reset <file>: Unstage a file.git reset --hard: Reset to the last commit and discard all changes.git checkout -- <file>: Discard changes in a file.git revert <commit-hash>: Revert a specific commit.8. Stashing Changes:git stash: Save uncommitted changes for later.git stash list: View all stashed changes.git stash apply: Apply stashed changes.git stash drop: Delete a stash.
