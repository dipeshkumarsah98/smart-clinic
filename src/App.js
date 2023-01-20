import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Index";
import Heart from "./components/heart";
import NotFound from "./components/notfound";
import SignIn from "./components/login/SignIn";
import Diabetes from "./components/diabetes";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const handleLog = () => {
    setIsLogged(!isLogged);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/login/:name" element={<SignIn handleLog={handleLog} />} />
        {isLogged && (
          <Route
            path="/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Home />
              </PrivateRoute>
            }
          >
            <Route element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/heart" element={<Heart />} />
            <Route path="/diabetes" element={<Diabetes />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
function PrivateRoute({ children, isLogged }) {
  return isLogged ? children : <Navigate to="/login" />;
}

export default App;
