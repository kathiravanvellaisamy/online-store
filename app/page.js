import Stripe from "stripe";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  // console.log(products);
  return (
    <main className=" bg-white">
      <Hero />
      <div className="flex h-full flex-col">
        <div className="p-4 flex flex-col mb-20 ">
          <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, productIndex) => {
              return <ProductCard key={productIndex} product={product} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
