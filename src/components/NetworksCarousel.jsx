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
//       <Marquee velocity={15} scatterRandomly={false} resetAfterTries={200}>
//         {networks.map((network, index) => (
//           <div
//             key={index}
//             className="mx-4 flex flex-col items-center justify-center bg-transparent border border-gray-200 rounded-lg"
//             style={{ width: '150px', height: '150px' }} // Fixed size for small screens
//           >
//             <img
//               src={network.logo}
//               alt={network.name}
//               className="h-12 w-12 object-contain md:h-16 md:w-16 lg:h-20 lg:w-20"
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
  { name: 'Ethereum', logo: ethereum },
  { name: 'Solana', logo: solana },
  { name: 'Aptos', logo: vector },
  { name: 'Cosmos', logo: cosmos },
  { name: 'Optimism', logo: optimism },
  { name: 'Arbitrum', logo: arbitrum },
  { name: 'Sui', logo: sui },
  // Add more networks as needed
];

const NetworksCarousel = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <h2 className="text-lg md:text-2xl font-extrabold py-5 text-center">
        ALL NETWORKS YOU NEED. IN ONE PLACE
      </h2>
      <Marquee velocity={15} scatterRandomly={false} resetAfterTries={200}>
        {networks.map((network, index) => (
          <div
            key={index}
            className="mx-4 flex flex-col items-center justify-center bg-transparent   rounded-xl px-10 py-5 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] stroke-[#dae4f9]"
            style={{ width: 'calc(75% + 1rem)', height: 'calc(100% + 1rem)' }}
          >
            <img
              src={network.logo}
              alt={network.name}
              className="object-contain h-[6rem] w-[6rem] md:h-[8rem] md:w-[8rem] lg:h-[10rem] lg:w-[10rem]"
            />
            <p className="mt-2 text-sm md:text-lg font-medium text-black text-center">
              {network.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default NetworksCarousel;
