import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  to=""
                >
                  FAQ
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  to=""
                >
                  Help
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  to=""
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  to=""
                >
                  Terms
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  to=""
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default App;
