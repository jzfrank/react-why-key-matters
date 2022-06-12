import { useState } from "react";

const NewItem = (props) => {
  const [itemValue, setItemValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", itemValue);
    props.onAddNewItem(itemValue);
    setItemValue("");
  };

  const handleInputChange = (event) => {
    setItemValue(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={itemValue} onChange={handleInputChange}></input>
      <button>Add New Item</button>
    </form>
  );
};
export default NewItem;
