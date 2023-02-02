import React, { useState } from "react";
import "./App.css"
import Todoinput from "./component/Todoinput";
import Todolist from "./component/Todolist";
function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  }

  const DeletListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <Todoinput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist key={i} index={i} item={listItem} DeletItem={DeletListItem}/>
          )
        }
        )} 
      </div>
    </div>
  );
}

export default App;
