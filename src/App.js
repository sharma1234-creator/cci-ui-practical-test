import "./App.css";
import List from "./components/List";
import AddUser from "./components/AddUser";
import Model from "./components/Model";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
      <Model />
    </div>
  );
}

export default App;
