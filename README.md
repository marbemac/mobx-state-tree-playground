Quick little playground to demonstrate an issue in mobx-state-tree.

* In development, no errors caught.
* In production, "[mobx-state-tree] Cannot add an object to a state tree if it
  is already part of the same or another state tree. Tried to assign an object
  to '/todos/1/status', but it lives already at '/todos/0/status'".

Works:

1. yarn
2. yarn start
3. open localhost:3000
4. click the button on the screen, note no errors in console

Bug:

1. yarn build
2. yarn start:prod
3. open localhost:3000
4. click the button on the screen, note error in the console

Important files:

1. src/home.js
2. src/mobx-playground.js
