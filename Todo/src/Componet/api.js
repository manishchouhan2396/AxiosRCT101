import axios from "axios";

export const gettodo = () => {
  return axios.get("https://manish-json-server.herokuapp.com/todos");
};

export const deletetodo = (id) => {
  return axios({
    url: `https://manish-json-server.herokuapp.com/todos/${id}`,
    method: "DELETE"
  });
};

export const todotoggle = ({ id, newStatus }) => {
  // console.log("madhu" , newStatus)
  return axios({
    url: `https://manish-json-server.herokuapp.com/todos/${id}`,
    method: "PATCH",
    data: {
      status: newStatus
    }
  });
};

export const postreq = ({ title, status }) => {
  return axios({
    url: `https://manish-json-server.herokuapp.com/todos/`,
    method: "POST",
    data: {
      title,
      status
    }
  });
};
