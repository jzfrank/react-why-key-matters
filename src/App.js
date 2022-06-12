import { useState } from "react";
import "./App.css";
import ListItem from "./ListItem";
import NewItem from "./NewItem";
import uuid from "react-uuid";

const DUMMY_LIST_ITEM_CONTETNS = [1, 2, 3, 4];

function App() {
  const [listItemContents, setListItemContents] = useState(
    DUMMY_LIST_ITEM_CONTETNS
  );
  const addNewItemHandler = (newItem) => {
    setListItemContents((prevListItemContents) => {
      return [newItem, ...prevListItemContents];
    });
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NewItem onAddNewItem={addNewItemHandler} />
      <h2>Without key</h2>
      {listItemContents.map((content) => (
        <ListItem content={content} />
      ))}

      <h2>With key</h2>
      {listItemContents.map((content) => (
        <ListItem key={uuid()} content={content} />
      ))}
    </div>
  );
}

export default App;
