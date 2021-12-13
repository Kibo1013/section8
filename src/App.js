import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    //
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClickUser1 = () => {
    //
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>Users</button>
      <button onClick={onClickUser1}>User ID = 1</button>
    </div>
  );
}
