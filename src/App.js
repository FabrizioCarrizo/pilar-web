import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import FetchList from "./components/pages/fetchList/FetchList";
import Todo from "./components/pages/todo/Todo";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/fetchlist" element={<FetchList/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
