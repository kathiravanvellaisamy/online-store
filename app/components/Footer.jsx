import Link from "next/link";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";

const navLinks = [
  {
    id: "1",
    item: "About Us",
  },
  {
    id: "2",
    item: "Contact Us",
  },
  {
    id: "3",
    item: "Terms & Condition",
  },
  {
    id: "4",
    item: "Privacy Policy",
  },
  {
    id: "5",
    item: "Refund Policy",
  },
  {
    id: "6",
    item: "Track Order",
  },
  {
    id: "7",
    item: "FAQ's",
  },
  {
    id: "7",
    item: "",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-200 py-3 overflow-hidden">
        <div className="  flex flex-col w-full md:w-[900px] md:mx-auto md:flex-row justify-between items-center space-y-2  ">
          {navLinks.map((navlink) => (
            <Link
              href="#"
              className="uppercase text-zinc-500 font-semibold hover:text-zinc-700"
            >
              {navlink.item}
            </Link>
          ))}
        </div>
      </footer>
      <div className="w-full mt-5 mb-5">
        <div className="md:mx-40 sm:mx-5 flex flex-col space-y-3 md:flex-row justify-between items-center">
          <div>
            <h1 className="hidden md:block uppercase text-gray-600 font-semibold">
              Follow Us
            </h1>
            <div className="flex flex-row justify-between gap-6 py-3">
              <BsInstagram className="cursor-pointer text-xl text-gray-500 hover:text-gray-800" />
              <BsFacebook className="cursor-pointer text-xl text-gray-500 hover:text-gray-800" />
              <BsTwitter className="cursor-pointer text-xl text-gray-500 hover:text-gray-800" />
              <BsPinterest className="cursor-pointer text-xl text-gray-500 hover:text-gray-800" />
              <BsYoutube className="cursor-pointer text-xl text-gray-500 hover:text-gray-800" />
            </div>
          </div>
          <div>
            <span className="text-gray-600">
              {new Date().getFullYear()} &copy; CeraPots . All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
