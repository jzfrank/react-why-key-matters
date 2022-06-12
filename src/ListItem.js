import { useState } from "react";

const ListItem = (props) => {
  const [content, setContent] = useState(props.content);
  const clickHandler = (event) => {
    setContent(0);
  };
  return (
    <div>
      <h6>* {content}</h6>
      <button onClick={clickHandler}>zerolize</button>
    </div>
  );
};

export default ListItem;
