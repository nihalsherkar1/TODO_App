import { useRef, useState } from "react";

function AddToDo({ handleOnNewItem }) {
  // const [data, setData] = useState({
  //   id: "",
  //   note: "",
  //   date: "",
  // });
  const todoId = useRef();
  const todoNameElement = useRef();
  const todoDueElement = useRef();

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  //   noOfUpdates.current += 1;
  // };

  const handleButtonAddClick = () => {
    const id = todoId.current;

    const itemName = todoNameElement.current;
    const dueDate = todoDueElement.current;
    // handleOnNewItem(data.id, data.note, data.date);
    handleOnNewItem(id, itemName.value, dueDate.value);
    // setData({ id: "", note: "", date: "" });
  };

  return (
    <div className="row mt-3 pt-2 ">
      <div className="col-4">
        <input
          type="text"
          name="note"
          id="note"
          ref={todoNameElement}
          // value={data.note}
          // onChange={handleInputChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          name="date"
          id="date"
          ref={todoDueElement}
          // value={data.date}
          // onChange={handleInputChange}
        />
      </div>

      <div className="col-2">
        <button
          type="submit"
          className="kg-btn btn-success btn "
          onClick={() => handleButtonAddClick()}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
