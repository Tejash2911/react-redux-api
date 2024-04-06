import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/todoSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  console.log("todo", todo);
  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Click</button>
      <br />
      {todo?.isLoading && (
        <>
          <b>Loading...</b>
        </>
      )}
      {todo?.data?.map((e, i) => {
        return <li key={i}>{e.title}</li>;
      })}
    </div>
  );
}

export default App;
