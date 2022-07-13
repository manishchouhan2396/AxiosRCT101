const TodoItem = ({ data, handledelete, title, id, status, handletoggle }) => {
  // console.log(status);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <div>{id}</div>
      <div>{title}</div>
      <button onClick={() => handletoggle(id, !status)}>
        {status ? "Completed" : "Not Completed"}
      </button>
      <button onClick={() => handledelete(id)}>delete</button>
    </div>
  );
};

export default TodoItem;
