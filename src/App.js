import React,{useState} from "react";
import './App.css';

function App() {
  const [todos, setTodo]=useState([]);//temp storage hook
  const [input, setInput]= useState('');
  const addTodo =(e)=>{
    setTodo([...todos,input])
    e.preventDefault();
    setInput('');
  }


  return (
    <div className="app">
      <h1>Form TODO</h1>
      <form >
      <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
      <button type="submit" onClick={addTodo}> Add TODO</button>


      </form>
      <h2>List of ToDos</h2>
      {todos.map(todo =>(
        <p>{todo}</p>
      ))}
     
    </div>
  );
}

export default App;
