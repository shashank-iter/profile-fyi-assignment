import React, { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useProductStore, useCartStore, useLikeStore } from "@/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, HeartIcon } from "@heroicons/react/20/solid";
import { isInCart, isLiked } from "@/utils/utilityFunctions";
import Link from "next/link";
import toast from "react-hot-toast";
import SearchBar from "../ecommerce/SearchBar";
import { products } from "@/data/index";

function Card() {
  const [cart, setCart] = useCartStore((state) => [state.cart, state.setCart]);

  const [product, setProduct] = useProductStore((state) => [
    state.product,
    state.setProduct,
  ]);

  const [like, setLike] = useLikeStore((state) => [state.like, state.setLike]);

  useEffect(() => {
    setLike([...like]);
    setCart([...cart]);
    setProduct(products);
  }, []);

  //   console.log(product);

  return (
    <div className="bg-white font-Lato">
      <div className="mx-auto max-w-2xl  sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <SearchBar />

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {product.map((product, idx) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <Link href={`/product-overview?pid=${product.id}`}>
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 sm:aspect-none sm:h-96 z-20 relative">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full hover:scale-110 transform transition-all duration-500 ease-in-out"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-base  text-gray-900 font-semibold font-Lustria">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>

              <div className="flex flex-1 flex-col space-y-2 p-4 ">
                {/* <p className="text-sm italic text-gray-500">
                    {product.options}
                  </p> */}
                <p className="text-base font-medium text-gray-900 flex flex-row items-center mt-2">
                  <div className="w-1/2">{"₹ " + product.price}</div>
                  <div className="flex flex-row w-1/2 justify-end gap-x-3 z-50">
                    {isLiked(like, product) ? (
                      <>
                        <Icon
                          icon="heroicons-solid:heart"
                          className="h-6 w-6 text-red-500 cursor-pointer"
                          onClick={() => {
                            setLike(
                              like.filter((item) => item.id !== product.id)
                            );
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <Icon
                          icon="heroicons-outline:heart"
                          className="h-6 w-6 text-gray-500 cursor-pointer"
                          onClick={() => {
                            setLike([...like, product]);
                          }}
                        />
                      </>
                    )}

                    {!isInCart(cart, product) ? (
                      <>
                        <ShoppingCartIcon
                          className="h-6 w-6 cursor-pointer"
                          onClick={() => {
                            setCart([...cart, product]);
                            toast.success("Added to cart");
                          }}
                        />
                      </>
                    ) : (
                      <>
                        {" "}
                        <CheckCircleIcon className="h-6 w-6" />{" "}
                      </>
                    )}
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
