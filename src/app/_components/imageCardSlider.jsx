"use client";
import { useEffect } from "react";
import Image from "next/image"; // Ensure this is correctly imported if using Next.js

// working mode 1 - with inline css

// export default function ImageCardSlider({ dataPoints }) {
//   useEffect(() => {
//     const slider = document.getElementById("slick-paragraph-slider");
//     const scrollContainer = slider?.querySelector(".scroll-container");

//     if (!scrollContainer) {
//       console.warn("Scroll container not found!");
//       return;
//     }

//     let scrollInterval;
//     const cardWidth = scrollContainer.querySelector(".card")?.offsetWidth;

//     const startScrolling = () => {
//       scrollInterval = setInterval(() => {
//         scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });

//         if (
//           scrollContainer.scrollLeft + scrollContainer.clientWidth >=
//           scrollContainer.scrollWidth
//         ) {
//           scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
//         }
//       }, 3000);
//     };

//     const stopScrolling = () => clearInterval(scrollInterval);

//     startScrolling();

//     const cards = scrollContainer.querySelectorAll(".card");
//     if (cards && cards.length > 0) {
//       cards.forEach((card) => {
//         card.addEventListener("mouseenter", stopScrolling);
//         card.addEventListener("mouseleave", startScrolling);
//       });
//     }

//     return () => {
//       clearInterval(scrollInterval);
//       if (cards && cards.length > 0) {
//         cards.forEach((card) => {
//           card.removeEventListener("mouseenter", stopScrolling);
//           card.removeEventListener("mouseleave", startScrolling);
//         });
//       }
//     };
//   }, [dataPoints]); // Added dataPoints as a dependency

//   return (
//     <div className="relative" id="slick-paragraph-slider">
//       <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent scroll-container">
//         {dataPoints.map((card) => (
//           <div
//             key={card.id}
//             className="p-2 pb-6 sm:p-6 min-h-[500px] flex-shrink-0 card w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//             id={`vbp-${card.id}`}
//           >
//             <div
//               className="bg-black text-white h-full shadow-md rounded-xl flex flex-col justify-between"
//               style={{
//                 backgroundImage: card.image ? `url(${card.image})` : "none",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundColor: card.image ? "transparent" : "white",
//               }}
//             >
//               <div className="p-4 bg-black/10 flex-grow">
//                 <h3 className="text-lg font-bold mb-4 text-black">
//                   {card.title}
//                 </h3>
//                 <div className="text-gray-900">
//                   <p className="italic font-semibold">{card.description}</p>
//                   <ul className="mt-2">
//                     {card.items.map((item, index) => (
//                       <li key={index} className="mt-1">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// working model 2 with tailwindCss only

export default function ImageCardSlider({ dataPoints }) {
  useEffect(() => {
    const slider = document.getElementById("slick-paragraph-slider");
    const scrollContainer = slider?.querySelector(".scroll-container");

    if (!scrollContainer) {
      console.warn("Scroll container not found!");
      return;
    }

    let scrollInterval;
    const cardWidth = scrollContainer.querySelector(".card")?.offsetWidth;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000);
    };

    const stopScrolling = () => clearInterval(scrollInterval);

    startScrolling();

    const cards = scrollContainer.querySelectorAll(".card");
    if (cards && cards.length > 0) {
      cards.forEach((card) => {
        card.addEventListener("mouseenter", stopScrolling);
        card.addEventListener("mouseleave", startScrolling);
      });
    }

    return () => {
      clearInterval(scrollInterval);
      if (cards && cards.length > 0) {
        cards.forEach((card) => {
          card.removeEventListener("mouseenter", stopScrolling);
          card.removeEventListener("mouseleave", startScrolling);
        });
      }
    };
  }, [dataPoints]);

  return (
    <div className="relative" id="slick-paragraph-slider">
      <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent scroll-container">
        {dataPoints.map((card) => (
          <div
            key={card.id}
            className="relative p-2 pb-6 sm:p-6 min-h-[500px] flex-shrink-0 card w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            id={`vbp-${card.id}`}
          >
            <div className="relative h-full shadow-md rounded-lg overflow-hidden group">
              <div className="relative h-full w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={`Service ${card.title}`}
                    fill
                    style={{
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                    sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                    className="absolute inset-0"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white"></div>
                )}
              </div>
              <div className="absolute inset-0 p-4 bg-black/50 flex flex-col justify-start">
                <h3 className="text-lg font-bold mb-4 text-gray-300">
                  {card.title}
                </h3>
                <div className="text-gray-400">
                  <p className="italic font-semibold">{card.description}</p>
                  <ul className="mt-2">
                    {card.items.map((item, index) => (
                      <li key={index} className="mt-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// working model 3 without content overlay on image

// export default function ImageCardSlider({ dataPoints }) {
//   useEffect(() => {
//     const slider = document.getElementById("slick-paragraph-slider");
//     const scrollContainer = slider.querySelector(".scroll-container");

//     if (!scrollContainer) return;

//     let scrollInterval;

//     const startScrolling = () => {
//       const cardWidth = scrollContainer.querySelector(".card").offsetWidth;
//       scrollInterval = setInterval(() => {
//         scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });

//         if (
//           scrollContainer.scrollLeft + scrollContainer.clientWidth >=
//           scrollContainer.scrollWidth
//         ) {
//           scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
//         }
//       }, 3000);
//     };

//     const stopScrolling = () => clearInterval(scrollInterval);

//     startScrolling();

//     const cards = scrollContainer.querySelectorAll(".card");
//     cards.forEach((card) => {
//       card.addEventListener("mouseenter", stopScrolling);
//       card.addEventListener("mouseleave", startScrolling);
//     });

//     return () => {
//       clearInterval(scrollInterval);
//       cards.forEach((card) => {
//         card.removeEventListener("mouseenter", stopScrolling);
//         card.removeEventListener("mouseleave", startScrolling);
//       });
//     };
//   }, []);

//   return (
//     <div className="relative" id="slick-paragraph-slider">
//       <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent scroll-container">
//         {dataPoints.map((card) => {
//           const CardContent = (
//             <div
//               key={card.id}
//               className="p-2 pb-6 sm:p-6 min-h-[500px] flex-shrink-0 card w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//               id={`vbp-${card.id}`}
//             >
//               <div className="bg-white h-full shadow-md rounded-md">
//                 {card.image && (
//                   <Image
//                     src={card.image}
//                     alt={`Service ${card.title}`}
//                     height={400}
//                     width={400}
//                     style={{ objectFit: "cover", overflow: "hidden" }}
//                     className="w-full h-48 sm:h-64 lg:h-72"
//                   />
//                 )}
//                 <div className="absolute inset-y-1/2">
//                   <h3 className="text-lg font-bold mb-4 h-[69px] text-black">
//                     {card.title}
//                   </h3>
//                   <div className="text-gray-600">
//                     <p className="italic font-semibold">{card.description}</p>
//                     <ul className="mt-2">
//                       {card.items.map((item, index) => (
//                         <li key={index} className="mt-1">
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );

//           return card.link ? (
//             <a
//               key={card.id}
//               href={card.link}
//               className="hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {CardContent}
//             </a>
//           ) : (
//             CardContent
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default AutoScrollSlider;

// <nav className="absolute top-0 transform -translate-y-1/2 w-full flex justify-between px-2">
//   <button
//     type="button"
//     className="text-gray-500 hover:text-gray-700"
//     aria-label="Previous"
//   >
//     &#8592;
//   </button>
//   <button
//     type="button"
//     className="text-gray-500 hover:text-gray-700"
//     aria-label="Next"
//   >
//     &#8594;
//   </button>
// </nav>
