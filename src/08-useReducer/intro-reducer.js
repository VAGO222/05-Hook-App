const initialState = [
  {
    id: 1,
    todo: "Recolectar la gema del Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") return [...state, action.payload];
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la gema del Poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
