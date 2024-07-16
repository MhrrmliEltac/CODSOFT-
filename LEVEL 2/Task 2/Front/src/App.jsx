import React from "react";
import axios from "axios";

const App = () => {
  const URL = `https://api.escuelajs.co/api/v1/products`;

  const getData = async () => {
    const response = await axios.get(URL);
    console.log(response.data);
  };

  getData();

  return <div>App</div>;
};

export default App;
