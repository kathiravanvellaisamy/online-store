import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  //   if (req.method !== "POST") {
  //     return res.status(405);
  //   }
  const body = await req.json();

  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2022-11-15",
    });

    const session = await stripe.checkout.sessions.create({
      success_url: "https://online-store-plum.vercel.app/success",
      cancel_url: "https://online-store-plum.vercel.app/cancel",
      line_items: body.lineItems,
      mode: "payment",
    });
    return NextResponse.json({ session });
  } catch (error) {
    console.log("BROKED");
    console.log(error);
    return new Response("Error", {
      status: 405,
    });
  }
}
