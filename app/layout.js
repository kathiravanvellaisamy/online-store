import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CeraPots",
  description:
    "We  are reputed for offering a comprehensive range of pots and planters in all the possible sizes, shapes and variety. Our goal is to achieve excellence through sale of highest quality of pots and planters. Providing only excellent quality of products to our customers, we cater to all kind of requirements of our clients, belonging to various sectors. We are committed to magnify customer satisfaction by offering a wide range of exclusive products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <div id="portal"></div>
      </body>
    </html>
  );
}
