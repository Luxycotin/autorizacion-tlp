import { database } from "../db/database.js";


export const getAllTodosCtrl = (req, res) => {
  console.log(req.user.id)
  const todos = database.todos.filter((todos)=>todos.owner === req.user.id);
  console.log(todos);
  
  return res.json({ todos });
};

export const createTodosCtrl = (req, res) => {
  const { title, completed } = req.body;
  req.user.id;
  const newTodo = {
    id: id,
    title: title,
    completed: completed,
    owner: id
  };
  database.todos.push(newTodo);
  return res.json({ newTodo });
};



