import React from 'react'
import { Todo } from "../model";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

  const handleDone = (id:number) => {
    setTodos(todos.map((todo) =>
    todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return(
    <form className='todos_single'>
      {todo.isDone ? (
          <s className='todos_single--text'>{todo.todo}</s>
        ) : (
          <span className='todos_single--text'>{todo.todo}</span>
        )}
    <div>
      <span className="icon"><EditIcon/></span>
      <span className="icon" onClick={()=>handleDelete(todo.id)}>
      <DeleteIcon /></span>
      <span className="icon" onClick={()=>handleDone(todo.id)}>
      <CheckIcon /></span>
    </div>
    </form>
  )
}

export default SingleTodo
