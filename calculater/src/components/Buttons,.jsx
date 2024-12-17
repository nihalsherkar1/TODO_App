import "../App.css";

const Buttons = ({ onButtonClick }) => {
  const btns = [
    "C",
    "1",
    "2",
    "Back",

    "+",
    "3",
    "4",
    "5",
    "-",
    "6",

    "7",
    "8",
    "*",
    "9",

    "0",
    ".",
    "/",
    "=",
  ];

  return (
    <div className=" btn_container">
      {btns.map((btn) => (
        <button
          type="button"
          key={btn}
          onClick={() => onButtonClick(btn)}
          className={`button ${btn === "Back" ? "back_btn" : ""}`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
