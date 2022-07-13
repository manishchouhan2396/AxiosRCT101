import { useState } from "react";

const AddTodo = ({ handleChange }) => {
  const [text, setText] = useState("");
  // console.log(text);

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="write something"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleChange(text)}>Add</button>
    </div>
  );
};

export default AddTodo;
