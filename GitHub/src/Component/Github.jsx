import axios from "axios";
import React, { useState } from "react";

const Github = () => {
  const [state, setState] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [data, setData] = useState([]);

  const handleSubmit = (state) => {
    // console.log("manish")
    setisLoading(true);
    setisError(false);

    axios
      .get(`https://api.github.com/search/users?q=${state}`)
      .then((res) => {
        setisLoading(false);
        setisError(false);
        setData(res.data.items);
        // console.log("res", res.data.items);
      })
      .catch((err) => {
        setisLoading(false);
        setisError(true);
        setData(err);
        console.log(err);
      });
  };

  // console.log(data)

  return (
    <div>
      <input
        type="text"
        value={state}
        placeholder="Enter Name..."
        onChange={(e) => setState(e.target.value)}
      />
      <button
        onClick={() => {
          handleSubmit(state);
        }}
      >
        Search
      </button>

      <div>
        {isLoading && "....Loading"}
        {isError && "...Error"}

        <div style={{ display:"flex" , justifyContent:"center" , marginTop:"3rem" }}>
          <div>
            {data.map((e) => {
              return (
                <div key={e.id} style={{ display: "flex" , marginTop:"2rem" }}>
                  <img
                    style={{ width: "50px", borderRadius: "50%" }}
                    src={e.avatar_url}
                    alt={e.id}
                  />
                  <h4 style={{marginLeft:"1rem"}}>{e.login}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
