import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Index";
import Heart from "./components/heart";
import NotFound from "./components/notfound";
import SignIn from "./components/login/SignIn";
import Diabetes from "./components/diabetes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/login/:name" element={<SignIn />} />
        {/* <Route path="/" element={<Home />}>
          <Route element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/heart" element={<Heart />} />
          <Route path="/diabetes" element={<Diabetes />} />
        </Route>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
