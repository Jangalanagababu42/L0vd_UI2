

const Solutions = () => {
  return (
    <section className=" font-poppins py-0 md:py-16 " id="products">
      <div className="container mx-auto">
        <h2 className="col-span-1 md:col-start-2 md:col-span-12 text-2xl md:text-3xl font-black mb-8 text-center">
          WE CREATE CUSTOM SOLUTIONS
        </h2>

        {/* Grid for all solutions */}
        <div className="grid grid-cols-1 p-4 lg:grid-cols-14 gap-6">
          {/* Infrastructure */}
          <div className="bg-white p-8 rounded-2xl  ring-1 ring-light-blue ring-inset w-full lg:col-start-2 lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
            <p className="font-regular">
              Get access to our private high-performance RPCs and archive APIs.
            </p>
          </div>

          {/* Staking */}
          <div className="bg-gradient-to-bl from-main-blue from-0% to-blue-gradient to-100%  text-white p-8 rounded-2xl shadow-lg w-full lg:col-start-5 lg:col-span-5 flex flex-col ">
            <h3 className="text-xl font-semibold mb-4">Staking</h3>
            <p className="font-regular">
              Stake with us and enjoy the most reliable rewards and
              <p> staking provisioning.</p>
            </p>
          </div>

          {/* Guides */}
          <div className="bg-white p-8 rounded-2xl  ring-1 ring-light-blue ring-inset w-full lg:col-start-10 lg:col-span-4 flex flex-col ">
            <h3 className="text-xl font-semibold mb-4">Guides</h3>
            <p className="font-regular">
              We make crypto easy for the community.
            </p>
          </div>

          {/* Snapshots */}
          <div className="bg-light-blue-stroke text-white p-8 rounded-2xl shadow-lg w-full lg:col-start-2 lg:col-span-3 flex flex-col ">
            <h3 className="text-xl font-semibold mb-4">Snapshots</h3>
            <p className="font-regular">
              You want to spin up the node but don't want to wait a lot of time.
              Feel free to contact us and we will provide you a snapshot of a
              desired network, so you can sync the node in a few moments.
            </p>
          </div>

          {/* Development and Restaking (stacked vertically) */}
          <div className="flex flex-col gap-6 w-full lg:col-start-5 lg:col-span-4">
            {/* Development */}
            <div className="bg-main-blue text-white p-8 rounded-2xl shadow-lg flex-1 flex flex-col  w-full">
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="font-regular">
                We develop bots, dashboards, and monitoring for your needs.
              </p>
            </div>

            {/* Restaking */}
            <div className="bg-white p-8 rounded-2xl  ring-1 ring-light-blue ring-inset flex-1 flex flex-col  w-full">
              <h3 className="text-xl font-semibold mb-4">Restaking</h3>
              <p className="font-regular">
                Want to multiply your rewards? Ask us how!
              </p>
            </div>
          </div>

          {/* Testnets */}
          <div className="bg-light-blue p-8 rounded-2xl shadow-lg w-full lg:col-start-9 lg:col-span-5 flex flex-col ">
            <h3 className="text-xl font-semibold mb-4">Testnets</h3>
            <p className="font-regular">
              Do you have an ongoing testnet? We would love to bring our
              expertise and participate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
