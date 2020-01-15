import React, { useState, useEffect, useContext } from "react";

import "../../styles/dashboard.scss";

import { AuthContext } from "../../controller/AuthContext";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(JSON.stringify(currentUser));

  return (
    <div className="py-20" style={divStyle}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <h2 className="text-4xl font-bold mb-2 text-white">Profile</h2>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  UID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="uid"
                  type="text"
                  name="uid"
                  value={currentUser.uid}
                  readonly
                />
              </div>

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
                  name="email"
                  value={currentUser.email}
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
