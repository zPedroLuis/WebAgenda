import logo from "./logo.svg";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const arrayTodos = [
  {name: "Limpar a casa", status: true},
  {name: "Limpar o cachorro",status: false}
]

const Todos = ({ todos }) => {

  
  return <div className="todos">
    {todos.map(todo => {
      return(
      <div className="todo">
        <button className="checkbox" style ={{backgroundColor: todo.status ? "purple" : "white"}}></button>
        <p>{todo.name}</p>
        <button>
          <AiOutlineEdit size={20} color={"#64697b"}></AiOutlineEdit>
        </button>
        <button>
          <AiOutlineDelete size={20} color={"#64697b"}></AiOutlineDelete>
        </button>
      </div>)
    })}
  </div>
}

function App() {
  async function getTodos(){
    const response = await axios.get("http://localhost:2999/pessoa")
    setTodos(response.data)
  }
  const [todos, setTodos] = useState([])
  useEffect(() => {
    getTodos()
  }, [])
  return (
    <><div className="App">
      <header className="container">
        <div className="header">
          <h1>Eventos</h1>
        </div>
        <todos todos={todos}></todos>
        <input classname="inputName"></input>
        <button className="newTaskButton">Insira aqui</button>
      </header>
    </div><div className="App">
        <header className="container">
          <div className="header">
            <h1>Pessoas</h1>
          </div>
          <todos todos={todos}></todos>
          <input classname="inputName"></input>
          <button className="newTaskButton">Insira aqui</button>
        </header>
      </div></>
  )}

export default App;
