"use client";

import React from "react";
import { FaWindowClose } from "react-icons/fa";
import useCart from "../(store)/store";
import { useRouter } from "next/navigation";

const Cart = () => {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);
  const router = useRouter();

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: 1,
      };
    });

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  }
  return (
    <div className="fixed left-0 top-0 w-screen h-screen z-50">
      <div
        onClick={closeModal}
        className="bg-transparent inset-0 absolute"
      ></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex items-center p-6 justify-between m-1 text-xl relative">
          <h1 className=" dark:text-gray-800">Cart</h1>
          <FaWindowClose
            onClick={closeModal}
            size={24}
            className="cursor-pointer hover:opacity-70 text-gray-800"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-400 w-2/3"></div>
        </div>
        <div className="p-6 overflow-scroll flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className=" text-gray-800">There is no item in your cart!</p>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex flex-col gap-2 bg-neutral-50 p-4 rounded-md"
                  >
                    <div className="flex   items-center justify-between">
                      <h2 className="text-slate-800 font-semibold">
                        {cartItem.name}
                      </h2>
                      <p className="text-gray-500">₹ {cartItem.cost / 100}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-black">Quantity</p>
                      <span className="py-1 px-3 bg-slate-800 rounded-lg text-white">
                        1
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div
          onClick={checkout}
          className="flex justify-center mx-auto  border border-solid border-slate-600 text-xl p-3 mb-5 w-5/6  rounded cursor-pointer hover:bg-slate-900 hover:text-white"
        >
          <span className="uppercase text-center   text-gray-800">
            {" "}
            Check Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
