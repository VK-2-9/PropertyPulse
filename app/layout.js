import Footer from "./components/Footer";
import Navbare from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Property Pulse",
  description: "Rental, property, real estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbare/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
