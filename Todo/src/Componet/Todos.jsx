import { useEffect, useState } from "react";
import { deletetodo, gettodo, todotoggle, postreq } from "./api";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const Todos = () => {
  const [data1, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleget();
  }, []);

  const handleget = () => {
    setIsLoading(true);
    setIsError(false);
    gettodo()
      .then((res) => {
        setIsLoading(false);
        setIsError(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsError(true);
        console.error(err);
      });
  };

  const handledelete = (id) => {
    setIsLoading(true);
    deletetodo(id).then(() => handleget());
  };

  const handleChange = (title) => {
    setIsLoading(true);
    postreq({ title, status: false }).then(() => handleget());
  };

  const handletoggle = (id, newStatus) => {
    console.log(id, newStatus);
    setIsLoading(true);
    todotoggle({ id, newStatus }).then(() => handleget());
  };

  // console.log(data1);

  return (
    <div>
      {isLoading && <div>...Loading</div>}
      {isError && <div>...Error</div>}
      <AddTodo handleChange={handleChange} />

      {data1.map((e) => {
        return (
          <TodoItem
            key={e.id}
            title={e.title}
            id={e.id}
            status={e.status}
            handledelete={handledelete}
            handletoggle={handletoggle}
          />
        );
      })}
    </div>
  );
};

export default Todos;
