"use client";
import useCart from "../(store)/store";

const page = (props) => {
  const { searchParams } = props;
  const { price_id } = searchParams;
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, productInfo, name, description } = product;

  // console.log(product);

  if (!product?.name) {
    window.location.href = "/";
  }

  const handleAddToCart = () => {
    const newItem = {
      quantity: 1,
      price_id: price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  };
  return (
    <div className="bg-white flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full  max-w-[1000px] mx-auto">
        <div className="md:p-2 md:m-5 m-2 md:shadow rounded-md">
          <img
            src={productInfo.images[0]}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 md:p-6 p-4">
          <h3 className="font-extrabold text-3xl text-slate-700 uppercase py-4">
            {name}
          </h3>
          <p className="text-xl text-gray-700 font-bold">₹{cost / 100}</p>
          <p className="text-md">{description}</p>

          <button
            onClick={handleAddToCart}
            className="bg-slate-700 text-white rounded-md py-2 px-4 cursor-pointer mt-3 hover:scale-95 hover:bg-slate-900 ml-auto transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
