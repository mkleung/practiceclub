import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./controller/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

//test
// firebase.firestore().collection("times").add({
//   title: 'test',
//   time_seconds: 45
// })

// https://scotch.io/tutorials/build-a-beautiful-landing-page-with-tailwind-css

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
