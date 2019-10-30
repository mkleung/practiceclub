import React from "react";

const divStyle = {
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
};

const Home = () => {
  return (
    <>
      <div className="py-20" style={divStyle}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">Practice Club</h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Track your practice time everyday
          </h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            View Demo
          </button>
        </div>
      </div>

      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Feature 1</h4>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et interdum tortor. Etiam quis ultricies mauris, quis interdum
              sapien. In ac nulla egestas, volutpat dui id, rhoncus eros. Aenean
              semper urna quis eros dictum congue.
            </p>
          </div>
          <div className="w-full md:w-1/2" />
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2" />
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Feature 2</h4>
            <p className="text-gray-600 mb-8">
              Sed tristique aliquam sem, non malesuada elit tempus quis. Nunc
              purus erat, interdum auctor diam in, pellentesque cursus ante.
              Cras venenatis rutrum ex. Donec libero orci, dapibus eu egestas
              ut, rutrum vel nisl. Aenean elementum, risus quis fermentum
              tempus, justo libero malesuada lectus, at suscipit nisl dolor et
              urna. Quisque scelerisque nisi eget sem finibus tristique.
              Praesent sed ex maximus, sagittis enim at, porta sem. Praesent
              consectetur, orci volutpat dapibus ornare, magna ligula iaculis
              nulla, luctus ultricies velit nisi quis nisi. Aliquam mi elit,
              euismod non mi sit amet, lacinia varius mi. Curabitur rhoncus
              molestie euismod. Proin id iaculis libero. Curabitur a risus eget
              odio vestibulum aliquam sed vel tellus.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Feature 3</h4>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et interdum tortor. Etiam quis ultricies mauris, quis interdum
              sapien. In ac nulla egestas, volutpat dui id, rhoncus eros. Aenean
              semper urna quis eros dictum congue. Suspendisse vitae arcu eros.
              Pellentesque eget magna nec tellus facilisis pellentesque. In et
              dictum leo, id tincidunt massa.
            </p>
          </div>
          <div className="w-full md:w-1/2" />
        </div>
      </section>
    </>
  );
};

export default Home;
