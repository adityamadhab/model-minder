import React from "react";

export function ChooseUs() {
  return (
    <div className="bg-white h-[70vh] w-full mt-12">
      <div className="flex items-center justify-evenly w-[80%] ml-32">
        <img src='/choose.jpg' alt="First" className="h-[30rem] object-cover" />
        <div>
          <h1 className="text-5xl font-bold text-yellow-500 "> Why Choose Us?</h1>
          <div className="ml-8 mt-8 leading-[3rem] font-extrabold text-xl text-zinc-700">
            <li> Lorem ipsum dolor sit.</li>
            <li> Lorem, ipsum dolor.</li>
            <li> Lorem ipsum dolor sit amet.</li>
            <li> Lorem, ipsum dolor.</li>
            <li> Lorem ipsum dolor sit.</li>
          </div>
        </div>
      </div>
    </div>
  );
}