// This navbar is to be used when the user is not logged in
import React from "react";
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store";

import Link from "next/link";
import Router from "next/router";

function Navber() {
  const navigation = [
    {
      name: "Cart",
      href: "/cart",
    },
  ];

  // console.log((window.location.pathname + window.location.search).substr(1));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [cart, setCart] = useCartStore((state) => [state.cart, state.setCart]);
  return (
    <>
      <div className="px-6 pt-6 pb-4 shadow-lg lg:px-8 bg-black sticky top-0 z-[9999]">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-white font-Lustria text-xl">
                Miyazaki Hayao
              </span>
            </Link>
          </div>
          <div className="flex gap-x-2 lg:hidden">
            {!mobileMenuOpen && navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold leading-6 px-3 py-2 text-white flex flex-row items-center gap-x-2 rounded-md hover:bg-slate-50/20"
              >
                <ShoppingCartIcon className="h-6 w-6" />

                <div className="text-white font-semibold bg-red-600 rounded-full px-2">
                  {cart?.length}
                </div>
              </Link>
            ))}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-14  md:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold leading-6 px-3 py-2 text-white flex flex-row items-center gap-x-2 rounded-md hover:bg-slate-50/20"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {item.name}
                <div className="text-white font-semibold bg-red-600 rounded-full px-2 ">
                  {cart?.length}
                </div>
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 lg:hidden z-[9999]"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-white font-Lustria text-xl">
                  Miyazaki Hayao
                </span>
              </Link>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => {
                        Router.push(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="text-sm font-bold mt-5 w-fit leading-6 px-3 py-2 text-white flex flex-row items-center gap-x-2 rounded-md hover:bg-slate-50/20"
                    >
                      <ShoppingCartIcon className="h-6 w-6" />
                      {item.name}
                      <div className="text-white font-semibold bg-red-600 rounded-full px-2">
                        {cart?.length}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </>
  );
}

export default Navber;
