import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className=" h-screen bg-white">
      <div className="md:mx-40 mx-5 justify-center py-6 flex flex-col gap-5">
        <h1 className="text-6xl text-slate-500 mt-20  font-extrabold uppercase ">
          Success !
        </h1>
        <p>
          Thanks for your order. It will be on its way in 5-6 business days.
          Once it ships, we’ll text you with the tracking info. If you have any
          questions, please contact at{" "}
          <a href="mailto:sales@cerapots.com">sales@cerapots.com</a>.
        </p>
        <Link href="/" className="text-md font-light ">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
