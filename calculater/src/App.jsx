import { useState } from "react";
import Buttons from "./components/Buttons,";
import Container from "./components/Container";
import Display from "./components/Display";
function App() {
  const [data, setData] = useState("");

  const handleOnChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onButtonClick = (btn) => {
    if (btn === "C") {
      setData("");
    } else if (btn === "=") {
      const result = eval(data);
      setData(result);
    } else if (btn === "Back") {
      const newData = data.slice(0, -1);
      setData(newData);
    } else {
      const newData = data + btn;
      setData(newData);
    }
  };

  return (
    <Container>
      <div className="calculater">
        <Display data={data} handleOnChange={handleOnChange} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </Container>
  );
}

export default App;
