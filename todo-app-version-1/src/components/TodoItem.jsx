const TodoItem = ({ todoName, todoDate, id, handleDeleteItem }) => {
  //   const handleDelete = (id, e) => {
  //     console.log(e);
  //     alert(`ID of ${id} is deleted`);
  //   };

  return (
    <div className="row   mt-3  ">
      <div className="col-4">{todoName} </div>
      <div className="col-4">
        <h5> {todoDate} </h5>
      </div>
      <div className="col-2">
        <button
          type="submit"
          onClick={(e) => handleDeleteItem(todoName)}
          className=" kg-btn btn-danger btn  "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
