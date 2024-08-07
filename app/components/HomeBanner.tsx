"use strict";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className="bg-gradient-to-r to-gray-300 from-blue-500 flex justify-evenly gap-3 py-20 w-full">
      <div className="w-2/4 flex flex-col gap-8 text-white">
        <h1 className="text-5xl">Get Latest blogs daily....</h1>
        <p className="text-2xl sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          possimus veritatis dignissimos ipsum perferendis delectus voluptate ea
          culpa similique? Corrupti quos dolorum incidunt.
        </p>
        <span className="bg-yellow-500 text-black text-4xl py-4 px-2 rounded-sm font-thin text-ellipsis">
          Subscribe to Premium{" "}
          <button className="border-none px-3 py-4 bg-white rounded-md cursor-pointer outline-none font-medium font-mono hover:bg-blue-500 hover:text-white ease-in-out shadow-lg">
            Subscribe Now!
          </button>
        </span>
      </div>
      <div>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrw29CBzPExhaGrkIzMvZ-5ypwos5a6OjinQ&s"
          alt=""
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  );
};

export default HomeBanner;
