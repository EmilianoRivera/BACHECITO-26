import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import "./globals.css";

export const metadata = {
  title: "Bachecito 26",
  description: "Página de Bachecito 26, para el reporte de tus baches",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
     <Cursor />
      </body>
    </html>
  );
}
