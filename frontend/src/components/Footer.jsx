import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <section title="footer" className="w-full bg-yellow-700">
      <footer className="py-12">
        <div className="w-full mx-auto xl:px-20 md:px-10 px-4">
          <div className="w-full sm:flex flex-wrap justify-between gap-y-8">
            <div className="flex px-2 mb-4">
              <div className="text-left">
                <h2 className="text-xl pt-2 font-extrabold font-md text-gray-100 capitalize">Model Minder</h2>
                <p className="pt-2 text-sm font-md text-gray-100">Know your ride.</p>
              </div>
            </div>

            <div className="flex flex-col px-2 mb-4">
              <div className="text-left">
                <h2 className="pt-2 text-sm font-md text-gray-100 capitalize">Follow Us</h2>
                <div className="mt-4 flex space-x-4">
                  <FaLinkedin className='h-6 w-6 text-neutral-50'/>
                  <FaFacebook className='h-6 w-6 text-neutral-50'/>
                  <FaInstagram className='h-6 w-6 text-neutral-50'/>
                  <FaXTwitter className='h-6 w-6 text-neutral-50'/>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-2">
              <div className="text-left">
                <h2 className="pt-2 text-sm font-md text-gray-100 capitalize">Contact Us</h2>
                <div className="mt-2 flex space-x-4">
                  <MdOutlineEmail className='h-6 w-6 text-neutral-50'/>
                  <FaWhatsapp className='h-6 w-6 text-neutral-50'/>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-1 mt-4 border-white" />

          <div className="mt-4 flex flex-wrap justify-start gap-y-4 gap-x-12 px-2">
            <p className="text-sm font-md text-gray-100 capitalize">
              Developed By Team Percy
            </p>
            <p className="text-sm font-md text-gray-100 capitalize">Privacy Policy</p>
            <p className="text-sm font-md text-gray-100 capitalize">Terms and conditions</p>
          </div>
        </div>
      </footer>
    </section>
  );
};
