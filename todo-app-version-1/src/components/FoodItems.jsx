import Items from "./Items";

const FoodItems = ({ items, errorMessage }) => {
  return (
    <div>
      <h1>Food</h1>
      {errorMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <div key={index}>
            <Items item={item} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
