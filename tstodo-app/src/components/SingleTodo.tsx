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
  return(
    <form className='todos_single'>
    <span className='todos_single--text'>{todo.todo}</span>
    <div>
      <span className="icon"><EditIcon/></span>
      <span className="icon"><DeleteIcon /></span>
      <span className="icon"><CheckIcon /></span>
    </div>
    </form>
  )
}

export default SingleTodo
