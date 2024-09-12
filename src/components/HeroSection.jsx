import cubes from '../assets/cubes.svg';

const HeroSection = () => {
  return (
    <section className=" font-poppins bg-white text-center py-12 ">
      {/* Hero Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-14 gap-[1.25rem] mb-40">
        {/* Hero Text Section */}
        <div className="col-span-full md:col-start-2 md:col-span-7 text-center md:text-left px-4 md:px-0">
          <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight">
            YOUR TRUSTED
          </h1>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-blue-600 leading-tight">
            WEB 3.0 INFRA
          </h2>
          <h3 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight">
            PROVIDER
          </h3>

          {/* L0vd Offers Content */}
          <p className="font-medium mt-4 text-base sm:text-md lg:text-lg 2xl:text-xl">
            L0vd offers a non-custodial solution to stake and host Validator,
            Full, and Archive nodes. Get access to infrastructure in over 50
            networks.
          </p>

          {/* Contact Us Button */}
          <div className="mt-6">
            <button className="bg-main-blue px-5 py-2.5 lg:mt-8 lg:px-12 lg:py-2.5 2xl:px-10 2xl:py-5 rounded-xl">
              <div className=" text-xl text-white mx-5 font-bold ">
                Contact us
              </div>
            </button>
          </div>
        </div>

        {/* 3D Cubes Section (Adjacent to the Hero Content) */}
        {/* <div className="col-span-full md:col-start-9 md:col-span-5 flex justify-center md:justify-end mt-10 md:mt-0"> */}
        <div className="hidden md:flex col-start-9 col-span-5 justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={cubes}
            alt="3D Cubes"
            className="object-contain w-full h-auto max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
          />
        </div>
      </div>

      {/* Total Staked Assets */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-14 gap-[1.25rem] mt-12 px-4 md:px-0">
        <div className="font-poppins col-span-full gap-y-4	 md:col-start-2 md:col-span-12 bg-light-blue-stroke  text-white py-6 lg:py-8 xl:py-10 rounded-2xl text-center">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl ">
            Total Staked Assets
          </h2>
          <p className="font-medium text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl mt-2 ">
            &gt;100 000m$
          </p>
        </div>
      </div>

      {/* Deployed Nodes, Networks, Clients, API Requests */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-14 gap-[1.25rem] mt-8 text-center px-4 md:px-0">
        {/* Deployed Nodes */}
        <div className="bg-main-blue col-span-full md:col-start-2 md:col-span-3  rounded-2xl py-6 lg:py-8 xl:py-10 text-white ">
          <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-medium ">
            Deployed nodes
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl mt-2 font-medium ">
            114
          </p>
        </div>

        {/* Networks */}
        <div className="col-span-full md:col-start-5 md:col-span-3 bg-white ring-1 ring-light-blue ring-inset rounded-2xl py-6 lg:py-8 xl:py-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-medium ">
            Networks
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl mt-2 font-medium ">
            56
          </p>
        </div>

        {/* Clients */}
        <div className="col-span-full md:col-start-8 md:col-span-3 bg-light-blue  rounded-2xl py-6 lg:py-8 xl:py-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-medium  ">
            Clients
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl mt-2 font-medium ">
            441
          </p>
        </div>

        {/* API Requests */}
        <div className="col-span-full md:col-start-11 md:col-span-3 bg-black text-white  rounded-2xl py-6 lg:py-8 xl:py-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-medium ">
            API requests
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl mt-2 font-medium ">
            &gt;2bn/mo
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
