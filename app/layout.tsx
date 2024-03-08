import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import "./test.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dennis Moradkhani Portfolio",
  description: "Dennis Moradkhani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <section className="mx-auto max-w-3xl px-4 font-sans sm:px-6 xl:max-w-7xl xl:px-0 antialiased">
          <Navbar />

          <main className="mb-auto px-1">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
