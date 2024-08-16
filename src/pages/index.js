import Link from "next/link";
import React from "react";

export default function Example() {
  return (
    <div className="relative overflow-hidden bg-gray-50 min-h-screen my-[-45px] svg-hero">
      <div
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-7xl"></div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-7xl">
              <span className="block xl:inline font-Lustria">
                Miyazaki Hayao
              </span>{" "}
              {/* <span className="block text-indigo-600 xl:inline font-Lustria">
                online business
              </span> */}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl md:text3xl font-Lato">
              Beyond fashion, a lifestyle.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/products"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 md:py-4 md:px-10 md:text-lg font-Lato"
                >
                  Explore Fashion
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,96L30,112C60,128,120,160,180,160C240,160,300,128,360,133.3C420,139,480,181,540,181.3C600,181,660,139,720,128C780,117,840,139,900,165.3C960,192,1020,224,1080,208C1140,192,1200,128,1260,90.7C1320,53,1380,43,1410,37.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
