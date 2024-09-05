// import restaking from '../assets/restaking.svg';
// import testnet from '../assets/testnet.svg';
// import guides from '../assets/guides.svg';
// import staking from '../assets/staking.svg';

// const Solutions = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-lg md:text-2xl font-extrabold py-5 text-center">
//           WE CREATE CUSTOM SOLUTIONS
//         </h2>
//         <div className="grid grid-cols-12 gap-6">
//           {/* Infrastructure */}
//           <div className="bg-white p-8 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-3">
//             <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
//             <p>
//               Get access to our private high-performance RPCs and archive APIs.
//             </p>
//           </div>
//           {/* Staking */}
//           <div
//             className="bg-blue-500 text-white p-8 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-between "
//             style={{
//               backgroundImage: `url(${staking})`,
//               backgroundPosition: 'right bottom',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: '40% 70%',
//             }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Staking</h3>
//             <p>
//               Stake with us and enjoy the most reliable rewards and
//               <p> staking provisioning.</p>
//             </p>
//           </div>
//           {/* Guides */}
//           <div
//             className="bg-white p-8 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-between"
//             style={{
//               backgroundImage: `url(${guides})`,
//               backgroundPosition: 'center bottom',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: '78%',
//             }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Guides</h3>
//             <p>We make crypto easy for the community.</p>
//           </div>
//           {/* Snapshots */}
//           <div
//             className="bg-blue-400 text-white p-8 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-between"
//             style={{
//               backgroundImage: 'url("/path/to/snapshots-bg.png")',
//               backgroundPosition: 'right bottom',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'contain',
//             }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Snapshots</h3>
//             <p>
//               You want to spin up the node but don't want to wait a lot of time.
//               Feel free to contact us and we will provide you a snapshot of a
//               desired network, so you can sync the node in a few moments.
//             </p>
//           </div>
//           {/* Development */}
//           <div className="grid grid-rows-1 col-span-12 md:col-span-6 lg:col-span-4 gap-6">
//             <div
//               className="bg-blue-600 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between"
//               style={{
//                 backgroundImage: 'url("/path/to/development-bg.png")',
//                 backgroundPosition: 'right bottom',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'contain',
//               }}
//             >
//               <h3 className="text-xl font-semibold mb-4">Development</h3>
//               <p>We develop bots, dashboards, and monitoring for your needs.</p>
//             </div>

//             {/* Restaking */}
//             <div
//               className="bg-transparent p-8 rounded-lg shadow-lg flex flex-col justify-between"
//               style={{
//                 backgroundImage: `url(${restaking})`,
//                 backgroundPosition: 'right bottom',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: '20% 50%',
//               }}
//             >
//               <h3 className="text-xl font-semibold mb-4">Restaking</h3>
//               <p>Want to multiply your rewards? Ask us how!</p>
//             </div>
//           </div>
//           {/* Testnets */}
//           <div
//             className="bg-gray-200 p-8 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-between"
//             style={{
//               backgroundImage: `url(${testnet})`,
//               backgroundPosition: 'center bottom',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: '80% 50%',
//             }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Testnets</h3>
//             <p>
//               Do you have an ongoing testnet? We would love to bring our
//               expertise and participate.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;
import restaking from '../assets/restaking.svg';
import testnet from '../assets/testnet.svg';
import guides from '../assets/guides.svg';
import staking from '../assets/staking.svg';

const Solutions = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-lg md:text-2xl font-extrabold py-5 text-center">
          WE CREATE CUSTOM SOLUTIONS
        </h2>

        {/* Grid for all solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-14 gap-6">
          {/* Infrastructure */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:col-start-2 lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
            <p>
              Get access to our private high-performance RPCs and archive APIs.
            </p>
          </div>

          {/* Staking */}
          <div
            className="bg-blue-500 text-white p-8 rounded-lg shadow-lg w-full lg:col-start-5 lg:col-span-5 flex flex-col justify-between"
            style={{
              backgroundImage: `url(${staking})`,
              backgroundPosition: 'right bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '40% 70%',
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Staking</h3>
            <p>
              Stake with us and enjoy the most reliable rewards and
              <p> staking provisioning.</p>
            </p>
          </div>

          {/* Guides */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-full lg:col-start-10 lg:col-span-4 flex flex-col justify-between"
            style={{
              backgroundImage: `url(${guides})`,
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '78%',
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Guides</h3>
            <p>We make crypto easy for the community.</p>
          </div>

          {/* Snapshots */}
          <div
            className="bg-blue-400 text-white p-8 rounded-lg shadow-lg w-full lg:col-start-2 lg:col-span-3 flex flex-col justify-between"
            style={{
              backgroundImage: 'url("/path/to/snapshots-bg.png")',
              backgroundPosition: 'right bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Snapshots</h3>
            <p>
              You want to spin up the node but don't want to wait a lot of time.
              Feel free to contact us and we will provide you a snapshot of a
              desired network, so you can sync the node in a few moments.
            </p>
          </div>

          {/* Development and Restaking (stacked vertically) */}
          <div className="flex flex-col gap-6 w-full lg:col-start-5 lg:col-span-4">
            {/* Development */}
            <div
              className="bg-blue-600 text-white p-8 rounded-lg shadow-lg flex-1 flex flex-col justify-between w-full"
              style={{
                backgroundImage: 'url("/path/to/development-bg.png")',
                backgroundPosition: 'right bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }}
            >
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p>We develop bots, dashboards, and monitoring for your needs.</p>
            </div>

            {/* Restaking */}
            <div
              className="bg-transparent p-8 rounded-lg shadow-lg flex-1 flex flex-col justify-between w-full"
              style={{
                backgroundImage: `url(${restaking})`,
                backgroundPosition: 'right bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20% 50%',
              }}
            >
              <h3 className="text-xl font-semibold mb-4">Restaking</h3>
              <p>Want to multiply your rewards? Ask us how!</p>
            </div>
          </div>

          {/* Testnets */}
          <div
            className="bg-gray-200 p-8 rounded-lg shadow-lg w-full lg:col-start-9 lg:col-span-5 flex flex-col justify-between"
            style={{
              backgroundImage: `url(${testnet})`,
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '80% 50%',
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Testnets</h3>
            <p>
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
