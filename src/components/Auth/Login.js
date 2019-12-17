import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../../database/firebase";
import { AuthContext } from "../../controller/AuthContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <h2 className="text-4xl font-bold mb-2 text-white">Login</h2>
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleLogin}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="test@test.com"
                  name="email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  name="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
