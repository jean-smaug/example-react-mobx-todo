import firebase from "firebase";
require("firebase/firestore");

const config = {};

firebase.initializeApp(config);

export const db = firebase.firestore();

export const addTodo = async todo => {
  await db.collection("todos").add(todo);
};

export const removeTodo = async todoId => {};

export const checkTodo = async todo => {
  await db.collection("todos").add(todo);
};
