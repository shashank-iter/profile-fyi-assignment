import React from "react";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8"></div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-white lg:justify-start">
                <span className="text-4xl font-Lustria">Miyazaki Hayao</span>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left font-Lato text-lg">
              Your ultimate destination for finding the best products and deals
              online. We provide the best quality products at the best price.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-base text-slate-50 lg:text-right font-Lato ">
          Copyright Miyazaki &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
