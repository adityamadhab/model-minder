import React from 'react';

export function Footer() {
  return (
    <section title="footer" className="w-full bg-yellow-700">
      <footer className="py-12">
        <div className="w-full mx-auto xl:px-20 md:px-10 px-4">
          <div className="w-full sm:flex flex-row gap-x-12 flex-wrap justify-between">
            <div className="flex px-2">
              <div className="text-left">
                <h2 className="text-xl pt-2 font-extrabold font-md text-gray-100 capitalize">Model Minder</h2>
                <p className="pt-2 text-sm font-md text-gray-100">Know your ride.</p>
              </div>
            </div>
            
            <div className="flex flex-col px-2">
              <div className="text-left">
                <h2 className="pt-2 text-sm font-md text-gray-100 capitalize">Follow Us</h2>
                <div className="mt-4 flex flex-row gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    className="h-8 w-8 text-neutral-50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="h-7 w-7 text-neutral-50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    className="h-8 w-8 text-neutral-50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col px-2">
              <div className="text-left">
                <h2 className="pt-2 text-sm font-md text-gray-100 capitalize">Contact Us</h2>
                <div className="mt-4 flex flex-row gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    className="h-8 w-8 text-neutral-50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    className="h-8 w-8 text-neutral-50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </div>
              </div>
            </div>
            
          </div>
          
          <hr color="white" className="border-1 mt-4" />
          
          <div className="m-auto flex flex-col">
            <div className="px-2 mt-4 flex flex-wrap justify-start gap-y-4 gap-x-12">
              <p className="text-sm font-md text-gray-100 capitalize">
                Developed By Team Percy
              </p>
              <p className="text-sm font-md text-gray-100 capitalize">Privacy Policy</p>
              <p className="text-sm font-md text-gray-100 capitalize">Terms and conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};