import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soybomb.ch"),
  title: "Soybomb",
  description:
    "Soybomb will return to the stage this year, with new music and an equally new four-piece line up.",
  openGraph: {
    title: "Soybomb",
    description:
      "Soybomb will return to the stage this year, with new music and an equally new four-piece line up.",
    images: ["/background.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
