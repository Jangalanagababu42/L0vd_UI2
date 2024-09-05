import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white text-center py-12">
      <div className="container mx-auto px-4 grid grid-cols-12 gap-4">
        {/* Hero Text Section */}
        <div className="col-span-12 md:col-span-6 text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            YOUR TRUSTED <br />
            <span className="text-blue-600">WEB 3.0 INFRA</span> PROVIDER
          </h1>
          <p className="mt-4 text-lg">
            L0vd offers a non-custodial solution to stake and host Validator,
            Full, and Archive nodes. Get access to infrastructure in over 50
            networks.
          </p>
          <button className="mt-6 btn-primary">Contact us</button>
        </div>

        {/* 3D Cubes Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end">
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src="/path/to/3d-cubes.png"
              alt="3D Cubes"
              className="w-3/4 h-auto md:w-full"
            />
          </div>
        </div>
      </div>

      {/* Total Staked Assets */}
      <div className="container mx-auto mt-12">
        <div className="bg-indigo-300	text-white py-6 rounded-lg col-span-12">
          <h2 className="text-3xl font-bold">Total Staked Assets</h2>
          <p className="text-4xl mt-2">&gt;100 000m$</p>
        </div>
      </div>

      {/* Nodes, Networks, Clients, API Requests */}
      <div className="container mx-auto mt-8 grid grid-cols-12 gap-4 text-center">
        <div className="col-span-12 md:col-span-3 bg-indigo-500	 shadow-lg rounded-lg py-6">
          <h3 className="text-2xl font-bold text-white">Deployed nodes</h3>
          <p className="text-3xl mt-2 font-semibold text-white">114</p>
        </div>
        <div className="col-span-12 md:col-span-3 bg-transparent shadow-lg rounded-lg py-6">
          <h3 className="text-2xl font-bold ">Networks</h3>
          <p className="text-3xl mt-2 font-semibold">56</p>
        </div>
        <div className="col-span-12 md:col-span-3 bg-blue-100	 shadow-lg rounded-lg py-6">
          <h3 className="text-2xl font-bold text-blue-600">Clients</h3>
          <p className="text-3xl mt-2 font-semibold">441</p>
        </div>
        <div className="col-span-12 md:col-span-3 bg-black text-white shadow-lg rounded-lg py-6">
          <h3 className="text-2xl font-bold">API requests served</h3>
          <p className="text-3xl mt-2 font-semibold">&gt;2bn/mo</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
