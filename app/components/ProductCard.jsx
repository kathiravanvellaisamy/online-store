"use client";

import { useRouter } from "next/navigation";
import useCart from "../(store)/store";

const ProductCard = (props) => {
  const { product } = props;
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;

  const setProduct = useCart((state) => state.setProduct);

  const router = useRouter();

  const onProductClick = () => {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
    router.push("/product?price_id=" + price_id);
  };
  return (
    <div
      onClick={onProductClick}
      className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer rounded-b-md "
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl text-slate-700">{name}</h3>
          <p className="font-semibold text-xl text-slate-800">₹{cost / 100}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
