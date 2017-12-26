# Exemple de projet Mobx, Firebase, React

## Regarder le code

Les branches :

* `master` : état géré grâce a mobx, app en local
* `firebase` : ajout de firebase, synchro en temps réél avec Firestore

## Lancer le projet en local

* `git clone https://github.com/the-smaug/example-react-mobx-todo.git`
* `yarn install`
* `yarn dev`

Petite spécificité avec Firebase :

* ajoutez votre config dans le fichier src/database.js

```js
{
    apiKey: "efzkjnUEZUnv8FE2UVDzu32FE",
    authDomain: "myApp.firebaseapp.com",
    databaseURL: "https://myApp.firebaseio.com",
    projectId: "myApp",
    storageBucket: "myApp.appspot.com",
    messagingSenderId: "3298U528939"
  };
```
