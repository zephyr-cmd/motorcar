"use client";

import { useEffect } from "react";

export default function AutoScrollSlider({ dataPoints }) {
  useEffect(() => {
    const slider = document.getElementById("slick-paragraph-slider");
    const scrollContainer = slider.querySelector(".scroll-container");

    if (!scrollContainer) return;

    let scrollInterval;

    const startScrolling = () => {
      const cardWidth = scrollContainer.querySelector(".card").offsetWidth;
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
    cards.forEach((card) => {
      card.addEventListener("mouseenter", stopScrolling);
      card.addEventListener("mouseleave", startScrolling);
    });

    return () => {
      clearInterval(scrollInterval);
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", stopScrolling);
        card.removeEventListener("mouseleave", startScrolling);
      });
    };
  }, []);

  return (
    <div className="relative" id="slick-paragraph-slider">
      <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent scroll-container">
        {dataPoints.map((card) => (
          <div
            key={card.id}
            className="p-2 pb-6 sm:p-6 min-h-[500px] flex-shrink-0 card w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            id={`vbp-${card.id}`}
          >
            <div className="bg-white h-full shadow-md p-6 rounded-md">
              <h3 className="text-lg font-bold mb-4 h-[69px]">{card.title}</h3>
              <div className="text-gray-600">
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
        ))}
      </div>
    </div>
  );
}

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
