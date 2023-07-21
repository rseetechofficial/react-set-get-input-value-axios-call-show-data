import "./styles.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [apiData, setAPIData] = useState([]);

  const apiurl = "https://jsonplaceholder.typicode.com/posts";
  const buttonClicked = () => {
    console.log(textValue);
    axios.get(apiurl).then((response) => {
      setAPIData(response.data);
    });
  };

  const datais = {
    args: {
      arg: "inputted"
    }
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
        <button style={{ marginLeft: "8px" }} onClick={buttonClicked}>
          Go
        </button>
      </div>
      <div style={{ margin: 20, border: "1px solid", height: 50, width: 500 }}>
        {datais.args.arg}
      </div>
      <div>
        {apiData.map((post, index) => {
          return <li>{post.title}</li>;
        })}
      </div>
    </div>
  );
}
