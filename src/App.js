import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./controller/AuthContext";
import { TaskProvider } from "./controller/TaskContext";
import PrivateRoute from "./components/PrivateRoute";

import Practice from "./components/Practice";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
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
          {/* <Route exact path="/" component={Home} /> */}
          <TaskProvider>
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/practice" component={Practice} />
            <Route exact path="/times" component={Times} />
          </TaskProvider>

          <Route exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
