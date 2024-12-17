import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./css/todo.css";
import FoodItems from "./components/FoodItems";
import { useState } from "react";
function App() {
  const initalTodoItems = [
    {
      id: 1,
      todoName: "Milk",
      todoDate: "18/12/24",
    },
    {
      id: 2,
      todoName: "Milk",
      todoDate: "18/12/24",
    },
  ];
  const [todoItems, setTodoItems] = useState(initalTodoItems);

  const handleOnNewItem = (id, itemName, dueDate) => {
    console.log(id, itemName, dueDate);
    const newToDoItems = [
      ...todoItems,
      { id: id, todoName: itemName, todoDate: dueDate },
    ];
    setTodoItems(newToDoItems);
    console.log("newToDoItems: ", newToDoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log("Delete item: ", todoItemName);
    const newToDoItems = todoItems.filter(
      (item) => item.todoName != todoItemName
    );

    setTodoItems(newToDoItems);
  };

  return (
    <center className=" border p-5 ">
      <div className="container ">
        <AppName />
        <AddToDo handleOnNewItem={handleOnNewItem} />
        <div className="items-container">
          <ToDoItems todoData={todoItems} handleDeleteItem={handleDeleteItem} />
        </div>
      </div>
    </center>
  );
}

export default App;
