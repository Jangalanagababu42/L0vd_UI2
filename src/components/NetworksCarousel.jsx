// // import Marquee from 'react-marquee-slider';
// // import 'tailwindcss/tailwind.css';
// // import sui from '../assets/sui.svg';
// // import arbitrum from '../assets/arbitrum.svg';
// // import cosmos from '../assets/cosmos.svg';
// // import ethereum from '../assets/ethereum.svg';
// // import optimism from '../assets/optimism.svg';
// // import solana from '../assets/solana.svg';
// // import vector from '../assets/vector.svg';

// // const networks = [
// //   { name: 'Ethereum', logo: ethereum },
// //   { name: 'Solana', logo: solana },
// //   { name: 'Aptos', logo: vector },
// //   { name: 'Cosmos', logo: cosmos },
// //   { name: 'Optimism', logo: optimism },
// //   { name: 'Arbitrum', logo: arbitrum },
// //   { name: 'Sui', logo: sui },
// //   // Add more networks as needed
// // ];

// // const NetworksCarousel = () => {
// //   return (
// //     <div className="w-full overflow-hidden bg-white py-8">
// //       <h2 className="text-lg md:text-2xl font-extrabold py-5 text-center">
// //         ALL NETWORKS YOU NEED. IN ONE PLACE
// //       </h2>
// //       <Marquee velocity={15} scatterRandomly={false} resetAfterTries={200}>
// //         {networks.map((network, index) => (
// //           <div
// //             key={index}
// //             className="mx-4 flex flex-col items-center justify-center bg-transparent border border-gray-200 rounded-lg"
// //             style={{ width: '150px', height: '150px' }} // Fixed size for small screens
// //           >
// //             <img
// //               src={network.logo}
// //               alt={network.name}
// //               className="h-12 w-12 object-contain md:h-16 md:w-16 lg:h-20 lg:w-20"
// //             />
// //             <p className="mt-2 text-sm md:text-lg font-medium text-black text-center">
// //               {network.name}
// //             </p>
// //           </div>
// //         ))}
// //       </Marquee>
// //     </div>
// //   );
// // };

// // export default NetworksCarousel;
// import Marquee from 'react-marquee-slider';
// import 'tailwindcss/tailwind.css';
// import sui from '../assets/sui.svg';
// import arbitrum from '../assets/arbitrum.svg';
// import cosmos from '../assets/cosmos.svg';
// import ethereum from '../assets/ethereum.svg';
// import optimism from '../assets/optimism.svg';
// import solana from '../assets/solana.svg';
// import vector from '../assets/vector.svg';

// const networks = [
//   { name: 'Ethereum', logo: ethereum },
//   { name: 'Solana', logo: solana },
//   { name: 'Aptos', logo: vector },
//   { name: 'Cosmos', logo: cosmos },
//   { name: 'Optimism', logo: optimism },
//   { name: 'Arbitrum', logo: arbitrum },
//   { name: 'Sui', logo: sui },
//   // Add more networks as needed
// ];

// const NetworksCarousel = () => {
//   return (
//     <div className="w-full overflow-hidden bg-white py-8">
//       <h2 className="text-lg md:text-2xl font-extrabold py-5 text-center">
//         ALL NETWORKS YOU NEED. IN ONE PLACE
//       </h2>
//       {/* <Marquee velocity={15} scatterRandomly={false} resetAfterTries={200}> */}
//       <Marquee velocity={15} scatterRandomly={false} resetAfterTries={200}>
//         {networks.map((network, index) => (
//           <div
//             key={index}
//             className="mx-4 flex flex-col items-center justify-center bg-transparent   rounded-xl px-10 py-5 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] stroke-[#dae4f9]"
//             style={{ width: 'calc(75% + 1rem)', height: 'calc(100% + 1rem)' }}
//           >
//             <img
//               src={network.logo}
//               alt={network.name}
//               className="object-contain h-[6rem] w-[6rem] md:h-[8rem] md:w-[8rem] lg:h-[10rem] lg:w-[10rem]"
//             />
//             <p className="mt-2 text-sm md:text-lg font-medium text-black text-center">
//               {network.name}
//             </p>
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default NetworksCarousel;
import Marquee from 'react-marquee-slider';
import 'tailwindcss/tailwind.css';
import sui from '../assets/sui.svg';
import arbitrum from '../assets/arbitrum.svg';
import cosmos from '../assets/cosmos.svg';
import ethereum from '../assets/ethereum.svg';
import optimism from '../assets/optimism.svg';
import solana from '../assets/solana.svg';
import vector from '../assets/vector.svg';

const networks = [
  { name: 'ETHEREUM', logo: ethereum },
  { name: 'SOLANA', logo: solana },
  { name: 'APTOS', logo: vector },
  { name: 'COSMOS', logo: cosmos },
  { name: 'OPTIMISM', logo: optimism },
  { name: 'ARBITRUM', logo: arbitrum },
  { name: 'SUI', logo: sui },
  { name: 'APTOS', logo: vector },
  { name: 'COSMOS', logo: cosmos },
  { name: 'OPTIMISM', logo: optimism },
];

const NetworksCarousel = () => {
  return (
    <div className="font-poppins w-full overflow-hidden bg-white py-8">
      <h2 className="col-span-1 md:col-start-2 md:col-span-12 text-2xl md:text-3xl font-black mb-8 text-center">
        ALL NETWORKS YOU NEED. IN ONE PLACE
      </h2>
      <Marquee velocity={15} scatterRandomly={false} resetAfterTries={200}>
        {networks.map((network, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 flex flex-col items-center justify-center bg-transparent rounded-2xl px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 ring-1 ring-light-blue ring-inset "
            style={{ width: 'auto', height: 'auto' }}
          >
            <img
              src={network.logo}
              alt={network.name}
              className="object-contain h-[4rem] w-[4rem] sm:h-[2rem] sm:w-[2rem] md:h-[3rem] md:w-[3rem] lg:h-[5rem] lg:w-[5rem] xl:h-[6rem] xl:w-[6rem]"
            />
            <p className="mt-2 text-sm sm:text-sm md:text-base lg:text-md xl:text-lg font-extrabold text-black text-center">
              {network.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default NetworksCarousel;
