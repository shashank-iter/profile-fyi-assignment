import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import Layout from "@/components/Layout/Layout";
import Card from "../components/products/Card";
import SearchBar from "@/components/ecommerce/SearchBar";
import { products } from "@/data/index";
import { useProductStore } from "@/store";

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [highToLow, setHighToLow] = useState(false);
  const [lowToHigh, setLowToHigh] = useState(false);
  const [product, setProduct] = useProductStore((state) => [
    state.product,
    state.setProduct,
  ]);

  function handleHighToLow() {
    setHighToLow(true);
    setLowToHigh(false);

    setProduct(
      product.sort((a, b) => {
        return a.price - b.price;
      })
    );
  }

  function handleLowToHigh() {
    setLowToHigh(true);
    setHighToLow(false);

    setProduct(
      product.sort((a, b) => {
        return b.price - a.price;
      })
    );
  }

  function handleClearFilters() {
    setHighToLow(false);
    setLowToHigh(false);
    setProduct(product.sort((a, b) => a.id - b.id));
  }

  return (
    <div className="bg-white">
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl z-50">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 ml-4">
                    <div>
                      <h3 className="text-sm text-gray-900 font-Lato font-semibold">
                        Sort by
                      </h3>
                      <div className="mt-2 border-t border-b border-gray-200 py-2 flex flex-col gap-y-2 ">
                        <div className="text-sm  text-gray-900 font-Lato font-bold">
                          Price
                        </div>
                        <div className="flex flex-row gap-x-2 items-center">
                          <label className="text-sm font-Lato">
                            Low to High
                          </label>
                          <input
                            type="checkbox"
                            checked={highToLow}
                            onChange={handleHighToLow}
                            className="h-4 w-4  accent-gray-900 rounded-full"
                            id="sort"
                          />
                        </div>
                        <div className="flex flex-row gap-x-2 items-center">
                          <label className="text-sm font-Lato">
                            High to Low
                          </label>
                          <input
                            type="checkbox"
                            checked={lowToHigh}
                            onChange={handleLowToHigh}
                            className="h-4 w-4  accent-gray-900 rounded-full"
                            id="sort"
                          />
                        </div>
                        <div>
                          <button
                            type="button"
                            className="text-sm font-medium text-gray-900 font-Lato"
                            onClick={handleClearFilters}
                          >
                            Clear filters
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl py-2 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 font-Lustria">
              Miyazaki Collection
            </h1>
            <p className="mt-4 text-base text-gray-500 font-Lato">
              Beyond fashion, a lifestyle.
            </p>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700 font-Lato">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  <div>
                    <h3 className="text-sm  text-gray-900 font-Lato font-semibold">
                      Sort by
                    </h3>
                    <div className="mt-2 border-t border-b border-gray-200 py-2 flex flex-col gap-y-2 ">
                      <div className="text-sm text-gray-900  font-bold font-Lato ">
                        Price
                      </div>
                      <div className="flex flex-row gap-x-2 items-center">
                        <label className="text-sm  font-Lato">
                          Low to High
                        </label>
                        <input
                          type="checkbox"
                          checked={highToLow}
                          onChange={handleHighToLow}
                          className="h-4 w-4  accent-gray-900 rounded-full"
                          id="sort"
                        />
                      </div>
                      <div className="flex flex-row gap-x-2 items-center">
                        <label className="text-sm font-Lato">High to Low</label>
                        <input
                          type="checkbox"
                          checked={lowToHigh}
                          onChange={handleLowToHigh}
                          className="h-4 w-4  accent-gray-900 rounded-full"
                          id="sort"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="text-sm font-medium text-gray-900 font-Lato"
                          onClick={handleClearFilters}
                        >
                          Clear filters
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
              <Card />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
