import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Realtor254 Diaspora Homes: Buy a home in Kenya, safely, from anywhere",
    template: "%s · Realtor254 Diaspora Homes",
  },
  description:
    "Independent verification and end-to-end concierge for Kenyans abroad buying high-end homes in Kenya. We never hold your money.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <div className="bg-gold-100 py-1.5 text-center text-xs text-forest-900">
          Design mockup with sample data. Not a live service.
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
