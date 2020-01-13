import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./controller/AuthContext";
import { TaskProvider } from "./controller/TaskContext";
import { TimesProvider } from "./controller/TimesContext";
import PrivateRoute from "./components/PrivateRoute";

import Practice from "./components/Practice";
import Tasks from "./components/Tasks";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import Times from "./components/Times";

// https://scotch.io/tutorials/build-a-beautiful-landing-page-with-tailwind-css

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <TimesProvider>
            <TaskProvider>
              <PrivateRoute exact path="/tasks" component={Tasks} />
              <PrivateRoute exact path="/practice" component={Practice} />
              <PrivateRoute exact path="/times" component={Times} />
            </TaskProvider>
          </TimesProvider>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
