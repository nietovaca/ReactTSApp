import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import { Todo } from "./model"
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] =useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
    setTodos([...todos,{id:Date.now(), todo:todo, isDone:false}])
    setTodo("");
    }
  };

console.log(todos);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

//////INTRO NOTES:
//Quick review of TYPES
  // let name: string;
  // let age: number | string; //union = ie. two types
  // let isStudent: boolean;
  // let hobbies: string[];
  // let role:[number, string]; //tuple
  // let personName: unknown;
  // let dogName: any;

//FUNCTION
// const printName = (name:string) => {
//   console.log(name);
//
// }
// printName('Vanessa')

//Defining TYPE
// type Person = {
//   name: string;
//   age?: number;
// }
// let person: Person = {
//   name: 'Vanessa',
//   age: 36,
// };
// let lotsOfPeople: Person[]; //multiple Person(s) in array

///// Extending Type \\\\\\
// type X = {
//   a: string;
//   b: number;
// };
//
// type Y = X & {
//   c: string;
//   d: number;
// };
//
// let y: Y = {
//   c: 'lalala',
//   d: 45,
//   a: "blabla",
//   b: 56
// }

//// INTERFACE > TYPE
//similar to Type
// interface Person {
//   name: string;
//   age?: number;
// }
///// EXTENDING TYPE via INTERFACE
// interface Guy extends Person {
//   profession: string,
// }
////// EXTENDING Type to Interface via Type
// type X = Person & {
//   a: string;
//   b: number;
// }
/////// visa versa extending Interface to Type
// interface Person extends X {
//   name: string,
//   age?: number,
// }
