import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const metadata = {
  title: "Basel Mohamed | Frontend Engineer",
  description: "Modern high-performance web experiences built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased scroll-smooth">
        {children}
      </body>
    </html>
  );
}
