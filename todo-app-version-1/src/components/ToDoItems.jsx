import TodoItem from "./TodoItem";

function ToDoItems({ todoData, handleDeleteItem }) {
  // const handleDelete = (id, e) => {
  //   console.log(e);
  //   alert(`ID of ${id} is deleted`);
  // };
  return (
    <>
      <div className="container ">
        {todoData.map((data, index) => (
          <div key={index}>
            <TodoItem
              todoName={data.todoName}
              todoDate={data.todoDate}
              id={data.id}
              handleDeleteItem={handleDeleteItem}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoItems;
