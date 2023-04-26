"use client";

import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import useCart from "../(store)/store";
import Modal from "../Modal";

const Header = () => {
  const cartItem = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  return (
    <header className="  w-full flex flex-col justify-start shadow">
      {openModal && <Modal />}

      <div className="bg-slate-700 w-full">
        <div className="flex justify-between items-center lg:mx-40 mx-5">
          <span className="py-2 text-white text-sm font-light">
            Free Shipping above ₹499
          </span>
          <span className="hidden md:block py-2 text-white text-sm font-light">
            Call us: +91-8000-8000-91
          </span>
        </div>
      </div>
      <div className=" w-full py-5 bg-neutral-200">
        <div className="z-10   max-w-5xl items-center justify-between font-mono text-sm flex lg:mx-auto mx-5">
          <h1 className="text-3xl font-extrabold hover:text-yellow-800 hover:scale-110 text-green-950">
            <Link href="/">CeraPots</Link>
          </h1>

          <div className="realtive grid group place-items-center">
            {cartItem.length > 0 && (
              <div className="absolute aspect-square h-5 grid place-items-center pointer-events-none  translate-x-2/3 -translate-y-3/4 bg-slate-500 text-white rounded-full  ">
                <p className="text-sm">{cartItem.length}</p>
              </div>
            )}

            <HiShoppingCart
              onClick={setOpenModal}
              size={28}
              className="hover:scale-110 transition group-hover:text-slate-700 text-gray-900 font-extrabold cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
