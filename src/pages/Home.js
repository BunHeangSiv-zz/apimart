import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the POS System</h1>
      <p className="text-lg mb-8">
        Streamline your sales and inventory management with our easy-to-use POS system.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
}

export default Home;
