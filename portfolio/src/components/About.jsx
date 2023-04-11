import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full g-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae
          quisquam quibusdam quis ducimus dicta fugiat fugit, consequatur esse
          dolorum deserunt quod itaque asperiores iure! Perspiciatis,
          reprehenderit corporis? Alias expedita earum deleniti harum! Ea atque,
          facilis hic deleniti voluptates suscipit provident earum beatae
          voluptatum. Quo voluptatem nesciunt asperiores dicta molestias.
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iure
          esse fugiat atque vel fuga dignissimos inventore qui deleniti, sed eos
          sint quaerat perferendis recusandae cum tempore ipsum reprehenderit
          eum tempora illum assumenda quis placeat repellendus est. Vitae
          exercitationem maxime, ea, illum similique ipsam tempore culpa
          excepturi reprehenderit est praesentium.
        </p>
      </div>
    </div>
  );
};

export default About;
